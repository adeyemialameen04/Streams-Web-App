import Cross from "@/components/home/Cross";
import DownloadOurApp from "@/components/home/DownloadOurApp";
import Faqs from "@/components/home/Faqs";
import Header from "@/components/home/Header";
import PeopleInNeedCarousel from "@/components/home/PeopleInNeedCarousel";
import RocketSection from "@/components/home/RocketSection";
import Testimonials from "@/components/home/Testimonials";
import WaysToHelp from "@/components/home/WaysToHelp";
import WhatWeDo from "@/components/home/WhatWeDo";

export default function Home() {
  return (
    <div className="pt-7 flex flex-col gap-6">
      <Header />
      <RocketSection />
      <WhatWeDo />
      <PeopleInNeedCarousel title="People in Extreme Need" />
      <DownloadOurApp />
      <Cross />
      <PeopleInNeedCarousel title="Completed Campaigns" />
      <WaysToHelp />
      <Testimonials />
      <Faqs />
    </div>
  );
}
