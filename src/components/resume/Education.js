import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import schoolIconImage from "./George_Washington_University_seal.png"; // Import the PNG image
import pchsImage from "./pchs.png"; // Import the PCHS image

const Education = () => {
  const schoolIconStyles = { background: "#373737" };
  const timelineElements = [
    {
      id: 1,
      title: "The George Washington University",
      location: "Washington, District of Columbia (DC)",
      description:
        "Recipient of the University Presidential Academic Scholarship. Relevant Coursework: Algorithms & Data Structures, Database Systems and Team Projects, Software Engineering, Foundations of Information Systems Security and Ethics, Web Applications Development, Internet of Things Management",
      major: "BA in Computer Science and BS in Information Systems & Technology Management (ISTM)",
      date: "August 2021 - present",
      image: null // No image for this timeline element
    },
    {
      id: 2,
      title: "Port Charlotte High School",
      location: "Port Charlotte, Florida",
      description:
        "Recipient of the Charlotte County Computer Group Scholarship. President of the PCHS Robotics Team.",
      date: "August 2017 - May 2021",
      image: pchsImage // Assign the imported image to the 'image' property
    },
  ];

  return (
    <div className="w-full">
      <div className="py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px] uppercase">2021 to Present!</p>
            <h2 className="text-3xl lg:text-4xl font-bold">My Education</h2>
        </div>
      <VerticalTimeline className="p-8 custom-timeline">
        {timelineElements.map((element) => {
          const showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";
          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="date text-lg text-black"
              iconStyle={schoolIconStyles}
              icon={
                element.image ? (
                  <img
                    src={element.image}
                    alt="School Icon"
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <img
                    src={schoolIconImage}
                    alt="School Icon"
                    className="w-full h-full rounded-full object-cover"
                  />
                )
              }
              iconClassName="flex items-center justify-center" // Center the image within the circle
              className="vertical-timeline-element mb-8 p-6"
              contentStyle={{ 
                background: "linear-gradient(to bottom, #ffffff, #f3f3f3)",
                color: "#333333",
              }}
            >
              <h3 className="text-2xl font-bold mb-2">{element.title}</h3>
              <h4 className="text-xl mb-2">{element.major}</h4> {/* Display major */}
              <h5 className="text-xl mb-4">{element.location}</h5>
              <p className="text-lg mb-8">{element.description}</p>
              {showButton && (
                <a
                  className={`button text-lg ${
                    element.icon === "work" ? "workButton" : "schoolButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Education;
