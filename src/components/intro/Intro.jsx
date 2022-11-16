import "./intro.scss"
import { init } from "ityped"
import { useEffect, useRef } from "react"

const Intro = () => {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        'Full Stack Software Developer',
        'UI/UX Designer',
        'Major Computer Nerd',
        'Problem Solver',
        'Loving Father'
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h1 className="i-intro">Hello, my name is</h1>
          <h2 className="i-name">David Wendt</h2>
          <div className="i-title">
            <span className="i-title-item" ref={textRef}></span>
          </div>
          <p className="i-desc">
            I am a detail oriented software developer focusing on finding
            elegant solutions to technical problems.
          </p>
          <div className="i-links">
            <a
              href="https://www.linkedin.com/in/david-wendt"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/assets/img/linkedin.png" alt="LinkedIn" className="i-logo" />
            </a>
            <a
              href="https://www.github.com/davidwendtNJIT"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/assets/img/github.png"
                alt="GitHub"
                className="i-logo"
              />
            </a>
            <a
              href="https://www.facebook.com/dave.wendt.1"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/assets/img/facebook.png" alt="Facebook" className="i-logo" />
            </a>
            <a
              href="https://twitter.com/dave_wendt24"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/assets/img/twitter.png" alt="Twitter" className="i-logo" />
            </a>
          </div>
        </div>
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              strokeWidth="2.9895"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src="/assets/img/portfolio_solo_bw_resized.png" alt="David" className="i-img" />
      </div>
    </div>
  );
}

export default Intro