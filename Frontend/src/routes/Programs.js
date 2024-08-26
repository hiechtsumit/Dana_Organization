// import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import Gallery from "./Gallery";
// import css
import "../assets/css/programs.css";
import backbround from "../assets/image/background/background3.png";
import { useEffect, useState } from "react";
import { programs } from "../utils/program-const";

import { useLocation } from "react-router-dom";

const Programs = () => {
  const location = useLocation();
  const [program, setProgram] = useState(programs[0]);
  const [openGallery, setOpenGallery] = useState(false);
  const [openProgram, setOpenProgram] = useState(true);
  const [window_width, setWindow_width] = useState(window.innerWidth);

  useEffect(() => {
    if (window_width >= 701) {
      setOpenProgram(true);
      setOpenGallery(true);
    } else {
      setOpenProgram(true);
      setOpenGallery(false);
    }
    window.addEventListener("resize", handleWindowResize);
  }, [window_width]);

  useEffect(() => {
    try {
      if (location.state) {
        if (window_width <= 700) {
          setOpenProgram(false);
          setOpenGallery(true);
        } else {
          setOpenProgram(true);
          setOpenGallery(true);
        }
        setProgram(location.state.program);
      }
    } catch (err) {
      return;
    }
  }, [window_width]);

  function handleWindowResize() {
    setWindow_width(window.innerWidth);
  }

  function handelVisite_gallery(program) {
    if (window_width <= 700) {
      setOpenProgram(false);
      setOpenGallery(true);
    }
    setProgram(program);
  }

  return (
    <>
      <Navbar />
      <main>
        <div className="programs">
          {openProgram ? (
            <div className="all-program-div">
              <h1 className="all-program-div-head">Programs</h1>
              <div className="program-div">
                <div className="scrolling-program-div">
                  {programs.map((program, index) => (
                    <div className="each-program" key={index}>
                      {program.status ? (
                        <>
                          <div className="background-program">
                            <img alt="pic" src={program.back_photo} />
                          </div>
                          <div className="program-content">
                            <h3 style={{ color: "yellow" }}>
                              {program.heading}
                            </h3>
                            <h4>{program.programDate}</h4>
                            <p>{program.content}</p>
                            <div
                              className="visite-gallery"
                              onClick={() => handelVisite_gallery(program)}
                            >
                              Visit Gallery
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="background-program">
                            <img alt="pic" src={backbround} />
                          </div>
                          <div className="program-content">
                            <h3 style={{ color: "yellow" }}>
                              {program.heading}
                            </h3>
                            <h4>{program.programDate}</h4>
                            <p>{program.content}</p>
                            <div
                              className="visite-upcoming-program"
                              onClick={() => handelVisite_gallery(program)}
                            >
                              Click for more details
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {openGallery ? (
            <div className="gallery">
              <Gallery
                program={program}
                setOpenGallery={setOpenGallery}
                setOpenProgram={setOpenProgram}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
        {/* <Footer /> */}
      </main>
    </>
  );
};

export default Programs;
