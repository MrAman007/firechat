import "./App.css";
import Chat from "./components/Chat";
import SignIn from "./components/SignIn";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import ButtonAppBar from "./components/ButtonAppBar";

function App() {
    const [user] = useAuthState(auth);

    return (
        <>
            <ButtonAppBar user={user} />
            {user ? (
                <Chat />
            ) : (
                <div className="signIn">
                    <SignIn />
                </div>
            )}
        </>
    );
}

export default App;
