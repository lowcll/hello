import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import schoolIconImage from "./George_Washington_University_seal.png"; // Import the PNG image
import uniqloImage from "./UNIQLO_logo.png"; // Import UNIQLO logo image
import harpoonHarrysImage from "./harpoon_harrys.png"; // Import Harpoon Harry's image

const WorkExperience = () => {
  const schoolIconStyles = { background: "#373737" };
  const timelineElements = [
    {
      id: 1,
      title: "Technical Support Associate II",
      corporation: "George Washington University IT",
      location: "Washington, DC",
      description:
        "As a promotion from Tech Support I, I successfully handled more than 200 support issues throughout the entire university, leading to smooth operations within the support pod and proud customer satisfaction. I assisted over 50 faculty and staff with different software and system operations, such as recovering previous data and managing hardware assets for employees changing roles or newly hired employees. Additionally, I assisted in the creation of a new system for sorting and triaging support tickets, which saved the support team's work time by over 20 hours per week.",
      date: "August 2022 - Present",
      image: schoolIconImage // No image for this timeline element
    },
    {
      id: 2,
      title: "Retail Sales Associate",
      corporation: "UNIQLO",
      location: "Washington, DC",
      description:
        "Utilizing my technical skills from my position at the University, I resolved issues with the existing RFID and wireless scanning system, resulting in improved system performance and stability. Additionally, I skillfully assisted in managing store inventory and providing excellent customer assistance, contributing to maintaining stable and efficient daily operations.",
      date: "September 2022 - November 2023",
      image: uniqloImage // Assign the UNIQLO logo image to the 'image' property
    },
    {
      id: 3,
      title: "Food Runner and Busser",
      corporation: "Harpoon Harry's",
      location: "Punta Gorda, Florida",
      description:
        "As a Busser and Food Runner at Harpoon Harry's, I showcased multitasking abilities and a commitment to excellent customer service.I efficiently cleared and prepped tables, maintaining a clean and inviting dining environment for guests. I actively contributed the to kitchen by assisting in food preparation before service began.",
      date: "June 2022 - August 2022",
      image: harpoonHarrysImage // Assign the Harpoon Harry's image to the 'image' property
    },
    {
      id: 4,
      title: "Technical Support Associate I",
      corporation: "George Washington University IT",
      location: "Washington, DC",
      description:
        "In my initial role at the School of Engineering, I assisted in over 100 support tickets, covering a range of issues from networking issues, software concerns, and hardware troubleshooting concerns. I provided front-desk technical support to more than 50 students in both the Engineering and Medical schools, where I successfully diagnosed and resolved various academic technical issues, ensuring the system remained highly functional. Furthermore, by using Apporto, I remotely accessed and resolved over 30 faculty and staff issues related to VPN and home networks, significantly minimizing downtime and boosting staff productivity.",
      date: "August 2021 - May 2022",
      image: schoolIconImage // No image for this timeline element
    },
  ];

  return (
    <div className="w-full">
      <div className="py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px] uppercase">2021 to Present!</p>
            <h2 className="text-3xl lg:text-4xl font-bold">My Work Experience Background</h2>
      </div>
      <VerticalTimeline className="p-8 custom-timeline">
        {timelineElements.map((element) => {
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
                    alt="Company Logo"
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
              iconClassName="flex items-center justify-center"
              className="vertical-timeline-element mb-8 p-6 sm:p-2" // Updated class for smaller devices
              contentStyle={{ 
                background: "linear-gradient(to bottom, #ffffff, #f3f3f3)",
                color: "#333333",
                borderRadius: "10px", // Added border-radius for square boxes
              }}
            >
              <h3 className="text-xl font-bold mb-2">{element.title}</h3> {/* Decreased text size for smaller devices */}
              <h4 className="text-lg mb-1">{element.corporation}</h4> {/* Decreased text size for smaller devices */}
              <h5 className="text-base mb-2">{element.location}</h5> {/* Decreased text size for smaller devices */}
              <p className="text-sm mb-8">{element.description}</p> {/* Decreased text size and squared description */}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default WorkExperience;
