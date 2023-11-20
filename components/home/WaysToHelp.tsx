import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import GridContainer from "../GridContainer";
import Image from "next/image";
import Rectangle1 from "/public/image 28.png";
import Rectangle2 from "/public/image 29.png";

const WaysToHelp = () => {
  return (
    <div className="mt-14 flex flex-col">
      <div className="self-center text-center">
        <h4 className="text-[1.5rem] md:text-[1.8rem] dark:text-white">
          Ways to Help
        </h4>
        <p className="font-medium text-sm md:text-lg dark:text-white">
          This goal is ambitious, but we know it&apos;s achievable with your
          help. Here&apos;s how you can take action today
        </p>
      </div>
      <div>
        <GridContainer className="gap-8 w-[100%] max-w-none">
          <div className="flex flex-col md:place-self-center gap-4 mb-4 text-center md:text-left">
            <h4 className="font-Raleway font-semibold dark:text-white md:font-bold text-[1.2rem] md:text-[2rem] md:leading-[40px] text-[#2A2738]">
              Make a monthly Donation
            </h4>
            <p className="font-Inter text-[#403F3F] dark:text-[#D3D3D3]">
              Lorem ipsum dolor sit amet consectetur. Eu tincidunt sapien
              bibendum aenean lectus aenean egestas aliquet fringilla. Enim
              facilisi a elementum mauris bibendum. Pharetra consectetur amet
              laoreet luctus lacinia.
            </p>
          </div>
          <span className="place-self-center bg-[#D0F8FF6E] dark:bg-[#172C2E] md:place-self-end max-h-full max-w-full">
            <Image
              src={Rectangle1}
              alt="header"
              quality={100}
              priority
              width={600}
              height={640}
              className="flex object-cover shrink-0"
            />
          </span>
        </GridContainer>
        <GridContainer className="gap-6 w-[100%] max-w-none">
          <span className="place-self-center order-2 md:order-1 bg-[#D0F8FF6E] dark:bg-[#172C2E] max-h-full max-w-full">
            <Image
              src={Rectangle2}
              alt="header"
              quality={100}
              priority
              width={600}
              height={640}
              className="flex object-cover shrink-0"
            />
          </span>
          <div className="flex flex-col md:place-self-center md:order-2 gap-4 mb-4 text-center md:text-left">
            <h4 className="font-Raleway font-semibold dark:text-white md:font-bold text-[1.2rem] md:text-[2rem] md:leading-[40px] text-[#2A2738]">
              Sponsor a school project
            </h4>
            <p className="font-Inter text-[#403F3F] dark:text-[#D3D3D3]">
              Lorem ipsum dolor sit amet consectetur. Pretium cras a nunc
              faucibus. Urna egestas dolor massa viverra enim. Sociis velit vel
              amet cursus in.
            </p>
          </div>
        </GridContainer>
      </div>
      <Button
        asChild
        className="bg-teal self-center text-white hover:bg-teal rounded-lg"
      >
        <Link href={"/helper"}>Become a Helper</Link>
      </Button>
    </div>
  );
};

export default WaysToHelp;
