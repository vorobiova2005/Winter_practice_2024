export const animations = {
  opacity: (isOpen) => (isOpen ? "animate-opacity" : "opacity-0"),
  mainPage: (isOpen) => (isOpen ? "animate-mainTransition" : "translate-y-full bg-[#fff]"),
  secondaryPage: (isOpen) => (isOpen ? "animate-secondaryTransition" : "translate-x-full"),
};
export const AnimationsTimingKeys = {
  SHORT: "short",
  MEDIUM: "medium",
  LONG: "long",
  LONG_PLUS: "long-plus",
}
export const animationsTimings = {
  [AnimationsTimingKeys.SHORT]: {
    className: "duration-[200ms]",
    ms: 200,
  },
  [AnimationsTimingKeys.MEDIUM]: {
    className: "duration-[500ms]",
    ms: 500,
  },
  [AnimationsTimingKeys.LONG]: {
    className: "duration-[700ms]",
    ms: 700,
  },
  [AnimationsTimingKeys.LONG_PLUS]: {
    className: "duration-[2s]",
    ms: 2000,
  },
};
