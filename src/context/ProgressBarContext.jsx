import { useState, createContext } from "react";

export const ProgressBarContext = createContext();

export const ProgressBarProvider = ({ children }) => {
  const [progressBar, setProgressBar] = useState({});

  return (
    <ProgressBarContext.Provider value={{ progressBar, setProgressBar }}>
      {children}
    </ProgressBarContext.Provider>
  )
}
