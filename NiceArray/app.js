function isNice(arr) {
  return (arr.length !== 0 && arr.every(function (e, i, arr) {
    return (arr.includes(e + 1) || arr.includes(e - 1));
  }));
};