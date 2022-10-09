import React from 'react'

export default function Footer() {
  return (
    <div className='footer-container' id="footer">
        <div>
            <h4 className='footer-title'>Available for freelance</h4>
            <p>Have an existing project that you need help with?</p><br />
            <p>Have a copletely new software idea?</p><br />
            <p>Send me an email or contact me on LinkedIn</p>
        </div>
        <div className='footer-contact-container'>
            <p className='footer-contact'><a className="footer-link"href='mailto:samhodgkinson9192@gmail.com'>Email</a></p>
            <p className='footer-contact'><a className="footer-link"href="https://www.linkedin.com/in/sam-hodgkinson9192/">LinkedIn</a></p>
            <p className='footer-contact'><a className="footer-link"href='https://github.com/SamHodg1993'>Github</a></p>
        </div>
    </div>
  )
}

