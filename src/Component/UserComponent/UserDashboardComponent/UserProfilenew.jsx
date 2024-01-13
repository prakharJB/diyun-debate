import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UserProfilenew() {
  // api one data
  const [profileDataA, setprofileDataA] = useState();

  // api two data
  const [profileDataB, setprofileDataB] = useState();

  // api three data
  const [profileDataC, setprofileDataC] = useState();

  const fetchData = async () => {
    try {
      // api one
      const url = `https://laradebate.jmbliss.com/api/my-profile-details`;
      const responseData = await axios.get(url);
      console.log("API Response:", responseData?.data);

      // api two
      const urlA = `https://laradebate.jmbliss.com/api/my-contributions`;
      const responseDataA = await axios.get(urlA);
      console.log("API Response:", responseDataA?.data.userContributions);

      // api three
      const urlB = `https://laradebate.jmbliss.com/api/my-activity`;
      const responseDataB = await axios.get(urlB);
      console.log("API Response:", responseDataB?.data.activity);

      // api one data
      setprofileDataA(responseData?.data);
      // api two data
      setprofileDataB(responseDataA?.data?.userContributions);

      // api two data
      setprofileDataC(responseDataB?.data?.activity);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <div className="container d-flex d-flex-gap flex-column flex-md-row mt-5 mb-5 fw-light profile">
      <div className=" col-md-6  col-12  pt-5 pb-5">
        {/* <img className="card-img-top" src="..." alt="Card image cap"> */}
        <div className="card-body card pb-5">
          <h2 className="card-title  text-center">{profileDataA?.username}</h2>

          <p className="card-text mb-0 fw-bold opacity-75">joined:</p>
          <h5 className="card-title ">
            {formatDate(profileDataA?.created_at)}
          </h5>

          <p className="card-text mb-0 mt-3 fw-bold opacity-75">Thanks:</p>
          <h5 className="card-title ">
            <i class="fa-solid fa-heart"></i> &nbsp;
            {profileDataA?.total_received_thanks}
            
          </h5>

          <a
            href="/my/user-setting"
            className="w-100 btn btn-lg btn-outline-primary mt-3"
          >
            Edit profile
          </a>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="statics">
          <p className="fw-bold opacity-75">Statistics (Public Debates)</p>
          <div className="d-flex d-flex-gap">
            <div className="col-md-6  col-12 card-body text-center card mb-4">
              <p>Claims</p>
              <h4>{profileDataB?.totalClaims}</h4>
            </div>
            <div className="col-md-6  col-12 card-body text-center card mb-4">
              <p>Contributions</p>
              <h4>{profileDataB?.totalContributions}</h4>
            </div>
          </div>
          <div className="d-flex d-flex-gap">
            <div className="col-md-6  col-12 card-body text-center card mb-4">
              <p>Comments</p>
              <h4>{profileDataB?.totalComments}</h4>
            </div>
            <div className="col-md-6  col-12 card-body text-center card mb-4">
              <p>Votes</p>
              <h4>{profileDataB?.totalVotes}</h4>
            </div>
          </div>
        </div>

        <div className="activity">
          <p className="fw-bold opacity-75">Activity</p>
           {profileDataC &&
            profileDataC.map((val, index) => (
              <div className="">
                <h4>{val.created_at}</h4>
                <div className="d-flex card-body text-left card mb-4 flex-row">
                  <div className="col-sm-4  col-12 ">img</div>
                  <div className="col-sm-8  col-12">
                    <h5>{val.title}</h5>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
