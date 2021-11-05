import { withInstrumentStatic } from '../../adapters/Soundfont';
import { useAudioContext } from '../AudioContextProvider';
import { Keyboard } from './Keyboard';

const withGuitar = withInstrumentStatic('acoustic_guitar_steel');
const WrappedKeyboard = withGuitar(Keyboard);

export const KeyboardWithInstrument = () => {
  const AudioContext = useAudioContext()!;
  return <WrappedKeyboard AudioContext={AudioContext} />;
};
