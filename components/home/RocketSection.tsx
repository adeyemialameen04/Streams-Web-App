import Image from "next/image";
import RocketImg from "/public/rocket.png";
import GridContainer from "../GridContainer";

const RocketSection = () => {
  return (
    // <section className="mt-9">
    //   <div className="my_container grid grid-cols-1 place-items-center md:grid-cols-2 gap-4 pr-[1rem] sm:pr-[2rem]">
    //     <span className="w-full place-self-center">
    //       <Image
    //         src={RocketImg}
    //         alt="header"
    //         quality={100}
    //         priority
    //         width={600}
    //         height={640}
    //         className="flex max-h-[500px] object-cover shrink-0 h-full"
    //       />
    //     </span>
    // <div className="bg-[#1382940D] place-self-center w-full after:content-[''] after:absolute after:h-full after:w-full after:max-w-[100%] after:border-dashed after:border-[2px] after:rounded-lg after:border-[#138294] after:left-[4%] after:top-[-7%] relative flex flex-col justify-between gap-5 max-h-[570px] py-14 rounded-lg  pl-6 pr-3 md:pl-14 md:pr-10">
    //   <div className="flex gap-3 flex-col sm:flex-row justify-between">
    //     <span className="flex flex-col items-center gap-3">
    //       <p className="font-medium text-[1.1rem] md:text-[1.5rem]">475K</p>
    //       <small className="text-[0.9rem] md:text-[1.05rem] font-medium">
    //         Registered Helpers
    //       </small>
    //     </span>
    //     <span className="flex flex-col items-center gap-3">
    //       <p className="font-medium text-[1.1rem] md:text-[1.5rem]">105K</p>
    //       <small className="text-[0.9rem] md:text-[1.05rem] font-medium">
    //         Projects funded
    //       </small>
    //     </span>
    //   </div>
    //   <div className="self-center">
    //     <span className="flex flex-col items-center gap-3">
    //       <p className="font-medium text-[1.1rem] md:text-[1.5rem]">200K</p>
    //       <small className="text-[0.9rem] md:text-[1.05rem] font-medium">
    //         Monthly visitors
    //       </small>
    //     </span>
    //   </div>
    // </div>
    //   </div>
    // </section>
    <GridContainer className="gap-6 max-w-none pr-4 sm:pr-8">
      <span className="place-self-center max-h-[626px] max-w-[626px] md:place-self-start">
        <Image
          src={RocketImg}
          alt="header"
          quality={100}
          priority
          width={600}
          height={640}
          className="flex aspect-square shrink-0"
        />
      </span>
      <div className="bg-[#1382940D] place-self-center w-full after:content-[''] after:absolute after:h-full after:w-full after:max-w-[100%] after:border-dashed after:border-[2px] after:rounded-lg after:border-[#138294] after:left-[4%] after:top-[-7%] relative flex flex-col justify-between gap-5 max-h-[570px] py-14 rounded-lg  pl-6 pr-3 md:pl-14 md:pr-10">
        <div className="flex gap-3 flex-col sm:flex-row justify-between">
          <span className="flex flex-col items-center gap-3">
            <p className="font-medium text-[1.1rem] text-black dark:text-white md:text-[1.5rem]">
              475K
            </p>
            <small className="text-[0.9rem] md:text-[1.05rem] font-medium text-black dark:text-white">
              Registered Helpers
            </small>
          </span>
          <span className="flex flex-col items-center gap-3">
            <p className="font-medium text-[1.1rem] text-black dark:text-white md:text-[1.5rem]">
              105K
            </p>
            <small className="text-[0.9rem] md:text-[1.05rem] font-medium text-black dark:text-white">
              Projects funded
            </small>
          </span>
        </div>
        <div className="self-center">
          <span className="flex flex-col items-center gap-3">
            <p className="font-medium text-[1.1rem] text-black dark:text-white md:text-[1.5rem]">
              200K
            </p>
            <small className="text-[0.9rem] md:text-[1.05rem] font-medium text-black dark:text-white">
              Monthly visitors
            </small>
          </span>
        </div>
      </div>
    </GridContainer>
  );
};

export default RocketSection;
