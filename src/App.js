import React from "react";

import { Typography, AppBar , Card , CardContent, CardMedia, CssBaseline, Grid,Toolbar, CardActions} from "@material-ui/core";
import { PhotoCamera} from "@material-ui/icons";
import { Button } from '@material-ui/core';
import useStyles from './styles.js'

const cards = [1,2,3,4,5,6,7,8,9]

function App() {
  const classes = useStyles();
  
  return (
    <>
      <CssBaseline/>
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon}/>
          <Typography variant="h5">
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                New Photo Album
            </Typography>
            <Typography variant="h" align="center" color="textSecondary" paragraph>
                Hello Everyone Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro temporibus dicta molestias at quas blanditiis facere fugiat hic consectetur reprehenderit ab, qui, rem eveniet velit sunt totam, dolor doloremque facilis!
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justify = "center">
                  <Grid item>
                      <Button  variant="contained" color="primary">
                          See my photos
                      </Button>
                  </Grid>
                  <Grid item>
                      <Button variant="outlined" color="primary">
                          Secondary action
                      </Button> 
                  </Grid>
                  <Grid item>
                      <Button className={classes.root}>Hook</Button>;
                  </Grid>
                  
              </Grid>
            </div>
          </container>
        </div>
        <container className={classes.cardGrid} maxwidth="md">
          <Grid container spacing={4}>
            {cards.map(()=> (
                <Grid item key={cards} xs="12" sm="6" md="4">
                <Card className={classes.card}>
                    <CardMedia
                      className={classes.CardMedia}
                      image="https://source.unsplash.com/random"
                      title ="Image title"
                    />
                    <CardContent className={classes.CardContent}>
                        <Typography gutterBottom variant="h5">
                            Heading
                        </Typography>
                        <Typography>
                            This is a media card, you can use this section to describe the content
                        </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                          view
                      </Button>
                      <Button size="small" color="primary">
                          edited
                      </Button>
                    </CardActions>
                </Card>
            </Grid>
            ))}
                    
          </Grid>
        </container>
      </main>
      <footer className={classes.footer}>
              <Typography variant="h6" align='center' gutterBottom>
                  Footer
              </Typography>

              <Typography variant="subtitle1" align="text" color="textSecondary">
                  Something here to give some more footer text
              </Typography>
      </footer>     
     
    </>
  );
}

export default App;
