import React from "react";
import Result from "./result";
import { useState } from "react";

function Form(props){
 
  const [weight , setWeight] = useState('');
  const [height , setHeight] = useState('');
  const [bmi , setBmi] = useState('');
  const [flag, setFlag] = useState(false);
 
  //HERE WE USE TO DO ANYTHING WE WANT WITH THE INPUTS LIKE DATABASE OR ECT...
  function handleSubmit(e){
    // alert('A weight was submitted:' + {weight} + 'and the height is ' + {height});
    e.preventDefault();
    console.log("onSumbit get fired");

    let result = weight / height / height * 10000;
    setBmi(result)

    setFlag(true);
  }

    return (
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Weight:
            <input
              name="weight"
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>

          <label>
            Height:
            <input
              name="height"
              type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>
          <input className="button" type="submit" value="Calculate BMI" />
        </form>
        {/* <p>This is the weight : {weight} And this is the height : {height}</p> */}
        { (flag ? <Result result={bmi}/> : '')}
      </div>
    );
  }

export default Form;
