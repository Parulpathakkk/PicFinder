function ImageShow({image}) {
    return (
      // <div className="">
      <div className="overflow-hidden aspect-video">
      <img className="w-full h-full object-cover duration-500 " src={image.urls.small} alt={image.alt_description}/>
      </div>
      // </div>
    );
  }
  export default ImageShow;
  