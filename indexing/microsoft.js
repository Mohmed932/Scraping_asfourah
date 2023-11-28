const apikey = 'c0fd2c781d564733a9f31f147ef147e9'; // قم بتعيين المفتاح الخاص بك هنا
const siteUrl = 'https://www.awalbawl.online'; // قم بتعيين عنوان موقعك هنا


export const submitToBing = async(url) =>{
  const submissionUrl = `https://ssl.bing.com/webmaster/api.svc/json/SubmitUrl?apikey=${apikey}`;

  const body = {
    siteUrl,
    url,
  };

  try {
    const response = await fetch(submissionUrl, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('حدث خطأ أثناء إرسال الموقع إلى Bing:', error);
  }
}
