import React, { useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import Button from "../shared/Button/Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  handlePrevious: () => void;
  handleNext: () => void;
  children: React.ReactNode;
  opacity?: string;
  className?: string;
}

const ModalImage: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  handlePrevious,
  handleNext,
  opacity,
  className,
  children
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      } else if (event.key === "ArrowRight" && isOpen) {
        handleNext();
      } else if (event.key === "ArrowLeft" && isOpen) {
        handlePrevious();
      }
    };

    const disableBackgroundScroll = () => {
      document.body.style.overflow = "hidden";
    };

    const enableBackgroundScroll = () => {
      document.body.style.overflow = "";
    };

    if (isOpen) {
      disableBackgroundScroll();
      document.addEventListener("keydown", handleKeyDown);
    } else {
      enableBackgroundScroll();
    }

    return () => {
      enableBackgroundScroll();
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, handlePrevious, handleNext]);

  // Swipe movement
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (isOpen) {
        handleNext();
      }
    },
    onSwipedRight: () => {
      if (isOpen) {
        handlePrevious();
      }
    },
    preventScrollOnSwipe: true,
    trackMouse: true
  });

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-2 ${opacity}`}
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
      {...swipeHandlers}
    >
      <Button
        onClick={onClose}
        className="absolute top-5 right-5  bg-transparent text-white px-4 py-2 rounded-l-lg hover:bg-gray-700 focus:outline-none focus:bg-gray-700 z-30"
        aria-label="Close Modal"
        title="Close"
      >
        ✕
      </Button>
      {/* Navigation buttons */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent text-white px-4 py-2 rounded-l-lg hover:bg-gray-700 focus:outline-none focus:bg-gray-700 z-30"
        onClick={(e) => {
          e.stopPropagation();
          handlePrevious();
        }}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handlePrevious();
          }
        }}
        aria-label="Previous image"
      >
        &#10094;
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent text-white px-4 py-2 rounded-l-lg hover:bg-gray-700 focus:outline-none focus:bg-gray-700 z-30"
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleNext();
          }
        }}
        aria-label="Next image"
      >
        &#10095;
      </button>
      <div
        className={`relative rounded-lg shadow-lg w-auto h-auto ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-center">{children}</div>
      </div>
    </div>
  );
};

export default ModalImage;
