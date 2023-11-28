import { news } from "../model/News.js";
import { PostToFacebookPage } from "../SocialMedia/Facebook.js";
import { indexing } from "../indexing/Google.js";
import { submitToBing } from "../indexing/microsoft.js";
import { changeSentence } from "../Change/replace.js";
import { DataAndTime } from "../utiles/data.js";

const links = [
  {
    name: "فن",
    link: "https://alqaheranews.net/category/%D9%81%D9%86%D9%88%D9%86-%D8%AB%D9%82%D8%A7%D9%81%D8%A9",
  },
  {
    name: "اقتصاد",
    link: "https://alqaheranews.net/category/%D8%A7%D9%82%D8%AA%D8%B5%D8%A7%D8%AF",
  },
  {
    name: "رياضه",
    link: "https://alqaheranews.net/category/%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9",
  },
  {
    name: "العالم",
    link: "https://alqaheranews.net/category/%D8%AD%D9%88%D9%84-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85",
  },
];
const baseUrl = "https://alqaheranews.net";
export const Alqaheranews = async (browser) => {
  if (browser.isConnected()) {
    for (let i = 0; i < links.length; i++) {
      let news_Date,
        title,
        SourceData,
        date,
        largeImage,
        one,
        two,
        three,
        four,
        five,
        six,
        seven,
        eight,
        nine,
        ten,
        eleven,
        twelve,
        thirteen,
        fourteen,
        fifteen,
        sixteen,
        seventeen,
        eighteen,
        nineteen,
        twenty;

      const page = await browser.newPage();
      try {
        await page.goto(links[i].link, {
          waitUntil: "domcontentloaded",
          waitUntil: "load",
          timeout: 0,
        });
        await page.waitForSelector("article .post-thumb a", {
          waitUntil: "domcontentloaded",
          waitUntil: "load",
          timeout: 0,
        });
        const mainSourceData = await page.$eval("article .post-thumb a", (i) =>
          i.getAttribute("href")
        );
        SourceData = baseUrl + mainSourceData;
        date = DataAndTime();
      } catch (error) {
        page.close();
      }
      const newPage = await browser.newPage();
      try {
        await newPage.goto(SourceData);
        await page.close();
        await newPage.waitForSelector(
          "main .container .row .col-lg-8 .single-content2 figure img",
          {
            waitUntil: "domcontentloaded",
            waitUntil: "load",
            timeout: 0,
          }
        );
        try {
          largeImage = await newPage.$eval(
            "main .container .row .col-lg-8 .single-content2 figure img",
            (i) => i.getAttribute("src")
          );
          if (largeImage === undefined) {
            largeImage = "";
          }
        } catch (error) {
          largeImage = "";
        }
        try {
          title = await newPage.$eval(
            "main .container .row .col-lg-8 .single-content2 .entry-header h1",
            (i) => i.textContent.trim()
          );
          if (title === undefined) {
            title = "";
          }
          news_Date = { SourceData, date, title };
        } catch (error) {
          title = "";
        }
        try {
          const tryOne = await newPage.$$eval(
            "main .container .row .col-lg-8 .single-content2 article .entry-main-content .htmlCode p",
            (i) => i[0].textContent.trim()
          );
          if (tryOne === undefined) {
            one = "";
          }
          one = changeSentence(tryOne);
        } catch (error) {
          one = "";
        }
        try {
          const tryTwo = await newPage.$$eval(
            "main .container .row .col-lg-8 .single-content2 article .entry-main-content .htmlCode p",
            (i) => i[1].textContent.trim()
          );
          if (tryTwo === undefined) {
            two = "";
          }
          two = changeSentence(tryTwo);
        } catch (error) {
          two = "";
        }
        try {
          const tryThree = await newPage.$$eval(
            "main .container .row .col-lg-8 .single-content2 article .entry-main-content .htmlCode p",
            (i) => i[2].textContent.trim()
          );
          if (tryThree === undefined) {
            three = "";
          }
          three = changeSentence(tryThree);
        } catch (error) {
          three = "";
        }
        try {
          const tryFour = await newPage.$$eval(
            "main .container .row .col-lg-8 .single-content2 article .entry-main-content .htmlCode p",
            (i) => i[3].textContent.trim()
          );
          if (tryFour === undefined) {
            four = "";
          }
          four = changeSentence(tryFour);
        } catch (error) {
          four = "";
        }
        try {
          const tryfive = await newPage.$$eval(
            "main .container .row .col-lg-8 .single-content2 article .entry-main-content .htmlCode p",
            (i) => i[4].textContent.trim()
          );
          if (tryfive === undefined) {
            five = "";
          }
          five = changeSentence(tryfive);
        } catch (error) {
          five = "";
        }
        try {
          const trysix = await newPage.$$eval(
            "main .container .row .col-lg-8 .single-content2 article .entry-main-content .htmlCode p",
            (i) => i[5].textContent.trim()
          );
          if (trysix === undefined) {
            six = "";
          }
          six = changeSentence(trysix);
        } catch (error) {
          six = "";
        }
        try {
          const tryseven = await newPage.$$eval(
            "main .container .row .col-lg-8 .single-content2 article .entry-main-content .htmlCode p",
            (i) => i[6].textContent.trim()
          );
          if (tryseven === undefined) {
            seven = "";
          }
          seven = changeSentence(tryseven);
        } catch (error) {
          seven = "";
        }
        try {
          const tryeight = await newPage.$$eval(
            "main .container .row .col-lg-8 .single-content2 article .entry-main-content .htmlCode p",
            (i) => i[7].textContent.trim()
          );
          if (tryeight === undefined) {
            eight = "";
          }
          eight = changeSentence(tryeight);
        } catch (error) {
          eight = "";
        }
        try {
          const trynine = await newPage.$$eval(
            "main .container .row .col-lg-8 .single-content2 article .entry-main-content .htmlCode p",
            (i) => i[8].textContent.trim()
          );
          if (trynine === undefined) {
            nine = "";
          }
          nine = changeSentence(trynine);
        } catch (error) {
          nine = "";
        }
        try {
          const tryten = await newPage.$$eval(
            "main .container .row .col-lg-8 .single-content2 article .entry-main-content .htmlCode p",
            (i) => i[9].textContent.trim()
          );
          if (tryten === undefined) {
            ten = "";
          }
          ten = changeSentence(tryten);
        } catch (error) {
          ten = "";
        }
        try {
          const tryeleven = await newPage.$$eval(
            "main .container .row .col-lg-8 .single-content2 article .entry-main-content .htmlCode p",
            (i) => i[10].textContent.trim()
          );
          if (tryeleven === undefined) {
            eleven = "";
          }
          eleven = changeSentence(tryeleven);
        } catch (error) {
          eleven = "";
        }
        try {
          const trytwelve = await newPage.$$eval(
            "main .container .row .col-lg-8 .single-content2 article .entry-main-content .htmlCode p",
            (i) => i[11].textContent.trim()
          );
          if (trytwelve === undefined) {
            twelve = "";
          }
          twelve = changeSentence(trytwelve);
        } catch (error) {
          twelve = "";
        }
        try {
          const trythirteen = await newPage.$$eval(
            "main .container .row .col-lg-8 .single-content2 article .entry-main-content .htmlCode p",
            (i) => i[12].textContent.trim()
          );
          if (trythirteen === undefined) {
            thirteen = "";
          }
          thirteen = changeSentence(trythirteen);
        } catch (error) {
          thirteen = "";
        }
        try {
          const tryfourteen = await newPage.$$eval(
            "main .container .row .col-lg-8 .single-content2 article .entry-main-content .htmlCode p",
            (i) => i[13].textContent.trim()
          );
          if (tryfourteen === undefined) {
            fourteen = "";
          }
          fourteen = changeSentence(tryfourteen);
        } catch (error) {
          fourteen = "";
        }
        try {
          const tryfifteen = await newPage.$$eval(
            "main .container .row .col-lg-8 .single-content2 article .entry-main-content .htmlCode p",
            (i) => i[14].textContent.trim()
          );
          if (tryfifteen === undefined) {
            fifteen = "";
          }
          fifteen = changeSentence(tryfifteen);
        } catch (error) {
          fifteen = "";
        }
        try {
          const trysixteen = await newPage.$$eval(
            "main .container .row .col-lg-8 .single-content2 article .entry-main-content .htmlCode p",
            (i) => i[15].textContent.trim()
          );
          if (trysixteen === undefined) {
            sixteen = "";
          }
          sixteen = changeSentence(trysixteen);
        } catch (error) {
          sixteen = "";
        }
        try {
          const tryseventeen = await newPage.$$eval(
            "main .container .row .col-lg-8 .single-content2 article .entry-main-content .htmlCode p",
            (i) => i[16].textContent.trim()
          );
          if (tryseventeen === undefined) {
            seventeen = "";
          }
          seventeen = changeSentence(tryseventeen);
        } catch (error) {
          seventeen = "";
        }
        try {
          const tryeighteen = await newPage.$$eval(
            "main .container .row .col-lg-8 .single-content2 article .entry-main-content .htmlCode p",
            (i) => i[17].textContent.trim()
          );
          if (tryeighteen === undefined) {
            eighteen = "";
          }
          eighteen = changeSentence(tryeighteen);
        } catch (error) {
          eighteen = "";
        }
        try {
          const trynineteen = await newPage.$$eval(
            "main .container .row .col-lg-8 .single-content2 article .entry-main-content .htmlCode p",
            (i) => i[18].textContent.trim()
          );
          if (trynineteen === undefined) {
            nineteen = "";
          }
          nineteen = changeSentence(trynineteen);
        } catch (error) {
          nineteen = "";
        }
        try {
          const trytwenty = await newPage.$$eval(
            "main .container .row .col-lg-8 .single-content2 article .entry-main-content .htmlCode p",
            (i) => i[19].textContent.trim()
          );
          if (trytwenty === undefined) {
            twenty = "";
          }
          twenty = changeSentence(trytwenty);
        } catch (error) {
          twenty = "";
        }
      } catch (error) {
        newPage.close();
      }
      const more_data = {
        date,
        largeImage,
        one,
        two,
        three,
        four,
        five,
        six,
        seven,
        eight,
        nine,
        ten,
        eleven,
        twelve,
        thirteen,
        fourteen,
        fifteen,
        sixteen,
        seventeen,
        eighteen,
        nineteen,
        twenty,
      };
      news_Date.more_details = more_data;
      console.log(news_Date);
      const allNews = await news.findOne({ title: news_Date.title });
      if (news_Date.title !== "" && news_Date.more_details.largeImage !== "") {
        if (!allNews) {
          try {
            const deleteDocuments = async () => {
              await news.collection.stats((error, results) => {
                if (error) throw error;
                if (!error) {
                  const storageSizeMB = results.storageSize / (1024 * 1024); // تحويل الحجم إلى ميجابايت
                  if (storageSizeMB >= 480) {
                    try {
                      (async () => {
                        try {
                          const newSize = await news
                            .find()
                            .sort({ createdAt: 1 })
                            .limit(1);
                          await news.deleteOne({ _id: newSize._id });
                          console.log(
                            "The documents have been deleted successfully."
                          );
                          console.log(
                            `Database size: ${storageSizeMB.toFixed(2)} MB`
                          );
                        } catch (error) {
                          console.error(
                            "An error occurred while deleting the documents:",
                            error
                          );
                        }
                      })();
                    } catch (error) {
                      if (error) throw error;
                      console.log(error);
                    }
                  }
                }
              });
            };
            deleteDocuments();
            const new_News = new news(news_Date);
            await new_News.save();
            const pageId = process.env.PAFE_ID;
            const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;
            const image = news_Date.more_details.largeImage;
            const world = "   لمزيد من التفاصيل اضغط على هذا الرابط" + "  ";
            const message = `${news_Date.title}` + world + "   ";
            const linkNews = `https://www.awalbawl.online/news/${new_News._id}`;
            await PostToFacebookPage(
              pageId,
              message,
              linkNews,
              accessToken,
              image
            );
            await indexing(linkNews);
            await submitToBing(linkNews);
          } catch (error) {
            console.log(error.message);
          }
        }
      }
      const isClosed = await page.isClosed();
      const isClosedNew = await newPage.isClosed();
      if (!isClosed) {
        page.close();
      }
      if (!isClosedNew) {
        newPage.close();
      }
    }
  }
};
