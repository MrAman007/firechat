import React, { useState } from "react";
import { db, auth } from "../firebase";
import { Input, Button } from "@material-ui/core";
import firebase from "firebase";

import uuid from "react-uuid";

function SendMessage({ scroll }) {
    const [message, setMessage] = useState("");

    async function sendMessage(e) {
        e.preventDefault();
        const { uid, photoURL } = auth.currentUser;

        await db.collection("messages").add({
            id: uuid(),
            text: message,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setMessage("");
        scroll.current.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <Input
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Message..."
                        type="text"
                        style={{
                            width: "78%",
                            fontSize: "15px",
                            fontWeight: "550",
                            marginLeft: "5px",
                            marginBottom: "-3px",
                        }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        style={{
                            width: "18%",
                            fontSize: "15px",
                            fontWeight: "550",
                            margin: "4px 5% -13px 5%",
                            maxWidth: "200px",
                        }}
                        type="submit"
                    >
                        Send
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default SendMessage;
