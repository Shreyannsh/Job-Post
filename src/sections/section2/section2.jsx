import "./section2.css";

const Section2 = () => {
  return (
    <div className="section2">
      <div className="section2Section">
        <p className="subHeading">Skill Required</p>
        <div className="center brand">
          <img src="/Assets/figmaLogo.png" alt="" /> Figma
        </div>
        <div className="center brand">
          <img src="/Assets/adobe illustration.png" alt="" /> Adobe Illustrator
        </div>
        <div className="center brand">
          <img src="/Assets/adobe.png" alt="" />
          Adobe XD
        </div>
      </div>
      <div className="section2Section">
        <p className="subHeading">Preffered Language</p>
        <p className="value">English</p>
      </div>
      <div className="section2Section">
        <p className="subHeading">Type</p>
        <p className="value">Full time</p>
      </div>
      <div className="section2Section">
        <p className="subHeading">Year</p>
        <p className="value">3+ Years of Experience</p>
      </div>
    </div>
  );
};

export default Section2;
