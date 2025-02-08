export const CleanImageUrl = async (page, itemSelector) => {
  try {
    let url = await page.$eval(itemSelector.img, (i) => i.src);
    url = url.split("?")[0];
    return url;
  } catch (error) {
    console.error("Error cleaning the image URL:", error);
  }
};
