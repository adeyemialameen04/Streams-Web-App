import Image from "next/image";
import Person1 from "../../public/person1.png";
import Person2 from "../../public/person2.png";
import Person3 from "../../public/person3.png";
import Person4 from "../../public/person4.png";
import { Button } from "../ui/button";
import Link from "next/link";

const DownloadOurApp = () => {
  return (
    <div className="my_container flex-col flex gap-4 pt-20">
      <div className="text-center text-[1.1rem] md:text-[2rem] max-w-[650px] self-center dark:text-white">
        Download our app and join our community for donating and be part of a
        positive change in the world. With over;
      </div>
      <div className="flex self-center md:self-stretch justify-between">
        <Image
          src={Person4}
          alt=""
          height={20}
          className="object-cover max-h-[220px] max-w-[240px] rounded-xl hidden md:inline-block"
          width={264}
        />
        <p className="md:text-[5rem] text-[3rem] self-center dark:text-white">
          70,545+
        </p>
        <Image
          src={Person3}
          alt=""
          height={20}
          className="object-cover max-h-[140px] max-w-[120px] rounded-xl hidden md:inline-block"
          width={264}
        />
      </div>
      <div className="self-center flex flex-col gap-4">
        <p className="dark:text-white">People already joining</p>
        <Button
          asChild
          className="bg-teal self-center text-white hover:bg-teal rounded-lg"
        >
          <Link href={"/helper"}>Yes download and join</Link>
        </Button>
      </div>
      <div className="pr-7 flex justify-between pl-20">
        <Image
          src={Person1}
          alt=""
          height={30}
          width={200}
          className="object-cover max-h-[140px] max-w-[120px] rounded-xl hidden md:inline-block"
        />
        <Image
          src={Person2}
          alt=""
          height={20}
          className="object-cover max-h-[220px] max-w-[240px] rounded-xl hidden md:inline-block"
          width={264}
        />
      </div>
    </div>
  );
};

export default DownloadOurApp;
