import './App.css';
import './index.css';
import DATA from './data';
import CatList  from './components/CatList';
import { useState } from 'react';

const petCat = cat => {
  return { ...cat, petCount: cat.petCount + 1};
};

function App() {
  const [catData, setCatData] = useState(DATA);

  const handlePetCat = (id) => {
    setCatData(catData => catData.map(cat => {
      if (cat.id === id){
        return petCat;
      }
      else {
        return cat;
      }
    }));
  };

  const calcTotalPets = (catData) => {
    return catData.reduce((total, cat) => {
      return total + cat.petCount;
    }, 0);
  };

  const unregisterCat = (id) => {
    setCatData(catData => catData.filter((cat) => {
      return cat.id !== id;
    }));
  };

  const totalPetTally = calcTotalPets(catData);

  return (
    <>
      <h2> Total Number of Pets Across All Kitties: { totalPetTally} </h2>
      <CatList cats={catData} onPetCat={handlePetCat} onUnregisterCat={unregisterCat}/>
    </>
  );
}

export default App;
