export const formatCurrency = (amount: number) => {
  return amount.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

export const formatDateToLocal = (date: Date, locale: string = "pt-BR") => {
  return date.toLocaleDateString(locale);

  // const options: Intl.DateTimeFormatOptions = {
  //   day: "numeric",
  //   month: "numeric",
  //   year: "2-digit",
  // };

  // const formatter = new Intl.DateTimeFormat(locale, options);
  // return formatter.format(date);
};
