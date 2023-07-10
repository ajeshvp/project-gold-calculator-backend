const express = require('express');
const app = express();
const port = 4000;
app.get('/api/data', (req, res) => {
    const responseData = {
        message: 'Data from the backend',
        timestamp: new Date().toISOString(),
    };

    res.json(responseData);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});