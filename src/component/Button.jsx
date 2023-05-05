const Button = ({onClick, id, className, label, type, style, toggle, target, dismiss}) => {
    
    return(
        <>
            <button 
            id={id} 
            className= {className} 
            type={type}
            onClick = {onClick}
            style={style}
            data-bs-toggle={toggle}
            data-bs-target={target}
            data-bs-dismiss={dismiss}
            >
                {label}
            </button>
        </>
    )
}
export default Button