import { useState } from "react";


function Dropdown({options, value, onChange}) {
    const [isOpen, setIsOpen] = useState(false);
    const textToShow = value?.label || "Select...";

    const handleClick = (option) => {
        onChange(option);
        setIsOpen(false);
    }

    const dropDown = options.map(
        (option) => {
            return <div onClick={() => handleClick(option)} key={option.value}>
                {option.label}
            </div>
    });

    return (
        <>
            <div onClick={()=>setIsOpen(!isOpen)}>{textToShow}</div>
            {isOpen && <div>{dropDown}</div>}
        </>
    )
}

export default Dropdown;