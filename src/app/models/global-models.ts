import { ClickedFromEvents } from "../services/ga4.service";
import { VideoType } from "../types/common.types";

export interface ProtectionProduct {
    related_prod_id: number;
    related_var_id: number;
    variations: ProtectionVariation[]
}
export interface ProtectionVariation {
    id: number;
    price: number;
    term: number;
    sku: string;
    thumbnail: string;
}

export interface recommendedBy {
    title?: boolean;
    icons?: pictureTag[];
}
export interface pictureTag {
    url?: string;
    url2?: string;
    alt?: string;
    height?: number;
    width?: number;
    isGIF?: boolean;
    sizes?: Array<number>;
    aspectRatio?: number;
}
export interface videoTag {
    height?: number;
    width?: number;
    preload?: string;
    autoplay?: string;
    loop?: boolean;
    muted?: string;
    poster?: string;
    videoSrc?: string;
    videoType?: string;
}
export interface specialReview {
    img: pictureTag;
    content: string;
}
export interface saleslide {
    id: string;
    class?: string;
    title?: string;
    des?: string;
    src?: string;
    src2?: string;
    link?: string;
    linkName?: string;
    alt?: string;
    dot?: string;
}
export interface prodVariation {
    id: number;
    parent_id: number;
    title: string;
    sku: string;
    size: string;
    color?: string;
    sale_price: number;
    regu_price: number;
    bf_price?: number;
    dimensions?: string;
    thumbnail: string;
    ship_msg: string;
    out_of_stock?: boolean;
}
// For Left Right Boxes
export interface boxIcon {
    content?: string;
    icon?: pictureTag;
}
export interface leftrightBox {
    type?: string;
    img?: pictureTag;
    subImg?: pictureTag;
    hasImgArray?: boolean;
    imgArray?: pictureTag[];
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
    boxImg?: pictureTag;
    playvdo?: string;
    videoUrl?: string;
    sfirm?: string;
    prodID?: number;
    isScroll?: boolean;
    isDark?: boolean;
    role?: string;
    ariaLabel?: string;
    isAlignTop?: boolean;
    headingTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | string;
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

export interface reviewSlide {
    id?: string;
    title: string;
    buyer: {
        img: pictureTag;
        name: string;
        type: string;
        role?: string;
        ariaLabel?: string;
    };
    dotData?: string;
    review: string;
}

export interface pdpSlide {
    is_video_slide: boolean;
    expandDark?: boolean;
    is_video_included?: boolean;
    is_AR?: boolean;
    fullTrue?: boolean;
    slideOutType?: ("modal") | (string);
    popImg?: pictureTag;
    slide_img?: pictureTag;
    slide_vdo?: {
        text?: string;
        poster: pictureTag;
        vdo_url: string;
    };
    popDot?: string;
    slide_dot?: string;
}


export interface reviewTitle {
    id: number;
    title: string;
    desc: string;
    discount: number;
    promo_items?: string;
    cur_size: string;
    cur_color?: string;
    cur_sprice: number;
    cur_rprice: number;
}
export interface yourOrdIncItem {
    title: string;
    img: pictureTag;
    img_text?: string;
    content: {
        title?: string;
        desc: string;
    };
    shown?: boolean;
}
export interface yourOrdInc {
    title: string;
    items: Array<yourOrdIncItem>;
}

export interface buyBxData {
    id: number;
    title: string;
    slug: string;
    desc?: string;
    discount?: number;
    featured_img: string;
    promo_items?: string;
    your_ord_inc?: yourOrdInc;
    cross_sell?: Array<number>;
    otherprods?: Array<number>;
    variations: Array<prodVariation>;
}

export interface crossSellItem {
    option_title?: string;
    box_title: string;
    box_des?: string;
    img?: string;
    recmClass?: boolean;
    prod_ids: Array<number>;
}

export interface productData {
    id: number;
    title: string;
    model?: string;
    is_accidennt_protectable?: boolean;
    disp_title?: string;
    img_gallery?: {
        small?: string;
        medium?: string;
        large?: string;
        featured?: string;
        other_prod?: string;
        other_prod_alt?: string;
    };
    slug: string;
    showShip?: boolean;
    category?: string;
    out_of_stock?: boolean;
    sku?: string;
    alerttext?: string;
    is_promo_prod?: boolean;
    is_faq_pop?: boolean;
    is_spec_pop?: boolean;
    is_act_fast?: boolean;
    is_compare_model?: boolean;
    multi_prod_ids?: Array<number>;
    descriptive_text?: string;
    sub_descriptive_text?: string;
    more_info?: {
        type: string;
        link_title: string;
        tip_content?: string;
    };
    featured_img?: string;
    more_product_ing?: string;
    promo_items?: string;
    your_ord_inc?: yourOrdInc;
    default_size: string;
    default_color?: string;
    offer_text?: string;
    bf_offer_text?: string;
    bf_off_txt?: string;
    discount?: {
        type: string; //FIXED | RANGE | PERCENT
        min: number;
        max: number;
    };
    variations: Array<prodVariation>;
    cross_sell?: Array<crossSellItem>;
    otherprods?: Array<crossSellItem>;
    cross_sell_info?: {
        title?: string;
        thumbnail?: pictureTag;
        color_thumbnail?: {
            white: {
                thumbnail: pictureTag;
            };
            gray: {
                thumbnail: pictureTag;
            };
        };
        description?: {
            desc_title: string;
            desc_desk: string;
            desc_mob: string;
        };
    };
}

export interface crossSell {
    option_title?: string;
    title: string;
    des?: string;
    img?: string;
    recmClass?: boolean;
    show_desc_title: boolean;
    items: Array<productData>;
}

export interface addItem {
    position?: number;
    id: number;
    sku: string;
    name: string;
    price: number;
    regu_price: number;
    parent_id: number;
    thumbnail: string;
    thumbnail_2?: string;
    color?: string;
    size: string;
    dimensions?: string;
    line_total: number;
    line_tax: number;
    product_type?: 'protection' | 'gift_card';
    category?: string;
    line_woo_total?: number;
    linkedid?: number[];
    wc_gc_giftcard_to_multiple?: string;
    wc_gc_giftcard_from?: string;
    wc_gc_giftcard_message?: string;
    wc_gc_giftcard_delivery?: string;
    clicked_from?: ClickedFromEvents;
    is_accidennt_protectable?: boolean;
    is_protection_added?: boolean;
    protected_item_id?: number;
    protection_term?: number;
}

export interface cartItem extends addItem {
    line_total_with_disc?: number;
    quantity: number;
    jurs_tax?: Array<any>;
}

export interface giftCard {
    id: number;
    is_active: string;
    is_virtual: string;
    code: string;
    order_id: number;
    order_item_id: number;
    recipient: string;
    redeemed_by: number;
    sender: string;
    sender_email: string;
    template_id: string;
    message: string;
    balance: string | number;
    remaining: string | number;
    create_date: string | number;
    deliver_date: string | number;
    delivered: string | number;
    expire_date: string | number;
    redeem_date: string | number;
    codename: string;
    applied_amt?: number;
}

export interface faqData {
    sec_title: string;
    questions: Array<{ ques: string; ans: string; shown?: boolean }>;
}

export interface specData {
    sec_title: string;
    questions: Array<{ ques: string; ans: string; shown?: boolean }>;
}

export interface mattressPageData {
    specialReview: Array<specialReview>;
    specialReview2: Array<specialReview>;
    specialReview3: Array<specialReview>;
    leftrightBoxList: Array<leftrightBox>;
    leftrightBoxList2: Array<leftrightBox>;
    leftrightBoxList3: Array<leftrightBox>;
    reviewSlides: Array<reviewSlide>;
    leftrightVideo: leftrightBox;
    singlevdo: VideoType;
    layeranim: any[];
    faqdata: faqData;
    specdata: specData;
}

export interface hybridMattressPageData {
    specialReview: Array<specialReview>;
    specialReview2: Array<specialReview>;
    specialReview3: Array<specialReview>;
    leftrightBoxList: Array<leftrightBox>;
    leftrightBoxList2: Array<leftrightBox>;
    leftrightBoxList3: Array<leftrightBox>;
    reviewSlides: Array<reviewSlide>;
    leftrightVideo: leftrightBox;
    singlevdo: VideoType;
    singlevdo1: VideoType;
    layeranim: any[];
    faqdata: faqData;
    specdata: specData;
}

export interface LaylaWeightedBlanketPageData {
    specialReview: Array<specialReview>;
    specialReview2: Array<specialReview>;
    specialReview3: Array<specialReview>;
    leftrightBoxList: Array<leftrightBox>;
    leftrightBoxList2: Array<leftrightBox>;
    leftrightBoxList3: Array<leftrightBox>;
    reviewSlides: Array<reviewSlide>;
    leftrightVideo: leftrightBox;
    singlevdo: VideoType;
    singlevdo1: VideoType;
    layeranim: any[];
    faqdata: faqData;
    specdata: specData;
}

export interface mattressesData {
    singlevdo: VideoType;
    faqdata: faqData;
}

export interface laylaPillowPageData {
    section1: { heading: string; content: string };
    section2: { img1: string; img2: string };
    section3: { img: string; title: string; desc: string }[];
    specialReview: Array<specialReview>;
    specialReview2: Array<specialReview>;
    specialReview3: Array<specialReview>;
    specialReview4: Array<specialReview>;
    leftrightBoxList: Array<leftrightBox>;
    leftrightBoxList2: Array<leftrightBox>;
    leftrightBoxList3: Array<leftrightBox>;
    faqdata: faqData;
    specdata: specData;
}

export interface shreddedPillowPageData {
    section1: { heading: string; content: string };
    section2: { img1: string; img2: string };
    section3: { img: string; title: string; desc: string }[];
    specialReview: Array<specialReview>;
    specialReview2: Array<specialReview>;
    specialReview3: Array<specialReview>;
    specialReview4: Array<specialReview>;
    leftrightBoxList: Array<leftrightBox>;
    leftrightBoxList2: Array<leftrightBox>;
    leftrightBoxList3: Array<leftrightBox>;
    faqdata: faqData;
    specdata: specData;
}

export interface foundationPageData {
    section1: { heading: string; content: string };
    section2: { img1: string; img2: string };
    section3: { img: string; title: string; desc: string }[];
    specialReview: Array<specialReview>;
    leftrightBoxList: Array<leftrightBox>;
    leftrightBoxList2: Array<leftrightBox>;
    faqdata: faqData;
    specdata: specData;
}
export interface bedframePageData {
    section1: { heading: string; content: string };
    section2: { img1: string; img2: string };
    section3: { img: string; title: string; desc: string }[];
    specialReview: Array<specialReview>;
    leftrightBoxList: Array<leftrightBox>;
    faqdata: faqData;
    specdata: specData;
}
export interface platformBedPageData {
    section1: { heading: string; content: string };
    section2: { img1: string; img2: string };
    section3: { img: string; title: string; desc: string }[];
    specialReview: Array<specialReview>;
    leftrightBoxList: Array<leftrightBox>;
    faqdata: faqData;
    specdata: specData;
}
export interface adjustableBasePageData {
    section1: { heading: string; content: string };
    section2: { img1: string; img2: string };
    section3: { img: string; title: string; desc: string }[];
    specialReview: Array<specialReview>;
    leftrightBoxList: Array<leftrightBox>;
    leftrightBoxList2: Array<leftrightBox>;
    faqdata: faqData;
    specdata: specData;
}
export interface metalPlatformBasePageData {
    section1: { heading: string; content: string };
    section2: { img1: string; img2: string };
    section3: { img: string; title: string; desc: string }[];
    specialReview: Array<specialReview>;
    leftrightBoxList: Array<leftrightBox>;
    faqdata: faqData;
    specdata: specData;
}
export interface comforterPageData {
    section1: { heading: string; content: string };
    section2: { img1: string; img2: string };
    section3: { img: string; title: string; desc: string }[];
    specialReview: Array<specialReview>;
    leftrightBoxList: Array<leftrightBox>;
    leftrightBoxList2: Array<leftrightBox>;
    faqdata: faqData;
    specdata: specData;
}
export interface bambooPageData {
    section1: { heading: string; content: string };
    section2: { img1: string; img2: string };
    section3: { img: string; title: string; desc: string }[];
    specialReview: Array<specialReview>;
    specialReview2: Array<specialReview>;
    leftrightBoxList: Array<leftrightBox>;
    leftrightBoxList2: Array<leftrightBox>;
    faqdata: faqData;
    specdata: specData;
}
export interface TopperPageData {
    section1: { heading: string; content: string };
    section2: { img1: string; img2: string };
    section3: { img: string; title: string; desc: string }[];
    specialReview: Array<specialReview>;
    leftrightBoxList: Array<leftrightBox>;
    leftrightBoxList2: Array<leftrightBox>;
    faqdata: faqData;
    specdata: specData;
}
export interface EssentialProtectorPageData {
    section1: { heading: string; content: string };
    section2: { img1: string; img2: string };
    section3: { img: string; title: string; desc: string }[];
    specialReview: Array<specialReview>;
    leftrightBoxList: Array<leftrightBox>;
    leftrightBoxList2: Array<leftrightBox>;
    faqdata: faqData;
    specdata: specData;
}
export interface CoolingProtectorPageData {
    section1: { heading: string; content: string };
    section2: { img1: string; img2: string };
    section3: { img: string; title: string; desc: string }[];
    specialReview: Array<specialReview>;
    leftrightBoxList: Array<leftrightBox>;
    leftrightBoxList2: Array<leftrightBox>;
    faqdata: faqData;
    specdata: specData;
}
export interface FullEncasementProtectorPageData {
    section1: { heading: string; content: string };
    section2: { img1: string; img2: string };
    section3: { img: string; title: string; desc: string }[];
    specialReview: Array<specialReview>;
    leftrightBoxList: Array<leftrightBox>;
    leftrightBoxList2: Array<leftrightBox>;
    faqdata: faqData;
    specdata: specData;
}
export interface PetBedPageData {
    section1: { heading: string; content: string };
    section2: { img1: string; img2: string };
    section3: { img: string; title: string; desc: string }[];
    specialReview: Array<specialReview>;
    leftrightBoxList: Array<leftrightBox>;
    leftrightBoxList2: Array<leftrightBox>;
    faqdata: faqData;
    specdata: specData;
}

export interface basesData {
    singlevdo: VideoType;
    faqdata: faqData;
    leftrightBoxList: Array<leftrightBox>;
}
export interface pillowsData {
    singlevdo: VideoType;
    faqdata: faqData;
    leftrightBoxList: Array<leftrightBox>;
}
export interface homePageData {
    leftrightVideo: leftrightBox;
    reviewSlides: Array<reviewSlide>;
    specialReview: Array<specialReview>;
    leftrightBoxList: Array<leftrightBox>;
}

export interface coupon {
    amount: number;
    exclude_product_ids: Array<number>;
    individual_use: boolean;
    name: string;
    productIds: Array<number>;
    title: string;
    type: string;
}

export interface userData {
    ID: number;
    billing_phone: string;
    display_name: string;
    first_name: string;
    last_name: string;
    nickname: string;
    role: Array<string>;
    user_email: string;
    user_login: string;
    user_nicename: string;
    user_registered: string;
}
export type ComparisonData = {
    product: string;
    img?: {
        src: string;
        ariaLabel: string;
    };
    type?: {
        value: string;
        ariaLabel: string;
    };
    firmness?: {
        value: string;
        ariaLabel: string;
    };
    thickness?: {
        value: string;
        ariaLabel: string;
    };
    cooling?: {
        value: string;
        ariaLabel: string;
    };
    edgeSupport?: {
        value: string;
        ariaLabel: string;
    };
    motionTransfer?: {
        value: string;
        ariaLabel: string;
    };
    response?: {
        value: string;
        ariaLabel: string;
    };
    hugFeel?: {
        value: string;
        ariaLabel: string;
    };
    smell?: {
        value: string;
        ariaLabel: string;
    };
    trial?: {
        value: string;
        ariaLabel: string;
    };
    warranty?: {
        value: string;
        ariaLabel: string;
    };
    price?: {
        value: string;
        ariaLabel: string;
    };
};

export type FaqContent = {
    title?: string;
    content?: string;
    shown?: boolean;
    ID?: number;
};

export type FaqBlog = {
    id?: string;
    name?: string;
    blogs?: FaqContent[];
    shown?: boolean;
};

export type FaqPageData = {
    main_category_name?: string;
    main_category_slug?: string;
    data?: FaqBlog[];
}[];

export type BlogListing = {
    blogs: BlogData[];
    total_posts: number;
};
export type BlogData = {
    ID: number;
    adn_image: null | string | any;
    post_content: string;
    post_name: string;
    post_title: string;
    thumb_image: string;
    video_url: string;
};

export type BlogDetail = {
    cat_html: string;
    cat_link: string;
    cat_name: string;
    header_related: RelatedBlogs[];
    nxt_pst: NextPrevBlog;
    post_author: string;
    post_written_by: string;
    post_content: string;
    post_date: string;
    post_excrpt: string;
    post_id: string;
    post_name: string;
    post_seo_focuskw: string;
    post_seo_metadesc: string;
    post_seo_title: string;
    post_slug: string;
    post_thumbnail: string;
    imgwidth: string;
    imgheight: string;
    post_thumbnail_alt: string;
    post_title: string;
    post_type: string;
    post_video_url: string;
    prv_pst: NextPrevBlog;
    related_benifits: RelatedBlogs[];
    related_posts: RelatedBlogs[];
    related_products: RelatedBlogs[];
    videoschema: string;
    blogschema: string;
};

export type NextPrevBlog = {
    post_excrpt: string;
    post_id: number;
    post_name: string;
    post_title: string;
    thumbnail: string;
    thumbnail_alt: string;
};

export type RelatedBlogs = {
    post_name: string;
    post_title: string;
    thumbnail: string;
    thumbnail_alt: string;
};

export type SEOData = {
    title?: string;
    tags?: { name?: string; property?: string; content?: string }[];
};

export type BreadcrumbSchema = {
    '@context': string;
    '@type': string;
    itemListElement: {
        '@type': string;
        position: number;
        name: string;
        item: string;
    }[];
};

export interface AvalaraResponse {
    success: boolean;
    tax_rate: string;
    tax_amt: number;
    data: Data;
}

export interface Data {
    id: number;
    code: string;
    companyId: number;
    date: Date;
    status: string;
    type: string;
    batchCode: string;
    currencyCode: string;
    exchangeRateCurrencyCode: string;
    customerUsageType: string;
    entityUseCode: string;
    customerVendorCode: string;
    customerCode: string;
    exemptNo: string;
    reconciled: boolean;
    locationCode: string;
    reportingLocationCode: string;
    purchaseOrderNo: string;
    referenceCode: string;
    salespersonCode: string;
    taxOverrideType: string;
    taxOverrideAmount: number;
    taxOverrideReason: string;
    totalAmount: number;
    totalExempt: number;
    totalDiscount: number;
    totalTax: number;
    totalTaxable: number;
    totalTaxCalculated: number;
    adjustmentReason: string;
    adjustmentDescription: string;
    locked: boolean;
    region: Region;
    country: Country;
    version: number;
    softwareVersion: string;
    originAddressId: number;
    destinationAddressId: number;
    exchangeRateEffectiveDate: Date;
    exchangeRate: number;
    description: string;
    email: string;
    businessIdentificationNo: string;
    modifiedDate: Date;
    modifiedUserId: number;
    taxDate: Date;
    lines: Line[];
    addresses: Address[];
    locationTypes: LocationType[];
    summary: Summary[];
}

export interface Address {
    id: number;
    transactionId: number;
    boundaryLevel: string;
    line1: string;
    line2: string;
    line3: string;
    city: string;
    region: Region;
    postalCode: string;
    country: Country;
    taxRegionId: number;
    latitude: string;
    longitude: string;
}

export enum Country {
    Us = 'US',
}

export enum Region {
    CA = 'CA',
}

export interface Line {
    id: number;
    transactionId: number;
    lineNumber: string;
    boundaryOverrideId: number;
    customerUsageType: string;
    entityUseCode: string;
    description: string;
    destinationAddressId: number;
    originAddressId: number;
    discountAmount: number;
    discountTypeId: number;
    exemptAmount: number;
    exemptCertId: number;
    exemptNo: string;
    isItemTaxable: boolean;
    isSSTP: boolean;
    itemCode: string;
    lineAmount: number;
    quantity: number;
    ref1: string;
    ref2: string;
    reportingDate: Date;
    revAccount: string;
    sourcing: string;
    tax: number;
    taxableAmount: number;
    taxCalculated: number;
    taxCode: string;
    taxCodeId: number;
    taxDate: Date;
    taxEngine: string;
    taxOverrideType: string;
    businessIdentificationNo: string;
    taxOverrideAmount: number;
    taxOverrideReason: string;
    taxIncluded: boolean;
    details: Detail[];
    nonPassthroughDetails: any[];
    lineLocationTypes: LineLocationType[];
    hsCode: string;
    costInsuranceFreight: number;
    vatCode: string;
    vatNumberTypeId: number;
}

export interface Detail {
    id: number;
    transactionLineId: number;
    transactionId: number;
    addressId: number;
    country: Country;
    region: Region;
    countyFIPS: string;
    stateFIPS: string;
    exemptAmount: number;
    exemptReasonId: number;
    inState: boolean;
    jurisCode: string;
    jurisName: string;
    jurisdictionId: number;
    signatureCode: string;
    stateAssignedNo: string;
    jurisType: JurisType;
    jurisdictionType: JurisdictionTypeEnum;
    nonTaxableAmount: number;
    nonTaxableRuleId: number;
    nonTaxableType: NonTaxableType;
    rate: number;
    rateRuleId: number;
    rateSourceId: number;
    serCode: string;
    sourcing: Sourcing;
    tax: number;
    taxableAmount: number;
    taxType: TaxType;
    taxSubTypeId: TaxSubType;
    taxTypeGroupId: TaxTypeGroupID;
    taxName: TaxName;
    taxAuthorityTypeId: number;
    taxRegionId: number;
    taxCalculated: number;
    taxOverride: number;
    rateType: RateType;
    rateTypeCode: RateTypeCode;
    taxableUnits: number;
    nonTaxableUnits: number;
    exemptUnits: number;
    unitOfBasis: UnitOfBasis;
    isNonPassThru: boolean;
    isFee: boolean;
    reportingTaxableUnits: number;
    reportingNonTaxableUnits: number;
    reportingExemptUnits: number;
    reportingTax: number;
    reportingTaxCalculated: number;
    liabilityType: LiabilityType;
}

export enum JurisType {
    Cty = 'CTY',
    Sta = 'STA',
    Stj = 'STJ',
}

export enum JurisdictionTypeEnum {
    County = 'County',
    Special = 'Special',
    State = 'State',
}

export enum LiabilityType {
    Seller = 'Seller',
}

export enum NonTaxableType {
    RateRule = 'RateRule',
}

export enum RateType {
    General = 'General',
}

export enum RateTypeCode {
    G = 'G',
}

export enum Sourcing {
    Destination = 'Destination',
    Origin = 'Origin',
}

export enum TaxName {
    CACountyTax = 'CA COUNTY TAX',
    CASpecialTax = 'CA SPECIAL TAX',
    CAStateTax = 'CA STATE TAX',
}

export enum TaxSubType {
    S = 'S',
}

export enum TaxType {
    Sales = 'Sales',
}

export enum TaxTypeGroupID {
    SalesAndUse = 'SalesAndUse',
}

export enum UnitOfBasis {
    PerCurrencyUnit = 'PerCurrencyUnit',
}

export interface LineLocationType {
    documentLineLocationTypeId: number;
    documentLineId: number;
    documentAddressId: number;
    locationTypeCode: string;
}

export interface LocationType {
    documentLocationTypeId: number;
    documentId: number;
    documentAddressId: number;
    locationTypeCode: string;
}

export interface Summary {
    country: Country;
    region: Region;
    jurisType: JurisdictionTypeEnum;
    jurisCode: string;
    jurisName: string;
    taxAuthorityType: number;
    stateAssignedNo: string;
    taxType: TaxType;
    taxSubType: TaxSubType;
    taxName: TaxName;
    rateType: RateType;
    taxable: number;
    rate: number;
    tax: number;
    taxCalculated: number;
    nonTaxable: number;
    exemption: number;
}

export interface APIResponse<T> {
    response?: T;
    status?: {
        code?: number;
        message?: string;
    };
}

export interface ReturnsFormItem {
    itemid?: number;
    proid?: number;
    varid?: number;
    name?: string;
    qty?: number;
    total?: number;
    o_date_msg?: string;
}

export interface ReturnsFormReasonItem {
    id?: number;
    reasons?: { value?: number; label?: string }[];
}

export interface ReturnOrderItemValid extends ReturnOrderItem {
    valid?: boolean;
}

export interface ReturnOrderItem {
    proid?: number;
    name?: string;
    qty?: number;
    itemid?: number;
    varid?: number;
    reason?: {
        value?: number;
        label?: string;
    };
    boxStatus?: string;
    otherreason?: string;
}

export interface OrderData {
    order_data?: OrderDatum[];
    order_items?: OrderItem[];
    order_coupons?: OrderCoupon[];
    order_fee?: any[];
}

export interface OrderCoupon {
    order_id?: string;
    order_item_id?: string;
    order_item_name?: string;
    order_item_type?: string;
    discount_amt?: string;
    discount_amt_tax?: string;
    coupon_data?: null;
}

export interface OrderDatum {
    id?: string;
    post_date?: Date;
    post_title?: string;
    billing_user_id?: string;
    billing_email?: string;
    billing_first_name?: string;
    billing_last_name?: string;
    billing_address_1?: string;
    billing_address_2?: string;
    billing_city?: string;
    billing_state?: string;
    billing_postcode?: string;
    billing_country?: string;
    shipping_first_name?: string;
    shipping_last_name?: string;
    shipping_address_1?: string;
    shipping_address_2?: string;
    shipping_city?: string;
    shipping_state?: string;
    shipping_postcode?: string;
    shipping_country?: string;
    payment_method?: string;
    payment_method_title?: string;
    currency?: string;
    discount?: string;
    discount_tax?: string;
    shipping?: string;
    shipping_tax?: string;
    order_tax?: string;
    order_total?: string;
    prices_include_tax?: string;
    is_vat_exempt?: null;
    ga_tracked?: null;
}

export interface OrderItem {
    order_id?: string;
    order_item_id?: string;
    order_item_name?: string;
    order_item_type?: string;
    productID?: string;
    Qty?: string;
    variationID?: string;
    lineTotal?: string;
    subTotalTax?: string;
    Tax?: string;
    taxClass?: string;
    subtotal?: string;
    sku?: string;
    clicked_from?: ClickedFromEvents;
}

export type ComponentChange<T, P extends keyof T> = {
    previousValue: T[P];
    currentValue: T[P];
    firstChange: boolean;
};

export type ComponentChanges<T = any> = {
    [P in keyof T]?: ComponentChange<T, P>;
};

type MarkFunctionProperties<Component> = {
    [Key in keyof Component]: Component[Key] extends Function ? never : Key;
};

type ExcludeFunctionPropertyNames<T> = MarkFunctionProperties<T>[keyof T];

type ExcludeFunctions<T> = Pick<T, ExcludeFunctionPropertyNames<T>>;

export type NgChanges<Component = any, Props = ExcludeFunctions<Component>> = {
    [Key in keyof Props]: {
        previousValue: Props[Key];
        currentValue: Props[Key];
        firstChange: boolean;
        isFirstChange(): boolean;
    };
};

export interface BreadcrumbData {
    title: string;
    url?: string;
    disabled: boolean;
}
