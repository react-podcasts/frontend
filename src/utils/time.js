export const secondsToString = (secondsString) => {
  let totalSeconds = secondsString;
  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  const minutes = Math.floor(totalSeconds / 60);

  if (hours) {
    return `${hours}h ${minutes}m`;
  }

  return `${minutes} mins`;
};

export const secondsToHms = (seconds) => {
  return new Date(seconds * 1000).toISOString().substr(11, 8);
}
