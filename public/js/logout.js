const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  console.log(response)
  if (response.ok) {
    document.location.replace('/');
  } else {
    console.log(err)
    alert(response.statusText);
  }
};

document.querySelector('#logout').addEventListener('click', logout);
