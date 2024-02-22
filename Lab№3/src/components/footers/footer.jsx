import { Link } from '../link';

export const Footer= () => (
  <div className="text-main-secondary mt-20 flex w-full flex-wrap items-center justify-center gap-40 bg-secondary pb-10 pt-10 text-center">
    <div className="flex flex-col text-secondary">
      <span className="text-white">Create by</span>
      <p className="text-white">Vallentina Vorobyova</p>
    </div>
    
    <div className="flex flex-col text-secondary items-center">
      <span className="text-white flex">My contact:</span>
        <Link
          className="text-secondary group flex items-center text-white"
          href={"https://web.telegram.org/a/"}
        >
          <span className="group-hover:text-black">Telegram</span>
          <span className="-translate-x-full opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 text-black">
            →
          </span>
        </Link>
    </div>
    <div className="flex flex-col text-secondary items-center">
      <span className="text-white flex">About</span>
      <p className="text-white">Flat UI Colors allows you to choose a palette and contrasting color</p>
    </div>
  </div>
);
