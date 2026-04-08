import { IoLogoInstagram } from "react-icons/io5";
import texts from "@/constants/texts";
import { useLanguage } from "@/context/LanguageContext";

const ContactForm = () => {
  const { language } = useLanguage();

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
              className="flex items-center gap-2 items-center"
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
          <form className="mt-8 space-y-4 md:w-1/2">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                {texts[language].contact.nameLabel}
              </label>
              <input
                type="text"
                placeholder={texts[language].contact.placeholderName}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                {texts[language].contact.emailLabel}
              </label>
              <input
                type="email"
                placeholder={texts[language].contact.placeholderEmail}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                {texts[language].contact.phoneLabel}
              </label>
              <input
                type="tel"
                placeholder={texts[language].contact.placeholderPhone}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-yellow-400 text-black font-semibold py-3 rounded-md hover:bg-yellow-500 transition"
            >
              {texts[language].contact.submitButton}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
