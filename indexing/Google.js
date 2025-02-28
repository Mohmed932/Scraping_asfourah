import { google } from "googleapis";

const key = {
  type: "service_account",
  project_id: "asfourah-news",
  private_key_id: "60fcb92f05cdf9184e22d3fdde1cd2276ae42c23",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDIAL0Z/OFryCoa\nPIKeq1Ah1SAmt1wlhQ8zmBxhmSz92xW68gN9u/lkYiBDi7TXQiEyvC76+1XZXLjB\ni3Z0e8nUK6PEghJSjPbx7B4JcjYdwXY9tMAbqgEi25ittD8vFWUxqjIPq3cIfJuw\nNYG6OFUOJLUcYOUNjVQUiCQ02XG+vRifkPkfezJPjFheTkOsmKE5fZ/N5LSrSWLf\nD3bJ3jzkylB456oip30zQhvPHkrD5PwT/WfXUmBQpwo3KVE6XJl70GsxrvWP2nDE\nKB5nHCOJzMVS/25zNS/F4Woll2MJ+kkueABODG7bWRLlQpBpfcCxVxYNXzPKHe1t\nGAaHCZsvAgMBAAECggEAOzXMxgbRjaEipcXIPcUl4f5AmHWsOAdear3bmSFJ6pWT\np1bCpdSijo9mUdjoXtnbDjQcDH2f+suyfsoU9YM4SzHoN+LyHbJR4Wkvs0g2sTR3\nFumN/iKkV3d/id1U31GMNdnXHEB86uxJAy+0CjdnJtrDK3WcGhj/DV0IqwS84eR+\nm4yD/gQ/fmq7Yd9YCLOTrC1T0yvHx5H3kS3RjCIDz67WLv/f3xowIoncN2JpAxq+\nrVLhLu7+t80mz5CxYRsPK2f7ZbD6D8SOkS06YfVLbxMyKYFsP5fW2FRiTqFd+KK3\n/hYBYNSSd248/96sztTf9RFcm9foBN4z0/zylHidIQKBgQD+x2PxMgki5R0S/BBs\nnRSduCMmQZuv32hgNddZTMG0qBnsWoRIsmE73Fg8mGvY7OJZVvm4m5qzE/1IIfCV\ncxkGIgHfPj3/S3/iqUKPbuevnyWDntaDkViwEP/+kDfBkm5P+hQX7+BxiZaP0qAc\nxPjAe3QUWrCfKyUKfkI2QSezJwKBgQDI9iOW+baZV6tIR1Cu3ph102j9Hfv6AwkN\nzvav7A6FNNEJPK6asJwwH9A2Om+fV0pj7nkpar2KJ8qGdermWLbrHVWYW6xJrEP8\n8UiudmAHc+u4SWvy6uKdhiEdbqOFkuBvu8rbvi0AaCehDJ9Grqg4QvVTK+FGlBIU\nLCBvK0Q8uQKBgQCikeQp0X2W8I8ewAxS4eB3yzlSfeaz0GAvk+t3pcysU99Gu3NR\nV9FHexAqii+22WCNFTx/GXsa7ZReZJm5IxpCmYyMQJEax7gwj0RTdbcMjwZG+CF1\nDleC8TYH30pUj/UnvzD3HS8gA2U5HHLiKKV5XMzy9/NffQ5DpdDmAaktXQKBgEYw\nghm3Oimwzyg9kFajdIiiwGa31ExsRvtFsC+duSyZV/Fr+mgZC1RbqDNokZgLuvXQ\nUw0+NNlOMJRqFxNBJRJVepHuYuyQeGaeN46H1d6EhG4nZsa/d0shj+thu0dqF22v\nH5lEgR9FQaIkcHUVh7eu21SjXNlz2iSljOaHLBwxAoGBAO49kbXhzZ3uMoJOOBoM\n0LqTCdZwYNIyj4/boD3/hL2wglj58Mgsv0fVMxsgvFMllu2QOV7uvKjLko0a+WIF\n+VOHcMiRW2KbEJug/VHN4Rpi6y1Vdtv9dO0pwK8f/ZVmbLLAQjslZEcxtdMEQ0e9\nIUolgRNpkFXRQTmvFYwAVS/L\n-----END PRIVATE KEY-----\n",
  client_email: "asfourah-news@asfourah-news.iam.gserviceaccount.com",
  client_id: "115057668615957518911",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/asfourah-news%40asfourah-news.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

const indexing = async (urlToIndex) => {
  const jwtClient = new google.auth.JWT({
    email: key.client_email,
    key: key.private_key,
    scopes: ["https://www.googleapis.com/auth/indexing"],
  });

  try {
    const tokens = await jwtClient.authorize();

    const notification = {
      url: urlToIndex,
      type: "URL_UPDATED",
    };

    const response = await fetch(
      "https://indexing.googleapis.com/v3/urlNotifications:publish",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokens.access_token}`,
        },
        body: JSON.stringify(notification),
      }
    );

    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error("Error:", err);
  }
};

indexing("https://www.asfourah.online/news/67c1a16a7574f9a22251cc0a");
