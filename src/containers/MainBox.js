import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'
let pokemon = new Pokemon
console.log(pokemon)
class MainBox extends React.Component {
  constructor() {
    super()
    this.state = {
      selected: <Profile/>
    }
  }
  changeSelected = (value) => {
    let val
    if (value === "profile") {
      val = <Profile/>
    } else if (value === "photo") {
      val = <Photos/>
    } else if (value === "cocktail") {
      val = <Cocktails/>
    } else {
      val = <Pokemon/>
    }
    this.setState ({
      selected: val
    })
  }
  render() {
    return (
      <div>
        <MenuBar changeSelected={this.changeSelected}/>
        {this.state.selected}
      </div>
    )
  }
}
export default MainBox