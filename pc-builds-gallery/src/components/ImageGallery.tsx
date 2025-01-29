// import React from "react";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import {images} from '../assets/'


const galleries = [
  {
    title: "Battlestations",
    images: [
      {
        src: images.DeskSetup1,
        description: "Desk Setup",
      },
      {
        src: images.DeskSetup2,
        description: "Server Area",
      },
      {
        src: images.DeskSetup3,
        description: "Wider View",
      },
      {
        src: images.DeskSetup4,
        description: "Desk Setup",
      },
    ],
  },
  {
    title: "PC Builds",
    images: [
      {
        src: images.velka1,
        description: "Velka 7 Build",
      },
      {
        src: images.velka2,
        description: "Velka 7 Build",
      },
      {
        src: images.velka3,
        description: "Velka 7 Build",
      },
      {
        src: images.pcv1,
        description: "ATX Build",
      },
      {
        src: images.pcv2,
        description: "ATX Build",
      },
      {
        src: images.pcv4,
        description: "NCase M1 Build",
      },
    ],
  },
  {
    title: "Server Builds",
    images: [
      {
        src: images.server1,
        description: "Server Build",
      },
      {
        src: images.server2,
        description: "Server Build",
      },
      {
        src: images.server3,
        description: "Server Build",
      },
      // {
      //   src: images.server4,
      //   description: "Server Build",
      // }
    ],
  },
];

const ImageGallery = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb:10 }}>
      <h1>My Tech Gallery</h1>
      {galleries.map((gallery, index) => (
        <div key={index}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ mt: 4, textAlign: "center" }}
          >
            {gallery.title}
          </Typography>
          <Grid container spacing={2}>
            {gallery.images.map((image, imgIndex) => (
              <Grid item xs={12} sm={6} md={4} lg={6} key={imgIndex}>
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    "&:hover .hover-overlay": {
                      opacity: 1,
                    },
                  }}
                >
                  <Card>
                    <CardMedia
                      component="img"
                      // height="450"
                      image={image.src}
                      alt={`Gallery Image ${imgIndex + 1}`}
                    />
                    <Box
                      className="hover-overlay"
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                      }}
                    >
                      <Typography variant="body1" sx={{ padding: 2 }}>
                        {image.description}
                      </Typography>
                    </Box>
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
    </Container>
  );
};

export default ImageGallery;