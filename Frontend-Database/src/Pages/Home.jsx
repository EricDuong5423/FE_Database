import SlideMenu from "../Components/SlideMenuCustomer";
import "../Styles/HomePage.css";
import pizzaImage from "../../public/pizzaAI.png";

function HomePage() {
  return (
    <>
      <SlideMenu />
      <TodaySales />
      <img src={pizzaImage} width="100%" />
      <IngredientsDescription />
    </>
  );
}

function TodaySales() {
  return (
    <div className="today-sales">
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
      <IngredientsImage />
    </div>
  );
}

function IngredientsImage() {
  return <div className="ingredients-image"></div>;
}

export default HomePage;
