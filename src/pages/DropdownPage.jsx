import Dropdown from "../components/Dropdown";
import { useState } from "react";

function DropdownPage() {
  const [selected, setSelected] = useState(undefined);

  const options = [
    {
      label: "The Color Red",
      value: "red",
    },
    {
      label: "The Color Green",
      value: "green",
    },
    {
      label: "A Shade of Blue",
      value: "blue",
    },
  ];

  return (
    <div className="flex">
      <Dropdown options={options} value={selected} onChange={setSelected} />
      <Dropdown options={options} value={selected} onChange={setSelected} />
    </div>
  );
}

export default DropdownPage;
