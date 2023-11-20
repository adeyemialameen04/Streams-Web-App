import Image from "next/image";
import Logo from "/public/streams foundation white.png";
import ArrowRight from "/public/arrow-right.svg";

const Footer = () => {
  return (
    <div className="pt-24">
      <footer className="px-4 bg-teal flex flex-col gap-10 py-6 rounded-xl my_container">
        <div
          className="gap-4 justify-between border-b-[1px] pb-6 px-5 border-[#11CBE96E]"
          style={{
            //   display: "grid",
            //   gridTemplateColumns: "repeat(auto-fit, minmax(12rem,1fr))",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <div>
            <Image src={Logo} alt="" height={150} width={150} />
            <p className="text-[1.05rem] text-white">
              Great futures built with small charity
            </p>
          </div>
          <div className="flex gap-5 text-white flex-col">
            <h4 className="text-[1.125rem] font-semibold">Home</h4>
            <p>How it works</p>
            <p>About Us</p>
          </div>
          <div className="flex gap-5 text-white flex-col">
            <h4 className="text-[1.125rem] font-semibold">Contact</h4>
            <p>+234 856 7004 5345</p>
            <p>Streams@gmail.com</p>
          </div>
          <div className="flex gap-5 text-white flex-col">
            <h4 className="text-[1.125rem] font-semibold">Socials</h4>
            <p>Twitter</p>
            <p>Instagram</p>
            <p>LinkedIn</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-white">
            2023 copyright. Streams Foundation.
          </p>
          <div className="flex items-center text-sm bg-cardLight text-white pl-3 justify-between w-[200px] rounded-3xl">
            Donate now
            <Image src={ArrowRight} alt="" height={50} width={70} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
