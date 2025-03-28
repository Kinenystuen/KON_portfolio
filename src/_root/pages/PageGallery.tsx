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

      const items = Array.from(container.children) as HTMLElement[];
      const containerWidth = container.clientWidth;
      const gap = 10;
      const idealRowHeight =
        containerWidth > 1000 ? 250 : containerWidth > 700 ? 220 : 180;

      let currentRow: {
        img: HTMLImageElement;
        aspectRatio: number;
        wrapper: HTMLElement;
      }[] = [];
      let totalAspectRatio = 0;

      function layoutRow(fillRow = true) {
        const totalGap = gap * (currentRow.length - 1);
        const scale = fillRow
          ? (containerWidth - totalGap) / totalAspectRatio
          : idealRowHeight;

        currentRow.forEach(({ img, aspectRatio, wrapper }) => {
          const width = fillRow ? scale * aspectRatio : aspectRatio * scale;
          const height = fillRow ? scale : scale;

          wrapper.style.width = `${width}px`;
          wrapper.style.height = `${height}px`;
          img.style.width = "100%";
          img.style.height = "100%";
        });

        currentRow = [];
        totalAspectRatio = 0;
      }

      for (const wrapper of items) {
        const img = wrapper.querySelector("img");
        if (!img || !img.naturalWidth || !img.naturalHeight) continue;

        const aspectRatio = img.naturalWidth / img.naturalHeight;

        currentRow.push({ img, aspectRatio, wrapper });
        totalAspectRatio += aspectRatio;

        const totalGap = gap * (currentRow.length - 1);
        const estimatedRowWidth = idealRowHeight * totalAspectRatio + totalGap;

        if (estimatedRowWidth >= containerWidth * 0.95) {
          layoutRow(true);
        }
      }

      // Handle final row — stretch if there are at least 3 images
      if (currentRow.length > 0) {
        const shouldFillRow = currentRow.length >= 4 || containerWidth < 600;
        layoutRow(shouldFillRow);
      }
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
              justifyImages();
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
      <div
        ref={galleryRef}
        className="flex flex-wrap justify-start gap-2"
        style={{ alignContent: "flex-start" }}
      >
        {data.map((galleryItem, index) => (
          <div
            key={galleryItem.id}
            className="relative cursor-pointer hover:scale-105 transition-transform duration-300"
            style={{ overflow: "hidden" }}
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
