import "./style.css";

function Header({ title, onClickTitle, themeDisplay, headerDisplay }) {
  return (
    <header className={`header header-theme ${headerDisplay}`}>
      <h1
        className={
          themeDisplay !== "" ? `header-title` : `header-title no-border`
        }
        onClick={() => {
          onClickTitle();
        }}
      >
        R
        <span className={themeDisplay === "" ? "hidden" : ""}>
          Click here for the experience
        </span>
      </h1>
      <h2 className={`header-theme-title ${themeDisplay}`}>{title}</h2>
    </header>
  );
}

export default Header;
