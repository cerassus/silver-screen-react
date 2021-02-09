import React from "react";
import Typography from "./Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  HelpContainer: {
    padding: "2rem 12vw",
    "& *": {
      textAlign: "justify",
    },
    "& *:nth-child(odd)": {
      margin: "20px 0",
    }
  },
});

const Help = () => {
  const classes = useStyles();
  return (
    <div className={classes.HelpContainer}>
      <Typography variant="h5">Movie Database App</Typography>
      <p>
        This is an app that allows You to search for movies in database and rate
        them or save on 'wanna see' list(shelf). You can switch between the lists and
        search on top menu. You can always click on every movie to see its
        detailed information. 
      </p>
      <Typography variant="h5">Capabilities</Typography>
      <p>
        Click on the tabs on top menu and switch between movie lists and search
        menu.
      </p>
      <Typography variant="h5">Search for movies</Typography>
      <p>
        Type desired movie title and press ENTER or click Search button. App
        will show You the list of movies based on your query. You can rate these
        movies by clicking on stars. If you want to see certain movie later, you can 
        click "Put on my shelf" to save it on Shelf list. If You
        wish to change your choice You can click desired change. App will ask
        You to confirm the change or refuse it.
      </p>
      <Typography variant="h5">Rated List and Shelf List</Typography>
      <p>
        If You rated or added to list, at least one movie, it will appear on one
        of that lists. Remember that You can change movie rating anytime You
        want. You can also delete movie from both of lists by clicking the 'X'
        button, which is near the movie title. If u deselect 'put on my shelf' button
        the movie will be automatically deleted from both of lists. You can
        filter your movies by clicking 'Filter' dropdown menu i choose bewtween
        'Movie', 'Series', 'Episode', 'Game' and 'All'. App also allows you to sort your
        favs by clicking 'Sort' drodown menu and choose between alphabetical
        order, year and rating.
      </p>
      <Typography variant="h5">Movie details</Typography>
      <p>
        Click on specific Movie to see its details. You can rate, but You can't 
        delete movie from here. 
      </p>
      <Typography variant="h5">Author</Typography>
      <p>2020 Cerassus - Michał Wiśniewski</p>
      <a
        href="https://github.com/cerassus/Portfolio-Movies"
        target="_blank"
        rel="noopener noreferrer"
      >
        View source code on Github
      </a>
    </div>
  );
};

export default Help;
