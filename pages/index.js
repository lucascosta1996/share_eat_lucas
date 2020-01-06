import React, { useEffect } from 'react'
import {useRouter}  from 'next/router'

const Index = () => {
  const router = useRouter()
  useEffect( () => {
    if( router.pathname == '/' ){
      router.push( '/places' )
    }
  }, [] )

  return (
    <div></div>
  )
}

export default Index