import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
// import About from './routes/About';
import Programs from "./routes/Programs";
// import Contact from './routes/Contact';
import Members from "./routes/Members";

import Donate from "./routes/Donate";
// import Gallery from './routes/Gallery';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='/about' element={<About />}/> */}
        <Route path="/programs" element={<Programs />} />
        <Route path="/members" element={<Members />} />

        <Route path="/donate" element={<Donate />} />
        {/* <Route path="/gallery" element={<Gallery />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
