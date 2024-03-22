import SignUpForm from '../components/SignUpForm';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default SignUpPage;


function SignUpPage() {
  
  const auth = getAuth();
  
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

  return (
    <div>
      <h1>Sign Up</h1>
      <SignUpForm />
    </div>
  );
}



