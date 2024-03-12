import React, { Suspense } from 'react'
import Profile from './Profile'

export default function page() {
  return (
    <Suspense>
        <Profile></Profile>
    </Suspense>
  )
}
