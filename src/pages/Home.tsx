import React, { useEffect, useState } from "react";
import { useFetch } from "../utils/hooks/useFetch";
import { AccommodationFactory } from "../Factories/AccommodationFactory";
import { AccommodationApi } from "../models/Accommodation";
import Card from "../components/Card/Card";
import Hero from "../components/Hero/Hero";
import "../App.scss";

import HeroBannerImg from "../assets/images/hero-banner.png";

const Home = () => {
  const [accommodations, setAccommodations] = useState<
    AccommodationFactory[] | null
  >(null);

  const [data, error, isLoading] = useFetch("../data/data.json");
  console.log(isLoading);

  useEffect(() => {
    if (data) {
      const parsedAccommodations = (data as AccommodationApi[]).map(
        (item: AccommodationApi) => new AccommodationFactory(item, "APIV1")
      );
      setAccommodations(parsedAccommodations);
    }
  }, [data]);
  return (
    <>
      <Hero bgImg={HeroBannerImg} title="Chez vous, partout et ailleurs" />
      <main>
        <section className="section section--accommodation-list">
          {error ? (
            <span className="error-message">Ooops! Something went wrong</span>
          ) : (
            <ul className="accommodations-list">
              {accommodations?.map((accommodation) => {
                return (
                  <li
                    className="accommodations-list__item"
                    key={accommodation.id}
                  >
                    <a href={`/accommodation/${accommodation.id}`}>
                      <Card
                        cover={accommodation.cover}
                        title={accommodation.title}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </main>
    </>
  );
};

export default Home;
