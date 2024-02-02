import "../styles/Header.css";

function Header() {
  return (
    <header className="Header">
      <div className="Logo">
        <img src="src/assets/images-removebg-preview.png" alt="Logo" />
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
