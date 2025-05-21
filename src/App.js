import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <h1 className="logo">Santhiya MSK</h1>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h2>Santhiya MSK</h2>
        <p>
          Pre-final year undergraduate student in Artificial Intelligence and Data Science<br />
          at Anna University, Regional Campus Coimbatore.
        </p>
        <p>
          Driven by curiosity and creativity, I build intelligent systems that make life simpler and smarter.
        </p>
      </header>

      {/* About Me */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am Santhiya, a passionate student pursuing a degree in Artificial Intelligence and Data Science.
          My academic journey at Anna University has empowered me to explore the exciting world of AI, machine learning,
          and data analytics. I enjoy building practical solutions using technology and continuously seek opportunities
          to grow both technically and creatively.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section colored">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>Python, JavaScript</li>
          <li>React.js, Node.js</li>
          <li>Machine Learning, Deep Learning</li>
          <li>Data Analysis</li>
          <li>SQL, MongoDB</li>
          <li>Java, C</li>
        </ul>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <h2>Work Experience</h2>
        <div className="experience-card">
          <h3>Java Intern - SkyPark ITech</h3>
          <p><em>Aug 2024 - Sep 2024</em></p>
          <p>
            Designed and implemented a robust Student Management System using Java. The application supported core features such as student enrollment, data entry, attendance tracking, and academic record management. Employed object-oriented programming principles to ensure modularity and scalability. Integrated file handling and database connectivity for persistent data storage and retrieval.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section colored">
        <h2>Projects</h2>
        <ul>
          <li><strong>Sleep Tracking App</strong> – A mobile app to log sleep data, visualize patterns, and set reminders using SQLite and custom UI.</li>
          <li><strong>SQL Attack Detection</strong> – An LSTM-based model to detect SQL injection attacks from web request data with high accuracy.</li>
          <li><strong>DeepFake Detection</strong> – a deep learning model using CNN to identify manipulated facial videos and detect deepfakes with high accuracy.</li>
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:santhiyamsk02@gmail.com">Gmail</a></p>
        <p>
          LinkedIn: <a href="https://www.linkedin.com/in/santhiya-s-4565ab2a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
            linkedin.com/in/santhiya
          </a>
        </p>
      </section>
    </div>
  );
}

export default App;
