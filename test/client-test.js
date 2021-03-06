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

test('getInterecord', async t => {
  const client = t.context.client

  let record = fixtures.getInrec()

  nock(options.endpoints.interecord)
    .get(`/${record.internid}`)
    .reply(200, record)

  let result = await client.getInterecord(record.internid)

  t.deepEqual(result, record)
})

test('saveEthni', async t => {
  const client = t.context.client

  let ethni = fixtures.getEthni()

  nock(options.endpoints.ethnicities)
    .post('/', ethni)
    .reply(201, ethni)

  let result = await client.saveEthni(ethni)

  t.deepEqual(result, ethni)
})

test('updateEthni', async t => {
  const client = t.context.client

  let ethni = fixtures.getEthni()
  let token = 'xxx-xxx-xxx'

  nock(options.endpoints.ethnicities, {
    headers: {'Authorization': `Bearer ${token}`}
  })
    .post('/update', ethni)
    .reply(201, ethni)

  let result = await client.updateEthni(ethni, token)

  t.deepEqual(result, ethni)
})

test('getEthni', async t => {
  const client = t.context.client

  let ethni = fixtures.getEthni()

  nock(options.endpoints.ethnicities)
    .get('/')
    .reply(200, ethni)

  let result = await client.getEthni(ethni.id)

  t.deepEqual(result, ethni)
})

test('saveLaboratory', async t => {
  const client = t.context.client

  let lab = fixtures.getLab()

  nock(options.endpoints.laboratory)
    .post('/', lab)
    .reply(201, lab)

  let result = await client.saveLaboratory(lab)

  t.deepEqual(result, lab)
})

test('updateLaboratory', async t => {
  const client = t.context.client

  let lab = fixtures.getLab()
  let token = 'xxx-xxx-xxx'

  nock(options.endpoints.laboratory, {
    headers: {'Authorization': `Bearer ${token}`}
  })
    .post('/update', lab)
    .reply(201, lab)

  let result = await client.updateLaboratory(lab, token)

  t.deepEqual(result, lab)
})

test('getLaboratorys', async t => {
  const client = t.context.client

  let lab = fixtures.getLab()

  nock(options.endpoints.laboratory)
    .get(`/${lab.id}`)
    .reply(200, lab)

  let result = await client.getLaboratorys(lab.id)

  t.deepEqual(result, lab)
})

test('getLaboratorysList', async t => {
  const client = t.context.client

  let lab = fixtures.getLab()

  nock(options.endpoints.laboratory)
    .get('/')
    .reply(200, lab)

  let result = await client.getLaboratorysList()

  t.deepEqual(result, lab)
})

test('saveRace', async t => {
  const client = t.context.client

  let rac = fixtures.getRace()

  nock(options.endpoints.race)
    .post('/', rac)
    .reply(201, rac)

  let result = await client.saveRace(rac)

  t.deepEqual(result, rac)
})

test('updateRace', async t => {
  const client = t.context.client

  let rac = fixtures.getRace()
  let token = 'XXXX-XXXX-XXXX'

  nock(options.endpoints.race, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .post('/update', rac)
    .reply(201, rac)

  let result = await client.updateRace(rac, token)

  t.deepEqual(result, rac)
})

test('getRaceByEthni', async t => {
  const client = t.context.client

  let rac = fixtures.getRace()

  nock(options.endpoints.race)
    .get(`/${rac.ethniid}`)
    .reply(200, rac)

  let result = await client.getRaceByEthni(rac.ethniid)

  t.deepEqual(result, rac)
})

test('savePet', async t => {
  const client = t.context.client

  let pt = fixtures.getPet()

  nock(options.endpoints.pet)
    .post('/', pt)
    .reply(201, pt)

  let result = await client.savePet(pt)

  t.deepEqual(result, pt)
})

test('getPetsByClient', async t => {
  const client = t.context.client

  let pt = fixtures.getPet()

  nock(options.endpoints.pet)
    .get(`/${pt.owner}`)
    .reply(201, pt)

  let result = await client.getPetsByClient(pt.owner)

  t.deepEqual(result, pt)
})

test('savePetImage', async t => {
  const client = t.context.client

  let pti = fixtures.getPetImages()

  nock(options.endpoints.pet)
    .post('/petimage', pti)
    .reply(201, pti)

  let result = await client.savePetImage(pti)

  t.deepEqual(result, pti)
})

test('getPetImages', async t => {
  const client = t.context.client

  let pti = fixtures.getPetImages()

  nock(options.endpoints.pet)
    .get(`/petimage/${pti.petid}`)
    .reply(200, pti)

  let result = await client.getPetImages(pti.petid)

  t.deepEqual(result, pti)
})

test('saveMedicine', async t => {
  const client = t.context.client

  let med = fixtures.getMed()

  nock(options.endpoints.medicine)
    .post('/', med)
    .reply(201, med)

  let result = await client.saveMedicine(med)

  t.deepEqual(result, med)
})

test('updateMedicine', async t => {
  const client = t.context.client

  let med = fixtures.getMed()
  let token = 'XXXX-XXXX-XXXX'

  nock(options.endpoints.medicine, {
    headers: {'Authorization': `Bearer ${token}`}
  })
    .post('/update', med)
    .reply(201, med)

  let result = await client.updateMedicine(med)

  t.deepEqual(result, med)
})

test('getMedicineByLab', async t => {
  const client = t.context.client

  let med = fixtures.getMed()

  nock(options.endpoints.medicine)
    .get(`/${med.labid}`)
    .reply(200, med)

  let result = await client.getMedicineByLab(med.labid)

  t.deepEqual(result, med)
})

test('saveAppointment', async t => {
  const client = t.context.client

  let apo = fixtures.getApo()

  nock(options.endpoints.appointment)
    .post('/', apo)
    .reply(201, apo)

  let result = await client.saveAppointment(apo)

  t.deepEqual(result, apo)
})

test('updateAppointment', async t => {
  const client = t.context.client

  let apo = fixtures.getApo()
  let token = 'xxx-xxx-xxx'

  nock(options.endpoints.appointment, {
    headers: {'Authorization': `Bearer ${token}`}
  })
    .post('/update', apo)
    .reply(201, apo)

  let result = await client.updateAppointment(apo, token)

  t.deepEqual(result, apo)
})

test('getAppointments', async t => {
  const client = t.context.client

  let apo = fixtures.getApo()

  nock(options.endpoints.appointment)
    .get('/')
    .reply(200, apo)

  let result = await client.getAppointments()

  t.deepEqual(result, apo)
})

test('getAppointmentByPet', async t => {
  const client = t.context.client

  let apo = fixtures.getApo()

  nock(options.endpoints.appointment)
    .get(`/${apo.petid}`)
    .reply(200, apo)

  let result = await client.getAppointmentByPet(apo.petid)

  t.deepEqual(result, apo)
})

test('saveApRecord', async t => {
  const client = t.context.client

  let apr = fixtures.getApr()

  nock(options.endpoints.aprecord)
    .post('/', apr)
    .reply(201, apr)

  let result = await client.saveApRecord(apr)

  t.deepEqual(result, apr)
})

test('updateApRecord', async t => {
  const client = t.context.client

  let apr = fixtures.getApr()
  let token = 'xxx-xxx-xxx'

  nock(options.endpoints.aprecord, {
    headers: {'Authorization': `Bearer ${token}`}
  })
    .post('/update', apr)
    .reply(201, apr)

  let result = await client.updateApRecord(apr, token)

  t.deepEqual(result, apr)
})

test('getApRecord', async t => {
  const client = t.context.client

  let apr = fixtures.getApr()

  nock(options.endpoints.aprecord)
    .get(`/${apr.apid}`)
    .reply(200, apr)

  let result = await client.getApRecord(apr.apid)

  t.deepEqual(result, apr)
})

test('saveProduct', async t => {
  const client = t.context.client

  let pro = fixtures.getProd()

  nock(options.endpoints.products)
    .post('/', pro)
    .reply(201, pro)

  let result = await client.saveProduct(pro)

  t.deepEqual(result, pro)
})

test('updateProducts', async t => {
  const client = t.context.client

  let pro = fixtures.getProd()
  let token = 'xxx-xxx-xxx'

  nock(options.endpoints.products, {
    headers: {'Authorization': `Bearer ${token}`}
  })
    .post('/update', pro)
    .reply(201, pro)

  let result = await client.updateProducts(pro, token)

  t.deepEqual(result, pro)
})

test('getProducts', async t => {
  const client = t.context.client

  let pro = fixtures.getProd()

  nock(options.endpoints.products)
    .get(`/${pro.description}`)
    .reply(200, pro)

  let result = await client.getProducts(pro.description)

  t.deepEqual(result, pro)
})

test('saveBills', async t => {
  const client = t.context.client

  let bl = fixtures.getBl()

  nock(options.endpoints.bills)
    .post('/', bl)
    .reply(201, bl)

  let result = await client.saveBills(bl)

  t.deepEqual(result, bl)
})

test('updateBill', async t => {
  const client = t.context.client

  let bl = fixtures.getBl()
  let token = 'xxx-xxx-xxx'

  nock(options.endpoints.bills, {
    headers: {'Authorization': `Bearer ${token}`}
  })
    .post('/update', bl)
    .reply(201, bl)

  let result = await client.updateBill(bl, token)

  t.deepEqual(result, bl)
})

test('getBill', async t => {
  const client = t.context.client

  let bl = fixtures.getBl()

  nock(options.endpoints.bills)
    .get(`/${bl.id}`)
    .reply(200, bl)

  let result = await client.getBill(bl.id)

  t.deepEqual(result, bl)
})

test('getBillByDate', async t => {
  const client = t.context.client

  let bl = fixtures.getBl()
  let dates = {
    dateA: '11/01/2016',
    dateB: '11/30/2016'
  }

  nock(options.endpoints.bills)
    .post(`/byDate`, dates)
    .reply(200, bl)

  let result = await client.getBillByDate(dates)

  t.deepEqual(result, bl)
})

test('saveBillDetail', async t => {
  const client = t.context.client

  let bld = fixtures.getBlDetail()

  nock(options.endpoints.billdetail)
    .post('/')
    .reply(201, bld)

  let result = await client.saveBillDetail(bld)
  t.deepEqual(result, bld)
})

test('updateBillDetail', async t => {
  const client = t.context.client

  let bld = fixtures.getBlDetail()
  let token = 'xxx-xxx-xxx'

  nock(options.endpoints.billdetail, {
    headers: {'Authorization': `Bearer ${token}`}
  })
    .post('/update', bld)
    .reply(201, bld)

  let result = await client.updateBillDetail(bld, token)
  t.deepEqual(result, bld)
})

test('getBillDetail', async t => {
  const client = t.context.client

  let bld = fixtures.getBlDetail()

  nock(options.endpoints.billdetail)
    .get(`/${bld.billid}`)
    .reply(200, bld)

  let result = await client.getBillDetail(bld.billid)
  t.deepEqual(result, bld)
})
