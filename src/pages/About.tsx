import React from "react";
import HeroBannerImg from "../assets/images/about-banner.png";
import Hero from "../components/Hero/Hero";
import Dropdown from "../components/Dropdown/Dropdown";

const About = () => {
  return (
    <>
      <Hero bgImg={HeroBannerImg} />
      <main>
        <section className="section">
          <ul className="container container--column">
            <li>
              <Dropdown
                title="Fiabilité"
                content={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget leo sit amet lorem consequat facilisis nec eu erat. In egestas porttitor dolor in lacinia. Duis egestas arcu orci, id mattis urna faucibus eget. Duis mi libero, venenatis id euismod at, imperdiet at ligula. Donec dui leo, porta a pretium vel, ultrices sit amet mi. Fusce vehicula at sem vitae porta. Cras eget porta tortor."
                }
              />
            </li>
            <li>
              <Dropdown
                title="Respect"
                content={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget leo sit amet lorem consequat facilisis nec eu erat. In egestas porttitor dolor in lacinia. Duis egestas arcu orci, id mattis urna faucibus eget. Duis mi libero, venenatis id euismod at, imperdiet at ligula. Donec dui leo, porta a pretium vel, ultrices sit amet mi. Fusce vehicula at sem vitae porta. Cras eget porta tortor."
                }
              />
            </li>
            <li>
              <Dropdown
                title="Service"
                content={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget leo sit amet lorem consequat facilisis nec eu erat. In egestas porttitor dolor in lacinia. Duis egestas arcu orci, id mattis urna faucibus eget. Duis mi libero, venenatis id euismod at, imperdiet at ligula. Donec dui leo, porta a pretium vel, ultrices sit amet mi. Fusce vehicula at sem vitae porta. Cras eget porta tortor."
                }
              />
            </li>
            <li>
              <Dropdown
                title="Sécurité"
                content={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget leo sit amet lorem consequat facilisis nec eu erat. In egestas porttitor dolor in lacinia. Duis egestas arcu orci, id mattis urna faucibus eget. Duis mi libero, venenatis id euismod at, imperdiet at ligula. Donec dui leo, porta a pretium vel, ultrices sit amet mi. Fusce vehicula at sem vitae porta. Cras eget porta tortor."
                }
              />
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default About;
