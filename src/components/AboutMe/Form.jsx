import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import "./ContactForm.css"; // Import styles

export const Form = () => {
 // Formik setup
 const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      project: "",
      interest: "",
      details: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      project: Yup.string().required("Project is required"),
      interest: Yup.string().required("Interest is required"),
      details: Yup.string(),
    }),
    onSubmit: (values, { resetForm }) => {
      emailjs
        .send(
          "service_o8x15dl",
          "template_ekkdtfs",
          values,
          "jmU1_4Zc08CyF9Kqp"
        )
        .then(
          () => {
            alert("Message sent successfully!");
            resetForm(); // Reset form after submission
          },
          (error) => {
            console.log("FAILED...", error);
            alert("Something went wrong. Please try again.");
          }
        );
    },
  });

  return (
    <form className="contact-form" onSubmit={formik.handleSubmit}>

      {/* Name Input */}
      <label>Name</label>
      <input
        type="text"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {formik.errors.name && <p className="error">{formik.errors.name}</p>}

      {/* Email Input */}
      <label>Email</label>
      <input
        type="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email && <p className="error">{formik.errors.email}</p>}

      {/* Project Input */}
      <label>Project</label>
      <input
        type="text"
        name="project"
        onChange={formik.handleChange}
        value={formik.values.project}
      />
      {formik.errors.project && <p className="error">{formik.errors.project}</p>}

      {/* Interest Input */}
      <label>Interest</label>
      <input
        type="text"
        name="interest"
        onChange={formik.handleChange}
        value={formik.values.interest}
      />
      {formik.errors.interest && <p className="error">{formik.errors.interest}</p>}

      {/* Additional Details */}
      <label>Additional Details</label>
      <textarea
        name="details"
        rows="4"
        onChange={formik.handleChange}
        value={formik.values.details}
      ></textarea>

      {/* Submit Button */}
      <button type="submit">Send</button>
    </form>
  );
}
