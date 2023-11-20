import React from "react";
import GridContainer from "../GridContainer";
import { TESTIMONIAL_IMAGES } from "@/data";
import Image from "next/image";
import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <div className="mt-14">
      <p className="text-center text-[2.8rem] font-bold dark:text-white">
        Testimonials
      </p>
      <GridContainer className="max-w-none gap-9">
        <div className="flex gap-14 flex-col">
          <p className="leading-10 text-[1.3rem] dark:text-white">
            “"This platform is a Godsend! It's a portal for volunteers to
            connect with people in need. My family has been in critical health
            condition for almost a year but this platform made it so easy for me
            and connected me with people willing to help, as i am not so stable
            financially."
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-teal text-[1.3rem]">Mariam. C</p>
            <span className="flex gap-2">
              <Star color="#F1B10D" />
              <Star color="#F1B10D" />
              <Star color="#F1B10D" />
              <Star color="#F1B10D" />
              <Star color="#F1B10D" />
            </span>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "0.5rem",
          }}
          className="hidden md:grid"
        >
          {TESTIMONIAL_IMAGES.map((testimonial, index) => (
            <Image
              src={testimonial.path}
              key={index}
              alt=""
              height={50}
              width={200}
              className="object-cover max-h-[130px] rounded-lg"
            />
          ))}
        </div>
      </GridContainer>
    </div>
  );
};

export default Testimonials;
