import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface StrobeValueContext {
  intensity: number;
  setIntensity: Dispatch<SetStateAction<number>>;
}

export const StrobeContext = createContext<StrobeValueContext | undefined>(
  undefined
);

interface StrobeProviderProps {
  children: ReactNode;
}

export const StrobeProvider = ({ children }: StrobeProviderProps) => {
  const [intensity, setIntensity] = useState<number>(2);

  return (
    <StrobeContext.Provider value={{ intensity, setIntensity }}>
      {children}
    </StrobeContext.Provider>
  );
};
