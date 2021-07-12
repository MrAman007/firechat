import React, { useState, useEffect, useRef } from "react";
import { db, auth } from "../firebase";
import SendMessage from "./SendMessage";

function Chat() {
    const scroll = useRef();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        db.collection("messages")
            .orderBy("createdAt")
            .limit(50)
            .onSnapshot((snapshot) =>
                setMessages(snapshot.docs.map((doc) => doc.data()))
            );
    }, []);

    useEffect(() => {
        scroll.current.scrollIntoView({ block: "end", behavior: "smooth" });
    });

    return (
        <div>
            <div className="msgs">
                {messages.map(({ id, text, photoURL, uid }) => (
                    <div key={id}>
                        <div
                            className={`msg ${
                                uid === auth.currentUser.uid
                                    ? "sent"
                                    : "received"
                            }`}
                        >
                            <img src={photoURL} alt="profile pic" />
                            <p>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
        </div>
    );
}

export default Chat;
