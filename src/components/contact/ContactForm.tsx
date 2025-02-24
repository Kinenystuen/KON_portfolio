import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import {
  faBook,
  faCheck,
  faEnvelope,
  faInfo,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { urlContactForm } from "../../library/constants";
import H2 from "../shared/Typography/H2";
import P from "../shared/Typography/P";
import Button from "../shared/Button/Button";
import LoaderSmall from "../ui/LoaderSmall";
import useContactForm from "../../hooks/UseContactForm";
import Input from "../ui/Input";

export interface FormData {
  fullname: string;
  email: string;
  subject: string;
  bodyText: string;
}

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const { isLoading, isError, errorMessage, submitForm } =
    useContactForm(urlContactForm);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setFormData(data);

    await submitForm(data, () => {
      setIsSubmitted(true);
      // console.log("Form submitted successfully");
      reset();
    });
  };

  return (
    <div className="flex-1 container p-4 max-w-xs sm:max-w-md lg:max-w-lg bg-white dark:bg-customBgDark-600 rounded-lg shadow-lg ">
      {isSubmitted ? (
        // Success State
        <div className="text-center">
          <div className="mb-4 rounded-full bg-gray-100 dark:bg-customBgDark-500 w-[8rem] h-[8rem] flex justify-center items-center mx-auto">
            <FontAwesomeIcon
              icon={faCheck}
              style={{ fontSize: "6rem" }}
              className="text-color4-600 dark:text-color4-700"
            />
          </div>
          <H2 className="text-xl font-semibold my-2">Message Sent</H2>
          <P className="text-sm">Thank you for reaching out!</P>
          <P className="text-sm">I will be in contact with you shortly.</P>

          {/* Display Submitted Data */}
          <div className="my-6 border rounded-md dark:border-gray-500 p-2">
            <div className="flex justify-between border-b-2 dark:border-gray-500">
              <P className="text-md flex flex-col justify-between m-1">
                <small className="dark:text-customBgDark-200 text-start font-bold">
                  Name:
                </small>
                {formData?.fullname}
              </P>
              <P className="text-md flex flex-col items-end justify-between gap-1 m-1">
                <small className="dark:text-customBgDark-200 font-bold">
                  E-mail:
                </small>
                {formData?.email}
              </P>
            </div>
            <P className="text-md flex flex-col items-start gap-1 p-2 text-start">
              <small className="dark:text-customBgDark-200 font-bold">
                Subject:
              </small>
              {formData?.subject}
            </P>
            <P className="text-md flex flex-col items-start gap-1 p-2 text-start">
              <small className="dark:text-customBgDark-200 font-bold">
                Message:
              </small>
              {formData?.bodyText}
            </P>
          </div>
        </div>
      ) : (
        // Form State
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-2 flex flex-col gap-1"
        >
          <P>Send me a message!</P>

          <div className="flex flex-col sm:flex-row justify-between gap-3">
            {/* Full Name */}
            <Input
              InputId="fullname"
              InputLabel="Full Name"
              icon={faUser}
              register={register}
              errors={errors}
              required={true}
              minLength={3}
              maxLength={50}
            />

            {/* Email */}
            <Input
              InputId="email"
              InputLabel="Email"
              icon={faEnvelope}
              register={register}
              errors={errors}
              required={true}
              minLength={5}
              maxLength={100}
            />
          </div>

          {/* Subject */}
          <Input
            InputId="subject"
            InputLabel="Subject"
            icon={faBook}
            register={register}
            errors={errors}
            required={true}
            minLength={3}
            maxLength={100}
          />

          {/* Message */}
          <div className="relative w-full">
            <FontAwesomeIcon
              icon={faInfo}
              data-testid="icon"
              className="absolute h-4 w-4 top-5 left-4 text-gray-400 peer-focus:text-color4-700 dark:text-gray-500 dark:peer-focus:text-color4-600"
            />
            <textarea
              id="message"
              {...register("bodyText", {
                required: "Message is required.",
                minLength: {
                  value: 3,
                  message: "Minimum length is 3 characters."
                },
                maxLength: {
                  value: 1000,
                  message: "Maximum length is 1000 characters."
                }
              })}
              placeholder=""
              className="peer w-full p-2 pl-10 pt-5 pb-2 border bg-white focus:bg-white border-gray-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-color4-700 focus:border-color4-600 dark:bg-customBgDark-500 dark:text-whiteFont-600 resize-none rounded-md"
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = "auto";
                target.style.height = `${target.scrollHeight}px`;
              }}
            />
            {/* Input Label */}
            <label
              htmlFor={"message"}
              aria-label="Message"
              className={`absolute rounded-md left-6 top-[-8px] text-gray-500 dark:text-whiteFont-700 bg-white text-sm dark:bg-customBgDark-500 px-1 transition-all 
              peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
              peer-focus:top-[-8px] peer-focus:text-sm peer-focus:text-color4-800 dark:peer-focus:text-whiteFont-600 peer-placeholder-shown:left-11 peer-focus:left-6
              }`}
            >
              Message
            </label>
            <ErrorMessage
              errors={errors}
              name="bodyText"
              render={({ message }) => (
                <p className="text-red-500 text-sm mt-1">{message}</p>
              )}
            />
          </div>
          {/* Old Message */}
          {/* <div className="relative w-full ">
            <textarea
              id="message"
              {...register("bodyText", {
                required: "Message is required.",
                minLength: {
                  value: 3,
                  message: "Minimum length is 3 characters."
                },
                maxLength: {
                  value: 1000,
                  message: "Maximum length is 1000 characters."
                }
              })}
              placeholder=" "
              className="peer cursor-pointer w-full p-2 px-3 pt-5 pb-2 border bg-white focus:bg-white border-gray-300 dark:border-customBgDark-600 rounded-md focus:outline-none focus:ring-2 focus:ring-color4-700 focus:border-color4-600 dark:bg-customBgDark-500 dark:text-whiteFont-600 resize-none overflow-hidden"
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = "auto";
                target.style.height = `${target.scrollHeight}px`;
              }}
            />

            <label
              htmlFor="message"
              className="absolute rounded-md left-3 top-[-8px] text-gray-500 dark:text-whiteFont-700 bg-white focus:bg-white text-sm dark:bg-customBgDark-500 px-1 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-8px] peer-focus:text-sm peer-focus:text-color4-800 dark:peer-focus:text-whiteFont-600"
            >
              Message
            </label>
            <ErrorMessage
              errors={errors}
              name="bodyText"
              render={({ message }) => (
                <p className="text-red-500 text-sm mt-1">{message}</p>
              )}
            />
          </div> */}

          {/* API Error */}
          {isError && <p className="text-red-500">{errorMessage}</p>}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-color4-700 focus:border-color4-600"
            buttonType="violet"
            ariaLabel="Submit form"
          >
            {isLoading ? <LoaderSmall className="mx-auto" /> : "Submit"}
          </Button>
        </form>
      )}
    </div>
  );
}

export default Contact;
