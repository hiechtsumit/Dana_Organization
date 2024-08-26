import { useState } from "react";
import ReactCardFlip from "react-card-flip";
// import vision_photo from '../../assets/image/background/vision.jpg';
import "./vision.css";

function Vision() {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div className="Flip-div">
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="vertical"
        flipSpeedBackToFront={2}
        flipSpeedFrontToBack={2}
      >
        <div
          className="Flip-front-div"
          onMouseEnter={() => setIsFlipped(true)}
          onMouseLeave={() => setIsFlipped(false)}
        >
          <h1>VISION</h1>
        </div>

        <div
          className="Flip-back-div"
          onMouseEnter={() => setIsFlipped(true)}
          onMouseLeave={() => setIsFlipped(false)}
        >
          <p>No people should be shivering in the cold.</p>
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default Vision;
