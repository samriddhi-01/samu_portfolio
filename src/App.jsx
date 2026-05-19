import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const sectionTitle = {
    fontSize: "2.5rem",
    marginBottom: "40px",
    fontWeight: "700",
    color: "#00f5ff",
    letterSpacing: "1px",
    textShadow: "0 0 10px rgba(0,245,255,0.5)",
  };

  const glassCard = {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(0,255,255,0.15)",
    backdropFilter: "blur(14px)",
    borderRadius: "20px",
    padding: "30px",
    boxShadow: "0 0 25px rgba(0,255,255,0.08)",
    transition: "0.4s ease",
  };

  return (
    <div
      style={{
        background:
          "radial-gradient(circle at top left, #111827 0%, #050816 45%, #02030a 100%)",
        minHeight: "100vh",
        color: "white",
        fontFamily: "'Inter', sans-serif",
        overflowX: "hidden",
      }}
    >
      {/* BACKGROUND GLOW */}
      <div
        style={{
          position: "fixed",
          width: "500px",
          height: "500px",
          background: "rgba(0,255,255,0.08)",
          borderRadius: "50%",
          filter: "blur(120px)",
          top: "-120px",
          left: "-120px",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "fixed",
          width: "400px",
          height: "400px",
          background: "rgba(139,92,246,0.08)",
          borderRadius: "50%",
          filter: "blur(120px)",
          bottom: "-100px",
          right: "-100px",
          zIndex: 0,
        }}
      />

      {/* NAVBAR */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          padding: "22px",
          background: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {["home", "about", "skills", "projects", "contact"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            style={{
              color: "#d1d5db",
              textDecoration: "none",
              fontWeight: "600",
              textTransform: "uppercase",
              fontSize: "0.9rem",
              letterSpacing: "1px",
              transition: "0.3s",
            }}
            onMouseOver={(e) => {
              e.target.style.color = "#00f5ff";
            }}
            onMouseOut={(e) => {
              e.target.style.color = "#d1d5db";
            }}
          >
            {item}
          </a>
        ))}
      </nav>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* HERO */}
        <section
          id="home"
          style={{
            minHeight: "92vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              color: "#00f5ff",
              fontFamily: "'JetBrains Mono', monospace",
              marginBottom: "15px",
              letterSpacing: "1px",
            }}
          >
            &gt; SYSTEM INITIALIZED
          </p>

          <h1
            style={{
              fontSize: "5rem",
              lineHeight: "1",
              marginBottom: "20px",
              background:
                "linear-gradient(to right, #ffffff, #00f5ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "800",
            }}
          >
            Samriddhi
            <br />
            Niraula
          </h1>

          <h2
            style={{
              fontSize: "1.5rem",
              color: "#9ca3af",
              marginBottom: "30px",
              fontWeight: "400",
            }}
          >
            Cybersecurity Student • React Developer • Tech Enthusiast
          </h2>

          <p
            style={{
              maxWidth: "700px",
              color: "#cbd5e1",
              lineHeight: "1.9",
              fontSize: "1.05rem",
            }}
          >
            Passionate about cybersecurity, ethical hacking,
            networking, and modern web development. I enjoy
            building secure systems and creating futuristic
            digital experiences using modern technologies.
          </p>

          <div
            style={{
              marginTop: "40px",
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#projects"
              style={{
                padding: "15px 32px",
                borderRadius: "14px",
                background: "#00f5ff",
                color: "#000",
                fontWeight: "700",
                textDecoration: "none",
                boxShadow: "0 0 20px rgba(0,245,255,0.5)",
              }}
            >
              View Projects
            </a>

            <a
              href="#contact"
              style={{
                padding: "15px 32px",
                borderRadius: "14px",
                border: "1px solid rgba(0,245,255,0.5)",
                color: "#00f5ff",
                textDecoration: "none",
                fontWeight: "700",
              }}
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" style={{ padding: "100px 0" }}>
          <h2 style={sectionTitle}>ABOUT ME</h2>

          <div style={glassCard}>
            <p
              style={{
                color: "#d1d5db",
                lineHeight: "2",
                fontSize: "1.05rem",
              }}
            >
              I am a BSc Cybersecurity student at Herald College
              Kathmandu with a strong interest in penetration
              testing, cloud systems, secure networking, and
              modern web technologies. I enjoy solving technical
              challenges, learning emerging technologies, and
              building responsive web applications with modern UI
              design principles.
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" style={{ padding: "100px 0" }}>
          <h2 style={sectionTitle}>TECH STACK</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(220px,1fr))",
              gap: "25px",
            }}
          >
            {[
              "HTML & CSS",
              "JavaScript",
              "React",
              "Python",
              "Git & GitHub",
              "PHP",
              "C++",
              "Networking",
              "Cybersecurity",
              "Linux",
            ].map((skill) => (
              <div
                key={skill}
                style={{
                  ...glassCard,
                  textAlign: "center",
                  fontWeight: "600",
                  fontSize: "1.1rem",
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" style={{ padding: "100px 0" }}>
          <h2 style={sectionTitle}>PROJECTS</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(320px,1fr))",
              gap: "30px",
            }}
          >
            <div style={glassCard}>
              <p
                style={{
                  color: "#00f5ff",
                  marginBottom: "10px",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                PROJECT_01
              </p>

              <h3
                style={{
                  marginBottom: "15px",
                  fontSize: "1.5rem",
                }}
              >
                Weather Web App
              </h3>

              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: "1.8",
                }}
              >
                Built a responsive weather forecasting web
                application using OpenWeatherMap API, PHP,
                MySQL, and localStorage caching support.
              </p>
            </div>

            <div style={glassCard}>
              <p
                style={{
                  color: "#00f5ff",
                  marginBottom: "10px",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                PROJECT_02
              </p>

              <h3
                style={{
                  marginBottom: "15px",
                  fontSize: "1.5rem",
                }}
              >
                Cybersecurity Simulation
              </h3>

              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: "1.8",
                }}
              >
                Developed a 3D cybersecurity simulation focused
                on attack-defense scenarios and secure network
                environments.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{ padding: "100px 0" }}>
          <h2 style={sectionTitle}>CONTACT</h2>

          <div style={glassCard}>
            <p
              style={{
                marginBottom: "18px",
                color: "#d1d5db",
                fontSize: "1.05rem",
              }}
            >
              📧 np03cy4s250012@heraldcollege.edu.np
            </p>

            <p
              style={{
                marginBottom: "18px",
                color: "#d1d5db",
                fontSize: "1.05rem",
              }}
            >
              💻 github.com/samriddhi-01
            </p>

            <p
              style={{
                color: "#d1d5db",
                fontSize: "1.05rem",
              }}
            >
              📍 Kathmandu, Nepal
            </p>
          </div>
        </section>
      </div>
    </div>
  );


export default App;