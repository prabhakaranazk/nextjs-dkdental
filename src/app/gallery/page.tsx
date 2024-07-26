import Gallery from "@/components/Gallery";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "This is Gallery",
  // other metadata
};

const Blog = () => {
  return (
    <section className="pb-[120px] pt-[120px]">
      <Gallery/>
    </section>
  );
};

export default Blog;
