export const RemoveItems = async (page, itemSelector) => {
    // Iterate over the keys in itemSelector
    for (const key in itemSelector) {
        if (itemSelector[key]) {
            await page.evaluate((selector) => {
                const elements = document.querySelectorAll(selector);
                elements.forEach((element) => element.remove());
            }, itemSelector[key]);
        }
    }

    // Handle empty paragraphs or those with less than 35 characters
    if (itemSelector.paragraphs) {
        await page.evaluate((selector) => {
            const elements = document.querySelectorAll(selector);
            elements.forEach((p) => {
                const textContent = p.textContent.trim();
                if (textContent === "" || textContent.length < 35) {
                    p.remove();
                }
            });
        }, itemSelector.paragraphs);
    }
};
