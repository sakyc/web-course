import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const To_topscroll = () => {
    let locationPath = useLocation().pathname
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [locationPath])
  return null
}

export default To_topscroll