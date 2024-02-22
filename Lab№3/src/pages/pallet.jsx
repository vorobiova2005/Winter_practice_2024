import {PaletteGallery} from '../pallet-gallery'
import {PalletGalleryFooter, PalletGalleryHeader} from '../components'
import {PalletsData} from '../data'

export const PaletteGalleryPage = ({ palletId }) => {
  const pallet = PalletsData.find(({ id }) => id === palletId);
  if (!pallet) return;
  const { colors, paletteName } = pallet;
  return (
    <>
        <div className="flex h-screen w-full flex-col justify-between">
            <PalletGalleryHeader />
            <div className="flex h-screen w-full flex-col justify-between">
                <main className="bg-secondary tabletS:grid-cols-4 tabletM:grid-cols-5 grid h-full w-full grid-cols-3">
                  <PaletteGallery colors={colors} />
                </main>
                <PalletGalleryFooter paletteName={paletteName} />
            </div>
        </div>
    </>
  );
};