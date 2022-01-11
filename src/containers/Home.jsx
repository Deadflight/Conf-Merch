import React from 'react';
import {Helmet} from 'react-helmet';
import Products from '../components/Products';

function Home() {
  return (
    <>
      <Helmet>
        <title>Conf Merch - Productos</title>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@Deadfligth"/>
        <meta name="twitter:creator" content="@Deadfligth"/>
        <meta name="twitter:title" content="Conf Store"/>
        <meta name="twitter:description" content="Conf Store"/>
        <meta
          name="twitter:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta property="og:title" content="Conf Store"/>
        <meta property="og:description" content="Platzi Conf Store"/>
        <meta
          property="og:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta property="og:url" content="https://conf-merch-68241.web.app/" />
        <meta property="og:site_name" content="Conf Store" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
      </Helmet>
      <Products/>
    </>
  )
}

export default Home
