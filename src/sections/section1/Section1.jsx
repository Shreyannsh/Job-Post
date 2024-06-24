import "./section1.css";

const Section1 = () => {
  return (
    <div className="section1">
      <div className="center section1Content">
        <h1>Senior Product Designer</h1>
        <p className="center subHeading">
          <span className="greyDot"></span> posted 2 days ago
        </p>
        <p className="center open">
          <span className="openDot"></span> Open
        </p>
      </div>
      <div className="center section1ContentBottom">
        <div className="center location">
          <img src="/Assets/location.png" alt="" />
          Delaware, USA
        </div>
        <span className="greyDot"></span>
        <div className="center location">
          <img src="/Assets/coins-stacked-03.png" alt="" />
          $300k-$400k
        </div>
      </div>
    </div>
  );
};

export default Section1;
