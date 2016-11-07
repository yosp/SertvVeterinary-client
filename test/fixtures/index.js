'use strict'

const uuid = require('uuid-base62')

const fixtures = {
  getUser () {
    return {
      id: uuid.uuid(),
      name: 'A random user',
      username: `user_${uuid.v4()}`,
      createdAt: new Date().toString()
    }
  },

  getClient () {
    return {
      id: uuid.uuid(),
      fullname: 'Yeison Segura',
      gender: 'Hombre',
      direction: 'Calle 1ra #4',
      email: 'yeisp1011@gmail.com',
      phone: '809-414-8433',
      phone2: '829-926-6545'
    }
  },

  getInter () {
    return {
      petid: uuid.v4(),
      description: 'Pasiente con fiebre',
      internDate: '10/11/2016',
      status: 'A'
    }
  }
}

module.exports = fixtures
