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

  }

  updateInternment (intern, callback) {

  }

  getInternment (petid, callback) {

  }

  saveInterecord (record, callback) {

  }

  updateInterecord (record, callback) {

  }

  getInterecord (internid, callback) {

  }

  saveEthni (ethni, callback) {

  }

  updateEthni (ethni, callback) {

  }

  getEthni (callback) {
  }

  saveLaboratory (lab, callback) {

  }

  updateLaboratory (lab, callback) {

  }

  getLaboratorys (callback) {

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