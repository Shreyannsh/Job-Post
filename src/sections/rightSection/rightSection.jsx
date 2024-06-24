import "./rightSection.css";

const RightSection = () => {
  return (
    <div className="rightSection">
      <div className="center">
        <div className="button1">
          <img src="/Assets/delete.png" alt="" /> Delete job
        </div>
        <div className="button2">
          <img src="/Assets/edit.png" alt="" />
          Edit job
        </div>
      </div>

      <div className="card spaceBetween">
        <div className="center">
          <img src="./Assets/applicant black.png" alt="" />
          Applicants
        </div>
        <div>400</div>
      </div>
      <div className="card spaceBetween">
        <div className="center">
          <img src="./Assets/matches.png" alt="" />
          Matches
        </div>
        <div>100</div>
      </div>
      <div className="card spaceBetween">
        <div className="center">
          <img src="./Assets/message black.png" alt="" />
          Messages
        </div>
        <div>147</div>
      </div>
      <div className="card spaceBetween">
        <div className="center">
          <img src="./Assets/eye.png" alt="" />
          Views
        </div>
        <div>800</div>
      </div>

      <div className="quoteCard">
            <p className="qoute">“A quote from a Atlassian.”</p>
            <div className="cardDetails">
                <img src='/Assets/Avatar.png' alt='' />
                <div>
                    <p className="name">Name</p>
                    <p className="desc">Description</p>
                </div>
            </div>
      </div>
    </div>
  );
};

export default RightSection;
