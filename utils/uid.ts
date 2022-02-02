const uid = (() => {
  let id = 0;
  return function () {
    if (arguments[0] === 0) id = 0;
    return id++;
  };
})();

export default uid;
