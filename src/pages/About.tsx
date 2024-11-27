import React from "react";
import HeroBannerImg from "../assets/images/about-banner.png";
import Hero from "../components/Hero/Hero";
import Dropdown from "../components/Dropdown/Dropdown";
import "./pages.scss";

const dropdownData: { title: string; content: string }[] = [
  {
    title: "Fiabilité",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget leo sit amet lorem consequat facilisis nec eu erat. In egestas porttitor dolor in lacinia. Duis egestas arcu orci, id mattis urna faucibus eget. Duis mi libero, venenatis id euismod at, imperdiet at ligula. Donec dui leo, porta a pretium vel, ultrices sit amet mi. Fusce vehicula at sem vitae porta. Cras eget porta tortor.",
  },
  {
    title: "Respect",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget leo sit amet lorem consequat facilisis nec eu erat. In egestas porttitor dolor in lacinia. Duis egestas arcu orci, id mattis urna faucibus eget. Duis mi libero, venenatis id euismod at, imperdiet at ligula. Donec dui leo, porta a pretium vel, ultrices sit amet mi. Fusce vehicula at sem vitae porta. Cras eget porta tortor.",
  },
  {
    title: "Service",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget leo sit amet lorem consequat facilisis nec eu erat. In egestas porttitor dolor in lacinia. Duis egestas arcu orci, id mattis urna faucibus eget. Duis mi libero, venenatis id euismod at, imperdiet at ligula. Donec dui leo, porta a pretium vel, ultrices sit amet mi. Fusce vehicula at sem vitae porta. Cras eget porta tortor.",
  },
  {
    title: "Sécurité",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget leo sit amet lorem consequat facilisis nec eu erat. In egestas porttitor dolor in lacinia. Duis egestas arcu orci, id mattis urna faucibus eget. Duis mi libero, venenatis id euismod at, imperdiet at ligula. Donec dui leo, porta a pretium vel, ultrices sit amet mi. Fusce vehicula at sem vitae porta. Cras eget porta tortor.",
  },
];

const About = () => {
  return (
    <>
      <Hero bgImg={HeroBannerImg} />
      <main>
        <section className="section">
          <ul className="container container--column">
            {dropdownData.map((item, index) => {
              return (
                <li>
                  <Dropdown
                    title={item.title}
                    content={item.content}
                    key={`dropdown${index}`}
                  />
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
};

export default About;
