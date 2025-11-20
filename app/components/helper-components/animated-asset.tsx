"use client";

import { motion, MotionProps } from "framer-motion";

type AnimationPreset = "float" | "rotate" | "bounce" | "drift" | "slide-left-right" | "slide-right-left" | "slide-horizontal" | "none";

type AnimatedAssetProps = {
    svgSrc?: string;
    pngSrc?: string;
    animation?: AnimationPreset;
    imgClassName?: string; // <── NEW
    className?: string;
};

// Animation presets
const animationPresets: Record<
    AnimationPreset,
    { animate: MotionProps["animate"]; transition: MotionProps["transition"] }
> = {
    float: {
        animate: { y: [0, -10, 0] },
        transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },
    rotate: {
        animate: { rotate: 360 },
        transition: { duration: 30, repeat: Infinity, ease: "linear" },
    },
    bounce: {
        animate: { y: [0, -30, 0] },
        transition: { duration: 0.8, repeat: Infinity, ease: "easeOut" },
    },
    "slide-left-right": {
        animate: {
            x: [-20, 20, -20], // left → right → left
        },
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
    "slide-right-left": {
        animate: {
            x: [20, -20, 20], // right → left → right
        },
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
    drift: {
        animate: {
            x: [0, 10, -8, 6, 0],
            y: [0, -6, 8, -4, 0],
        },
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
    "slide-horizontal": {
        animate: {
            x: ["100px", "200px", "100px"], // slide left ↔ right
        },
        transition: {
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
    none: {
        animate: {},
        transition: {},
    },
};

export default function AnimatedAsset({
    svgSrc,
    pngSrc,
    animation = "none",
    imgClassName = "",
    className,
}: AnimatedAssetProps) {
    const preset = animationPresets[animation];

    return (
        <div className={className}>
            {svgSrc && (
                <motion.img
                    src={svgSrc}
                    alt="Animated SVG"
                    className={imgClassName}
                    animate={preset.animate}
                    transition={preset.transition}
                />
            )}

            {pngSrc && (
                <motion.img
                    src={pngSrc}
                    alt="Animated PNG"
                    className={imgClassName}
                    animate={preset.animate}
                    transition={preset.transition}
                />
            )}
        </div>
    );
}
