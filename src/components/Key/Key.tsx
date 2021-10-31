import clsx from 'clsx';
import { FunctionComponent } from 'react';
import { NoteType } from '../../domain/note';
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
  return (
    <button
      className={clsx(styles.key, styles[type])}
      onMouseDown={onDown}
      onMouseUp={onUp}
      type="button"
      {...rest}
    >
      {label}
    </button>
  );
};
