import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Card.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.cardContainer, styles.infected)}
        >
          <CardContent>
            <Typography gutterBottom color="textSecondary">
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondry">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Number of active cases.</Typography>
          </CardContent>
        </Grid>
        {/*Card ends */}
        <Grid
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.cardContainer, styles.deaths)}
        >
          <CardContent>
            <Typography gutterBottom color="textSecondary">
              Deaths
            </Typography>
            <Typography variant="h5">Data</Typography>
            <Typography color="textSecondry">Real date</Typography>
            <Typography variant="body2">Number of active cases.</Typography>
          </CardContent>
        </Grid>
        {/*Card ends */}
        <Grid
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.cardContainer, styles.recovered)}
        >
          <CardContent>
            <Typography gutterBottom color="textSecondary">
              Recovered
            </Typography>
            <Typography variant="h5">Data</Typography>
            <Typography color="textSecondry">Real date</Typography>
            <Typography variant="body2">Number of active cases.</Typography>
          </CardContent>
        </Grid>
        {/*Card ends */}
      </Grid>
    </div>
  );
};

export default Cards;
