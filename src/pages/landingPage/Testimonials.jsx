import React from "react";
import sarah from "../../assets/hero-section/sarah.svg";
import jon from "../../assets/hero-section/jon.svg";
import emily from "../../assets/hero-section/emily.svg";
import star from "../../assets/hero-section/star.svg";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      content:
        "Finding the right hospital has never been easier! With this website, I was able to locate a nearby hospital quickly and efficiently. The search feature is user-friendly, and it provided me with all the essential information I needed. Highly recommended!",
      star: 3,
      name: "Sarah M.",

      img: sarah,
    },
    {
      id: 2,
      content:
        "I can’t express how grateful i am for carefinder website. When i needed urgent medical care while travelling, it helped me locate the nearest hospital in a matter of  seconds. The accurate results and detailed directions saved me valuable time and ensured i received the care i needed",
      star: 4,
      name: "John L.",
      img: jon,
    },
    {
      id: 3,
      content:
        "I recently moved to a new city and had no idea where to go for medical assistance, my friend shared me some hospital details using the carefinder website. It made my life easier, I was able to fine reputable hospitals near me effortlessly. The website’s user friendly interface and comprehnsive search gave me peace of mind. I highly recommend.",
      star: 4,
      name: "Emily T.",
      img: emily,
    },
    {
      id: 4,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  ",
      star: 5,
      name: "Jaime L.",
      img: jon,
    },
  ];
  return (
    <div className="ReviewContainer ">
      <h1>
        Testimonials
      </h1>
      <h2>
        What Our Users Say
      </h2>
      <div className="carousel">
        <div className="carousel-inner">
          {testimonials.map((testimonial) => (
            <div className="testimonial Review">
              <p className="">
                {testimonial.content}
              </p>
              <div className="rank">
                {Array.from({ length: testimonial.star }).map((_, index) => (
                  <img
                    key={index}
                    src={star}
                    alt=""
                    className="star] "
                  />
                ))}
              </div>
              <div className="BottomRank">
                <img src={testimonial.img} alt="" className="rounded-full" />
                <h4 className="text-sm font-medium">{testimonial.name} </h4>
              </div>
            </div>
          ))}
          {testimonials.map((testimonial) => (
            <div className="testimonial Review">
              <p>
                {testimonial.content}
              </p>
              <div className="rank">
                {Array.from({ length: testimonial.star }).map((_, index) => (
                  <img
                    key={index}
                    src={star}
                    alt=""
                    className="star"
                  />
                ))}
              </div>
              <div className="BottomRank">
                <img src={testimonial.img} alt="" className="rounded-full" />
                <h4 className="text-sm font-medium">{testimonial.name} </h4>
              </div>
            </div>
          ))}
          {testimonials.map((testimonial) => (
            <div className="testimonial Review">
              <p className="">
                {testimonial.content}
              </p>
              <div className="rank">
                {Array.from({ length: testimonial.star }).map((_, index) => (
                  <img
                    key={index}
                    src={star}
                    alt=""
                    className="star"
                  />
                ))}
              </div>
              <div className="BottomRank">
                <img src={testimonial.img} alt="" className="rounded-full" />
                <h4 className="text-sm font-medium">{testimonial.name} </h4>
              </div>
            </div>
          ))}
          {testimonials.map((testimonial) => (
            <div className="testimonial Review">
              <p className="text-xs text-justify font-medium h-[20vh]">
                {testimonial.content}
              </p>
              <div className="rank">
                {Array.from({ length: testimonial.star }).map((_, index) => (
                  <img
                    key={index}
                    src={star}
                    alt=""
                    className="star"
                  />
                ))}
              </div>
              <div className="BottomRank">
                <img src={testimonial.img} alt="" className="rounded-full" />
                <h4 className="text-sm font-medium">{testimonial.name} </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
