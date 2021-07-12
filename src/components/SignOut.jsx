import React from "react";
import { auth } from "../firebase";
import { Button } from "@material-ui/core";
function SignOut() {
    return (
        <div>
            <Button onClick={() => auth.signOut()}>Log out</Button>
        </div>
    );
}

export default SignOut;
