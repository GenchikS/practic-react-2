
const ClickButoon = ({message, children}) => {
    return (
        <button onClick={() => alert(message)}>{children }</button>
    )
}

export default ClickButoon;