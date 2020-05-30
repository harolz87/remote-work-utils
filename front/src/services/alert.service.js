export const closeAlert = (actions) => {
  actions.closeAlert();
};

export const getContent = (dataAlert) => {
  const dataDefault = {
    type: 'error',
    title: null,
    body: 'withOut text',
    buttons: [],
  };

  const {
    type,
    title,
    body,
    buttons,
  } = { ...dataDefault, ...dataAlert };

  let titleAlert = title;

  switch (type) {
    case 'error':
      titleAlert = 'Error';
      break;
    case 'warning':
      titleAlert = 'Warning';
      break;
    case 'info':
      titleAlert = 'Info';
      break;
    default:
      break;
  }

  return {
    title: titleAlert,
    body,
    buttons,
  };
};

export const getButton = (button, actions) => {
  const buttonDefault = {
    label: '',
    onClick: null,
    withClose: true,
  };

  const {
    label,
    onClick,
    withClose,
  } = { ...buttonDefault, ...button };

  const formattedButton = {
    label,
  };

  if (onClick !== null) {
    formattedButton.onClick = () => {
      button.onClick();
      if (withClose) actions.closeAlert();
    };
    return formattedButton;
  }

  formattedButton.onClick = () => {
    if (withClose) actions.closeAlert();
  };

  return formattedButton;
};
