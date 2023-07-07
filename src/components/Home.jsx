import React from 'react'
import Typewriter from 'typewriter-effect'
import first from '../assets/img.png'
import { BsChevronDown } from 'react-icons/bs'
// import { motion } from 'framer-motion'
const Home = () => {
  return (
    <div id='home'>
      <section>
        <div>

        <div>
          <Typewriter options={{
            strings: ["Believe", "Care", "Love Yourself!"],
            autoStart: true,
            loop: true,
            cursor: "",
            wrapperClassName: "typewriterparam",
          }}></Typewriter>

        </div>
        <div>
          <aside>
            <article>
              <p>Be the master of your mind!</p>
              <span>Take time to care for yourself because how you feel matters. A little science, a little optimisim towards better and stronger self. Find within you all what you seek  for outside. </span>
            </article>
          </aside>
        </div>
      </div>
      </section>


      <section>
        <img src={first} alt="Acceptance is the key" />
      </section>
      <BsChevronDown />
    </div>
  )
}

export default Home