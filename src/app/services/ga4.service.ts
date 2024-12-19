import React, { useEffect } from 'react';
declare const dataLayer: Array<any>;
declare const gtag: Function;

export type CurrencyCodes =
    | 'AED'
    | 'AFN'
    | 'ALL'
    | 'AMD'
    | 'ANG'
    | 'AOA'
    | 'ARS'
    | 'AUD'
    | 'AWG'
    | 'AZN'
    | 'BAM'
    | 'BBD'
    | 'BDT'
    | 'BGN'
    | 'BHD'
    | 'BIF'
    | 'BMD'
    | 'BND'
    | 'BOB'
    | 'BOV'
    | 'BRL'
    | 'BSD'
    | 'BTN'
    | 'BWP'
    | 'BYR'
    | 'BZD'
    | 'CAD'
    | 'CDF'
    | 'CHE'
    | 'CHF'
    | 'CHW'
    | 'CLF'
    | 'CLP'
    | 'CNY'
    | 'COP'
    | 'COU'
    | 'CRC'
    | 'CUC'
    | 'CUP'
    | 'CVE'
    | 'CZK'
    | 'DJF'
    | 'DKK'
    | 'DOP'
    | 'DZD'
    | 'EGP'
    | 'ERN'
    | 'ETB'
    | 'EUR'
    | 'FJD'
    | 'FKP'
    | 'GBP'
    | 'GEL'
    | 'GHS'
    | 'GIP'
    | 'GMD'
    | 'GNF'
    | 'GTQ'
    | 'GYD'
    | 'HKD'
    | 'HNL'
    | 'HRK'
    | 'HTG'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'INR'
    | 'IQD'
    | 'IRR'
    | 'ISK'
    | 'JMD'
    | 'JOD'
    | 'JPY'
    | 'KES'
    | 'KGS'
    | 'KHR'
    | 'KMF'
    | 'KPW'
    | 'KRW'
    | 'KWD'
    | 'KYD'
    | 'KZT'
    | 'LAK'
    | 'LBP'
    | 'LKR'
    | 'LRD'
    | 'LSL'
    | 'LTL'
    | 'LVL'
    | 'LYD'
    | 'MAD'
    | 'MDL'
    | 'MGA'
    | 'MKD'
    | 'MMK'
    | 'MNT'
    | 'MOP'
    | 'MRO'
    | 'MUR'
    | 'MVR'
    | 'MWK'
    | 'MXN'
    | 'MXV'
    | 'MYR'
    | 'MZN'
    | 'NAD'
    | 'NGN'
    | 'NIO'
    | 'NOK'
    | 'NPR'
    | 'NZD'
    | 'OMR'
    | 'PAB'
    | 'PEN'
    | 'PGK'
    | 'PHP'
    | 'PKR'
    | 'PLN'
    | 'PYG'
    | 'QAR'
    | 'RON'
    | 'RSD'
    | 'RUB'
    | 'RWF'
    | 'SAR'
    | 'SBD'
    | 'SCR'
    | 'SDG'
    | 'SEK'
    | 'SGD'
    | 'SHP'
    | 'SLL'
    | 'SOS'
    | 'SRD'
    | 'SSP'
    | 'STD'
    | 'SYP'
    | 'SZL'
    | 'THB'
    | 'TJS'
    | 'TMT'
    | 'TND'
    | 'TOP'
    | 'TRY'
    | 'TTD'
    | 'TWD'
    | 'TZS'
    | 'UAH'
    | 'UGX'
    | 'USD'
    | 'USN'
    | 'USS'
    | 'UYI'
    | 'UYU'
    | 'UZS'
    | 'VEF'
    | 'VND'
    | 'VUV'
    | 'WST'
    | 'XAF'
    | 'XAG'
    | 'XAU'
    | 'XBA'
    | 'XBB'
    | 'XBC'
    | 'XBD'
    | 'XCD'
    | 'XDR'
    | 'XFU'
    | 'XOF'
    | 'XPD'
    | 'XPF'
    | 'XPT'
    | 'XTS'
    | 'XXX'
    | 'YER'
    | 'ZAR'
    | 'ZMW';

export type EcommerceItem = {
    item_id: string;
    item_name: string;
    affiliation?: string;
    coupon?: string;
    currency?: CurrencyCodes;
    discount?: number;
    index?: number;
    item_brand?: string;
    item_category?: string;
    item_category2?: string;
    item_category3?: string;
    item_category4?: string;
    item_category5?: string;
    item_list_id?: string;
    item_list_name?: string;
    item_variant?: string;
    location_id?: string;
    price?: number;
    quantity?: number;
    clicked_from?: ClickedFromEvents;
};

export type ClickedFromEvents =
    | 'header'
    | 'buy_box'
    | 'sale_page_bundle'
    | 'cart_cross_sell'
    | 'checkout'
    | 'mines_of_moria'
    | 'buy_box_cross_sell'
    | 'compare_popup'
    | 'gift_card'
    | 'checkout_cross_sell'
    | 'lr_box'
    | 'pdp_down_page';

export type EcommerceData = {
    items: EcommerceItem[];
    value?: number;
    currency?: CurrencyCodes;
    coupon?: string;
    payment_type?: string;
    shipping_tier?: string;
    transaction_id?: string;
    affiliation?: string;
    shipping?: number;
    tax?: number;
    item_list_id?: string;
    item_list_name?: string;
};

export type GA4Events =
    | 'add_payment_info'
    | 'add_shipping_info'
    | 'add_to_cart'
    | 'add_to_wishlist'
    | 'begin_checkout'
    | 'earn_virtual_currency'
    | 'generate_lead'
    | 'join_group'
    | 'level_end'
    | 'level_start'
    | 'level_up'
    | 'login'
    | 'post_score'
    | 'purchase'
    | 'refund'
    | 'remove_from_cart'
    | 'search'
    | 'select_content'
    | 'select_item'
    | 'select_promotion'
    | 'share'
    | 'sign_up'
    | 'spend_virtual_currency'
    | 'tutorial_begin'
    | 'tutorial_complete'
    | 'unlock_achievement'
    | 'view_cart'
    | 'view_item'
    | 'view_item_list'
    | 'view_promotion'
    | (string & {});

// @Injectable({
//     providedIn: 'root',
// })
export class Ga4Service {
    constructor() { }
    track({
        type = 'dataLayer',
        event,
        ecommerce,
    }: {
        type: 'gtag' | 'dataLayer';
        event: GA4Events;
        ecommerce: EcommerceData;
    }) {
        switch (type) {
            case 'dataLayer': {
                if (
                    typeof dataLayer !== 'undefined'
                    // || dataLayer !== undefined
                ) {
                    dataLayer.push({ ecommerce: null });
                    dataLayer.push({ event, ecommerce });
                }
                break;
            }
            case 'gtag': {
                if (
                    typeof gtag !== 'undefined'
                    // || gtag !== undefined
                ) {
                    gtag('event', event, ecommerce);
                }
                break;
            }
        }
    }


}
