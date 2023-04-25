const Input = ({id, name, type, className, value, placeholder, onChangeText}) => {
    return(
        <>
            <input
            id={id}
            name={name}
            type={type}
            className={className}
            value={value}
            placeholder={placeholder}
            onChange={onChangeText}
            />
        </>
    )
}

export default Input