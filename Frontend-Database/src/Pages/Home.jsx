import SlideMenu from "../Components/SlideMenuCustomer";
import "../Styles/HomePage.css";
import pizzaImage from "../../public/pizzaAI.png";
import ingTomato from "../../public/Tomato.png";
import ingBasil from "../../public/Basil.png";
import ingCheese from "../../public/Cheese.png";
import api from "../api";
import { useState, useEffect } from "react";

function HomePage() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await api.get("/user/profile", {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("authToken")}`,
  //         },
  //       });
  //       setUserData(response.data);
  //     } catch (err) {
  //       setError("Failed to fetch user data.");
  //     }
  //   };

  //   fetchUserData();
  // }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <SlideMenu slideNavigate="Home" />
      <TodaySales />
      <img src={pizzaImage} width="100%" />
      <IngredientsDescription />
      {userData && <pre>{JSON.stringify(userData, null, 2)}</pre>}
    </>
  );
}

function TodaySales() {
  return (
    <div className="today-sales" width="100%">
      <h3>Today's top sales!</h3>
      <p>let's take a look at our best seller!</p>
    </div>
  );
}

function IngredientsDescription() {
  return (
    <div className="ingredients-description">
      <h2>gifts from mother of nature</h2>
      <p>
        The perfect trio of basil, tomato, and cheese is a timeless gift from
        Mother Nature, celebrating harmony in simplicity. Basil, with its
        fragrant leaves, adds a touch of freshness and a burst of aroma. Juicy,
        sun-ripened tomatoes offer a balance of sweetness and tang, embodying
        the essence of summer. Creamy, rich cheese ties it all together,
        creating a symphony of flavors. Together, they form the foundation of
        beloved dishes like Caprese salad and classic margherita pizza. This
        trio not only delights the palate but also symbolizes nature’s
        abundance, reminding us of the beauty in fresh, wholesome ingredients.
      </p>
      <IngredientShowcase />
    </div>
  );
}

function IngredientShowcase() {
  return (
    <div className="ingredient-showcase">
      <IngredientItem id="item-1" imgSrc={ingBasil} />
      <IngredientItem id="item-2" imgSrc={ingTomato} />
      <IngredientItem id="item-3" imgSrc={ingCheese} />
    </div>
  );
}

function IngredientItem({ imgSrc, id }) {
  return (
    <div className="ingredient-item" id={id}>
      <img
        id="ingredient-img"
        src={imgSrc}
        height={`${400}px`}
        width={`${400}px`}
      />
    </div>
  );
}

export default HomePage;
