const Button = ({onClick, id, className, label, type, style}) => {
    
    return(
        <>
            <button 
            id={id} 
            className= {className} 
            type={type}
            onClick = {onClick}
            style={style}
            >
                {label}
            </button>
        </>
    )
}
export default Button