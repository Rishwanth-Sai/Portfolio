/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/laptop-with-book.jpg";

const imageAltText = "laptop along with a book";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Auto-Keithley",
    description:
      "Contributed to create a desktop application to operate the Keithley 2450 Source Measure Unit (SMU) and control a UV light source, collecting experimental data.",
    url: "https://drive.google.com/drive/folders/1KTTzDhBOIbFQ4OAMoLoSWo0kUP-D4vgJ?usp=drive_link",
  },
  {
    title: "Flight Database System",
    description:
      "Contributed to building a website for booking flights, providing users with an easy and efficient way to plan their travel.",
    url: "https://drive.google.com/drive/folders/13jEC6QtYcQEKvibKLDy4mfkco5TY8PWg?usp=drive_link",
  },
  {
    title: "Face-Recognition Based Attendance System",
    description:
      "Created a website that recognizes and records attendance of students from uploaded classroom images using face-recognition technology.",
    url: "https://drive.google.com/drive/folders/1qJSmYOHxVPEy3CMnii7MOB8yyelsi2Vd?usp=drive_link",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
