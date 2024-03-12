"use client"
import React, { Suspense } from 'react'
import GetData from "./GetData"

export default function Page() {

  return(
  <Suspense>
   <GetData></GetData>
   </Suspense>
  )
}
