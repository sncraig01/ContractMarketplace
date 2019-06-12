import React from "react";
import "./Landing.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import RevTekHomeNavBar from "./RevTekHomeNavBar";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

class Landing extends React.Component {
  signInClicked = e => {
    // Redirects to profile page
    this.props.history.push("/signin");
  };

  signUpStudClicked = e => {
    // Redirects to profile page
    this.props.history.push("/signupstudent");
  };

  signUpCompClicked = e => {
    // Redirects to profile page
    this.props.history.push("/signupcompany");
  };

  render() {
    const classes = useStyles;

    return (
      <div>
        <RevTekHomeNavBar/>
        <div className="Landing-Body">
        <Card className="Landing-Card">
        <h1> Create your new RevTek Account! </h1>
        <p> Please select how you would like to sign up.</p>
        <div>
          <Button
            variant="contained"
            className={classes.button}
            onClick={() => this.signInClicked()}
          >
            Return to Sign In
          </Button>
        </div>
        <br />
        <div>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => this.signUpStudClicked()}
          >
            Sign Up as Student
          </Button>
        </div>
        <br />
        <div>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => this.signUpCompClicked()}
          >
            Sign Up as Company
          </Button>
        </div>
        </Card>
        </div>
      </div>
    );
  }
}

export default Landing;
