import { useState } from "react";
import { IoLogoInstagram } from "react-icons/io5";
import texts from "@/constants/texts";
import { useLanguage } from "@/context/LanguageContext";

const ContactForm = () => {
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSuccessMessage("Message sent successfully.");
      setFormData({
        name: "",
        email: "",
        phone: "",
      });
    } catch (error: any) {
      setErrorMessage(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-gray-50 py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-gray-500 text-lg">
          {texts[language].contact.subtitle}
        </h3>

        <h1 className="text-4xl font-bold text-gray-800 mt-2">
          {texts[language].contact.sectionTitle}
        </h1>

        <p className="text-gray-500 mt-2">
          {texts[language].contact.description}
        </p>

        <div className="md:flex text-left md:gap-16">
          {/* Ruben Saez Info */}
          <div className="mt-6 bg-white shadow-lg rounded-lg p-4 text-gray-800 text-left md:w-1/2 order-2 h-fit">
            <p className="text-lg font-semibold">
              {texts[language].contact.contactInfo.name}
            </p>

            <p className="text-md">
              {texts[language].contact.contactInfo.role}
            </p>

            <p className="text-md">
              {texts[language].contact.contactInfo.phone}
            </p>

            <p className="text-md">
              {texts[language].contact.contactInfo.studio}
            </p>

            <a
              href={texts[language].contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={texts[language].contact.instagramAria}
              className="flex items-center gap-2"
            >
              <IoLogoInstagram
                className="text-2xl text-pink-600 shrink-0"
                aria-hidden
              />
              <span className="text-sm font-semibold underline">
                @dinamo_music_studio
              </span>
            </a>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-4 md:w-1/2">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                {texts[language].contact.nameLabel}
              </label>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder={texts[language].contact.placeholderName}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                {texts[language].contact.emailLabel}
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={texts[language].contact.placeholderEmail}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                {texts[language].contact.phoneLabel}
              </label>
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder={texts[language].contact.placeholderPhone}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 bg-yellow-400 text-black font-semibold py-3 rounded-md hover:bg-yellow-500 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : texts[language].contact.submitButton}
            </button>

            {successMessage && (
              <p className="text-green-600 text-sm">{successMessage}</p>
            )}

            {errorMessage && (
              <p className="text-red-600 text-sm">{errorMessage}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
