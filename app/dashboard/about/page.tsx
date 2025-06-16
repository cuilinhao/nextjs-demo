'use client'

import { useState } from "react";

export default function Page({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div >
            <h2> About Content</h2>
            {children}
        </div>
    );
}

