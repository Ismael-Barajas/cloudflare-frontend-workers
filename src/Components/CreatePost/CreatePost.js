import {
  Backdrop,
  ButtonBase,
  CircularProgress,
  Fade,
  Modal,
  TextField,
  Typography,
  styled,
  Box,
} from "@mui/material";
import { useState } from "react";
import { postPost } from "../../api";
import NavBar from "./NavBar";

const CustomizedTextField = styled(TextField)`
  & .MuiInput-input {
    color: white;
  }
  & .MuiFormLabel-root {
    color: lightGray;
  }
`;

const style = {
  box: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 400,
    minWidth: 300,
    backgroundColor: "#6f7d99",
    color: "white",
    borderRadius: 1,
    boxShadow: 24,
    p: 4,
  },
  textFieldStyles: {
    marginBottom: 1,
    color: "white",
  },
  submitButton: {
    backgroundColor: "black",
    padding: "8px 50px",
    borderRadius: 1,
  },
  moduleButton: {
    backgroundColor: "gray",
    padding: "5px 30px",
    borderRadius: 1,
  },
};

const CreatePost = ({ snackBar }) => {
  const [open, setOpen] = useState(false);

  const [value, setValue] = useState({
    title: "",
    username: "",
    content: "",
  });
  const [isPosting, setIsPosting] = useState(false);

  const handleFormValues = (name, value) => {
    setValue((preValues) => {
      return { ...preValues, [name]: value };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsPosting(true);
    setValue({
      title: "",
      username: value.username,
      content: "",
    });
    postPost(value, setIsPosting, handleClose, snackBar);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <NavBar>
        <ButtonBase sx={style.moduleButton} onClick={handleOpen}>
          <Typography>Post</Typography>
        </ButtonBase>
      </NavBar>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style.box}>
            <Typography variant="h6" component="h2" align="center" gutterBottom>
              Craft a Post 📝
            </Typography>
            <form onSubmit={onSubmit}>
              <CustomizedTextField
                label="Username"
                required
                maxRows={4}
                value={value.username}
                onChange={(e) => handleFormValues("username", e.target.value)}
                variant="standard"
                size="small"
                fullWidth
                sx={style.textFieldStyles}
              />
              <CustomizedTextField
                label="Title"
                required
                value={value.title}
                onChange={(e) => handleFormValues("title", e.target.value)}
                multiline
                variant="standard"
                size="small"
                fullWidth
                sx={style.textFieldStyles}
              />
              <CustomizedTextField
                label="Body"
                required
                multiline
                onChange={(e) => handleFormValues("content", e.target.value)}
                rows={4}
                value={value.content}
                variant="standard"
                size="small"
                fullWidth
                sx={style.textFieldStyles}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <ButtonBase
                  sx={style.submitButton}
                  type="submit"
                  disabled={isPosting}
                >
                  {isPosting ? (
                    <CircularProgress />
                  ) : (
                    <Typography>Post</Typography>
                  )}
                </ButtonBase>
              </div>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default CreatePost;
