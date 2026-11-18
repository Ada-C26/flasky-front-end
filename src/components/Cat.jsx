import PropTypes from 'prop-types';

const Cat = ({ name, color, personality, caretaker }) => {
    return (
        <>
			<li>
				<h2>Name of Cat: {name}</h2>
				<h3>Color: {color}</h3>
        <h3>Personality: {personality}</h3>
        <h3>Caretaker: {caretaker}</h3>
				<button>Pet</button>
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


