import { Button } from 'react-bootstrap';
function Jumbotron(){
    return(
        <div className="Jumbotron">
            <h1>Hello, world!</h1>
            <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
            </p>
            <p>
            <Button variant="primary">Learn more</Button>
            </p>
        </div>
    );
}

export default Jumbotron;