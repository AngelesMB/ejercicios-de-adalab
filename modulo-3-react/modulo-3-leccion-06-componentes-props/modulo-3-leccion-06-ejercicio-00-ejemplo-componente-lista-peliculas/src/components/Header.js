const Header = () => {
  return (
    <header className="header">
      <h1 className="title--big">Hola Adalabers!</h1>
      <a
        className="header--logo"
        href="https://github.com/Adalab/ejercicios-en-clase-o/"
        title="Ir al repo del ejercicio"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://raw.githubusercontent.com/Adalab/resources/master/images/adalab-logo-32x32.png"
          alt="Adalab logo"
        />
      </a>
    </header>
  );
};

export default Header;
