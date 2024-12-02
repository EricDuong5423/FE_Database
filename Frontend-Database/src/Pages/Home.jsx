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
      <h3>gifts from mother of nature</h3>
    </div>
  );
}

export default HomePage;
