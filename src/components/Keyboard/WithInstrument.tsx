import { Keyboard } from './Keyboard';
import { useAudioContext } from '../AudioContextProvider';
import { useInstrument } from '../../state/Instrument';
import { SoundfontProvider } from '../../adapters/Soundfont';

export const KeyboardWithInstrument = () => {
  const AudioContext = useAudioContext()!;
  const { instrument } = useInstrument();

  return (
    <SoundfontProvider
      AudioContext={AudioContext}
      instrument={instrument}
      render={(props) => <Keyboard {...props} />}
    />
  );
};
