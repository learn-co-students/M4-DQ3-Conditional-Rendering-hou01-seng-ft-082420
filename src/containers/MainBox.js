import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor(){
    super()
    this.state = {
      display: Profile()
    }
  }

  render() {
    
   const detailsToDisplay = (e) => {
      console.log(e.target.id)
      if (e.target.id === "profile"){
        this.setState({display: Profile()})
      }
      else if (e.target.id === "photo"){
        this.setState({display: Photos()})
      }
      else if (e.target.id === "cocktail"){
        this.setState({display: Cocktails()})
      }
      else if (e.target.id === "pokemon"){
        this.setState({display: <Pokemon />})
      }

    }
    /*
    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */



    return (
      <div>
        <MenuBar detailsToDisplay={detailsToDisplay}/>
        {this.state.display}
      </div>
    )
  }

}

export default MainBox
