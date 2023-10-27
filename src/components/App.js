import React, {useState} from "react";
import "/Users/ms/Documents/Moringa/React/react-hooks-state-and-events-lab/src/index.css";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const buttonLabel = theme === 'dark' ? 'Dark Mode' : 'Light Mode'
  
  return (
    <div className={`App ${theme}`}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleTheme}>{buttonLabel}</button>
      </header>
      <ShoppingList items={itemData} />
      
    </div>


  );
}

export default App;



