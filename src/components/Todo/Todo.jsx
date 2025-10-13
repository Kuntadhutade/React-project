import { useState } from "react";

const Todos = () => {   
     const todosList = [
        {todo: "milk"},
        {todo: "sugar"}, 
        {todo: "butter"} 
    ];

   const [todos, setTodos] = useState(todosList);   
   const [name, setName] = useState(""); 

   const handleAddTodo = () => {  
     if (name === "") return;
    setTodos([...todos,{ todo: name }
    ]) 
    
   setName("");   
 }

   const handleDelete = (e,deleteuser) => {  
      console.log(deleteuser);   
       const updatedTodos =  todos.filter((item) => item.todo !== deleteuser);   
        setTodos(updatedTodos);   
    };      
         return (       
             <div className="d-flex align-items-center justify-content-center" style={{ flexDirection: "column" }}>            
             <h1>Todo List</h1>          
               <div style={{margin:"20px"}}>               
                 <input placeholder="Add-todo" value={name} onChange={(e)=> setName(e.target.value)}/>                
                 <button className="btn btn-primary" onClick={handleAddTodo}>Add</button> 


                  {
                  todos.map((item , index) => (             
                                    
                     <h4>  {item.todo} 
                                          
                     <span className="btn btn-primary btn-sm" onClick={(e)=> handleDelete(e,item.todo)}>Delete </span>                   
                      </h4>               
                       )
                    )

                             
                }   
                             
                     </div>        
                     </div>    
                     );
                    };
                    export default Todos;



