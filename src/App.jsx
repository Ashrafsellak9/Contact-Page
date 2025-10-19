import "./App.css";

import ContactHeader from "./components/ContactHeader/ContactHeader";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <main className="main_container">
        <ContactHeader />
      </main>
    </div>
  );
}

export default App;