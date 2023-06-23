import { useQuery } from '@tanstack/react-query';
import React from 'react'
import axios from 'axios';
import { useGlobalContext } from './context';
const Gallery = () => {
  const {search}=useGlobalContext()
  const url =
  `https://api.unsplash.com/search/photos/?client_id=${import.meta.env.VITE_API_KEY}`;
  const response=useQuery({
    queryKey:['images',search],
    queryFn:()=>{
      const result=axios.get(`${url}&query=${search}`).then(res=>{
        return res.data
      })
      return result
    },
  })
  if(response.isLoading){
    return <section className='image-ontainer'>
      <h4>Loading...</h4>
    </section>
  }
  if(response.isError){
    return <section className='image-ontainer'>
      <h4>oops there seems to be an error...</h4>
    </section>
  }
  if(response.isLoading){
    return <section className='image-ontainer'>
      <h4>Loading...</h4>
    </section>
  }

  const results=response.data.results
  if(!results.length){
    return <section className='image-ontainer'>
      <h4>No results found...</h4>
    </section>

  }
  return (
    <section className='image-container'>
      {results.map(res=>{
        const url=res?.urls?.regular
        return <img src={url} key={res.id} alt={res.alt_description} className='img' />
      })}
    </section>
  )
}

export default Gallery