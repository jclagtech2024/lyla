import { CommonModule, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { InViewportModule } from 'ng-in-viewport';
import { Component, ElementRef, Inject, Input, Optional, PLATFORM_ID, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { InViewportAction } from 'ng-in-viewport';
import { CarouselComponent, OwlOptions, SlidesOutputData, } from 'ngx-owl-carousel-o';
import { SafePipe } from 'src/app/pipes/safe.pipe';
import { IS_BOT_GOOGLE } from 'src/app/server.tokens';
import { ReviewSlideData } from 'src/app/types/common-prod-page-data.interface';
import { PictureTagComponent } from 'src/app/components/picture-tag/picture-tag.component';
import { ArrowleftIconSvgComponent } from "../../components/svgs/arrowleft-icon-svg/arrowleft-icon-svg.component";
import { ArrowrightIconSvgComponent } from "../../components/svgs/arrowright-icon-svg/arrowright-icon-svg.component";

@Component({
    selector: 'app-review-slider-new',
    standalone: true,
    imports: [CommonModule, CarouselModule, PictureTagComponent, SafePipe, InViewportModule, ArrowleftIconSvgComponent, ArrowrightIconSvgComponent],
    templateUrl: './review-slider-new.component.html',
    styleUrls: ['./review-slider-new.component.scss']
})
export class ReviewSliderNewComponent {
    @ViewChildren('ref') ref: QueryList<ElementRef<HTMLElement>>;
    @ViewChild('owlRef') owlRef: CarouselComponent;
    @Input() reviewSlidesArr: ReviewSlideData[] = [];
    clickedState: boolean = false;
    activeId: string = 'slide-0';
    customOptions: OwlOptions = {
        loop: false,
        autoplay: false,
        items: 1,
        autoHeight: false,
        lazyLoad: false,
        mouseDrag: true,
        touchDrag: true,
        // slideTransition: 'linear',
        autoplayHoverPause: true,
        pullDrag: true,
        dots: false,
        // navText: ['<span class="left"></span>', '<span class="right"></span>'],
        // nav: false,
        dotsData: true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            740: {
                items: 1,
            },
            940: {
                items: 1,
            },
            1200: {
                items: 1,
            },
            1600: {
                items: 1,
            },
            1920: {
                items: 1,
            },
        },
        responsiveRefreshRate: 1,
    };
    inViewPort: boolean = false;
    gooBot = false;
    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
        @Optional() @Inject(IS_BOT_GOOGLE) private isBot: boolean,
    ) {
        if (isPlatformServer(this.platformId) && this.isBot) {
            this.inViewPort = true;
            this.gooBot = true;
        }
    }

    ngOnInit(): void { }

    getData(event: SlidesOutputData) {
        if (event.slides.length != 0) {
            this.activeId = event?.slides?.[0]?.id;
        }
    }

    ngAfterViewInit() {
        this.owlItems();
        this.owlDotsImage();
        // this.owlItemsClick();
    }

    owlDots() {
        const owlDots = (this.owlRef?.['el'] as ElementRef<HTMLElement>)
            ?.nativeElement?.childNodes?.[0]?.childNodes?.[3]?.childNodes;
        return owlDots;
    }

    onIntersection(observerEvent: InViewportAction) {
        if (
            isPlatformBrowser(this.platformId) &&
            observerEvent.visible &&
            !this.inViewPort
        ) {
            this.inViewPort = true;
            setTimeout(() => {
                this.owlDots()?.forEach((el: HTMLElement) => {
                    if (el?.classList?.contains('owl-dot')) {
                        el.setAttribute('tabindex', '0');
                    }
                });

                this.owlDots()?.forEach((el: HTMLElement) => {
                    if (el?.classList?.contains('owl-dot')) {
                        el.addEventListener('keyup', (ev) => {
                            if (ev.key == 'Enter') {
                                el.click();
                            }
                        });
                    }
                });
            }, 100);
        }
    }

    owlItems() {
        const owlItems = (this.owlRef?.['el'] as ElementRef<HTMLElement>)
            ?.nativeElement?.childNodes?.[0].firstChild.firstChild.firstChild
            .firstChild.childNodes;

        owlItems?.forEach((item: HTMLElement) => {
            if (item?.classList?.contains('owl-item') && item?.classList?.contains('active')) {
                item.getElementsByTagName('a')?.[0]?.setAttribute('tabindex', '0');
            } else if (item?.classList?.contains('owl-item') && !item?.classList?.contains('active')) {
                item.getElementsByTagName('a')?.[0]?.setAttribute('tabindex', '-1');
            }
        });
        return owlItems;
    }

    owlDotsImage() {
        this.owlDots()?.forEach((el: HTMLElement) => {
            if (el?.classList?.contains('owl-dot')) {
                el.setAttribute('tabindex', '0');
            }
        });

        this.owlDots()?.forEach((el: HTMLElement) => {
            if (el?.classList?.contains('owl-dot')) {
                el.addEventListener('click', (ev) => {
                    setTimeout(() => {
                        this.owlItems();
                    }, 200);
                });
                el.addEventListener('keyup', (ev) => {
                    if (ev.key == 'Enter') {
                        el.click();
                        setTimeout(() => {
                            this.owlItems();
                        }, 200);
                    }
                });
            }
        });

        this.owlDots()?.forEach((el: HTMLElement) => {
            el.addEventListener('click', (e) => {
                // if (e.key == 'Enter') {
                el.click();
                setTimeout(() => {
                    this.owlItems();
                    setTimeout(() => {
                        this.owlItems()?.forEach((item: HTMLElement) => {
                            if (
                                item?.classList?.contains('owl-item') &&
                                item?.classList?.contains('active')
                            ) {
                                item.getElementsByTagName('a')?.[0]?.focus();
                            }
                        });
                    }, 500);
                }, 200);
                // }
            });
        });
    }

    setIndex(id: string) {
        this.owlRef.to(id);
        setTimeout(() => {
            this.owlItems();
            this.owlItems()?.forEach((item: HTMLElement) => {
                if (
                    item?.classList?.contains('owl-item') &&
                    item?.classList?.contains('active')
                ) {
                    item.querySelector('h3').focus();
                }
            });
        }, 1000);
    }
    slidetoPrev() {
        this.owlRef.prev();
        setTimeout(() => {
            this.owlItems();
            this.owlItems()?.forEach((item: HTMLElement) => {
                if (
                    item?.classList?.contains('owl-item') &&
                    item?.classList?.contains('active')
                ) {
                    item.querySelector('h3').focus();
                }
            });
        }, 1000);
    }
    slidetoNext() {
        this.owlRef.next();
        setTimeout(() => {
            this.owlItems();
            this.owlItems()?.forEach((item: HTMLElement) => {
                if (
                    item?.classList?.contains('owl-item') &&
                    item?.classList?.contains('active')
                ) {
                    item.querySelector('h3').focus();
                }
            });
        }, 1000);
    }
}
