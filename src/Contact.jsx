// import React from 'react'
import { useState } from 'react';
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
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData({...data, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(data);
    }

    const [data, setData] = useState({name: '', email: '', subject: '', message: ''});

  return (
    <>
        <div className="contact flex mx-auto h-screen my-auto w-2/3 ">
            <div className="w-2/3 h-3/4 my-auto bg-white shadow-md p-12 pt-4">
                <div className="text-3xl mb-6">Get In Touch</div>
                <div className="form h-4/5 flex flex-row w-full">
                    <form onSubmit={handleSubmit} method="post" className="w-full">
                        <div className="flex flex-auto justify-between">

                            <input type="text" placeholder="Name" name="name" onChange={handleChange} value={data.name} className="input-field h-12 border border-gray-400 px-4 outline-mBlue bg-gray-100"/>

                            <input type="email" placeholder="Email" name="email" onChange={handleChange} value={data.email} className="input-field border border-gray-400 px-4 outline-mBlue bg-gray-100"/>
                        </div>

                        <div className="subject-input">

                            <input type="text" placeholder="Subject" name="subject" onChange={handleChange} value={data.subject} className="input-field w-full h-12 mt-4 border border-gray-400 px-4 outline-mBlue bg-gray-100"/>

                        </div>

                        <textarea name="message" id="message" cols="40" rows="10" onChange={handleChange} value={data.message} placeholder="message..." className="mt-4 border border-gray-400 w-full p-4 outline-mBlue bg-gray-100"></textarea>

                        <div className="mt-4">

                            <button className="py-3 hover:bg-sky-700 hover:text-white border-blue-950 transition ease-in  bg-mBlue text-white rounded-md px-4" type="submit">Send Message</button>

                        </div>

                    </form>
                </div>
            </div>
            <div className="contact-section w-1/2 h-4/5 my-auto bg-mBlue text-white p-8 rounded-sm leading-9 shadow-md">
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
