import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";
interface Todo {
  userId: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;
  const Id = todo.userId;
  const title = todo.title;
  const completed = todo.completed;

  TODO(Id, title, completed);
});

const TODO = (Id: number, title: string, completed: boolean) => {
  console.log(`
    The todo with id :${Id};
    Has a title of :${title};
    Is it finished? :${completed};
    `);
};
