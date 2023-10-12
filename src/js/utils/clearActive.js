export const clearActive = (arr) => {
  arr.forEach((el) => {
    el.classList.remove(`is-active`);
  });
};
