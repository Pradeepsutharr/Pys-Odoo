import React, { useEffect, useState } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import Image from "next/image";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [inputErr, setInputErr] = useState(false);
  const [showCapcha, setShowCapcha] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCaptchaChange = (value) => {
    if (value) {
      setCaptchaVerified(true);
    }
  };

  useEffect(() => {
    const allFilled = Object.values(formData).every((val) => val.trim() !== "");
    setShowCapcha(allFilled);
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const allFilled = Object.values(formData).every((val) => val.trim() !== "");
    setInputErr(!allFilled);

    if (!allFilled) {
      setStatus("error");
      return;
    }

    if (!captchaVerified) {
      setStatus("error");
      alert("Please complete the CAPTCHA verification.");
      return;
    }

    setStatus("loading");

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/contact/pysquad/`,
        formData
      );
      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
      setCaptchaVerified(false);
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus("error");
    }
  };

  return (
    <section className="py-20">
      <div className="container">
        <div className="col-12 flex flex-col md:flex-row items-center bg-primary text-white p-6 rounded-2xl">
          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-sm text-yellow-300 capitalize font-regular rounded-full inline-block">
              Get in Touch
            </h3>
            <h2 className="text-3xl font-bold mb-6">
              We’d love to hear from you – let’s talk.
            </h2>
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-2">
                <div className="col-12 md:col-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="flex p-3 rounded-lg text-black w-full"
                  />
                  <span
                    className={`${inputErr ? "block" : "hidden"} text-red-500`}
                  >
                    Name is required
                  </span>
                </div>

                <div className="col-12 md:col-6">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="flex p-3 rounded-lg text-black w-full"
                  />
                  <span
                    className={`${inputErr ? "block" : "hidden"} text-red-500`}
                  >
                    Phone is required
                  </span>
                </div>
              </div>

              <div className="col-12">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-3 rounded-lg text-black w-full"
                />
                <span
                  className={`${inputErr ? "block" : "hidden"} text-red-500`}
                >
                  Email is required
                </span>
              </div>

              <div className="col-12">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="p-3 h-32 rounded-lg text-black w-full"
                ></textarea>
                <span
                  className={`${inputErr ? "block" : "hidden"} text-red-500`}
                >
                  Message is required
                </span>
              </div>

              <ReCAPTCHA
                className={`${showCapcha ? "block" : "hidden"}`}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={handleCaptchaChange}
              />

              <button
                type="submit"
                className="bg-yellow-300 text-black py-3 px-6 rounded-lg font-bold w-full self-center"
              >
                {status === "loading" ? "Sending..." : "Submit Now"}
              </button>

              {status === "success" && (
                <p className="text-white text-center">
                  Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-300 text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>

          <div className="w-full md:w-1/2 p-4">
            <Image
              src="/images/contact_us.png"
              alt="Contact"
              width={500}
              height={500}
              loading="lazy"
              className="rounded-2xl lg:ms-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
