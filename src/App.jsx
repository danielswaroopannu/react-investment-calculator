import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue, // + will covert the value to a number
      };
    });
  }

    const inputIsValid = userInput.duration >= 1; 
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput}/>
      {inputIsValid ? <Results input={userInput}/> : <p className="center">Please enter a duration greater than zero</p>}
    </>
  );
}

export default App;
