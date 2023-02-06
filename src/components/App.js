import React from "react";
import '../style/app.css'
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import '../style/header.css';
import '../style/body.css';
import '../style/footer.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
