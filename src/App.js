import LoginForm from "./components/LoginForm";
import Header from "./components/Header";
import { LanguageContextProvider } from "./state/LanguageContext";
import "./App.css";

function App() {
  return (
    <LanguageContextProvider>
      <div className="App">
        <Header />
        <LoginForm />
      </div>
    </LanguageContextProvider>
  );
}

export default App;
