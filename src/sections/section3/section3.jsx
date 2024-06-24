import "./section3.css";

const Section3 = () => {
  return (
    <div className="section3">
      <h2 className="subHeading">About the job</h2>
      <div className="section3Content">
        <ol>
          <li> Handle the UI/UX research design</li>
          <li>
            Work on researching on latest web applications designs & trends
          </li>
          <li>Work on conceptualizing and visualizing</li>
          <li>
            Work on creating graphics content and other graphic related works
          </li>
        </ol>
        <p>Benifits:</p>
        <ul>
          <li className="bullet">Health insurance</li>
          <li className="bullet">Provident Fund</li>
        </ul>
        <p>Schedule:</p>
        <ul>
          <li className="bullet">Day shift</li>
        </ul>
        <p>Supplemental pay types:</p>
        <ul>
          <li className="bullet">Performance bonus</li>
        </ul>
      </div>
    </div>
  );
};

export default Section3;
