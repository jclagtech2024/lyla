// import { ProductData } from 'src/app/types/product.types';
import { ProductData } from '../../../src/app/types/product.types';

const productData: ProductData[] = [
    {
        "id": 118,
        "sku": "MATT01",
        "slug": "memory-foam-mattress",
        "title": "Layla Memory Foam Mattress",
        "category": [
            "Mattress"
        ],
        "default_size": "Queen",
        "is_promo_prod": false,
        "out_of_stock": false,
        "is_accident_protectable": true,
        "images": {
            "klaviyo": {
                "src": "assets/images/layla-product-mattress-featured.png",
                "alt": "Layla Memory Foam Mattress",
                "width": 500,
                "height": 400
            },
            "featured": {
                "src": "assets/images/layla-product-mattress-featured.png",
                "alt": "Layla Memory Foam Mattress",
                "width": 500,
                "height": 400
            },
            "thumbnail": {
                "src": "assets/images/global-img/newImages/memoryMattressThumb.jpg",
                "alt": "Mattress setup in a bedroom",
                "width": 365,
                "height": 229
            }
        },
        "setup_data": {
            "section_title": "Choose your setup",
            "setups": [
                {
                    "title": "Mattress Only",
                    "setup_value": "PRODUCT_ONLY",
                    "offer_txt": "",
                    "box_title": "Enhance your setup and save..",
                    "box_subtitle": "Exclusive discounts when you purchase a mattress",
                    "addon_prod_ids": [
                        612995,
                        56774,
                        823358,
                        124524
                    ],
                },
                {
                    "title": "Mattress + Base",
                    "setup_value": "PRODUCT_PLUS_ADDON",
                    "offer_txt": "You’re saving $987.50 by bundling!",
                    "box_title": "Bases",
                    "box_subtitle": "Exclusive discounts when you purchase a mattress",
                    "addon_prod_ids": [
                        20861,
                        31729,
                        611252,
                        612995
                    ],
                }
            ]
        },

        "cross_sell_product_data": {
            "title": "Enhance your setup and save <span>Exclusive discounts when you purchase a mattress</span>",
            "items": [
                {
                    id: 56774,
                    "title": "Memory Foam Topper",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellTopper.jpg",
                        "alt": "Memory Foam Topper",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Make it softer with a plush layer and all the benifits of copper"
                },
                {
                    id: 823358,
                    "title": "Down Alternative Comforter",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellComforter.jpg",
                        "alt": "Down Alternative Comforter",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Bird friendly- down feely all season comforter with duvet loops."
                },
                // {
                // 	id: 124524,
                // 	"title": "Bamboo Sheets",
                // 	"thumbnail": {
                // 		"src": "assets/images/crossSell/crossSellBambooSheet.jpg",
                // 		"alt": "Bamboo Sheets",
                // 		"height": 170,
                // 		"width": 113
                // 	},
                // 	"description": "Luxurious, soft, and supple. You’ve never felt sheets like this before."
                // },
                // {
                // 	id: 128244,
                // 	"title": "Weighted Blanket",
                // 	"thumbnail": {
                // 		"src": "assets/images/crossSell/crossSellBlanket.jpg",
                // 		"alt": "Layla Memory Foam Mattress",
                // 		"height": 170,
                // 		"width": 113
                // 	},
                // 	"description": "A hugging therapeutic blanket that’s super cozy and helps ease stress"
                // },
            ]
        },

        "free_with_purchase": {
            "section_title": "Free with Purchase",
            "products": [
                {
                    "title": "Memory Foam Pillow",
                    "product_id": 632713,
                    "quantity_multiplier": 2
                }
            ]
        },
        "cross_sell_info": {
            "title": "Memory Foam Mattress",
            "thumbnail": {
                "src": "assets/images/layla-product-mattress-featured.png",
                "alt": "Layla Memory Foam Mattress",
                "height": 170,
                "width": 113
            },
            "description": "Mattress is thoughtfully designed for the most cool, clean, with one side soft and the other side firm, you get 2 beds in 1 and two chances to get the right fit for you."
        },
        "discount": {
            "type": "FIXED",
            "min": 150,
            "max": 150
        },
        "variations": [
            {
                "id": 633,
                "parent_id": 118,
                "title": "Layla Memory Foam Mattress",
                "sku": "MATT01T",
                "size": "Twin",
                "dimensions": "39 × 75 × 10",
                "regu_price": 749,
                "sale_price": 599,
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/slide-cart/memory-foam-mattress-incart.jpg"
            },
            {
                "id": 628,
                "parent_id": 118,
                "title": "Layla Memory Foam Mattress",
                "sku": "MATT01TL",
                "size": "Twin XL",
                "dimensions": "39 × 80 × 10",
                "regu_price": 849,
                "sale_price": 699,
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/slide-cart/memory-foam-mattress-incart.jpg"
            },
            {
                "id": 631,
                "parent_id": 118,
                "title": "Layla Memory Foam Mattress",
                "sku": "MATT01F",
                "size": "Full",
                "dimensions": "54 × 75 × 10",
                "regu_price": 999,
                "sale_price": 849,
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/slide-cart/memory-foam-mattress-incart.jpg"
            },
            {
                "id": 630,
                "parent_id": 118,
                "title": "Layla Memory Foam Mattress",
                "sku": "MATT01Q",
                "size": "Queen",
                "dimensions": "60 × 80 × 10",
                "regu_price": 1099,
                "sale_price": 949,
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/slide-cart/memory-foam-mattress-incart.jpg"
            },
            {
                "id": 629,
                "parent_id": 118,
                "title": "Layla Memory Foam Mattress",
                "sku": "MATT01K",
                "size": "King",
                "dimensions": "76 × 80 × 10",
                "regu_price": 1249,
                "sale_price": 1099,
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/slide-cart/memory-foam-mattress-incart.jpg"
            },
            {
                "id": 632,
                "parent_id": 118,
                "title": "Layla Memory Foam Mattress",
                "sku": "MATT01CK",
                "size": "Cal King",
                "dimensions": "72 × 84 × 10",
                "regu_price": 1249,
                "sale_price": 1099,
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/slide-cart/memory-foam-mattress-incart.jpg"
            }
        ]
    },
    {
        "id": 813990,
        "sku": "ESMATT01",
        "slug": "essential-mattress",
        "title": "The Essential by Layla",
        "category": [
            "Mattress"
        ],
        "default_size": "Queen",
        "is_promo_prod": false,
        "out_of_stock": false,
        "is_accident_protectable": true,
        "images": {
            "klaviyo": {
                "src": "assets/images/ftimg/essential_mattress_sq-300.jpg",
                "alt": "Layla Essential Mattress",
                "width": 500,
                "height": 400
            },
            "featured": {
                "src": "assets/images/ftimg/essential_mattress_sq-300.jpg",
                "alt": "Layla Essential Mattress",
                "width": 500,
                "height": 400
            },
            "thumbnail": {
                "src": "assets/images/global-img/newImages/essentialMattressThumb.jpg",
                "alt": "Mattress setup in a bedroom",
                "width": 350,
                "height": 220
            }
        },
        "setup_data": {
            "section_title": "Choose Your Setup...",
            "setups": [
                {
                    "title": "Mattress Only",
                    "setup_value": "PRODUCT_ONLY",
                    "offer_txt": "",
                    "box_title": "Enhance your setup and save",
                    "box_subtitle": "Exclusive discounts when you purchase a mattress",
                    "addon_prod_ids": [],
                },
                {
                    "title": "Mattress + Base",
                    "setup_value": "PRODUCT_PLUS_ADDON",
                    "offer_txt": "Save up to $1,018!",
                    "box_title": "Enhance your setup and save",
                    "box_subtitle": "Exclusive discounts when you purchase a mattress",
                    "addon_prod_ids": [
                        612995,
                        56774,
                        823358,
                        124524
                    ],
                }
            ]
        },
        "free_with_purchase": {
            "section_title": "Free with Purchase",
            "products": [
                {
                    "title": "Memory Foam Pillow",
                    "product_id": 632713,
                    "quantity_multiplier": 2
                }
            ]
        },
        "cross_sell_info": {
            "title": "Essential Mattress",
            "thumbnail": {
                "src": "wp-content/uploads/2021/04/essential-mattress-cross.jpg",
                "alt": "The Essential by Layla",
                "height": 170,
                "width": 113
            },
            "description": "A lean and simple mattress design built to be super durable, long-lasting, and easy to care for."
        },
        "discount": {
            "type": "FIXED",
            "min": 150,
            "max": 150
        },
        "variations": [
            {
                "id": 813991,
                "parent_id": 813990,
                "title": "The Essential by Layla",
                "sku": "ESMATT01T",
                "size": "Twin",
                "dimensions": "39 × 75 × 10",
                "regu_price": 549,
                "sale_price": 399,
                "ship_msg": "Ships in 1-3 Business Days",
                "thumbnail": "assets/images/slide-cart/ess-mattress-incart.jpg",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 813992,
                "parent_id": 813990,
                "title": "The Essential by Layla",
                "sku": "ESMATT01TL",
                "size": "Twin XL",
                "dimensions": "39 × 80 × 10",
                "regu_price": 599,
                "sale_price": 449,
                "ship_msg": "Ships in 1-3 Business Days",
                "thumbnail": "assets/images/slide-cart/ess-mattress-incart.jpg",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 813993,
                "parent_id": 813990,
                "title": "The Essential by Layla",
                "sku": "ESMATT01F",
                "size": "Full",
                "dimensions": "54 × 75 × 10",
                "regu_price": 649,
                "sale_price": 499,
                "ship_msg": "Ships in 1-3 Business Days",
                "thumbnail": "assets/images/slide-cart/ess-mattress-incart.jpg",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 813994,
                "parent_id": 813990,
                "title": "The Essential by Layla",
                "sku": "ESMATT01Q",
                "size": "Queen",
                "dimensions": "60 × 80 × 10",
                "regu_price": 699,
                "sale_price": 549,
                "ship_msg": "Ships in 1-3 Business Days",
                "thumbnail": "assets/images/slide-cart/ess-mattress-incart.jpg",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 813995,
                "parent_id": 813990,
                "title": "The Essential by Layla",
                "sku": "ESMATT01K",
                "size": "King",
                "dimensions": "76 × 80 × 10",
                "regu_price": 799,
                "sale_price": 649,
                "ship_msg": "Ships in 1-3 Business Days",
                "thumbnail": "assets/images/slide-cart/ess-mattress-incart.jpg",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 813996,
                "parent_id": 813990,
                "title": "The Essential by Layla",
                "sku": "ESMATT01CK",
                "size": "Cal King",
                "dimensions": "72 × 84 × 10",
                "regu_price": 799,
                "sale_price": 649,
                "ship_msg": "Ships in 1-3 Business Days",
                "thumbnail": "assets/images/slide-cart/ess-mattress-incart.jpg",
                "show_ship_msg": true,
                "out_of_stock": false
            }
        ]
    },
    {
        "id": 611172,
        "sku": "HYBR01",
        "slug": "hybrid-mattress",
        "title": "Layla Hybrid Mattress",
        "category": [
            "Mattress"
        ],
        "default_size": "Queen",
        "is_promo_prod": false,
        "out_of_stock": false,
        "is_accident_protectable": true,
        "images": {
            "klaviyo": {
                "src": "assets/images/hybrid-mattress-admin-pro.jpg",
                "alt": "Layla Hybrid Mattress",
                "width": 500,
                "height": 400
            },
            "featured": {
                "src": "assets/images/hybrid-mattress-admin-pro.jpg",
                "alt": "Layla Hybrid Mattress",
                "width": 500,
                "height": 400
            },
            "thumbnail": {
                "src": "assets/images/global-img/newImages/hybridMattressThumb.jpg",
                "alt": "Mattress setup in a bedroom",
                "width": 205,
                "height": 135
            }
        },
        "setup_data": {
            "section_title": "Choose Your Setup...",
            "setups": [
                {
                    "title": "Mattress Only",
                    "setup_value": "PRODUCT_ONLY",
                    "offer_txt": "",
                    "box_title": "Enhance your setup and save",
                    "box_subtitle": "Exclusive discounts when you purchase a mattress",
                    "addon_prod_ids": [],
                },
                {
                    "title": "Mattress + Base",
                    "setup_value": "PRODUCT_PLUS_ADDON",
                    "offer_txt": "Save up to $1,018!",
                    "box_title": "Enhance your setup and save",
                    "box_subtitle": "Exclusive discounts when you purchase a mattress",
                    "addon_prod_ids": [
                        612995,
                        56774,
                        823358,
                        124524
                    ]
                }
            ]
        },

        "cross_sell_product_data": {
            "title": "Enhance your setup and save <span>Exclusive discounts when you purchase a mattress</span>",
            "items": [
                {
                    id: 56774,
                    "title": "Memory Foam Topper",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellTopper.jpg",
                        "alt": "Memory Foam Topper",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Make it softer with a plush layer and all the benifits of copper"
                },
                {
                    id: 823358,
                    "title": "Down Alternative Comforter",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellComforter.jpg",
                        "alt": "Down Alternative Comforter",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Bird friendly- down feely all season comforter with duvet loops."
                },
                {
                    id: 124524,
                    "title": "Bamboo Sheets",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBambooSheet.jpg",
                        "alt": "Bamboo Sheets",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Luxurious, soft, and supple. You’ve never felt sheets like this before."
                },
                {
                    id: 128244,
                    "title": "Weighted Blanket",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBlanket.jpg",
                        "alt": "Layla Memory Foam Mattress",
                        "height": 170,
                        "width": 113
                    },
                    "description": "A hugging therapeutic blanket that’s super cozy and helps ease stress"
                },
            ]
        },

        "free_with_purchase": {
            "section_title": "Free with Purchase",
            "products": [
                {
                    "title": "Memory Foam Pillow",
                    "product_id": 632713,
                    "quantity_multiplier": 2
                }
            ]
        },
        "cross_sell_info": {
            "title": "Hybrid Mattress",
            "thumbnail": {
                "src": "assets/images/hybrid-mattress-admin-pro.jpg",
                "alt": "Layla Hybrid Mattress",
                "height": 170,
                "width": 113
            },
            "description": "A mix of memory foam, coil springs, and undeniable swagger."
        },
        "discount": {
            "type": "FIXED",
            "min": 150,
            "max": 150
        },
        "variations": [
            {
                "id": 611179,
                "parent_id": 611172,
                "sku": "HYBR01T",
                "title": "Layla Hybrid Mattress",
                "size": "Twin",
                "dimensions": "38 × 75 × 13",
                "regu_price": 1299,
                "sale_price": 1099,
                "thumbnail": "assets/images/slide-cart/hybrid-incart.jpg",
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 611182,
                "parent_id": 611172,
                "sku": "HYBR01TL",
                "title": "Layla Hybrid Mattress",
                "size": "Twin XL",
                "dimensions": "38 × 80 × 13",
                "regu_price": 1399,
                "sale_price": 1199,
                "thumbnail": "assets/images/slide-cart/hybrid-incart.jpg",
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 611185,
                "parent_id": 611172,
                "sku": "HYBR01F",
                "title": "Layla Hybrid Mattress",
                "size": "Full",
                "dimensions": "54 × 75 × 13",
                "regu_price": 1599,
                "sale_price": 1399,
                "thumbnail": "assets/images/slide-cart/hybrid-incart.jpg",
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 611188,
                "parent_id": 611172,
                "sku": "HYBR01Q",
                "title": "Layla Hybrid Mattress",
                "size": "Queen",
                "dimensions": "60 × 80 × 13",
                "regu_price": 1699,
                "sale_price": 1499,
                "thumbnail": "assets/images/slide-cart/hybrid-incart.jpg",
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 611191,
                "parent_id": 611172,
                "sku": "HYBR01K",
                "title": "Layla Hybrid Mattress",
                "size": "King",
                "dimensions": "76 × 80 × 13",
                "regu_price": 1899,
                "sale_price": 1699,
                "thumbnail": "assets/images/slide-cart/hybrid-incart.jpg",
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 611194,
                "parent_id": 611172,
                "sku": "HYBR01CK",
                "title": "Layla Hybrid Mattress",
                "size": "Cal King",
                "dimensions": "72 × 84 × 13",
                "regu_price": 1899,
                "sale_price": 1699,
                "thumbnail": "assets/images/slide-cart/hybrid-incart.jpg",
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false
            }
        ]
    },
    {
        "id": 981921,
        "sku": "HYBR01-1",
        "slug": "hybrid-s-mattress",
        "title": "Layla Hybrid S Mattress",
        "category": [
            "Mattress"
        ],
        "default_size": "Queen",
        "is_promo_prod": false,
        "out_of_stock": false,
        "is_accident_protectable": true,
        "images": {
            "klaviyo": {
                "src": "assets/images/product-pages/memory-mattress/hybridsImg.jpg",
                "alt": "Layla Hybrid S Mattress",
                "width": 500,
                "height": 400
            },
            "featured": {
                "src": "assets/images/product-pages/memory-mattress/hybridsImg.jpg",
                "alt": "Layla Hybrid S Mattress",
                "width": 500,
                "height": 400
            },
            "thumbnail": {
                "src": "assets/images/product-pages/memory-mattress/hybridsImg.jpg",
                "alt": "Mattress setup in a bedroom",
                "width": 205,
                "height": 135
            }
        },
        "setup_data": {
            "section_title": "Choose Your Setup...",
            "setups": [
                {
                    "title": "Mattress Only",
                    "setup_value": "PRODUCT_ONLY",
                    "offer_txt": "",
                    "box_title": "Enhance your setup and save",
                    "box_subtitle": "Exclusive discounts when you purchase a mattress",
                    "addon_prod_ids": []
                },
                {
                    "title": "Mattress + Base",
                    "setup_value": "PRODUCT_PLUS_ADDON",
                    "offer_txt": "Save up to $1,018!",
                    "box_title": "Enhance your setup and save",
                    "box_subtitle": "Exclusive discounts when you purchase a mattress",
                    "addon_prod_ids": [
                        612995,
                        56774,
                        823358,
                        124524
                    ]
                }
            ]
        },
        "cross_sell_product_data": {
            "title": "Enhance your setup and save <span>Exclusive discounts when you purchase a mattress</span>",
            "items": [
                {
                    id: 56774,
                    "title": "Memory Foam Topper",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellTopper.jpg",
                        "alt": "Memory Foam Topper",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Make it softer with a plush layer and all the benifits of copper"
                },
                {
                    id: 823358,
                    "title": "Down Alternative Comforter",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellComforter.jpg",
                        "alt": "Down Alternative Comforter",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Bird friendly- down feely all season comforter with duvet loops."
                },
                {
                    id: 124524,
                    "title": "Bamboo Sheets",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBambooSheet.jpg",
                        "alt": "Bamboo Sheets",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Luxurious, soft, and supple. You’ve never felt sheets like this before."
                },
                {
                    id: 128244,
                    "title": "Weighted Blanket",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBlanket.jpg",
                        "alt": "Layla Memory Foam Mattress",
                        "height": 170,
                        "width": 113
                    },
                    "description": "A hugging therapeutic blanket that’s super cozy and helps ease stress"
                },
            ]
        },

        "free_with_purchase": {
            "section_title": "Free with Purchase",
            "products": [
                {
                    "title": "Memory Foam Pillow",
                    "product_id": 632713,
                    "quantity_multiplier": 2
                }
            ]
        },
        "cross_sell_info": {
            "title": "Hybrid S Mattress",
            "thumbnail": {
                "src": "assets/images/global-img/newImages/hybridsImg.jpg",
                "alt": "Layla Hybrid S Mattress",
                "height": 170,
                "width": 113
            },
            "description": "A mix of memory foam, coil springs, and undeniable swagger."
        },
        "discount": {
            "type": "FIXED",
            "min": 150,
            "max": 150
        },
        "variations": [
            {
                "id": 981923,
                "parent_id": 981921,
                "sku": "HYBRS01T",
                "title": "Layla Hybrid S Mattress",
                "size": "Twin",
                "dimensions": "38 × 75 × 13",
                "regu_price": 1299,
                "sale_price": 1099,
                "thumbnail": "assets/images/slide-cart/hybrid-incart.jpg",
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 981924,
                "parent_id": 981921,
                "sku": "HYBRS01TL",
                "title": "Layla Hybrid S Mattress",
                "size": "Twin XL",
                "dimensions": "38 × 80 × 13",
                "regu_price": 1399,
                "sale_price": 1199,
                "thumbnail": "assets/images/slide-cart/hybrid-incart.jpg",
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 981925,
                "parent_id": 981921,
                "sku": "HYBRS01F",
                "title": "Layla Hybrid S Mattress",
                "size": "Full",
                "dimensions": "54 × 75 × 13",
                "regu_price": 1599,
                "sale_price": 1399,
                "thumbnail": "assets/images/slide-cart/hybrid-incart.jpg",
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 981922,
                "parent_id": 981921,
                "sku": "HYBRS01Q",
                "title": "Layla Hybrid S Mattress",
                "size": "Queen",
                "dimensions": "60 × 80 × 13",
                "regu_price": 1699,
                "sale_price": 1499,
                "thumbnail": "assets/images/slide-cart/hybrid-incart.jpg",
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 981926,
                "parent_id": 981921,
                "sku": "HYBRS01K",
                "title": "Layla Hybrid S Mattress",
                "size": "King",
                "dimensions": "76 × 80 × 13",
                "regu_price": 1899,
                "sale_price": 1699,
                "thumbnail": "assets/images/slide-cart/hybrid-incart.jpg",
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 981927,
                "parent_id": 981921,
                "sku": "HYBRS01CK",
                "title": "Layla Hybrid S Mattress",
                "size": "Cal King",
                "dimensions": "72 × 84 × 13",
                "regu_price": 1899,
                "sale_price": 1699,
                "thumbnail": "assets/images/slide-cart/hybrid-incart.jpg",
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false
            }
        ]
    },
    {
        "id": 611238,
        "sku": "SMFP01",
        "slug": "shredded-memory-foam-pillow",
        "title": "Layla Memory Foam Pillow",
        "category": [
            "Pillow"
        ],
        "default_size": "Queen",
        "is_promo_prod": false,
        "out_of_stock": false,
        "is_accident_protectable": false,
        "images": {
            "klaviyo": {
                "src": "assets/images/mem-foam-pillow-feat.jpg",
                "alt": "Layla Memory Foam Pillow",
                "width": 500,
                "height": 400
            },
            "featured": {
                "src": "assets/images/mem-foam-pillow-feat.jpg",
                "alt": "Layla Memory Foam Pillow",
                "width": 500,
                "height": 400
            },
            "thumbnail": {
                "src": "assets/images/memory-foam-pillow-hub.jpg",
                "alt": "Memory Foam Pillow",
                "width": 205,
                "height": 135
            }
        },
        "cross_sell_info": {
            "title": "Memory Foam Pillow",
            "thumbnail": {
                "src": "assets/images/mem-foam-pillow-feat.jpg",
                "alt": "Layla Memory Foam Pillow",
                "height": 170,
                "width": 113
            },
            "description": "A shredded memory foam pillow like nothing you've slept with before."
        },
        "cross_sell_product_data": {
            "title": "Enhance your setup and save <span>Exclusive discounts when you purchase a mattress</span>",
            "items": [
                {
                    id: 31729,
                    "title": "Memory Foam Topper",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellTopper.jpg",
                        "alt": "Memory Foam Topper",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Make it softer with a plush layer and all the benifits of copper"
                },
                {
                    id: 611252,
                    "title": "Down Alternative Comforter",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellComforter.jpg",
                        "alt": "Down Alternative Comforter",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Bird friendly- down feely all season comforter with duvet loops."
                },
                {
                    id: 611286,
                    "title": "Bamboo Sheets",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBambooSheet.jpg",
                        "alt": "Bamboo Sheets",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Luxurious, soft, and supple. You’ve never felt sheets like this before."
                },
                {
                    id: 128244,
                    "title": "Weighted Blanket",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBlanket.jpg",
                        "alt": "Layla Memory Foam Mattress",
                        "height": 170,
                        "width": 113
                    },
                    "description": "A hugging therapeutic blanket that’s super cozy and helps ease stress"
                },
            ]
        },

        "discount": {
            "type": "FIXED",
            "min": 0,
            "max": 0
        },
        "variations": [
            {
                "id": 611239,
                "parent_id": 611238,
                "sku": "SMFP01Q",
                "title": "Layla Memory Foam Pillow",
                "size": "Queen",
                "dimensions": "18 × 28",
                "regu_price": 89,
                "sale_price": 59,
                "thumbnail": "assets/images/slide-cart/memory-foam-pillow-incart.jpg",
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 611240,
                "parent_id": 611238,
                "sku": "SMFP01K",
                "title": "Layla Memory Foam Pillow",
                "size": "King",
                "dimensions": "18 × 34",
                "regu_price": 109,
                "sale_price": 79,
                "thumbnail": "assets/images/slide-cart/memory-foam-pillow-incart.jpg",
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false
            }
        ]
    },
    {
        "id": 611286,
        "sku": "ABAS01",
        "slug": "adjustable-bed-base",
        "title": "Layla Adjustable Base",
        "category": [
            "Base"
        ],
        "is_promo_prod": false,
        "out_of_stock": false,
        "is_accident_protectable": true,
        "default_size": "Queen",
        "model": "Base",
        "multi_prod_ids": [],
        "is_compare_model": false,
        "images": {
            "klaviyo": {
                "src": "assets/images/Layla-Adjustable-Base-Twin-XL-Queen-2.jpg",
                "alt": "Layla Adjustable Base",
                "width": 500,
                "height": 400
            },
            "featured": {
                "src": "assets/images/Layla-Adjustable-Base-Twin-XL-Queen-2.jpg",
                "alt": "Layla Adjustable Base",
                "width": 500,
                "height": 400
            },
            "thumbnail": {
                "src": "assets/images/adjustable-hub.jpg",
                "alt": "Layla Adjustable Base",
                "width": 205,
                "height": 135
            }
        },
        "cross_sell_info": {
            "title": "Adjustable Base",
            "thumbnail": {
                "src": "assets/images/crossSell/adjustableBaseImgFull.jpg",
                "alt": "Layla Adjustable Base",
                "height": 170,
                "width": 113
            },
            "description": "Motorized, remote controlled Multi head up/foot up positions Built-in massage"
        },
        "cross_sell_product_data": {
            "title": "Enhance your setup and save <span>Exclusive discounts when you purchase a mattress</span>",
            "items": [
                {
                    id: 56774,
                    "title": "Memory Foam Topper",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellTopper.jpg",
                        "alt": "Memory Foam Topper",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Make it softer with a plush layer and all the benifits of copper"
                },
                {
                    id: 823358,
                    "title": "Down Alternative Comforter",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellComforter.jpg",
                        "alt": "Down Alternative Comforter",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Bird friendly- down feely all season comforter with duvet loops."
                },
                {
                    id: 124524,
                    "title": "Bamboo Sheets",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBambooSheet.jpg",
                        "alt": "Bamboo Sheets",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Luxurious, soft, and supple. You’ve never felt sheets like this before."
                },
                {
                    id: 128244,
                    "title": "Weighted Blanket",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBlanket.jpg",
                        "alt": "Layla Memory Foam Mattress",
                        "height": 170,
                        "width": 113
                    },
                    "description": "A hugging therapeutic blanket that’s super cozy and helps ease stress"
                },
            ]
        },

        "discount": {
            "type": "FIXED_RANGE",
            "min": 200,
            "max": 400
        },
        "variations": [
            {
                "id": 612966,
                "parent_id": 611286,
                "sku": "ABAS01TL",
                "title": "Layla Adjustable Base",
                "size": "Twin XL",
                "dimensions": "37.5 × 79.5 × 5.14",
                "regu_price": 899,
                "sale_price": 699,
                "ship_msg": "Ships in 1-3 business days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/slide-cart/base-incart.jpg"
            },
            {
                "id": 612967,
                "parent_id": 611286,
                "sku": "ABAS01Q",
                "title": "Layla Adjustable Base",
                "size": "Queen",
                "dimensions": "59.5 × 79.5 × 5.14",
                "regu_price": 999,
                "sale_price": 799,
                "ship_msg": "Ships in 1-3 business days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/slide-cart/base-incart.jpg"
            },
            {
                "id": 612969,
                "parent_id": 611286,
                "sku": "ABAS01K",
                "title": "Layla Adjustable Base",
                "size": "King",
                "dimensions": "75.5 × 79.5 × 5.14",
                "regu_price": 1798,
                "sale_price": 1398,
                "ship_msg": "Ships in 1-3 business days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/slide-cart/base-incart.jpg"
            },
            {
                "id": 612968,
                "parent_id": 611286,
                "sku": "ABAS01SK",
                "title": "Layla Adjustable Base",
                "size": "Split King",
                "dimensions": "75.5 × 79.5 × 5.14",
                "regu_price": 1798,
                "sale_price": 1398,
                "ship_msg": "Ships in 1-3 business days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/slide-cart/base-incart.jpg"
            }
        ]
    },
    {
        "id": 20861,
        "sku": "FOUN02",
        "slug": "mattress-foundation",
        "title": "Layla Mattress Foundation",
        "category": [
            "Base"
        ],
        "is_promo_prod": false,
        "out_of_stock": false,
        "is_accident_protectable": true,
        "default_size": "Queen",
        "multi_prod_ids": [],
        "is_compare_model": false,
        "images": {
            "klaviyo": {
                "src": "assets/images/crossSell/foundationImg.png",
                "alt": "Layla Mattress Foundation",
                "width": 500,
                "height": 400
            },
            "featured": {
                "src": "assets/images/crossSell/foundationImg.png",
                "alt": "Layla Mattress Foundation",
                "width": 500,
                "height": 400
            },
            "thumbnail": {
                "src": "assets/images/foundation-hub.jpg",
                "alt": "Layla Mattress Foundation",
                "width": 205,
                "height": 135
            }
        },
        "cross_sell_info": {
            "title": "Mattress Foundation",
            "thumbnail": {
                "src": "assets/images/crossSell/mattressFoundationImgFull.jpg",
                "alt": "Layla Mattress Foundation",
                "height": 170,
                "width": 113
            },
            "description": "A beautiful bedroom piece with solid wooden slats and durable construction."
        },
        "cross_sell_product_data": {
            "title": "Enhance your setup and save <span>Exclusive discounts when you purchase a mattress</span>",
            "items": [
                {
                    id: 56774,
                    "title": "Memory Foam Topper",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellTopper.jpg",
                        "alt": "Memory Foam Topper",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Make it softer with a plush layer and all the benifits of copper"
                },
                {
                    id: 823358,
                    "title": "Down Alternative Comforter",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellComforter.jpg",
                        "alt": "Down Alternative Comforter",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Bird friendly- down feely all season comforter with duvet loops."
                },
                {
                    id: 124524,
                    "title": "Bamboo Sheets",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBambooSheet.jpg",
                        "alt": "Bamboo Sheets",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Luxurious, soft, and supple. You’ve never felt sheets like this before."
                },
                {
                    id: 128244,
                    "title": "Weighted Blanket",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBlanket.jpg",
                        "alt": "Layla Memory Foam Mattress",
                        "height": 170,
                        "width": 113
                    },
                    "description": "A hugging therapeutic blanket that’s super cozy and helps ease stress"
                },
            ]
        },

        "discount": {
            "type": "FIXED",
            "min": 25,
            "max": 25
        },
        "variations": [
            {
                "id": 725,
                "parent_id": 20861,
                "sku": "FOUN02T-G",
                "title": "Layla Mattress Foundation",
                "size": "Twin",
                "dimensions": "37.5 X 74 X 7.5",
                "regu_price": 274,
                "sale_price": 249,
                "thumbnail": "assets/images/crossSell/foundationImg.png",
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 726,
                "parent_id": 20861,
                "sku": "FOUN02TL-G",
                "title": "Layla Mattress Foundation",
                "size": "Twin XL",
                "dimensions": "37.5 X 79 X 7.5",
                "regu_price": 304,
                "sale_price": 279,
                "thumbnail": "assets/images/crossSell/foundationImg.png",
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 727,
                "parent_id": 20861,
                "sku": "FOUN02F-G",
                "title": "Layla Mattress Foundation",
                "size": "Full",
                "dimensions": "52.5 X 74 X 7.5",
                "regu_price": 304,
                "sale_price": 279,
                "thumbnail": "assets/images/crossSell/foundationImg.png",
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 723,
                "parent_id": 20861,
                "sku": "FOUN02Q-G",
                "title": "Layla Mattress Foundation",
                "size": "Queen",
                "dimensions": "59.5 X 79 X 7.5",
                "regu_price": 324,
                "sale_price": 299,
                "thumbnail": "assets/images/crossSell/foundationImg.png",
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 724,
                "parent_id": 20861,
                "sku": "FOUN02K-G",
                "title": "Layla Mattress Foundation",
                "size": "King",
                "dimensions": "75.5 X 79 X 7.5",
                "regu_price": 424,
                "sale_price": 399,
                "thumbnail": "assets/images/crossSell/foundationImg.png",
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 728,
                "parent_id": 20861,
                "sku": "FOUN02CK-G",
                "title": "Layla Mattress Foundation",
                "size": "Cal King",
                "dimensions": "71.5 X 83 X 7.5",
                "regu_price": 424,
                "sale_price": 399,
                "thumbnail": "assets/images/crossSell/foundationImg.png",
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false
            }
        ]
    },
    {
        "id": 31729,
        "sku": "FRAM01",
        "slug": "bed-frame",
        "title": "Layla Bed Frame",
        "category": [
            "Base"
        ],
        "is_promo_prod": false,
        "out_of_stock": false,
        "is_accident_protectable": true,
        "default_size": "Queen",
        "multi_prod_ids": [],
        "is_compare_model": false,
        "images": {
            "klaviyo": {
                "src": "assets/images/layla-product-bedframe.png",
                "alt": "Layla Bed Frame",
                "width": 500,
                "height": 400
            },
            "featured": {
                "src": "assets/images/layla-product-bedframe.png",
                "alt": "Layla Bed Frame",
                "width": 500,
                "height": 400
            },
            "thumbnail": {
                "src": "assets/images/bed-frame-on-sale.jpg",
                "alt": "Layla Bed Frame",
                "width": 205,
                "height": 135
            }
        },
        "cross_sell_info": {
            "title": "Bed Frame",
            "thumbnail": {
                "src": "assets/images/crossSell/crossSellBedFrame.jpg",
                "alt": "Layla Bed Frame",
                "height": 170,
                "width": 113
            },
            "description": "Modern and discreet with solid construction, amazingly simple to assemble."
        },
        "cross_sell_product_data": {
            "title": "Enhance your setup and save <span>Exclusive discounts when you purchase a mattress</span>",
            "items": [
                {
                    id: 56774,
                    "title": "Memory Foam Topper",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellTopper.jpg",
                        "alt": "Memory Foam Topper",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Make it softer with a plush layer and all the benifits of copper"
                },
                {
                    id: 823358,
                    "title": "Down Alternative Comforter",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellComforter.jpg",
                        "alt": "Down Alternative Comforter",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Bird friendly- down feely all season comforter with duvet loops."
                },
                {
                    id: 124524,
                    "title": "Bamboo Sheets",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBambooSheet.jpg",
                        "alt": "Bamboo Sheets",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Luxurious, soft, and supple. You’ve never felt sheets like this before."
                },
                {
                    id: 128244,
                    "title": "Weighted Blanket",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBlanket.jpg",
                        "alt": "Layla Memory Foam Mattress",
                        "height": 170,
                        "width": 113
                    },
                    "description": "A hugging therapeutic blanket that’s super cozy and helps ease stress"
                },
            ]
        },

        "discount": {
            "type": "FIXED",
            "min": 0,
            "max": 0
        },
        "variations": [
            {
                "id": 31731,
                "parent_id": 31729,
                "sku": "FRAM01T",
                "title": "Layla Bed Frame",
                "size": "Twin",
                "dimensions": "38 × 71.5 × 8",
                "regu_price": 179,
                "sale_price": 179,
                "thumbnail": "assets/images/crossSell/bedFrameImg.png",
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 31732,
                "parent_id": 31729,
                "sku": "FRAM01F",
                "title": "Layla Bed Frame",
                "size": "Full",
                "dimensions": "53 × 74 × 8",
                "regu_price": 199,
                "sale_price": 199,
                "thumbnail": "assets/images/crossSell/bedFrameImg.png",
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 31735,
                "parent_id": 31729,
                "sku": "FRAM01Q",
                "title": "Layla Bed Frame",
                "size": "Queen",
                "dimensions": "60 × 74 × 8",
                "regu_price": 199,
                "sale_price": 199,
                "thumbnail": "assets/images/crossSell/bedFrameImg.png",
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 31734,
                "parent_id": 31729,
                "sku": "FRAM01K",
                "title": "Layla Bed Frame",
                "size": "King",
                "dimensions": "76 × 74 × 8",
                "regu_price": 249,
                "sale_price": 249,
                "thumbnail": "assets/images/crossSell/bedFrameImg.png",
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 31733,
                "parent_id": 31729,
                "sku": "FRAM01CK",
                "title": "Layla Bed Frame",
                "size": "Cal King",
                "dimensions": "72 × 74 × 8",
                "regu_price": 249,
                "sale_price": 249,
                "thumbnail": "assets/images/crossSell/bedFrameImg.png",
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false
            }
        ]
    },
    {
        "id": 611252,
        "sku": "PFBA01",
        "slug": "platform-bed",
        "title": "Layla Platform Bed",
        "category": [
            "Base"
        ],
        "is_promo_prod": false,
        "out_of_stock": false,
        "is_accident_protectable": true,
        "default_size": "Queen",
        "multi_prod_ids": [],
        "is_compare_model": false,
        "images": {
            "klaviyo": {
                "src": "assets/images/platform-gal-1.jpg",
                "alt": "Layla Platform Bed",
                "width": 500,
                "height": 400
            },
            "featured": {
                "src": "assets/images/platform-gal-1.jpg",
                "alt": "Layla Platform Bed",
                "width": 500,
                "height": 400
            },
            "thumbnail": {
                "src": "assets/images/platform-hub.jpg",
                "alt": "Layla Platform Bed",
                "width": 205,
                "height": 135
            }
        },
        "cross_sell_info": {
            "title": "Platform Bed",
            "thumbnail": {
                "src": "assets/images/crossSell/platformBedImgFull.jpg",
                "alt": "Layla Platform Bed",
                "height": 170,
                "width": 113
            },
            "description": "A beautiful standalone bedroom piece, easy to assemble with integrated legs."
        },
        "cross_sell_product_data": {
            "title": "Enhance your setup and save <span>Exclusive discounts when you purchase a mattress</span>",
            "items": [
                {
                    id: 56774,
                    "title": "Memory Foam Topper",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellTopper.jpg",
                        "alt": "Memory Foam Topper",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Make it softer with a plush layer and all the benifits of copper"
                },
                {
                    id: 823358,
                    "title": "Down Alternative Comforter",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellComforter.jpg",
                        "alt": "Down Alternative Comforter",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Bird friendly- down feely all season comforter with duvet loops."
                },
                {
                    id: 124524,
                    "title": "Bamboo Sheets",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBambooSheet.jpg",
                        "alt": "Bamboo Sheets",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Luxurious, soft, and supple. You’ve never felt sheets like this before."
                },
                {
                    id: 128244,
                    "title": "Weighted Blanket",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBlanket.jpg",
                        "alt": "Layla Memory Foam Mattress",
                        "height": 170,
                        "width": 113
                    },
                    "description": "A hugging therapeutic blanket that’s super cozy and helps ease stress"
                },
            ]
        },

        "discount": {
            "type": "FIXED",
            "min": 25,
            "max": 25
        },
        "variations": [
            {
                "id": 613005,
                "parent_id": 611252,
                "sku": "PFBA01T-G",
                "title": "Layla Platform Bed",
                "size": "Twin",
                "dimensions": "37.5 X 74 X 13.5",
                "regu_price": 374,
                "sale_price": 349,
                "thumbnail": "assets/images/crossSell/platformBedImg.png",
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 613007,
                "parent_id": 611252,
                "sku": "PFBA01TL-G",
                "title": "Layla Platform Bed",
                "size": "Twin XL",
                "dimensions": "37.5 X 79 X 13.5",
                "regu_price": 374,
                "sale_price": 349,
                "thumbnail": "assets/images/crossSell/platformBedImg.png",
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 613009,
                "parent_id": 611252,
                "sku": "PFBA01F-G",
                "title": "Layla Platform Bed",
                "size": "Full",
                "dimensions": "52.5 X 74 X 13.5",
                "regu_price": 424,
                "sale_price": 399,
                "thumbnail": "assets/images/crossSell/platformBedImg.png",
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 613011,
                "parent_id": 611252,
                "sku": "PFBA01Q-G",
                "title": "Layla Platform Bed",
                "size": "Queen",
                "dimensions": "59.5 X 79 X 13.5",
                "regu_price": 424,
                "sale_price": 399,
                "thumbnail": "assets/images/crossSell/platformBedImg.png",
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 613013,
                "parent_id": 611252,
                "sku": "PFBA01K-G",
                "title": "Layla Platform Bed",
                "size": "King",
                "dimensions": "75.5 X 79 X 13.5",
                "regu_price": 524,
                "sale_price": 499,
                "thumbnail": "assets/images/crossSell/platformBedImg.png",
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 613015,
                "parent_id": 611252,
                "sku": "PFBA01CK-G",
                "title": "Layla Platform Bed",
                "size": "Cal King",
                "dimensions": "71.5 X 83 X 13.5",
                "regu_price": 524,
                "sale_price": 499,
                "thumbnail": "assets/images/crossSell/platformBedImg.png",
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false
            }
        ]
    },
    {
        "id": 612995,
        "sku": "ABAP01",
        "slug": "adjustable-bed-base-plus",
        "title": "Layla Adjustable Base Plus",
        "category": [
            "Base"
        ],
        "default_size": "Queen",
        "is_promo_prod": false,
        "is_accident_protectable": true,
        "model": "Plus",
        "multi_prod_ids": [],
        "is_compare_model": false,
        "out_of_stock": false,
        "images": {
            "klaviyo": {
                "src": "assets/images/layla-adjustable-featured-image.jpg",
                "alt": "Layla Adjustable Base Plus",
                "width": 500,
                "height": 400
            },
            "featured": {
                "src": "assets/images/layla-adjustable-featured-image.jpg",
                "alt": "Layla Adjustable Base Plus",
                "width": 500,
                "height": 400
            },
            "thumbnail": {
                "src": "assets/images/adjustable-hub.jpg",
                "alt": "Layla Adjustable Base Plus",
                "width": 205,
                "height": 135
            }
        },
        "cross_sell_info": {
            "title": "Adjustable Base Plus",
            "thumbnail": {
                "src": "assets/images/crossSell/adjustableBaseImgFull.jpg",
                "alt": "Layla Adjustable Base Plus",
                "height": 170,
                "width": 113
            },
            "description": "<p>Motorized, remote controlled</p><p>Multi head up/foot up positions</p><p>Built-in massage</p>"
        },
        "cross_sell_product_data": {
            "title": "Enhance your setup and save <span>Exclusive discounts when you purchase a mattress</span>",
            "items": [
                {
                    id: 56774,
                    "title": "Memory Foam Topper",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellTopper.jpg",
                        "alt": "Memory Foam Topper",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Make it softer with a plush layer and all the benifits of copper"
                },
                {
                    id: 823358,
                    "title": "Down Alternative Comforter",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellComforter.jpg",
                        "alt": "Down Alternative Comforter",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Bird friendly- down feely all season comforter with duvet loops."
                },
                {
                    id: 124524,
                    "title": "Bamboo Sheets",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBambooSheet.jpg",
                        "alt": "Bamboo Sheets",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Luxurious, soft, and supple. You’ve never felt sheets like this before."
                },
                {
                    id: 128244,
                    "title": "Weighted Blanket",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBlanket.jpg",
                        "alt": "Layla Memory Foam Mattress",
                        "height": 170,
                        "width": 113
                    },
                    "description": "A hugging therapeutic blanket that’s super cozy and helps ease stress"
                },
            ]
        },

        "discount": {
            "type": "FIXED_RANGE",
            "min": 300,
            "max": 600
        },
        "variations": [
            {
                "id": 612996,
                "parent_id": 612995,
                "sku": "ABAP01TL",
                "title": "Layla Adjustable Base Plus",
                "size": "Twin XL",
                "dimensions": "37.5 X 79.5 X 5.14",
                "regu_price": 1399,
                "sale_price": 1099,
                "ship_msg": "Ships in 1-3 business days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/crossSell/baseRenderImg.png"
            },
            {
                "id": 612997,
                "parent_id": 612995,
                "sku": "ABAP01Q",
                "title": "Layla Adjustable Base Plus",
                "size": "Queen",
                "dimensions": "59.5 X 79.5 X 5.14",
                "regu_price": 1499,
                "sale_price": 1199,
                "ship_msg": "Ships in 1-3 business days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/crossSell/baseRenderImg.png"
            },
            {
                "id": 612999,
                "parent_id": 612995,
                "sku": "ABAP01K",
                "title": "Layla Adjustable Base Plus",
                "size": "King",
                "dimensions": "75.5 X 79.5 X 5.14",
                "regu_price": 2798,
                "sale_price": 2198,
                "ship_msg": "Ships in 1-3 business days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/crossSell/baseRenderImg.png"
            },
            {
                "id": 612998,
                "parent_id": 612995,
                "sku": "ABAP01SK",
                "title": "Layla Adjustable Base Plus",
                "size": "Split King",
                "dimensions": "75.5 X 79.5 X 5.14",
                "regu_price": 2798,
                "sale_price": 2198,
                "ship_msg": "Ships in 1-3 business days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/crossSell/baseRenderImg.png"
            }
        ]
    },
    {
        "id": 56774,
        "sku": "TOPP01",
        "slug": "mattress-topper",
        "title": "Layla Memory Foam Topper",
        "descriptive_text": "Truly elevate your bedroom experience.",
        "category": [
            "Accessories"
        ],
        "is_promo_prod": false,
        "default_size": "Queen",
        "out_of_stock": false,
        "is_accident_protectable": false,
        "images": {
            "klaviyo": {
                "src": "assets/images/Layla-Topper.jpg",
                "alt": "Mattress topper on a mattress",
                "width": 500,
                "height": 400
            },
            "featured": {
                "src": "assets/images/Layla-Topper.jpg",
                "alt": "Mattress topper on a mattress",
                "width": 500,
                "height": 400
            },
            "thumbnail": {
                "src": "assets/images/topper-hub.jpg",
                "alt": "Mattress topper on a mattress",
                "width": 205,
                "height": 135
            }
        },
        "cross_sell_info": {
            "title": "Memory Foam Topper",
            "thumbnail": {
                "src": "assets/images/Layla-Topper.jpg",
                "alt": "Layla Memory Foam Topper",
                "height": 170,
                "width": 113
            },
            "description": "Make it softer with a plush layer and all the benifits of copper"
        },
        "cross_sell_product_data": {
            "title": "Enhance your setup and save <span>Exclusive discounts when you purchase a mattress</span>",
            "items": [
                {
                    id: 56774,
                    "title": "Memory Foam Topper",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellTopper.jpg",
                        "alt": "Memory Foam Topper",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Make it softer with a plush layer and all the benifits of copper"
                },
                {
                    id: 823358,
                    "title": "Down Alternative Comforter",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellComforter.jpg",
                        "alt": "Down Alternative Comforter",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Bird friendly- down feely all season comforter with duvet loops."
                },
                {
                    id: 124524,
                    "title": "Bamboo Sheets",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBambooSheet.jpg",
                        "alt": "Bamboo Sheets",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Luxurious, soft, and supple. You’ve never felt sheets like this before."
                },
                {
                    id: 128244,
                    "title": "Weighted Blanket",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBlanket.jpg",
                        "alt": "Layla Memory Foam Mattress",
                        "height": 170,
                        "width": 113
                    },
                    "description": "A hugging therapeutic blanket that’s super cozy and helps ease stress"
                },
            ]
        },

        "discount": {
            "type": "FIXED",
            "min": 100,
            "max": 100
        },
        "variations": [
            {
                "id": 56776,
                "parent_id": 56774,
                "sku": "TOPP01T",
                "title": "Layla Memory Foam Topper",
                "size": "Twin",
                "dimensions": "38 × 75 × 2",
                "regu_price": 289,
                "sale_price": 189,
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/slide-cart/topper-incart.jpg"
            },
            {
                "id": 56777,
                "parent_id": 56774,
                "sku": "TOPP01TL",
                "title": "Layla Memory Foam Topper",
                "size": "Twin XL",
                "dimensions": "38 × 80 × 2",
                "regu_price": 289,
                "sale_price": 189,
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/slide-cart/topper-incart.jpg"
            },
            {
                "id": 56778,
                "parent_id": 56774,
                "sku": "TOPP01F",
                "title": "Layla Memory Foam Topper",
                "size": "Full",
                "dimensions": "54 × 75 × 2",
                "regu_price": 349,
                "sale_price": 249,
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/slide-cart/topper-incart.jpg"
            },
            {
                "id": 56775,
                "parent_id": 56774,
                "sku": "TOPP01Q",
                "title": "Layla Memory Foam Topper",
                "size": "Queen",
                "dimensions": "60 × 80 × 2",
                "regu_price": 349,
                "sale_price": 249,
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/slide-cart/topper-incart.jpg"
            },
            {
                "id": 56780,
                "parent_id": 56774,
                "sku": "TOPP01K",
                "title": "Layla Memory Foam Topper",
                "size": "King",
                "dimensions": "76 × 80 × 2",
                "regu_price": 449,
                "sale_price": 349,
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/slide-cart/topper-incart.jpg"
            },
            {
                "id": 56779,
                "parent_id": 56774,
                "sku": "TOPP01CK",
                "title": "Layla Memory Foam Topper",
                "size": "Cal King",
                "dimensions": "72 × 84 × 2",
                "regu_price": 449,
                "sale_price": 349,
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/slide-cart/topper-incart.jpg"
            }
        ]
    },
    {
        "id": 611268,
        "sku": "MPES01",
        "slug": "essential-mattress-protector",
        "title": "Layla Essential Mattress Protector",
        "category": [
            "Accessories"
        ],
        "model": "Essential",
        "is_promo_prod": false,
        "default_size": "Queen",
        "out_of_stock": false,
        "multi_prod_ids": [
            611268,
            612947,
            612955
        ],
        "is_accident_protectable": false,
        "images": {
            "klaviyo": {
                "src": "assets/images/essential-transparent.png",
                "alt": "Essential Mattress Protector",
                "width": 500,
                "height": 400
            },
            "featured": {
                "src": "assets/images/essential-transparent.png",
                "alt": "Essential Mattress Protector",
                "width": 500,
                "height": 400
            },
            "thumbnail": {
                "src": "assets/images/protector-hub.jpg",
                "alt": "Essential Mattress Protector",
                "width": 205,
                "height": 135
            }
        },
        "cross_sell_info": {
            "title": "Essential Mattress Protector",
            "thumbnail": {
                "src": "assets/images/essential-transparent.png",
                "src2": "assets/images/crossSell/mattressProtectorSlideoutThumb.png",
                "alt": "Layla Essential Mattress Protector",
                "height": 170,
                "width": 113
            },
            "description": "<p>Liquid-proof, breathable,</p> <p>repels stains, Hypoallergenic.</p>",
            "description_inline": "<p>Liquid-proof, breathable, repels stains, Hypoallergenic.</p>",
        },
        "cross_sell_product_data": {
            "title": "Enhance your setup and save <span>Exclusive discounts when you purchase a mattress</span>",
            "items": [
                {
                    id: 56774,
                    "title": "Memory Foam Topper",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellTopper.jpg",
                        "alt": "Memory Foam Topper",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Make it softer with a plush layer and all the benifits of copper"
                },
                {
                    id: 823358,
                    "title": "Down Alternative Comforter",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellComforter.jpg",
                        "alt": "Down Alternative Comforter",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Bird friendly- down feely all season comforter with duvet loops."
                },
                {
                    id: 124524,
                    "title": "Bamboo Sheets",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBambooSheet.jpg",
                        "alt": "Bamboo Sheets",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Luxurious, soft, and supple. You’ve never felt sheets like this before."
                },
                {
                    id: 128244,
                    "title": "Weighted Blanket",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBlanket.jpg",
                        "alt": "Layla Memory Foam Mattress",
                        "height": 170,
                        "width": 113
                    },
                    "description": "A hugging therapeutic blanket that’s super cozy and helps ease stress"
                },
            ]
        },
        "discount": {
            "type": "FIXED",
            "min": 45,
            "max": 45
        },
        "variations": [
            {
                "id": 611278,
                "parent_id": 611268,
                "sku": "MPES01T",
                "title": "Layla Essential Mattress Protector",
                "size": "Twin",
                "dimensions": "35 × 75 × 14",
                "regu_price": 94,
                "sale_price": 49,
                "thumbnail": "assets/images/slide-cart/essential-protector-incart.jpg",
                "ship_msg": "Ships in 1-3 business days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 611279,
                "parent_id": 611268,
                "sku": "MPES01TL",
                "title": "Layla Essential Mattress Protector",
                "size": "Twin XL",
                "dimensions": "35 × 80 × 14",
                "regu_price": 94,
                "sale_price": 49,
                "thumbnail": "assets/images/slide-cart/essential-protector-incart.jpg",
                "ship_msg": "Ships in 1-3 business days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 611280,
                "parent_id": 611268,
                "sku": "MPES01F",
                "title": "Layla Essential Mattress Protector",
                "size": "Full",
                "dimensions": "54 × 75 × 14",
                "regu_price": 104,
                "sale_price": 59,
                "thumbnail": "assets/images/slide-cart/essential-protector-incart.jpg",
                "ship_msg": "Ships in 1-3 business days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 611281,
                "parent_id": 611268,
                "sku": "MPES01Q",
                "title": "Layla Essential Mattress Protector",
                "size": "Queen",
                "dimensions": "60 × 80 × 14",
                "regu_price": 104,
                "sale_price": 59,
                "thumbnail": "assets/images/slide-cart/essential-protector-incart.jpg",
                "ship_msg": "Ships in 1-3 business days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 611282,
                "parent_id": 611268,
                "sku": "MPES01K",
                "title": "Layla Essential Mattress Protector",
                "size": "King",
                "dimensions": "76 × 80 × 14",
                "regu_price": 114,
                "sale_price": 69,
                "thumbnail": "assets/images/slide-cart/essential-protector-incart.jpg",
                "ship_msg": "Ships in 1-3 business days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 611283,
                "parent_id": 611268,
                "sku": "MPES01CK",
                "title": "Layla Essential Mattress Protector",
                "size": "Cal King",
                "dimensions": "72 × 84 × 14",
                "regu_price": 114,
                "sale_price": 69,
                "thumbnail": "assets/images/slide-cart/essential-protector-incart.jpg",
                "ship_msg": "Ships in 1-3 business days",
                "show_ship_msg": true,
                "out_of_stock": false
            }
        ]
    },
    {
        "id": 612947,
        "sku": "MPCO01",
        "slug": "cooling-mattress-protector",
        "title": "Layla Cooling Mattress Protector",
        "category": [
            "Accessories"
        ],
        "model": "Cooling",
        "is_promo_prod": false,
        "default_size": "Queen",
        "out_of_stock": false,
        "multi_prod_ids": [
            611268,
            612947,
            612955
        ],
        "is_accident_protectable": false,
        "images": {
            "klaviyo": {
                "src": "assets/images/global-img/newImages/coolingProtectThumb.png",
                "alt": "Layla Cooling Mattress Protector",
                "width": 500,
                "height": 400
            },
            "featured": {
                "src": "assets/images/global-img/newImages/coolingProtectThumb.png",
                "alt": "Layla Cooling Mattress Protector",
                "width": 500,
                "height": 400
            },
            "thumbnail": {
                "src": "assets/images/protector-hub.jpg",
                "alt": "Layla Cooling Mattress Protector",
                "width": 205,
                "height": 135
            }
        },
        "cross_sell_info": {
            "title": "Cooling Mattress Protector",
            "thumbnail": {
                "src": "assets/images/global-img/newImages/coolingProtectThumb.png",
                "alt": "Layla Cooling Mattress Protector",
                "height": 170,
                "width": 113
            },
            "description": "<p>Liquid-proof, breathable,</p> <p>repels stains, Hypoallergenic.</p>"
        },
        "cross_sell_product_data": {
            "title": "Enhance your setup and save <span>Exclusive discounts when you purchase a mattress</span>",
            "items": [
                {
                    id: 56774,
                    "title": "Memory Foam Topper",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellTopper.jpg",
                        "alt": "Memory Foam Topper",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Make it softer with a plush layer and all the benifits of copper"
                },
                {
                    id: 823358,
                    "title": "Down Alternative Comforter",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellComforter.jpg",
                        "alt": "Down Alternative Comforter",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Bird friendly- down feely all season comforter with duvet loops."
                },
                {
                    id: 124524,
                    "title": "Bamboo Sheets",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBambooSheet.jpg",
                        "alt": "Bamboo Sheets",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Luxurious, soft, and supple. You’ve never felt sheets like this before."
                },
                {
                    id: 128244,
                    "title": "Weighted Blanket",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBlanket.jpg",
                        "alt": "Layla Memory Foam Mattress",
                        "height": 170,
                        "width": 113
                    },
                    "description": "A hugging therapeutic blanket that’s super cozy and helps ease stress"
                },
            ]
        },

        "discount": {
            "type": "FIXED",
            "min": 65,
            "max": 65
        },
        "variations": [
            {
                "id": 612948,
                "parent_id": 612947,
                "sku": "MPCO01T",
                "title": "Layla Cooling Mattress Protector",
                "size": "Twin",
                "dimensions": "35 x 75 x 14",
                "regu_price": 144,
                "sale_price": 79,
                "thumbnail": "assets/images/slide-cart/cooling-protector-incart.jpg",
                "ship_msg": "Ships in 1-3 business days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 612949,
                "parent_id": 612947,
                "sku": "MPCO01TL",
                "title": "Layla Cooling Mattress Protector",
                "size": "Twin XL",
                "dimensions": "35 x 80 x 14",
                "regu_price": 144,
                "sale_price": 79,
                "thumbnail": "assets/images/slide-cart/cooling-protector-incart.jpg",
                "ship_msg": "Ships in 1-3 business days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 612950,
                "parent_id": 612947,
                "sku": "MPCO01F",
                "title": "Layla Cooling Mattress Protector",
                "size": "Full",
                "dimensions": "54 x 75 x 14",
                "regu_price": 164,
                "sale_price": 99,
                "thumbnail": "assets/images/slide-cart/cooling-protector-incart.jpg",
                "ship_msg": "Ships in 1-3 business days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 612951,
                "parent_id": 612947,
                "sku": "MPCO01Q",
                "title": "Layla Cooling Mattress Protector",
                "size": "Queen",
                "dimensions": "60 x 80 x 14",
                "regu_price": 164,
                "sale_price": 99,
                "thumbnail": "assets/images/slide-cart/cooling-protector-incart.jpg",
                "ship_msg": "Ships in 1-3 business days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 612952,
                "parent_id": 612947,
                "sku": "MPCO01K",
                "title": "Layla Cooling Mattress Protector",
                "size": "King",
                "dimensions": "76 x 80 x 14",
                "regu_price": 184,
                "sale_price": 119,
                "thumbnail": "assets/images/slide-cart/cooling-protector-incart.jpg",
                "ship_msg": "Ships in 1-3 business days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 612953,
                "parent_id": 612947,
                "sku": "MPCO01CK",
                "title": "Layla Cooling Mattress Protector",
                "size": "Cal King",
                "dimensions": "72 x 84 x 14",
                "regu_price": 184,
                "sale_price": 119,
                "thumbnail": "assets/images/slide-cart/cooling-protector-incart.jpg",
                "ship_msg": "Ships in 1-3 business days",
                "show_ship_msg": true,
                "out_of_stock": false
            }
        ]
    },
    {
        "id": 612955,
        "sku": "MPFC01",
        "slug": "full-encasement-mattress-protector",
        "title": "Layla Full Encasement Mattress Protector",
        "category": [
            "Accessories"
        ],
        "model": "Full Encasement",
        "is_promo_prod": false,
        "default_size": "Queen",
        "out_of_stock": false,
        "multi_prod_ids": [
            611268,
            612947,
            612955
        ],
        "is_accident_protectable": false,
        "images": {
            "klaviyo": {
                "src": "assets/images/fullencasement-featured-transparent.png",
                "alt": "Layla Full Encasement Mattress Protector",
                "width": 500,
                "height": 400
            },
            "featured": {
                "src": "assets/images/fullencasement-featured-transparent.png",
                "alt": "Layla Full Encasement Mattress Protector",
                "width": 500,
                "height": 400
            },
            "thumbnail": {
                "src": "assets/images/protector-hub.jpg",
                "alt": "Layla Full Encasement Mattress Protector",
                "width": 205,
                "height": 135
            }
        },
        "cross_sell_info": {
            "title": "Full Encasement Mattress Protector",
            "thumbnail": {
                "src": "assets/images/fullencasement-featured-transparent.png",
                "alt": "Layla Full Encasement Mattress Protector",
                "height": 170,
                "width": 113
            },
            "description": "<p>Liquid-proof, breathable,</p> <p>repels stains, Hypoallergenic.</p>"
        },
        "cross_sell_product_data": {
            "title": "Enhance your setup and save <span>Exclusive discounts when you purchase a mattress</span>",
            "items": [
                {
                    id: 56774,
                    "title": "Memory Foam Topper",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellTopper.jpg",
                        "alt": "Memory Foam Topper",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Make it softer with a plush layer and all the benifits of copper"
                },
                {
                    id: 823358,
                    "title": "Down Alternative Comforter",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellComforter.jpg",
                        "alt": "Down Alternative Comforter",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Bird friendly- down feely all season comforter with duvet loops."
                },
                {
                    id: 124524,
                    "title": "Bamboo Sheets",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBambooSheet.jpg",
                        "alt": "Bamboo Sheets",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Luxurious, soft, and supple. You’ve never felt sheets like this before."
                },
                {
                    id: 128244,
                    "title": "Weighted Blanket",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBlanket.jpg",
                        "alt": "Layla Memory Foam Mattress",
                        "height": 170,
                        "width": 113
                    },
                    "description": "A hugging therapeutic blanket that’s super cozy and helps ease stress"
                },
            ]
        },

        "discount": {
            "type": "FIXED",
            "min": 65,
            "max": 65
        },
        "variations": [
            {
                "id": 612956,
                "parent_id": 612955,
                "sku": "MPFC01T",
                "title": "Layla Full Encasement Mattress Protector",
                "size": "Twin",
                "dimensions": "35 x 75 x 14",
                "regu_price": 124,
                "sale_price": 59,
                "thumbnail": "assets/images/slide-cart/full-encasement-protector-incart.jpg",
                "ship_msg": "Ships in 1-3 business days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 612957,
                "parent_id": 612955,
                "sku": "MPFC01TL",
                "title": "Layla Full Encasement Mattress Protector",
                "size": "Twin XL",
                "dimensions": "35 x 80 x 14",
                "regu_price": 124,
                "sale_price": 59,
                "thumbnail": "assets/images/slide-cart/full-encasement-protector-incart.jpg",
                "ship_msg": "Ships in 1-3 business days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 612958,
                "parent_id": 612955,
                "sku": "MPFC01F",
                "title": "Layla Full Encasement Mattress Protector",
                "size": "Full",
                "dimensions": "54 x 75 x 14",
                "regu_price": 134,
                "sale_price": 69,
                "thumbnail": "assets/images/slide-cart/full-encasement-protector-incart.jpg",
                "ship_msg": "Ships in 1-3 business days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 612959,
                "parent_id": 612955,
                "sku": "MPFC01Q",
                "title": "Layla Full Encasement Mattress Protector",
                "size": "Queen",
                "dimensions": "60 x 80 x 14",
                "regu_price": 134,
                "sale_price": 69,
                "thumbnail": "assets/images/slide-cart/full-encasement-protector-incart.jpg",
                "ship_msg": " in 1-3 business days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 612960,
                "parent_id": 612955,
                "sku": "MPFC01K",
                "title": "Layla Full Encasement Mattress Protector",
                "size": "King",
                "dimensions": "76 x 80 x 14",
                "regu_price": 144,
                "sale_price": 79,
                "thumbnail": "assets/images/slide-cart/full-encasement-protector-incart.jpg",
                "ship_msg": "Ships in 1-3 business days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 612961,
                "parent_id": 612955,
                "sku": "MPFC01CK",
                "title": "Layla Full Encasement Mattress Protector",
                "size": "Cal King",
                "dimensions": "72 x 84 x 14",
                "regu_price": 144,
                "sale_price": 79,
                "thumbnail": "assets/images/slide-cart/full-encasement-protector-incart.jpg",
                "ship_msg": "Ships in 1-3 business days",
                "show_ship_msg": true,
                "out_of_stock": false
            }
        ]
    },
    {
        "id": 611220,
        "sku": "PETB01",
        "slug": "pet-bed",
        "title": "Layla Pet Bed",
        "category": [
            "Accessories"
        ],
        "is_promo_prod": false,
        "default_size": "Large",
        "out_of_stock": false,
        "is_accident_protectable": false,
        "images": {
            "klaviyo": {
                "src": "assets/images/layla-pet-bed-featured.jpg",
                "alt": "Layla Pet Bed",
                "width": 500,
                "height": 400
            },
            "featured": {
                "src": "assets/images/layla-pet-bed-featured.jpg",
                "alt": "Layla Pet Bed",
                "width": 500,
                "height": 400
            },
            "thumbnail": {
                "src": "assets/images/pet-bed-hub.jpg",
                "alt": "Layla Pet Bed",
                "width": 205,
                "height": 135
            }
        },
        "cross_sell_info": {
            "title": "Pet Bed",
            "thumbnail": {
                "src": "assets/images/layla-pet-bed-featured.jpg",
                "alt": "Layla Pet Bed",
                "height": 170,
                "width": 113
            },
            "description": "We love our pets, so we loaded this pet bed with awesome features."
        },
        "cross_sell_product_data": {
            "title": "Enhance your setup and save <span>Exclusive discounts when you purchase a mattress</span>",
            "items": [
                {
                    id: 56774,
                    "title": "Memory Foam Topper",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellTopper.jpg",
                        "alt": "Memory Foam Topper",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Make it softer with a plush layer and all the benifits of copper"
                },
                {
                    id: 823358,
                    "title": "Down Alternative Comforter",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellComforter.jpg",
                        "alt": "Down Alternative Comforter",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Bird friendly- down feely all season comforter with duvet loops."
                },
                {
                    id: 124524,
                    "title": "Bamboo Sheets",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBambooSheet.jpg",
                        "alt": "Bamboo Sheets",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Luxurious, soft, and supple. You’ve never felt sheets like this before."
                },
                {
                    id: 128244,
                    "title": "Weighted Blanket",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBlanket.jpg",
                        "alt": "Layla Memory Foam Mattress",
                        "height": 170,
                        "width": 113
                    },
                    "description": "A hugging therapeutic blanket that’s super cozy and helps ease stress"
                },
            ]
        },

        "discount": {
            "type": "FIXED",
            "min": 0,
            "max": 0
        },
        "variations": [
            {
                "id": 611221,
                "parent_id": 611220,
                "sku": "PETB01S",
                "title": "Layla Pet Bed",
                "size": "Small",
                "dimensions": "19 × 26 × 5",
                "regu_price": 174,
                "sale_price": 149,
                "thumbnail": "assets/images/slide-cart/pet-bed-incart.jpg",
                "ship_msg": "Ships in 1-3 business days",
                "out_of_stock": true,
                "show_ship_msg": false
            },
            {
                "id": 611222,
                "parent_id": 611220,
                "sku": "PETB01M",
                "title": "Layla Pet Bed",
                "size": "Medium",
                "dimensions": "25 × 33 × 5",
                "regu_price": 204,
                "sale_price": 179,
                "thumbnail": "assets/images/slide-cart/pet-bed-medium-incart.jpg",
                "ship_msg": "Ships in 1-3 business days",
                "out_of_stock": true,
                "show_ship_msg": false
            },
            {
                "id": 611223,
                "parent_id": 611220,
                "sku": "PETB01L",
                "title": "Layla Pet Bed",
                "size": "Large",
                "dimensions": "32 × 43 × 5",
                "regu_price": 284,
                "sale_price": 259,
                "thumbnail": "assets/images/slide-cart/pet-bed-large-incart.jpg",
                "ship_msg": "Ships in 1-3 business days",
                "show_ship_msg": true,
                "out_of_stock": false
            }
        ]
    },
    {
        "id": 632713,
        "sku": "SMF01",
        "slug": "premium-shredded-memory-foam-pillow-free",
        "title": "Layla Memory Foam Pillow - Free",
        "category": [
            "Comp Pillow"
        ],
        "is_promo_prod": false,
        "default_size": "Queen",
        "out_of_stock": false,
        "is_accident_protectable": false,
        "images": {
            "klaviyo": {
                "src": "assets/images/ftimg/freepillow_feat.png",
                "alt": "Layla Memory Foam Pillow - Free",
                "width": 500,
                "height": 400
            },
            "featured": {
                "src": "assets/images/ftimg/freepillow_feat.png",
                "alt": "Layla Memory Foam Pillow - Free",
                "width": 500,
                "height": 400
            },
            "thumbnail": {
                "src": "assets/images/ftimg/freepillow_feat.png",
                "alt": "Layla Memory Foam Pillow - Free",
                "width": 205,
                "height": 135
            }
        },
        "cross_sell_info": {
            "title": "Layla Memory Foam Pillow - Free",
            "thumbnail": {
                "src": "assets/images/slide-cart/memory-foam-pillow-incart.jpg",
                "alt": "Layla Memory Foam Pillow - Free",
                "height": 170,
                "width": 113
            },
            "description": ""
        },
        "cross_sell_product_data": {
            "title": "Enhance your setup and save <span>Exclusive discounts when you purchase a mattress</span>",
            "items": [
                {
                    id: 56774,
                    "title": "Memory Foam Topper",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellTopper.jpg",
                        "alt": "Memory Foam Topper",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Make it softer with a plush layer and all the benifits of copper"
                },
                {
                    id: 823358,
                    "title": "Down Alternative Comforter",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellComforter.jpg",
                        "alt": "Down Alternative Comforter",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Bird friendly- down feely all season comforter with duvet loops."
                },
                {
                    id: 124524,
                    "title": "Bamboo Sheets",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBambooSheet.jpg",
                        "alt": "Bamboo Sheets",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Luxurious, soft, and supple. You’ve never felt sheets like this before."
                },
                {
                    id: 128244,
                    "title": "Weighted Blanket",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBlanket.jpg",
                        "alt": "Layla Memory Foam Mattress",
                        "height": 170,
                        "width": 113
                    },
                    "description": "A hugging therapeutic blanket that’s super cozy and helps ease stress"
                },
            ]
        },

        "discount": {
            "type": "FIXED",
            "min": 0,
            "max": 0
        },
        "variations": [
            {
                "id": 832131,
                "parent_id": 632713,
                "sku": "SMF01Q-FR",
                "title": "Layla Memory Foam Pillow - Free",
                "size": "Queen",
                "dimensions": "",
                "regu_price": 89,
                "sale_price": 0,
                "thumbnail": "assets/images/crossSell/pillowRenderImg.png",
                "ship_msg": "Ready to ship",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 832132,
                "parent_id": 632713,
                "sku": "SMF01K-FR",
                "title": "Layla Memory Foam Pillow - Free",
                "size": "King",
                "dimensions": "",
                "regu_price": 109,
                "sale_price": 0,
                "thumbnail": "assets/images/crossSell/pillowRenderImg.png",
                "ship_msg": "Ready to ship",
                "show_ship_msg": true,
                "out_of_stock": false
            }
        ]
    },
    {
        "id": 716418,
        "sku": "HYBRCOV01",
        "slug": "hybrid-mattress-cover",
        "title": "Hybrid Mattress Cover",
        "category": [
            "Addon"
        ],
        "is_promo_prod": false,
        "default_size": "Queen",
        "out_of_stock": false,
        "is_accident_protectable": false,
        "images": {
            "klaviyo": {
                "src": "assets/images/zen-guide-category-image-600x420.jpg",
                "alt": "Hybrid Mattress Cover",
                "width": 500,
                "height": 400
            },
            "featured": {
                "src": "assets/images/zen-guide-category-image-600x420.jpg",
                "alt": "Hybrid Mattress Cover",
                "width": 500,
                "height": 400
            },
            "thumbnail": {
                "src": "assets/images/zen-guide-category-image-600x420.jpg",
                "alt": "Hybrid Mattress Cover",
                "width": 205,
                "height": 135
            }
        },
        "cross_sell_info": {
            "title": "Layla Memory Foam Mattress",
            "thumbnail": {
                "src": "assets/images/zen-guide-category-image-600x420.jpg",
                "alt": "Hybrid Mattress Cover",
                "height": 170,
                "width": 113
            },
            "description": ""
        },
        "cross_sell_product_data": {
            "title": "Enhance your setup and save <span>Exclusive discounts when you purchase a mattress</span>",
            "items": [
                {
                    id: 56774,
                    "title": "Memory Foam Topper",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellTopper.jpg",
                        "alt": "Memory Foam Topper",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Make it softer with a plush layer and all the benifits of copper"
                },
                {
                    id: 823358,
                    "title": "Down Alternative Comforter",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellComforter.jpg",
                        "alt": "Down Alternative Comforter",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Bird friendly- down feely all season comforter with duvet loops."
                },
                {
                    id: 124524,
                    "title": "Bamboo Sheets",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBambooSheet.jpg",
                        "alt": "Bamboo Sheets",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Luxurious, soft, and supple. You’ve never felt sheets like this before."
                },
                {
                    id: 128244,
                    "title": "Weighted Blanket",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBlanket.jpg",
                        "alt": "Layla Memory Foam Mattress",
                        "height": 170,
                        "width": 113
                    },
                    "description": "A hugging therapeutic blanket that’s super cozy and helps ease stress"
                },
            ]
        },

        "discount": {
            "type": "FIXED",
            "min": 0,
            "max": 0
        },
        "variations": [
            {
                "id": 716420,
                "parent_id": 716418,
                "title": "Hybrid Mattress Cover",
                "sku": "HYBRCOV01T",
                "size": "Twin",
                "dimensions": "",
                "regu_price": 250.78,
                "sale_price": 250.78,
                "ship_msg": "Ready To Ship",
                "thumbnail": "assets/images/zen-guide-category-image-600x420.jpg",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 716421,
                "parent_id": 716418,
                "title": "Hybrid Mattress Cover",
                "sku": "HYBRCOV01TL",
                "size": "Twin XL",
                "dimensions": "",
                "regu_price": 250.78,
                "sale_price": 250.78,
                "ship_msg": "Ready To Ship",
                "thumbnail": "assets/images/zen-guide-category-image-600x420.jpg",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 716422,
                "parent_id": 716418,
                "title": "Hybrid Mattress Cover",
                "sku": "HYBRCOV01F",
                "size": "Full",
                "dimensions": "",
                "regu_price": 289.5,
                "sale_price": 289.5,
                "ship_msg": "Ready To Ship",
                "thumbnail": "assets/images/zen-guide-category-image-600x420.jpg",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 716419,
                "parent_id": 716418,
                "title": "Hybrid Mattress Cover",
                "sku": "HYBRCOV01Q",
                "size": "Queen",
                "dimensions": "",
                "regu_price": 289.5,
                "sale_price": 289.5,
                "ship_msg": "Ready To Ship",
                "thumbnail": "assets/images/zen-guide-category-image-600x420.jpg",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 716423,
                "parent_id": 716418,
                "title": "Hybrid Mattress Cover",
                "sku": "HYBRCOV01K",
                "size": "King",
                "dimensions": "",
                "regu_price": 335.25,
                "sale_price": 335.25,
                "ship_msg": "Ready To Ship",
                "thumbnail": "assets/images/zen-guide-category-image-600x420.jpg",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 716424,
                "parent_id": 716418,
                "title": "Hybrid Mattress Cover",
                "sku": "HYBRCOV01CK",
                "size": "Cal King",
                "dimensions": "",
                "regu_price": 335.25,
                "sale_price": 335.25,
                "ship_msg": "Ready To Ship",
                "thumbnail": "assets/images/zen-guide-category-image-600x420.jpg",
                "show_ship_msg": true,
                "out_of_stock": false
            }
        ]
    },
    {
        "id": 106923,
        "sku": "MATTCOV02",
        "slug": "memory-foam-mattress-cover",
        "title": "Memory Foam Mattress Cover",
        "category": [
            "Addon"
        ],
        "is_promo_prod": false,
        "default_size": "Queen",
        "out_of_stock": false,
        "is_accident_protectable": false,
        "images": {
            "klaviyo": {
                "src": "assets/images/slide-cart/memory-foam-mattress-incart.jpg",
                "alt": "Memory Foam Mattress Cover",
                "width": 500,
                "height": 400
            },
            "featured": {
                "src": "assets/images/slide-cart/memory-foam-mattress-incart.jpg",
                "alt": "Memory Foam Mattress Cover",
                "width": 500,
                "height": 400
            },
            "thumbnail": {
                "src": "assets/images/slide-cart/memory-foam-mattress-incart.jpg",
                "alt": "Memory Foam Mattress Cover",
                "width": 205,
                "height": 135
            }
        },
        "cross_sell_info": {
            "title": "Layla Memory Foam Mattress Cover",
            "thumbnail": {
                "src": "assets/images/slide-cart/memory-foam-mattress-incart.jpg",
                "alt": "Memory Foam Mattress Cover",
                "height": 170,
                "width": 113
            },
            "description": ""
        },
        "cross_sell_product_data": {
            "title": "Enhance your setup and save <span>Exclusive discounts when you purchase a mattress</span>",
            "items": [
                {
                    id: 56774,
                    "title": "Memory Foam Topper",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellTopper.jpg",
                        "alt": "Memory Foam Topper",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Make it softer with a plush layer and all the benifits of copper"
                },
                {
                    id: 823358,
                    "title": "Down Alternative Comforter",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellComforter.jpg",
                        "alt": "Down Alternative Comforter",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Bird friendly- down feely all season comforter with duvet loops."
                },
                {
                    id: 124524,
                    "title": "Bamboo Sheets",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBambooSheet.jpg",
                        "alt": "Bamboo Sheets",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Luxurious, soft, and supple. You’ve never felt sheets like this before."
                },
                {
                    id: 128244,
                    "title": "Weighted Blanket",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBlanket.jpg",
                        "alt": "Layla Memory Foam Mattress",
                        "height": 170,
                        "width": 113
                    },
                    "description": "A hugging therapeutic blanket that’s super cozy and helps ease stress"
                },
            ]
        },

        "discount": {
            "type": "FIXED",
            "min": 0,
            "max": 0
        },
        "variations": [
            {
                "id": 106935,
                "parent_id": 106923,
                "title": "Memory Foam Mattress Cover",
                "sku": "MATTCOV02-T",
                "size": "Twin",
                "dimensions": "",
                "regu_price": 150.78,
                "sale_price": 150.78,
                "ship_msg": "Ready To Ship",
                "thumbnail": "assets/images/slide-cart/memory-foam-mattress-incart.jpg",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 106933,
                "parent_id": 106923,
                "title": "Memory Foam Mattress Cover",
                "sku": "MATTCOV02-TL",
                "size": "Twin XL",
                "dimensions": "",
                "regu_price": 150.78,
                "sale_price": 150.78,
                "ship_msg": "Ready To Ship",
                "thumbnail": "assets/images/slide-cart/memory-foam-mattress-incart.jpg",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 106931,
                "parent_id": 106923,
                "title": "Memory Foam Mattress Cover",
                "sku": "MATTCOV02-F",
                "size": "Full",
                "dimensions": "",
                "regu_price": 190.5,
                "sale_price": 190.5,
                "ship_msg": "Ready To Ship",
                "thumbnail": "assets/images/slide-cart/memory-foam-mattress-incart.jpg",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 106929,
                "parent_id": 106923,
                "title": "Memory Foam Mattress Cover",
                "sku": "MATTCOV02-Q",
                "size": "Queen",
                "dimensions": "",
                "regu_price": 190.5,
                "sale_price": 190.5,
                "ship_msg": "Ready To Ship",
                "thumbnail": "assets/images/slide-cart/memory-foam-mattress-incart.jpg",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 106927,
                "parent_id": 106923,
                "title": "Memory Foam Mattress Cover",
                "sku": "MATTCOV02-K",
                "size": "King",
                "dimensions": "",
                "regu_price": 219.25,
                "sale_price": 219.25,
                "ship_msg": "Ready To Ship",
                "thumbnail": "assets/images/slide-cart/memory-foam-mattress-incart.jpg",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 106925,
                "parent_id": 106923,
                "title": "Memory Foam Mattress Cover",
                "sku": "MATTCOV02-CK",
                "size": "Cal King",
                "dimensions": "",
                "regu_price": 219.25,
                "sale_price": 219.25,
                "ship_msg": "Ready To Ship",
                "thumbnail": "assets/images/slide-cart/memory-foam-mattress-incart.jpg",
                "show_ship_msg": true,
                "out_of_stock": false
            }
        ]
    },
    {
        "id": 929063,
        "sku": "ESMATTCOV02-Q",
        "slug": "essential-mattress-covers",
        "title": "Essential Mattress Covers",
        "category": [
            "Covers"
        ],
        "is_promo_prod": false,
        "default_size": "Queen",
        "out_of_stock": false,
        "is_accident_protectable": false,
        "images": {
            "klaviyo": {
                "src": "assets/images/Layla_V_10_6-300x168.jpg",
                "alt": "Essential Mattress Covers",
                "width": 500,
                "height": 400
            },
            "featured": {
                "src": "assets/images/Layla_V_10_6-300x168.jpg",
                "alt": "Essential Mattress Covers",
                "width": 500,
                "height": 400
            },
            "thumbnail": {
                "src": "assets/images/Layla_V_10_6-300x168.jpg",
                "alt": "Essential Mattress Covers",
                "width": 205,
                "height": 135
            }
        },
        "cross_sell_info": {
            "title": "Layla Essential Mattress Covers",
            "thumbnail": {
                "src": "assets/images/Layla_V_10_6-300x168.jpg",
                "alt": "Memory Foam Mattress Cover",
                "height": 170,
                "width": 113
            },
            "description": "Essential Mattress Covers"
        },
        "cross_sell_product_data": {
            "title": "Enhance your setup and save <span>Exclusive discounts when you purchase a mattress</span>",
            "items": [
                {
                    id: 56774,
                    "title": "Memory Foam Topper",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellTopper.jpg",
                        "alt": "Memory Foam Topper",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Make it softer with a plush layer and all the benifits of copper"
                },
                {
                    id: 823358,
                    "title": "Down Alternative Comforter",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellComforter.jpg",
                        "alt": "Down Alternative Comforter",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Bird friendly- down feely all season comforter with duvet loops."
                },
                {
                    id: 124524,
                    "title": "Bamboo Sheets",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBambooSheet.jpg",
                        "alt": "Bamboo Sheets",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Luxurious, soft, and supple. You’ve never felt sheets like this before."
                },
                {
                    id: 128244,
                    "title": "Weighted Blanket",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBlanket.jpg",
                        "alt": "Layla Memory Foam Mattress",
                        "height": 170,
                        "width": 113
                    },
                    "description": "A hugging therapeutic blanket that’s super cozy and helps ease stress"
                },
            ]
        },

        "discount": {
            "type": "FIXED",
            "min": 0,
            "max": 0
        },
        "variations": [
            {
                "id": 929064,
                "parent_id": 929063,
                "sku": "ESMATTCOV02-T",
                "title": "Essential Mattress Covers",
                "size": "Twin",
                "dimensions": "",
                "regu_price": 140,
                "sale_price": 140,
                "thumbnail": "assets/images/Layla_V_10_6-300x168.jpg",
                "ship_msg": "Ships in 1-3 business days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 929065,
                "parent_id": 929063,
                "sku": "ESMATTCOV02-TL",
                "title": "Essential Mattress Covers",
                "size": "Twin XL",
                "dimensions": "",
                "regu_price": 140,
                "sale_price": 140,
                "thumbnail": "assets/images/Layla_V_10_6-300x168.jpg",
                "ship_msg": "Ships in 1-3 business days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 929066,
                "parent_id": 929063,
                "sku": "ESMATTCOV02-F",
                "title": "Essential Mattress Covers",
                "size": "Full",
                "dimensions": "",
                "regu_price": 160,
                "sale_price": 160,
                "thumbnail": "assets/images/Layla_V_10_6-300x168.jpg",
                "ship_msg": "Ships in 1-3 business days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 929067,
                "parent_id": 929063,
                "sku": "ESMATTCOV02-Q",
                "title": "Essential Mattress Covers",
                "size": "Queen",
                "dimensions": "",
                "regu_price": 160,
                "sale_price": 160,
                "thumbnail": "assets/images/Layla_V_10_6-300x168.jpg",
                "ship_msg": "Ships in 1-3 business days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 929068,
                "parent_id": 929063,
                "sku": "ESMATTCOV02-K",
                "title": "Essential Mattress Covers",
                "size": "King",
                "dimensions": "",
                "regu_price": 200,
                "sale_price": 200,
                "thumbnail": "assets/images/Layla_V_10_6-300x168.jpg",
                "ship_msg": "Ships in 1-3 business days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 929069,
                "parent_id": 929063,
                "sku": "ESMATTCOV02-CK",
                "title": "Essential Mattress Covers",
                "size": "Cal King",
                "dimensions": "",
                "regu_price": 200,
                "sale_price": 200,
                "thumbnail": "assets/images/Layla_V_10_6-300x168.jpg",
                "ship_msg": "Ships in 1-3 business days",
                "show_ship_msg": true,
                "out_of_stock": false
            }
        ]
    },
    {
        "id": 888864,
        "sku": "LYLGC",
        "slug": "layla-gift-card",
        "title": "Layla E-Gift Card",
        "product_type": "GIFT_CARD",
        "category": [
            "Comp Pillow"
        ],
        "is_promo_prod": false,
        "default_size": "Queen",
        "out_of_stock": false,
        "is_accident_protectable": false,
        "images": {
            "klaviyo": {
                "src": "assets/images/gift-card-layla_v1.png",
                "alt": "Layla E-Gift Card",
                "width": 500,
                "height": 400
            },
            "featured": {
                "src": "assets/images/gift-card-layla_v1.png",
                "alt": "Layla E-Gift Card",
                "width": 500,
                "height": 400
            },
            "thumbnail": {
                "src": "assets/images/gift-card-layla_v1.png",
                "alt": "Layla E-Gift Card",
                "width": 205,
                "height": 135
            }
        },
        "cross_sell_info": {
            "title": "Layla E-Gift Card",
            "thumbnail": {
                "src": "assets/images/gift-card-layla_v1.png",
                "alt": "Layla E-Gift Card",
                "height": 170,
                "width": 113
            },
            "description": ""
        },
        "discount": {
            "type": "FIXED",
            "min": 0,
            "max": 0
        },
        "variations": [
            {
                "id": 888864,
                "parent_id": 888864,
                "sku": "",
                "title": "Layla E-Gift Card",
                "size": "Queen",
                "dimensions": "",
                "regu_price": 0,
                "sale_price": 0,
                "thumbnail": "assets/images/gift-card-layla_v1-300x163-1.jpeg",
                "ship_msg": "",
                "show_ship_msg": true,
                "out_of_stock": false
            }
        ]
    },
    {
        "id": 1032486,
        "sku": "APPM",
        "slug": "layla-mattress-accident-protection",
        "title": "Layla Mattress Accident Protection",
        "product_type": "ACCIDENTAL_PROTECTION",
        "protected_item_ids": [118, 813990, 611172, 981921],
        "category": [
            "Protection"
        ],
        "is_promo_prod": false,
        "default_size": "Queen",
        "default_term": "2 Year",
        "out_of_stock": false,
        "is_accident_protectable": false,
        "images": {
            "klaviyo": {
                "src": "assets/images/svg/insureIcon.svg",
                "alt": "Layla Mattress Accident Protection",
                "width": 500,
                "height": 400
            },
            "featured": {
                "src": "assets/images/svg/insureIcon.svg",
                "alt": "Layla Mattress Accident Protection",
                "width": 500,
                "height": 400
            },
            "thumbnail": {
                "src": "assets/images/svg/insureIcon.svg",
                "alt": "Layla Mattress Accident Protection",
                "width": 205,
                "height": 135
            }
        },
        "cross_sell_info": {
            "title": "Layla Mattress Accident Protection",
            "thumbnail": {
                "src": "assets/images/svg/insureIcon.svg",
                "alt": "Layla Mattress Accident Protection",
                "height": 170,
                "width": 113
            },
            "description": ""
        },
        "discount": {
            "type": "FIXED",
            "min": 0,
            "max": 0
        },
        "variations": [
            {
                "id": 1032487,
                "parent_id": 1032486,
                "title": "Layla Mattress - 2 Year Accident Protection",
                "sku": "APPM2",
                "size": "Queen",
                "dimensions": "",
                "regu_price": 49,
                "sale_price": 49,
                "ship_msg": "",
                "show_ship_msg": false,
                "out_of_stock": false,
                "thumbnail": "assets/images/svg/insureIcon.svg",
                "term": "2 Year"
            },
            {
                "id": 1032488,
                "parent_id": 1032486,
                "title": "Layla Mattress - 5 Year Accident Protection",
                "sku": "APPM5",
                "size": "Queen",
                "dimensions": "",
                "regu_price": 99,
                "sale_price": 99,
                "ship_msg": "",
                "show_ship_msg": false,
                "out_of_stock": false,
                "thumbnail": "assets/images/svg/insureIcon.svg",
                "term": "5 Year"
            }
        ]
    },
    {
        "id": 1032489,
        "sku": "APPAB",
        "slug": "layla-adjustable-base-accident-protection",
        "title": "Layla Adjustable Base Accident Protection",
        "product_type": "ACCIDENTAL_PROTECTION",
        "protected_item_ids": [612995],
        "category": [
            "Protection"
        ],
        "is_promo_prod": false,
        "default_size": "Queen",
        "default_term": "2 Year",
        "out_of_stock": false,
        "is_accident_protectable": false,
        "images": {
            "klaviyo": {
                "src": "assets/images/svg/insureIcon.svg",
                "alt": "Layla Adjustable Base Accident Protection",
                "width": 500,
                "height": 400
            },
            "featured": {
                "src": "assets/images/svg/insureIcon.svg",
                "alt": "Layla Adjustable Base Accident Protection",
                "width": 500,
                "height": 400
            },
            "thumbnail": {
                "src": "assets/images/svg/insureIcon.svg",
                "alt": "Layla Adjustable Base Accident Protection",
                "width": 205,
                "height": 135
            }
        },
        "cross_sell_info": {
            "title": "Layla Adjustable Base Accident Protection",
            "thumbnail": {
                "src": "assets/images/svg/insureIcon.svg",
                "alt": "Layla Adjustable Base Accident Protection",
                "height": 170,
                "width": 113
            },
            "description": ""
        },
        "discount": {
            "type": "FIXED",
            "min": 0,
            "max": 0
        },
        "variations": [
            {
                "id": 1032490,
                "parent_id": 1032489,
                "title": "Layla Adjustable Base - 2 Year Accident Protection",
                "sku": "APPAB2",
                "size": "Queen",
                "dimensions": "",
                "regu_price": 49,
                "sale_price": 49,
                "ship_msg": "",
                "show_ship_msg": false,
                "out_of_stock": false,
                "thumbnail": "assets/images/svg/insureIcon.svg",
                "term": "2 Year"
            },
            {
                "id": 1032491,
                "parent_id": 1032489,
                "title": "Layla Adjustable Base - 5 Year Accident Protection",
                "sku": "APPAB5",
                "size": "Queen",
                "dimensions": "",
                "regu_price": 99,
                "sale_price": 99,
                "ship_msg": "",
                "show_ship_msg": false,
                "out_of_stock": false,
                "thumbnail": "assets/images/svg/insureIcon.svg",
                "term": "5 Year"
            }
        ]
    },
    // {
    // 	"id": 1032492,
    // 	"sku": "APPMAB",
    // 	"slug": "layla-mattress-adjustable-base-accident-protection",
    // 	"title": "Layla Mattress & Adjustable Base Accident Protection",
    // 	"product_type": "ACCIDENTAL_PROTECTION",
    // 	"protected_matt_ids": [118, 813990, 611172, 981921],
    // 	"protected_base_ids": [612995],
    // 	"category": [
    // 		"Protection"
    // 	],
    // 	"is_promo_prod": false,
    // 	"default_size": "Queen",
    // 	"default_term": "2 Year",
    // 	"out_of_stock": false,
    // 	"is_accident_protectable": false,
    // 	"images": {
    // 		"klaviyo": {
    // 			"src": "assets/images/svg/insureIcon.svg",
    // 			"alt": "Layla Mattress & Adjustable Base Accident Protection",
    // 			"width": 500,
    // 			"height": 400
    // 		},
    // 		"featured": {
    // 			"src": "assets/images/svg/insureIcon.svg",
    // 			"alt": "Layla Mattress & Adjustable Base Accident Protection",
    // 			"width": 500,
    // 			"height": 400
    // 		},
    // 		"thumbnail": {
    // 			"src": "assets/images/svg/insureIcon.svg",
    // 			"alt": "Layla Mattress & Adjustable Base Accident Protection",
    // 			"width": 205,
    // 			"height": 135
    // 		}
    // 	},
    // 	"cross_sell_info": {
    // 		"title": "Layla Mattress & Adjustable Base Accident Protection",
    // 		"thumbnail": {
    // 			"src": "assets/images/svg/insureIcon.svg",
    // 			"alt": "Layla Mattress & Adjustable Base Accident Protection",
    // 			"height": 170,
    // 			"width": 113
    // 		},
    // 		"description": ""
    // 	},
    // 	"discount": {
    // 		"type": "FIXED",
    // 		"min": 0,
    // 		"max": 0
    // 	},
    // 	"variations": [
    // 		{
    // 			"id": 1032493,
    // 			"parent_id": 1032492,
    // 			"title": "Layla Mattress & Adjustable Base - 2 Year Accident Protection",
    // 			"sku": "APPMAB2",
    // 			"size": "Queen",
    // 			"dimensions": "",
    // 			"regu_price": 88,
    // 			"sale_price": 88,
    // 			"ship_msg": "",
    // 			"show_ship_msg": false,
    // 			"out_of_stock": false,
    // 			"thumbnail": "assets/images/svg/insureIcon.svg",
    // 			"term": "2 Year"
    // 		},
    // 		{
    // 			"id": 1032494,
    // 			"parent_id": 1032492,
    // 			"title": "Layla Mattress & Adjustable Base - 5 Year Accident Protection",
    // 			"sku": "APPMAB5",
    // 			"size": "Queen",
    // 			"dimensions": "",
    // 			"regu_price": 178,
    // 			"sale_price": 178,
    // 			"ship_msg": "",
    // 			"show_ship_msg": false,
    // 			"out_of_stock": false,
    // 			"thumbnail": "assets/images/svg/insureIcon.svg",
    // 			"term": "5 Year"
    // 		}
    // 	]
    // },
    // {
    // 	"id": 1032495,
    // 	"sku": "APPMB",
    // 	"slug": "layla-mattress-base-accident-protection",
    // 	"title": "Layla Mattress & Base Accident Protection",
    // 	"product_type": "ACCIDENTAL_PROTECTION",
    // 	"protected_matt_ids": [118, 813990, 611172, 981921],
    // 	"protected_base_ids": [611252, 20861, 31729],
    // 	"category": [
    // 		"Protection"
    // 	],
    // 	"is_promo_prod": false,
    // 	"default_size": "Queen",
    // 	"default_term": "2 Year",
    // 	"out_of_stock": false,
    // 	"is_accident_protectable": false,
    // 	"images": {
    // 		"klaviyo": {
    // 			"src": "assets/images/svg/insureIcon.svg",
    // 			"alt": "Layla Mattress & Base Accident Protection",
    // 			"width": 500,
    // 			"height": 400
    // 		},
    // 		"featured": {
    // 			"src": "assets/images/svg/insureIcon.svg",
    // 			"alt": "Layla Mattress & Base Accident Protection",
    // 			"width": 500,
    // 			"height": 400
    // 		},
    // 		"thumbnail": {
    // 			"src": "assets/images/svg/insureIcon.svg",
    // 			"alt": "Layla Mattress & Base Accident Protection",
    // 			"width": 205,
    // 			"height": 135
    // 		}
    // 	},
    // 	"cross_sell_info": {
    // 		"title": "Layla Mattress & Base Accident Protection",
    // 		"thumbnail": {
    // 			"src": "assets/images/svg/insureIcon.svg",
    // 			"alt": "Layla Mattress & Base Accident Protection",
    // 			"height": 170,
    // 			"width": 113
    // 		},
    // 		"description": ""
    // 	},
    // 	"discount": {
    // 		"type": "FIXED",
    // 		"min": 0,
    // 		"max": 0
    // 	},
    // 	"variations": [
    // 		{
    // 			"id": 1032496,
    // 			"parent_id": 1032495,
    // 			"title": "Layla Mattress & Base - 2 Year Accident Protection",
    // 			"sku": "APPMB2",
    // 			"size": "Queen",
    // 			"dimensions": "",
    // 			"regu_price": 63,
    // 			"sale_price": 63,
    // 			"ship_msg": "",
    // 			"show_ship_msg": false,
    // 			"out_of_stock": false,
    // 			"thumbnail": "assets/images/svg/insureIcon.svg",
    // 			"term": "2 Year"
    // 		},
    // 		{
    // 			"id": 1032497,
    // 			"parent_id": 1032495,
    // 			"title": "Layla Mattress & Base - 5 Year Accident Protection",
    // 			"sku": "APPMB5",
    // 			"size": "Queen",
    // 			"dimensions": "",
    // 			"regu_price": 127,
    // 			"sale_price": 127,
    // 			"ship_msg": "",
    // 			"show_ship_msg": false,
    // 			"out_of_stock": false,
    // 			"thumbnail": "assets/images/svg/insureIcon.svg",
    // 			"term": "5 Year"
    // 		}
    // 	]
    // },
    {
        "id": 1032498,
        "sku": "APPB",
        "slug": "layla-base-accident-protection",
        "title": "Layla Base Accident Protection",
        "product_type": "ACCIDENTAL_PROTECTION",
        "protected_item_ids": [20861, 611252, 31729],
        "category": [
            "Protection"
        ],
        "is_promo_prod": false,
        "default_size": "Queen",
        "default_term": "2 Year",
        "out_of_stock": false,
        "is_accident_protectable": false,
        "images": {
            "klaviyo": {
                "src": "assets/images/svg/insureIcon.svg",
                "alt": "Layla Base Accident Protection",
                "width": 500,
                "height": 400
            },
            "featured": {
                "src": "assets/images/svg/insureIcon.svg",
                "alt": "Layla Base Accident Protection",
                "width": 500,
                "height": 400
            },
            "thumbnail": {
                "src": "assets/images/svg/insureIcon.svg",
                "alt": "Layla Base Accident Protection",
                "width": 205,
                "height": 135
            }
        },
        "cross_sell_info": {
            "title": "Layla Base Accident Protection",
            "thumbnail": {
                "src": "assets/images/svg/insureIcon.svg",
                "alt": "Layla Base Accident Protection",
                "height": 170,
                "width": 113
            },
            "description": ""
        },
        "discount": {
            "type": "FIXED",
            "min": 0,
            "max": 0
        },
        "variations": [
            {
                "id": 1032499,
                "parent_id": 1032498,
                "title": "Layla Base - 2 Year Accident Protection",
                "sku": "APPB2",
                "size": "Queen",
                "dimensions": "",
                "regu_price": 24,
                "sale_price": 24,
                "ship_msg": "",
                "show_ship_msg": false,
                "out_of_stock": false,
                "thumbnail": "assets/images/svg/insureIcon.svg",
                "term": "2 Year"
            },
            {
                "id": 1032500,
                "parent_id": 1032498,
                "title": "Layla Base - 5 Year Accident Protection",
                "sku": "APPB5",
                "size": "Queen",
                "dimensions": "",
                "regu_price": 49,
                "sale_price": 49,
                "ship_msg": "",
                "show_ship_msg": false,
                "out_of_stock": false,
                "thumbnail": "assets/images/svg/insureIcon.svg",
                "term": "5 Year"
            }
        ]
    },
    {
        "id": 872294,
        "sku": "KDB8",
        "slug": "adjustable-base-headboard-bracket",
        "title": "Adjustable Base Headboard/Footboard Bracket",
        "category": [
            "Addon"
        ],
        "is_promo_prod": false,
        "default_size": "Normal",
        "out_of_stock": false,
        "is_accident_protectable": false,
        "images": {
            "klaviyo": {
                "src": "wp-content/uploads/2021/10/AB-Regular-Bracket-300x287.png",
                "alt": "Adjustable Bracket",
                "width": 500,
                "height": 400
            },
            "featured": {
                "src": "wp-content/uploads/2021/10/AB-Regular-Bracket-300x287.png",
                "alt": "Adjustable Bracket",
                "width": 500,
                "height": 400
            },
            "thumbnail": {
                "src": "wp-content/uploads/2021/10/AB-Regular-Bracket-300x287.png",
                "alt": "Adjustable Bracket",
                "width": 205,
                "height": 135
            }
        },
        "cross_sell_info": {
            "title": "Adjustable Base Headboard/Footboard Bracket",
            "thumbnail": {
                "src": "wp-content/uploads/2021/10/AB-Regular-Bracket-300x287.png",
                "alt": "Adjustable Bracket",
                "height": 170,
                "width": 113
            },
            "description": ""
        },
        "discount": {
            "type": "FIXED",
            "min": 0,
            "max": 0
        },
        "variations": [
            {
                "id": 872295,
                "parent_id": 872294,
                "sku": "KDB8",
                "title": "Adjustable Base Headboard/Footboard Bracket",
                "size": "Normal",
                "dimensions": "",
                "regu_price": 29,
                "sale_price": 29,
                "thumbnail": "wp-content/uploads/2021/10/AB-Regular-Bracket-300x287.png",
                "ship_msg": "Ships in 1-3 business days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 872296,
                "parent_id": 872294,
                "sku": "KDGB",
                "title": "Adjustable Base Headboard/Footboard Bracket",
                "size": "Plus",
                "dimensions": "",
                "regu_price": 29,
                "sale_price": 29,
                "thumbnail": "wp-content/uploads/2021/10/AB-Regular-Bracket-300x287.png",
                "ship_msg": "Ships in 1-3 business days",
                "show_ship_msg": true,
                "out_of_stock": false
            }
        ]
    },
    {
        "id": 1595,
        "sku": "ZGELTOP-Q",
        "slug": "gel-swirl-memory-foam-topper",
        "title": "ZGel Topper",
        "category": [
            "Addon"
        ],
        "is_promo_prod": false,
        "default_size": "Queen",
        "out_of_stock": false,
        "is_accident_protectable": false,
        "images": {
            "klaviyo": {
                "src": "wp-content/uploads/2023/10/layla-sleep-300x300-1.png",
                "alt": "ZGel Topper",
                "width": 500,
                "height": 400
            },
            "featured": {
                "src": "wp-content/uploads/2023/10/layla-sleep-300x300-1.png",
                "alt": "ZGel Topper",
                "width": 500,
                "height": 400
            },
            "thumbnail": {
                "src": "wp-content/uploads/2023/10/layla-sleep-300x300-1.png",
                "alt": "ZGel Topper",
                "width": 205,
                "height": 135
            }
        },
        "cross_sell_info": {
            "title": "ZGel Topper",
            "thumbnail": {
                "src": "wp-content/uploads/2023/10/layla-sleep-300x300-1.png",
                "alt": "ZGel Topper",
                "height": 170,
                "width": 113
            },
            "description": ""
        },
        "discount": {
            "type": "FIXED",
            "min": 0,
            "max": 0
        },
        "variations": [
            {
                "id": 1602,
                "parent_id": 1595,
                "sku": "ZGELTOP-T",
                "title": "ZGel Topper",
                "size": "Twin",
                "dimensions": "",
                "regu_price": 109,
                "sale_price": 109,
                "thumbnail": "wp-content/uploads/2023/10/layla-sleep-300x300-1.png",
                "ship_msg": "",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 1601,
                "parent_id": 1595,
                "sku": "ZGELTOP-TL",
                "title": "ZGel Topper",
                "size": "Twin XL",
                "dimensions": "",
                "regu_price": 109,
                "sale_price": 109,
                "thumbnail": "wp-content/uploads/2023/10/layla-sleep-300x300-1.png",
                "ship_msg": "",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 1599,
                "parent_id": 1595,
                "sku": "ZGELTOP-Q",
                "title": "ZGel Topper",
                "size": "Queen",
                "dimensions": "",
                "regu_price": 139,
                "sale_price": 139,
                "thumbnail": "wp-content/uploads/2023/10/layla-sleep-300x300-1.png",
                "ship_msg": "",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 1600,
                "parent_id": 1595,
                "sku": "ZGELTOP-F",
                "title": "ZGel Topper",
                "size": "Full",
                "dimensions": "",
                "regu_price": 139,
                "sale_price": 139,
                "thumbnail": "wp-content/uploads/2023/10/layla-sleep-300x300-1.png",
                "ship_msg": "",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 1598,
                "parent_id": 1595,
                "sku": "ZGELTOP-K",
                "title": "ZGel Topper",
                "size": "King",
                "dimensions": "",
                "regu_price": 159,
                "sale_price": 159,
                "thumbnail": "wp-content/uploads/2023/10/layla-sleep-300x300-1.png",
                "ship_msg": "",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 1597,
                "parent_id": 1595,
                "sku": "ZGELTOP-CK",
                "title": "ZGel Topper",
                "size": "Cal King",
                "dimensions": "",
                "regu_price": 159,
                "sale_price": 159,
                "thumbnail": "wp-content/uploads/2023/10/layla-sleep-300x300-1.png",
                "ship_msg": "",
                "show_ship_msg": true,
                "out_of_stock": false
            }
        ]
    },
    {
        "id": 1009926,
        "sku": "ADMINFEE",
        "slug": "administrative-fee",
        "title": "Administrative Fee",
        "category": [
            "Addon"
        ],
        "is_promo_prod": false,
        "default_size": "Address Correction",
        "out_of_stock": false,
        "is_accident_protectable": false,
        "images": {
            "klaviyo": {
                "src": "wp-content/uploads/2023/10/layla-sleep-300x300-1.png",
                "alt": "Administrative Fee",
                "width": 500,
                "height": 400
            },
            "featured": {
                "src": "wp-content/uploads/2023/10/layla-sleep-300x300-1.png",
                "alt": "Administrative Fee",
                "width": 500,
                "height": 400
            },
            "thumbnail": {
                "src": "wp-content/uploads/2023/10/layla-sleep-300x300-1.png",
                "alt": "Administrative Fee",
                "width": 205,
                "height": 135
            }
        },
        "cross_sell_info": {
            "title": "Administrative Fee",
            "thumbnail": {
                "src": "wp-content/uploads/2023/10/layla-sleep-300x300-1.png",
                "alt": "Administrative Fee",
                "height": 170,
                "width": 113
            },
            "description": ""
        },
        "discount": {
            "type": "FIXED",
            "min": 0,
            "max": 0
        },
        "variations": [
            {
                "id": 1009927,
                "parent_id": 1009926,
                "sku": "ADMINFEEAC",
                "title": "Administrative Fee",
                "size": "Address Correction",
                "dimensions": "",
                "regu_price": 21,
                "sale_price": 21,
                "thumbnail": "wp-content/uploads/2023/10/layla-sleep-300x300-1.png",
                "ship_msg": "",
                "show_ship_msg": true,
                "out_of_stock": false
            }
        ]
    },
    {
        "id": 1009930,
        "sku": "FFL3X4G",
        "slug": "adjustable-base-replacement-legs",
        "title": "Adjustable Base Replacement Legs",
        "category": [
            "Addon"
        ],
        "is_promo_prod": false,
        "default_size": "1 Pack",
        "out_of_stock": false,
        "is_accident_protectable": false,
        "images": {
            "klaviyo": {
                "src": "wp-content/uploads/2023/11/Adjustable-Legs-2-300x320-1.png",
                "alt": "Adjustable Base Replacement Legs",
                "width": 500,
                "height": 400
            },
            "featured": {
                "src": "wp-content/uploads/2023/11/Adjustable-Legs-2-300x320-1.png",
                "alt": "Adjustable Base Replacement Legs",
                "width": 500,
                "height": 400
            },
            "thumbnail": {
                "src": "wp-content/uploads/2023/11/Adjustable-Legs-2-300x320-1.png",
                "alt": "Adjustable Base Replacement Legs",
                "width": 205,
                "height": 135
            }
        },
        "cross_sell_info": {
            "title": "Adjustable Base Replacement Legs",
            "thumbnail": {
                "src": "wp-content/uploads/2023/11/Adjustable-Legs-2-300x320-1.png",
                "alt": "Adjustable Base Replacement Legs",
                "height": 170,
                "width": 113
            },
            "description": ""
        },
        "discount": {
            "type": "FIXED",
            "min": 0,
            "max": 0
        },
        "variations": [
            {
                "id": 1009932,
                "parent_id": 1009930,
                "sku": "FFL3X4G",
                "title": "Adjustable Base Replacement Legs",
                "size": "1 Pack",
                "dimensions": "",
                "regu_price": 12,
                "sale_price": 12,
                "thumbnail": "wp-content/uploads/2023/11/Adjustable-Legs-2-300x320-1.png",
                "ship_msg": "",
                "show_ship_msg": true,
                "out_of_stock": false
            }
        ]
    },
    {
        "id": 1020727,
        "sku": "MRKTSHIRTL",
        "slug": "layla-tshirt",
        "title": "Wake Up T-Shirt",
        "category": [
            "Addon"
        ],
        "is_promo_prod": false,
        "default_size": "1 Pack",
        "out_of_stock": false,
        "is_accident_protectable": false,
        "images": {
            "klaviyo": {
                "src": "assets/images/laylatshirt.jpg",
                "alt": "Wake Up T-Shirt",
                "width": 500,
                "height": 400
            },
            "featured": {
                "src": "assets/images/laylatshirt.jpg",
                "alt": "Wake Up T-Shirt",
                "width": 500,
                "height": 400
            },
            "thumbnail": {
                "src": "assets/images/laylatshirt.jpg",
                "alt": "Wake Up T-Shirt",
                "width": 205,
                "height": 135
            }
        },
        "cross_sell_info": {
            "title": "Wake Up T-Shirt",
            "thumbnail": {
                "src": "assets/images/laylatshirt.jpg",
                "alt": "Wake Up T-Shirt",
                "height": 170,
                "width": 113
            },
            "description": ""
        },
        "discount": {
            "type": "FIXED",
            "min": 0,
            "max": 0
        },
        "variations": [
            {
                "id": 1020727,
                "parent_id": 904894,
                "sku": "MRKTSHIRTL",
                "title": "Wake Up T-Shirt",
                "size": "One Size",
                "dimensions": "",
                "regu_price": 29.99,
                "sale_price": 29.99,
                "thumbnail": "assets/images/laylatshirt.jpg",
                "ship_msg": "",
                "show_ship_msg": true,
                "out_of_stock": false
            }
        ]
    },
    {
        "id": 1022381,
        "sku": "SYNCORD2",
        "slug": "adjustable-base-sync-cord",
        "title": "Adjustable Base Sync Cord",
        "category": [
            "Addon"
        ],
        "is_promo_prod": false,
        "default_size": "One Size",
        "out_of_stock": false,
        "is_accident_protectable": false,
        "images": {
            "klaviyo": {
                "src": "wp-content/uploads/2023/10/layla-sleep-300x300-1.png",
                "alt": "Adjustable Base Sync Cord",
                "width": 500,
                "height": 400
            },
            "featured": {
                "src": "wp-content/uploads/2023/10/layla-sleep-300x300-1.png",
                "alt": "Adjustable Base Sync Cord",
                "width": 500,
                "height": 400
            },
            "thumbnail": {
                "src": "wp-content/uploads/2023/10/layla-sleep-300x300-1.png",
                "alt": "Adjustable Base Sync Cord",
                "width": 205,
                "height": 135
            }
        },
        "cross_sell_info": {
            "title": "Adjustable Base Sync Cord",
            "thumbnail": {
                "src": "wp-content/uploads/2023/10/layla-sleep-300x300-1.png",
                "alt": "Adjustable Base Sync Cord",
                "height": 170,
                "width": 113
            },
            "description": ""
        },
        "discount": {
            "type": "FIXED",
            "min": 0,
            "max": 0
        },
        "variations": [
            {
                "id": 1022382,
                "parent_id": 1022381,
                "sku": "SYNCORD2",
                "title": "Adjustable Base Sync Cord",
                "size": "One Size",
                "dimensions": "",
                "regu_price": 15,
                "sale_price": 15,
                "thumbnail": "wp-content/uploads/2023/10/layla-sleep-300x300-1.png",
                "ship_msg": "",
                "show_ship_msg": true,
                "out_of_stock": false
            }
        ]
    },
    {
        "id": 1022383,
        "sku": "WRLSKD2",
        "slug": "adjustable-base-remotes\"",
        "title": "Adjustable Base Remote",
        "category": [
            "Addon"
        ],
        "is_promo_prod": false,
        "default_size": "Normal",
        "out_of_stock": false,
        "is_accident_protectable": false,
        "images": {
            "klaviyo": {
                "src": "wp-content/uploads/2023/10/layla-sleep-300x300-1.png",
                "alt": "Adjustable Base Remote",
                "width": 500,
                "height": 400
            },
            "featured": {
                "src": "wp-content/uploads/2023/10/layla-sleep-300x300-1.png",
                "alt": "Adjustable Base Remote",
                "width": 500,
                "height": 400
            },
            "thumbnail": {
                "src": "wp-content/uploads/2023/10/layla-sleep-300x300-1.png",
                "alt": "Adjustable Base Remote",
                "width": 205,
                "height": 135
            }
        },
        "cross_sell_info": {
            "title": "Adjustable Base Remote",
            "thumbnail": {
                "src": "wp-content/uploads/2023/10/layla-sleep-300x300-1.png",
                "alt": "Adjustable Base Remote",
                "height": 170,
                "width": 113
            },
            "description": ""
        },
        "discount": {
            "type": "FIXED",
            "min": 0,
            "max": 0
        },
        "variations": [
            {
                "id": 1022384,
                "parent_id": 1022383,
                "sku": "WRLSKD2",
                "title": "Adjustable Base Remote",
                "size": "Normal",
                "dimensions": "",
                "regu_price": 29,
                "sale_price": 29,
                "thumbnail": "wp-content/uploads/2023/10/layla-sleep-300x300-1.png",
                "ship_msg": "",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 1022385,
                "parent_id": 1022383,
                "sku": "WRLSKDG",
                "title": "Adjustable Base Remote",
                "size": "Plus",
                "dimensions": "",
                "regu_price": 29,
                "sale_price": 29,
                "thumbnail": "wp-content/uploads/2023/10/layla-sleep-300x300-1.png",
                "ship_msg": "",
                "show_ship_msg": true,
                "out_of_stock": false
            }
        ]
    },
    {
        "id": 14023,
        "sku": "PILL01",
        "slug": "kapok-pillow",
        "title": "Layla Kapok Pillow",
        "category": [
            "Pillow"
        ],
        "default_size": "Queen",
        "is_promo_prod": false,
        "out_of_stock": false,
        "multi_prod_ids": [],
        "is_accident_protectable": false,
        "images": {
            "klaviyo": {
                "src": "assets/images/slide-cart/kapok-pillow-incart.jpg",
                "alt": "Layla Kapok Pillow",
                "width": 500,
                "height": 400
            },
            "featured": {
                "src": "assets/images/slide-cart/kapok-pillow-incart.jpg",
                "alt": "Layla Kapok Pillow",
                "width": 500,
                "height": 400
            },
            "thumbnail": {
                "src": "assets/images/kapok-pillow-hub.jpg",
                "alt": "Woman hugging the kapok pillow",
                "width": 205,
                "height": 135
            }
        },
        "cross_sell_info": {
            "title": "Kapok Pillow",
            "thumbnail": {
                "src": "assets/images/kapok-pillow-hub.jpg",
                "alt": "Layla Kapok Pillow",
                "height": 170,
                "width": 113
            },
            "description": "A luxurious pillow, plush and airy, soft and supportive at the same time."
        },
        "cross_sell_product_data": {
            "title": "Enhance your setup and save <span>Exclusive discounts when you purchase a mattress</span>",
            "items": [
                {
                    id: 31729,
                    "title": "Memory Foam Topper",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellTopper.jpg",
                        "alt": "Memory Foam Topper",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Make it softer with a plush layer and all the benifits of copper"
                },
                {
                    id: 611252,
                    "title": "Down Alternative Comforter",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellComforter.jpg",
                        "alt": "Down Alternative Comforter",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Bird friendly- down feely all season comforter with duvet loops."
                },
                {
                    id: 611286,
                    "title": "Bamboo Sheets",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBambooSheet.jpg",
                        "alt": "Bamboo Sheets",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Luxurious, soft, and supple. You’ve never felt sheets like this before."
                },
                {
                    id: 128244,
                    "title": "Weighted Blanket",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBlanket.jpg",
                        "alt": "Layla Memory Foam Mattress",
                        "height": 170,
                        "width": 113
                    },
                    "description": "A hugging therapeutic blanket that’s super cozy and helps ease stress"
                },
            ]
        },

        "discount": {
            "type": "FIXED",
            "min": 0,
            "max": 0
        },
        "variations": [
            {
                "id": 1399,
                "parent_id": 14023,
                "sku": "PILL01S",
                "title": "Layla Kapok Pillow - 1 Pack",
                "size": "Queen",
                "dimensions": "18 × 28",
                "regu_price": 109,
                "sale_price": 109,
                "thumbnail": "assets/images/slide-cart/kapok-pillow-incart.jpg",
                "ship_msg": "Ships for free in 1-5 business days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 1400,
                "parent_id": 14023,
                "sku": "PILL01K",
                "title": "Layla Kapok Pillow - 1 Pack",
                "size": "King",
                "dimensions": "18 × 34",
                "regu_price": 129,
                "sale_price": 129,
                "thumbnail": "assets/images/slide-cart/kapok-pillow-incart.jpg",
                "ship_msg": "Ships for free in 1-5 business days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 920424,
                "parent_id": 14023,
                "sku": "PILL01S2PK",
                "title": "Layla Kapok Pillow - 2 Pack",
                "size": "2 Pack Queen",
                "dimensions": "18 × 28",
                "regu_price": 218,
                "sale_price": 163.5,
                "thumbnail": "assets/images/global-img/newImages/kapokPillowMenuThumb.jpg",
                "ship_msg": "Ships in 3-5 business days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 920425,
                "parent_id": 14023,
                "sku": "PILL01K2PK",
                "title": "Layla Kapok Pillow - 2 Pack",
                "size": "2 Pack King",
                "dimensions": "18 × 34",
                "regu_price": 258,
                "sale_price": 193.5,
                "thumbnail": "assets/images/global-img/newImages/kapokPillowMenuThumb.jpg",
                "ship_msg": "Ships in 3-5 business days",
                "show_ship_msg": true,
                "out_of_stock": false
            }
        ]
    },
    {
        "id": 920423,
        "sku": "PILL012PK",
        "slug": "layla-pillow-2-pack",
        "title": "Layla Kapok Pillow - 2 Pack",
        "category": [
            "Pillow"
        ],
        "is_promo_prod": false,
        "default_size": "King",
        "out_of_stock": false,
        "multi_prod_ids": [],
        "is_accident_protectable": false,
        "images": {
            "klaviyo": {
                "src": "assets/images/global-img/newImages/kapokPillowMenuThumb.jpg",
                "alt": "Layla Kapok Pillow - 2 Pack",
                "width": 500,
                "height": 400
            },
            "featured": {
                "src": "assets/images/global-img/newImages/kapokPillowMenuThumb.jpg",
                "alt": "Layla Kapok Pillow - 2 Pack",
                "width": 500,
                "height": 400
            },
            "thumbnail": {
                "src": "assets/images/global-img/newImages/kapokPillowMenuThumb.jpg",
                "alt": "Layla Kapok Pillow - 2 Pack",
                "width": 205,
                "height": 135
            }
        },
        "cross_sell_info": {
            "title": "Layla Kapok Pillow - 2 Pack",
            "thumbnail": {
                "src": "assets/images/gift-card-layla_v1.png",
                "alt": "Layla Kapok Pillow - 2 Pack",
                "height": 170,
                "width": 113
            },
            "description": "A luxurious pillow, plush and airy, soft and supportive at the same time."
        },
        "cross_sell_product_data": {
            "title": "Enhance your setup and save <span>Exclusive discounts when you purchase a mattress</span>",
            "items": [
                {
                    id: 56774,
                    "title": "Memory Foam Topper",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellTopper.jpg",
                        "alt": "Memory Foam Topper",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Make it softer with a plush layer and all the benifits of copper"
                },
                {
                    id: 823358,
                    "title": "Down Alternative Comforter",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellComforter.jpg",
                        "alt": "Down Alternative Comforter",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Bird friendly- down feely all season comforter with duvet loops."
                },
                {
                    id: 124524,
                    "title": "Bamboo Sheets",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBambooSheet.jpg",
                        "alt": "Bamboo Sheets",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Luxurious, soft, and supple. You’ve never felt sheets like this before."
                },
                {
                    id: 128244,
                    "title": "Weighted Blanket",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBlanket.jpg",
                        "alt": "Layla Memory Foam Mattress",
                        "height": 170,
                        "width": 113
                    },
                    "description": "A hugging therapeutic blanket that’s super cozy and helps ease stress"
                },
            ]
        },

        "discount": {
            "type": "FIXED",
            "min": 0,
            "max": 0
        },
        "variations": [
            {
                "id": 920424,
                "parent_id": 920423,
                "sku": "PILL01S2PK",
                "title": "Layla Kapok Pillow - 2 Pack",
                "size": "Queen",
                "dimensions": "18 × 28",
                "regu_price": 218,
                "sale_price": 163.5,
                "thumbnail": "assets/images/global-img/newImages/kapokPillowMenuThumb.jpg",
                "ship_msg": "Ships in 3-5 business days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 920425,
                "parent_id": 920423,
                "sku": "PILL01K2PK",
                "title": "Layla Kapok Pillow - 2 Pack",
                "size": "King",
                "dimensions": "18 × 34",
                "regu_price": 258,
                "sale_price": 193.5,
                "thumbnail": "assets/images/global-img/newImages/kapokPillowMenuThumb.jpg",
                "ship_msg": "Ships in 3-5 business days",
                "show_ship_msg": true,
                "out_of_stock": false
            }
        ]
    },
    {
        "id": 823358,
        "sku": "COMF01",
        "slug": "down-alternative-comforter",
        "title": "Layla Down Alternative Comforter",
        "category": [
            "Bedding"
        ],
        "is_promo_prod": false,
        "default_size": "Full/Queen",
        "default_color": "White",
        "out_of_stock": false,
        "is_compare_model": false,
        "is_accident_protectable": false,
        "images": {
            "klaviyo": {
                "src": "assets/images/featured-comforter.jpg",
                "alt": "Couple sitting on mattress",
                "width": 500,
                "height": 400
            },
            "featured": {
                "src": "assets/images/featured-comforter.jpg",
                "alt": "Couple sitting on mattress",
                "width": 500,
                "height": 400
            },
            "thumbnail": {
                "src": "assets/images/comforter-hub.jpg",
                "alt": "Couple sitting on mattress",
                "width": 205,
                "height": 135
            }
        },
        "cross_sell_info": {
            "title": "Down Alternative Comforter",
            "thumbnail": {
                "src": "assets/images/crossSell/crossSellComforter.jpg",
                "alt": "Layla Down Alternative Comforter",
                "height": 170,
                "width": 113
            },
            "color_thumbnail": {
                "white": {
                    "thumbnail": {
                        "src": "assets/images/comforter-cross-white.png",
                        "alt": "Layla Down Alternative Comforter White",
                        "height": 0,
                        "width": 0
                    }
                },
                "gray": {
                    "thumbnail": {
                        "src": "assets/images/comforter-cross-gray.png",
                        "alt": "Layla Down Alternative Comforter Gray",
                        "height": 0,
                        "width": 0
                    }
                }
            },
            "description": "Bird friendly- down feely all season comforter with duvet loops."
        },
        "cross_sell_product_data": {
            "title": "Enhance your setup and save <span>Exclusive discounts when you purchase a mattress</span>",
            "items": [
                {
                    id: 56774,
                    "title": "Memory Foam Topper",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellTopper.jpg",
                        "alt": "Memory Foam Topper",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Make it softer with a plush layer and all the benifits of copper"
                },
                {
                    id: 823358,
                    "title": "Down Alternative Comforter",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellComforter.jpg",
                        "alt": "Down Alternative Comforter",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Bird friendly- down feely all season comforter with duvet loops."
                },
                {
                    id: 124524,
                    "title": "Bamboo Sheets",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBambooSheet.jpg",
                        "alt": "Bamboo Sheets",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Luxurious, soft, and supple. You’ve never felt sheets like this before."
                },
                {
                    id: 128244,
                    "title": "Weighted Blanket",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBlanket.jpg",
                        "alt": "Layla Memory Foam Mattress",
                        "height": 170,
                        "width": 113
                    },
                    "description": "A hugging therapeutic blanket that’s super cozy and helps ease stress"
                },
            ]
        },

        "discount": {
            "type": "FIXED",
            "min": 50,
            "max": 50
        },
        "variations": [
            {
                "id": 823359,
                "parent_id": 823358,
                "title": "Layla Down Alternative Comforter",
                "sku": "COMF01TW",
                "size": "Twin/Twin XL",
                "color": "White",
                "regu_price": 209,
                "sale_price": 159,
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/slide-cart/comforter-white-incart.jpg"
            },
            {
                "id": 823361,
                "parent_id": 823358,
                "title": "Layla Down Alternative Comforter",
                "sku": "COMF01QW",
                "size": "Full/Queen",
                "color": "White",
                "regu_price": 229,
                "sale_price": 179,
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/slide-cart/comforter-white-incart.jpg"
            },
            {
                "id": 823363,
                "parent_id": 823358,
                "title": "Layla Down Alternative Comforter",
                "sku": "COMF01KW",
                "size": "King/Cal King",
                "color": "White",
                "regu_price": 249,
                "sale_price": 199,
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/slide-cart/comforter-white-incart.jpg"
            },
            {
                "id": 823360,
                "parent_id": 823358,
                "title": "Layla Down Alternative Comforter",
                "sku": "COMF01TG",
                "size": "Twin/Twin XL",
                "color": "Gray",
                "regu_price": 209,
                "sale_price": 159,
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/slide-cart/comforter-gray-incart.jpg"
            },
            {
                "id": 823362,
                "parent_id": 823358,
                "title": "Layla Down Alternative Comforter",
                "sku": "COMF01QG",
                "size": "Full/Queen",
                "color": "Gray",
                "regu_price": 229,
                "sale_price": 179,
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/slide-cart/comforter-gray-incart.jpg"
            },
            {
                "id": 823364,
                "parent_id": 823358,
                "title": "Layla Down Alternative Comforter",
                "sku": "COMF01KG",
                "size": "King/Cal King",
                "color": "Gray",
                "regu_price": 249,
                "sale_price": 199,
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/slide-cart/comforter-gray-incart.jpg"
            }
        ]
    },
    {
        "id": 128244,
        "sku": "BLAN01Q",
        "slug": "weighted-blanket",
        "title": "Layla Weighted Blanket",
        "category": [
            "Bedding",
            "Blanket"
        ],
        "is_promo_prod": false,
        "default_size": "20 lbs (60\" x 80\")",
        "out_of_stock": false,
        "is_compare_model": false,
        "is_accident_protectable": false,
        "images": {
            "klaviyo": {
                "src": "assets/images/Layla-Weighted-Blanket.jpg",
                "alt": "Layla Weighted Blanket",
                "width": 500,
                "height": 400
            },
            "featured": {
                "src": "assets/images/Layla-Weighted-Blanket.jpg",
                "alt": "Layla Weighted Blanket",
                "width": 500,
                "height": 400
            },
            "thumbnail": {
                "src": "assets/images/blanket-hub.jpg",
                "alt": "Weighted blanket folded up",
                "width": 205,
                "height": 135
            }
        },
        "cross_sell_info": {
            "title": "Weighted Blanket",
            "thumbnail": {
                "src": "assets/images/crossSell/crossSellBlanket.jpg",
                "alt": "Layla Weighted Blanket",
                "height": 170,
                "width": 113
            },
            "description": "<p>A hugging therapeutic blanket,</p><p>weighted for deep sleep.</p>"
        },
        "cross_sell_product_data": {
            "title": "Enhance your setup and save <span>Exclusive discounts when you purchase a mattress</span>",
            "items": [
                {
                    "id": 56774,
                    "title": "Memory Foam Topper",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellTopper.jpg",
                        "alt": "Memory Foam Topper",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Make it softer with a plush layer and all the benifits of copper"
                },
                {
                    "id": 823358,
                    "title": "Down Alternative Comforter",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellComforter.jpg",
                        "alt": "Down Alternative Comforter",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Bird friendly- down feely all season comforter with duvet loops."
                },
                {
                    "id": 124524,
                    "title": "Bamboo Sheets",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBambooSheet.jpg",
                        "alt": "Bamboo Sheets",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Luxurious, soft, and supple. You’ve never felt sheets like this before."
                },
                {
                    "id": 128244,
                    "title": "Weighted Blanket",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBlanket.jpg",
                        "alt": "Layla Memory Foam Mattress",
                        "height": 170,
                        "width": 113
                    },
                    "description": "A hugging therapeutic blanket that’s super cozy and helps ease stress"
                },
            ]
        },

        "discount": {
            "type": "FIXED",
            "min": 100,
            "max": 100
        },
        "variations": [
            {
                "id": 128250,
                "parent_id": 128244,
                "sku": "BLAN01T",
                "title": "Layla Weighted Blanket",
                "size": "15 lbs (48\" x 72\")",
                "dimensions": "48 × 72",
                "regu_price": 199,
                "sale_price": 99,
                "thumbnail": "assets/images/slide-cart/blanket-incart.jpg",
                "ship_msg": "Ships in 1-3 business days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 128252,
                "parent_id": 128244,
                "sku": "BLAN01Q",
                "title": "Layla Weighted Blanket",
                "size": "20 lbs (60\" x 80\")",
                "dimensions": "60 × 80",
                "regu_price": 219,
                "sale_price": 119,
                "thumbnail": "assets/images/slide-cart/blanket-incart.jpg",
                "ship_msg": "Ships in 1-3 business days",
                "show_ship_msg": true,
                "out_of_stock": false
            },
            {
                "id": 128254,
                "parent_id": 128244,
                "sku": "BLAN01K",
                "title": "Layla Weighted Blanket",
                "size": "25 lbs (80\" x 87\")",
                "dimensions": "80 × 87",
                "regu_price": 239,
                "sale_price": 139,
                "thumbnail": "assets/images/slide-cart/blanket-incart.jpg",
                "ship_msg": "Ships in 1-3 business days",
                "show_ship_msg": true,
                "out_of_stock": false
            }
        ]
    },
    {
        "id": 124524,
        "sku": "SHEE01",
        "slug": "bamboo-sheets",
        "title": "Layla Bamboo Sheets",
        "category": [
            "Bedding"
        ],
        "is_promo_prod": false,
        "default_size": "Queen",
        "default_color": "White",
        "is_compare_model": false,
        "is_accident_protectable": false,
        "out_of_stock": false,
        "images": {
            "klaviyo": {
                "src": "assets/images/Layla-Bamboo-Sheets-gray.jpg",
                "alt": "Bamboo sheet unboxing",
                "width": 500,
                "height": 400
            },
            "featured": {
                "src": "assets/images/Layla-Bamboo-Sheets-gray.jpg",
                "alt": "Bamboo sheet unboxing",
                "width": 500,
                "height": 400
            },
            "thumbnail": {
                "src": "assets/images/sheet-hub.jpg",
                "alt": "Bamboo sheet unboxing",
                "width": 205,
                "height": 135
            }
        },
        "cross_sell_info": {
            "title": "Bamboo Sheets",
            "thumbnail": {
                "src": "assets/images/crossSell/crossSellSheets.jpg",
                "alt": "Layla-Bamboo-Sheets-gray",
                "height": 170,
                "width": 113
            },
            "color_thumbnail": {
                "white": {
                    "thumbnail": {
                        "src": "assets/images/sheet-cross-white.png",
                        "alt": "Layla-Bamboo-Sheets-White",
                        "height": 0,
                        "width": 0
                    }
                },
                "gray": {
                    "thumbnail": {
                        "src": "assets/images/sheet-cross-gray.png",
                        "alt": "Layla-Bamboo-Sheets-Gray",
                        "height": 0,
                        "width": 0
                    }
                }
            },
            "description": "Luxurious, soft, and supple. You’ve never felt sheets like this before."
        },
        "cross_sell_product_data": {
            "title": "Enhance your setup and save <span>Exclusive discounts when you purchase a mattress</span>",
            "items": [
                {
                    id: 56774,
                    "title": "Memory Foam Topper",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellTopper.jpg",
                        "alt": "Memory Foam Topper",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Make it softer with a plush layer and all the benifits of copper"
                },
                {
                    id: 823358,
                    "title": "Down Alternative Comforter",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellComforter.jpg",
                        "alt": "Down Alternative Comforter",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Bird friendly- down feely all season comforter with duvet loops."
                },
                {
                    id: 124524,
                    "title": "Bamboo Sheets",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBambooSheet.jpg",
                        "alt": "Bamboo Sheets",
                        "height": 170,
                        "width": 113
                    },
                    "description": "Luxurious, soft, and supple. You’ve never felt sheets like this before."
                },
                {
                    id: 128244,
                    "title": "Weighted Blanket",
                    "thumbnail": {
                        "src": "assets/images/crossSell/crossSellBlanket.jpg",
                        "alt": "Layla Memory Foam Mattress",
                        "height": 170,
                        "width": 113
                    },
                    "description": "A hugging therapeutic blanket that’s super cozy and helps ease stress"
                },
            ]
        },

        "discount": {
            "type": "FIXED",
            "min": 70,
            "max": 70
        },
        "variations": [
            {
                "id": 124631,
                "parent_id": 124524,
                "title": "Layla Bamboo Sheets",
                "sku": "SHEE01TW",
                "size": "Twin",
                "color": "White",
                "regu_price": 169,
                "sale_price": 99,
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/slide-cart/sheet-white-incart.jpg"
            },
            {
                "id": 124629,
                "parent_id": 124524,
                "title": "Layla Bamboo Sheets",
                "sku": "SHEE01TLW",
                "size": "Twin XL",
                "color": "White",
                "regu_price": 169,
                "sale_price": 99,
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/slide-cart/sheet-white-incart.jpg"
            },
            {
                "id": 124627,
                "parent_id": 124524,
                "title": "Layla Bamboo Sheets",
                "sku": "SHEE01FW",
                "size": "Full",
                "color": "White",
                "regu_price": 189,
                "sale_price": 119,
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/slide-cart/sheet-white-incart.jpg"
            },
            {
                "id": 124624,
                "parent_id": 124524,
                "title": "Layla Bamboo Sheets",
                "sku": "SHEE01QW",
                "size": "Queen",
                "color": "White",
                "regu_price": 189,
                "sale_price": 119,
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/slide-cart/sheet-white-incart.jpg"
            },
            {
                "id": 124621,
                "parent_id": 124524,
                "title": "Layla Bamboo Sheets",
                "sku": "SHEE01KW",
                "size": "King",
                "color": "White",
                "regu_price": 209,
                "sale_price": 139,
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/slide-cart/sheet-white-incart.jpg"
            },
            {
                "id": 124619,
                "parent_id": 124524,
                "title": "Layla Bamboo Sheets",
                "sku": "SHEE01CKW",
                "size": "Cal King",
                "color": "White",
                "regu_price": 209,
                "sale_price": 139,
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/slide-cart/sheet-white-incart.jpg"
            },
            {
                "id": 676995,
                "parent_id": 124524,
                "title": "Layla Bamboo Sheets",
                "sku": "SHEE01SKW",
                "size": "Split King",
                "color": "White",
                "regu_price": 209,
                "sale_price": 139,
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/slide-cart/sheet-white-incart.jpg"
            },
            {
                "id": 131572,
                "parent_id": 124524,
                "title": "Layla Bamboo Sheets",
                "sku": "SHEE01TG",
                "size": "Twin",
                "color": "Gray",
                "regu_price": 169,
                "sale_price": 99,
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/slide-cart/sheet-gray-incart.jpg"
            },
            {
                "id": 131584,
                "parent_id": 124524,
                "title": "Layla Bamboo Sheets",
                "sku": "SHEE01TLG",
                "size": "Twin XL",
                "color": "Gray",
                "regu_price": 169,
                "sale_price": 99,
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/slide-cart/sheet-gray-incart.jpg"
            },
            {
                "id": 131582,
                "parent_id": 124524,
                "title": "Layla Bamboo Sheets",
                "sku": "SHEE01FG",
                "size": "Full",
                "color": "Gray",
                "regu_price": 189,
                "sale_price": 119,
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/slide-cart/sheet-gray-incart.jpg"
            },
            {
                "id": 131579,
                "parent_id": 124524,
                "title": "Layla Bamboo Sheets",
                "sku": "SHEE01QG",
                "size": "Queen",
                "color": "Gray",
                "regu_price": 189,
                "sale_price": 119,
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/slide-cart/sheet-gray-incart.jpg"
            },
            {
                "id": 131577,
                "parent_id": 124524,
                "title": "Layla Bamboo Sheets",
                "sku": "SHEE01KG",
                "size": "King",
                "color": "Gray",
                "regu_price": 209,
                "sale_price": 139,
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/slide-cart/sheet-gray-incart.jpg"
            },
            {
                "id": 131575,
                "parent_id": 124524,
                "title": "Layla Bamboo Sheets",
                "sku": "SHEE01CKG",
                "size": "Cal King",
                "color": "Gray",
                "regu_price": 209,
                "sale_price": 139,
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/slide-cart/sheet-gray-incart.jpg"
            },
            {
                "id": 676994,
                "parent_id": 124524,
                "title": "Layla Bamboo Sheets",
                "sku": "SHEE01SKG",
                "size": "Split King",
                "color": "Gray",
                "regu_price": 209,
                "sale_price": 139,
                "ship_msg": "Ships in 1-3 Business Days",
                "show_ship_msg": true,
                "out_of_stock": false,
                "thumbnail": "assets/images/slide-cart/sheet-gray-incart.jpg"
            }
        ]
    }
];
export default productData;
