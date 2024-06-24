import "./section4.css";

const Section4 = () => {
  return (
    <div className="section4">
      <div className="center">
        <img src="/Assets/logo squre.png" alt="" />
        <p>Atlassian</p>
        <div className="followBtn">follow</div>
      </div>
      <div className="section4Content">
        <div>
          <div className="margin-bottom">
            <p className="subHeading">Company size</p>
            <p className="valuee">1k - 2k Employees</p>
          </div>
          <div className="margin-bottom">
            <p className="subHeading">Sector</p>
            <p className="valuee">Information Technology, Infrastructure</p>
          </div>
          <div className="margin-bottom">
            <p className="subHeading">Founded In</p>
            <p className="valuee">2019</p>
          </div>
        </div>
        <div>
          <div className="margin-bottom">
            <p className="subHeading">Type</p>
            <p className="valuee">Private</p>
          </div>
          <div className="margin-bottom">
            <p className="subHeading">Funding</p>
            <p className="valuee">Bootstrapped</p>
          </div>
          <div className="margin-bottom">
            <p className="subHeading">Founded By</p>
            <p className="valuee">Scott Farquhar, Mike Cannon-Brookes</p>
          </div>
        </div>
      </div>

      <div>
        <p className="reportLine">Report this listing</p>
      </div>
    </div>
  );
};

export default Section4;
