import styles from './Footer.module.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <a href="https://newline.co">Newline</a> | Practice by Sykycao
      <br />
      {currentYear}
    </footer>
  );
};
