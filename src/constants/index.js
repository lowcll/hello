import SpaceCity1 from "../assets/images/SpaceCity1.jpg";
import SpaceCity5 from "../assets/images/SpaceCity5.jpeg";
import SpaceCity6 from "../assets/images/SpaceCity6.jpeg";
import SpaceCity7 from "../assets/images/SpaceCity7.jpeg";
import SpaceCity8 from "../assets/images/SpaceCity8.jpeg";
import SpaceCity9 from "../assets/images/SpaceCity9.jpeg";

import {
    RxCrop,
    RxDesktop,
    RxPencil2,
    RxReader,
    RxRocket,
    RxAccessibility,
  } from "react-icons/rx";
  

export const navLinksdata=[
    {
        _id: 1001,
        title: "Home",
        link: "home",
    },
    {
        _id: 1002,
        title: "Features",
        link: "features",
    },
    {
        _id: 1003,
        title: "Projects",
        link: "projects",
    },
    {
        _id: 1004,
        title: "Resume",
        link: "resume",
    },
    {
        _id: 1005,
        title: "Testimonial",
        link: "testimonial",
    },
    {
        _id: 1006,
        title: "Contacts",
        link: "contacts",
    },
];

  export const ServiceData = [
    {
      icon: RxCrop,
      title: "Development",
      content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
      backgroundImage: SpaceCity9,
    },
    {
      icon: RxPencil2,
      title: "Branding",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: SpaceCity1,
    },
    {
      icon: RxDesktop,
      title: "Design",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: SpaceCity6,
    },
    {
      icon: RxReader,
      title: "Seo",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: SpaceCity7,
    },
    {
      icon: RxAccessibility,
      title: "Management",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: SpaceCity5,
    },
    {
      icon: RxRocket,
      title: "Production",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: SpaceCity8,
    },
  ];