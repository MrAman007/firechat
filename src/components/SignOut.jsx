import React from "react";
import { auth } from "../firebase";
import { Button } from "@material-ui/core";
function SignOut() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "flex-start",
                position: "fixed",
                width: "100%",
                backgroundColor: "#FAFAFA",
                top: 0,
                borderBottom: "solid 1px lightgray",
                zIndex: "10",
                padding: "0.5rem 1rem",
            }}
        >
            <Button
                variant="outlined"
                size="medium"
                color="secondary"
                onClick={() => auth.signOut()}
            >
                Log out
            </Button>
        </div>
    );
}

export default SignOut;
