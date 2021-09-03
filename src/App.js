import './App.css';
import ExchangeRates from "./components/ExchangeRates";
import DogBreeds from "./components/DogBreeds";
import {useState} from "react";
import DogPhoto from "./components/DogPhoto";

function App() {
    const [selectedDog, setSelectedDog] = useState(null);

    function onDogSelected({ target }) {
        setSelectedDog(target.value);
    }
  return (
      <div>
        <h2>My first Apollo app 🚀</h2>

          {selectedDog && <DogPhoto breed={selectedDog}/>}
          <DogBreeds onDogSelected={onDogSelected}/>
      </div>
  );
}

export default App;
