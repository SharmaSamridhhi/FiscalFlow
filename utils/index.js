/**
 * Formats a number into Indian currency format with suffixes (e.g., ₹1L, ₹1.5Cr).
 * @param {number} num - The number to format.
 * @returns {string} - The formatted number as a string with INR symbol.
 */

const formatAmount = (num) => {
  // Add INR symbol
  const rupeeSymbol = "₹";

  if (num >= 1e7) {
    // Convert to Crores (1Cr = 10M)
    return rupeeSymbol + num;
  }
  if (num >= 1e5) {
    // Convert to Lakhs (1L = 100K)
    return rupeeSymbol + (num / 1e5).toFixed(1).replace(/\.0$/, "") + "L";
  }
  if (num >= 1e3) {
    // Convert to Thousands
    return rupeeSymbol + (num / 1e3).toFixed(1).replace(/\.0$/, "") + "K";
  }
  // Add thousands separator for numbers below 1000
  return rupeeSymbol + num.toLocaleString("en-IN");
};

export default formatAmount;
