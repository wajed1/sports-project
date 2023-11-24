import Header2 from '../components/Header2';
import StoryImage from '../images/about5.jpg'
import VisionImage from '../images/about4.jpg'
import MissionImage from '../images/about7.avif'
import image from '../images/headerimg2.avif'
import './About.css';

const About = () => {
  return (
    <>
    <Header2 className="headerimg" title="" image={image} >

    </Header2>

    <section className='slogan'>
      <div className='slogancontainer'>
<div className='slogancontent'>
  <h2>
     Harvesting Goodness, One Veggie at a Time!</h2>
</div>
      </div>
    </section>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our Story Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>In the heart of a vibrant city, a group of friends passionate about healthy living envisioned a vegetable-selling website that would bridge the gap between local farmers and consumers. With a commitment to simplicity and freshness, they meticulously designed a user-friendly platform, partnering directly with farmers to ensure the highest quality produce.</p><p>
          The website, built with modern technologies, offered customers an intuitive shopping experience and a direct connection to the source of their food. As the virtual shelves filled with colorful vegetables, the website's launch marked the beginning of a community dedicated to supporting local agriculture. With each season, the platform grew, introducing innovative features and fostering a sense of shared values.
       The vegetable-selling website became more than just an e-commerce venture; it became a thriving hub, connecting individuals with the goodness of fresh, locally sourced vegetables.
      </p>
        </div>
      </div>
    </section>

    <section className="about__Vision">
      <div className="container about__Vision-container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>To be the top online hub for fresh, local vegetables—promoting health, supporting farmers, and pioneering a sustainable, accessible food future.</p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Our Vision Image" />
        </div>
      </div>
    </section>

    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Our Mission Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>To empower individuals and communities to embrace a healthier lifestyle by providing fresh, sustainably sourced, and locally grown vegetables through a convenient and user-friendly online platform. </p>
          <p>We strive to connect farmers directly with consumers, fostering a transparent and ethical food supply chain while promoting the benefits of a plant-centric diet.</p>
        </div>
      </div>
    </section>


    </>
  )
}

export default About