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
    </div>
  );
}

export default HomePage;
