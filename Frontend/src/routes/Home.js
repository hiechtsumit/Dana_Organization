import Navbar from "../common/Navbar";
import { NavLink } from "react-router-dom";
import "../assets/css/home.css";
// import director from '../../assets/image/Director/IMG_20230111_145500_063.jpg';
import director1 from "../assets/image/Director/profile-subrata.jpeg";
import director2 from "../assets/image/Director/profile-srimanta.jpeg";
import Footer from "../common/Footer";
import Misson from "../Component/home/misson";
import Vision from "../Component/home/vision";
import { programs } from "../utils/program-const";
const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="home">
          <div className="home-div">
            <h1 className="heading-1">Together we can</h1>
            <h2 className="heading-2">Save lives</h2>
            <div className="home-paragraph">
              <p>
                &ldquo;There is no higher virtue than charity. The lowest man is
                he whose hand draws in, in receiving; and he is the highest man
                whose hand goes out in giving. The hand was made to give always.
                Give the last bit of bread you have even if you are starving.
                You will be free in a moment if you starve yourself to death by
                giving to another. Immediately you will be perfect, you will
                become God.&rdquo;
              </p>
            </div>
            <p className="home-dialogue-speaker">- Swami Vivekananda</p>
            <NavLink to="/programs" className="remove-navlink-style">
              <div className="explore-program-div">
                <div className="explore-program">Explore Programs</div>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="upcoming-program">
          <h1 className="gd-back-head">Upcoming Programs</h1>
          <div className="upcoming-program-div">
            <div className="moving-border">
              <h2>
                &ldquo;Bite the Hunger off&rdquo;
                {/* Let&apos;s <br />{" "}
                <span className="program-tagline">
                  &ldquo;upgrate Future&rdquo;
                </span> */}
              </h2>
              <h3>15th August, 2024</h3>
              <p>Food Donation</p>
              <NavLink
                to="/programs"
                state={{ open_upcoming_program: true, program: programs[0] }}
              >
                <button>See more</button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="home-about" id="about">
          <h1 className="gd-back-head">About Us</h1>
          <p className="about-paragraph">
            <span>&ldquo;Dãna&rdquo;</span> is a group of youngsters with the
            intention of helping others. On December 15, 2022, six of them were
            simply talking about the underprivileged individuals who don&apos;t
            have access to food or shelter at railway stations during the cold
            months. Abruptly, one of them makes a proposal to provide food and
            blankets to the people residing at railway stations. Each
            participant chose to carry out the strategy after agreeing to the
            suggestion. Additionally, they planned to provide food and blankets
            for the needy on December 25, 2022. After that program, they have
            decided to continue the program every year.
          </p>
          <div className="vission-div">
            <Vision />
          </div>
          <br />
          <br />
          <div className="mission-div">
            <Misson />
          </div>
        </div>
        <div className="director" id="Director">
          {/* <div> */}
          <h1 className="gd-back-head">Director</h1>
          <p>
            <span>&ldquo;Dãna&rdquo;</span> not only ensures that your support
            is used at the right place but also encourages you to go out there
            and lend your helping hand towards the needy. Come this winter, be a
            hero, a winter soldier for the needy. We all come across people in
            need around us. So, this winter, let us pledge that we will not let
            anyone shiver to sleep.
          </p>
          <div className="director-all-img">
            <div className="each-director-div">
              <a href="/members">
                <img src={director1} alt="Director 1" />
              </a>
              <p>Subrata Ranjan Dhara</p>
            </div>
            <div className="each-director-div">
              <a href="/members">
                <img src={director2} alt="Director 1" />
              </a>
              <p>Srimanta Das</p>
            </div>
          </div>
          {/* </div> */}
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;
