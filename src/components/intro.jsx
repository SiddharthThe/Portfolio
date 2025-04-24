import introImg from "../assets/pic-1.jpg";
import PersonIcon from '@mui/icons-material/Person';
import TranslateIcon from '@mui/icons-material/Translate';
import PlaceIcon from '@mui/icons-material/Place';
import "../styles/intro.css"

const Intro = () => {
  return (
    <div id='intro' className='intro'>
        
        <div  className='intro-text'>
            <p>Hi,</p>
            <h2>I'm Siddharth Vhatkar</h2>
            <h3>React Developer | Mobile App Developer (React-Native)</h3>
        </div>
        <div className="about-me-right">
          <div className="about-me-details">
            <div className="about-me-detail">
              <span className="about-me-text">
                <PersonIcon className="icon"/> 19 years
              </span>
            </div>
            <div className="about-me-detail">
              <span className="about-me-text">
                <TranslateIcon className="icon"/> English, Marathi, Hindi
              </span>
            </div>
            <div className="about-me-detail">
              <span className="about-me-text">
               <PlaceIcon className="icon"/> Kolhapur, Maharashtra, India
              </span>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Intro;


