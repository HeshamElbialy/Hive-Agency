import React, { useRef, useState } from "react";
import { ImMobile } from "react-icons/im";
import { PiPencil } from "react-icons/pi";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "./style.css";

const isValidName = (name) => name.trim() !== "";
const isValidPhone = (phone) => phone.trim() !== "";
const isValidEmail = (email) =>
  email.trim() !== "" &&
  /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
const isValidTopic = (topic) => topic.trim() !== "";
const isValidMessage = (message) => message.trim() !== "";

const ContactInfo = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [topicError, setTopicError] = useState("");
  const [messageError, setMessageError] = useState("");

  const form = useRef();

  const submit = async (e) => {
    e.preventDefault();

    const nameIsValid = isValidName(name);
    const phoneIsValid = isValidPhone(phone);
    const emailIsValid = isValidEmail(email);
    const topicIsValid = isValidTopic(topic);
    const messageIsValid = isValidMessage(message);

    setNameError(nameIsValid ? "" : "Name is required.");
    setPhoneError(phoneIsValid ? "" : "Phone number is required.");
    setEmailError(emailIsValid ? "" : "Email is required.");
    setTopicError(topicIsValid ? "" : "Topic Is Required.");
    setMessageError(messageIsValid ? "" : "Message Is Required.");

    if (
      nameIsValid &&
      phoneIsValid &&
      emailIsValid &&
      topicIsValid &&
      messageIsValid
    ) {
      emailjs
        .sendForm("service_hmii839", "template_pmorzvq", form.current, {
          publicKey: "iZ4Nyz4BPL0K1UJgp",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            toast.success("Your Message is successfully sent.", {
              position: "bottom-right",
              zIndex: "999999",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });

            // Reset form fields
            setName("");
            setEmail("");
            setPhone("");
            setTopic("");
            setMessage("");
          },
          (error) => {
            console.log("FAILED...", error);
            toast.error("Something went wrong. Please try again later.", {
              position: "bottom-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        );
    }
  };

  return (
    <section className="cards" id="contact">
      <div className="cards-container container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="box-holder d-flex align-items-center">
              <div className="icon-box">
                <ImMobile />
              </div>
              <div className="info-box">
                <h2>Call Us</h2>
                <p>
                  {" "}
                  <span>Support:</span> +20 103 082 4036
                </p>
              </div>
            </div>
            <div className="box-holder box-holder-2 d-flex align-items-center">
              <div className="icon-box">
                <PiPencil />
              </div>
              <div className="info-box">
                <h2>Contact Us</h2>
                <p>info@hiveagency.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <form ref={form} onSubmit={submit} className="form">
              <div className="div d-flex ">
                <div>
                  <input
                    name="user_name"
                    type="text"
                    placeholder="Your Name"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {nameError && <p className="text-danger">{nameError}</p>}
                </div>
                <div>
                  <input
                    name="email"
                    type="text"
                    placeholder="Your Email"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="600"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {emailError && <p className="text-danger">{emailError}</p>}
                </div>
              </div>
              <div className="div d-flex ">
                <div>
                  <input
                    name="phone"
                    type="text"
                    placeholder="Phone Number"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  {phoneError && <p className="text-danger">{phoneError}</p>}
                </div>
                <div>
                  <input
                    name="topic"
                    type="text"
                    placeholder="Topic"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="600"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                  />
                  {topicError && <p className="text-danger">{topicError}</p>}
                </div>
              </div>
              <div className="textarea">
                <textarea
                  name="message"
                  type="text"
                  placeholder="Message"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="800"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                {messageError && <p className="text-danger">{messageError}</p>}
              </div>
              <div className="button">
                <button className="lg-btn" type="submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
