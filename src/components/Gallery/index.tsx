import SectionTitle from "../Common/SectionTitle";
import blogData from "./blogData";
import SingleBlog from "./SingleBlog";

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-100"
    >
      <div className="container">
        <SectionTitle
          title="Gallery"
          paragraph="Sub Title"
          center
          width="800px"
          mb="30px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
