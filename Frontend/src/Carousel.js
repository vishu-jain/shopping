import React from 'react'

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
    <img src="/images/crs1.jpg" alt="crs1"/>
  </div>
  <div className="carousel-item">
    <img src="/images/crs2.jpg" alt="crs2"/>
  </div>
  <div className="carousel-item">
    <img src="/images/crs4.jpg" alt="crs3"/>
  </div>
</div>

<a className="carousel-control-prev" href="#demo" data-slide="prev">
  <span className="carousel-control-prev-icon"></span>
</a>
<a className="carousel-control-next" href="#demo" data-slide="next">
  <span className="carousel-control-next-icon"></span>
</a>

</div>
    </>
  )
}
