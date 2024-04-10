import {useState} from "react";
import SearchBar from "./components/SearchBar";
// import SearchImages from "./Api";
import ImageList from "./components/ImageList";
import axios from "axios";

function App() {
  const [images, setImages] = useState([]);
  const [searched, setSearched] = useState(false);

  const SearchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID CGVivrKZXjTyEFHHfjUCZ_lwDXk_LDnOm4uxuYvp4Lg",
      },
      params: {
        query: term,
      },
    });
    return response.data.results;
  };

  const handleSubmit = async (term) => {
    const result = await SearchImages(term);
    setImages(result);
    setSearched(true);
  };

  return (
    <div className="bg-[#D6DAC8] min-h-screen w-full ">
      <div className="flex flex-col gap-[2cqw] md:flex-row justify-between items-center w-full bg-[#EFBC9B] p-[4cqw] md:p-[3cqw]">
        <div className="order-2 md:order-1 w-full">
          <SearchBar onSubmit={handleSubmit} />
        </div>

        <div className="order-1 md:order-2 w-full">
          <h1 className="text-[4cqw] md:text-[1.5cqw] text-[#114232] font-bold flex-[100%] md:flex-[50%] md:text-right italic ">
            imageFinder
          </h1>
        </div>
      </div>

      {searched ? (
        <ImageList imagesList={images} />
      ) : (
        <div className="text-center mt-[14cqw] md:mt-[4cqw]">
          <p className="text-[#114232]">
            Please enter a search term to see images
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
