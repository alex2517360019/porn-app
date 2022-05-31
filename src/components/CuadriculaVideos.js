import React from 'react';
import { useFetchVideos } from '../hooks/useFetchVideos';
import { VideoItem } from './VideoItem';

export const CuadriculaVideos = ({categoria}) => {
  const {videos:v,loading} = useFetchVideos(categoria);
  return (
    <>
    <h1>componente</h1>
    {categoria}
    {loading && <p>Cargando...</p>}
    <div>
            { 
            v.map( v =>(
              <VideoItem key={v.id} {...v} />
            ))
            }  
    </div>
    </>
  )
}
