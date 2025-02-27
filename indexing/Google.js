import { google } from "googleapis";

const key = {
  type: "service_account",
  project_id: "asfourah",
  private_key_id: "24c0dc723352212230d6ca7c870feceb3a0d9263",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC/xS3Uv4J4cKsl\n+QPzObzXpPFKSatu5JCepHXYjFt0wpRnGkXB/8R7rCMALBhstTQZZF9Ut9yVp2IB\nvBtnxmSkz1COxjaOVOrj38GmdcmchET+8oI5JCNm4VLVKlLF75HBnixUqo6Lmq52\n5jGmMTDyLjghQElhtf3I0oiZIw7FpQVM7J8MUsfLMcoJrHK+gqIhmLPq3rNTlNkJ\nhjt5/dWq16qRVgOO+rPIhDobhPoYfAi8onZR/OSK40WkaTmmlELR9CMSd2Xvy4+7\nZqrk+rVBQsuueAm6PAPQxkImz7DMrTXnn9SlXeEFT07MVRmyb2Yi/jCmIny6JkAN\nRpCdB5c5AgMBAAECggEAASFgZQO7L/zgvj3lnIKcq15hXl52sPX8MXXE9dh4quST\np/hIXykIhkx0OSXN9rHu9HzckDT5BpXfg0ltJ9tZ7cUgSCG8XUSFaJIParYTIxpZ\nkB85N1Gd8ilah6iZuaAjZu7I6Teiy6SwQMGzkeXNlO5wkDl4Ovo7qj7AKfuiOP8e\nodLEblDJtOORtnwIkAgQzKiZWiUZy3wP0zYhj6tKq/MpCIWvPA6PAOBeqlJTDyLr\nb/8xLxVGA2DnjlCxcz/8ya6xJ58bGH2lR2fohT/iB/5s9E0HywK++D24pSxYJtB6\nzZXSrYZ0VqlGK/piQ10N7SYYq0kJ++QTadSHedB3gQKBgQDuzUEy7IRysdyOG3xM\nqq3CCb75+VR9Di+pjbHhISbdiwudz9PafztKaNjGh+BqXNtgvuIH2hD2/rP6zNb9\nKYvB4zc4UghiSuTnhrsQzeBXRbb7FwLlf1r6ULHmjkwyIfQ83HjQ825+ogBe7Rqk\n/oAdJLNTUpL0hDYg+hbLzuazuQKBgQDNlM/tPyye/XuaTf8sS2OSkERpm6htkqiD\n/zakG/IpiSt6CcZjsRWat1vyu+VxN0TfMSGAo+aD5sSDJ8f5njKAFhk+2QRm4JWh\nRcOvYZDfsP+SVoASpzoWX0epWrmAepEWEHQII3+9eojO7OIWS3f/ejlshcB2uze3\nGD39yDC/gQKBgFeOYFJoj+NxvTlJcJi3l7/mTORge47ija0wK8Eso5BlM9wn4Dhj\nn/yXVqvsE+dLpo/hTQSt+rxlBN53DniCLCDpy0xWH4bSiP0u1BXENnYpNH75n/E/\ncb8HqUKsd9mFw4QxHgcWyjOZ+GLVsog+XADTfQCW7RTECQisSYFumf3ZAoGAcq/v\nI2qX6QZ+ewHCNiLEpNII6GWnG6GykxjAkeLpQNS+RXHIlHsJE2vxRsQd5wAvUtgk\n2ZAWHEWUIZsCy7W+dIhfgxkshHwL3ZF+7oted/xVR30sK7vRAwQahVcQn6VA5W8+\nW//51mnSgqXSJx/pDMRR3sHrMhGVrnY+tyKEV4ECgYBM2axMI4eg2y7wswKr44lR\ngGLbisl+CHQ4OU0+jdm1g1vkYpO/P/WMxCBnewokuBYzSeJ+ncTPSYQvcpAnoL4I\nYrtEhR8dsiGbaD3i3v9bpNNhZRoUbs7Q4DHWbI2SAZGdtpKr3hR2mUTL9zuQYlNp\neG6+/4fvYXXOU9BU+AEOUg==\n-----END PRIVATE KEY-----\n",
  client_email: "asfourah@asfourah.iam.gserviceaccount.com",
  client_id: "106261875357359595518",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/asfourah%40asfourah.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

export const indexing = async (urlToIndex) => {
  const jwtClient = new google.auth.JWT(
    key.client_email,
    null,
    key.private_key,
    ["https://www.googleapis.com/auth/indexing"],
    null
  );

  try {
    const tokens = await jwtClient.authorize();

    const notification = {
      url: urlToIndex,
      type: "URL_UPDATED",
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokens.access_token}`,
      },
      body: JSON.stringify(notification),
    };

    const response = await fetch(
      "https://indexing.googleapis.com/v3/urlNotifications:publish",
      options
    );
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
