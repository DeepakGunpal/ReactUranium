import User from "./user.js"
import "./style.css"
import userList from "./users.json";

const ListComponent = () => {
    return <div className="user-list">
        <h2> List of Users </h2>
        {/* <User name="Batman" age={45} gender="M" /> */}
        {userList.map((userData, index) =>
            <User
                name={userData.name}
                age={userData.age}
                gender={userData.gender}
                // key={userData.name}
                key={index}
            />)}
    </div>
};

export default ListComponent;