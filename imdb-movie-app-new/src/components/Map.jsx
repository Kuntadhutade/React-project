function map(){

    let foodItems = ["Dal","Greem Vegetables","Milk","Gee","Roti"];

    // let foodItems =[];                                ----------  //conditional rendering             

    // if (foodItems.length===0) {
    //     return <h3>hi I am kunta</h3>
    // }

    return(
    <>
        <h1>Healthy Food</h1>
        {/* {foodItems.length===0 ? <h3>hi I am kunta.</h3> : null} */}
        <ul className="list-group">
            {foodItems.map((item) =>(
                <li className="list-group-item">{item}</li>
            ))}

        </ul>
    </>
    )
}


export default map