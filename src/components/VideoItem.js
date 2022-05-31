import React from 'react';

export const VideoItem = ({id, title,url}) => {
  return (
    <div id={id} >
       <iframe title={title} width="560" height="315" src={url}frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       {/* {img.title} */}
    </div>
  )
}
