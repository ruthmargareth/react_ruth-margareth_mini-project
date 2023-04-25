const TextArea = ({text, name, style, className, value, onChangeText }) => {
    return(
        <>
            <textarea
            id={text}
            name ={name}
            style={style}
            className={className}
            rows={3}
            value={value}
            onChange={onChangeText}
            />
        </>
    )
}

export default TextArea