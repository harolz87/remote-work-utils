
export const login = ({
  event,
  actions,
  userName,
  userPass,
}) => {
  event.preventDefault();
};

export const changeUser = ({
  event,
  actions,
}) => actions.changeUser(event.target.value);

export const changePass = ({
  event,
  actions,
}) => actions.changePass(event.target.value);
