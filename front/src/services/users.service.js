export const openAddUser = ({
  actions,
}) => actions.openAddUser({ edit: false });

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

export const checkApp = ({
  event,
  appName,
  actions,
}) => actions.checkApp({
  value: event.target.value,
  appName,
});

export const postUser = ({
  event,
  actions,
  userName,
  userEmail,
  userTitle,
  userSchedule,
  userApps,
}) => {
  event.preventDefault(); const errors = [];

  if (userName === '') {
    errors.push('the field "Name" is requiere');
  }

  if (userEmail === '') {
    errors.push('the field "Email" is requiere');
  }

  if (userTitle === '') {
    errors.push('the field "Title" is requiere');
  }

  if (userSchedule === '') {
    errors.push('the field "Schedule" is requiere');
  }

  const apps = [];

  for (const appName in userApps) {
    apps.push(appName);
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
  actions.addUser({
    name: userName,
    email: userEmail,
    title: userTitle,
    schedule: userSchedule,
    apps,
  });
};
