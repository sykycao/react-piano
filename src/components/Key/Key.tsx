import clsx from 'clsx';
import { FunctionComponent } from 'react';
import { NoteType } from '../../domain/note';
import { usePressObserver } from '../PressObserver';
import styles from './Key.module.css';

type PressCallback = () => void;

type KeyProps = {
  type: NoteType;
  label: string;
  disabled?: boolean;
  onUp: PressCallback;
  onDown: PressCallback;
};

export const Key: FunctionComponent<KeyProps> = (props) => {
  const { type, label, onUp, onDown, ...rest } = props;

  const pressed = usePressObserver({
    watchKey: label,
    onStartPress: onDown,
    onFinishPress: onUp,
  });

  return (
    <button
      className={clsx(
        styles.key,
        styles[type],
        pressed && styles['is-pressed']
      )}
      onMouseDown={onDown}
      onMouseUp={onUp}
      type="button"
      {...rest}
    >
      {label}
    </button>
  );
};
