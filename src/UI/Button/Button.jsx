import './Button.css';

const Button = ({ text, type, onclick, hover, active }) => {
  return (
    <button
      className={`btn ${type === 'dark' ? 'btn-dark' : 'btn-light'}${hover}${
        active ? '_active' : ''
      }`}
      onClick={onclick}
    >
      {text}
    </button>
  );
};

export default Button;
