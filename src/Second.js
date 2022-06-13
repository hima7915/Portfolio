import Cat from "./Cat";
import Dog from "./Dog";

function Second()
{
    return(
        <div className="second">
            <div className="dog">
                <Dog />
                <h2 className="dogtext">What Do I do?</h2>
            </div>
            <div className="cat">
                <Cat />
                <h2>Who am I as a person?</h2>
            </div>
        </div>
    )
}

export default Second;