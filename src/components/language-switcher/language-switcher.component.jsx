import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const FloatingContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: white;
  border-radius: 50px;
  padding: 8px 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.15);
  border: 1px solid #e0e0e0;
  background: ${props => props.whiteFooter ? '#000' : '#fff'};
  
  @media (max-width: 768px) {
    bottom: 15px;
    right: 15px;
    padding: 6px 12px;
  }
`

const LanguageButton = styled(Link)`
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 30px;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.3s ease;
  color: ${props => props.whiteFooter ? '#fff' : '#333'};
  text-align: center;
  background: ${props => props.active ? (props.whiteFooter ? 'rgba(255,255,255,0.2)' : '#f0f0f0') : 'transparent'};
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  
  &:hover {
    transform: scale(1.05);
    background: ${props => props.whiteFooter ? 'rgba(255,255,255,0.15)' : '#e8e8e8'};
  }
`

const ToggleButton = styled.button`
  background: ${props => props.whiteFooter ? '#000' : '#fff'};
  border: 1px solid ${props => props.whiteFooter ? 'rgba(255,255,255,0.3)' : '#ddd'};
  border-radius: 50px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.whiteFooter ? '#fff' : '#333'};
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.whiteFooter ? '#222' : '#f5f5f5'};
  }
`

const LanguagesList = styled.div`
  display: ${props => props.isOpen ? 'flex' : 'none'};
  flex-direction: column;
  gap: 5px;
`

const FloatingLanguageSwitcher = ({ translations, currentLanguage, whiteFooter }) => {
  const [isOpen, setIsOpen] = useState(false)

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.floating-switcher')) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  // Define languages
  const languages = {
    en: { name: "English", code: "en", label: "EN" },
    hi: { name: "हिंदी", code: "hi", label: "हिं" },
    // fr: { name: "Français", code: "fr", label: "FR" },
    // es: { name: "Español", code: "es", label: "ES" },
  }

  // Get available languages
  const availableLanguages = translations?.length > 0
    ? translations.map(t => ({
        code: t.language.code.toLowerCase(),
        uri: t.uri,
        label: languages[t.language.code.toLowerCase()]?.label || t.language.code.toUpperCase(),
        name: languages[t.language.code.toLowerCase()]?.name || t.language.code.toUpperCase()
      }))
    : Object.values(languages)

  const currentLangCode = currentLanguage?.toLowerCase() || 'en'
  const currentLang = availableLanguages.find(l => l.code === currentLangCode) || 
                     { code: currentLangCode, label: currentLangCode.toUpperCase(), uri: '/' }

  return (
    <FloatingContainer 
      className="floating-switcher" 
      whiteFooter={whiteFooter}
    >
      <ToggleButton 
        onClick={() => setIsOpen(!isOpen)} 
        whiteFooter={whiteFooter}
      >
        🌐 {currentLang.label}
        <span style={{ fontSize: '12px' }}>{isOpen ? '▲' : '▼'}</span>
      </ToggleButton>
      
      <LanguagesList isOpen={isOpen}>
        {availableLanguages.map(lang => (
          <LanguageButton
            key={lang.code}
            to={lang.uri}
            active={currentLangCode === lang.code}
            whiteFooter={whiteFooter}
            onClick={() => setIsOpen(false)}
          >
            {lang.name || lang.label}
          </LanguageButton>
        ))}
      </LanguagesList>
    </FloatingContainer>
  )
}

export default FloatingLanguageSwitcher