import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import pageData from '../../public/assets/new-data-store/single-pages/home-new/page-data';
import products from '../../public/assets/new-data-store/products';
import { environment } from '../../src/environments/environment';
import PopupService from '../app/services/popup.service';

// Dynamic imports for components
const Carousel = dynamic(() => import('react-owl-carousel'), { ssr: false });
const PictureTag = dynamic(() => import('../../components/Pictu-reTag'));
const ReviewSlider = dynamic(() => import('../../components/ReviewSlider'));
const ProductCard = dynamic(() => import('../../components2024/ProductCard'));
const AffirmSec = dynamic(() => import('../../components/AffirmSec'));
const VideoTag = dynamic(() => import('../../components/VideoTag'));
const RecommendedBy = dynamic(() => import('../../components2024/RecommendedBy'));
const FirmEdgeDesignIconSvg = dynamic(() => import('../../components/svgs/FirmEdgeDesignIconSvg'));
const MemFoamLottieFlippable = dynamic(() => import('../../components2024/MemFoamLottieFlippable'));
const ReviewSliderNew = dynamic(() => import('../components/review-slider-new/review-slider-new'));

const Home = () => {
    const [currentPopValue, setCurrentPopValue] = useState(undefined);
    const [selectedFlipMatt, setSelectedFlipMatt] = useState(null);
    const router = useRouter();

    const popupService = new PopupService();

    useEffect(() => {
        // Initialize SEO and other schemas
        const SEOService = import('../../services/seoService');
        SEOService.then((service) => {
            service.default.initializeSEO(pageData.SEOData);
            service.default.initializeBreadCrumbSchema(pageData.breadcrumbSchema);
            service.default.initializeHomePageSchema(pageData.imageSchema);
            service.default.initializeFaqSchema({});
            service.default.initializeBlogSchema({});
            service.default.initializeProdSchema({});
        });

        // Set selected flip mattress
        if (pageData.lottie_flippable_sec_data) {
            setSelectedFlipMatt(pageData.lottie_flippable_sec_data.products?.[0]);
        }

        // Scroll callback for popup
        const handleScroll = () => {
            if (currentPopValue) return;
            if (!Cookies.get('salepopup')) {
                Cookies.set('salepopup', 'disable', { path: '/' });
                popupService.setShowPopupValue('SALE_POP');
            }
            window.removeEventListener('scroll', handleScroll);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [currentPopValue]);

    const handleMouseLeave = useCallback(() => {
        const routes = [
            '/',
            '/cart/',
            '/layla-sms/',
            '/customer-reviews/',
            '/faqs/',
            '/refer-and-reward/',
            '/mattresses/',
            '/compare/',
            '/pillows/',
            '/bases/',
            '/about-layla/',
            '/mattress-financing/',
            '/privacy-policy/',
            '/terms-and-conditions/',
            '/contact-us/',
            '/my-account/',
            '/track/',
            '/benefits-layla-sleep/',
            '/why-copper/',
            '/benefit-2in1/',
            '/pain-relief/',
            '/back-pain-mattress/',
            '/sleep-pain/',
            '/sleep-cool/',
            '/side-sleeper-mattress/',
            '/mattress-sale-bundle/',
            '/spring-sale/',
            '/memorial-day-sale/',
            '/black-friday-mattress-sale/',
            '/cyber-monday-mattress-sale/',
            '/holiday-mattress-sale/',
            '/new-years-mattress-sale/',
            '/spring-mattress-sale/',
        ];

        if (
            !routes.includes(router.pathname) &&
            !router.pathname.includes('/checkout/') &&
            !router.pathname.includes('/product/') &&
            (!currentPopValue || currentPopValue === '')
        ) {
            if (!Cookies.get('showklaviyoformpop') && !Cookies.get('showklaviyoformpop2')) {
                Cookies.set('showklaviyoformpop', 'disable', { path: '/' });
                popupService.setShowPopupValue('KLAV_1');
            }
        }

        if (
            (routes.includes(router.pathname) || router.pathname.includes('/product/')) &&
            (!currentPopValue || currentPopValue === '')
        ) {
            if (!Cookies.get('showklaviyoformpop') && !Cookies.get('showklaviyoformpop2')) {
                Cookies.set('showklaviyoformpop2', 'disable', { path: '/' });
                popupService.setShowPopupValue('KLAV_2');
            }
        }

        window.removeEventListener('mouseleave', handleMouseLeave);
    }, [router.pathname, currentPopValue]);

    useEffect(() => {
        window.addEventListener('mouseleave', handleMouseLeave);
        return () => {
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [handleMouseLeave]);

    return (
        <>
        <Head>
        <title>Home </title>
        < link rel = "stylesheet" href = "/styles/home2.component.scss" />
            </Head>
            <div>
    {/* Carousel and Components Rendering */ }
    <Carousel {
        ...{
            loop: true,
            items: 4,
            margin: 20,
            lazyLoad: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            dots: false,
            navSpeed: 700,
            nav: true,
            responsive: {
                991: { items: 4, margin: 30 },
                768: { items: 3, margin: 20 },
                545: { items: 2 },
                0: { items: 1 },
            },
            responsiveRefreshRate: 1,
        }
    } >
        {/* Map through productData to render slides */ }
    {
        products.map((product, index) => (
            <ProductCard key= { index } product = { product } />
          ))
    }
    </Carousel>

        < ReviewSliderNew reviewSlides = { pageData.reviewSlides } />
            <VideoTag video={ pageData.singlevdo1 } />
                < RecommendedBy />
                <FirmEdgeDesignIconSvg />
                < MemFoamLottieFlippable data = { selectedFlipMatt } />
                    </div>
                    </>
  );
};

export default Home;
