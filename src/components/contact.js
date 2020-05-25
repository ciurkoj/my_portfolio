import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import "./contact.css";
class Contact extends Component {
  render() {
    return (
      <div>
        <Grid className="contact-grid" align={"center"}>
          <Cell col={12}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "30px",
                      fontFamily: "Anton",
                      color: "white",
                    }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    ciurkoj@outlook.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "30px",
                      fontFamily: "Anton",
                      color: "white",
                    }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (+44) 07554 602 380
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "30px",
                      fontFamily: "Anton",
                      color: "white",
                    }}
                  >
                    <i className="fa fa-skype" aria-hidden="true" />
                    live:.cid.5d1e667091e96361
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
