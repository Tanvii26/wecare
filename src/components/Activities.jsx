import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import data from "../assets/data.json"
const Activities = () => {
    return (

        <div>

            <div id='activities'>
                <h2>The Science</h2>
                <section>
                    <article>
                        <Carousel
                            showArrows={false}
                            showIndicators={false}
                            showStatus={false}
                            showThumbs={false}
                            interval={3000}
                            infiniteLoop={true}
                            autoPlay={true}
                        >
                            {
                                data.projects.map(i => (
                                    <div key={i.title} className='item'>
                                        <img src={i.imgSrc} alt={i.title}></img>
                                        <aside>
                                            <h3>{i.title}</h3>
                                            <p>{i.description}</p>
                                        </aside>
                                    </div>
                                ))
                            }
                        </Carousel>
                    </article>
                </section>
               
            </div>



            <div id='testimonial'>
                <h2>Testimonial</h2>
                <section>
                    <TestimonialCard
                        name={"Khushi"}
                        feedback={"WeCare gives the hope to handle my work stress. I've learned to outlook things more in a positive way."}
                    />
                    <TestimonialCard
                        name={"Tanvi"}
                        feedback={"I'm more positive and less stressed now. WeCare makes you comeback everytime to explore more of it."}
                    />
                    <TestimonialCard
                        name={"Gungun"}
                        feedback={"WeCare made me have an optimistic outlook towards anything and everything I have come across."}
                    />
                </section>
            </div>

        </div>




    )
}

const TestimonialCard = ({ name, feedback }) => (
    <article>
        <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="User"
        />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
);
export default Activities