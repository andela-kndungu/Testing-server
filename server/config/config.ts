console.log(process.env);

module.exports = {
  "development": {
    "username": "",
    "password": null,
    "database": "testing_react_native_development",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "testing_react_native_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "DATABASE_URL": true,
    "database": "testing_react_native_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
