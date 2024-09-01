import { collection, addDoc } from "firebase/firestore";
import { db } from "./Firebase";
import { useContext } from "react";
import { useState } from "react";
import App from "../App.jsx";

function UserAuth(loginControl) {
    // prompt user to enter first name, last name, and email
    // add user to firebase

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [id, setId] = useState("");

    const addUser = async () => {
        try {
            // add new user to firebase collection with document id of first-name-last-name-email
            const docRef = await addDoc(collection(db, "users"), {
                first: firstName,
                last: lastName,
                email: email
            });


            // save user data to local storage
            localStorage.setItem("25Pom-user-data", JSON.stringify({
                id: docRef.id,
                firstName: firstName,
                lastName: lastName,
                email: email
            }));

            console.log("User created: ", docRef);
            console.log("User data saved to local storage: ", JSON.parse(localStorage.getItem("25Pom-user-data")));

            loginControl(true);
        } catch (e) {
            console.error("Error adding user: ", e);
            loginControl(false);
        }
    }

    const isValid = firstName && lastName && email;

    return (
        <div>
            <p className={"text-2xl font-semibold select-none mb-8"}>Let's get productive</p>
            <input
                type="text"
                placeholder="First Name"
                value={firstName}
                className={"border-1 border-gray-300 rounded-md p-2 m-2"}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <br/>
            <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                className={"border-1 border-gray-300 rounded-md p-2 m-2"}
                onChange={(e) => setLastName(e.target.value)}
            />
            <br/>
            <input
                type="email"
                placeholder="Email"
                value={email}
                className={"border-1 border-gray-300 rounded-md p-2 m-2"}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br/>
            {isValid ?
                <button onClick={addUser} className={"border-1 border-gray-300 bg-gray-50 rounded-md p-2 m-2"}>
                    Sign up
                </button>
                :
                <button disabled onClick={addUser} className={"border-1 border-gray-300 bg-gray-50 rounded-md p-2 m-2"}>
                    Sign up
                </button>
            }
        </div>

    )
}

export default UserAuth;