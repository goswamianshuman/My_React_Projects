import { useContext } from "react";
import { ThemeContext } from "../../context";
import "./project.css";

const Project = ({ img, link, desc, title }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="p-container">
      <div
        className="p"
        style={{
          border: darkMode && " 1px solid #333",
        }}
      >
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <div className="p-img">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="p-img-title">
        <h6> {title}</h6>
      </div>
      <div className="p-img-desc">
        <p>{desc}</p>
        <div className="p-button">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-button-a"
          >
            Video Presentation
          </a>
        </div>
        <div className="p-button">
          <a
            href="https://github.com/Alpha0AG/My_React_Projects/tree/master"
            target="_blank"
            rel="noopener noreferrer"
            className="p-button-a"
          >
            Source File (github)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
