const initForm = () => {
  const formWrappers = document.querySelectorAll(`[data-form]`);

  if (!formWrappers.length) {
    return;
  }

  const returnModifiedStr = (validator, str) => {
    let strToInt = Number(str.replace(/[^\d]/g, ``));

    switch (validator) {
      case `number`:
        return str.replace(/[^\d]/g, ``);
      case `card-year`:
        if (strToInt) {
          if (strToInt <= 12 && strToInt >= 1) {
            strToInt = (strToInt < 10 ? 0 : ``) + strToInt;
          }
          if (strToInt > 99) {
            strToInt = Number(strToInt.toString().substring(1));
          }
          return strToInt;
        } else {
          return ``;
        }
      case `card-month`:
        if (strToInt) {
          if (strToInt <= 12 && strToInt >= 1) {
            return (strToInt < 10 ? 0 : ``) + strToInt;
          } else if (strToInt > 12) {
            return 12;
          } else {
            return 0;
          }
        } else {
          return ``;
        }
      case `card-number`:
        return str.replace(/\W/gi, ``).replace(/(.{4})/g, `$1 `).replace(/[^\d ]/g, ``).trim();
      case `text`:
        return str.replace(/[^a-zA-Zа-яёА-ЯЁ\-\s]/g, ``);
      default:
        return false;
    }
  };


  formWrappers.forEach((wrapper) => {
    const inputParents = wrapper.querySelectorAll(`[data-form-input-validation]`);
    const form = wrapper.querySelector(`form`);

    inputParents.forEach((inputParent) => {
      const validator = inputParent.dataset.formInputValidation;
      const input = inputParent.querySelector(`input`);

      input.addEventListener(`input`, (e) => {
        e.target.value = returnModifiedStr(validator, e.target.value);
      });
    });

    form.addEventListener(`submit`, (e) => {
      e.preventDefault();
      let isValid = [];

      const inputs = form.querySelectorAll(`[data-form-input-validation] input`);
      inputs.forEach((input) => {
        input.setAttribute(`aria-invalid`, `false`);

        if (!input.checkValidity()) {
          input.setAttribute(`aria-invalid`, `true`);
          isValid.push(false);
        } else {
          input.setAttribute(`aria-invalid`, `false`);
          isValid.push(true);
        }
      });

      if (isValid.filter((el) => el === false).length === 0) {
        form.submit();
      }
    });
  });
};

export {initForm};
