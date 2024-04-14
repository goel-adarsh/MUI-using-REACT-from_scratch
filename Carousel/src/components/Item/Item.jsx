import mariaImg from '../../assets/maria.jpg';
import './Item.css';

import content from '../../content';

export default function Item({
  currentSlide,
  setCurrentSlide,
  clickLeftArrowSlider,
  clickRightArrowSlider,
}) {
  content.map((obj, index) => {
    console.log(obj, index);
  });
  return (
    <>
      <div className="carousel">
        <img src={mariaImg} alt="Maria de Almeida" />
        <blockquote className="testimonial">
          <p className="testimonial-text">{content[currentSlide].text}</p>
          <p className="testimonial-author">{content[currentSlide].author}</p>
          <p className="testimonial-designation">
            {content[currentSlide].designation}
          </p>
        </blockquote>
        <button className="btn btn-left" onClick={clickLeftArrowSlider}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="btn-icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button className="btn btn-right" onClick={clickRightArrowSlider}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="btn-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <ul className="dots">
          {content.map((obj, index) => (
            // <li className="dots">
            <button
              className={`dot ${currentSlide === index ? 'dot-fill' : ''}`}
              onClick={() => setCurrentSlide(index)}
            >
              &nbsp;
            </button>
            // </li>
          ))}
        </ul>
      </div>
    </>
  );
}
