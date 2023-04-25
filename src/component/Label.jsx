const Label = ({html, label, className}) => {
    return(
        <>
            <label 
            htmlFor={html} 
            className={className}>
                {label}
            </label>
        </>
    )
}

export default Label