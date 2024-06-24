import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <div className="navigationBarParent">
      <div className="spaceBetween navigationBar">
        <p className="center option jobPreview">Job preview</p>
        <p className="center option">Applicants</p>
        <p className="center option"> Match</p>
        <p className="center option">Messages</p>
      </div>
    </div>
  );
};

export default NavigationBar;
