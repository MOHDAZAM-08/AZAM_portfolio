import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I am passionate about working with a talented team to create exceptional user experiences. ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I am eager to collaborate with clients and team.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Passionate about to create innovative and user-friendly web solutions. ",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "ShopNow",
    des: "A Full Stack E-commerce Application leveraging React, Redux, and Tailwind CSS for the frontend, coupled with a Spring Boot backend, to deliver a seamless shopping experience with features like secure authentication, product management, dynamic cart functionality, and an intuitive admin dashboard.",
    img: "/shopNow.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg","/node.svg","mongo.svg"],
    link: "https://shop-now-frontend-1tfl.vercel.app/",
  },
  {
    id: 2,
    title: "CollegeEazy",
    des: "Full stack project which provide notes of B tech . front-end in full on React and backend is full on SpringBoot",
    img: "/college.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg","/java.svg"],
    link: "https://collegeeazy.vercel.app/",
  },
  {
    id: 3,
    title: "The Design Yard",
    des: "It's a Company's portfolio website which deals with Interior Design. Monthly 500+ of users visit this Website.",
    img: "/design.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://thedesignyard.co.in/",
  },
  {
    id: 4,
    title: "Unityhealthsystem",
    des: "A freelance project,Enhanced a React JS-based portfolio website, boosting traffic by 50% and conversions by 20%.",
    img: "/unity.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://unityhealthsystem.com/",
  },
  {
    id: 5,
    title: "Primecarealliance",
    des: "A freelance project,Enhanced a React JS-based portfolio website, boosting traffic by 50% and conversions by 20%.",
    img: "/pcl.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://www.primecarealliance.com/",
  },
  {
    id: 6,
    title: "Apple-Watch_showcase",
    des: "I have just finished a new website project where I combined the power of React.js and Three.js to create a dynamic 3D experience.",
    img: "/apple.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg","/three.svg","/gsap.svg"],
    link: "https://apple-watch-livid.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack developer @Office Sahayogi",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack developer-intern @Navieo",
    desc: "Designed and developed Web app for the company using MERN (ReactJS, NodeJS, ExpressJS, MongoDB).",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web Dev Project",
    desc: "Led the dev of a Web app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer @E-cell",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/MOHDAZAM-08",
  },
  {
    id: 2,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/mohd-azam-b2b6b0243/"
  },
];
