import { Swiper } from "swiper/react";
import React, { useState } from "react";
import { Breakpoints } from "@/styles/theme";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/keyboard";
import "swiper/css/mousewheel";

import SwiperCore, { Autoplay, EffectFade, Keyboard, Mousewheel } from "swiper";
SwiperCore.use([Autoplay, EffectFade, Keyboard, Mousewheel]);

export type GenericSwiperProps = {
    children: React.ReactNode | React.ReactNode[];
};

export const GenericSwiper = ({ children }: GenericSwiperProps) => {
    const [swiper, setSwiper] = useState<any>(0);

    return (
        <Swiper
            breakpoints={{
                [Breakpoints.xs]: {
                    slidesPerView: 1,
                    spaceBetween: 100,
                    direction: "horizontal",
                    centeredSlides: true,
                },
                [Breakpoints.sm]: {
                    slidesPerView: 1,
                    spaceBetween: 100,
                    direction: "horizontal",
                    centeredSlides: true,
                    virtualTranslate: false,
                    virtual: false,
                },
                [Breakpoints.md]: {
                    slidesPerView: 2,
                    spaceBetween: 200,
                    direction: "horizontal",
                    centeredSlides: true,
                    virtualTranslate: false,
                    virtual: false,
                },
                [Breakpoints.lg]: {
                    slidesPerView: 3,
                    spaceBetween: 200,
                    direction: "horizontal",
                    centeredSlides: true,
                    virtualTranslate: false,
                    virtual: false,
                },
                [Breakpoints.xl]: {
                    slidesPerView: 3,
                    spaceBetween: 500,
                    direction: "horizontal",
                    centeredSlides: true,
                    virtualTranslate: false,
                    virtual: false,
                },
            }}
            onSwiper={(swiper) => setSwiper(swiper)}
            slidesPerView={5}
            spaceBetween={10}
        >
            {children}
        </Swiper>
    );
};
