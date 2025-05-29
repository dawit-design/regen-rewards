const parseReceiptText = (text) => {
  const storeName = text.match(/(?:Store|Merchant|Vendor|Name):?\s*(.*)/i)?.[1]?.trim() || "Unknown Store";
  const date = text.match(/(?:\d{2}[\/-]\d{2}[\/-]\d{4}|\d{4}[\/-]\d{2}[\/-]\d{2})/)?.[0] || "Unknown Date";
  const total = text.match(/(?:Total|Amount|Sum):?\s*([$£€]?\d+(?:\.\d{2})?)/i)?.[1] || "Unknown Total";
  const itemPattern = /\d+\s*x\s*[\w\s]+(?:-\s*([$£€]?\d+(?:\.\d{2})?))?/i;
  const items = text.split('\n').filter(line => line.match(itemPattern)).map(line => line.trim());

  return {
      storeName,
      date,
      total,
      items,
  };
};

module.exports = parseReceiptText;
