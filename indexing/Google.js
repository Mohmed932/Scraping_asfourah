import { google } from "googleapis";

const key = {
  type: "service_account",
  project_id: "awalbawl-389210",
  private_key_id: "3b9e1df2db885658f3f8c37f94779ce18ba784b9",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDyk63SxE7Uzfoe\nsHks26jmKucbwMXJbkqW/25vsMDojQzKxZjJH2EHV7stgH1WwVk3tHjQAPxxjlXZ\njNQHwn4rT/PJ+rc/XuwZ+wnGSyO7SMRkEAsl3OCTpsaouhVTAMqiTmpBlQ6ANA3i\nJKieQPysEw/baGe3Y+agNTfLzg4NSjScGzxS1HVw98cA+acc2Ga3H+yukicnEtEE\n723j4sjbgbNiFFX1t7jFkQtQFhutuaRYnyjI6bd4BCStWE+42tA0Br2/O2/b9Hwo\nOalpyfswaVtEybNr1ryYpmQKiXtOC+0gu9u4CfOuDsqpA7Juzj766EoUaAfYIxtJ\nqXRTL5oXAgMBAAECggEAT7/xg7t6V0golPJbxD2rN5CfTmaAIAschqwPeLTZlxrY\nO8newzCHy8wyA3Gcw2rplADHP0szs3miC9Xa13o/1KmCcsL0f+cLJDd+LS0C4E26\nE1Oa9qW5R5Gq+knDPPijpdy13j3M+KUkc1auAOlIqKHTssSOZKJ5be5RG7XwtLku\n2VcQaBMhNnvnz27T7heM9oB2OMeSc0FxPDyKuLlSEyzMg3VFeXg/FfZEHXnRZug1\nZRedvvTDrjTvtRvZuRWgEhxf9i15WWmcXGEmGsTg1C1aHWtVoqYozgM0WCOuYmks\nBqBHhM2MMMCNt3fURhnzZXP7312hNuxRrEQR8dw6YQKBgQD2nBfoayZmq13hGX2J\nnru/FJNiNTXGr32HvGeK2a+cDf1bljdIOON7jL9nJB0GYRKHkC6NYxFvfjgc8z5m\n13CzFin0FzJXg44Q1JItpgSaLMPESazc5G1/PC5AMxY3rOu9JFriSc+y+8viLHub\n0E2dttNbnFK1+6TDFlC0h4qCXwKBgQD70EYg/aqSr3z5kG7W1X68hajt4llF4994\nB3hVnEuF0ENaw4Bdz3yF3QGF5o/NXCCP5lh6PdJbSJylxl5EKtOVn125uoGUZuhu\nD0UTHOsksOC1e8vjaKPq1HL6qv06ARYhZc/mGSqtE4noITchaI66OWtjxYJoyUA+\nk7WKqXizSQKBgQDMr+q4IpeRCBO3zmyAWZwDkZRzIy8rZmWO0DYw7VXw9TuhVSE1\ndOJ7nesQNM1SiifTFT1OZTgHjoAMp2jX+2Gzg2X3D3ndYXf9SDK8aNvRC+7BcVVl\nUsP/o3fQGZcLRx+zsgUtZY5bRNuJMtq2DUMe8KylkS6lleS/eDosXYP9iQKBgFfo\ngsL7q3Of/fIl4Pvw9licFLhPP7ktbxM5EGJauObTKOBjxcl6KM+WsvRq5CLeGaQC\n1zp9oJUriTw6PyhvBwSB6Tdwi9IiBtx9SjD89H4PnbLdr/UIz8ioOCeYT+TTAkXQ\nhD6g5IwdeRRnnBZ2qPUMHJhtGDS6pUnzSPpKZY+5AoGAVL+TUpSxmLIBR9wX7HM8\nHxnp+iYegZ6XEAwzAdTuZVY1TMPoHkgOMrGtGZW8W/+5GsOIT0YgLe61woTS2eOL\nDmDIHerLTXJqiaIuScdH8DaCv3X9bGL9fDCfoprDLWyadXk5KYP6aZ3q0iyNpiK6\n4SkV5mdakIi1CLKDtBFjoSA=\n-----END PRIVATE KEY-----\n",
  client_email: "awalbawl@awalbawl-389210.iam.gserviceaccount.com",
  client_id: "116959225193408063442",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/awalbawl%40awalbawl-389210.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

export const indexing = async (urlToIndex) => {
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
