export default price => {
  const kurs = 12400;
  const sum = kurs * price;
  const cost = sum * 2;

  return {
    sum,
    cost,
  };
};