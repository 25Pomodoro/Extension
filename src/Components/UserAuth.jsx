import { collection, addDoc } from "firebase/firestore";
import { db } from "./Firebase";
import { useState } from "react";


function UserAuth() {
    // prompt user to enter first name, last name, and email
    // add user to firebase

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const addUser = async () => {
        try {
            const docRef = await addDoc(collection(db, "users"), {
                first: firstName,
                last: lastName,
                email: email
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const isValid = firstName && lastName && email;

    return (
        <div>
            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {isValid ?
                <button onClick={addUser}>
                    Add User
                </button>
                :
                <button disabled>
                    Add User
                </button>
            }
        </div>

    )
}

export default UserAuth;