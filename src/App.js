import logo from './logo.svg';
import './App.scss';
import { SignUp } from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import AppContainer from "./pages/AppContainer/AppContainer";

function App() {
  return (
    <div className="App">
      {/* <SignUp></SignUp> */}
      {/* <SignIn></SignIn> */}
      {/* <MenuBar></MenuBar> */}
      <AppContainer></AppContainer>
    </div>
  );
}

export default App;
