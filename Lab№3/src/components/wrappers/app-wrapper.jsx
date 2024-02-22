import { Header } from "../headers";
import { Footer } from "../footers";
import bgStars from '../../assets/svgs/bg-stars.svg'

export const AppWrapper = ({ children }) => {
  return (
    <>
      <img src={bgStars} className="absolute -z-50 h-screen w-screen overflow-hidden opacity-100" alt="1"/>
      <div className="h- tabletSPlus:pl-44 tabletSPlus:pr-44 h-fit w-full flex-col items-center overflow-hidden pl-10 pr-10">
        <Header />
        <div className="flex flex-col gap-10">{children}</div>
      </div>
      <Footer />
    </>
  );
};
