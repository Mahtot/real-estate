// Services.js
import React from 'react'
import '../assets/css/services.css'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';


const Services = () => {
  const services = {
    head: 'Our Services',
    story: "At HomeHive, we offer a comprehensive range of services tailored to meet the diverse needs of our clients. Whether you're buying, selling, renting, or investing in real estate, we're here to help you every step of the way."
  }

  const whyChooseUs = [
    {
      title: 'Expertise and Experience',
      description: 'Our team of seasoned professionals brings years of experience and in-depth market knowledge to every transaction'
    },
    {
      title: 'Personalized Service',
      description: 'We understand that every client is unique, which is why we offer personalized service tailored to your specific needs and goals.'
    },
    {
      title: 'Comprehensive Support',
      description: 'From initial consultation to closing, we provide comprehensive support and guidance every step of the way.'
    }
  ]

  const getStartedText = 'Ready to Get Started?\nContact us today to learn more about our services and how we can help you achieve your real estate goals. We look forward to hearing from you!'

  return (
    <>
      <div className="services-container">
        <div className="services-header">
          <h2>{services.head}</h2>
        </div>
        <div className="services-story">
          <p>{services.story}</p>
        </div>
        <div className="services-list">
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-home"></i>
            </div>
            <h3>Buying</h3>
            <p>We'll help you find your dream home, negotiate the best deal, and guide you through the entire buying process.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-tag"></i>
            </div>
            <h3>Selling</h3>
            <p>Our experienced agents will create a tailored marketing strategy to showcase your property and attract the right buyers.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-money-bill-alt"></i>
            </div>
            <h3>Renting</h3>
            <p>Whether you're a landlord or a tenant, we'll help you navigate the rental market and ensure a smooth transaction.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>Investing</h3>
            <p>Our team of experts will help you identify lucrative investment opportunities and provide guidance throughout the process.</p>
          </div>
        </div>
      </div>

      <div className="why-choose-us-container">
        <div className="why-choose-us-header">
          <h2>Why Choose Us?</h2>
        </div>
        <div className="why-choose-us-list">
          {whyChooseUs.map((item, index) => (
            <div className="why-choose-us-card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="get-started-container">
        <div className="get-started-text">
          <p>{getStartedText}</p>
        </div>
          <Link to='/contact'  className="get-started-button">Contact Us</Link>
      </div>
      <Footer />
    </>
  )
}

export default Services
