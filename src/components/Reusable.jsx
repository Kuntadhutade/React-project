function Reusable(){

 let number = Math.random() * 10;

return(
<h2 style={{'background-color':'red'}}>Random number is: {Math.round(number)}</h2>
)
}


export default Reusable;