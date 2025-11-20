

"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";

export default function InitialLoader({ children }: { children: ReactNode }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // delay prevents flash
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <div className="animate-spin h-16 w-16 rounded-full border-4 border-fuchsia-500 border-t-transparent"></div>
            </div>
        );
    }

    return children;
}