import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  function changeLanguage(event: React.ChangeEvent<HTMLSelectElement>) {
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
  }

  return (
    <div>
      <select id="language-select" onChange={changeLanguage} value={language}>
        <option value="en">EN</option>
        <option value="pl">PL</option>
      </select>
    </div>
  );
}

LanguageSelector;
