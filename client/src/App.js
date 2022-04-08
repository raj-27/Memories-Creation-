import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import memories from "./images/memories.jpg";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

const App = () => {
  let classes = useStyles();
  let dispatch = useDispatch();
  let [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentId]);
  return (
    <>
      <Container maxWidth="lg">
        <AppBar position="static" color="inherit" className={classes.appBar}>
          <Typography className={classes.heading} variant="h2" align="center">
            Memories
          </Typography>
          <img
            className={classes.image}
            src={memories}
            alt="Memories"
            height="60"
          />
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justifyContent="space-between"
              spacing={3}
            >
              <Grid item xs={12} sm={7} md={8}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={5} md={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  );
};

export default App;
