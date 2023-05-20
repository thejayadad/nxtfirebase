
import {auth, googleAuthProvider} from "../lib/firebase.js"


export default function EnterPage(props){
    const user = null;
    const username = null;
    return (
        <main>
            {user ?
              !username ? <UsernameForm /> : <SignOutButton />
              :
                <SignInButton />
            }
        </main>
    )
}

function SignInButton (){
    const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
    }

    return (
        <button onClick={signInWithGoogle}>
            Sign in with Google
        </button>
    )

}

function SignOutButton(){
    return <button onClick={() => auth.signOut()}>Sign Out</button>
}

function UsernameForm(){

}