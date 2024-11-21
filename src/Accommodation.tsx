import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { useFetch } from "./utils/hooks/useFetch";
import { useParams } from "react-router-dom";
import { AccommodationFactory } from "./Factories/AccommodationFactory";
import { AccommodationApi } from "./models/Accommodation";
import Carousel from "./components/Carousel/Carousel";
import Rating from "./components/Rating/Rating";

import Chrevron from "./assets/images/chevron-left.svg";
import Dropdown from "./components/Dropdown/Dropdown";

const Accommodation = () => {
  const [accommodation, setAccommodation] =
    useState<AccommodationFactory | null>(null);

  const [data, error, isLoading] = useFetch("/data/data.json");

  console.log(error);
  console.log(isLoading);

  const { id } = useParams();

  useEffect(() => {
    const foundAccommodation = data?.find(
      (accommodation) => (accommodation as AccommodationApi).id === id
    );

    if (foundAccommodation) {
      const parsedAccommodation = new AccommodationFactory(
        foundAccommodation as AccommodationApi,
        "APIV1"
      );
      setAccommodation(parsedAccommodation);
    } else {
      // throw Error("Not found");
    }
  }, [data, id]);

  return (
    <>
      <Navbar />
      <section>
        <Carousel
          pictures={accommodation?.pictures ? accommodation?.pictures : []}
          accommodationTitle={accommodation?.title ? accommodation.title : ""}
        />
      </section>
      <section className="section--accommodation-data">
        <div className="container">
          <div>
            <h1 className="title">{accommodation?.title}</h1>
            <p className="location">{accommodation?.location}</p>
            <ul className="tags-list">
              {accommodation?.tags.map((tag, index) => (
                <li className="tags-list__item" key={`tag-${index}-${tag}`}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <figure className="host">
              <div className="image-wrapper">
                <img
                  src={accommodation?.host.picture}
                  alt={accommodation?.host.name}
                />
              </div>
              <figcaption className="name">
                {accommodation?.host.name}
              </figcaption>
            </figure>
            <Rating rating={accommodation?.rating} />
          </div>
        </div>
      </section>

      <section className="section--description">
        <div className="container">
          <Dropdown
            title={"Description"}
            content={accommodation?.description}
          />

          <Dropdown title={"Equipments"} content={accommodation?.equipments} />
          {/* <div className="dropdown">
            <button className="btn btn--expand">
              <h2>Description</h2>
              <img src={Chrevron} alt="" />
            </button>
            <div className="dropdown__content">
              <p className="text">{accommodation?.description}</p>
            </div>
          </div>

          <div className="dropdown">
            <button className="btn btn--expand">
              <h2>Description</h2>
              <picture className="image-wrapper">
                <img src={Chrevron} alt="" />
              </picture>
            </button>
            <div className="dropdown__content">
              <p className="text">{accommodation?.description}</p>
            </div>
          </div> */}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Accommodation;
