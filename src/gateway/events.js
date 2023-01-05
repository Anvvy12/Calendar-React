const baseUrl = 'https://63848ff04ce192ac605b7073.mockapi.io/tasks';

export const createNewTask = taskData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(taskData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to create new task');
    }
  });
};

export const getTask = () => {
  return fetch(baseUrl).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Failed to fetch task');
  });
};

export const deleteTask = id => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      throw new Error(" Internal Server Error. Can't display events");
    }
  });
};
