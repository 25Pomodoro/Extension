import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect } from "react";

function sign_in_with_google() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        localStorage.setItem("25Pom-user-data", JSON.stringify(user));
        localStorage.setItem("25Pom-user-token", token);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const auth = getAuth();
    auth.onAuthStateChanged((user, token) => {
      if (user) {
        localStorage.setItem("25Pom-user-data", JSON.stringify(user));
        localStorage.setItem("25Pom-user-token", token);
      }
    }, []);
  });

  return signInWithGoogle;
}

export default sign_in_with_google;
