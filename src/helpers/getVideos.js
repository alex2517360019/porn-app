export const getVideos= async (categoria) => {
    const per_page = 90;
    const page = 1;
    const thumbsize = 'medium';
    const order = 'most-popular';
    const gay = 1;
    const lq = 1;
    const format= 'json'
    const url =`https://www.eporner.com/api/v2/video/search/?query=${categoria}&order=${order}&lq=${lq}&page=${page}&per_page=${per_page}&thumbsize=${thumbsize}&gay=${gay}&format=${format}`;
    //peticion a endpoint con fetch
    const resp = await fetch(url); 
    //json de la respuesta
    const {videos} = await resp.json();
    //desesctructutacion de la data de la imagen
    const video = videos.map(v => {
        console.log(v.url);
        return {
        id: v.id,
        title: v.title,
        url: v.embed
      }      
    });
    return video;
}  
//getGifts();