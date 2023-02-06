const TextArea = (props) => {
    return (
        <div>
            <label htmlFor={props.areaId}>
                {props.areaLabelContent}
            </label>
            <textarea maxLength={props.areaMaxLength} id={props.areaId} />
        </div>
    )
}

export default TextArea;