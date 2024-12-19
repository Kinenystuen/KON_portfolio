import { useState } from "react";

interface UseContactFormReturn {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  errorMessage: string;
  submitForm: (
    data: Record<string, any>,
    onSuccess?: () => void
  ) => Promise<void>;
}

const useContactForm = (url: string): UseContactFormReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const submitForm = async (
    data: Record<string, any>,
    onSuccess?: () => void
  ) => {
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);
    setErrorMessage("");

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form. Please try again.");
      }

      setIsSuccess(true);
      if (onSuccess) onSuccess();
    } catch (error: any) {
      setIsError(true);
      setErrorMessage(error.message || "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, isError, isSuccess, errorMessage, submitForm };
};

export default useContactForm;
