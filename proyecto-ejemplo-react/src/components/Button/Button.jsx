
import "./Button.css"
import PropTypes from 'prop-types'; // ES6

Button.propTypes = {
    titulo: PropTypes.string,
    background: PropTypes.string
};
// props
function Button({titulo, background}) {

    return (
        <button className={background}>{titulo}</button>
    );
}

export default Button;