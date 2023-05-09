const Input = ({id, name, type, className, value, placeholder, onChange}) => {
    return(
        <>
            <input
            id={id}
            name={name}
            type={type}
            className={className}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            required
            />
        </>
    )
}

export default Input