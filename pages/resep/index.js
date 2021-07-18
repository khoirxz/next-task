import React from "react";

import { Navbar, Content, Footer, Layout } from "../../components";

const Resep = () => {
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
    {
      id: 5,
      title: "Semur Tuna Enak Sekali",
      imgUrl: "/assets/content/semurtuna.jpg",
      tags: ["Sulit", "Top"],
    },
    {
      id: 6,
      title: "Semur Tuna Pedas",
      imgUrl: "/assets/content/semurtuna.jpg",
      tags: ["Sulit", "Top"],
    },
    {
      id: 7,
      title: "Semur Tuna Pedas Manis",
      imgUrl: "/assets/content/semurtuna.jpg",
      tags: ["Sulit", "Top"],
    },
    {
      id: 8,
      title: "Semur Tuna Bintang 5",
      imgUrl: "/assets/content/semurtuna.jpg",
      tags: ["Sulit", "Top"],
    },
  ];

  return (
    <Layout>
      <div>
        <Navbar />
        <Content loading={true} data={data} />
        <Footer />
      </div>
    </Layout>
  );
};

export default Resep;
