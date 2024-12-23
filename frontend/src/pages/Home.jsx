import React from 'react'
import Header from '../components/Header'
import Heading from '../components/heading'
import ListProducts from '../components/ListProducts'

const Home = () => {
  return (
    <>
    <Header/>

    <Heading 
    title="LATEST COLLECTIONS" 
    subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."/>

    <ListProducts/>

    <Heading 
    title="BEST SELLERS" 
    ubtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."/>
    
    </>

  )
}

export default Home
