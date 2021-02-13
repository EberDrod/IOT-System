# iot_System-mqtt

Server mqtt : npm run start-dev 


# install db 

brew install postgresql

start db:
brew services start postgresql


brew install redis 

start db:
brew services start redis


# iot_System-mqtt

mqtt pub -t 'agent/message' -m '{"agent": {"uuid": "yyy", "name": "test", "username": "dani", "pid": 10, "hostname": "iot_cdmx"}, "metrics": [{"type": "memory", "value": "1001"}, {"type": "temp", "value": "33"}]}'


# coneected bd 
psql -U iot iotdb 


1.- select * from agents; 
2.- select * from metrics; 

