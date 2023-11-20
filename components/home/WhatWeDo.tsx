import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const WhatWeDo = () => {
  return (
    <div className="my_container bg-teal py-20 px-8 flex flex-col gap-7 rounded-2xl">
      <h3 className="text-center text-[1.1rem] md:text-[2.1rem] md:max-w-[550px] font-bold self-center text-white">
        Seeking help on Streams Foundation takes a few minutes{" "}
      </h3>
      <div
        // className="flex justify-between gap-4 px-5"
        className="gap-4 px-5"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(10rem,1fr))",
        }}
      >
        <div className="flex flex-col gap-5 items-center">
          <svg
            width="101"
            height="65"
            viewBox="0 0 101 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M58.8333 25.8328V41.6663C47.2083 41.8747 42.3749 46.708 42.1666 58.333H26.3333C13.8333 58.333 8.83325 53.3332 8.83325 40.8332V25.8328C8.83325 13.3328 13.8333 8.33301 26.3333 8.33301H41.3332C53.8332 8.33301 58.8333 13.3328 58.8333 25.8328Z"
              fill="#F09223"
            />
            <path
              d="M29.5001 24.4585C27.2917 22.9585 24.3751 22.9586 22.1667 24.5419"
              stroke="white"
              stroke-width="4"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M46.1666 24.4585C43.9582 22.9585 41.0416 22.9586 38.8333 24.5419"
              stroke="white"
              stroke-width="4"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M34.4999 47.5839H24.8333C23.5833 47.5839 22.5833 46.5838 22.5833 45.3338C22.5833 39.1254 27.6249 34.084 33.8333 34.084C36.4999 34.084 38.9582 35.0005 40.8749 36.5422"
              stroke="white"
              stroke-width="4"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M92.1667 59.1668V74.1672C92.1667 86.6672 87.1667 91.667 74.6667 91.667H59.6668C47.1668 91.667 42.1667 86.6672 42.1667 74.1672V58.3337C42.3751 46.7087 47.2084 41.8753 58.8334 41.667H74.6667C87.1667 41.667 92.1667 46.6668 92.1667 59.1668Z"
              stroke="white"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M62.8333 56.7504C60.625 58.2504 57.7083 58.2503 55.5 56.667"
              stroke="white"
              stroke-width="4"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M79.5001 56.7504C77.2917 58.2504 74.3751 58.2503 72.1667 56.667"
              stroke="white"
              stroke-width="4"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M58.1666 67.417H76.1666C77.4166 67.417 78.4166 68.4166 78.4166 69.6666C78.4166 75.875 73.375 80.917 67.1666 80.917C60.9583 80.917 55.9166 75.875 55.9166 69.6666C55.9166 68.4166 56.9166 67.417 58.1666 67.417Z"
              stroke="white"
              stroke-width="4"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h4 className="text-white text-[1.3rem]">Give Happiness</h4>
          <p className="text-center text-sm text-white max-w-[220px]">
            Giving happiness to others is one of the most fulfilling things you
            can do in life
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <svg
            width="132"
            height="65"
            viewBox="0 0 132 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M53.0833 86.7084C51.6667 87.2084 49.3333 87.2084 47.9167 86.7084C35.8333 82.5834 8.83333 65.3751 8.83333 36.2084C8.83333 23.3334 19.2083 12.9167 32 12.9167C39.5833 12.9167 46.2917 16.5834 50.5 22.2501C54.7083 16.5834 61.4583 12.9167 69 12.9167C81.7917 12.9167 92.1667 23.3334 92.1667 36.2084C92.1667 65.3751 65.1667 82.5834 53.0833 86.7084Z"
              fill="#F09223"
            />
            <path
              d="M90.5832 86.7082C89.1665 87.2082 86.8332 87.2082 85.4165 86.7082C73.3332 82.5832 46.3332 65.3748 46.3332 36.2082C46.3332 23.3332 56.7082 12.9165 69.4999 12.9165C77.0832 12.9165 83.7915 16.5832 87.9999 22.2498C92.2082 16.5832 98.9582 12.9165 106.5 12.9165C119.292 12.9165 129.667 23.3332 129.667 36.2082C129.667 65.3748 102.667 82.5832 90.5832 86.7082Z"
              stroke="white"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h4 className="text-white text-[1.3rem]">Share Love</h4>
          <p className="text-center text-sm text-white max-w-[220px]">
            When you share love to those around you, you create a ripple effect
            of kindness
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <svg
            width="101"
            height="65"
            viewBox="0 0 101 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M75.5 29.8333C75.25 29.7916 74.9583 29.7916 74.7083 29.8333C68.9583 29.6249 64.375 24.9166 64.375 19.0833C64.375 13.1249 69.1667 8.33325 75.125 8.33325C81.0833 8.33325 85.875 13.1666 85.875 19.0833C85.8333 24.9166 81.25 29.6249 75.5 29.8333Z"
              fill="#F09223"
            />
            <path
              d="M71.2083 60.1668C76.9166 61.1251 83.2083 60.1251 87.6249 57.1668C93.4999 53.2501 93.4999 46.8334 87.6249 42.9168C83.1666 39.9584 76.7916 38.9584 71.0833 39.9584"
              fill="#F09223"
            />
            <path
              d="M25.3749 29.8333C25.6249 29.7916 25.9166 29.7916 26.1666 29.8333C31.9166 29.6249 36.4999 24.9166 36.4999 19.0833C36.4999 13.1249 31.7083 8.33325 25.7499 8.33325C19.7916 8.33325 14.9999 13.1666 14.9999 19.0833C15.0416 24.9166 19.6249 29.6249 25.3749 29.8333Z"
              fill="#F09223"
            />
            <path
              d="M29.6667 60.1668C23.9583 61.1251 17.6667 60.1251 13.25 57.1668C7.375 53.2501 7.375 46.8334 13.25 42.9168C17.7083 39.9584 24.0833 38.9584 29.7917 39.9584"
              fill="#F09223"
            />
            <path
              d="M50.5001 60.9585C50.2501 60.9168 49.9585 60.9168 49.7085 60.9585C43.9585 60.7502 39.3751 56.0418 39.3751 50.2085C39.3751 44.2502 44.1668 39.4585 50.1251 39.4585C56.0834 39.4585 60.8751 44.2918 60.8751 50.2085C60.8335 56.0418 56.2501 60.7918 50.5001 60.9585Z"
              stroke="white"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M38.375 74.0835C32.5 78.0002 32.5 84.4168 38.375 88.3335C45.0417 92.7918 55.9583 92.7918 62.625 88.3335C68.5 84.4168 68.5 78.0002 62.625 74.0835C56 69.6668 45.0417 69.6668 38.375 74.0835Z"
              stroke="white"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h4 className="text-white text-[1.3rem]">Build Socially</h4>
          <p className="text-center text-sm text-white max-w-[220px]">
            Building socially requires not just connecting with others but also
            actively contributing
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
