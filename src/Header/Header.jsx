import "../common.css";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo center">Logo</div>
      <div className="center">
        <div className="jobs center ">
          <img src="/Assets/briefcase-02.png" alt="" /> Jobs
        </div>
        <div className="middleBar">
          <div className="middleOption center">
            <img src="/Assets/message.png" />
            Messages
          </div>
          <div className="middleOption center">
            <img src="/Assets/payements.png" />
            Payments
          </div>
          <div className="middleOption center">
            <img src="/Assets/users-01.png" />
            Application
          </div>
        </div>
      </div>
      <div className="center profileSection ">
        <img src="/Assets/bell.png" alt="" />
        <img src="/Assets/a-logo.png" alt="" />
        <img src="/Assets/cursor.png" alt="" />
      </div>
    </div>
  );
};

export default Header;
