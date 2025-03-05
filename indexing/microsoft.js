// const apikey = "c0fd2c781d564733a9f31f147ef147e9";
// const siteUrl = "https://www.asfourah.online";

// export const submitToBing = async (url) => {
//   const submissionUrl = `https://ssl.bing.com/webmaster/api.svc/json/SubmitUrl?apikey=${apikey}`;

//   const body = {
//     siteUrl,
//     url,
//   };

//   try {
//     const response = await fetch(submissionUrl, {
//       method: "POST",
//       body: JSON.stringify(body),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("حدث خطأ أثناء إرسال الموقع إلى Bing:", error);
//   }
// };

const INDEXNOW_API_KEY = process.env.INDEXNOW_API_KEY;

export const submitToBing = async (url) => {
  const INDEXNOW_ENDPOINT = `https://www.bing.com/indexnow?key=${INDEXNOW_API_KEY}&url=${url}`;
  console.log("⏳ Sending request to:", INDEXNOW_ENDPOINT);
  try {
    const response = await fetch(INDEXNOW_ENDPOINT);
    console.log("✅ Request sent, waiting for response...");

    const data = await response.text();
    console.log("📩 Response received:", data);
  } catch (error) {
    console.error("❌ Error submitting URL:", error.message);
  }
};
