// import image from '../../public/assets/images/home-img/accessHomeImg.jpg'
import pageData from "@/pages/page-data";

import Image from 'next/image';
import { parse } from "path";
export default function Home() {

  return (
    <>
      <div className="homeMain">
        <div className="homeBanner">
          <div className="homeBannerWrap">
            <div className="homeBannerInner">
              <div className="col col3">
                <div className="colInner">
                  {pageData.sale_offer_data && (
                    <div className="col3InnerCol saleCol">
                      <div
                        className="title"
                        dangerouslySetInnerHTML={{ __html: pageData.sale_offer_data.saleTitle }}
                      ></div>
                      {pageData.sale_offer_data.offers.map((offer, index) => (
                        <div
                          key={index}
                          className="offer"
                          dangerouslySetInnerHTML={{ __html: offer }}
                        ></div>
                      ))}
                    </div>
                  )}

                  {pageData.shop_link_card_data && (
                    <div className="col3InnerCol">
                      <Image
                        src={'/assets/images/home-img/accessHomeImg.jpg'}
                        width={1105}
                        height={580}
                        alt={pageData.shop_link_card_data.image.alt}
                      />

                      <div className="overlaytxtWrap">
                        <div className="overlaytxt">
                          <div
                            className="accTitle"
                            dangerouslySetInnerHTML={{ __html: pageData.shop_link_card_data.text }}
                          ></div>
                          <div className="btn">
                            <a
                              className="laylaButtonLink"
                              href={pageData.shop_link_card_data.link.url}
                              dangerouslySetInnerHTML={{
                                __html: pageData.shop_link_card_data.link.text,
                              }}
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {pageData.mem_matt_link_card_data && (
                <div className="col bannerSlide">
                  <div className="colInner">
                    <img
                      src={pageData.mem_matt_link_card_data.image.src}
                      alt={pageData.mem_matt_link_card_data.image.alt}
                      width={1105}
                      height={580}
                      loading="lazy"
                    />
                    <div className="overlaytxtWrap end">
                      <div className="overlaytxt">
                        <div
                          className="title"
                          dangerouslySetInnerHTML={{
                            __html: pageData.mem_matt_link_card_data.text,
                          }}
                        ></div>
                        <div className="btn">
                          <a
                            className="laylaButtonLink"
                            href={pageData.mem_matt_link_card_data.link.url}
                            dangerouslySetInnerHTML={{
                              __html: pageData.mem_matt_link_card_data.link.text,
                            }}
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {pageData.hyb_matt_link_card_data && (
                <div className="col col2">
                  <div className="colInner">
                    <Image
                      src={'/assets/images/home-img/hybridHomeImg.jpg'}
                      alt={pageData.hyb_matt_link_card_data.image.alt}
                      width={1105}
                      height={580}
                    />
                    <div className="overlaytxtWrap end">
                      <div className="overlaytxt">
                        <div
                          className="title"
                          dangerouslySetInnerHTML={{
                            __html: pageData.hyb_matt_link_card_data.text,
                          }}
                        ></div>
                        <div className="btn">
                          <a
                            className="laylaButtonLink"
                            href={pageData.hyb_matt_link_card_data.link.url}
                            dangerouslySetInnerHTML={{
                              __html: pageData.hyb_matt_link_card_data.link.text,
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
        {pageData.lottie_flippable_sec_data && (
          <section className="flipSec">
            <div className="flipInner">
              <div className="flipLeft">
                <div
                  className="subTitle"
                  dangerouslySetInnerHTML={{ __html: pageData.lottie_flippable_sec_data.sec_title }}
                ></div>
                <div
                  className="title"
                  dangerouslySetInnerHTML={{ __html: pageData.lottie_flippable_sec_data.sec_sub_title }}
                ></div>
                <div className="flipLeftImg">
                  {pageData.lottie_flippable_sec_data.products.map((item) => (
                    <div
                      key={item.product_id}
                      className="flipLeftImgCol"
                      onClick={() => (selected_flip_matt = item)}
                    >
                      <Image
                        width={item.thumbnail.width}
                        height={item.thumbnail.height}
                        src={item.thumbnail.src}
                        alt={item.thumbnail.alt}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flipRight">
                <div className="flipRightInnerWrap">
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
                </div>
              </div>
            </div>
          </section>
        )}
        {pageData.reviewSlides && (
          <section className="reviewslideMin paddTB">
            <div className="globalContainer">
              <div className="reviewslideMin__inner">
                {/* Pass the reviewSlidesArr as a prop to the React component */}
                {/* <ReviewSliderNew reviewSlidesArr={pageData.reviewSlides} /> */}
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
                width={916}
                height={1133}
                src="/assets/images/global-img/newImages/reviewImg.jpg"
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
                width={916}
                height={1133}
                src="/assets/images/global-img/newImages/homeFreePillow.jpg"
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
                    width={476}
                    height={338}
                    src="/assets/images/global-img/newImages/freePillowImg.png"
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
                src="/assets/images/global-img/newImages/whyCopper.jpg"
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
                src="/assets/images/global-img/newImages/flipFirm.jpg"
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


      </div >
    </>
  );
};



