import './App.scss'
import Header from './components/Header'
import Contacts from './components/Contacts'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Awards from './components/Awards'

function App() {
  return (
    <>
      <Header></Header>
      <Contacts></Contacts>
      <Skills></Skills>
      <Experience></Experience>
      <Education></Education>
      <Awards></Awards>
      <span>References available upon request.</span>
    </>
  )
}

export default App
