import { Keyboard } from './Keyboard';
import { useAudioContext } from '../AudioContextProvider';
import { useInstrument } from '../../state/Instrument';
import { withInstrumentBasedOnHook } from '../../adapters/Soundfont';

const WrappedKeyboard = withInstrumentBasedOnHook(Keyboard);

export const KeyboardWithInstrument = () => {
  const AudioContext = useAudioContext()!;
  const { instrument } = useInstrument();

  return (
    <WrappedKeyboard AudioContext={AudioContext} instrument={instrument} />
  );
};
