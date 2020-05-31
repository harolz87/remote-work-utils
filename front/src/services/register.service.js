
export const register = ({
  event,
  history,
  actions,
  userName,
  userPhone,
  userEmail,
  userPass,
  userConfirmPass,
}) => {
  event.preventDefault();
  const errors = [];

  if (userName === '') {
    errors.push('the field "User Name" is requiere');
  }

  if (userPhone === '') {
    errors.push('the field "Phone number" is requiere');
  }

  if (userEmail === '') {
    errors.push('the field "Email address" is requiere');
  }

  if (userPass === '') {
    errors.push('the field "Password" is requiere');
  }

  if (userConfirmPass === '') {
    errors.push('the field "Confirm Password" is requiere');
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

  actions.register({
    email: userEmail,
    username: userName,
    first_name: userName,
    last_name: '--',
    phone_number: userPhone,
    password: userPass,
    password_confirmation: userConfirmPass,
  }, history);
};

export const changeUser = ({
  event,
  actions,
}) => actions.changeUser(event.target.value);

export const changePhone = ({
  event,
  actions,
}) => actions.changePhone(event.target.value);

export const changeEmail = ({
  event,
  actions,
}) => actions.changeEmail(event.target.value);

export const changePass = ({
  event,
  actions,
}) => actions.changePass(event.target.value);

export const changeComfirmPass = ({
  event,
  actions,
}) => actions.changeComfirmPass(event.target.value);
