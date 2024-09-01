import { collection, addDoc } from "firebase/firestore";
import { db } from "./Firebase";
import { getDocs } from "firebase/firestore";
import {useEffect, useState} from "react";

function UserAuth({ loginControl }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    class UserExistsError extends Error {
        constructor(message) {
            super(message);
            this.name = "UserExistsError";
        }
    }

    const checkUserExists = async () => {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            if (doc.data().email === email) {
                alert("User already exists: ");
                localStorage.setItem("25Pom-user-data", JSON.stringify({
                    id: doc.id,
                    firstName: doc.data().first,
                    lastName: doc.data().last,
                    email: doc.data().email
                }));
                loginControl(true);
                window.location.reload();

                throw new UserExistsError("User already exists");

            }
        });
    }

    const addUser = async () => {
        if (!isValid) {
            console.error("Validation failed.");
            return;
        }

        try {
            await checkUserExists()

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
            window.location.reload();
        } catch (e) {
            if (e instanceof UserExistsError) {
                console.error("User already exists");
            } else {
                console.error("Error adding document: ", e);
            }
        }
    };

    const validEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const validName = (name) => {
        return name.length > 0;
    }

    const isValid = validName(firstName) && validName(lastName) && validEmail(email);
    const isEmailValid = validEmail(email);

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
                pattern=".+@example\.com"
                value={email}
                className={"border-1 border-gray-300 rounded-md p-2 m-2"}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br/>
            {isValid ? null : <p className={"text-red-500 font-bold"}>Please enter valid details</p>}
            {isEmailValid ? null : <p className={"text-red-500 font-bold"}>Please enter a valid email</p>}
            <button
                onClick={checkUserExists}
                id={"submit-button"}
                className={`border-1 border-gray-300 bg-gray-50 rounded-md p-2 m-2 ${isValid ? '' : 'opacity-50 cursor-not-allowed'}`}
                disabled={!isValid}
            >
                Sign up
            </button>
        </div>
    );
}

export default UserAuth;
