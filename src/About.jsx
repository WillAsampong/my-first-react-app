// import React from 'react'

const About = () => {
  return (
    <div>
      <div className="about ">
        <div className="p-8">
          <div className="heading mb-6">
              <h3 className="text-5xl mb-2 font-bold">About Us</h3>
              <div className="underline border-2 w-20 border-mBlue"></div>
          </div>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, recusandae?</p> */}
          <div className="about-us text-black w-auto flex">
              <img src="/src/assets/about3.jpg" alt="" className="w-1/2"/>
              <div className="about-p w-1/3 m-auto leading-7 text-lg">
                  <h6 className="text-mBlue mb-4 font-bold leading-10">Lorem ipsum dolor sit amet.</h6>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem obcaecati itaque ipsum quidem maiores dolorem a et neque nesciunt accusamus odit, soluta corporis accusantium corrupti quam qui beatae quos amet iste officia sapiente porro eaque asperiores. Aperiam dolore ea minima.</p>
                  <div className="readMore-btn mt-4">
                    <button className="py-2 hover:bg-white hover:text-mBlue border-mBlue border-2 transition ease-in  bg-mBlue text-white px-4" type="submit">Read More</button>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
