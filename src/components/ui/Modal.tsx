import React, { useEffect } from "react";
import H2 from "../shared/Typography/H2";
import Button from "../shared/Button/Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  opacity?: string;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  opacity,
  className,
  children
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-2 ${opacity}`}
      onClick={onClose}
    >
      <div
        className={` bg-customBg rounded-lg shadow-lg w-full max-w-screen-lg max-h-[90vh] overflow-y-auto p-4 relative ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          className={`flex items-center pb-2 mb-4 ${
            title ? " justify-between" : "justify-end"
          }`}
        >
          {title && (
            <H2 className="font-bold text-lg text-gray-800">{title}</H2>
          )}
          <Button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            ariaLabel="Close Modal"
            title="Close"
          >
            ✕
          </Button>
        </div>

        {/* Modal Content */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
