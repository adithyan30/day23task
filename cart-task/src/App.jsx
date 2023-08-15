import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './Data'
import Header from './Header'
import Footer from './Footer'
import Section from './Section'
import Navigation from './Navigation'


function App() {
  const [count, setCount] = useState(0);

  const getItem = (event) => {
    //console.log(event);
    if (event.target.innerText === "Add to Cart") {
      addItem(event);
    } else if (event.target.innerText === "Remove from Cart") {
      removeItem(event);
    }
  };

  function addItem(event) {
    setCount(count + 1);
    event.target.innerText = "Remove from Cart";
    event.target.classList.value = "btn btn-outline-danger mt-auto";
  }

  function removeItem(event) {
    setCount(count - 1);
    event.target.innerText = "Add to Cart";
    event.target.classList.value = "btn btn-outline-dark mt-auto";
  }

  return (
    <>
      <Navigation count={count} />
      <Header />
      <Section data={data} getItem={getItem} />
      <Footer />
    </>
  );
}

export default App;