import React from 'react'
import "./Carousel.css"
const Carousel = () => {
  return (
    <section id='carousel'>
      <div className="carousel__div">
      <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active carousel1">
      <img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control carouselPrev" aria-hidden="true">Prev</span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control" aria-hidden="true" className='carouselNext'>Next</span>
    <span class="visually-hidden">Next</span>
  </button>
  <div className="carousel__title">
    <h1>Get Your <span>Education</span> today!</h1>
  </div>
</div>
      </div>
    </section>
  )
}

export default Carousel
