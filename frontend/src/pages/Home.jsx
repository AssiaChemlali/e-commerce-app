import React from 'react'
import Header from '../components/Header'

import LatestCollections from '../components/LatestCollections'
import BestSellers from '../components/BestSellers'
import Policiers from '../components/Policiers'
import Newslatter from '../components/Newslatter'

const Home = () => {
  return (
    <>
    <Header/>
    <LatestCollections/>
    <BestSellers/>
    <Policiers/>
    <Newslatter/>

    
    </>

  )
}

export default Home
