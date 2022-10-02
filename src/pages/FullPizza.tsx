import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://63129812f5cba498da9490a8.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("Ошибка");
        navigate("/");
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return (
      <div className="container">
        <h1>Загрузка...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} </h4>
    </div>
  );
};

export default FullPizza;
