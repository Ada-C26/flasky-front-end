import PropTypes from 'prop-types';

const Cat = ({ id, name, color, personality, caretaker, petCount, onPet, onUnregister }) => {

    const increasePets = () => {
      onPet(id);
    };

    return (
        <>
			<li className="cat">
				<h2>{name}</h2>
				<h3>Color: {color}</h3>
        <h3>Personality: {personality}</h3>
        <h3>Caretaker: {caretaker}</h3>
        <h3># of Pets: {petCount}</h3>
				<button onClick={(event) => increasePets()}>Pet</button> 
        <button onClick={(event) => onUnregister(id)}>Delete Cat</button> 
			</li>
		</>
    );
};

Cat.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  personality: PropTypes.string.isRequired,
  caretaker: PropTypes.string.isRequired,
  petCount: PropTypes.number.isRequired,
  onPet: PropTypes.func.isRequired,
  onUnregister: PropTypes.func.isRequired
};

export default Cat;


