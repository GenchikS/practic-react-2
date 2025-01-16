import { useState } from "react";

const ClickButton2 = () => {
    const [click, setClick] = useState(0);
    const handleClick = () => {
        setClick(click + 1);
    }
    return (
        <button onClick={handleClick}>Current: { click}</button>
    )
}

export default ClickButton2;