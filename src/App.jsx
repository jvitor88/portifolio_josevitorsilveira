import GlobalStyles from "./components/globalstyles"
import NavBar from "./components/navbar"
import AboutMe from "./components/aboutme"
import Intro from "./components/intro"
import MySkills from "./components/myskills"
import Contact from "./components/contact"
import Projects from "./components/projects"

function App() {

  return (
    <>
      <GlobalStyles/>
      <NavBar/>
      <Intro/>
      <AboutMe/>
      <MySkills/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
