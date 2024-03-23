import HeroBgCarousel from "@/components/home/HeroBgCarousel";
import LatestProjects from "@/components/home/LatestProjects";
import WhatWeDo from "@/components/home/WhatWeDo";

const carouselImg = [
  {
    id: 0,
    path: "/assets/hero-images/image-01.jpg",
  },
  {
    id: 1,
    path: "/assets/hero-images/image-03.jpg",
  },
  {
    id: 2,
    path: "/assets/hero-images/image-02.jpg",
  },
];

const placeholderTexts = [
  {
    type: "heading2",
    text: "Pushing Boundaries in Architectural Design & Expertly Executed Construction and Project Management.",
  },
  {
    type: "heading2",
    text: "Crafting Serene and Sustainable Outdoor Environments.",
  },
  {
    type: "heading2",
    text: "Transforming Spaces with Creative Interior Design.",
  },
];

const whatWeDoGridTexts = [
  {
    id: 0,
    iconPath: "/assets/what-we-do-icons/icon-01.png",
    title: "Architectural Projects",
    desc: "Transforming spaces with innovative architectural Endeavors, creating marvels, and crafting signature designs.",
  },
  {
    id: 1,
    iconPath: "/assets/what-we-do-icons/icon-02.png",
    title: "Interior Projects",
    desc: "We are infusing inspired creations, achieving excellence in interior design, and delivering transformative solutions.",
  },
  {
    id: 2,
    iconPath: "/assets/what-we-do-icons/icon-03.png",
    title: "Construction & Management",
    desc: "We are infusing inspired creations, achieving excellence in interior design, and delivering transformative solutions.",
  },
  {
    id: 3,
    iconPath: "/assets/what-we-do-icons/icon-04.png",
    title: "Landscape Projects",
    desc: "Transforming spaces with innovative architectural Endeavors, creating marvels, and crafting signature designs.",
  },
];


const latestProjects = [
  {
    id: 1,
    title: "Need title here",
    subtitle: "Subtitle",
    imgPath: "/assets/hero-images/image-02.jpg",
  },
  {
    id: 2,
    title: "Need title here",
    subtitle: "Subtitle",
    imgPath: "/assets/hero-images/image-02.jpg",
  },
  {
    id: 3,
    title: "Need title here",
    subtitle: "Subtitle",
    imgPath: "/assets/hero-images/image-02.jpg",
  },
  {
    id: 4,
    title: "Need title here",
    subtitle: "Subtitle",
    imgPath: "/assets/hero-images/image-02.jpg",
  },
  {
    id: 5,
    title: "Need title here",
    subtitle: "Subtitle",
    imgPath: "/assets/hero-images/image-02.jpg",
  },
  {
    id: 6,
    title: "Need title here",
    subtitle: "Subtitle",
    imgPath: "/assets/hero-images/image-02.jpg",
  },
];

export default function Home() {
  return (
    <div className="mx-8">
      <HeroBgCarousel
        carouselImg={carouselImg}
        placeholderTexts={placeholderTexts}
      />
      <WhatWeDo whatWeDoGridTexts={whatWeDoGridTexts} />
      <LatestProjects latestProjects={latestProjects} />
    </div>
  );
}
