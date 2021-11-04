import { Keyboard } from './Keyboard';
import { useAudioContext } from '../AudioContextProvider';
import { useInstrument } from '../../state/Instrument';
import { withInstrument } from '../../adapters/Soundfont/withInstrument';

const WrappedKeyboard = withInstrument(Keyboard);

export const KeyboardWithInstrument = () => {
  const AudioContext = useAudioContext()!;
  const { instrument } = useInstrument();

  return (
    <WrappedKeyboard AudioContext={AudioContext} instrument={instrument} />
  );
};
