import { createContext, useState, useContext } from "react";
import { CopyFormats } from "../constants";


export const UIContext = createContext({
  colorType: CopyFormats.HEX,
  setColorType: () => {},
  isSoundPlay: true,
  setSoundPlay: () => {},
});

export const UIProvider = ({ children }) => {
  const [colorType, setColorType] = useState(CopyFormats.HEX);
  const [isSoundPlay, setSoundPlay] = useState(true);
  return (
    <UIContext.Provider
      value={{
        colorType,
        setColorType,
        isSoundPlay,
        setSoundPlay,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUIContext = () => ({ ...useContext(UIContext) });
