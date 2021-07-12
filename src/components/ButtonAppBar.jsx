import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SignOut from "./SignOut";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: "#DB4437",
        fontFamily: "Pacifico, Cursive",
    },
}));

export default function ButtonAppBar({ user }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar
                style={{
                    backgroundColor: "#fff",
                    color: "#333",
                    borderRadius: "5px",
                }}
                position="fixed"
            >
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Firechat
                    </Typography>
                    {user && <SignOut />}
                </Toolbar>
            </AppBar>
        </div>
    );
}
