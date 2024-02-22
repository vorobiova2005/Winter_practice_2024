import { useState } from "react";
import {
  useOptionalStyle,
  useUIContext,
} from '../hooks';
import {AnimationsTimingKeys, animations, colorConvector, generateRandomPhrase} from '../utils'
import { Notification } from "./notification";
import useSound from "use-sound";
import notify from '../assets/notify.mp3'

export const PaletteGallery = ({ colors }) => {
  const [text, setText] = useState(() => generateRandomPhrase());
  const [play] = useSound(notify);
  const [copiedColor, setCopiedColor] = useState(null);
  const { className, autoCloseEnable } = useOptionalStyle({
    onDisable: () => {
      setCopiedColor(null);
    },
    style: animations.opacity,
    timing: AnimationsTimingKeys.LONG,
  });
  const { colorType, isSoundPlay } = useUIContext();

  const handleSelect = (color) => {
    isSoundPlay && play();
    const newColorFormat = colorConvector(color, colorType);
    navigator.clipboard.writeText(newColorFormat);
    setCopiedColor(newColorFormat);
    setText(generateRandomPhrase());
    autoCloseEnable();
  };
  return (
    <>
      {colors.map(({ color, name }, index) => (
        <button
          key={index}
          onClick={() => handleSelect(color)}
          className="group relative flex items-center justify-center"
          style={{ background: color }}
        >
          <span className="phoneM:p-2 phoneM:pl-8 phoneM:pr-8 rounded-md border-2 border-opacity-20 p-1 pl-2 pr-2 opacity-0 transition-all group-hover:opacity-100">
            Copy
          </span>
          <span className="absolute bottom-2 right-2">{name.toUpperCase()}</span>
        </button>
      ))}
      {copiedColor && <Notification text={text} className={className} copiedColor={copiedColor} />}
    </>
  );
};
