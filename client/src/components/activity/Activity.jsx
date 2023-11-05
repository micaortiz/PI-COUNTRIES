const Activity = ({name, duration, difficulty, season}) => {
    return ( 
        <div>
            <h3>{name}</h3>
            <h4>Duration {duration} hs</h4>
            <h4>Difficulty {difficulty}</h4>
            <h4>Season {season}</h4>
        </div>
     );
}
 
export default Activity;