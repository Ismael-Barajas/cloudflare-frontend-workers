import axios from "axios";

const url = "https://workers.ismaelbarajas-dev.workers.dev/posts";

export const fetchPosts = async () => {
  try {
    const { data } = await axios.get(url, {
      headers: { "Content-Type": "application/json" },
    });
    const hasData = Array.isArray(data) && data.length > 0;
    if (!hasData) return;
    data.sort((a, b) => {
      return b.timestamp - a.timestamp;
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const postPost = async (post, setIsPosting, handleClose, snackBar) => {
  try {
    axios
      .post(url, post, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        setIsPosting(false);
        handleClose();
        snackBar(true);
      });
  } catch (error) {
    console.error(error);
  }
};
