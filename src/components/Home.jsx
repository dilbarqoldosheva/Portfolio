import React, { useRef } from "react";
import SocialCard from "./Card/socialCard/socialcard";
import img from "../Assets/me/hero-bg.svg";
function Home() {
  return (
    <section className="grid md:grid-cols-2 grid-cols-1 gap-10 justify-between items-center h-max relative py-20 mt-16">
      <div className=" font-museo-moderno font-system lg:pt-0 pt-20 md:p-10 ">
        <div className="name lg:text-6xl md:text-5xl text-3xl font-bold leading-tight mb-10">
          <span data-cursor-style>I AM </span>
          <p
            className="text-anim lg:text-7xl md:text-6xl text-5xl"
            style={{ position: "relative", zIndex: 1000 }}
          >
            Dilbar
          </p>
        </div>
        <p data-cursor-style className="text-gray-300 border-[#333] mt-12">
        I am a Front-End Developer with a strong passion for creating modern and responsive web applications. I specialize in building clean, scalable, and user-friendly interfaces using technologies like React.js, TypeScript, Next.js, and Tailwind CSS.
My expertise includes API integrations, performance optimization, and developing reusable components to enhance efficiency. I am always eager to learn new technologies and stay updated with the latest trends in web development to deliver high-quality solutions.
        </p>
        <div className="mt-10">
          <SocialCard />
        </div>
      </div>
      <div className="avatar">
        <img src={img} alt="" />
      </div>
    </section>
  );
}

export default Home;
