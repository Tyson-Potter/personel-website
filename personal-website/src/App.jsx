import React from 'react';
import './App.css';
import { FaEnvelope, FaGithub } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Tyson Potter</h1>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function About() {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <p>
        I am a software developer passionate about creating innovative programs to solve complex
        problems. My favorite thought is, "I wonder how that works." In addition to software
        development, I am also an IT professional specializing in cybersecurity, where I enjoy
        exploring how systems operate and finding ways to protect them.
      </p>
    </section>
  );
}

const projects = [
  {
    title: 'Full Stack Chess App',
    description: 'A full-stack chess application built using the MERN stack.',
    techStack: ['React', 'Express', 'MongoDB'],
    githubLink: 'https://github.com/Tyson-Potter/ChessProgram',
  },
  {
    title: 'Updating Firebase Course',
    description: 'An updated course on using Firebase with React.',
    techStack: ['React', 'Express', 'MongoDB', 'Firebase'],
    courseLink: 'https://www.udemy.com/course/learn-firebase/',
    githubLink: 'https://github.com/JaredPotter/firebase-core-with-react-v2',
  },

];

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <h4>Technology Stack</h4>
            <ul className="tech-stack">
              {project.techStack.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
            {project.courseLink && (
              <p>
                <strong>Course Link:</strong>{' '}
                <a href={project.courseLink} target="_blank" rel="noopener noreferrer">
                  {project.courseLink}
                </a>
              </p>
            )}
            <p>
              <strong>GitHub:</strong>{' '}
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                {project.githubLink}
              </a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer className="contact" id="contact">
      <h2>Contact Me</h2>
      <ul className="social-links">
        <li>
          <a href="mailto:tysonpottersd@gmail.com">
            <FaEnvelope /> tysonpottersd@gmail.com
          </a>
        </li>
        <li>
          <a href="https://github.com/Tyson-Potter" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub - Tyson-Potter
          </a>
        </li>
      </ul>
    </footer>
  );
}

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <About />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}

export default App;
