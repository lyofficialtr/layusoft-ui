import {LyButton, LyCheckboxInput, LyTextInput} from "../lib/index";

function App() {
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
        <LyCheckboxInput />
      </div>

    </div>


  )
}

export default App
