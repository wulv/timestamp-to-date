module.exports = (date) => {
  let padded = date.toString();
  if (padded.length === 1) {
    padded = `0${date.toString()}`;
  }
  return padded;
};
