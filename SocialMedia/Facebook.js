export const PostToFacebookPage = (
  pageId,
  message,
  linkNews,
  accessToken,
  image
) => {
  const url = `https://graph.facebook.com/${pageId}/photos?url=${image}&access_token=${accessToken}&message=${
    message + linkNews
  }`;

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Data:", data);
    })
    .catch((error) => {
      console.error("Error posting on Facebook Page:", error);
    });
};
