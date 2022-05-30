import { createServer, Model } from "miragejs";
// import { v4 as idv4 } from "uuid";

export const setupServer = () => {
    // eslint-disable-next-line
  let server = createServer({
    models: {
      todos: Model,
    },
    routes() {
      this.get("/api/todos", (schema) => {
        return schema.todos.all();
      });

      this.post("/api/todos", (schema, request) => {
        const payload = JSON.parse(request.requestBody);
        return schema.todos.create(payload);
      });

      this.post("/api/updateTodo", (schema, request) => {
        const id = JSON.parse(request.requestBody);

        const currentTodo = schema.todos.find(id);
        currentTodo.update({complete: !currentTodo.complete});
        
        return currentTodo
      });
    },
  });
};
