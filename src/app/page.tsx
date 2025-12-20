import Image from "next/image";

import AboutUs from "@/components/AboutUs";
import CasesAll from "@/components/CasesAll";
import DiscussProject from "@/components/DiscussProject";
import Header from "@/components/Header";
import Percentages from "@/components/Percentages";
import Services from "@/components/Services";
import Stages from "@/components/Stages";

import p from '../../public/photo_2025-12-20_21-09-36.jpg'

export default function Home() {
  return (
    <>
      {/* <Header />
      <Percentages />
      <Stages />
      <AboutUs />
      <CasesAll />
      <Services />
      <DiscussProject /> */}
      <div className=''>
        ЛОГИНОВА ПРОТИВНАЯ
        <Image className="block mx-auto py-[100px]" src={p} alt='' width={1000} height={1000} draggable='false' />
      </div>
    </>
  );
}