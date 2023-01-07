import logo from "./logo.svg";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import { SignUp } from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import AppContainer from "./pages/AppContainer/AppContainer";
import Router from "./Routes/Router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      {/* <SignIn></SignIn> */}
      {/* <MenuBar></MenuBar> */}
      {/* <AppContainer></AppContainer> */}
    </div>
  );
}

export default App;
