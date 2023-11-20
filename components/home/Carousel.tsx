import AliceCarousel from "react-alice-carousel";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "react-alice-carousel/lib/alice-carousel.css";
import Link from "next/link";

type CarouselProps = {
  title: string;
  data: any[];
  component: React.ComponentType;
};

const Carousel = ({ title, data, component: Component }: CarouselProps) => {
  const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
  };

  const items: any = [];

  data.map((item, index) =>
    items.push(
      <div key={index}>
        <Component {...item} />
      </div>
    )
  );

  return (
    <div className="flex gap-6 flex-col">
      <div className="flex justify-between">
        <div>
          <h4 className="font-Poppins font-semibold md:font-bold text-[1.2rem] md:text-[2.2rem] md:leading-[40px] text-[#2A2738] dark:text-white">
            {title}
          </h4>
        </div>
      </div>
      <div className="mt-6 flex justify-center items-center w-full sm:gap-4">
        <AliceCarousel
          mouseTracking
          controlsStrategy="alternate"
          items={items}
          responsive={responsive}
          autoPlay
          autoPlayStrategy="default"
          infinite
          autoPlayInterval={2000}
          renderPrevButton={() => (
            <button className="alice-prev-btn border-black border h-[35px] dark:border-white  w-[35px] rounded-[50%] relative mr-1">
              <AiOutlineArrowLeft className="text-black dark:text-white text-[1.2rem] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
            </button>
          )}
          renderNextButton={() => (
            <button className="alice-next-btn border-black border h-[35px]  dark:border-white w-[35px] rounded-[50%] relative ml-1">
              <AiOutlineArrowRight className="text-black dark:text-white text-[1.2rem] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
            </button>
          )}
        />
      </div>
    </div>
  );
};

export default Carousel;
