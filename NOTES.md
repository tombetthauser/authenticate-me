Installed the following in the backend directory

npm install bcryptjs cookie-parser cors csurf dotenv express express-async-handler express-validator faker helmet jsonwebtoken morgan per-env pg@">=8.4.1" sequelize@5 sequelize-cli@5
npm install -D dotenv-cli nodemon

openssl rand -base64 10

psql -c "CREATE USER auth_app PASSWORD hunter2thompson CREATEDB"