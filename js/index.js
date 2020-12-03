const baseUrl = 'https://js-todo-list-9ca3a.df.r.appspot.com';

const userCreateButton = document.querySelector('.user-create-button');

const loadUserList = async () => {
  const $userList = document.querySelector('#user-list');

  const users = await fetch(baseUrl + '/api/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
  // console.log(await users.json());

  await users
    .json()
    .toStringify()
    .forEach(({ _id, name }) => {
      console.log(name);
    });
};

const onUserCreateHandler = async () => {
  const userName = prompt('추가하고 싶은 이름을 입력해주세요.');
  const content = {
    name: userName,
  };

  await fetch(baseUrl + '/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(content),
  });
  loadUserList();
};

userCreateButton.addEventListener('click', onUserCreateHandler);
