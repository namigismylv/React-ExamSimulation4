import React, { useContext } from "react";
import { Formik } from "formik";
import { Helmet } from "react-helmet";
import MainContext from "../../../Context/Context";
import axios from "axios";
import './Add.css'
const Add = () => {
  const { data,setData } = useContext(MainContext)
  return (
    <>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <div className="formik">
      <h1>Anywhere in your app!</h1>
      <Formik
        initialValues={{
          image: "",
          title: "",
          desc: "",
          author: "",
          authorImage: "",
          price:""
        }}
        onSubmit={(values, { setSubmitting }) => {
          axios
            .post("http://localhost:2000/courses", { ...values })
            .then((res) => {
              setData(res.data)
            });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="image"
              placeholder="Image"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.image}
            />
            {errors.image && touched.image && errors.image}
            <input
              type="text"
              name="title"
              placeholder="Title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            {errors.title && touched.title && errors.title}
            <input
              type="text"
              name="desc"
              placeholder="Description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.desc}
            />
            {errors.desc && touched.desc && errors.desc}
            <input
              type="text"
              name="author"
              placeholder="Author"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.author}
            />
            {errors.author && touched.author && errors.author}
            <input
              type="text"
              name="authorImage"
              placeholder="Author Image"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.authorImage}
            />
            {errors.authorImage && touched.authorImage && errors.authorImage}
            <input
              type="number"
              name="price"
              placeholder="price"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
            />
            {errors.price && touched.price && errors.price}
            <button type="submit" onClick={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
      </div>
    </>
  );
};

export default Add;
