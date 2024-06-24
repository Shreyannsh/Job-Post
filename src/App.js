import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import NavigationBar from "./NavigationBar/NavigationBar";
import Section1 from "./sections/section1/Section1";
import Section2 from "./sections/section2/section2";
import Section3 from "./sections/section3/section3";
import Section4 from "./sections/section4/section4";
import RightSection from "./sections/rightSection/rightSection";

function App() {
  return (
    <div className="App">
      <Header />
      <NavigationBar />
      <div className="sections">
        <div className="sectionsDiv1">
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
        </div>
        <div className="sectionsDiv2">
          <RightSection />
        </div>
      </div>
    </div>
  );
}

export default App;
