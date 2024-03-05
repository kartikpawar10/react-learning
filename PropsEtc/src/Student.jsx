// Including Proptypes help to make debbuging Simple
// Is PreDefined the Datatypes of the props
import PropTypes from 'prop-types'
function Student(props){
    return (
        <>
            <div className="student">
                <p>Name : {props.name}</p>
                <p>class : {props.class}</p>
                <p>Student : {props.rollNo ? "Yes" : "No"}</p>
            </div>
        </>
    );
}

Student.PropTypes = {
    name:PropTypes.string,
    class:PropTypes.string,
    rollNo:PropTypes.bool,
}
// default Props are used 
// so that the there is not empty value
Student.defaultProps = {
    name:"Guest",
    class :"0",
    rollNo : false
}
export default Student