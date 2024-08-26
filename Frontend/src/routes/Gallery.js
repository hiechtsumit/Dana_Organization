// import { useEffect, useState } from "react";
import Footer from "../common/Footer";
import propTypes from "prop-types";
import { FaArrowLeft } from "react-icons/fa";
// import Navbar from "../common/Navbar"
// import css
import "../assets/css/gallery.css";
const Gallery = (props) => {
  const { program, setOpenGallery, setOpenProgram } = props;
  function handel_back_to_program() {
    // console.log("back");
    setOpenProgram(true);
    setOpenGallery(false);
  }
  return (
    <>
      <div className="gallery-heading">
        <div
          className="back-to-program"
          onClick={() => handel_back_to_program()}
        >
          <FaArrowLeft className="program-back-icon" title="Back" />
        </div>
        {program.status ? (
          <h2>Welcome to Gallery !</h2>
        ) : (
          <h2>About the Program</h2>
        )}
      </div>
      <div className="gallery-photo">
        <div className="gallery-scrolling-container">
          <div className="program-full-details">
            {program.full_content?.map((content,index)=>(
              <span key={index}>
              &nbsp;{content}   <br /> <br />
              </span>
            ))}
            {/* &nbsp;{program.full_content[0]}
            <br />
            <br />
            &nbsp;{program.full_content[1]} <br /> <br /> */}
          </div>
          <div className="gallery-all-photo-div pb-5">
            {console.log(program)}
            {program && program.photos?.map((photo, index) => (
              <div className="each-photo w-[150px] aspect-square" key={index}>
                <img
                className="w-full h-full object-cover rounded-md"
                  src={require(`../assets/image/programs/${photo.p_link}`)}
                  alt="photo"
                />
              </div>
            ))}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Gallery;

Gallery.propTypes = {
  program: propTypes.object,
  setOpenGallery: propTypes.func,
  setOpenProgram: propTypes.func,
};
