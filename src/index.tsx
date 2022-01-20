import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        { id: "1", title: "Rent", amount: 1100, type:"outcome", category: "Living", date: new Date() },
        { id: "2", title: "Work", amount: 3000, type:"income", category: "Work", date: new Date() },
        { id: "3", title: "Groceries", amount: 350, type:"outcome", category: "Food", date: new Date() },
      ]
    });
  },

  routes() {
    this.namespace = 'api';

    this.get("/transactions", () => {
      return this.schema.all('transaction');
    });
    
    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  },
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
