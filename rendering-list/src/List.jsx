const List = () =>{
    const fruits = [
    {name:"apple",calories:59},
    {name:"orange", calories:14},
    {name:"banana", calories:174},
    {name:"coconut", calories:344},
    {name:"pineapple",calories:299}
]
    const listItems = fruits.map(fruit=><li>{fruit}</li>)
    return (<ol>{listItems}</ol>);
}

export default List