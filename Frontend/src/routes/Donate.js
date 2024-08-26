import { useState } from "react";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import { base_url } from "../utils/constant";
import BeatLoader from "react-spinners/BeatLoader";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import qr and css
import QR from "../assets/image/QR/qr-pushpendu.jpg";
import "../assets/css/donate.css";

const Donate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");

  async function handelSubmit(event) {
    try {
      event.preventDefault();
      //   Button Loading animation on
      setIsLoading(true);
      const res = await fetch(`${base_url}/user/donate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          amount,
        }),
      });
      // if()
      const result = await res.json();
      setName("");
      setPhone("");
      setAmount("");
      if (result.successful === true) {
        // console.log("hello");
        setIsLoading(false);
        toast.success("Successfully Submited.....");
      } else {
        toast.error("Submission Failed !");
      }
    } catch (err) {
      alert("Server Down ! Please contact Us");
      window.location.href = "/";
    }
  }

  // function handelSubmit(){

  // }

  return (
    <>
      <Navbar />
      <main>
        <h1 className="donate-page-head">Help Us To Help Others</h1>
        <div className="donate-scrolling-div">
          <div className="donate-qr-form-div">
            <div className="qr-div">
              <img src={QR} alt="QR" />
              <h3>OR</h3>
              <div className="donate-other-upi">
                <span className="donate-other-upi-span1">
                  Paytm / Google Pay :{" "}
                </span>
                <span className="donate-other-upi-span2">8336870054</span>
              </div>
            </div>
            <br />
            <div className="donate-form-div">
              <div className="donate-process-text">
                After making your donation, fill out the following form and
                submit it
              </div>
              <form className="donate-form" onSubmit={handelSubmit}>
                <div className="input-class">
                  <input
                    type="name"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="input-class">
                  <input
                    type="number"
                    placeholder="Enter 10 Digit Phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="input-class">
                  <input
                    type="number"
                    placeholder="Enter Your Paid Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                  />
                </div>
                {/* <input type="file" accept=".jpg,.png,.jpeg" placeholder="Attached donatuon payment receipt" /> <br/><br/> */}
                <button type="submit">
                  {isLoading ? (
                    <>
                      <BeatLoader color="white" loading={isLoading} />
                    </>
                  ) : (
                    <>Submit Now</>
                  )}
                </button>
              </form>
            </div>
          </div>
          <Footer />
        </div>
      </main>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        // hideProgressBar={false}
        // newestOnTop={false}
        // closeOnClick
        // rtl={false}
        // pauseOnFocusLoss
        // draggable
        // pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default Donate;
