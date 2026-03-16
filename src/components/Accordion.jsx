import { useState } from "react";
import {GoChevronLeft,GoChevronDown} from "react-icons/go";

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(2);

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        const content = isExpanded && <div className="border-b p-5">{item.content}</div>

        const icon = <span className="text-2xl">{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>

        return (
            <div key={item.id}>
                <div className="justify-between flex p-3 bg-grey-50 border-b items-center cursor-pointer" onClick={()=>setExpandedIndex(index)}>{item.label}{icon}</div>
                {content}
            </div>
        );
    });


    return <div className="border-x border-t rounded"> {renderedItems} </div>;
}

export default Accordion;