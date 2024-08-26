import { useState } from "react";
import ReactCardFlip from "react-card-flip";
// import mission_photo from '../../assets/image/background/vision.jpg';
import "./misson.css";

function Misson() {
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
          <h1>MISSION</h1>
        </div>

        <div
          className="Flip-back-div"
          onMouseEnter={() => setIsFlipped(true)}
          onMouseLeave={() => setIsFlipped(false)}
        >
          <p>
            To provide blanket and food for the needy peoples at the railway
            stations.
          </p>
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default Misson;
