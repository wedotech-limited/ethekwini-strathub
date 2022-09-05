function formatNumber(value) {
  if (!value && value != 0) {
    return "N/A";
  }
  return value.toLocaleString("en-US");
}

function formatAmount(amount) {
  return `R ${formatNumber(amount)}`;
}
