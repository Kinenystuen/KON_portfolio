import { useParams } from "react-router-dom";
import Section from "../../components/shared/Section";
import { useApi } from "../../hooks/UseApi";
import Loader from "../../components/ui/Loader";
import { Gallery } from "../../library/types";
import { useState } from "react";
import ModalImage from "../../components/ui/ModalImage";
import Breadcrumb from "../../components/BreadCrumItem";
import H2 from "../../components/shared/Typography/H2";

const PageGallery = () => {
  const { id } = useParams<{ id: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(
    null
  );

  const jsonUrl = id === "nature" ? `/json/MeData.json` : `/json/ArtData.json`;
  const headerTitle = id === "nature" ? "Nature" : "Art";
  const { data, isLoading, isError } = useApi<Gallery[]>(`${jsonUrl}`);

  if (isLoading) {
    return <Loader />;
  }
  if (isError) return <div>Error loading data.</div>;
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
    <Section className="container mt-0">
      <Breadcrumb items={breadcrumbItems} />
      <div className="flex items-center justify-between mb-6">
        <H2 className="font-bold text-2xl uppercase">{headerTitle} gallery</H2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 justify-center object-cover items-center">
        {data.map((galleryItem, index) => (
          <div
            key={galleryItem.id}
            className="scaleUp"
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
              src={galleryItem.image.url}
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
          className="max-w-screen-2xl"
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <div className="relative">
            <div className="flex items-center justify-center">
              <img
                src={data[currentImageIndex].image.url}
                alt={data[currentImageIndex].image.alt}
                className="h-auto max-w-full max-h-[90vh] rounded-sm shadow-md object-contain"
              />
              {data[currentImageIndex].image.alt && (
                <p className="absolute bottom-[-3rem] text-white bg-black bg-opacity-60 p-2 rounded-sm">
                  {data[currentImageIndex].image.alt}
                </p>
              )}
            </div>
          </div>
        </ModalImage>
      )}
    </Section>
  );
};

export default PageGallery;
