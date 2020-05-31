export const openAddUser = ({
  actions,
}) => actions.openAddUser({ edit: false});

export const closeAddUser = ({
  actions,
}) => actions.closeAddUser();

export const getUsers = ({
  actions,
}) => actions.getUsers();

export const changeName = ({
  event,
  actions,
}) => actions.changeName(event.target.value);

export const changeEmail = ({
  event,
  actions,
}) => actions.changeEmail(event.target.value);

export const changeTitle = ({
  event,
  actions,
}) => actions.changeTitle(event.target.value);

export const changeSchedule = ({
  event,
  actions,
}) => actions.changeSchedule(event.target.value);
