import { pictureTag } from "../models/global-models";
import { ImageType, LinkType, VideoType } from "./common.types";

export interface SeoTags {
    name?: string;
    property?: string;
    content: string;
}
export interface SeoData {
    title: string;
    tags: SeoTags[];
}

export interface BreadcrumbSchema {
    "@context": string;
    "@type": string;
    itemListElement: ItemListElement[];
}

export interface ItemListElement {
    "@type": string;
    position: number;
    name: string;
    item: string;
}

export interface FAQSchema {
    "@context": string;
    "@type": string;
    mainEntity: MainEntity[];
}

export interface MainEntity {
    "@type": string;
    name: string;
    acceptedAnswer: AcceptedAnswer;
}

export interface AcceptedAnswer {
    "@type": string;
    text: string;
}

export interface ImageSchema {
    "@context": string;
    "@type": string;
    author: string;
    contentUrl: string;
    datePublished: String;
    description: string;
    name: string;
    alternateName?: string;
    logo?: string;
    sameAs?: string[];
}

export interface ProductOfferBarData {
    className?: boolean;
    offer?: Offer;
    guarantee?: Guarantee;
}
export interface Offer {
    text: string;
    sub_text?: string;
}
export interface Guarantee {
    text?: string;
    button_text?: string;
    hide_guarantee_btn?: boolean;
}

export interface RecommendedBy {
    title: boolean;
    icons: ImageType[]
}

export interface specialReview {
    icon: ImageType;
    txt: string;
};

export interface TitleImgSec {
    preTitle?: string;
    title: string;
    leftImg: ImageType;
    rightImg: ImageType;
    title2: string;
    des: string;
}

export interface SingleTitleImgSec {
    title: string;
    image: ImageType;
    des: string;
}

export interface VdoWithIcon {
    vdo: VideoType;
    icon: ImageType;
}

export interface IconTitleDesc {
    icon: ImageType;
    title: string;
    desc: string;
}
export interface ImgVdoTitleDesc {
    vdo?: VideoType;
    img?: ImageType;
    title: string;
    desc: string;
}

export interface FullImgSec {
    className?: string
    image: ImageType;
    title: string;
    desc: string;
    link: LinkType;
}

export interface Buyer {
    name: string;
    img: ImageType;
    type: string;
}

export interface ReviewSlideData {
    title: string;
    buyer: Buyer;
    review: string;
}

export interface MattressLayerDescription {
    heading: string;
    description: string;
    isOpen: boolean
}

export interface ShopMoreProds {
    product_id: number;
    title?: string;
    desc?: string;
    thumbnail?: ImageType;
    descriptiveTxt?: string;
    shopBtnTxt: string;
}

export interface pdpSlide {
    is_video_slide: boolean;
    expandDark?: boolean;
    is_video_included?: boolean;
    is_AR?: boolean;
    fullTrue?: boolean;
    slideOutType?: ("modal") | (string);
    popImg?: ImageType;
    slide_img?: ImageType;
    slide_vdo?: {
        text?: string;
        poster: ImageType;
        vdo_url: string;
    };
    popDot?: string;
    slide_dot?: string;
}

export interface leftrightVdo {
    type: string;
    vdo: VideoType;
    boxtitle: string;
    boxdesc: string;
    boxBtn?: {
        type: string;
        link: string;
        title: string;
        role?: string;
        ariaLabel?: string;
    };
    boxIcon?: Array<boxIcon>;
    boxVideo?: VideoType;
    boxImg?: pictureTag;
    playvdo?: string;
    sfirm?: string;
    prodID?: number;
}

export interface leftrightCarousel {
    type: string;
    slides: Array<pdpSlide>;
    boxtitle: string;
    boxdesc: string;
    boxBtn?: {
        type: string;
        link: string;
        title: string;
        role?: string;
        ariaLabel?: string;
    };
    boxIcon?: Array<boxIcon>;
    boxVideo?: VideoType;
    playvdo?: string;
    sfirm?: string;
    prodID?: number;
}

export interface boxIcon {
    content?: string;
    icon?: ImageType;
}
export interface leftrightBox {
    type?: string;
    img?: ImageType;
    vdo?: VideoType;
    subImg?: ImageType;
    hasImgArray?: boolean;
    imgArray?: ImageType[];
    boxtitle?: string;
    boxdesc?: string;
    boxdesc2?: boolean;
    boxId?: string;
    isnotRadius?: boolean;
    boxDescTabInd?: boolean;
    boxBtn?: {
        type?: string;
        link?: string;
        title?: string;
        hasClass?: boolean;
        dnmBtn?: string;
        role?: string;
        ariaLabel?: string;
    };
    hasBoxBtnArr?: boolean;
    boxBtnArr?: {
        type?: string;
        link?: string;
        title?: string;
        hasClass?: boolean;
        dnmBtn?: string;
        role?: string;
        ariaLabel?: string;
    }[];
    boxIcon?: Array<boxIcon>;
    iconWidth?: boolean;
    boxVideo?: VideoType;
    boxImg?: ImageType;
    playvdo?: string;
    videoUrl?: string;
    sfirm?: string;
    prodID?: number;
    isScroll?: boolean;
    isDark?: boolean;
    role?: string;
    ariaLabel?: string;
    isAlignTop?: boolean;
    preTitleTxt?: string;
    link?: LinkType;
    headingTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | string;
}

export interface pageBanner {
    title: string;
    preTitle?: string;
    subTitle?: string;
    des: string;
    quote?: string;
    image: ImageType;
    specialRev?: {
        image: ImageType,
        text: string,
    }[]
}
export interface salepageBanner {
    title: string;
    preTitle?: string;
    subTitle?: string;
    image: ImageType;
    links: LinkType[];
}
export interface pageBanner2 {
    preTitle?: string;
    title: string;
    subTitle?: string;
    des: string;
    quote?: string;
    image: ImageType;
    specialRev?: {
        image: ImageType,
        text: string,
    }[]
}
export interface shopMattress {
    titleWrap: {
        title: string;
        desc?: string;
        link?: LinkType;
    };
    products: {
        image: ImageType;
        title: string;
        subTitle: string;
        link: LinkType;
    }[];
}
export interface byRevShop {
    image: ImageType;
    icon: ImageType;
    title: string;
    link: LinkType;
}

