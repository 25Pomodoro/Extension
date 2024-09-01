import { collection, addDoc } from "firebase/firestore";
import { db } from "./Firebase";
import { useState } from "react";

function UserAuth({ loginControl }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const addUser = async () => {
        if (!isValid) {
            console.error("Validation failed.");
            return;
        }

        try {
            const docRef = await addDoc(collection(db, "users"), {
                first: firstName,
                last: lastName,
                email: email
            });

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
    };

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
            <button
                onClick={addUser}
                className={`border-1 border-gray-300 bg-gray-50 rounded-md p-2 m-2 ${isValid ? '' : 'opacity-50 cursor-not-allowed'}`}
                disabled={!isValid}
            >
                Sign up
            </button>
        </div>
    );
}

export default UserAuth;
