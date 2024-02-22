import {Pallet, AppWrapper} from '../components'
import {PalletsData} from '../data'

export const Home = () => {
    return (
        <AppWrapper>
          <div className="max-desktopS:grid max-desktopS:grid-cols-2 max-phoneM:grid-cols-1 tabletM:gap-x-16 flex h-[35%] w-full gap-x-8 gap-y-8">
            {PalletsData.slice(0, 3).map(({ paletteName, ...pallet }, index) => (
              <Pallet {...pallet} name={paletteName} key={index} />
            ))}
          </div>
          <div className="text-medium-secondary bg-secondary flex h-fit w-full items-center justify-around rounded-md pb-5 pt-5">
            <span>Other Palettes</span>
          </div>
          <div className="phoneM:grid-cols-2 tabletM:gap-x-14 tabletM:gap-y-10 desktopS:grid-cols-3 grid h-full grid-cols-1 gap-x-7 gap-y-4">
            {PalletsData.slice(0).map(({ paletteName, ...pallet }, index) => (
              <Pallet {...pallet} name={paletteName} key={index} />
            ))}
          </div>
        </AppWrapper>
    );
}