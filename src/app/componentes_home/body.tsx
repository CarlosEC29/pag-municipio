"use client"
import React from 'react'
import Image from 'next/image'
import Hodwarts from './hodwarts.jpg'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Body = () => {
  return (
    <section>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <Image
          className="carrucel"
          src={Hodwarts}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Precentacion 1</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="carrucel"
          src={Hodwarts}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Precentacion 2</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="carrucel"
          src={Hodwarts}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Precentacion 3</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>

  )
}