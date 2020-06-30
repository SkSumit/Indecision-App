console.log("Running from script");
var appRoot = document.getElementById("app");

class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.toogle = this.toogle.bind(this);
    this.state = {
      visible: false,
    };
  }

  toogle() {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible,
      };
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.toogle}>
          <h1>Toogle</h1>
        </button>
        {this.state.visible ? <p>Hello there! </p> : " "}
      </div>
    );
  }
}

ReactDOM.render(<Visibility />, appRoot);

// let counter = 0
// const toogle = () =>{
//     ++counter
//     render()
// }

// const render = () => {
//     const template = (
//         <div>
//             <button onClick = {toogle}><h1>Toogle</h1></button>
//             {counter%2 ==0 ? '':<p>Hello there! </p>}
//         </div>
//         )
//         ReactDOM.render(template, appRoot);
//     }
//     render()

//         const heading = {
//   title:'React App',
//   subtitle:'Hello Some1!',
//   options:[]
// }

// const onFormSubmit = (e) =>{
//   e.preventDefault()
//   const option = e.target.elements.option.value

//   if(option){
//     heading.options.push(option)
//     e.target.elements.option.value = ' '
//     console.log(option)
//     renderCounter()
//   }
// }

// const resetOption = () =>{
//    heading.options = []
//    renderCounter()
// }

// const suggest= () =>{

//   const number = Math.floor(Math.random() * heading.options.length)
//   const suggestion = heading.options[number]
//   alert(suggestion)

// }

// const renderCounter = () =>{
// var template = (
//   <div>
//     <h1>{heading.title ? heading.title:"Anon"} </h1>
//     {heading.subtitle ? <p>{heading.subtitle}</p>:''}
//     <p> {heading.options.length>0 ? 'Here are your options ':'No options!'}</p>
//     <p> {heading.options.length}</p>
//     <button disabled ={heading.options.length === 0} onClick = {suggest}>Suggest</button>
//     <form onSubmit = {onFormSubmit}>
//      <input type="text" name="option"></input>
//      <button>Add Option</button>
//     </form>
//     <button disabled ={heading.options.length === 0} onClick = {resetOption}>Reset Options</button>
//     <ol>
//     {
//       heading.options.map((option)=>{
//         return <li key={option}>{option}</li>

//       })
//     }
//     </ol>
//   </div>
// );
// ReactDOM.render(template, appRoot);

// }

// renderCounter()

// let count = 0
// const addOne = () =>{
//   console.log('add')
//   count++
//   renderCounter()
// }
// const subOne = () =>{
//   console.log('sub')
//   --count
//   renderCounter()
// }
// var appRoot = document.getElementById("app");
// const renderCounter = () =>{

//   const template = (
//     <div>
//       <h1>Counter {count}</h1>
//       <button onClick = {addOne}> +1 </button>
//       <button onClick = {subOne}> -1 </button>
//     </div>
//   );
//   ReactDOM.render(template, appRoot);

// }

// renderCounter()
