import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { auth } from "../firebase";
import { Button, Container, Typography } from "@material-ui/core";

function SignIn() {
    const [loading, setLoading] = useState(true);
    const [loggedIn, setLoggedIn] = useState(true);

    async function signInWithGoogle() {
        setLoading(true);
        const provider = new firebase.auth.GoogleAuthProvider();
        await auth.signInWithPopup(provider);
        setLoading(false);
    }

    useEffect(() => {
        let unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (!user) {
                setLoggedIn(false);
            }
        });

        return unsubscribe;
    });

    return (
        <Container>
            {loading && loggedIn ? (
                <h3 style={{ textAlign: "center" }} className="loading">
                    Loading...
                </h3>
            ) : (
                <>
                    <Typography variant="h1">
                        Firechat
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        A free public chat app for gmail users. Be polite!
                    </Typography>
                    <Button
                        style={{
                            backgroundColor: "#DB4437",
                            color: "#fff",
                            marginTop: "1.5rem",
                        }}
                        variant="contained"
                        size="large"
                        onClick={signInWithGoogle}
                    >
                        Sign In With Google
                    </Button>
                </>
            )}
        </Container>
    );
}

export default SignIn;
