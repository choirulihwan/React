function TextGeneric({label}) {
    if (label > 9 || label < 0) {
        label = 'Done!';
    }
  
    return (
        <>
            <span>{label}</span>
        </>
    );            
}

export default TextGeneric;
  