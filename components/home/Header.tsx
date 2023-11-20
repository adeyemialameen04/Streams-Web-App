import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { BsArrowUpRight } from "react-icons/bs";
import Image from "next/image";
import Rectangle17 from "/public/rectangle17.png";
import Rectangle18 from "/public/rectangle18.png";
import ArrowRight from "/public/arrow-right.svg";
import Hands from "/public/hands.png";
import OrangeBackground from "/public/orange-background.png";
import { Play } from "lucide-react";

const Header = () => {
  return (
    <section className="flex flex-col gap-9">
      {/* <div className="my_container"> */}
      <div className="flex my_container text-center max-w-[800px] flex-col gap-3 items-center">
        <h1 className="font-Poppins md:text-[2.5rem] text-[1.5rem] dark:text-white font-bold">
          Giving is the only true acquisition
        </h1>
        <p className="dark:text-white">
          A social fundraising platform optimized for your charity in easy
          steps. Join us today in giving back to improve the quality of learning
          in our schools, and support the academic needs of less-privileged
          students.
        </p>
      </div>
      <div className="my_container flex flex-col">
        <div className="self-center flex gap-3">
          <Button className="text-white bg-teal">Sponser Now</Button>
          <Button className="bg-[#F0EDED]">
            <Play color="black" className="mr-3" /> Watch video
          </Button>
        </div>
        <div
          className="header_grid gap-4"
          // style={{
          //   gridTemplateColumns: "1fr 2fr 1fr",
          //   alignItems: "end",
          // }}
        >
          {/* <div className="flex flex-row gap-4 justify-between"> */}
          <div className="flex flex-col gap-3 self-end">
            <Card className="bg-teal border-none pt-9 rounded-xl">
              <CardHeader>
                <CardTitle className="text-[3.0265rem] font-Roboto text-white font-bold">
                  65%
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white text-[0.875rem]">
                  17,000 people died, thousands injured, houses and buildings
                  destroyed. Lagos-ibadan grieves.
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center max-w-[300px] text-sm bg-cardLight text-white px-3 justify-between w-full rounded-3xl">
                  Donate now
                  {/* <Button>
                    <BsArrowUpRight className="text-white text-lg" />
                  </Button> */}
                  <Image src={ArrowRight} alt="" height={50} width={70} />
                </div>
              </CardFooter>
            </Card>
            <div className="bg-[#222] dark:bg-[#172729] px-5 py-7 flex gap-4 items-center rounded-xl">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 25.5C16 26.4093 16.3612 27.2814 17.0042 27.9244C17.6472 28.5674 18.5193 28.9286 19.4286 28.9286C20.3379 28.9286 21.21 28.5674 21.8529 27.9244C22.4959 27.2814 22.8571 26.4093 22.8571 25.5C22.8571 24.5907 22.4959 23.7186 21.8529 23.0756C21.21 22.4327 20.3379 22.0714 19.4286 22.0714C18.5193 22.0714 17.6472 22.4327 17.0042 23.0756C16.3612 23.7186 16 24.5907 16 25.5ZM41.1429 25.5C41.1429 26.4093 41.5041 27.2814 42.1471 27.9244C42.79 28.5674 43.6621 28.9286 44.5714 28.9286C45.4807 28.9286 46.3528 28.5674 46.9958 27.9244C47.6388 27.2814 48 26.4093 48 25.5C48 24.5907 47.6388 23.7186 46.9958 23.0756C46.3528 22.4327 45.4807 22.0714 44.5714 22.0714C43.6621 22.0714 42.79 22.4327 42.1471 23.0756C41.5041 23.7186 41.1429 24.5907 41.1429 25.5ZM32 0C14.3286 0 0 14.3286 0 32C0 49.6714 14.3286 64 32 64C49.6714 64 64 49.6714 64 32C64 14.3286 49.6714 0 32 0ZM50.7857 50.7857C48.3429 53.2286 45.5 55.1429 42.3357 56.4857C39.0714 57.8714 35.5929 58.5714 32 58.5714C28.4071 58.5714 24.9286 57.8714 21.6571 56.4857C18.4977 55.1514 15.6277 53.2155 13.2071 50.7857C10.7643 48.3429 8.85 45.5 7.50714 42.3357C6.12857 39.0714 5.42857 35.5929 5.42857 32C5.42857 28.4071 6.12857 24.9286 7.51429 21.6571C8.84863 18.4977 10.7845 15.6277 13.2143 13.2071C15.6571 10.7643 18.5 8.85 21.6643 7.50714C24.9286 6.12857 28.4071 5.42857 32 5.42857C35.5929 5.42857 39.0714 6.12857 42.3429 7.51429C45.5024 8.84863 48.3723 10.7845 50.7929 13.2143C53.2357 15.6571 55.15 18.5 56.4929 21.6643C57.8714 24.9286 58.5714 28.4071 58.5714 32C58.5714 35.5929 57.8714 39.0714 56.4857 42.3429C55.153 45.5011 53.2168 48.369 50.7857 50.7857ZM42.8571 33.5H39.4214C39.1214 33.5 38.8643 33.7286 38.8429 34.0286C38.5714 37.5643 35.6071 40.3571 32 40.3571C28.3929 40.3571 25.4214 37.5643 25.1571 34.0286C25.1357 33.7286 24.8786 33.5 24.5786 33.5H21.1429C21.0654 33.4999 20.9886 33.5156 20.9174 33.5461C20.8461 33.5765 20.7818 33.6212 20.7284 33.6773C20.6749 33.7335 20.6334 33.7999 20.6064 33.8725C20.5795 33.9452 20.5676 34.0226 20.5714 34.1C20.8857 40.1214 25.8929 44.9286 32 44.9286C38.1071 44.9286 43.1143 40.1214 43.4286 34.1C43.4324 34.0226 43.4205 33.9452 43.3936 33.8725C43.3666 33.7999 43.3251 33.7335 43.2717 33.6773C43.2182 33.6212 43.1539 33.5765 43.0826 33.5461C43.0114 33.5156 42.9347 33.4999 42.8571 33.5Z"
                  fill="white"
                />
              </svg>
              <p className="text-white text-[1.1rem] md:text-[1.5rem]">
                Let them be heard
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end md:flex-row gap-4 h-full">
            <div className="relative h-[300px] md:h-[360px] rounded-lg w-[100%] mix-blend-lighten overflow-hidden after:content-[''] after:bg-[rgba(0,0,0,0.4)] inset-0 after:w-full after:h-full isolate after:z-[-1] after:absolute z-10">
              <Image
                src={Rectangle18}
                alt="header"
                quality={100}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="h-[100%] w-[100%] rounded-lg object-cover z-[-3]"
              />
              <p className="absolute bottom-[5%] left-[3%] right-[3%] text-white text-[1rem] font-semibold">
                Natural disasters in urban & rural areas.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[360px] rounded-lg w-[100%] mix-blend-lighten overflow-hidden after:content-[''] after:bg-[rgba(0,0,0,0.4)] inset-0 after:w-full after:h-full isolate after:z-[-1] after:absolute z-10">
              <Image
                src={Rectangle17}
                alt="header"
                quality={100}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="h-[100%] w-[100%] rounded-lg object-cover z-[-3]"
              />
              <p className="absolute bottom-[5%] left-[3%] right-[3%] text-white text-[1rem] font-semibold">
                Sponsor food, water, to orphans in Nigeria
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 self-end">
            {/* <Card className="bg-teal pt-[3rem]">
              <CardHeader>
                <CardTitle>65%</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <Button className="flex items-center bg-cardLight py-6 w-full">
                  Donate now <BsArrowUpRight className="text-white text-lg" />
                </Button>
              </CardFooter>
            </Card> */}
            <div className="relative min-h-[330px] px-4 w-full">
              <Image
                src={OrangeBackground}
                className="h-full w-full"
                alt=""
                fill
              />
              <Image src={Hands} alt="" className="object-cover" fill />
              <div className="flex absolute max-w-[300px] bottom-5 items-center text-sm bg-cardLight text-white px-3 justify-between w-[90%] left-[5%] right-[5%]  rounded-3xl">
                Donate now
                <Image src={ArrowRight} alt="" height={50} width={70} />
              </div>
            </div>
            <div className="bg-[#392300] px-5 py-7 flex gap-4 items-center rounded-xl">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M61.5911 38.6312C60.8483 37.8811 59.9833 37.3663 59.0636 37.127C58.1439 36.8877 57.1945 36.9303 56.2895 37.2517L55.118 37.6072C61.0162 30.4179 63.9992 23.2926 63.9992 16.3558C63.9992 7.33895 58.4698 0.000317834 51.6712 0.000317834C49.7539 -0.0154373 47.8601 0.554747 46.1401 1.66565C44.4201 2.77656 42.9212 4.39762 41.7622 6.40029C40.6032 4.39762 39.1043 2.77656 37.3843 1.66565C35.6643 0.554747 33.7705 -0.0154373 31.8532 0.000317834C25.0546 0.000317834 19.5252 7.33895 19.5252 16.3558C19.5252 20.402 20.5096 24.3522 22.5869 28.5726C20.8841 28.9169 19.3103 29.9674 18.0961 31.5699L11.8019 39.8223H3.79657C2.78965 39.8223 1.82398 40.3468 1.11199 41.2803C0.399994 42.2138 0 43.4799 0 44.8001V59.0222C0 60.3424 0.399994 61.6085 1.11199 62.542C1.82398 63.4756 2.78965 64 3.79657 64H31.9996C32.1331 64 32.2661 63.9785 32.3955 63.936L49.7513 58.2471C49.8334 58.2186 49.914 58.1829 49.9926 58.1405L60.52 52.2667L60.6095 52.2134C61.5402 51.6039 62.3374 50.6938 62.9258 49.5688C63.5142 48.4438 63.8744 47.141 63.9726 45.7829C64.0708 44.4249 63.9038 43.0565 63.4871 41.8065C63.0705 40.5566 62.418 39.4663 61.5911 38.6383V38.6312ZM31.8532 4.26696C33.6426 4.23566 35.3985 4.90511 36.8961 6.18964C38.3937 7.47417 39.5649 9.31536 40.2599 11.4776C40.3825 11.8689 40.591 12.2035 40.859 12.4391C41.127 12.6746 41.4423 12.8003 41.7649 12.8003C42.0876 12.8003 42.4029 12.6746 42.6709 12.4391C42.9389 12.2035 43.1474 11.8689 43.27 11.4776C43.965 9.31536 45.1362 7.47417 46.6338 6.18964C48.1314 4.90511 49.8872 4.23566 51.6767 4.26696C56.5905 4.26696 60.745 9.80293 60.745 16.3558C60.745 23.5522 56.3573 31.6446 48.0537 39.7335L44.0212 40.9494C44.4233 39.5505 44.5607 38.0445 44.4215 36.5606C44.2823 35.0767 43.8707 33.6592 43.222 32.4297C42.5733 31.2002 41.7068 30.1953 40.6968 29.5012C39.6869 28.8071 38.5636 28.4446 37.4233 28.4446H26.4865C23.9617 24.0606 22.7794 20.1993 22.7794 16.3558C22.7794 9.80293 26.9339 4.26696 31.8532 4.26696ZM3.2542 59.0222V44.8001C3.2542 44.6115 3.31134 44.4306 3.41305 44.2973C3.51477 44.1639 3.65272 44.089 3.79657 44.089H10.8473V59.7334H3.79657C3.65272 59.7334 3.51477 59.6584 3.41305 59.5251C3.31134 59.3917 3.2542 59.2108 3.2542 59.0222ZM59.1939 48.3556L48.8347 54.1405L31.7989 59.7334H14.1015V42.841L20.3957 34.585C20.848 33.9889 21.386 33.5163 21.9786 33.1947C22.5712 32.873 23.2065 32.7087 23.8479 32.7113H37.4233C38.4302 32.7113 39.3959 33.2357 40.1079 34.1692C40.8199 35.1027 41.2198 36.3688 41.2198 37.689C41.2198 39.0092 40.8199 40.2753 40.1079 41.2088C39.3959 42.1423 38.4302 42.6668 37.4233 42.6668H29.8302C29.3986 42.6668 28.9848 42.8915 28.6796 43.2916C28.3745 43.6917 28.2031 44.2343 28.2031 44.8001C28.2031 45.3659 28.3745 45.9085 28.6796 46.3086C28.9848 46.7087 29.3986 46.9334 29.8302 46.9334H38.508C38.6303 46.9336 38.7522 46.9157 38.8714 46.8801L57.0407 41.401L57.1058 41.3797C57.7896 41.1352 58.5182 41.2307 59.1517 41.6477C59.7851 42.0647 60.2787 42.7738 60.5377 43.639C60.7966 44.5041 60.8027 45.4641 60.5546 46.3347C60.3066 47.2053 59.822 47.925 59.1939 48.3556Z"
                  fill="#F09223"
                />
              </svg>
              <p className="text-[#F09223] text-[1.1rem] md:text-[1.5rem]">
                Your home for help
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Header;
