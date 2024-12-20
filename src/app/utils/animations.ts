// animations.ts
export const fadeInAnimation = (time: number = 300) => ({
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: time / 1000, ease: "linear" } },
});

export const slideUpDown = {
    slideup: { opacity: 0, transform: "translateY(-100%)" },
    slidedown: {
        opacity: 1,
        transform: "translateY(0)",
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export const slideInOutWithOpacity = {
    hidden: { visibility: "hidden", overflow: "hidden", height: 0 },
    visible: {
        height: "auto",
        overflow: "visible",
        visibility: "visible",
        transition: { duration: 0.3, ease: "linear" },
    },
};

export const fadeInOut = (time: number = 300) => ({
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: time / 1000, ease: "ease" },
    },
});

export const slideOutCart = {
    hidden: { transform: "translateX(100%)", opacity: 0 },
    visible: {
        transform: "translateX(0%)",
        opacity: 1,
        transition: { duration: 0.5, ease: "ease" },
    },
};

export const slideRightToLeft = (time: number) => ({
    hidden: { transform: "translateX(10%)", opacity: 0 },
    visible: {
        transform: "translateX(0%)",
        opacity: 1,
        transition: {
            duration: time / 1000,
            delay: (time * 2) / 1000,
            ease: "ease",
        },
    },
});

export const slideLeftToRight = (time: number) => ({
    hidden: { transform: "translateX(-10%)", opacity: 0 },
    visible: {
        transform: "translateX(0%)",
        opacity: 1,
        transition: {
            duration: time / 1000,
            delay: (time * 2) / 1000,
            ease: "ease",
        },
    },
});

export const slideTopToBottom = (time: number) => ({
    hidden: { transform: "translateY(-10%)", opacity: 0 },
    visible: {
        transform: "translateY(0%)",
        opacity: 1,
        transition: {
            duration: time / 1000,
            delay: time / 1000,
            ease: "ease",
        },
    },
});

export const slideBottomToTop = (time: number) => ({
    hidden: { transform: "translateY(10%)", opacity: 0 },
    visible: {
        transform: "translateY(0%)",
        opacity: 1,
        transition: {
            duration: time / 1000,
            delay: time / 1000,
            ease: "ease",
        },
    },
});
