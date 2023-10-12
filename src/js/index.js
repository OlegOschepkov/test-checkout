import {initTabs} from './modules/init-tabs';
import {initForm} from './modules/init-form';
import {initModals} from './modules/init-modals';
import {initTooltips} from './modules/init-tooltips';

// ---------------------------------

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

window.addEventListener(`DOMContentLoaded`, () => {

  // Utils
  // ---------------------------------


  // Modules
  // ---------------------------------

  initTabs();
  initForm();
  initModals();
  initTooltips();
});
