import Project from "../project/project";
import "./projectList.css";
import { Projects } from "../../data";

const ProjectList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Inspire and Develop. Its Anshu</h1>
        <p className="pl-desc">
          So, these are some of my latest projects while working on many others
          is going on, I hope you would enjoy them and will not hesitate while
          contacting me
        </p>
      </div>
      <div className="pl-list">
        {Projects.map((item) => (
          <Project
            key={item.id}
            img={item.img}
            title={item.title}
            desc={item.desc}
            link={item.link}
          />
        ))}
      </div>

      <h2>More projects coming soon...</h2>
    </div>
  );
};

export default ProjectList;
