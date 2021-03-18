import { Fragment } from 'react'
import Head from 'next/head'
import Dashboard from '@components/Dashboard/Dashboard'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Personal Blog</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Dashboard />
    </Fragment>
  )
}
