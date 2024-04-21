import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import YouTube from 'react-youtube'
import "./RowPost.css"
import {API_KEY, imageUrl } from '../../constants/constant'
function RowPost(props) {

const[movies,setMovies]=useState([])
const [urlId,seturlId]= useState('')

  useEffect(()=>{
axios.get(props.url).then((response)=>{
  console.log(response,'lll');
  setMovies(response.data.results)
})
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie= (id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=> {
      console.log(response.data,'fffffff');
      if(response.data.results.lemgth!==0){
        seturlId(response.data.results[0])
      }else{
        console.log("NO Data");
      }
 
    })
  }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj)=>
          <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?"smallPoster":'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="posters" />
        )}
        
       
      </div>
      {urlId && <YouTube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default RowPost
