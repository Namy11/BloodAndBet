import "../styles/Header.css";

function Header() {
  return (
    <header className="Header">
      <div className="Logo">
        <img
          src="src/assets/depositphotos_136334090-stock-illustration-spartan-warrior-pose-graphic-vector-removebg-preview.png"
          alt="Logo"
        />
        <span>Home</span>
      </div>
      <div className="RightSection">
        <span>Connexion</span>
        <span>Login</span>
      </div>
    </header>
  );
}

export default Header;
