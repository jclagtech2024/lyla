import { BreadcrumbSchema, ImageSchema, RecommendedBy, ReviewSlideData, SeoData } from "./common-prod-page-data.interface";
import { ImageType, LinkType, VideoType } from "./common.types";

export interface HomeNewPageData {
    sale_offer_data: {
        saleTitle: string;
        offers: string[];
    };
    reviewSlides: ReviewSlideData[];

    // sale_offer_data: {
    //     sale_title: string;
    //     offers: string[];
    // },
    shop_link_card_data: TextImageVideoLink;
    mem_matt_link_card_data: TextImageVideoLink;
    hyb_matt_link_card_data: TextImageVideoLink;

    lottie_flippable_sec_data: {
        sec_title: string;
        sec_sub_title: string;
        recommended_by: RecommendedBy;
        products: FlippableMattressData[];
    },
    more_product_data: {
        title: string;
        view_all_link: LinkType;
        product_ids: number[];
    }

    singlevdo1: VideoType;

    SEOData: SeoData;
    breadcrumbSchema: BreadcrumbSchema;
    imageSchema: ImageSchema;
}

export interface TextImageVideoLink {
    text: string;
    image?: ImageType;
    video?: VideoType;
    link?: LinkType;
}

export interface FlippableMattressData {
    product_id: number;
    title: string;
    description: string;
    thumbnail: ImageType;
    hide_shop_link: boolean;
    shop_link: LinkType;
}
