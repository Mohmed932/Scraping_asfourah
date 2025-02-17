const facebookAccessToken = async () => {
  const appId = "1290285538717289";
  const appSecret = "0e36aa3d25105e2fb9cf63581e91491c";
  const shortLivedAccessToken =
    "EAASVggMxrmkBO4mvTwdg6uaVoZAYwdBJAMmFjd3ZBGbWRZA1pZCpdZCtbObBZBMoaYAR9QOGgaQAfg3KMpxtPBwMBM7lndXBDBwIvZCgUVU8H1JkIsV60PqsPHUg0ife2HZCDkLMBWLvoPplJsUBCcT3Lrtsix1C3vAKy8y9YB2PVVVq0G1nWIXuH77J6dZA3zG3Itrxo3s4p0N4ZC2ZApSB0KI3yadUQZDZD";

  const url =
    `https://graph.facebook.com/v22.0/oauth/access_token?` +
    `grant_type=fb_exchange_token&` +
    `client_id=${appId}&` +
    `client_secret=${appSecret}&` +
    `fb_exchange_token=${shortLivedAccessToken}`;

  try {
    const response = await fetch(url, {
      method: "GET",
    });

    const data = await response.json();
    console.log("Access Token Response:", data);
  } catch (error) {
    console.error("Error:", error);
  }
};

const threadsAccessToken = async () => {
  const shortLivedAccessToken = `THAAJF2QB9X5FBYlZAYb2t4U19kZAERwU05oZAy1pQ1VBeUdmbnFTbzktdVB5SWE1ZAHBLTlRfUVRlaGpwTjFlQkhMZADYwY1VBSWtmMFhOR05ITU9QUkllSUNPcGotRDlCVWVzY2JjUVFhMnRiT3g3dVpuWkVsaWFHUWllT2d4TUZAOcGszZAzU2YXd4ZADYyZA29WUFJNQkJOeHUxWkgyMU0ZD`;
  const appSecret = "afad39b69e4f0ba7b5fade201fc1dcf5";
  try {
    const response = await fetch(
      `https://graph.threads.net/v1.0/access_token?grant_type=th_exchange_token&client_secret=${appSecret}&access_token=${shortLivedAccessToken}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Response Data:", data);
  } catch (error) {
    console.error("Error fetching access token:", error.message);
  }
};
