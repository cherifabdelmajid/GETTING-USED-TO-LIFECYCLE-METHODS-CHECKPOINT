import React from "react"
export default class Harold extends React.Component{
   
   render(){
       return <button onClick={this.props.onSimpleClick}>
       Harold
       </button>
   }
}