import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div>
            <h2 className='text-4xl md:text-5xl'data-aos="zoom-in-up">Technologies I Work With</h2>
            <p className='text-pink-800 pt-2' data-aos="zoom-in-up">
                I have a Solid Foundation in Web development, Specializing in HTML , CSS and Javascript. My experiences extends to using frameworks like React and Next.js to make dynamic and user friendly applications. I am also proficient in Tailwind CSS to effecient styling and design.With a passion for learning,I stay updated on the latest technologies to enhance my skill sets and contribute effectively to projects.
            </p>
        </div>
        <div>
            <div className='grid grid-cols-2  text-3xl sm:text-4xl'>
                <div className='space-y-2'>
                    <h2 data-aos="zoom-in-up">Typescript</h2>
                    <h2 data-aos="zoom-in-up">Javascript</h2>
                    <h2 data-aos="zoom-in-up">Next.Js</h2>
                </div>
                <div className='space-y-2'>
                    <h2 data-aos="zoom-in-up">HTML</h2>
                    <h2 data-aos="zoom-in-up">CSS</h2>
                    <h2 data-aos="zoom-in-up">Node.Js</h2>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
