import "./about.css"
import me from "../../img/me_coding_bw.png"

const About = () => {
  return (
    <div className="about">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={me} alt="David" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-quote">
          <em>“The function of good software is to make the complex appear to be
          simple”</em>  -Grady Booch.
        </p>
        <p className="a-desc">
          My background on paper is far from technical, and is composed all of
          hospitality industry experience since I was 16 years old, but I have
          always been a huge technology computer nerd. I have always excelled in
          my professions, and have always strived to be better and better. I
          have moved up in every aspect of the hospitality industry that has
          been available to me. I have been in a General Management position for
          12 years, but now I am ready to switch career paths and do something
          that I know that I was destined to do, Software Development!
        </p>
        <p className="a-desc">
          I spend my free time just toying around and breaking code. I like to
          "poke at things" to see how they work. I am a firm believer in
          knowing that things just need to be broken down, researched, dissected
          again, and analyzed. I have no construction in my background, but I
          just remodeled my bathroom myself. Get in there, try your best, figure it
          out, do some research, and proceed in an intelligent manner. You are
          capable of much more than you realize. This is how I live my life, and
          how I have really learned how to approach coding. If I don't
          understand something, I can always learn it. I can dig deep, read up
          on concepts and conventions, look at examples of working code and
          analyze how it is constructed.
        </p>
        <p className="a-desc">
          I am very much looking forward to being able to bring my positive
          outlook and mentality to a company that will help me help them in the
          best way that I can. I am a dedicated individual who has the ability
          to multitask, yet really focus on a dedicated task in order to meet a
          deadline. I ask concise questions when necessary, work well with
          others, and have the experience leading others.
        </p>
      </div>
    </div>
  );
}

export default About