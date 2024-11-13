import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

interface ShakeContextValue {
  isShake: boolean;
  setIsShake: Dispatch<SetStateAction<boolean>>;
}

export const ShakeContext = createContext<ShakeContextValue | undefined>(
  undefined
);

interface ShakeProviderProps {
  children: ReactNode;
}

export const ShakeProvider = ({ children }: ShakeProviderProps) => {
  const [isShake, setIsShake] = useState(true);

  return (
    <ShakeContext.Provider value={{ isShake, setIsShake }}>
      {children}
    </ShakeContext.Provider>
  );
};
