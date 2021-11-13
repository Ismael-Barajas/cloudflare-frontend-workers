import { forwardRef, useState } from "react";
import "./App.css";
import { CreatePost, Posts } from "./Components";
import MuiAlert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App() {
  const [openSnack, setOpenSnack] = useState(false);

  const handleSnackClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };

  return (
    <>
      <CreatePost snackBar={setOpenSnack} />
      <Posts />
      <Snackbar
        open={openSnack}
        autoHideDuration={6000}
        onClose={handleSnackClose}
      >
        <Alert
          onClose={handleSnackClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Post has successfully been posted. (Refresh after a few seconds to see
          new post)
        </Alert>
      </Snackbar>
    </>
  );
}

export default App;
