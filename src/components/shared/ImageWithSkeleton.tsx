import { useState } from "react";

const ImageWithSkeleton = ({
  src,
  alt,
  className
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-[200px] overflow-hidden">
      {/* Skeleton Loader */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-300 dark:bg-customBgDark-600  animate-pulse rounded-sm"></div>
      )}
      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`w-auto h-full object-cover transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }  ${className}`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default ImageWithSkeleton;
