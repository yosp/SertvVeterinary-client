'use strict'

const request = require('request-promise')
const Promise = require('bluebird')

class Client {
  constructor (options) {
    this.options = options || {
      endpoint: {
        appointment: 'http://api.sertvveterinary.com/appointment',
        aprecord: 'http://api.sertvveterinary.com/aprecord',
        auth: 'http://api.sertvveterinary.com/auth',
        bills: 'http://api.sertvveterinary.com/bills',
        billdetail: 'http://api.sertvveterinary.com/billdetail',
        client: 'http://api.sertvveterinary.com/client',
        ethnicities: 'http://api.sertvveterinary.com/ethnicities',
        internment: 'http://api.sertvveterinary.com/internment',
        interecord: 'http://api.sertvveterinary.com/interecord',
        laboratory: 'http://api.sertvveterinary.com/laboratory',
        medicine: 'http://api.sertvveterinary.com/medicine',
        pet: 'http://api.sertvveterinary.com/pet',
        products: 'http://api.sertvveterinary.com/products',
        race: 'http://api.sertvveterinary.com/race',
        users: 'http://api.sertvveterinary.com/users'
      }
    }
  }

  getUser (username, callback) {
    let opts = {
      method: 'GET',
      uri: `${this.options.endpoints.users}/${username}`,
      json: true
    }

    return Promise.resolve(request(opts)).asCallback(callback)
  }

  saveUser (user, callback) {
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoints.users}/`,
      body: user,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  updateUser (user, token, callback) {
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoints.users}/update`,
      body: user,
      headers: {
        'Authorization': `Bearer ${token}`
      },
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  auth (username, password, callback) {
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoints.auth}/`,
      body: {
        username,
        password
      },
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  saveClient (client, callback) {
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoints.client}/`,
      body: client,
      json: true
    }

    return Promise.resolve(request(opts)).asCallback(callback)
  }

  updateClient (client, token, callback) {
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoints.client}/update`,
      body: client,
      headers: {
        'Authorization': `Bearer ${token}`
      },
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  getClientList (callback) {
    let opts = {
      method: 'GET',
      uri: `${this.options.endpoints.client}/`,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  getClient (id, callback) {
    let opts = {
      method: 'GET',
      uri: `${this.options.endpoints.client}/${id}`,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  getClientByPhone (phone, callback) {
    let opts = {
      method: 'GET',
      uri: `${this.options.endpoints.client}/byPhone/${phone}`,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  getClientByEmail (email, callback) {
    let opts = {
      method: 'GET',
      uri: `${this.options.endpoints.client}/byEmail/${email}`,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  saveInternment (intern, callback) {
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoints.internment}/`,
      body: intern,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  updateInternment (intern, token, callback) {
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoints.internment}/update`,
      body: intern,
      headers: {
        'Authorization': `Bearer ${token}`
      },
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  getInternment (petid, callback) {
    let opts = {
      method: 'GET',
      uri: `${this.options.endpoints.internment}/${petid}`,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  saveInterecord (record, callback) {
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoints.interecord}/`,
      body: record,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  updateInterecord (record, token, callback) {
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoints.interecord}/update`,
      body: record,
      headers: {
        'Authorization': `Bearer ${token}`
      },
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  getInterecord (internid, callback) {
    let opts = {
      method: 'GET',
      uri: `${this.options.endpoints.interecord}/${internid}`,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  saveEthni (ethni, callback) {
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoints.ethnicities}/`,
      body: ethni,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  updateEthni (ethni, token, callback) {
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoints.ethnicities}/update`,
      body: ethni,
      headers: {
        'Authorization': `Bearer ${token}`
      },
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  getEthni (callback) {
    let opts = {
      method: 'GET',
      uri: `${this.options.endpoints.ethnicities}/`,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  saveLaboratory (lab, callback) {
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoints.laboratory}/`,
      body: lab,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  updateLaboratory (lab, token, callback) {
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoints.laboratory}/update`,
      body: lab,
      headers: {
        'Authorization': `Bearer ${token}`
      },
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  getLaboratorysList (callback) {
    let opts = {
      method: 'GET',
      uri: `${this.options.endpoints.laboratory}/`,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  getLaboratorys (labid, callback) {
    let opts = {
      method: 'GET',
      uri: `${this.options.endpoints.laboratory}/${labid}`,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  saveRace (race, callback) {

  }

  updateRace (race, callback) {

  }

  getRaceByEthni (ethniid, callback) {

  }

  savePet (pet, callback) {

  }

  getPetsByClient (owner, callback) {

  }

  savePetImage (image, callback) {

  }

  getPetImages (petid, callback) {

  }

  saveMedicine (med, callback) {

  }

  updateMedicine (med, callback) {

  }

  getMedicineByLab (labid, callback) {

  }

  saveAppointment (appointment, callback) {

  }

  updateAppointment (appointment, callback) {

  }

  getAppointments (callback) {

  }

  getAppointmentByPet (petid, callback) {

  }

  saveApRecord (aprecord, callback) {

  }

  updateApRecord (aprecord, callback) {

  }

  getApRecord (apid, callback) {

  }

  saveProduct (product, callback) {

  }

  updateProducts (product, callback) {

  }

  getProducts (description, callback) {

  }

  saveBills (bill, callback) {

  }

  updateBill (bill, callback) {

  }

  getBill (id, callback) {

  }

  getBillByDate (dateA, dateB, callback) {

  }

  saveBillDetail (detail, callback) {

  }

  updateBillDatail (detail, callback) {

  }

  getBillDetail (billid, callback) {

  }
}

module.exports = Client
