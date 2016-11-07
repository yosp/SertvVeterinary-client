'use strict'

const test = require('ava')
const nock = require('nock')
const sertvveterinary = require('../')
const fixtures = require('./fixtures')

let options = {
  endpoints: {
    appointment: 'http://sertvveterinary.com/appointment',
    aprecord: 'http://sertvveterinary.com/aprecord',
    auth: 'http://sertvveterinary.com/auth',
    bills: 'http://sertvveterinary.com/bills',
    billdetail: 'http://sertvveterinary.com/billdetail',
    client: 'http://sertvveterinary.com/client',
    ethnicities: 'http://sertvveterinary.com/ethnicities',
    internment: 'http://sertvveterinary.com/internment',
    interecord: 'http://sertvveterinary.com/interecord',
    laboratory: 'http://sertvveterinary.com/laboratory',
    medicine: 'http://sertvveterinary.com/medicine',
    pet: 'http://sertvveterinary.com/pet',
    products: 'http://sertvveterinary.com/products',
    race: 'http://sertvveterinary.com/race',
    users: 'http://sertvveterinary.com/users'
  }
}

test.beforeEach(t => {
  t.context.client = sertvveterinary.createClient(options)
})

test('auth', async t => {
  const client = t.context.client

  let credentials = {
    username: 'juanJuan',
    password: 'blablaba'
  }

  let token = 'xxx-xxx-xxx'

  nock(options.endpoints.auth)
    .post('/', credentials)
    .reply(200, token)

  let result = await client.auth(credentials.username, credentials.password)

  t.deepEqual(result, token)
})

test('getuser', async t => {
  const client = t.context.client

  let user = fixtures.getUser()

  nock(options.endpoints.users)
    .get(`/${user.username}`)
    .reply(200, user)

  let result = await client.getUser(user.username)

  t.deepEqual(result, user)
})

test('saveUser', async t => {
  const client = t.context.client

  let user = fixtures.getUser()
  let newUser = {
    username: user.username,
    name: user.name,
    email: 'yosp@gmail.com',
    password: 'blablaba'
  }

  nock(options.endpoints.users)
    .post('/', newUser)
    .reply(201, user)

  let result = await client.saveUser(newUser)

  t.deepEqual(result, user)
})

test('updateUser', async t => {
  const client = t.context.client

  let user = fixtures.getUser()
  let token = 'xxx-xxx-xxx'

  nock(options.endpoints.users, {
    reqheaders: {
      'Authorization': `Bearer ${token}`}
  })
    .post('/update', user)
    .reply(201, user)

  let result = await client.updateUser(user, token)

  t.deepEqual(result, user)
})

test('saveClient', async t => {
  const client = t.context.client

  let apClient = fixtures.getClient()

  nock(options.endpoints.client)
    .post('/', apClient)
    .reply(201, apClient)

  let result = await client.saveClient(apClient)

  t.deepEqual(result, apClient)
})

test('updateClient', async t => {
  const client = t.context.client

  let apClient = fixtures.getClient()
  let token = 'XXXX-XXXX-XXXX'
  nock(options.endpoints.client, {
    headers: { 'Authorization': `Bearer ${token}` }
  })
    .post('/update', apClient)
    .reply(201, apClient)

  let result = await client.updateClient(apClient, token)
  t.deepEqual(result, apClient)
})

test('getClientList', async t => {
  const client = t.context.client

  let apClient = fixtures.getClient()

  nock(options.endpoints.client)
    .get('/')
    .reply(200, apClient)

  let result = await client.getClientList()

  t.deepEqual(result, apClient)
})

test('getClient', async t => {
  const client = t.context.client

  let apClient = fixtures.getClient()

  nock(options.endpoints.client)
    .get(`/${apClient.id}`)
    .reply(200, apClient)

  let result = await client.getClient(apClient.id)

  t.deepEqual(result, apClient)
})

test('getClientByPhone', async t => {
  const client = t.context.client

  let apClient = fixtures.getClient()

  nock(options.endpoints.client)
    .get(`/byPhone/${apClient.phone}`)
    .reply(200, apClient)

  let result = await client.getClientByPhone(apClient.phone)

  t.deepEqual(result, apClient)
})

test('getClientByEmail', async t => {
  const client = t.context.client

  let apClient = fixtures.getClient()

  nock(options.endpoints.client)
    .get(`/byEmail/${apClient.email}`)
    .reply(200, apClient)

  let result = await client.getClientByEmail(apClient.email)

  t.deepEqual(result, apClient)
})

test('saveInternment', async t => {
  const client = t.context.client

  let intern = fixtures.getInter()

  nock(options.endpoints.internment)
    .post('/', intern)
    .reply(201, intern)

  let result = await client.saveInternment(intern)

  t.deepEqual(result, intern)
})

test('updateInternment', async t => {
  const client = t.context.client

  let intern = fixtures.getInter()
  let token = 'XXXX-XXXX-XXXX'
  nock(options.endpoints.internment, {
    headers: { 'Authorization': `Bearer ${token}` }
  })
    .post('/update', intern)
    .reply(201, intern)

  let result = await client.updateInternment(intern, token)
  t.deepEqual(result, intern)
})

test('getInternment', async t => {
  const client = t.context.client

  let intern = fixtures.getInter()

  nock(options.endpoints.internment)
    .get(`/${intern.petid}`)
    .reply(200, intern)

  let result = await client.getInternment(intern.petid)

  t.deepEqual(result, intern)
})

test('saveInterecord', async t => {
  const client = t.context.client

  let record = fixtures.getInrec()

  nock(options.endpoints.interecord)
    .post('/', record)
    .reply(201, record)

  let result = await client.saveInterecord(record)

  t.deepEqual(result, record)
})

test('updateInterecord', async t => {
  const client = t.context.client

  let record = fixtures.getInrec()
  let token = 'XXXX-XXXX-XXXX'
  nock(options.endpoints.interecord, {
    headers: {'Authorization': `Bearer ${token}`}
  })
    .post('/update', record)
    .reply(201, record)

  let result = await client.updateInterecord(record, token)

  t.deepEqual(result, record)
})
