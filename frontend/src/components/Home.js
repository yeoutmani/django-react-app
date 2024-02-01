import React from 'react'
import AxiosInstance from './Axios'

const Home = () => {
  AxiosInstance.get(`project/`).then((res) => {
    console.log('res', res)
  })
  return (
    <div>Home</div>
  )
}

export default Home