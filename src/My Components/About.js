import React from "react";

export const About = () => {
  return (
    <div style={{ minHeight: "70vh" }}>
      <p className="About p-3">
        <h4 className="my-2">TaskMaster</h4>
        Welcome to TaskMaster Version 1. TaskMaster is a result of the collaborative efforts of Team: Decay of
        Angels. Our mission is to provide individuals, professionals, and teams
        with an intuitive and elegant task management solution that enhances
        productivity and organization.
        <ul>
          <li>
            <h5 className="my-3">Our Vision</h5>
            At Team Decay of Angels, we believe that effective task management
            is the cornerstone of success. With TaskMaster, we aim to simplify
            the way tasks are managed, offering a visually pleasing and
            feature-rich platform that caters to various workflow needs.
          </li>

          <li>
            <h5 className="my-3">Why TaskMaster?</h5>
            TaskMaster was born out of a desire to create a task management tool
            that goes beyond the ordinary. With its exquisite user interface,
            powerful task organization capabilities, and seamless integration of
            Dexie.js for data management, TaskMaster redefines how tasks are
            managed in today's fast-paced digital world.
          </li>

          <li>
            <h5 className="my-3">Meet the Team</h5>
            TaskMaster is the result of the hard work, dedication, and
            creativity of Team Decay of Angels. Our diverse team brings a range
            of skills to the table, from frontend and backend development to
            UI/UX design. Together, we've poured our passion into crafting an
            application that we believe will revolutionize how tasks are
            managed.
          </li>

          <li>
            <h5 className="my-3">Join Us</h5>
            We invite you to explore TaskMaster, experience its features
            firsthand, and become part of our journey. Whether you're an
            individual looking to stay organized or a team aiming for peak
            efficiency, TaskMaster has something to offer. Feel free to reach
            out, provide feedback, or even contribute to our open-source project
            on GitHub. Thank you for considering TaskMaster by Team Decay of
            Angels. We're excited to have you on board!
          </li>
        </ul>
      </p>
    </div>
  );
};
