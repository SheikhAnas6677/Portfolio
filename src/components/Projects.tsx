import React from 'react'
import Heading from './Heading'
import Cards from './Cards'

const data=[
  {
    id:0,
    title: "Periodic Table",
    desc:"Periodic Table of Elements Made With HTML And CSS",
    img:"/table.jpg",
    tags: ["HTML", "CSS"],
  },
  {
    id:1,
    title: "Practice Website",
    desc:"Practice website Made With HTML And CSS",
    img:"/practice website1.jpg",
    tags:["HTML", "CSS"],
  },
  {
    id:2,
    title: "Sample website",
    desc:"Practice website Made With HTML And CSS",
    img:"/panacloud b1.jpg",
    tags:["HTML", "CSS"],
  },
  {
    id:3,
    title: "Static Interactive Resume",
    desc:"Static Interactive Resume Made With HTML,CSS ,TYPESCRIPT And JAVASCRIPT",
    img:"/resume.jpeg",
    tags:["HTML", "CSS", "TYPESCRIPT", "JAVASCRIPT", "NODE.JS"],
  },
  {
    id:4,
    title: "Dynamic Resume Builder",
    desc:"Dynamic Resume Builder Made With HTML,CSS ,TYPESCRIPT And JAVASCRIPT",
    img:"/dynamic resume.jpeg",
    tags:["HTML", "CSS", "TYPESCRIPT", "JAVASCRIPT", "NODE.JS"],
  },
  {
    id:5,
    title: "Dynamic Routing Country List",
    desc:"Dynamic Routing App Made With HTML,CSS,TYPESCRIPT, JAVASCRIPT And Next Js",
    img:"/dynamic Routing.png",
    tags:["HTML", "CSS", "NEXT.JS","TYPESCRIPT", "JAVASCRIPT", "NODE.JS"]
  },
  {
    id:6,
    title: "Cards",
    desc:" Beautiful Cards Made With HTML And CSS",
    img:"/cards.jpeg",
    tags:["HTML", "CSS"],
  },
  {
    id:7,
    title: "Static Website",
    desc:"Panacloud Website Made With HTML And CSS",
    img:"/panacloud.jpeg",
    tags:["HTML", "CSS"],
  },

]



const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects'/>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Cards
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects
