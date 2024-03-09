"use client"
import React, { Suspense, useState } from 'react'
import DoLogin from "./DoLogin.js"

export default function Page() {
  return(
   <Suspense>
    <DoLogin></DoLogin>
   </Suspense>
  )
}
