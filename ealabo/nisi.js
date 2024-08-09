function isAggregate$1(encoding) {
  switch (encoding) {
    case 'SUM':
    case 'AVG':
    case 'MAX':
    case 'MIN':
    case 'COUNT':
      return true;
    default:
      return false;
  }
}
