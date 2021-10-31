import { Keyboard } from './Keyboard';
import { useSoundfont } from '../../adapters/Soundfont/useSoundfont';
import { useAudioContext } from '../AudioContextProvider';
import { useMount } from '../../utils/useMount';

export const KeyboardWithInstrument = () => {
  const AudioContext = useAudioContext()!;
  const { loading, play, stop, load } = useSoundfont({ AudioContext });
  useMount(load);
  return <Keyboard loading={loading} play={play} stop={stop} />;
};
