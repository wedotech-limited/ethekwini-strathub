function formatNumber(value) {
  if (!value && value != 0) {
    return "N/A";
  }
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatAmount(amount) {
  return `R ${formatNumber(amount)}`;
}
