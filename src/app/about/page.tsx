import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About DK Dental",
  description: "",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Welcome to DK Dental Clinic"
        description="At DK Dental Clinic, our mission is to provide exceptional dental care with a focus on personalized treatment and comfort. Founded on the principles of integrity, excellence, and compassion, our clinic is dedicated to creating beautiful smiles and promoting optimal oral health for patients of all ages."
        paddingTop={150}
      />
      <Breadcrumb
        pageName="Our Story"
        description="DK Dental Clinic was established with a vision to offer a welcoming environment where patients receive not only the highest quality dental care but also a caring and supportive experience. Our team of dedicated professionals combines advanced dental technology with years of expertise to ensure that each patient’s needs are met with precision and empathy."
        paddingTop={50}
      />
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
    </>
  );
};

export default AboutPage;
