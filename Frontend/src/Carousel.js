import React from 'react'
import { Link } from 'react-router-dom'

export default function Carousel() {
  return (
    <>
      <div id="demo" className="carousel slide" data-ride="carousel">

        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>


        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/crs1.jpg" alt="crs1" />
          </div>
          <div className="carousel-item">
            <img src="/images/crs2.jpg" alt="crs2" />
          </div>
          <div className="carousel-item">
            <img src="/images/crs4.jpg" alt="crs3" />
          </div>
        </div>

        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
      <div className='category'>
        <img src="/images/category.webp" style={{width:"1300px",height:"100px"}}/>
      </div>
      
      <section className="gallery">
        <div className="container-lg">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-6">
            <div className="col">
              <img src="/images/ethnic.webp" className='gallery-item' alt="gallery"/>
            </div>
            <div className="col">
              <Link to="/casual">
              <img src="/images/casual.webp" className='gallery-item' alt="gallery"/>
              </Link>
            </div>
            <div className="col">
              <img src="/images/active.webp" className='gallery-item' alt="gallery"/>
            </div>
            <div className="col">
              <img src="/images/activewear.webp" className='gallery-item' alt="gallery"/>
            </div>
            <div className="col">
              <img src="/images/western.webp" className='gallery-item' alt="gallery"/>
            </div>
            <div className="col">
              <img src="/images/sports.webp" className='gallery-item' alt="gallery"/>
            </div>
            <div className="col">
              <img src="/images/kids.webp" className='gallery-item' alt="gallery"/>
            </div>
            <div className="col">
              <img src="/images/footwear.webp" className='gallery-item' alt="gallery"/>
            </div>
            <div className="col">
              <img src="/images/footfemale.webp" className='gallery-item' alt="gallery"/>
            </div>
            <div className="col">
              <img src="/images/belts.webp" className='gallery-item' alt="gallery"/>
            </div>
            <div className="col">
              <img src="/images/workwear.webp" className='gallery-item' alt="gallery"/>
            </div>
            <div className="col">
              <img src="/images/ethnic1.webp" className='gallery-item' alt="gallery"/>
            </div>
            <div className="col">
              <img src="/images/home.webp" className='gallery-item' alt="gallery"/>
            </div>
            <div className="col">
              <img src="/images/handbag.webp" className='gallery-item' alt="gallery"/>
            </div>
            <div className="col">
              <img src="/images/headphone.webp" className='gallery-item' alt="gallery"/>
            </div>
            <div className="col">
              <img src="/images/jewellery.webp" className='gallery-item' alt="gallery"/>
            </div>
            <div className="col">
              <img src="/images/curvy.webp" className='gallery-item' alt="gallery"/>
            </div>
            <div className="col">
              <img src="/images/size.webp" className='gallery-item' alt="gallery"/>
            </div>
            <div className="col">
              <img src="/images/smart.webp" className='gallery-item' alt="gallery"/>
            </div>
            <div className="col">
              <img src="/images/sleep.webp" className='gallery-item' alt="gallery"/>
            </div>
            <div className="col">
              <img src="/images/work.webp" className='gallery-item' alt="gallery"/>
            </div>
            <div className="col">
              <img src="/images/eye.webp" className='gallery-item' alt="gallery"/>
            </div>
            <div className="col">
              <img src="/images/casualwear.webp" className='gallery-item' alt="gallery"/>
            </div>
            <div className="col">
              <img src="/images/bags.webp" className='gallery-item' alt="gallery"/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
