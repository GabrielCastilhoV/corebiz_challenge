const formatPrice = (number: number): string => {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number((number / 100).toFixed(2)));
};

export default formatPrice;
