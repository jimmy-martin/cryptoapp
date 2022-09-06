const app = require('../app');
const {
    port
} = require('.');

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});