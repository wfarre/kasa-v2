import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useNavigate, useParams } from "react-router-dom";
import { AccommodationFactory } from "../Factories/AccommodationFactory";
import { AccommodationApi } from "../models/Accommodation";
import Carousel from "../components/ui/Carousel/Carousel";
import Rating from "../components/ui/Rating/Rating";

import Dropdown from "../components/ui/Dropdown/Dropdown";
import Image from "../components/ui/Image/Image";
import "./pages.scss";
import Loader from "../components/ui/Loader/Loader";

const Accommodation = () => {
  document.title = "Kasa - Logements";
  const [accommodation, setAccommodation] = useState<
    AccommodationFactory | null | undefined
  >(null);
  const [data, error, isLoading] = useFetch("/data/data.json");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      return navigate("/error", {
        state: { status: 500, message: "Oops! Un problème est survenu..." },
      });
    }
  }, [error]);

  useEffect(() => {
    const foundAccommodation = data?.find(
      (accommodation) => (accommodation as AccommodationApi).id === id
    );
    if (data && !foundAccommodation) {
      console.log("nya");

      navigate("/error");
    }
    if (foundAccommodation) {
      const parsedAccommodation = new AccommodationFactory(
        foundAccommodation as AccommodationApi,
        "APIV1"
      );
      setAccommodation(parsedAccommodation);
    }
  }, [data, id, navigate]);

  return (
    <main>
      {isLoading && <Loader />}
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
    </main>
  );
};

export default Accommodation;
