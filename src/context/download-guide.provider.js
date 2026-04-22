import React, { createContext, useContext, useEffect, useState } from "react"

export const DownloadGuideContext = createContext()

export const DownloadGuideProvider = ({ children }) => {
  const [isOpenForm, setIsOpenForm] = useState(false)

  return (
    <DownloadGuideContext.Provider
      value={{
        isOpenForm,
        setIsOpenForm,
      }}
    >
      {children}
    </DownloadGuideContext.Provider>
  )
}

export function useDownloadGuideContext() {
  const context = useContext(DownloadGuideContext)

  // if (!context) {
  //   console.error("Error deploying Meals Tutorial Context!!!");
  // }

  return context
}

export default useDownloadGuideContext
