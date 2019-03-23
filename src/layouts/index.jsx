import React from 'react'
import { Helmet } from 'react-helmet'

import Page from '../components/page'
import '../styles/_app.scss'

export default ({ children }) => (
  <Page>
    <Helmet>
      <title>Dexter Marks-Barber</title>
      <meta charSet={'UTF-8'} />
      <link
        rel={'stylesheet'}
        href={'https://pro.fontawesome.com/releases/v5.8.1/css/all.css'}
        integrity={'sha384-Bx4pytHkyTDy3aJKjGkGoHPt3tvv6zlwwjc3iqN7ktaiEMLDPqLSZYts2OjKcBx1'}
        crossOrigin={'anonymous'}
      />
      <link
        rel={'stylesheet'}
        href={'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600'}
      />
    </Helmet>
    {children}
  </Page>
)
