import React, { ReactNode } from 'react'
import {Header} from './'
import NextPage from 'next'

interface Props {
    children?: ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <div>
        <Header />
        { children }
    </div>
  )
}

export default Layout