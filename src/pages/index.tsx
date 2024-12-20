import { Key, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import './index.scss';
import './homedata/page-data.new'
import PageData from './page-data';
import VideoPlayer from "@/components/video-tag/video-tag";
import Banner from "@/components/affirm-sec/affirm-sec";

const Home = () => {
  const [selectedFlipMatt, setSelectedFlipMatt] = useState(
    PageData?.lottie_flippable_sec_data?.products?.[0]
  );
  const [currentPopValue, setCurrentPopValue] = useState(undefined);
  const router = useRouter();

  useEffect(() => {

    const handleScroll = () => {
      if (currentPopValue !== undefined) return;
      if (!document.cookie.includes("salepopup")) {
        document.cookie = "salepopup=disable; path=/";

      }
      window.removeEventListener("scroll", handleScroll);
    };


    const handleMouseLeave = () => {
      const excludedRoutes = ["/", "/cart/", "/checkout/"];
      if (!excludedRoutes.includes(router.pathname)) {
        document.cookie = "showklaviyoformpop=disable; path=/";
        // setCurrentPopValue("KLAV_1");
      }
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };

    window.addEventListener("scroll", handleScroll);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [currentPopValue, router.pathname]);

  return (
    <div className="homeMain">
      <div className="homeBanner">
        <div className="homeBannerWrap">
          <div className="homeBannerInner">
            <div className="col col3">
              <div className="colInner">
                {PageData.sale_offer_data && (
                  <div className="col3InnerCol saleCol">
                    <div
                      className="title"
                      dangerouslySetInnerHTML={{ __html: PageData.sale_offer_data.saleTitle }}></div>
                    {PageData.sale_offer_data.offers.map((offer: any, index: Key | null | undefined) => (
                      <div
                        key={index}
                        className="offer"
                        dangerouslySetInnerHTML={{ __html: offer }}
                      ></div>
                    ))}
                  </div>
                )}
                {PageData.shop_link_card_data && (
                  <div className="col3InnerCol">
                    <Image
                      src={'/assets/images/home-img/accessHomeImg.jpg'}
                      width={350}
                      height={260}
                      alt={PageData.shop_link_card_data.image.alt}
                    />
                    <div className="overlaytxtWrap">
                      <div className="overlaytxt">
                        <div
                          className="accTitle"
                          dangerouslySetInnerHTML={{ __html: PageData.shop_link_card_data.text }}
                        ></div>
                        <div className="btn">
                          <a
                            className="laylaButtonLink"
                            href={PageData.shop_link_card_data.link.url}
                            dangerouslySetInnerHTML={{
                              __html: PageData.shop_link_card_data.link.text,
                            }}
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {PageData.mem_matt_link_card_data && (
              <div className="col bannerSlide">
                <div className="colInner">
                  <img
                    src={PageData.mem_matt_link_card_data.image.src}
                    alt={PageData.mem_matt_link_card_data.image.alt}
                    width={770}
                    height={580}
                    loading="lazy"
                  />
                  <div className="overlaytxtWrap end">
                    <div className="overlaytxt">
                      <div
                        className="title"
                        dangerouslySetInnerHTML={{
                          __html: PageData.mem_matt_link_card_data.text,
                        }}
                      ></div>
                      <div className="btn">
                        <a
                          className="laylaButtonLink"
                          href={PageData.mem_matt_link_card_data.link.url}
                          dangerouslySetInnerHTML={{
                            __html: PageData.mem_matt_link_card_data.link.text,
                          }}
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {PageData.hyb_matt_link_card_data && (
              <div className="col col2">
                <div className="colInner">
                  <Image
                    src={'/assets/images/home-img/hybridHomeImg.jpg'}
                    alt={PageData.hyb_matt_link_card_data.image.alt}
                    width={330}
                    height={580}
                  />
                  <div className="overlaytxtWrap end">
                    <div className="overlaytxt">
                      <div
                        className="title"
                        dangerouslySetInnerHTML={{
                          __html: PageData.hyb_matt_link_card_data.text,
                        }}
                      ></div>
                      <div className="btn">
                        <a
                          className="laylaButtonLink"
                          href={PageData.hyb_matt_link_card_data.link.url}
                          dangerouslySetInnerHTML={{
                            __html: PageData.hyb_matt_link_card_data.link.text,
                          }}
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {PageData.lottie_flippable_sec_data && (
        <section className="flipSec">
          <div className="flipInner">
            <div className="flipLeft">
              <div
                className="subTitle"
                dangerouslySetInnerHTML={{ __html: PageData.lottie_flippable_sec_data.sec_title }}
              ></div>
              <div
                className="title"
                dangerouslySetInnerHTML={{ __html: PageData.lottie_flippable_sec_data.sec_sub_title }}
              ></div>
              <div className="flipLeftImg">
                {PageData.lottie_flippable_sec_data.products.map((item: { product_id: Key | null | undefined; }) => (
                  <div
                    key={item.product_id}
                    className="flipLeftImgCol"
                  // onClick={() => (selected_flip_matt = (item))}
                  >
                    {/* <Image
                      width={item.thumbnail.width}
                      height={item.thumbnail.height}
                      src={item.thumbnail.src}
                      alt={item.thumbnail.alt}
                    /> */}
                  </div>
                ))}
              </div>
            </div>
            <div className="flipRight">
              {/* <div className="flipRightInnerWrap">
                <app-recommendedby data={page_data.lottie_flippable_sec_data.recommended_by} />
                <div className="flipRightInner">
                  <div className="flipRightCont">
                    <div
                      className="title"
                      dangerouslySetInnerHTML={{ __html: selected_flip_matt.title }}
                    ></div>
                    <div
                      className="des"
                      dangerouslySetInnerHTML={{ __html: selected_flip_matt.description }}
                    ></div>
                    {!selected_flip_matt.hide_shop_link && (
                      <div className="btnWrap">
                        <a
                          href={selected_flip_matt.shop_link.url}
                          dangerouslySetInnerHTML={{ __html: selected_flip_matt.shop_link.text }}
                        ></a>
                      </div>
                    )}
                    <div className="icon">
                      <app-firmedgedesign-icon-svg />
                    </div>
                  </div>
                  <div className="flipRightLottie">
                    {(selected_flip_matt.product_id === 118 ||
                      selected_flip_matt.product_id === 611172 ||
                      selected_flip_matt.product_id === 813990 ||
                      selected_flip_matt.product_id === 981921) && (
                        <app-mem-foam-lottie-flippable />
                      )}
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      )}
      {PageData.reviewSlides && (
        <section className="reviewslideMin paddTB">
          <div className="globalContainer">
            <div className="reviewslideMin__inner">

              {/* <ReviewSliderNew reviewSlidesArr={PageData.reviewSlides} /> */}
            </div>
          </div>
        </section>
      )}
      <section className="whoTalk">
        <div className="whoTalkInner">
          <div className="title">
            Look who’s <br />
            talking.
          </div>
          <div className="img">
            <Image
              loading="eager"
              width={1016}
              height={150}
              src="/assets/images/global-img/reviewImg.jpg"
              alt="Pillow"
            />
          </div>
        </div>
      </section>
      <section className="lfSec mb100">
        <div className="lfSec__inner">
          {/* Left Section ,,,,,,,,, check the image which is app-pictur-tag=PictureTag*/}
          <div className="lfSec__inner--left">
            <Image
              loading="eager"
              width={750}
              height={500}
              src="/assets/images/global-img/homeFreePillow.jpg"
              alt="Pillow"
            />
          </div>
          {/* Right Section ,,,,,,,,, check the image which is app-pictur-tag=PictureTag*/}
          <div className="lfSec__inner--right">
            <div className="lfSec__inner--right__inner">
              <h3>
                BLACK <span className="colororg">FRIDAY</span>
                <span className="off">up to $200 OFF Mattresses</span>
              </h3>
              <h4>Free pillows with any mattress.</h4>
              <p className="des">
                Purchase any model and size mattress and get 2 Layla Memory Foam
                Pillows FREE. <br />
                Now through Black Friday.
              </p>
              {/* Button and Image,,,,,,,,, check the image which is app-pictur-tag=PictureTag */}
              <div className="btnImg">
                <a href="/product/memory-foam-mattress/">SHOP MATTRESSES</a>
                <Image
                  loading="eager"
                  width={300}
                  height={200}
                  src="/assets/images/global-img/freePillowImg.png"
                  alt="Left Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="homeBoxes mb100">
        <div className="homeBoxes">
          {/* Left Box,,,,,,,,, check the image which is app-pictur-tag=PictureTag */}
          <div className="homeBox homeBoxLeft">
            <Image
              width={750}
              height={450}
              src="/assets/images/global-img/whyCopper.jpg"
              alt="Layla Weighted Blanket"
            />
            <div className="bgOverlay"></div>
            <div className="boxContOverlay">
              <div className="subTxt">MATTRESS TECHNOLOGY</div>
              <div className="title">Why Copper?</div>
              <div className="btn">
                <a className="laylaButtonLink" href="/why-copper/">
                  LEARN
                </a>
              </div>
            </div>
          </div>
          {/* Right Box,,,,,,,,, check the image which is app-pictur-tag=PictureTag */}
          <div className="homeBox homeBoxRight">
            <Image
              width={750}
              height={450}
              src="/assets/images/global-img/flipFirm.jpg"
              alt="Layla Weighted Blanket"
            />
            <div className="bgOverlay"></div>
            <div className="boxContOverlay">
              <div className="subTxt">MATTRESS FEATURES</div>
              <div className="title">
                Flippable Firmness<sup>TM</sup>
              </div>
              <div className="btn">
                <a className="laylaButtonLink" href="/benefit-2in1/">
                  LEARN
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Banner></Banner>
      <br></br>
      <br></br><br></br><br></br>
      <section className="fullImg mb100">
        <div className="fullImgInner">
          <div className="fullImgBox">
            <VideoPlayer
              height="700px"
              width="1800px"
              preload="auto"
              autoplay={true}
              loop={true}
              muted={false}
              poster="assets\images\global-img\hybrid-vid-poster.jpg"
              videoSrc="assets\video\LAYLA_V_0476.mp4"
              videoType="video/mp4"
            />
            {/* <video
              height={singlevdo1?.height}
              width={singlevdo1?.width}
              preload={singlevdo1?.preload}
              autoPlay={singlevdo1?.autoplay}
              loop={singlevdo1?.loop}
              muted={singlevdo1?.muted}
              poster={singlevdo1?.poster}
              src={singlevdo1?.videoSrc}

            ></video> */}
            <div className="boxContOverlay">
              <div className="title">
                Sleep Better. Live Better. Guaranteed.
              </div>
            </div>
          </div>
        </div>
      </section>


    </div >
  );
};

export default Home;




