import React from "react";
import ImgURL from "./Frame 117.svg";

export const Home = () => {
  let sheet = {
    animation: "color-animation 2s linear infinite",
    border: "3px solid grey",
  };

  let word1 = {
    color: "#DF8453",
    color: "#3D8DAE",
    color: "#E4A9A8",
  };
  let word2 = {
    color: "#17494D",
    color: "#E4A9A8",
    color: "#17494D",
  };
  let word3 = {
    color: "#E4A9A8",
    color: "#DF8453",
    color: "#3D8DAE",
  };
  return (
    <div className="home">
      <div className="title p-3 m-4 card" style={sheet}>
        <h1 className="title text-center m-4">
          <span className="title-word-1" style={word1}>
            Welcome{" "}
          </span>
          <span className="title-word-2" style={word2}>
            to{" "}
          </span>
          <span className="title-word-3" style={word3}>
            TaskMaster
          </span>
        </h1>

        <h4 className="title text-center px-3 mx-3">
          Embark on a Productivity Journey with TaskMaster 
        </h4>
        <h5 className="title text-center px-3 mx-3">
          "Unveil Your Workspaces, Define Your Subjects, Conquer Your Tasks!"
        </h5>
      </div>
      <div
        className="p-4 m-4 d-flex aligns-items-center justify-content-center text-center"
        style={{
          backgroundImage: `url(${ImgURL})`,
          backgroundSize: "cover",
        }}
      >
        <div className="card mx-5" style={{ width: "40%" }}>
          {/* <img url={ImgURL} class="card-img-top" alt={"Cannot be displayed!"} /> */}
          <div className="card-body">
            <h5 className="card-title">Store Your Files</h5>
            <p className="card-text">
              Here you can create a new WorkSpace and store all your Workspace
              related information
            </p>
            <p>Get all your work in a single place</p>
            <a href="/addTopics" class="btn btn-dark" style={{color: "#39f7CC"}}>
              Let's Go
            </a>
          </div>
        </div>

        <div className="card mx-5" style={{ width: "40%" }}>
          {/* <img
            url={ImgURL2}
            class="card-img-top"
            alt={"Cannot be displayed!"}
          /> */}
          <div className="card-body">
            <h5 className="card-title">Let's become Detectives</h5>
            <p className="card-text">
              Want to know more about this website and the people behind this
              project?
            </p>
            <p>Get to know more about TaskMaster</p>
            <a href="/about" class="btn btn-dark" style={{color: "#39f7CC"}}>
            Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
