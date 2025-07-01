import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <select
      onChange={(e) => changeLanguage(e.target.value)}
      value={i18n.language}
      className="border border-blue-200 bg-transparent text-white rounded focus:outline-none cursor-pointer "
    >
      <option value="en">🇬🇧</option>
      <option value="sv">🇸🇪</option>
      <option value="es">🇪🇸</option>
    </select>
  );
};

export default LanguageSwitcher;
