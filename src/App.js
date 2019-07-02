import React from 'react';
import Button from"./ImprovedButton"

import ImprovedButton2 from "./ImprovedButton2"


const person=[ 
{
    name:'sarra',
    imgsrc:'sarrra.jpg',
    description:'hffjfkroflfkf'
},
{
    name:'Harold',
    imgsrc:'Harold.jpg',
    description:'trhytyyr'
},
{
    name:'Daniel',
    imgsrc:'Daniel.jpg',
    description:'hfffififkd'
}
]
    
class App extends React.Component {
    state= {
      index:0
    }
  
    render() {
      return (<div>
        <div>
        {person.map((e, i) => <Button onClick={()=>this.setState({
          index: i
        
        }) } name={e.name} />)
  
  
    } </div>
    <ImprovedButton2 
    name={person[this.state.index].name} title={person[this.state.index].name} src={person[this.state.index].imgsrc} descri={person[this.state.index].description}
    />
     </div>)
    }
  }
  
  export default App;