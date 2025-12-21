import AboutUs from "@/components/AboutUs";
import CasesAll from "@/components/CasesAll";
import DiscussProject from "@/components/DiscussProject";
import Header from "@/components/Header";
import Percentages from "@/components/Percentages";
import Services from "@/components/Services";
import Stages from "@/components/Stages";

export default function Home() {
  return (
    <>
      <Header />
      {/* <Percentages />
      <Stages />
      <AboutUs />
      
      <Services />
      <DiscussProject /> */}
      <CasesAll />
    </>
  );
}