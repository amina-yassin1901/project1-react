import "./App.css";
import Header from "./components/headerSection/header";
import Hero from "./components/hero";
import Customers from "./components/customersSection/customers";
import PlanManage from "./components/planAndManage";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Customers />
      <PlanManage />
    </div>
  );
}

export default App;
