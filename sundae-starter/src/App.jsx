// import { useState } from "react";
import Container from "react-bootstrap/Container";

// import OrderConfirmation from "./pages/confirmation/OrderConfirmation";
// import OrderEntry from "./pages/entry/OrderEntry";
// import OrderSummary from "./pages/summary/OrderSummary";

// import { OrderDetailsProvider } from "./contexts/OrderDetails";
// import ScoopOptions from "./pages/entry/ScoopOption";
// import ToppingOption from "./pages/entry/ToppingOption";
import Options from "./pages/entry/Option";

export default function App() {
  // orderPhase needs to be 'inProgress', 'review' or 'completed'
  // const [orderPhase, setOrderPhase] = useState("inProgress");

  // let Component = OrderEntry; // default to order page
  // switch (orderPhase) {
  //   case "inProgress":
  //     Component = OrderEntry;
  //     break;
  //   case "review":
  //     Component = OrderSummary;
  //     break;
  //   case "completed":
  //     Component = OrderConfirmation;
  //     break;
  //   default:
  // }

  return (
    // <OrderDetailsProvider>
    //   <Container>
    // <Component
    // // setOrderPhase={setOrderPhase}
    // />
    <>
      <Options optionType="scoops" />
    </>
    //   </Container>
    // </OrderDetailsProvider>
  );
}
