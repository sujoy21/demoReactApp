import { AppBar, Button, Container } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate()
  return (
    <>
      <Container sx={{ height: "100vh",display:'flex',justifyContent:'center',alignItems:'center' }}>
        <Button variant="contained" onClick={()=>navigate('/movie')}>Go to Movie Page</Button>
      </Container>
    </>
  );
}

export default HomePage;
