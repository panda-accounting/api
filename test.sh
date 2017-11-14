npm run eslint
## prepare the temporary mongodb
DB_NAME="panda_accounting_test_$(cat /dev/urandom | tr -dc 'a-zA-Z' | fold -w 6 | head -n 1)"
DB_URL="mongodb://localhost:27017/$DB_NAME"
echo "using $DB_URL as database name"
env NODE_CONFIG="{\"mongodb\": \"$DB_URL\"}" npm run mocha
