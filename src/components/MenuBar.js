import React from 'react'
const MenuBar = (props) => {
  return (
    <div className="ui four item menu">
      <a className="item active" id="profile" onClick={() => props.changeSelected("profile")}>
        <i className="user large icon" id="profile"/>
      </a>
      <a className="item" id="photo" onClick={() => props.changeSelected("photo")}>
        <i className="photo large icon" id="photo" />
      </a>
      <a className="item" id="cocktail" onClick={() => props.changeSelected("cocktail")}>
        <i className="cocktail large icon" id="cocktail"/>
      </a>
      <a className="item" id="pokemon" onClick={() => props.changeSelected("pokemon")}> 
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )
}
export default MenuBar
