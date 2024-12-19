import { ImageType } from "./common.types";

export type ProductSize = 'Twin' | 'Twin XL' | 'Full' | 'Queen' | 'King' | 'Cal King' | 'Split King' | 'Twin/Twin XL' | 'Full/Queen' | 'King/Cal King' | '15 lbs (48" x 72")' | '20 lbs (60" x 80")' | '25 lbs (80" x 87")' | 'Large' | 'Small' | 'Medium' | 'Normal' | 'Plus' | 'Address Correction' | '1 Pack' | 'One Size' | '2 Pack Queen' | '2 Pack King' | 'N/A';

export type ProductColor = "White" | "Gray";

export type ProtectionTerm = '2 Year' | '5 Year';

export type DiscountType = "FIXED" | "FIXED_RANGE" | "PERCENT" | "PERCENT_RANGE";

export type OfferLocation = "MAIN_PDP" | "CROSS_SELL" | "SLIDE_CART";

export type ProductSetupType = "PRODUCT_ONLY" | "PRODUCT_PLUS_ADDON";

export type ProducVariationProps = "id" | "title" | "sku" | "dimensions" | "regu_price" | "sale_price" | "ship_msg" | "show_ship_msg" | "out_of_stock" | "thumbnail";

export type LineItemType = "PRODUCT" | "GIFT_CARD" | "ACCIDENTAL_PROTECTION";

export interface ProductData {
    id: number;
    sku: string;
    slug: string;
    title: string;
    descriptive_text?: string;
    category: string[];
    default_size: ProductSize;
    default_color?: ProductColor;
    default_term?: ProtectionTerm;
    is_promo_prod: boolean;
    is_act_fast?: boolean;
    is_accident_protectable: boolean;
    images: Images;
    setup_data?: SetupData;
    free_with_purchase?: FreeWithPurchase;
    cross_sell_info: CrossSellInfo;
    discount: Discount;
    variations: ProductVariation[];
    model?: string;
    multi_prod_ids?: number[];
    cross_sell_product_data?: {
        title: string,
        items: CrossSellProduct[]
    };
    is_compare_model?: boolean;
    show_product_variation?: boolean;
    out_of_stock: boolean;
    bf_off_txt?: string;
    protected_item_ids?: number[];
    product_type?: LineItemType;
}

export interface CrossSellInfo {
    title: string;
    thumbnail: ImageType;
    description: string;
    description_inline?: string;
    color_thumbnail?: ColorThumbnail;
}

export interface ColorThumbnail {
    white: Gray;
    gray: Gray;
}

export interface Gray {
    thumbnail: ImageType;
}

export enum Color {
    Gray = "Gray",
    White = "White",
}

export interface Discount {
    type: DiscountType;
    min: number;
    max: number;
}

export interface FreeWithPurchase {
    section_title: string;
    products: Product[];
}

export interface Product {
    title: string;
    product_id: number;
    quantity_multiplier: number;
}

export interface Images {
    klaviyo?: ImageType;
    featured: ImageType;
    thumbnail: ImageType;
}

export interface SetupData {
    section_title: string;
    setups?: ProductSetup[];
}

export interface ProductSetup {
    title?: string;
    setup_value?: ProductSetupType;
    offer_txt?: string;
    addon_prod_ids?: number[];
    cross_sell_product_data?: {
        title: string,
        items: CrossSellProduct[]
    };
    box_title?: string;
    box_subtitle?: string;
}

export interface CrossSellProduct {
    id: number;
    title: string;
    thumbnail: ImageType;
    description: string;
}

export interface ProductVariation {
    id: number;
    parent_id: number;
    title: string;
    sku: string;
    size: ProductSize;
    dimensions?: string;
    regu_price: number;
    sale_price: number;
    bf_price?: number;
    ship_msg: string;
    show_ship_msg: boolean;
    out_of_stock: boolean;
    thumbnail: string;
    color?: ProductColor;
    term?: ProtectionTerm;
}

export interface ProdVariationWithQuantity extends ProductVariation {
    quantity: number;
}

export interface SharedVariationData {
    product_id: number;
    size: ProductSize;
    color: ProductColor;
    quantity: number;
    added_additional_items: ProdVariationWithQuantity[];
    added_cross_sell_items: ProdVariationWithQuantity[];
}


// protection products related data
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
