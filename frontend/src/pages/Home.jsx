import React from 'react'
import Header from '../components/Header'

import LatestCollections from '../components/LatestCollections'
import BestSellers from '../components/BestSellers'

const Home = () => {
  return (
    <>
    <Header/>
    
    {/* LATEST COLLECTION  */}
    <LatestCollections/>

   {/* Best Sellers */}
    <BestSellers/>

    
    </>

  )
}

export default Home
