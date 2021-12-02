import { useContext } from "react";
import About from "./components/about/about";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/intro";
import ProjectList from "./components/projectlist/projectList";
import Toggle from "./components/toggle/toggle";
import { ThemeContext, } from "./context";


const App = () => {  

  const theme = useContext(ThemeContext); 
  const darkMode = theme.state.darkMode;

  return (
    <div style={{
      background: darkMode ? "#222" : "#ffffff",

     color:darkMode && "white"}} > 
      <Toggle/>
      <Intro />  
      <About/> 
      <ProjectList/> 
      <Contact/>
    </div>
  );
};

export default App;
