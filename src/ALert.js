import React from 'react'
import { useGlobalContext } from './context'

const ALert = () => {
  const { alert } = useGlobalContext()
  const { msg, type } = alert
  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default ALert
