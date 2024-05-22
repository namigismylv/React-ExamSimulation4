import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import CoursesSection from "../../../Components/Site/Sections/CoursesSection/CoursesSection";
import MainContext from "../../../Context/Context";
import Carousel from "../../../Components/Site/Sections/Carousel/Carousel";
const Home = () => {
  const { data, input } = useContext(MainContext);
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <main>
        <Carousel />
        <CoursesSection
          data={data.filter((x) =>
            x.title.toLowerCase().includes(input.toLowerCase())
          )}
        />
      </main>
    </>
  );
};

export default Home;
