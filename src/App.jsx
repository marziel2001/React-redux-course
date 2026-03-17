import Dropdown from "./components/Dropdown";
import { useState } from "react";

function App() {
    const [selected, setSelected] = useState(undefined);

    const options = [
        {
            label: "The Color Red", value: "red"
        },
        {
            label: "The Color Green", value: "green"
        },
        {
            label: "A Shade of Blue", value: "blue"
        }
    ]

    return <Dropdown options={options} value={selected} onChange={setSelected} />
}

export default App;