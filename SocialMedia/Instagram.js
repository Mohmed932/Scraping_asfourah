const containerId = async (
  AccessToken,
  InstagramId,
  message,
  image,
  linkNews
) => {
  const url = `https://graph.facebook.com/v22.0/${InstagramId}/media?image_url=${image}&access_token=${AccessToken}&caption=${`${
    message + "  " + linkNews
  } #Asfourah`}&alt_text=${message}`;
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

export const publishPostOnInstagram = async (
  AccessToken,
  InstagramId,
  message,
  image,
  linkNews
) => {
  try {
    const id = await containerId(
      AccessToken,
      InstagramId,
      message,
      image,
      linkNews
    );
    const req = await fetch(
      `https://graph.facebook.com/v22.0/${InstagramId}/media_publish?creation_id=${id}&access_token=${AccessToken}`,
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
