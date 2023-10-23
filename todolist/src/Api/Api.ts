import axios from "axios"

export const getVideos = async(cate:any)=>{
  

  const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
      q: cate,
      part: 'snippet,id',
      regionCode: 'US',
      maxResults: '50',
      order: 'date'
    },
    headers: {
      'X-RapidAPI-Key': '361412aadamshf9caad61ff93273p1fe5b2jsn1557e95f81cc',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
  localStorage.setItem("youtubevideos", JSON.stringify(response.data))
    return response.data
  } catch (error) {
    console.error(error);
  }
}