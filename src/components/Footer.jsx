import React from 'react'
import imag from '../assets/logo.png'
import { AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
        <div>
            <img src={imag} alt="WeCare"/>
            <h2>WeCare</h2>
            <p>You are important!!</p>
        </div>

    <aside>
        <h2>Find Us</h2>
        <article>
            <a href='https://www.instagram.com/' target={"blank"}>
                <AiFillInstagram></AiFillInstagram>
            </a>

            <a href='https://twitter.com/' target={"blank"}>
                <AiFillTwitterSquare></AiFillTwitterSquare>
            </a>

            <a href='https://in.linkedin.com/' target={"blank"}>
                <AiFillLinkedin></AiFillLinkedin>
            </a>
        </article>
    </aside>
    
    </footer>
  )
}

export default Footer