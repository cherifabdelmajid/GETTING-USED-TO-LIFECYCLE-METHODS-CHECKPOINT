import React from "react"
export default class Daniel extends React.Component{
   
   render(){
       return <button onClick={this.props.onSimpleClick}>
       Daniel
       </button>
   }
}