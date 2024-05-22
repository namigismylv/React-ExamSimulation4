import React, { useContext } from "react";
import Cards from "../../Cards/Cards";
import "./CoursesSection.css";
import MainContext from "../../../../Context/Context";
const CoursesSection = ({ data }) => {
  const {input}=useContext(MainContext)
  return (
    <section id="courses">
      <div className="courses__div">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="courses__title">
                <h1>Popular Courses</h1>
              </div>
            </div>
          </div>
        </div>
        
        <Cards data={data} />
      </div>
    </section>
  );
};

export default CoursesSection;
