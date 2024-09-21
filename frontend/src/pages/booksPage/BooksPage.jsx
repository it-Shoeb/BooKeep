import React, { useEffect, useState } from "react";
import axios from "axios";

export default function BooksPage() {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        let res = await axios.get("https://bookeep-ifhl.onrender.com");
        setState(res.data);
        console.log(res.data);
      } catch (error) {
        console.log("backend error: ", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <>
      <div className="book">
        {loading && <strong>Loading...</strong>}
        <div className="cards">
          {state.map((book) => (
            <div className="card" key={book._id}>
              <div className="card-lhs">
                <img src={book.cover} alt="" />
              </div>
              <div className="card-rhs">
                <h3>{book.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
