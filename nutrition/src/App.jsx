import { Component } from "react";
import FoodBox from "./Component/Foodbox";
import "./App.css"
import FoodData from "./resources/FoodData";

class App extends Component{
  constructor(){
    super()
    this.state = {
     FoodArray : FoodData
    }

  }

render(){

let FoodDataArray = this.state.FoodArray

const handleInput = (event) => {
  if(event.target.value ==""){
    this.setState({FoodArray:FoodData})
  }
 
  let inputValue = event.target.value.toLowerCase()
  let modifiedArray = FoodDataArray.filter(function(element){
    let name = element.name
    return(
      name.includes(inputValue)
    )
  })
  this.setState({FoodArray : modifiedArray})
}


  return(
    <div className="Container">
<h3> Search</h3>
<input type="text" placeholder="Enter food name..." onChange={handleInput}/>

{
  FoodDataArray.map(function(element,index){
    let image = element.img
    let name = element.name
    let calorie = element.cal

    return (
      <div key={index}>
        <FoodBox Image={image} Name={name} Calorie={calorie} Index={index}/>
        </div>
    )
  })
}


    </div>
  )
}


}

export default App