"use client";
import { FAQS_TYPES } from "@/@types";
import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Faq = ({ question, answer }: FAQS_TYPES) => {
  const [isAnswer, setIsAnswer] = useState(false);

  return (
    <article className="flex flex-col border-b-[1px] border-[#00000036] dark:border-[#FFFFFF36] py-4 gap-2">
      <div
        onClick={() => setIsAnswer((prev) => !prev)}
        className="flex justify-between gap-3"
      >
        <p className="text-teal text-[1rem] sm:text-[1.2rem] dark:text-[#1BBBD4]">
          {question}
        </p>
        <button className="alice-prev-btn border-black dark:border-white border h-[25px] w-[25px] rounded-[50%] relative mr-1">
          <AiOutlineArrowRight className="text-black dark:text-white text-[1rem] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
        </button>
      </div>
      <>{isAnswer && <p className="text-sm dark:text-white">{answer}</p>}</>
    </article>
  );
};

export default Faq;
