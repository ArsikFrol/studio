import AboutUs from "@/components/AboutUs";
import Cases from "@/components/Cases";
import DiscussProject from "@/components/DiscussProject";
import Header from "@/components/Header";
import Percentages from "@/components/Percentages";
import Services from "@/components/Services";
import Stages from "@/components/Stages";

import cases from '../../public/case.png'

const listCases = [
  { id: 1, image: cases },
  { id: 2, image: cases },
  { id: 3, image: cases },
  { id: 4, image: cases },
  { id: 5, image: cases },
  { id: 6, image: cases },
  { id: 7, image: cases }
]

export default function Home() {
  return (
    <>
      <Header />
      <Percentages />
      <Stages />
      <AboutUs />
      <Cases listCases={listCases} showCount={6} />
      <Services />
      <DiscussProject />
    </>
  );
}