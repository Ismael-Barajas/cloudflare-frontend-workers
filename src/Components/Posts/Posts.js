import React, { useEffect, useState } from "react";
import { fetchPosts } from "../../api";
import {
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetchPosts();
    setPosts(data);
  };

  const timeStamp = (time) => {
    const dateObject = new Date(time);
    return dateObject.toLocaleString();
  };

  return (
    <Container sx={{ margin: "80px auto" }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        rowSpacing={2}
      >
        {posts &&
          posts.map((post) => {
            return (
              <Grid item xs={12} key={post.post_id}>
                <Card
                  sx={{
                    maxWidth: 500,
                    minHeight: 200,
                    backgroundColor: "#6f7d99",
                    margin: "auto",
                  }}
                >
                  <CardContent>
                    <Typography
                      align="center"
                      sx={{ color: "lightGray", fontSize: 14 }}
                    >
                      @{post.username}
                    </Typography>
                    {post.timestamp && (
                      <Typography
                        align="center"
                        sx={{ fontSize: 11, color: "lightGray" }}
                        gutterBottom
                      >
                        Posted: {timeStamp(post.timestamp)}
                      </Typography>
                    )}
                    <Typography
                      align="center"
                      sx={{ fontWeight: "bold", color: "white" }}
                    >
                      {post.title}
                    </Typography>
                    <Divider sx={{ backgroundColor: "lightGray", height: 2 }} />
                    <Typography
                      sx={{ color: "white", fontSize: 20, marginTop: 1 }}
                    >
                      {post.content}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        {!posts && (
          <Typography sx={{ color: "white" }}>
            No Posts have been made.
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default Posts;
