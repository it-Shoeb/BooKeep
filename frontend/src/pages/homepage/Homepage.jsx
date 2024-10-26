import React, { useState } from "react";
import "./homepage.css";
import axios from "axios";
import CardComponent from "../../components/card/CardComponent";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  const [data, setDate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDate = async () => {
      try {
        await axios.get("http://localhost:5000/api/product").then((res) => {
          setDate(res.data.data);
          console.log(res.data.data);
        });
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDate();
  }, []);

  return (
    <>
      <div className="homepage">
        {loading ? <p>Loading...</p> : null}

        {data &&
          data.map((card) => <CardComponent props={card} key={card._id} />)}
      </div>
    </>
  );
}
