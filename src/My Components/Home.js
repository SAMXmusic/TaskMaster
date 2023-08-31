import React from "react";
import ImgURL from "./Frame 117.svg";
import "./Home.css";
export const Home = () => {
  let sheet = {
    animation: "color-animation 2s linear infinite",
    border: "3px solid grey",
  };

  
  return (
    <div className="home">
      <div className="title p-3 m-4 card">
        <h1 className="text-center m-4">
          <span className="main_text title-word-1">
            Welcome{" "}
          </span>
          <span className="main_text title-word-2">
            to{" "}
          </span>
          <span className="main_text title-word-3">
            TaskMaster
          </span>
        </h1>

        <h4 className="text-center px-3 mx-3">
          Embark on a Productivity Journey with TaskMaster 
        </h4>
        <h5 className="text-center px-3 mx-3">
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
        <div className="card2 mx-5" style={{ width: "40%" }}>
          {/* <img url={ImgURL} class="card-img-top" alt={"Cannot be displayed!"} /> */}
          <div className="card-body">
            <h5 className="card-title">Store Your Files</h5>
            <p className="card-text">
              Here you can create a new WorkSpace and store all your Workspace
              related information
            </p>
            <p>Get all your work in a single place</p>
            <a href="/addTopics" class="btn btn-dark">
              Let's Go
            </a>
          </div>
        </div>

        <div className="card2 mx-5" style={{ width: "40%" }}>
          {/* <img
            url={ImgURL2}
            class="card-img-top"
            alt={"Cannot be displayed!"}
          /> */}
          <div className="card-body">
            <h5 className="card-title px-3">Let's become Detectives</h5>
            <p className="card-text px-3">
              Want to know more about this website and the people behind this
              project?
            </p>
            <p>Get to know more about TaskMaster</p>
            <a href="/about" class="btn btn-dark">
            Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
