import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { Link } from "react-router-dom";
import englishInMovement from "../assets/english_in_movement.jpg";

export default function EnglishInSportsAndMovementPage() {
  return (
    <div>
      <Header />

      <div className="container">
        {/* Top image (place it above the headline) */}
        <div style={{ marginTop: 16 }}>
          <img
            src={englishInMovement}
            alt="English in Sports and Movement"
            style={{
              width: "100%",
              maxHeight: 420,
              objectFit: "cover",
              borderRadius: 12,
              display: "block",
            }}
          />
        </div>

        <div className="section">
          <h1>English in Sports and Movement</h1>

          <p>
            <strong>English in Sports and Movement</strong> is a professional English
            training program for movement specialists who teach or coach in English:
            Pilates instructors, yoga teachers, fitness trainers, coaches,
            PE teachers, and other movement professionals working with
            international clients or groups.
          </p>

          <p>
            This course is not about general English or grammar exercises. It focuses on
            the <strong>exact language you need during real sessions</strong>: giving
            clear cues, correcting movement safely, coaching performance, managing groups,
            responding to pain or discomfort, and communicating with confidence as a
            professional.
          </p>

          <p>
            The program was created for Polish professionals who have at least{" "}
            <strong>basic communicative English</strong> (this is <strong>not</strong> a
            beginner course), but feel uncertain when they need to use English{" "}
            <em>precisely, naturally, and safely</em> in a sports and movement context.
          </p>

          <h2>What you will learn</h2>

          <p>
            During the course, you will build practical language skills that you can apply
            immediately in your sessions, including:
          </p>

          <ul>
            <li>
              Clear cueing for a wide range of situations: warm-ups, technique, mobility,
              strength, conditioning, cool-downs, and recovery
            </li>
            <li>
              Practical language for <strong>all key movement types</strong>, such as push/pull,
              hinge, squat, lunge, rotate, stabilize, balance, jump/land, gait patterns,
              breathing and bracing
            </li>
            <li>
              Body language that sounds natural in English:{" "}
              <strong>main body parts</strong> and landmarks (spine, pelvis, ribs, hips,
              knees, ankles, shoulders, scapulae, wrists, neck) + common alignment terms
            </li>
            <li>
              Instructor verbs and coaching phrases for real life, like set up, adjust, engage,
              reach, press, drive, shift, brace, lengthen, soften, release, reset, slow
              down, speed up, modify, regress/progress
            </li>
            <li>
              Language for range of motion, control, tempo, effort, intensity, and safe
              progression
            </li>
            <li>
              Professional ways to correct clients without sounding harsh, unclear, or
              overly apologetic
            </li>
            <li>
              How to talk about sensations and pain safely (what’s normal, what’s not, and
              how to respond)
            </li>
            <li>
              How to ask about injuries and limitations, collect relevant info, and adapt
              exercises appropriately
            </li>
            <li>
              Language for boundaries and consent: how to offer hands-on corrections, ask
              permission, and communicate what you can and can’t do as a professional
            </li>
            <li>How to run an entire session smoothly in English (start → finish)</li>
          </ul>

          <h2>How the course works</h2>

          <p>
            The course consists of <strong>12 hours of live training</strong>, delivered as{" "}
            <strong>6 sessions of 2 hours</strong> each. Sessions are run in{" "}
            <strong> very small groups (3–5 participants)</strong>, which allows for real
            speaking practice, individual feedback, and a safe environment to experiment
            with language.
          </p>

          <p>
            Each session combines practical vocabulary, real-life instructor phrases,
            typical mistakes made by Polish speakers, and guided speaking practice. Grammar
            is covered only when it directly supports clarity, professionalism, and safety
            in communication.
          </p>

          <h2>Who this course is for</h2>

          <ul>
            <li>Pilates instructors teaching private or group sessions in English</li>
            <li>Yoga teachers working with international or expat clients</li>
            <li>Fitness trainers coaching clients in English</li>
            <li>Sports coaches working with mixed-language groups or athletes</li>
            <li>PE teachers teaching classes in English or in international schools</li>
            <li>Movement professionals who want to communicate clearly and safely</li>
          </ul>

          <p>
            This course is especially valuable if you understand English well in everyday
            life, but hesitate when you need to <strong>give precise instructions</strong>,
            <strong> correct technique</strong>, manage a session dynamically, or handle
            <strong> pain and safety</strong> in English.
          </p>

          <h2>Why this course is different</h2>

          <p>
            English in Sports and Movement is built around real sessions, not classroom
            theory. Everything you learn is immediately usable on the mat, in the gym, in the field, or in the studio. The small-group format ensures that you don’t
            just listen, but actually <strong>practice speaking and get feedback</strong>.
          </p>

          <p>
            By the end of the course, you will teach with more confidence, sound more
            natural, and feel safer handling sensitive situations in English.
          </p>

     <h2>Pricing</h2>

          <p>
            This is a boutique, live training program designed for real speaking practice
            and individual feedback — not a passive video course.
          </p>

          <div
            style={{
              marginTop: 16,
              padding: 18,
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.16)",
              background: "linear-gradient(135deg, rgba(120,110,255,0.22), rgba(40,200,255,0.12))",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "baseline" }}>
              <div style={{ fontSize: 36, fontWeight: 800, lineHeight: 1 }}>
                990 PLN
              </div>
              <div style={{ opacity: 0.92 }}>
                total for the full program (12 hours live)
              </div>
            </div>

            <div style={{ marginTop: 10, opacity: 0.92 }}>
              <strong>Format:</strong> 6 × 2-hour live sessions • <strong>Group size:</strong> 3–5 people
            </div>

            <ul style={{ marginTop: 12, marginBottom: 0 }}>
              <li><strong>Intensive speaking practice</strong> (you don’t just listen — you speak)</li>
              <li><strong>Personal feedback</strong> on cueing, clarity, and “Polish-isms” in English</li>
              <li><strong>Safety language</strong> for pain/discomfort, modifications, and consent</li>
              <li><strong>Ready-to-use phrases</strong> you can apply immediately in your sessions</li>
            </ul>
          </div>

          <h3 style={{ marginTop: 20 }}>Next edition</h3>

          <p>
            The next in-person group edition starts in <strong>March</strong> and consists
            of <strong>6 sessions held over 6 consecutive weeks</strong>.
          </p>

          <div
            style={{
              marginTop: 20,
              padding: 22,
              borderRadius: 16,
              background: "linear-gradient(135deg, rgba(90,120,255,0.14), rgba(120,200,255,0.12))",
              border: "1px solid rgba(255,255,255,0.22)",
            }}
          >
            <h3 style={{ marginTop: 0, marginBottom: 6 }}>
              March 2026 group schedule · in person
            </h3>

            <div style={{ opacity: 0.9, marginBottom: 14 }}>
              📍 ulica Dobra, Powiśle, Warszawa
            </div>

            <div style={{ opacity: 0.9, marginBottom: 12 }}>
                 Choose <strong>one</strong> group:
            </div>

            <div
              style={{
                display: "flex",
                gap: 28,
                flexWrap: "wrap",
                marginBottom: 14,
              }}
            >
              <div>
                <div style={{ fontWeight: 600 }}>Tuesday</div>
                <div style={{ fontSize: 18 }}>12:00 pm</div>
              </div>

              <div>
                <div style={{ fontWeight: 600 }}>Thursday</div>
                <div style={{ fontSize: 18 }}>12:00 pm</div>
              </div>

              <div>
                <div style={{ fontWeight: 600 }}>Friday</div>
                <div style={{ fontSize: 18 }}>2:00 pm</div>
              </div>

              <div>
                <div style={{ fontWeight: 600 }}>Saturday</div>
                <div style={{ fontSize: 18 }}>10:00 am</div>
              </div>
            </div>

            <div style={{ opacity: 0.9 }}>
              6 consecutive weeks · 6 × 2-hour sessions
            </div>
          </div>


           <p style={{ marginTop: 16 }}>
             To sign up, please <strong>send me an email</strong> using the contact information below.
             I’ll get back to you with more details.
           </p>

          <p>
            If neither option works for you, you can also <strong>suggest a more convenient
            day and time</strong> — new groups may be opened depending on availability and
            interest.
          </p>

          <p style={{ marginTop: 18 }}>
            The course can also take place <strong>one-on-one online</strong>. This option
            is fully personalized and scheduled individually — pricing is agreed on a
            case-by-case basis.
          </p>



          <p style={{ marginTop: 24 }}>
            <Link to="/">← Back to home</Link>
          </p>
        </div>

        <Contact />
      </div>

      <Footer />
    </div>
  );
}
