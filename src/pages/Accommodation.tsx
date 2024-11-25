import React, { useEffect, useState } from "react";
import { useFetch } from "../utils/hooks/useFetch";
import { useParams } from "react-router-dom";
import { AccommodationFactory } from "../Factories/AccommodationFactory";
import { AccommodationApi } from "../models/Accommodation";
import Carousel from "../components/Carousel/Carousel";
import Rating from "../components/Rating/Rating";

import Dropdown from "../components/Dropdown/Dropdown";
import Image from "../components/Image/Image";

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
      <section className="section">
        <Carousel
          pictures={accommodation?.pictures ? accommodation?.pictures : []}
          accommodationTitle={accommodation?.title ? accommodation.title : ""}
        />
      </section>
      <section className="section section--accommodation-data">
        <div className="container">
          <div className="accommodation-info">
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
          <div className="host-info">
            <figure className="host">
              <Image
                imgsrc={accommodation?.host.picture}
                alt={accommodation?.host.name}
              />
              <figcaption className="name">
                {accommodation?.host.name}
              </figcaption>
            </figure>
            <Rating rating={accommodation?.rating} />
          </div>
        </div>
      </section>
      <section className="section section--description">
        <div className="container">
          <Dropdown
            title={"Description"}
            content={accommodation?.description}
          />
          <Dropdown title={"Equipments"} content={accommodation?.equipments} />
        </div>
      </section>
    </>
  );
};

export default Accommodation;
