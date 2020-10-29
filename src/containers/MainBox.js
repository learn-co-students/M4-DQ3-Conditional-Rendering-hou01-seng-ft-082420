import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor(){
    super()
    this.state = {
      display: 'profile'
    }
  }

  changeDisplay = (id) => {
    console.log("clicked", id)
    this.setState({
      display: id
    })
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */
   let currentDisplay
   if (this.state.display === 'profile'){
    currentDisplay = <Profile/>
   }else if (this.state.display === 'photo'){
    currentDisplay = <Photos/>
   }else if (this.state.display === 'cocktail'){
    currentDisplay = <Cocktails/>
   }else if (this.state.display === 'pokemon'){ 
    currentDisplay = <Pokemon/>
   }

  //  function example(…) {  
  // return condition1 ? value1         
  // : condition2 ? value2         
  // : condition3 ? value3         
  // : value4;}



    return (
      <div>
        <MenuBar changeDisplay = {this.changeDisplay} display = {this.state.display}/>
        {/* {currentDisplay} */}
        {this.state.display === 'profile' ? <Profile/>
        :this.state.display === 'photo' ? <Photos/>
        :this.state.display === 'cocktail' ? <Cocktails/>
        :<Pokemon/>
        }
      </div>
    )
  }

}

export default MainBox
