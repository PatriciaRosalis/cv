// header.tsx
import { FC, useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import logo from "../../assets/logo.png";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import "./header.scss";

const Header: FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const isCurrentDark = theme === "dark";
    setTheme(isCurrentDark ? "light" : "dark");
    localStorage.setItem("theme", isCurrentDark ? "light" : "dark");
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="nav">
          <a href="/" className="logo-section">
            <p className="logo">PR.</p>
          </a>
          <nav>
            <a href="">PROJECTS</a>
            <a href="">ABOUT ME</a>
            <a href="">BLOG</a>
            <a href="">CONTACT ME</a>
          </nav>
        </div>
        <div className="toggle-btn-section">
          <div className={`toggle-checkbox m-vertical-auto`}>
            <input type="checkbox" name="switch" id="switch" onChange={handleThemeChange} checked={theme === "light"} />
            <label htmlFor="switch"></label>
          </div>
        </div>
        <div className="header-resume-wrapper">
          <div className="header-resume">
            <p className="name">Patrícia Rosális</p>
            <div>
              <p className="career">FRONT-END DEVELOPER</p>
              <p className="passionate">passionate about UX/ UI</p>
            </div>
            <div className="location">
              Currently living in London
            </div>
            <div className="btn-wrapper">
              <button className="btn-contact">Contact me</button>
              <div className="github">
                <a href="" >
                  <img src={github} />
                </a>
              </div>
              <div className="linkedin">
                <a href="">
                  <img src={linkedin} />
                </a>
              </div>
            </div>
          </div>
          <div className="header-picture">
            <img src={logo} width={504} height={500} />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
