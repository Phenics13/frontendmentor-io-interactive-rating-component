import { createContext, FC, ReactNode, useState } from "react";

type CurrentNumberContextType = {
  currentNumber: number | null;
  setCurrentNumber: (currentNumber: number | null) => void;
  submit: boolean;
  setSubmit: (submit: boolean) => void;
};

export const CurrentNumberContext = createContext<CurrentNumberContextType>({
  currentNumber: null,
  setCurrentNumber: (currentNumber: number | null) => {},
  submit: false,
  setSubmit: (submit: boolean) => {},
});

export const CurrentNumberProvider: FC<{children: ReactNode}> = ({children}) => {
  const [currentNumber, setCurrentNumber] = useState<number | null>(null);
  const [submit, setSubmit] = useState<boolean>(false);

  const value = {
    currentNumber,
    setCurrentNumber,
    submit,
    setSubmit,
  }

  return (
    <CurrentNumberContext.Provider value={value}>
      {children}
    </CurrentNumberContext.Provider>
  );
};

