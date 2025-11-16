"use client"
import { motion as m } from "framer-motion"
import React from "react";
import * as Icons from "lucide-react"

type PopButtonProp = {
    text: string;
    className?: string;
    icon?: string,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function PopButton(data: PopButtonProp) {

    const Icon = data.icon ? (Icons as any)[data.icon] : null;

    const baseClasses =
        "relative bg-light text-light border border-fuchsia-300 hover:bg-gradient-to-r from-fuchsia-900 to-[#f081f3] hover:text-white px-20 py-5 font-extrabold text-lg rounded-4xl hover:shadow-lg shadow-md shadow-fuchsia-300 overflow-hidden";

    return (
        <m.button
            onClick={data.onClick}
            className={baseClasses}
            variants={{
                rest: { scale: 1 },
                hover: { scale: 1.1 },
            }}
            initial="rest"
            animate="rest"
            whileHover="hover"
            transition={{ duration: 0.25, ease: "easeOut" }}
        >

            <m.span
                className="block text-center"
                variants={{
                    rest: { x: 0 },
                    hover: Icon ? { x: -20 } : { x: 0 },
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
            >
                {data.text}
            </m.span>

            {Icon && (
                <m.span
                    className="absolute right-15 top-1/2 -translate-y-1/2"
                    variants={{
                        rest: { opacity: 0, x: 10 },
                        hover: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                >
                    <Icon size={22} />
                </m.span>
            )}

        </m.button>
    )
}
