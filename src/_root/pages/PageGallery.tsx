import { Link, useParams } from "react-router-dom";
import Section from "../../components/shared/Section";
import { useApi } from "../../hooks/UseApi";
import Loader from "../../components/ui/Loader";
import { Gallery } from "../../library/types";
import { useState } from "react";
import ModalImage from "../../components/ui/ModalImage";
import Breadcrumb from "../../components/BreadCrumItem";
import H2 from "../../components/shared/Typography/H2";
import { getBaseUrl } from "../../components/shared/BaseNameUtils";
import ErrorMessage from "../../components/shared/ErrorMessage";
import P from "../../components/shared/Typography/P";
import Button from "../../components/shared/Button/Button";

const PageGallery = () => {
  const { id } = useParams<{ id: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(
    null
  );

  const jsonUrl = id === "nature" ? `json/MeData.json` : `json/ArtData.json`;
  const headerTitle = id === "nature" ? "Nature" : "Art";
  const { data, isLoading, isError, errorMessage } = useApi<Gallery[]>(
    `${import.meta.env.BASE_URL}${jsonUrl}`
  );

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
    { label: "Home", href: "/" },
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
      <div className="masonry-container columns-2 sm:columns-3 md:columns-4 gap-4">
        {data.map((galleryItem, index) => (
          <div
            key={galleryItem.id}
            className="mb-[1rem] break-inside-avoid scaleUp"
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
            <img
              src={getBaseUrl(galleryItem.image.url)}
              alt={galleryItem.image.alt}
              className="h-auto max-w-full rounded-sm shadow-md"
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
            <div className="flex flex-col items-center justify-center max-w-full h-[90vh]">
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
