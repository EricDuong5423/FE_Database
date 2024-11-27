import SlideMenu from "../Components/SlideMenuCustomer";
import "../Styles/HomePage.css";

function HomePage() {
  return (
    <>
      <SlideMenu />
      <TodaySales />
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

export default HomePage;
