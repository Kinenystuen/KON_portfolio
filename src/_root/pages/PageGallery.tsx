import { Link, useParams } from "react-router-dom";
import Section from "../../components/shared/Section";
import { useApi } from "../../hooks/UseApi";
import Loader from "../../components/ui/Loader";
import { Gallery } from "../../library/types";
import { useEffect, useRef, useState } from "react";
import ModalImage from "../../components/ui/ModalImage";
import Breadcrumb from "../../components/BreadCrumItem";
import H2 from "../../components/shared/Typography/H2";
import { getBaseUrl } from "../../components/shared/BaseNameUtils";
import ErrorMessage from "../../components/shared/ErrorMessage";
import P from "../../components/shared/Typography/P";
import Button from "../../components/shared/Button/Button";
import ImageWithSkeleton from "../../components/shared/ImageWithSkeleton";

const PageGallery = () => {
  const { id } = useParams<{ id: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(
    null
  );
  const galleryRef = useRef<HTMLDivElement>(null);

  const jsonUrl = id === "nature" ? `json/MeData.json` : `json/ArtData.json`;
  const headerTitle = id === "nature" ? "Nature" : "Art";
  const { data, isLoading, isError, errorMessage } = useApi<Gallery[]>(
    `${import.meta.env.BASE_URL}${jsonUrl}`
  );

  useEffect(() => {
    function justifyImages() {
      const container = galleryRef.current;
      if (!container) return;

      const images = Array.from(container.children);
      let row: HTMLImageElement[] = [];
      let rowWidth = 0;
      const containerWidth = container.clientWidth;

      images.forEach((imgWrapper, index) => {
        const img = imgWrapper.querySelector("img");
        if (!img) return;

        img.style.height = "200px"; // Fixed row height
        img.style.width = "auto"; // Reset width

        row.push(img);
        rowWidth += img.clientWidth + 8; // Add 8px gap

        if (rowWidth >= containerWidth || index === images.length - 1) {
          // Adjust row widths proportionally
          const scaleFactor =
            (containerWidth - (row.length - 1) * 8) / rowWidth;
          row.forEach((image) => {
            image.style.width = `${image.clientWidth * scaleFactor}px`;
          });

          row = [];
          rowWidth = 0;
        }
      });
    }

    // Ensure images are fully loaded before running justification
    function waitForImagesToLoad() {
      const images = galleryRef.current?.querySelectorAll("img");
      if (!images) return;

      let loadedCount = 0;
      images.forEach((img) => {
        if (img.complete) {
          loadedCount++;
        } else {
          img.onload = () => {
            loadedCount++;
            if (loadedCount === images.length) {
              justifyImages(); // Run only when all images are loaded
            }
          };
        }
      });

      if (loadedCount === images.length) {
        justifyImages();
      }
    }

    window.addEventListener("resize", justifyImages);
    waitForImagesToLoad(); // Ensure images are loaded before justifying

    return () => window.removeEventListener("resize", justifyImages);
  }, [data]);

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return (
      <ErrorMessage message="Data not found">
        <P>{errorMessage}</P>
        <Link to="/">
          <Button className="my-8 px-4 inline-block">Go to homepage</Button>
        </Link>
      </ErrorMessage>
    );
  }
  if (!data || data.length === 0) return <div>No data available.</div>;

  /* Breadcrumb items */
  const breadcrumbItems = [
    { label: "", href: "/" },
    {
      label: "Gallery",
      isDropdown: true,
      dropdownItems: [
        { label: "Art Gallery", href: "/gallery/art" },
        { label: "Nature Gallery", href: "/gallery/nature" }
      ]
    }
  ];

  /* Handle image click */
  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };
  const handlePrevious = () => {
    if (currentImageIndex !== null) {
      setCurrentImageIndex((currentImageIndex - 1 + data.length) % data.length);
    }
  };
  const handleNext = () => {
    if (currentImageIndex !== null) {
      setCurrentImageIndex((currentImageIndex + 1) % data.length);
    }
  };

  return (
    <Section className="container mt-0 relative bg-customBg pt-0 max-w-6xl">
      <Breadcrumb items={breadcrumbItems} />
      <div className="flex items-center justify-between mb-6 ">
        <H2 className="font-bold text-2xl uppercase">{headerTitle} gallery</H2>
      </div>
      <div ref={galleryRef} className="flex flex-wrap justify-start gap-2">
        {data.map((galleryItem, index) => (
          <div
            key={galleryItem.id}
            className="relative cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => handleImageClick(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleImageClick(index);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`View image ${galleryItem.image.alt}`}
          >
            <ImageWithSkeleton
              src={getBaseUrl(galleryItem.image.url)}
              alt={galleryItem.image.alt}
              className="rounded-sm"
            />
          </div>
        ))}
      </div>
      {/* Modal */}
      {isModalOpen && currentImageIndex !== null && (
        <ModalImage
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          opacity="bg-opacity-90"
          className="max-w-screen-2xl z-30"
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <div className="relative">
            <div className="flex flex-col items-center justify-center mx-10 max-w-full h-[90vh]">
              <img
                src={getBaseUrl(data[currentImageIndex].image.url)}
                alt={data[currentImageIndex].image.alt}
                className="h-full rounded-sm shadow-md object-contain"
              />
              {data[currentImageIndex].image.alt && (
                <P className="text-white bg-black bg-opacity-60 p-2 mt-1 rounded-sm">
                  {data[currentImageIndex].image.alt}
                </P>
              )}
            </div>
          </div>
        </ModalImage>
      )}
    </Section>
  );
};

export default PageGallery;
