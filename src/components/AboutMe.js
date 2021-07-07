import babyPicture from '../assets/baby-picture.png';
import '../styles/AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me-w" >
        <h1 className="about-me" data-aos="fade-up">About Michael</h1>
        <img className="baby-picture" src={babyPicture} data-aos="fade-up" />
        <p className="about-me-paragraph" data-aos="fade-up">New Changed Paragraph</p>
    </div>      
  );
}

export default AboutMe;
