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
    "DATABASE_URL": "postgres://vbzwoyoibdvsne:1yx263bW80dtNA4X9HWU9RKvBK@ec2-54-235-120-39.compute-1.amazonaws.com:5432/df84qg1558nrt9",
  }
}
