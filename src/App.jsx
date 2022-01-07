import React from "react";
import { Box, Button, Card, CardActions, CardContent, Typography, CssBaseline, Grid, Container } from '@material-ui/core';


const App = () => (
    <>
        <CssBaseline />
        <Card style={{ maxWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Welcome to the React Material UI App
                </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
    </>
);

export default App;