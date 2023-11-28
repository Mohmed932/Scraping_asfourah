export const DataAndTime = () => {
  // إنشاء كائن Date للحصول على التاريخ والوقت الحاليين
  const currentDate = new Date();

  // أيام الأسبوع بالعربية
  const daysOfWeek = [
    "الأحد",
    "الاثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
    "السبت",
  ];

  // أشهر السنة بالعربية
  const months = [
    "يناير",
    "فبراير",
    "مارس",
    "إبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ];

  // الحصول على اليوم والتاريخ
  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const dayOfMonth = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  // الحصول على الوقت
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();

  // تنسيق الوقت بصيغة 12 ساعة
  const ampm = hours >= 12 ? "م" : "ص";
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

  // عرض التاريخ بالتنسيق المطلوب
  const formattedDate = `${dayOfWeek} ${dayOfMonth}/${month}/${year} - ${formattedHours}:${minutes} ${ampm}`;

  return formattedDate;
};
