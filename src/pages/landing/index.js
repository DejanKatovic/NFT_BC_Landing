import React, { useEffect, useState } from "react";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Banner } from "../../components/banner";
import { Collection } from "../../components/collection";
import { Golden } from "../../components/golden";
import { Contact } from "../../components/contact";

import EclipseImg_2 from "../../assets/img/Ellipse_2.png";

import mockData from "../../mock/mockData.json";

export const Landing = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    setCards(mockData.data);
  });

  return (
    <div className="relative bg-light-black">
      <div className="absolute top-0 right-0">
        <img src={EclipseImg_2.src} alt="Eclipse Image" />
      </div>
      <Header />
      <Banner />
      <Collection cards={cards} />
      <Golden />
      <Contact />
      <Footer />
    </div>
  );
};
