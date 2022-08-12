import User from "./user.js"
import "./style.css"

const ListComponent = () => {
    return <div className="user-list">
        <h2> List of Users </h2>
        <User name="Batman" age={45} gender="M" />
    </div>
};

export default ListComponent;