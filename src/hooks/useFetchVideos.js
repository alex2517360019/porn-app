import { useEffect, useState } from "react";
import { getVideos } from "../helpers/getVideos";

export const useFetchVideos = (categoria)=>{
  const [state, setState] = useState({
        videos: [],
        loading: true
  });
  useEffect(()=>{
    getVideos(categoria).then(v =>{
        setTimeout(() => {
            //console.log(imgs);
            setState({
                videos: v,
                loading: false
            });
        }, 3000);
    });
  },[categoria]);
//   setTimeout(() => {
//       setState({
//         data: [1,2,3,4,5,6,7,8,9,10],
//         loading: false
//       })
//   }, 1500);
  return state;
}
