import { useEffect, useState } from "react";
import "./App.scss";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import { Accommodation, AccommodationApi } from "./models/Accommodation";
import { AccommodationFactory } from "./Factories/AccommodationFactory";
import FooterLogo from "./assets/images/footer-logo.svg";

function App() {
  const [accommodations, setAccommodations] = useState<[Accommodation] | null>(
    null
  );
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("./data/data.json")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw Error("Something went wrong");
      })
      .then((data) => {
        const parsedAccommodations = data.map(
          (item: AccommodationApi) => new AccommodationFactory(item, "APIV1")
        );
        setAccommodations(parsedAccommodations);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <>
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

      <footer className="footer">
        <div className="image-wrapper">
          <img src={FooterLogo} alt="" />
        </div>
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </>
  );
}

export default App;
