const Bouton = ({ onClick, text }) => {
    return(
        <button onClick={onClick}>
            {text}
        </button>
    );
};

export default Bouton;