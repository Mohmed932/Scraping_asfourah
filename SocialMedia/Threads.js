const containerId = async (AccessToken, ThreadId, message, image, linkNews) => {
  const url = `https://graph.threads.net/v1.0/${ThreadId}/threads?media_type=IMAGE&image_url=${image}&text=${
    message + "  " + linkNews
  }&access_token=${AccessToken}`;
  try {
    const req = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await req.json();
    return res.id;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const publishPostOnThreads = async (
  AccessToken,
  ThreadId,
  message,
  image,
  linkNews
) => {
  try {
    const id = await containerId(
      AccessToken,
      ThreadId,
      message,
      image,
      linkNews
    );
    const req = await fetch(
      `https://graph.threads.net/v1.0/${ThreadId}/threads_publish?creation_id=${id}&access_token=${AccessToken}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res = await req.json();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
