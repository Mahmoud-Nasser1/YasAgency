import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Works from "./pages/ourWork/Works";

const App = () => {
  return (
    <div className="flex flex-col ">
      <Header />
      <Works />
      <Footer />
    </div>
  );
};

export default App;
