import React,{useState} from "react";
import style from "../totalStyling.module.css";

function Contact() {
  const initialFormState = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [formData, setFormData] = React.useState(initialFormState);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReset = (e) => {
    setFormData(initialFormState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending Mail...");
    console.log("Form submitted:", formData);
    try {
      const response = await fetch("https://msam24.vercel.app/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Mail sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Failed to send message");
      }
    } catch (error) {
      setStatus("Error sending message. Please try again later.");
      console.error(error);
    }
  };

  return (
    <>
      <div className="contact-me-secondary">
        <section
          className={`${style.section} ${style.contactMeSecondary} ${style.sectionSecondary}`}
        >
          <div>
            <div
              className={`${style.bannerHeadingSecondary} ${style.bannerHeadingSecondary1}`}
            >
              <span>Contact Me</span>
            </div>
            <p>
              Whether you have a question, an opportunity, or just want to say
              hello, feel free to get in touch!
            </p>

            <form
              onSubmit={handleSubmit}
              role="form"
              className={style.contactEmailForm}
              autoComplete="off"
            >
              <div className="row">
                <div className={`${style.formGroup} ${style.colMd6}`}>
                  <label htmlFor="name"></label>
                  <input
                    type="text"
                    name="name"
                    className={style.formControl}
                    id="name"
                    placeholder="Name"
                    required
                    autoComplete="off"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className={`${style.formGroup} ${style.colMd6}`}>
                  <label htmlFor="email"></label>
                  <input
                    type="email"
                    className={style.formControl}
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                    autoComplete="off"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={style.formGroup}>
                <label htmlFor="subject"></label>
                <input
                  type="text"
                  className={style.formControl}
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className={style.formGroup}>
                <label htmlFor="message"></label>
                <textarea
                  className={style.formControl}
                  name="message"
                  rows="8"
                  id="message"
                  placeholder="Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className={style.textCenter}>
                <button type="submit">Send Message</button>
                <button type="button" onClick={handleReset}>
                  Reset
                </button>
              </div>
            </form>
            {status && <p>{status}</p>}
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
