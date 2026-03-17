import { Shield, Star, Zap } from "lucide-react";
import { useState } from "react";
import { LyButton, LyCheckboxInput, LyMultiSelectInput, LyPasswordInput, LyRadioInput, LySelectInput, LyTextInput } from "../lib/index";

function App() {

  const options = [
    { id: 'free', name: 'Free Plan', icon: <Zap size={20} /> },
    { id: 'pro', name: 'Pro Plan', icon: <Star size={20} /> },
    { id: 'enterprise', name: 'Enterprise', icon: <Shield size={20} /> },
  ];

  const [selected, setSelected] = useState(options[0].id);
  const [x, setX] = useState(options[0]);
  const [y, setY] = useState([]);
  const [isChecked, setIsChecked] = useState(false);



  return (
    <div className="grid grid-cols-3 gap-5 p-5">

      <div className="flex flex-col gap-5">
        <h1>Button</h1>
        <LyButton title="AAAA" />
        <LyButton title="AAAA" />
        <LyButton title="AAAA" />
        <LyButton title="AAAA" />
      </div>

      <div className="flex flex-col gap-5">
        <h1>Input</h1>
        <LyTextInput name="aa" />
        <LyCheckboxInput isChecked={isChecked} setIsChecked={setIsChecked} label="AAAAAA"  />
        <LyPasswordInput />
        <LyMultiSelectInput name="a" value={y} onChange={(e) => setY(e)} options={options} />
      </div>

      <div className="flex flex-col gap-5">
        <h1>Select</h1>
        <LyRadioInput name="a" value={selected} onChange={(e) => setSelected(e.target.value)} options={options} />
        <LySelectInput name="a" value={x} onChange={(e) => setX(e)} options={options} />
      </div>

    </div>


  )
}

export default App
