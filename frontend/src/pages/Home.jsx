import React from 'react'
import Header from '../components/Header'

import LatestCollections from '../components/LatestCollections'
import BestSellers from '../components/BestSellers'
import Policiers from '../components/Policiers'

const Home = () => {
  return (
    <>
    <Header/>

    {/* LATEST COLLECTION  */}
    <LatestCollections/>

   {/* Best Sellers */}
    <BestSellers/>
    <Policiers/>

    
    </>

  )
}

export default Home
