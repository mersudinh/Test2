import {
  withStepProgress,
  useStepProgress,
  Step,
  StepProgressBar
} from "react-stepz";
import "react-stepz/dist/index.css";
import { useState } from "react";

const App = () => {
  const [isValid, setIsValid] = useState(false);

  const steps = [
    {
      label: "Step 1",
      name: "step 1"
    },
    {
      label: "Step 2",
      name: "step 2",
      validator: () => isValid
    },
    {
      label: "Step 3",
      name: "step 3"
    },
    {
      label: "Step 4",
      name: "step 4"
    }
  ];

  const { stepForward, stepBackwards, currentIndex } = useStepProgress({
    steps,
    startingStep: 0
  });

  return (
    <div>
      <StepProgressBar steps={steps} />
      <Step step={0}>
        <h1>First step</h1>
      </Step>
      <Step step={1}>
        <h1>Second step</h1>
        <span>Is valid: {isValid ? "yes" : "no"}</span>
        <button onClick={() => setIsValid(true)}>Validate</button>
      </Step>
      <Step step={2}>
        <h1>Third Step</h1>
      </Step>
      <button onClick={stepForward}>Next</button>
      <button onClick={stepBackwards}>Back</button>
    </div>
  );
};

export default withStepProgress(App);
