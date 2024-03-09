"use client"
import { useRouter, useSearchParams } from 'next/navigation'
import React, { Suspense, useEffect, useState } from 'react'
import DoRegister from "./DoRegister.js"

export default function Page() {
   return(
    <Suspense>
      <DoRegister></DoRegister>
    </Suspense>
   )
}