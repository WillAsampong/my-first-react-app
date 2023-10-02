// import React from 'react'
// import { IoLocationSharp } from 'react-icons/io5';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { FaSquareTwitter } from 'react-icons/fa6';
import { AiFillLinkedin } from 'react-icons/ai';

const Contact = () => {
  return (
    <>
        <div className="contact flex mx-auto h-screen my-auto w-2/3 ">
            <div className="w-2/3 h-3/4 my-auto bg-white shadow-2xl p-12 pt-4">
                <div className="text-3xl mb-6">Get In Touch</div>
                <div className="form h-4/5 flex flex-row w-full">
                    <form action="" className="w-full">
                        <div className="flex flex-auto justify-between">
                            <input type="text" placeholder="Name" className="input-field form-input h-12"/>
                            <input type="email" placeholder="Email" className="input-field"/>
                        </div>
                        <div className="subject-input">
                            <input type="text" placeholder="Subject" className="input-field w-full h-12 mt-4"/>
                        </div>
                        <textarea name="message" id="message" cols="40" rows="10" placeholder="message..." className="mt-6"></textarea>
                        <div className="">
                            <button>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="contact-section w-1/2 h-4/5 my-auto bg-blue text-white p-8 rounded-sm leading-9 shadow-2xl">
                <div className="text-3xl">Contact Us</div>
                <div className="py-9">
                    <div className="address-contact py-4">
                        <p>
                        <FontAwesomeIcon className="fa-xl mr-4 p-2" icon={faLocationDot} />
                            <span>Address: </span>
                            198 West 21st Street Suite 721 Adenta
                        </p>
                    </div>
                    <div className="phone-contact py-4">
                        <p>
                        <FontAwesomeIcon className="fa-xl mr-4 p-2" icon={faPhone} />
                            <span>Phone: </span>
                            +1235 2355 98
                        </p>
                    </div>
                    <div className="email-contact py-4">
                        <p>
                        <FontAwesomeIcon className="fa-xl mr-4 p-2 border-none" icon={faPaperPlane} />
                            <span>Email: </span>
                            mypage@gmail.com
                        </p>
                    </div>
                </div>
                <div className="social-media py-8">
                    <div className="social-heading text-2xl">Socials</div>
                    <div className="mt-5 flex">
                        <FaGithub className="mr-4 text-2xl"/>
                        <FaFacebook className="mr-4 text-2xl"/>
                        <GrInstagram className="mr-4 text-2xl"/>
                        <FaSquareTwitter className="mr-4 text-2xl"/>
                        <AiFillLinkedin className="mr-4 text-2xl"/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact
