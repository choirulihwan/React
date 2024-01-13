function ButtonGeneric({label, onClick, counter}) {
    const disabled = (label == 'Reset' && counter <= 9 && counter >= 0) ? 'disabled' : '';
    return (
        <>
            <button onClick={onClick} disabled={disabled}>{label}</button>
        </>
    );            
}

export default ButtonGeneric;