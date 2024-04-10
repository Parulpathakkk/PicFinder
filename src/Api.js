import axios from "axios";

const SearchImages= async (term)=>{
  const response=  await  axios.get('https://api.unsplash.com/search/photos',{
        headers: {
            Authorization:'Client-ID CGVivrKZXjTyEFHHfjUCZ_lwDXk_LDnOm4uxuYvp4Lg'
        },
        params: {
            query: term
        }

    });
    return response.data.results;
}

export default SearchImages;