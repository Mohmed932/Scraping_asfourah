const removeParagraphsAfterLastDivSayidaty = async (page, itemSelector) => {
  try {
    // الحصول على جميع عناصر div من الصفحة باستخدام selector
    const divs = await page.$$eval(itemSelector.divs, (elements) => elements);

    // التأكد من وجود عناصر div
    if (divs.length > 0) {
      // تحديد آخر div
      const lastDiv = divs[divs.length - 1];

      // العثور على جميع الفقرات (p) التي تأتي بعد آخر div
      const paragraphsAfterLastDiv = await page.evaluate((lastDiv) => {
        let nextEl = lastDiv.nextElementSibling; // العنصر التالي بعد آخر div
        let paragraphs = []; // مصفوفة لتخزين الفقرات التي ستتم إزالتها

        // التكرار عبر العناصر التالية
        while (nextEl) {
          if (nextEl.tagName === "P") {
            // إذا كان العنصر هو فقرة (p)، إضافتها إلى المصفوفة
            paragraphs.push(nextEl);
          }
          nextEl = nextEl.nextElementSibling; // الانتقال للعنصر التالي
        }
        return paragraphs; // إرجاع المصفوفة التي تحتوي على الفقرات
      }, lastDiv);

      // حذف جميع الفقرات التي تم العثور عليها
      for (let paragraph of paragraphsAfterLastDiv) {
        await page.evaluate((p) => p.remove(), paragraph); // حذف الفقرة
      }
    }
  } catch (error) {
    console.error("حدث خطأ:", error);
  }
};

const removeElements = async (page, selector) => {
  await page.$$eval(selector, (elements) => elements.map((el) => el.remove()));
};
const paragraphsFilters = async (page, selector) => {
  await page.$$eval(selector, (elements) => {
    return elements
      .map((el) => el.textContent?.trim())
      .filter((text) => text && text.length > 0);
  });
};
export const ParagraphFilterSayidaty = async (page, itemSelector) => {
  try {
    await removeParagraphsAfterLastDivSayidaty(page, itemSelector);
    await removeElements(page, itemSelector.divs);
    await removeElements(page, itemSelector.h2);
    await paragraphsFilters(page, itemSelector.paragraphs);
  } catch (error) {
    return [];
  }
};
export const ParagraphFilterAlqaheranews = async (page, itemSelector) => {
  try {
    await paragraphsFilters(page, itemSelector.paragraphs);
  } catch (error) {
    return [];
  }
};
export const ParagraphFilterAawsat = async (page, itemSelector) => {
  try {
    await removeElements(page, itemSelector.blockquote);
    await paragraphsFilters(page, itemSelector.paragraphs);
  } catch (error) {
    return [];
  }
};
export const ParagraphFilterAhram = async (page, itemSelector) => {
  try {
    await removeElements(page, itemSelector.divs);
    await removeElements(page, itemSelector.h2);
    await paragraphsFilters(page, itemSelector.paragraphs);
  } catch (error) {
    return [];
  }
};
export const ParagraphFilterAlarabiya = async (page, itemSelector) => {
  try {
    await removeElements(page, itemSelector.divs);
    await paragraphsFilters(page, itemSelector.paragraphs);
  } catch (error) {
    return [];
  }
};
