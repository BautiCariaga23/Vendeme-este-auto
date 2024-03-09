"use client"
import React, { Suspense } from 'react'
import SecondStep from "./SecondStep.js"

export default function Page() {
 return(
  <Suspense>
    <SecondStep></SecondStep>
  </Suspense>
 )
}
