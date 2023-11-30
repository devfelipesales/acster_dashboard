export const formatCurrency = (amount: number) => {
  return amount.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

export const formatDateToLocal = (date: Date, locale: string = "pt-BR") => {
  // console.log(date);

  // console.log(date.toISOString());
  // console.log(date.toUTCString());
  // console.log(date.setHours(date.getHours() - 3));
  // console.log(date.toISOString());
  // console.log(date.toUTCString());

  // console.log("------");

  return date.toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" });

  // const options: Intl.DateTimeFormatOptions = {
  //   day: "numeric",
  //   month: "numeric",
  //   year: "2-digit",
  // timeZone: 'America/Sao_Paulo',
  // };

  // const formatter = new Intl.DateTimeFormat(locale, options);
  // return formatter.format(date);
};
