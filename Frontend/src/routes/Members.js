import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import "../assets/css/members.css";
import { allmembers } from "../utils/constant";
import { useState } from "react";
import { volunteers } from "../utils/volunteers";
const Members = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <>
      <Navbar />
      <main>
        <header className="sticky top-0 flex justify-center gap-5 py-3 text-[18px] bg-slate-300 z-[10]">
          <h1
            onClick={() => setTabIndex(0)}
            className={`${tabIndex === 0 && "border-b-2 border-[#2424FF]"} p-1 cursor-pointer hover:text-[#2424FF]`}
          >
            Members
          </h1>
          <h1
            onClick={() => setTabIndex(1)}
            className={`${tabIndex === 1 && "border-b-2 border-[#2424FF]"} p-1 cursor-pointer hover:text-[#2424FF]`}
          >
            Volunteers
          </h1>
        </header>
        <div>
          {tabIndex === 0 && (
            <>
              {allmembers &&
                allmembers.map((member, index) => (
                  <div key={index} className="each-member">
                    {/* console.log("hello",index) */}
                    {index % 2 === 0 ? (
                      <div className="left-member-photo">
                        <div className="member-photo-div">
                          <img src={member.image} alt="Profile Photo" />
                        </div>

                        <div className="member-details-div">
                          <p>
                            <h2>{member.name}</h2>
                            <p>{member.about}</p>
                            <p>{member.about1}</p>
                            <p>
                              +91 {member.phone}
                              <br />
                              <a href={`mailto:${member.mail}`}>
                                {member.mail}
                              </a>
                              <br />
                              <a href={member.location}>{member.address}</a>
                            </p>
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="right-member-photo">
                        <div className="member-details-div">
                          <p className="right-details-div">
                            <h2>{member.name}</h2>
                            <p>{member.about}</p>
                            <p>{member.about1}</p>
                            <p>
                              +91 {member.phone}
                              <br />
                              <a href={`mailto:${member.mail}`}>
                                {" "}
                                {member.mail}
                              </a>
                              <br />
                              <a href={member.location}> {member.address}</a>
                            </p>
                          </p>
                        </div>

                        <div className="member-photo-div">
                          <img src={member.image} alt="Profile Photo" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
            </>
          )}

          {tabIndex === 1 && (
            <div className="w-full p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {volunteers &&
                volunteers.map((volunteer) => (
                  <div key={volunteer.id} className="w-full flex gap-3 p-2">
                   <div className="w-[40%] aspect-square">
                    <img className="w-[100%] aspect-square rounded-md object-cover" src={volunteer.image} />
                   </div>
                   <div className="w-full flex items-center">
                      <h2 className="text-[18px] font-semibold">{volunteer.name}</h2>
                   </div>
                  </div>
                ))}
            </div>
          )}
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Members;
