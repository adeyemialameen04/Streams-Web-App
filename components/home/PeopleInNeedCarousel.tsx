"use client";
import { PEOPLE_IN_NEED_TYPES } from "@/@types";
import Image from "next/image";
import React from "react";

const PeopleInNeedCarousel = ({ title }: { title: string }) => {
  return (
    <div className="my_container pt-12">
      <Carousel
        data={PEOPLE_IN_NEED}
        component={PeopleInNeedItemWrapper as React.ComponentType<{}>}
        title={title}
        // desc="Read the latest articles on BitSaac, BitCommerce, and the tech industry"
        // showMoreLink="/blog"
      />
    </div>
  );
};

export default PeopleInNeedCarousel;

const PeopleInNeedItemWrapper: React.FC<PEOPLE_IN_NEED_TYPES> = (props) => {
  return <PeopleInNeedItem {...props} />;
};

import Carousel from "./Carousel";
import { PEOPLE_IN_NEED } from "@/data";
const PeopleInNeedItem = ({
  image,
  title,
  desc,
  amountRaised,
  target,
  supporting,
}: PEOPLE_IN_NEED_TYPES) => (
  <article className="px-3 md:mr-3 border border-[#0000003B] dark:border-[#ABABAB3B] rounded-xl py-4 flex flex-col gap-4">
    <div className="max-w-full overflow-hidden max-h-[280] rounded-lg">
      <Image
        src={image}
        alt="header"
        quality={100}
        priority
        width={380}
        height={266}
        className="flex w-full overflow-hidden rounded-lg max-h-[280] shrink-0 object-cover"
      />
    </div>
    <div className="flex flex-col gap-4">
      <p className="text-[1.1rem] md:text-[1.5rem] dark:text-white">{title}</p>
      <p className="text-[#000000B2] text-sm dark:text-[#ABABAB]">{desc}</p>
      <p className="text-sm text-[#000000B2] dark:text-[#ABABAB]">
        <span className="text-[1.1rem] text-black dark:text-white md:text-[1.5rem]">
          {amountRaised.toLocaleString()} Naira
        </span>
        raised of {target.toLocaleString()} goal
      </p>
      <div className="h-[16px] rounded-[100vh] w-full bg-[#E8E8E8]">
        <div className="h-[16px] w-[60%] bg-teal overflow-hidden rounded-[100vh]"></div>
      </div>
      <div className="flex justify-between">
        <span className="text-[#000000B2] dark:text-[#ABABAB] text-sm flex gap-2 items-center">
          <svg
            width="32"
            height="26"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 11.75C30 20.5 17.0262 27.5825 16.4737 27.875C16.3281 27.9533 16.1654 27.9943 16 27.9943C15.8346 27.9943 15.6719 27.9533 15.5262 27.875C14.9738 27.5825 2 20.5 2 11.75C2.00232 9.69528 2.81958 7.72539 4.27248 6.27248C5.72539 4.81958 7.69528 4.00232 9.75 4C12.3313 4 14.5912 5.11 16 6.98625C17.4088 5.11 19.6688 4 22.25 4C24.3047 4.00232 26.2746 4.81958 27.7275 6.27248C29.1804 7.72539 29.9977 9.69528 30 11.75Z"
              fill="#EC3C52"
            />
          </svg>
          {supporting.toLocaleString()} supporters
        </span>
        <button>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 29.3334C23.3638 29.3334 29.3333 23.3639 29.3333 16.0001C29.3333 8.63628 23.3638 2.66675 16 2.66675C8.63616 2.66675 2.66663 8.63628 2.66663 16.0001C2.66663 23.3639 8.63616 29.3334 16 29.3334Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.3334 16H19.3334"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.6666 20L20.6666 16L16.6666 12"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </article>
);
// const PeopleInNeedItem = ({
//     image,
//     title,
//     desc,
//     amountRaised,
//     target,
//     supporting,
//   }: PEOPLE_IN_NEED_TYPES) => (
//     <article className="px-3 py-4 flex flex-col gap-4">
//       <div className="max-w-[371.62] overflow-hidden max-h-[280]">
//         <Image
//           src={"/public/image1.png"}
//           alt="header"
//           quality={100}
//           priority
//           width={600}
//           height={640}
//           className="flex max-w-[371.62] max-h-[280] shrink-0 hover:scale-125 transition-all object-cover hover:duration-1000 duration-300"
//         />
//       </div>
//       <div></div>
//     </article>
//   );
