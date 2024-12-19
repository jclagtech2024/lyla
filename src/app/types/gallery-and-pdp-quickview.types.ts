import { Faq, ImageType, SlideoutKey, VideoType } from "./common.types";

export interface GalleryAndPdpQuickviewData {
    id: number;
    product_gallery_data: ProductGalleryData[];
    slideout_specifications_data: SlideoutSpecificationsData;
    slideout_faqs_data: SlideoutFaqData;
    slideout_flippable: SlideoutPdpInfoSecData;
    slideout_lifetime_warranty: SlideoutPdpInfoSecData;
    slideout_sale_offer: SlideoutSaleOfferData;
    slideout_reviews: SlideoutReviews;
    quickview_specifications_data: QuickviewSpecificationsData;
    quickview_features: QuickviewFeturesData;
}

export interface SlideVideo {
    text?: string;
    singleBtn?: boolean;
    poster: Img;
    vdo_url: string;
}

export interface ProductGalleryData {
    is_video_slide: boolean;
    frontPlay?: boolean;
    isFull?: boolean;
    hideZoomIcon?: boolean;
    expandDark?: boolean;
    popImg?: ImageType;
    slide_img?: ImageType;
    mobSlide?: {
        img?: ImageType;
        vdo?: VideoType;
    };
    popDot?: string;
    slide_dot: string;
    rated?: ImageType;
    slideOutType?: SlideoutKey;
    slide_vdo?: {
        text?: string;
        singleBtn?: boolean;
        vdo: VideoType;
    };
    is_AR?: boolean;
}

export interface Img {
    url: string;
    alt: string;
    height: number;
    width: number;
}

export interface SlideoutSpecificationsData {
    link_title: string;
    slideout_key: SlideoutKey;
    slideout_heading: string;
    slideout_sub_heading: string;
    slideout_html: string;
}

export interface SlideoutFeaturesData {
    link_title: string;
    slideout_key: SlideoutKey;
    slideout_heading: string;
    slideout_sub_heading: string;
    slideout_html: string;
}

export interface SlideoutGuaranteesData {

}

export interface SlideoutFaqData {
    link_title?: string;
    slideout_key?: SlideoutKey;
    slideout_heading?: string;
    slideout_sub_heading?: string;
    page_heading?: string;
    show_unanswered_section?: boolean;
    faqs: Faq[];
}

export interface SlideoutPdpInfoSecData {
    link_title: string;
    link_icon?: ImageType;
    slideout_key: SlideoutKey;
    page_heading?: string;
    slideout_heading: string;
    slideout_sub_heading: string;
    slideout_html: string;
}

// export interface SlideoutLifetimeWarrantyData {
//     link_title:           string;
//     slideout_key:         SlideoutKey;
//     page_heading?:        string;
//     slideout_heading:     string;
//     slideout_sub_heading: string;
//     slideout_html:        string;
// }

export interface SlideoutSaleOfferData {
    link_title: string;
    link_subTitle: string;
    slideout_key: SlideoutKey;
    page_heading?: string;
    link_img: ImageType;
    slideout_html: string;
}

export interface SlideoutReviews {
    link_title: string;
    slideout_key: SlideoutKey;
    page_heading?: string;
    slideout_heading: string;
    slideout_sub_heading: string;
}

export interface QuickviewSpecificationsData {
    specifications: string[];
}

export interface QuickviewFeturesData {
    features: string[];
}

