import React from 'react'
import './project.css'

import pro1 from '../../assets/pro1.png'
import pro2 from '../../assets/pro2.png'
import pro3 from '../../assets/pro3.png'
import pro4 from '../../assets/pro4.png'

const Project = () => {
  const projects = [
    {
      name: 'Movie APP',
      imgSrc:pro1 ,
      alt: 'Photo about the movie app',
      demoLink: 'https://mohamedelshahat55.github.io/ngMovie/'
    },
    {
      name: 'CORSO',
      imgSrc:pro2  ,
      alt: 'Photo about the corso app',
      demoLink: 'https://corso-website-pied.vercel.app/',
      githubLink:'https://github.com/MohamedElshahat55/Corso-website'
    },
    {
      name: 'E-Book',
      imgSrc:pro3  ,
      alt: 'Photo about the E-book app',
      demoLink: 'https://ebook-website-4owstcdev-mohamed-elshahats-projects.vercel.app/',
      githubLink:'https://github.com/MohamedElshahat55/E-book-website.git'
    },
    {
      name: 'Explore Games',
      imgSrc:pro4  ,
      alt: 'Photo about the Explore Games',
      demoLink: 'https://mohamedelshahat55.github.io/Explore-Game/',
      // githubLink:'https://github.com/MohamedElshahat55/E-book-website.git'
    },
  ]

  return (
    <section id="project">
      <h5>Projects I have done</h5>
      <h2>My Projects</h2>

      <div className="container project__container">
        {projects.map((project, index) => (
          <article className="project__item" key={index}>
            <div className="project__item-image">
              <img src={project.imgSrc} alt={project.alt} />
            </div>
            <h3>{project.name}</h3>
            <div className="project__item-cta">
              <a href={project.demoLink} className="btn mx" target="_blank" rel="noopener noreferrer">
                Demo
              </a>
              {project.githubLink && (
                <a href={project.githubLink} className="btn btn-primary mx" target="_blank" rel="noopener noreferrer">
                  Github
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Project
