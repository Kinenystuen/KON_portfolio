import H3 from "../shared/Typography/H3";

const ImageGallery: React.FC<{ direction: string }> = ({ direction }) => {
  const dynamicImages =
    direction === "left"
      ? [
          "/src/assets/img/Bilde_Kine.jpg",
          "/src/assets/img/nature/IMG_0558.jpg",
          "/src/assets/img/nature/IMG_0704.JPG",
          "/src/assets/img/nature/IMG_2128.jpg",
          "/src/assets/img/nature/IMG_4266.JPEG"
        ]
      : [
          "/src/assets/img/art/IMG_0220.JPG",
          "/src/assets/img/art/2017.JPG",
          "/src/assets/img/art/2015_4.JPG",
          "/src/assets/img/art/2015_3.JPG",
          "/src/assets/img/art/2015_2.JPG"
        ];

  const fixedImage =
    direction === "left"
      ? "/src/assets/Art_mountain.svg"
      : "/src/assets/Art_paint.svg";
  const fixedImagePlaced = direction === "left" ? "" : "ms-4 md:ms-12";

  const directionRounded =
    direction === "left"
      ? "rounded-r-lg  items-end"
      : "rounded-l-lg  items-start";
  const directionDisplay =
    direction === "left" ? "flex-row-reverse" : "flex-row";

  const typeName = direction === "left" ? "Nature" : "Art";
  const type =
    direction === "left"
      ? "right-[7rem] xl:right-[10rem]"
      : "left-[7rem] xl:left-[10rem] ";

  return (
    <div
      className={`w-11/12 flex flex-col justify-center bg-customGreen overflow-hidden shadow-lg ${directionRounded}`}
    >
      <div className={`absolute z-30 top-[-1rem] px-4 py-1  ${type}`}>
        <H3 className="font-other text-[2.25rem] text-4xl ">{typeName}</H3>
      </div>

      <div className="flex space-x-0 relative">
        <div
          className={`w-auto flex justify-start items-center bg-white ${directionDisplay} `}
        >
          <img
            className={`h-auto w-16 md:w-48 m-2 sm:m-4 md:m-8 object-cover${fixedImagePlaced} `}
            src={fixedImage}
            alt="Image"
          />
          <div className="w-full overflow-x-auto scrollbar-custom bg-customGreen-500">
            <div className="flex m-0">
              {dynamicImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Dynamic Image ${index}`}
                  className="h-40 sm:h-48 md:h-60 w-60 object-cover bg-customGreen-500"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;