"use client"
import React, { Suspense } from 'react'
import ProductDetail from "./ProductDetail.js"

export default function Page() {

    return (
    <Suspense>
        <ProductDetail></ProductDetail>
    </Suspense>
    )
}
