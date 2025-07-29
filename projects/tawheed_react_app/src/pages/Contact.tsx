import { useState } from "react";
import { toast } from "react-toastify";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiSend,
  FiCheck,
  FiX,
} from "react-icons/fi";
import { assets } from "../assets";
import styles from "../styles/pages/Contact.module.scss";

const Contact = () => {
  const { contact: contactAssets, contactContent } = assets;

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      toast.error("Please fill in all required fields", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        icon: <FiX />,
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        icon: <FiX />,
      });
      return;
    }

    setIsSubmitting(true);

    // Show loading toast
    const loadingToastId = toast.loading("Sending your message...", {
      position: "top-right",
    });

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Success
      toast.dismiss(loadingToastId);
      toast.success(
        <>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <FiCheck size={20} />
            <div>
              <strong>Message Sent Successfully!</strong>
              <br />
              <span style={{ fontSize: "14px", opacity: 0.9 }}>
                Thank you for contacting us. We'll get back to you within 24
                hours.
              </span>
            </div>
          </div>
        </>,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.dismiss(loadingToastId);
      toast.error("Failed to send message. Please try again later.", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        icon: <FiX />,
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.contact}>
      {/* Banner Section */}
      <section className={styles.banner}>
        <div
          className={styles.bannerBackground}
          style={{ backgroundImage: `url(${contactAssets.banner})` }}
        >
          <div className={styles.bannerOverlay}>
            <div className="container">
              <div className={styles.bannerContent}>
                <h1 className={styles.bannerTitle}>
                  {contactContent.banner.title}
                </h1>
                <p className={styles.bannerSubtitle}>
                  {contactContent.banner.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className={styles.mainSection}>
        <div className="container">
          <div className={styles.contentGrid}>
            {/* Contact Form - Left Side */}
            <div className={styles.formSection}>
              <div className={styles.formHeader}>
                <h2 className={styles.formTitle}>
                  {contactContent.form.title}
                </h2>
                <p className={styles.formSubtitle}>
                  {contactContent.form.subtitle}
                </p>
              </div>

              <form className={styles.contactForm} onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>
                    {contactContent.form.fields.name.label} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={contactContent.form.fields.name.placeholder}
                    className={styles.formInput}
                    disabled={isSubmitting}
                    required
                  />
                </div>

                {/* Email Field */}
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>
                    {contactContent.form.fields.email.label} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={contactContent.form.fields.email.placeholder}
                    className={styles.formInput}
                    disabled={isSubmitting}
                    required
                  />
                </div>

                {/* Message Field */}
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>
                    {contactContent.form.fields.message.label} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={contactContent.form.fields.message.placeholder}
                    className={styles.formTextarea}
                    rows={6}
                    disabled={isSubmitting}
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className={styles.spinner} />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FiSend />
                      <span>{contactContent.form.submitText}</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info - Right Side */}
            <div className={styles.infoSection}>
              {/* Visit Us Section */}
              <div className={styles.infoBlock}>
                <h3 className={styles.infoTitle}>
                  <FiMapPin className={styles.infoIcon} />
                  {contactContent.visitUs.title}
                </h3>

                <div className={styles.addressInfo}>
                  <p className={styles.addressText}>
                    {contactContent.visitUs.address.street}
                    <br />
                    {contactContent.visitUs.address.city}
                    <br />
                    {contactContent.visitUs.address.country}
                  </p>

                  <div className={styles.hoursInfo}>
                    <h4 className={styles.hoursTitle}>
                      <FiClock className={styles.infoIcon} />
                      Store Hours
                    </h4>
                    {contactContent.visitUs.hours.map((hour, index) => (
                      <div key={index} className={styles.hourItem}>
                        <span className={styles.day}>{hour.day}</span>
                        <span className={styles.time}>{hour.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Google Maps */}
                <div className={styles.mapContainer}>
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.3063455!2d-74.00597688459394!3d40.71278417932939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316e3d0c01%3A0x54dc92f267f3c1e8!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1626789123456!5m2!1sen!2sus`}
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Tawheed Store Location"
                    className={styles.mapFrame}
                  />
                </div>
              </div>

              {/* Get in Touch Section */}
              <div className={styles.infoBlock}>
                <h3 className={styles.infoTitle}>
                  <FiPhone className={styles.infoIcon} />
                  {contactContent.getInTouch.title}
                </h3>

                <div className={styles.contactDetails}>
                  <div className={styles.contactItem}>
                    <FiPhone className={styles.contactIcon} />
                    <div className={styles.contactText}>
                      <span className={styles.contactLabel}>Phone</span>
                      <a
                        href={`tel:${contactContent.getInTouch.phone}`}
                        className={styles.contactValue}
                      >
                        {contactContent.getInTouch.phone}
                      </a>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <FiMail className={styles.contactIcon} />
                    <div className={styles.contactText}>
                      <span className={styles.contactLabel}>
                        General Inquiries
                      </span>
                      <a
                        href={`mailto:${contactContent.getInTouch.email}`}
                        className={styles.contactValue}
                      >
                        {contactContent.getInTouch.email}
                      </a>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <FiMail className={styles.contactIcon} />
                    <div className={styles.contactText}>
                      <span className={styles.contactLabel}>
                        Customer Support
                      </span>
                      <a
                        href={`mailto:${contactContent.getInTouch.support}`}
                        className={styles.contactValue}
                      >
                        {contactContent.getInTouch.support}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
