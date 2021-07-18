import React from "react";

import { Navbar, Hero, Content, Section, Footer } from "../../components";

const Landing = () => {
  const data = [
    {
      id: 1,
      title: "Nasi Gorang Enak",
      imgUrl: "/assets/content/friedrice.jpg",
      tags: ["Mudah", "Top"],
    },
    {
      id: 2,
      title: "Lodeh Ayam Pedas",
      imgUrl: "/assets/content/chikenlodeh.jpg",
      tags: ["Mudah", "Top"],
    },
    {
      id: 3,
      title: "Sandwich",
      imgUrl: "/assets/content/sandwich.jpg",
      tags: ["Menengah", "Top"],
    },
    {
      id: 4,
      title: "Semur Tuna",
      imgUrl: "/assets/content/semurtuna.jpg",
      tags: ["Sulit", "Top"],
    },
  ];

  return (
    <div>
      <Navbar />
      <Hero />
      <Content
        title="Resep Paling dicari"
        icon={true}
        loading={true}
        data={data}
      />
      <Section />
      <Footer />
    </div>
  );
};

export default Landing;
