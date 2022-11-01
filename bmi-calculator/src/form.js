import React from "react";
import Result from "./result";

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {weight: '', height: ''};
  
      this.handleChange = this.handleChange.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      console.log(event.target.value);
      this.setState({[event.target.name]: event.target.value})
    }
  
    //////////////// NOT WORKING WAY//////////////
    // handleSubmit(event) {
    // //   alert('A name was submitted: ');
    //   event.preventDefault();
    //   console.log('onSumbit get fired');

    //   //to clear the form after submit 
    //   this.setState({weight: '', height: ''});
    // }

    //HERE WE USE TO DO ANYTHING WE WANT WITH THE INPUTS LIKE DATABASE OR ECT...
    handleSubmit = (e) => {
        alert('A weight was submitted:' + this.state.weight + 'and the height is ' + this.state.height);
        // e.preventDefault();
        console.log('onSumbit get fired');

        // <Result/>
        localStorage.setItem('weight',this.state.weight)
        localStorage.setItem('height' , this.state.height)

       //to clear the form after submit 
    this.setState({weight: '',height: '' })
}
  
    render() {
      return (
        <form className="form" onSubmit={this.handleSubmit}>
          <label>
            Weight:
            <input name="weight" type="text" value={this.state.weight} onChange={this.handleChange} />
          </label>

          <label>
            Height:
            <input name="height" type="text" value={this.state.height} onChange={this.handleChange} />
          </label>
          <input className="button" type="submit" value="Calculate BMI" />
        </form>
      );
    }
  }

export default Form;


