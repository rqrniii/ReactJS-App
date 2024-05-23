import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://fake-coffee-api.vercel.app/api`
        ); 
        if (!response.ok) {
          throw new Error("Failed to fetch data. Please try again later.");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredData = data
    ? data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="container">
      <header className="App-header">
        <h1>Coffee Shop</h1>
        <form className="search-bar">
          <input
            type="text"
            placeholder="Search by Caffee name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </header>
      <div className="input-container">
        {isLoading ? <p className="loading">Loading</p> : null}
        {error ? <p className="error">{error}</p> : null}
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div className="category" key={item.product_id}>
              {item.image_url && <img src={item.image_url} alt="Product" />}
              <p className="category-title">{item.name}</p>
              <p className="category-price">Price: {item.price}$</p>
              <button> + </button>
            </div>
          ))
        ) : (
          <p>No categories found.</p>
        )}
      </div>
    </div>
  );
}

export default App;
