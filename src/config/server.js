const app = require('../app');
const path = require('path');

const {
    port
} = require('.');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});