import React from "react";

function Result(props) {

  let myResult = props.result;
  // let weight = props.weight;
  // let height = props.height;
  // let result = (weight / height / height) * 10000;
  console.log(myResult);

  // this.state = { weight: this.props.weight, height: this.props.height };
  // console.log(this.props.weight);
  function swit(value) {
    if (value <= 18) {
      return "You are Underweight";
    }
    if (value > 18.5 && value < 24.9) {
      return "You are at the Normal weight";
    }
    if (value >= 25 && value < 29.9) {
      return "You are at the Overweight";
    } else {
      return "You are at the Opacity stage !! ";
    }
  }

  return (
    <div className="div">
      {/* <h5>You Weight is {weight}</h5>
      <h5>You Height is {height}</h5> */}
      <h3>Your Body Mass Index (BMI) is : {myResult.toFixed(2)}</h3>
      <h1 className="color">Result : </h1>
      <h1>{swit(myResult)}</h1>
    </div>
  );
}

export default Result;

//Body Mass Index is a simple calculation using a person’s height and weight.
//  The formula is BMI = kg/m2 where kg is a person’s weight in kilograms and m2 is their height in metres squared.

// Equation BMI = [weight (kg) / height (cm) / height (cm)] x 10,000
