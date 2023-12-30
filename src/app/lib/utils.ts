export const formatCurrency = (amount: number) => {
  return amount.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

export const formatDateToLocal = (date: Date, locale: string = "pt-BR") => {


return date.toLocaleDateString(locale, { timeZone: "America/Sao_Paulo" });


};
