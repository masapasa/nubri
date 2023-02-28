import { NextSeo } from "next-seo";

export default function Timeline() {
  return (
    <>
      <NextSeo
        title="Timeline | Zacchary Puckeridge"
        description="Learn more about Zacchary's Career Path"
      />
      <h1 className="mt-20 max-w-2xl mx-auto font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
        Timeline
      </h1>
      <h2 className="text-gray-700 dark:text-gray-200 mb-8 mt-4">
        This is a timeline of our product development and launch. 
      </h2>
      <div className="p-1 grid place-items-center">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full bg-gray-200 dark:bg-[#1d1f22]">
              <svg
                aria-hidden="true"
                className="w-3 h-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              International Expansion
              <span className="bg-gray-200 dark:bg-[#1d1f22] text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
                Expansion
              </span>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-600 dark:text-gray-400">
              We will make it available in more countries.
            </time>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-600 dark:text-gray-400">
              May 2026 → Future
            </time>
            <p className="mb-4 text-base font-normal text-gray-700 dark:text-gray-200">
              ...
            </p>
          </li>
          <li className="mb-10 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full bg-gray-200 dark:bg-[#1d1f22]">
              <svg
                aria-hidden="true"
                className="w-3 h-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Lauch
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-600 dark:text-gray-400">
              Product Launch
            </time>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-600 dark:text-gray-400">
              Jun 2025 → May 2026
            </time>
            <p className="text-base font-normal text-gray-700 dark:text-gray-200">
              We plan to make it available to the public.
            </p>
          </li>
          <li className="mb-10 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full bg-gray-200 dark:bg-[#1d1f22]">
              <svg
                aria-hidden="true"
                className="w-3 h-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Testing
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-600 dark:text-gray-400">
              Beta testing
            </time>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-600 dark:text-gray-400">
              May 2024 → May 2025
            </time>
            <p className="text-base font-normal text-gray-700 dark:text-gray-200">
              We will be testing this out for a year to see how it goes. For medical application, it is important to get it right. So we will select a bigger group of people to test it out.
            </p>
          </li>
          <li className="mb-10 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full bg-gray-200 dark:bg-[#1d1f22]">
              <svg
                aria-hidden="true"
                className="w-3 h-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Testing
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-600 dark:text-gray-400">
              Test & Feedback
            </time>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-600 dark:text-gray-400">
              Sep 2023 → May 2024
            </time>
            <p className="text-base font-normal text-gray-700 dark:text-gray-200">
              After developing the initial version of the site, we will be intensively alpha testing on the application. We will be looking for feedback on the application, and will be working to improve the application based on the feedback we receive.
            </p>
          </li>
          <li className="mb-10 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full bg-gray-200 dark:bg-[#1d1f22]">
              <svg
                aria-hidden="true"
                className="w-3 h-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Research & Development
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-600 dark:text-gray-400">
              Product Development
            </time>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-600 dark:text-gray-400">
              May 2023 → Sep 2023
            </time>
            <p className="text-base font-normal text-gray-700 dark:text-gray-200">
              After finishing the ideation and product design, we will strart the development of the product. We will be using the latest technologies to build the product.
            </p>
          </li>
          <li className="mb-10 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full bg-gray-200 dark:bg-[#1d1f22]">
              <svg
                aria-hidden="true"
                className="w-3 h-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Initiation
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-600 dark:text-gray-400">
              Product Ideation
            </time>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-600 dark:text-gray-400">
              Nov 2022 → April 2023
            </time>
            <p className="text-base font-normal text-gray-700 dark:text-gray-200">
              Various interviews carried out with patients and doctors to find out the best way to improve the patient experience.
            </p>
          </li>
        </ol>
      </div>
    </>
  );
}
