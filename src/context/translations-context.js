import React, { createContext, useContext } from "react"

const TranslationContext = createContext()

export const TranslationProvider = ({
  children,
  value,
}) => {
  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  )
}

export const useTranslations = () =>
  useContext(TranslationContext)