import styled from 'styled-components';
import Marquee, { Motion, randomIntFromInterval } from 'react-marquee-slider';
import times from 'lodash/times';

//Skill images ../assets/skill-images/
import PHPlogo from '../assets/skill-images/php.png';
import ReactLogo from '../assets/skill-images/react.png'
import HTMLLogo from '../assets/skill-images/html.png';
import RubyLogo from '../assets/skill-images/ruby.png';
import CSSLogo from '../assets/skill-images/css.png';
import FigmaLogo from '../assets/skill-images/figma.png';
import JSLogo from '../assets/skill-images/js.png';
import LinuxLogo from '../assets/skill-images/linux.png';
import GitLogo from '../assets/skill-images/git.png';
import SqlLogo from '../assets/skill-images/my-sql.png';
import PostLogo from '../assets/skill-images/postgresql.png';
import WordpressLogo from '../assets/skill-images/wordpress.png';
import AdobeLogo from '../assets/skill-images/adobe.png';
//Skill Background
import Backer from '../assets/webskillback.png'

const Skills = () => {

  const icons = [
    PHPlogo,
    ReactLogo,
    HTMLLogo,
    RubyLogo,
    CSSLogo,
    FigmaLogo,
    JSLogo,
    LinuxLogo,
    PostLogo,
    GitLogo,
    SqlLogo,
    AdobeLogo,
    WordpressLogo,
    AdobeLogo

  ];

  return (
  <SkillContainer style={{height: "500px" }}>
  <Marquee velocity={50} minScale={0.7} resetAfterTries={200} scatterRandomly>
    {times(12, Number).map((id) => (
      <Motion
        key={`child-${id}`}
        initDeg={randomIntFromInterval(0, 360)}
        direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"}
        velocity={10}
        radius={50}
      >
      <Circle>
        <Logo src={icons[id]} alt=""/>
      </Circle>
      </Motion>
    ))}
  </Marquee>
</SkillContainer>
  )
}

const SkillContainer = styled.div`
  margin-top: 10px;
  margin-right: 5%;
  margin-left: 5%;
  background: url(${Backer}) no-repeat center;
  background-size: contain;
  border-radius: 20px 20px 20px 20px;
  padding-top:5%;
  padding-bottom:5%;
`

const Circle = styled.div`
  position: absolute;
  transform: scale(0.5);
  object-position: center center;
  will-change: transform, opacity;
  width:180px;
  height: 180px;
  border-radius: 50%;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1), 0 3px 10px rgba(0, 0, 0, 0.07);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  display: block;
  width: 80%;
  height: 80%;
`;

export default Skills