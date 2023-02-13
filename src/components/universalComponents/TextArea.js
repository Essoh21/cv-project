const TextArea = (props) => {
    return (
        <div>
            <label htmlFor={props.areaId}>
                {props.areaLabelContent}
            </label>
            <textarea
                id={props.areaId}
                rows={props.areaRows}
                cols={props.areaCols}
                onChange={props.handleChange}
                name={props.textAreaName}
            />
        </div>
    )
}

export default TextArea;