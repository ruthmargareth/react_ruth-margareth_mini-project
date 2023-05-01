const TextArea = ({text, name, style, className, value, onChange }) => {
    return(
        <>
            <textarea
            id={text}
            name ={name}
            style={style}
            className={className}
            rows={3}
            value={value}
            onChange={onChange}
            />
        </>
    )
}

export default TextArea