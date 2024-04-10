import ImageShow from "./ImageShow";

function ImageList({imagesList}) {
  const renderedImages = imagesList.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });

  return (
<section className="">
<div className="grid grid-cols-4 gap-[2cqw] w-full h-full bg-[#D6DAC8] p-[2cqw]">{renderedImages}</div>;
</section>
  )
   
}
export default ImageList;
