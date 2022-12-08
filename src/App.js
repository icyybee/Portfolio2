import Header from "./components/header/header.component";
import Navigation from "./components/navigation/navigation.component";
import Bio from "./components/bio/bio.component";
import Skill from "./components/skill/skill.component";
import Portfolio from "./components/port/port.component";
import Testimonial from "./components/testimonial/testimonial.component";
import Contact from "./components/contact/contact.component";
import Footer from "./components/footer/footer.component";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Bio />
      <Skill />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
