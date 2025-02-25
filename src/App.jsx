import Navbar from './components/Navbar'
import Hero from './components/HeroSection'
import HowSection from './components/HowSection'
import SkillSection from './components/SkillSection'
import Footer from './components/FooterSection'
import Header from './components/Header'
import NotesSection from './components/NotesSection'
import RoadmapSection from './components/RoadmapSection'
import HeroSection from './components/HeroSection'


function App() {

  return (
    <div className='bg-[url(../../public/images/home-bg.png)] bg-cover '>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <HowSection></HowSection>
      <SkillSection><Header></Header></SkillSection>
      <RoadmapSection></RoadmapSection>
      <NotesSection></NotesSection>
      <Footer></Footer>
      

    </div>
  )
}

export default App
