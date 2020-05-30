
export const login = ({
  event,
  history,
  actions,
  userName,
  userPass,
}) => {
  event.preventDefault();
  const errors = [];

  if (userName === '') {
    errors.push('the field "User name" is requiere');
  }

  if (userPass === '') {
    errors.push('the field "password" is requiere');
  }

  if (errors.length > 0) {
    actions.openAlert({
      type: 'error',
      body: errors.toString(),
      buttons: [
        {
          label: 'ok',
        },
      ],
    });
    return;
  }

  actions.login({
    user: userName,
    password: userPass,
  }, history);
};

export const changeUser = ({
  event,
  actions,
}) => actions.changeUser(event.target.value);

export const changePass = ({
  event,
  actions,
}) => actions.changePass(event.target.value);
