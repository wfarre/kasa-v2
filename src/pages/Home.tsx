import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { AccommodationFactory } from "../Factories/AccommodationFactory";
import { AccommodationApi } from "../models/Accommodation";
import Card from "../components/ui/Card/Card";
import Hero from "../components/layout/Hero/Hero";
import HeroBannerImg from "../assets/images/hero-banner.png";
import Loader from "../components/ui/Loader/Loader";
import { Link, useNavigate } from "react-router-dom";
import "../App.scss";
import "./pages.scss";

const Home = () => {
  document.title = "Kasa";
  const navigate = useNavigate();
  const [data, error, isLoading] = useFetch("../data/data.json");
  const [accommodations, setAccommodations] = useState<
    AccommodationFactory[] | null
  >(null);

  useEffect(() => {
    if (error) {
      return navigate("/error", {
        state: { status: 500, message: "Oops! Un problème est survenu..." },
      });
    }
  }, [error]);

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
        {isLoading && <Loader />}
        <section className="section section--accommodation-list">
          {error ? (
            <span className="error-message">
              Ooops! Il y a eu un problème...
            </span>
          ) : (
            <ul className="accommodations-list">
              {accommodations?.map((accommodation) => {
                return (
                  <li
                    className="accommodations-list__item"
                    key={accommodation.id}
                  >
                    <Link to={`/accommodation/${accommodation.id}`}>
                      <Card
                        cover={accommodation.cover}
                        title={accommodation.title}
                      />
                    </Link>
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
