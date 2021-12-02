import "./intro.css";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Anshuman Goswami</h1>
          <div className="i-tittle">
            <div className="i-tittle-wrapper">
              <div className="i-tittle-items">Web Developer</div>
              <div className="i-tittle-items">UI/UX Designer</div>
              <div className="i-tittle-items">Java</div>
              <div className="i-tittle-items">Video Editor</div>
              <div className="i-tittle-items">Blogger</div>
            </div>
          </div>

          <p className="i-discription">
            The world is full of challenges and opportunities that no one can
            imagine. Personally, I feel that everyone should be a part of these
            challenges and grow themself together while doing great work for the
            people and contributing to the community to change the livelihood
            around. Following this path I am always ready to learn new things,
            always try to provide a better experience to the community and I
            believe in the method of working and learning together.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src="./images/anshu.png" alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
