import { twJoin } from "tailwind-merge";


export const Notification = ({ className, copiedColor, text }) => (
  <div
    className={twJoin(
      "text-medium-secondary tabletSPlus:text-large-secondary absolute left-0 top-0 z-50 flex h-screen w-screen flex-col justify-center text-center transition-all",
      className,
    )}
    style={{ background: copiedColor }}
  >
    <span className="text-medium-main tabletSPlus:text-large-main mb-10 w-full bg-[#ffffff33]">{text}</span>
    <span>{copiedColor}</span>
  </div>
);
