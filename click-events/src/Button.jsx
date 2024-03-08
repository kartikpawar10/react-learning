/* click  event = An interaction when a user clicks on
We can respond to clicks by passing a callback to the onClick event handler
*/


function Button(){
    let count = 0;
    const handleClick = ()=>{
        if(count<3){
            console.log("Yeh Badiya tha guru    ")
        }else{
            console.log("Abe Yrr")
            if(count == 6){
                count = 0;
            }
        }
        count++;
    }
    const handleClick2 = (name)=>console.log(`${name} stop clicking me`)
    return(<>
        <button onClick={handleClick}>Click me</button>
        <button onClick={()=>handleClick2('Kartik')}>Click me2</button>
    </>)
}

export default Button