import React from 'react'
import Head from 'next/head'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({children}) => {
  return (
    <>
      <Head>
        <title>Vicente Pérez | Full-Stack Developer</title>
      </Head>
      <Container>
      <Header/>
      <main>{children}</main> 
      <Footer/>
      </Container>
    </>
  )
}
