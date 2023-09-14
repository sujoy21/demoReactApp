import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MovieCards() {
  const [movieList, setMovieList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getAllMoviesFunction();
  }, []);

  const getAllMoviesFunction = async () => {
    await fetch("http://localhost:3002/api/v1/movies/getAllMovies", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMovieList(data.data);
        console.log(data, "<====");
      });
  };
  return (
    <>
      <Container maxWidth={"lg"} sx={{ mt: 4 }}>
        <Grid container spacing={2}>
          {movieList?.map((x, i) => {
            return (
              <Grid item xs={3}>
                <Card key={x?.index} sx={{ height: "100%" }}>
                  <CardHeader title={x?.movieName} />
                  <CardContent>
                    <Typography component={"p"}>
                      Release Date: {x?.releasedDate}
                    </Typography>
                    <Typography component={"p"}>
                      Ratings: {x?.rating}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center" }} mt={3} mb={4}>
          <Button variant="contained" onClick={() => navigate("/")}>
            Go to Home Page
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default MovieCards;
