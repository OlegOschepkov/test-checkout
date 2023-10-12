const initTooltips = () => {
  const tooltips = document.querySelectorAll(`[data-tooltip]`);

  if (!tooltips.length) {
    return;
  }

  tooltips.forEach((tooltip) => {
    tooltip.addEventListener(`mouseover`, () => {
      tooltip.classList.add(`is-active`);
    });
    tooltip.addEventListener(`mouseout`, () => {
      tooltip.classList.remove(`is-active`);
    });
  });
};

export {initTooltips};
