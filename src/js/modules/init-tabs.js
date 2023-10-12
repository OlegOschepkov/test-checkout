const initTabs = () => {
  const tabs = document.querySelectorAll('[data-tab-parent]');

  if (!tabs.length) {
    return;
  }

  tabs.forEach((tab) => {
    const tabBtns = tab.querySelectorAll('[data-tab-anchor-link]');
    const tabContents = tab.querySelectorAll('[data-tab-anchor]');

    if (!tabBtns.length || !tabContents.length) {
      return;
    }

    const cleanActive = () => {
      tabBtns.forEach((btn) => {
        btn.classList.remove('is-active');
      });
      tabContents.forEach((content) => {
        content.classList.remove('is-active');
      });
    };

    tabBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        let eTarget = e.target === btn ? e.target : e.target.closest('[data-tab-anchor-link]');
        const anchorLink = eTarget.dataset.tabAnchorLink;
        const anchor = tab.querySelector(`[data-tab-anchor="${anchorLink}"]`);
        cleanActive();
        btn.classList.add('is-active');
        anchor.classList.add('is-active');
      });
    });
  });
};

export {initTabs};
