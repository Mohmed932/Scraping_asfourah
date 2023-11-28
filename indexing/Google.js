import { google } from "googleapis"

const key  = {
  "type": "service_account",
  "project_id": "awalbawl-389210",
  "private_key_id": "e6a015fb318b34902655280a07803a0281f13168",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCobKdKveDGnfx+\np7rRvGTD+Tg5gVHQOcJoMAxft1XrlOrDHmoOKL/No+l8hfZrGKtnQI9LkN2+KOTi\nFNG5fWOXCBgr+nrXZ3oJwcBUWFoPGExaWCLXWjM9oPUXhj5he2YzJ1htFivPSrr2\nZIuKiUi9dUiOcG6vbDbIOj5rmObtSCKQmoMmz217dFoqAiV3kf0zKpaIXdxRX+M0\n4gpebkbjaL4TO9hZQLwCFNvfPc83u+hb0+IGkVfzYaxgJaOZC7NWVRR5Zkg7LHPZ\nWrBQ0ZrIbMMF33Po1PBKPGF1cZnDqsAeVY3SEzssM3hpDb7VEb9t/ZS/M1nyYfvC\nrqbrWFyNAgMBAAECggEAGkdVtN46f5Lv7g0ao5Xq/P7aLHLGgqA4eowgqiCPaeIC\n3S3WK15lSt8r04+NWrlvKP2UPhyc1IpJ6BKKhJARZWPQbbA30XsmOfZ+nUppxtgq\nNaBx0zsSKqf+Bc0e15Pq5slZTS/75uyIjmAyu4tfC5yMlRjq1DkktQoNajlhspzh\nJPQufrL9j3bd/qDvfBRBeQXfMndjXWXZ7cURxwKiSoFoT10vLiSNOsMQbfVa/6Oq\nkHqEmBjHW9Dd4eWZq0YNMHvjlq96mTkXBb1qSl/ZGk7vN20MsAe/ihN7X0psaVTd\nrnZwWvllhHDxfJXC8ldNLXIcZhKnr5YE9Q4s8xj5uwKBgQDjHi6EvUmjmm/omPJ9\nN/Ot5rsGM/JcOdsqKDbf4OICbEOjiGvZ1j2N//aj97ZFLcN9Tf+YzUdvcJvE/QQ1\n8YEcqg2H7p31u3IOXgFl2CX4OmserTUY51mc2qo86vPpjc9LNyjiC5tzc7/uLIlz\n7wb8W0Trp31Hj7cnqwKH+GXbNwKBgQC917UGA3DgoygVJfx9X/u0BZB3phvERM1a\n41wz9t83AV+KgamDerhKE+LHiD/5+PrN0LQAQU2gi0eLg1bQlc+MtT1+1VYdrn1X\nYOzpY5/rQPV5YGHZmHWqid69cCva2hU2jniLpPoG/TmFqq3WjmlodrF0Rpa4kJCN\nfZnR4hAQWwKBgQCYiJm3fqVpYnyMW8RoQt6+ybqMBPFd7WF7Y7zPCWrhM7MNrr64\nc8Gtj94m62QX/A9SJcNm7V9vwdJsL33XeNY82RzzUVf3RKfqbEpGCzAdEacF2FBT\n5HTz+ovhE+8yyZISMv6bKi6CEJgzrue13C/15ppYJonmOOhKlPjDNxm5awKBgQCx\n7C6eui7aek+gsn9XSdPvPp/NY4L2ib0lB51snl1JgiH2/9rNfQCnfMe4VfwP3cfB\niW6KJqoIY0Dkgm2lBCMHLv25l1wkaVrTv+WKP3Kr26+02B4c/4SYFqsJRM31SRtE\njHZx+mbSkhWNLw/J3KLx4vwhi97Kj8LKuQKm8IY5rQKBgQDQZ4Zg1C10ad7NC58n\nl4i7cULwFGq8M2fqmwtmZyUaABgnXE4ArXMMfGkrrcxecREPzO1JN03v+5yaFXHN\naLWzQ+Ef74zvcy8x8Cj8H/0XgzbKuMctO0x6fmoqa0REvzSRf7iuCjIhEh9MNqKZ\nc2chMlkG/qfleUrUGTel9c0ORA==\n-----END PRIVATE KEY-----\n",
  "client_email": "awalbawl@awalbawl-389210.iam.gserviceaccount.com",
  "client_id": "116959225193408063442",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/awalbawl%40awalbawl-389210.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}

export const indexing = async (urlToIndex) => {
  const jwtClient = new google.auth.JWT(
    key.client_email,
    null,
    key.private_key,
    ['https://www.googleapis.com/auth/indexing'],
    null
  );

  try {
    const tokens = await jwtClient.authorize();

    const notification = {
      url: urlToIndex,
      type: 'URL_UPDATED'
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokens.access_token}`
      },
      body: JSON.stringify(notification)
    };

    const response = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', options);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};