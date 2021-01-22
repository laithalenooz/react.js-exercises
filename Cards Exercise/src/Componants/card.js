

function Person(props) {
    return (
        <div className="card-info">
            <div className='bakegroundCard'>
                <img src="https://i.pinimg.com/originals/ec/07/b0/ec07b0eae0c87770a21179e93df1f7de.jpg" alt="" className="background-Img" />
                <button><i className="far fa-edit"></i></button>
            </div>
            <img key={props.key} src={props.image} alt="" className="user-img" />
            <div className="information-User">
                <h2>{props.name}</h2>
                <h4>{props.specialty}</h4>
                <p>{props.summary}</p>
                <div className="soctal">
                    <a href={props.facebook} target="_blank"><i className="fab fa-facebook-f"></i></a>
                    <a href={props.linkedIn} target="_blank"><i className="fab fa-linkedin"></i></a>
                    <a href={props.gitHup} target="_blank"><i className="fab fa-github"></i></a>
                </div>
            </div>
        </div>
    );
}
export default Person;
