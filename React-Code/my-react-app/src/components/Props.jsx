import React from 'react'
import './Props.css'


                      //  1.way to defining the props

// const Navbar = ({logoText,color,backgroundColor}) => {
//   return (
//     <div className='container' style={{color:color, backgroundColor:backgroundColor}} >
//       <div className="lologoText">{logoText}</div>
//         <ul>
//             <li>Home</li>
//             <li>About</li>
//             <li>contact</li>
//         </ul>
//     </div>
//   )
// }


              // 2. Destructuring - Professional Way)



const Props = (props) => {
  return (
    <div className='container' style={{color:props.color, backgroundColor:props.backgroundColor}} >
      <div className="logoText">{props.logoText}</div>
        <ul>
          {props.items.map((item,index)=>{
            return<li key={index}>{item}</li>
          })}
            {/* <li>Home</li>
            <li>About</li>
            <li>contact</li> */}
        </ul>
    </div>
  )
}

export default Props
