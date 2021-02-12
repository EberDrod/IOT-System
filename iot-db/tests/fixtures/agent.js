'use strict'

const agent = {
  id: 1,
  uuid: 'yyy-yyy-yyy',
  name: 'fixture',
  username: 'alexa_element',
  hostname: 'test-host',
  pid: 0,
  connected: true,
  createdAt: new Date(),
  updatedAt: new Date()

}

const agents = [
  agent,
  extend(agent, { id: 2, uuid: 'yyy-yyy-yy', connected: false, username: 'test' }),
  extend(agent, { id: 3, uuid: 'yyy-yyy-yx', connected: false, username: 'test' }),
  extend(agent, { id: 4, uuid: 'yyy-yyy-yz', connected: false, username: 'test' })

]

function extend (obj, values) {
  const clone = Object.assign({}, obj)
  return Object.assign(clone, values)
}

module.exports = {
  single: agent,
  all: agents,
  connected: agents.filter(a => a.connected),
  iot: agents.filter(a => a.username === 'iot'),
  byUuid: id => agents.filter(a => a.uuid === id).shift(),
  byId: id => agents.filter(a => a.id === id).shift()
}
