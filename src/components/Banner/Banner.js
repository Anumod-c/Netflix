import React, { useState } from 'react'
import { API_KEY ,imageUrl} from '../../constants/constant'
import './Banner.css'
import axios from '../../axios'
import { useEffect } from 'react'
function Banner() {

const [movie, setMoive] = useState()

  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0]);
      setMoive(response.data.results[0])
    })
  },[])


  return (
    <div className='banner' style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:''})`}}>
      <div className='content'>
        <h1 className='title'> {movie?movie.title:""}</h1>
        <div className='banner_buttons'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>
        </div>
        <h1 className='description'>{movie?movie.overview:''}  </h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
