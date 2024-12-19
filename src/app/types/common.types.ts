import { ShopMoreProds } from "./common-prod-page-data.interface";
import { ProductGalleryData, SlideoutFaqData, SlideoutFeaturesData, SlideoutGuaranteesData, SlideoutPdpInfoSecData, SlideoutSaleOfferData, SlideoutSpecificationsData } from "./gallery-and-pdp-quickview.types";
import { ProductColor, ProductSize, ProdVariationWithQuantity } from "./product.types";

export type SlideoutKey = "FEATURES"
    | "GUARANTEES"
    | "DENSITY"
    | "ACCIDENT"
    | "SHIPPING"
    | "RECOMMENDED"
    | "SLIDEOUT_CART"
    | "SPECIFICATIONS"
    | "FAQ"
    | "REVIEWS"
    | "FLIPPABLE"
    | "LIFETIME_WARRANTY"
    | "SALE_OFFER"
    | "QUICKVIEW"
    | "GALLERY"
    | "MODAL_VIDEO"
    | "SALE"
    | "EXPLORE";
// export enum SlideoutKey {
//     Features = "FEATURES",
//     Guarantees = "GUARANTEES",
//     Shipping = "SHIPPING",
//     Recommended = "RECOMMENDED",
//     Slideout_Cart = "SLIDEOUT_CART",
//     Specifications = "SPECIFICATIONS",
//     Faq = "FAQ",
//     Reviews = "REVIEWS",
//     Flippable = "FLIPPABLE",
//     Lifetime_Warranty = "LIFETIME_WARRANTY",
//     Sale_Offer = "SALE_OFFER",
//     Quickview = "QUICKVIEW",
//     Gallery = "GALLERY",
//     ModalVideo = "MODAL_VIDEO",
//     Sale = "SALE",
//     Explore = "EXPLORE",
// }

export interface LinkType {
    isSlideout?: boolean;
    slideoutKey?: SlideoutKey;
    className?: string;
    text?: string;
    url?: string;
    disabled?: boolean;
    icon?: ImageType;
}

export interface ImageType {
    src: string;
    src2?: string;
    alt: string;
    height?: number;
    width?: number;
    isGIF?: boolean;
    sizes?: Array<number>;
    aspectRatio?: number;
}

export interface VideoType {
    autoplay?: string;
    height?: number;
    width?: number;
    loop?: boolean;
    muted?: string;
    preload?: string;
    poster: string;
    videoSrc: string;
    videoType: string;
    alt?: string;
    vdoClass?: string;
}

export interface Faq {
    question: string;
    answer: string;
    isExpanded: boolean;
}

export interface BeddingAccessory {
    sec_title: string;
    products: ShopMoreProds[];
}

export interface MoreProductData {
    product_id: number;
    descriptiveTxt: string;
    shopBtnTxt: string;
}

// slideout data types
export interface SlideoutSpecifications {
    type: "SPECIFICATIONS";
    data: SlideoutSpecificationsData;
}
export interface SlideoutFaq {
    type: "FAQ";
    data: SlideoutFaqData;
}
export interface SlideoutReviews {
    type: "REVIEWS";
    data: {
        product_id: number;
    }
}
export interface SlideoutFlippable {
    type: "FLIPPABLE";
    // data: SlideoutPdpInfoSecData;
}
export interface SlideoutLifetimeWarranty {
    type: "LIFETIME_WARRANTY";
    data: SlideoutPdpInfoSecData
}
export interface SlideoutSaleOffer {
    type: "SALE_OFFER";
    data: SlideoutSaleOfferData;
}
export interface SlideoutQuickview {
    type: "QUICKVIEW";
    data: {
        product_id: number;
        hide_on_modal_change: boolean;
    }
}
export interface SlideoutGallery {
    type: "GALLERY";
    data: {
        galleryData: ProductGalleryData[];
        active_index: number;
        sizes?: number[];
    }
}
export interface SlideoutModal {
    type: "MODAL_VIDEO";
    data: {
        vdo_url: string;
    }
}
export interface SlideoutSlideoutCart {
    type: "SLIDEOUT_CART";
    data: {
        added_items: ProdVariationWithQuantity[]
    }
}

// currently unused slideouts
export interface SlideoutFeatures {
    type: "FEATURES";
}
export interface SlideoutGuarantees {
    type: "GUARANTEES";
}
export interface SlideoutDensity {
    type: "DENSITY";
}
export interface SlideoutAccident {
    type: "ACCIDENT";
}
export interface SlideoutShipping {
    type: "SHIPPING";
}
export interface SlideoutRecommended {
    type: "RECOMMENDED";
}
export interface SlideoutSale {
    type: "SALE";
}
export interface SlideoutExplore {
    type: "EXPLORE";
}

export type SlideOutData = (
    SlideoutSpecifications
    | SlideoutFaq
    | SlideoutReviews
    | SlideoutFlippable
    | SlideoutLifetimeWarranty
    | SlideoutSaleOffer
    | SlideoutQuickview
    | SlideoutGallery
    | SlideoutModal
    | SlideoutFeatures
    | SlideoutGuarantees
    | SlideoutShipping
    | SlideoutRecommended
    | SlideoutSlideoutCart
    | SlideoutSale
    | SlideoutExplore
    | SlideoutDensity
    | SlideoutAccident
) & {
    is_top?: boolean;
};

export interface QuickViewSelectedVariationData {
    size: ProductSize;
    color?: ProductColor;
    quantity: number;
    main_prod_id: number;
}

export interface PriceType {
    sale_price: number;
    regu_price: number;
}

export interface ComparisonProdData {
    product_id: number;
    prd_image?: string;
    lottie_files?: string[];
    mobTitle?: string;
    mobImg?: string;
    desc?: string;
    lottie_btn_icon?: string;
    lottie_btn_txt?: string;
    title: string;
    compare_points: { content?: string, img?: string, image?: ImageType, style?: string, className?: string[], }[];
    shop_btn_txt: string;
}
