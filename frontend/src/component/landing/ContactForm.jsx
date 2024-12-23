


import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    emailjs
      .send(
        "service_jp85nxb", // Replace with your EmailJS service ID
        "template_0i5pp5w", // Replace with your EmailJS template ID
        values,
        "XY-8TZBBeY1NAky7s" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          resetForm();
        },
        (error) => {
          alert("An error occurred, please try again.");
        }
      );
  };

  return (
    <div
      className="relative h-screen bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url('https://cars.tatamotors.com/content/dam/tml/pv/products/lifestyle-images/safari-product-lifestyle-resized.jpg')`, // Replace with your static image URL
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Form Section */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="bg-white rounded-lg shadow-lg px-12 py-8 max-w-lg w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Contact Us
          </h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="space-y-4 ">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold">
                    Name
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="Your Name"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold">
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="Your Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold">
                    Message
                  </label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="Your Message"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-700 to-black text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:from-black hover:to-blue-600 transition-all"
                >
                  Send Message
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
