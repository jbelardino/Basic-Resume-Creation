// import React,{Component} from 'react'

// class App extends Component{

//   constructor(props){
//     super(props)
//     this.state = {counter:0, input_value:''}
//   }

//   /*componentDidMount(){
//     console.log('componentDidMount has been called')
//   }

//   componentDidUpdate(){
//     console.log('componentDidUpdate has been called')
//   }*/

//   increment = (event) => {
//     //let x = this.state.counter + 1
//     //this.setState({counter:x})
//     console.log(event.target.value)
//     this.setState({input_value:event.target.value})

//   }

//   render(){
//     //console.log('render function is called')
//     return(
//       <div>
//         <div>
//           <button onClick={this.increment}>Click</button>
//           <p>Count is: {this.state.counter}</p>
//         </div>
//         <div>
//           <p>Enter your list</p>
//           <input 
//             type="text" 
//             value={this.state.input_value} 
//             onChange={this.increment}
//           >
            

//           </input>
//         </div>
//       </div>
//     )
//   }
// }

// export default App