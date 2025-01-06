
const Projects = () => {
  // Data for the projects
  const projects = [
    {
      title: 'ELectricity Billing System',
      description: 'It build using Java and MySQL',
      imageUrl: '/src/images/img1.jpg', // Placeholder image URL
      projectLink: '#', // Link to the project page
    },
    {
      title: 'Grocery App',
      description: 'It was build using Python Javascript and MySQL',
      imageUrl: '/src/images/img2.jpg', // Placeholder image URL
      projectLink: '#',
    },
    {
      title: 'Air Canvas',
      description: 'It was build using OpenCV numpy and panda',
      imageUrl: '/src/images/img3.jpg', // Placeholder image URL
      projectLink: '#',
    },
  ];

  return (
    <div className="projects-containerr">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-cards">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.projectLink} className="project-link">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
