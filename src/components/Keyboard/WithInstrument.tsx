import { Keyboard } from './Keyboard';
import { useAudioContext } from '../AudioContextProvider';
import { useInstrument } from '../../state/Instrument';
import { withInstrumentForwardedRef } from '../../adapters/Soundfont';

const WrappedKeyboard = withInstrumentForwardedRef(Keyboard);

export const KeyboardWithInstrument = () => {
  const AudioContext = useAudioContext()!;
  const { instrument } = useInstrument();

  return (
    <WrappedKeyboard AudioContext={AudioContext} instrument={instrument} />
  );
};
