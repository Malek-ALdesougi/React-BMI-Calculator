import React from "react";

class Result extends React.Component {
  constructor(props) {
    super();
  }

  swit(result) {
    // switch (result) {
    //   case (result <= 18.5):
    //     return 'You are Underweight';

    //   case (result > 18.5 && result < 24.9):
    //     return 'You are at the Normal weight';

    //   case if(result >= 25 && result < 29.9):
    //     return 'You are at the Overweight';

    //   default:
    //     return 'you are on the stage';
    // }
    if (result <= 18) {
      return "You are Underweight";
    }
    if (result > 18.5 && result < 24.9) {
      return "You are at the Normal weight";
    }
    if (result >= 25 && result < 29.9) {
      return "You are at the Overweight";
    } else {
      return "You are at the Opacity stage !! ";
    }
  }

  render() {
    let weight = localStorage.getItem("weight");
    let height = localStorage.getItem("height");

    let result = (weight / height / height) * 10000;
    console.log(result);
    if (result) {
      return (
        <div className="div">
          <h5>You Weight is {weight}</h5>
          <h5>You Height is {height}</h5>
          <h3>Your Body Mass Index (BMI) is :{result.toFixed(2)}</h3>
          <h1 className="color">Result :</h1>
          <h1>{this.swit(result)}</h1>
        </div>
      );
    }
  }
}

export default Result;

//Body Mass Index is a simple calculation using a person’s height and weight.
//  The formula is BMI = kg/m2 where kg is a person’s weight in kilograms and m2 is their height in metres squared.

// Equation BMI = [weight (kg) / height (cm) / height (cm)] x 10,000
