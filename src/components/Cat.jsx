import PropTypes from 'prop-types';
import { useState } from 'react';

const Cat = ({ name, color, personality, caretaker }) => {
    // let petCount = 0;
    const [petCount, setPetCount] = useState(0);

    const petCat = () => {
      // console.log(`${name} is purring`);
      // petCount += 1;
      setPetCount(petCount => petCount + 1);
    };

    const handleClick = (event) => {  // eslint-disable-line no-unused-vars
      petCat();
    };

    return (
        <>
			<li>
				<h2>Name of Cat: {name}</h2>
				<h3>Color: {color}</h3>
        <h3>Personality: {personality}</h3>
        <h3>Caretaker: {caretaker}</h3>
        <h3># of Pets: {petCount}</h3>
				<button onClick={handleClick}>Pet</button>
			</li>
		</>
    );
};

Cat.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  personality: PropTypes.string.isRequired,
  caretaker: PropTypes.string.isRequired
};

export default Cat;


