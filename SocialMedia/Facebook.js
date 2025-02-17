export const PostToFacebookPage = async (
  AccessToken,
  FacebookId,
  message,
  image,
  linkNews
) => {
  try {
    const url = `https://graph.facebook.com/${FacebookId}/photos?url=${image}&access_token=${AccessToken}&message=${
      message + "  " + linkNews
    }`;
    const req = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      timeout: 30000,
    });

    const res = await req.json();
    console.log("Data:", res);
  } catch (error) {
    console.error("Error posting on Facebook Page:", error);
  }
};
