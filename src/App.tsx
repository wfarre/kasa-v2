import { useEffect, useState } from "react";
import "./App.scss";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import { AccommodationApi } from "./models/Accommodation";
import { AccommodationFactory } from "./Factories/AccommodationFactory";
import { useFetch } from "./utils/hooks/useFetch";
import Footer from "./components/Footer/Footer";

function App() {
  const [accommodations, setAccommodations] = useState<
    AccommodationFactory[] | null
  >(null);

  const [data, error, isLoading] = useFetch("./data/data.json");

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
      {isLoading && (
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      )}
      <Navbar />
      <Hero />
      <section className="section">
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
      <Footer />
    </>
  );
}

export default App;
