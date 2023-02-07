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
            />
        </div>
    )
}

export default TextArea;