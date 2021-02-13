# IOT-db

npm run setup 

npm run test 

## Usage 

```js 
const setupDatabase = require('iot-db')

setupDabase(config).then (db => {
    const { Agent, Metric } = db
}).catch(err => console.error(error))
```