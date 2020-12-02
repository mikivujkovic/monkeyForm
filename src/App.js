import LoginForm from "./components/LoginForm";
import Header from "./components/Header";
import { LanguageContextProvider } from "./state/LanguageContext"; // import language context to make a provider over whole app
import { ReactComponent as MonkeyLogo } from "./images/monkey.svg";
import "./App.css";

function App() {
  return (
    // Language Context Provide
    <LanguageContextProvider>
      <div className="App">
        <Header />
        <MonkeyLogo className="monkeyLogo" />
        <LoginForm />
      </div>
    </LanguageContextProvider>
  );
}

export default App;
