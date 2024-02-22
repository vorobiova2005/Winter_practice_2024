import { useState, useCallback, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { animationsTimings } from "../utils";

export const useOptionalStyle = ({ timing, initialIsEnabled, style, onEnable, onDisable }) => {
  const [isEnabled, setIsEnabled] = useState(initialIsEnabled ?? true);

  const disableStyle = useCallback(() => {
    onDisable &&
      setTimeout(() => {
        onDisable();
      }, animationsTimings[timing].ms);
    setIsEnabled(false);
  }, [onDisable, timing]);

  const enableStyle = useCallback(() => {
    setIsEnabled(true);
    onEnable && onEnable();
  }, [onEnable]);

  const autoCloseEnable = useCallback(() => {
    enableStyle();
    setTimeout(() => {
      disableStyle();
    }, animationsTimings[timing].ms);
  }, [disableStyle, enableStyle, timing]);

  const className = useMemo(
    () => twMerge(style(isEnabled), animationsTimings[timing].className),
    [timing, isEnabled, style],
  );

  return { enableStyle, disableStyle, className, autoCloseEnable };
};
