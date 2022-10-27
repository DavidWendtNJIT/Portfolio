import "./intro.css"
import mainPicture from "../../img/portfolio_solo_bw_resized.png"

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h1 className="i-intro">Hello, my name is</h1>
          <h2 className="i-name">David Wendt</h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Full Stack Software Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Loving Father</div>
              <div className="i-title-item">Major Computer Nerd</div>
            </div>
          </div>
          <div className="i-desc">
            I am a detail oriented software developer focusing on finding elegant solutions to technical problems.
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg">

        </div>
        <img src={mainPicture} alt="David" className="i-img"/>
      </div>
    </div>
  );
}

export default Intro