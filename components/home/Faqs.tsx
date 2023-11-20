import React from "react";
import Faq from "./Faq";
import { FAQS } from "@/data";

const Faqs = () => {
  return (
    <section className="my_container bg-[#1382941A] rounded-xl py-20 flex flex-col gap-16">
      <div className="self-center text-center">
        <h4 className="text-[1.5rem] md:text-[1.8rem] dark:text-white">
          Frequently asked questions
        </h4>
        <p className="font-medium text-sm md:text-lg dark:text-white">
          Got another question? Email us at StreamsFoundation@gmail.com
        </p>
      </div>
      <div className="px-4 md:px-20">
        {FAQS.map((faq, index) => (
          <Faq key={index} question={faq.ques} answer={faq.ans} />
        ))}
      </div>
    </section>
  );
};

export default Faqs;
