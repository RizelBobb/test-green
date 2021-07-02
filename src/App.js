import "./App.css";
import ContactBanner from "./components/ContactBanner/ContactBanner";
import LandingBanner from "./components/LandingBanner/LandingBanner";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Footer from "./components/Footer/Footer";
// import VerifyAgeModal from "./components/VerifyAgeModal/VerifyAgeModal";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <LandingBanner />
      <ContactBanner />
      <Footer />
      {/* <VerifyAgeModal /> */}
    </div>
  );
}

export default App;
