import React, {useRef,useState, useEffect} from 'react'
import './Testimonials.css'
import t1 from '../../assets/t1.jpeg'
import t2 from '../../assets/t2.jpeg'
import t3 from '../../assets/t3.jpeg'
import t4 from '../../assets/t4.png'
import t5 from '../../assets/t5.png'
import t6 from '../../assets/t6.jpeg'


const Testimonials = () => {


  const testimonials = [
  {
    name: 'Happy Client',
    image: t1,
    text: 'It’s a pleasure to work with people who know the meaning of quality and efficiency.',
  },
  {
    name: 'Happy Client',
    image: t2,
    text: 'Because of my association with Monitrix, I have been able to grow in my personal and professional life.',
  },
  {
    name: 'Happy Client',
    image: t3,
    text: 'I\'ve been a Monitrix Client for the past 6-7 years. They are the only brand I rely on.',
  },
    {
    name: 'Happy Client',
    image: t4,
    text: 'Very responsive and polite. Their expertise in tax planning is commendable!',
  },
    {
    name: 'Happy Client',
    image: t5,
    text: 'Smooth provide an excellent service—professional, knowledgeable, and always responsive.',
  },
    {
    name: 'Happy Client',
    image: t6,
    text: 'I had a great experience with Monitrix. The service was quick, and the billing was transparent.',
  },
];
  
  const carouselRef = useRef();

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -200, // adjust scroll amount
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 200, // adjust scroll amount
      behavior: 'smooth'
    });
  }
    const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

 
  return (

    <div className='clients'>
      <div className="clients-header">
      <h1 className='clients-heading'>Client Testimonials</h1>
      <p>Read Our Valued Client's Testimonials</p>
      </div>
      <div className="carousel-container">
        <button className="carousel-btn left" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="carousel-slide">
        {testimonials.map((item, index) => (
          <div
            className={`carousel-item ${index === current ? 'active' : ''}`}
            key={index}
          >
            <img src={item.image} />
            <h3>{item.name}</h3>
            <p className="text">{item.text}</p>
          </div>
        ))}
      </div>
      <button className="carousel-btn right" onClick={nextSlide}>
        &#10095;
      </button>
        
      </div>

    </div>
  )

}

export default Testimonials