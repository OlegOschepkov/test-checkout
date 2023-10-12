import {ScrollLock} from '../utils/scroll-lock';

const initModals = () => {
  const modalLinks = document.querySelectorAll('[data-modal-anchor]');
  const modals = document.querySelectorAll('[data-modal]');

  if (!modalLinks.length || !modals.length) {
    return;
  }

  const scrollLock = new ScrollLock();

  modalLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const modal = document.querySelector(`[data-modal=${link.dataset.modalAnchor}]`);
      if (modal) {
        modal.classList.add('is-active');
        scrollLock.disableScrolling();
      }
    });
  });

  modals.forEach((modal) => {
    const closers = modal.querySelectorAll('[data-close-modal]');

    closers.forEach((close) => {
      close.addEventListener('click', () => {
        modal.classList.remove('is-active');
        scrollLock.enableScrolling();
      });
    });
  });
};

export {initModals};
