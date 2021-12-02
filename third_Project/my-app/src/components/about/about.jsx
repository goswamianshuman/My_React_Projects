import "./About.css";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="a">
      <div className="a-left">
        <div
          className="a-card bg"
          style={{
            background: darkMode && "#b6b6b6",
          }}
        ></div>
        <div className="a-card">
          <img
            src="./images/about.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>

      <div className="a-right">
        <h1 className="a-tittle">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content. This is the world of happiness and joy everwhere.{" "}
        </p>
        <p className="a-des">
          Currently, I am a student and a self-taught front-end developer , and
          also a java developer. I have created many projects from which few are
          described below I have also started writing blogs which you can look
          at in the article section which will be added soon.
        </p>

        {/* <div className="a-award">
          <img
            src="https://source.unsplash.com/random"
            alt=""
            className="a-award-img"
          />
          <div className="a-award-texts">
            <h4 className="a-award-title">Internation Design Award</h4>
            <p className="a-award-desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
              nulla quibusdam cupiditate expedita? Dolorum perferendis dolorem
              exercitationem fugiat expedita, explicabo sed deserunt
              voluptatibus dicta a enim ea soluta asperiores harum!
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
