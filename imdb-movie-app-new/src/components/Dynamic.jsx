function Dynamic(){
    let myName = 'Kunta';
    let fullName = () => {
        return 'Kunta Prakash Dhutade'
    }


    return <h3>
        Hello added the my name is {myName}  and  fullname is {fullName()}
    </h3>
}

export default Dynamic;