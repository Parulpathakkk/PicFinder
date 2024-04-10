// import React, {useState} from "react";
import {useState} from "react";

function SearchBar({onSubmit}) {
  const onHandleSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };
  const [term, setTerm] = useState("");
  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  return (
    <div className="flex-[100%] md:flex-[50%] w-full">
      <form onSubmit={onHandleSubmit}>
        <input className="border-gray-900 text-[1.1cqw] rounded-[0.2cqw] bg-[#FBF3D5] pb-[2.5cqw] pt-[2cqw] px-[2.5cqw] md:pb-[0.7cqw] md:px-[0.7cqw] md:pt-[0.5cqw] w-full md:w-[70%] outline-none  placeholder:text-[#9CAFAA] text-[#114232] placeholder:text-[1.1cqw] flex h-full items-center placeholder:italic" placeholder="Find your image..."  value={term} onChange={handleChange} />
        {/* <p className="text-blue-600">{term}</p> */}
      </form>
    </div>
  );
}
export default SearchBar;
