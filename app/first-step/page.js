"use client"
import React, { Suspense, useEffect, useState } from 'react'
import FirstStep from "./FirstStep.js"
export default function Page() {
    return(
      <Suspense>
        <FirstStep></FirstStep>
      </Suspense>
    )
}
