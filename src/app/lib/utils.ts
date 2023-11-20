export const formatCurrency = (amount: number) => {
  return amount.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

export const formatDateToLocal = (date: Date, locale: string = "pt-BR") => {
  // const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "numeric",
    year: "2-digit",
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};
