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

  updateClient (client, callback) {
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoints.client}/updateClient`,
      body: client,
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
    let opts = {
      method: 'POST',
      url: `${this.options.endpoints.race}/`,
      body: race,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  updateRace (race, token, callback) {
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoints.race}/update`,
      body: race,
      headers: {
        'Authorization': `Bearer ${token}`
      },
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  getRaceByEthni (ethniid, callback) {
    let opts = {
      method: 'GET',
      url: `${this.options.endpoints.race}/${ethniid}`,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  savePet (pet, callback) {
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoints.pet}/`,
      body: pet,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  getPetsByClient (owner, callback) {
    let opts = {
      method: 'GET',
      uri: `${this.options.endpoints.pet}/${owner}`,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  savePetImage (image, callback) {
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoints.pet}/petimage`,
      body: image,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  getPetImages (petid, callback) {
    let opts = {
      method: 'GET',
      uri: `${this.options.endpoints.pet}/petimage/${petid}`,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  saveMedicine (med, callback) {
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoints.medicine}/`,
      body: med,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  updateMedicine (med, token, callback) {
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoints.medicine}/update`,
      body: med,
      headers: {
        'Authorization': `Bearer ${token}`
      },
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  getMedicineByLab (labid, callback) {
    let opts = {
      method: 'GET',
      uri: `${this.options.endpoints.medicine}/${labid}`,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  saveAppointment (appointment, callback) {
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoints.appointment}/`,
      body: appointment,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  updateAppointment (appointment, token, callback) {
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoints.appointment}/update`,
      body: appointment,
      headers: {
        'Authorization': `Bearer ${token}`
      },
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  getAppointments (callback) {
    let opts = {
      method: 'GET',
      uri: `${this.options.endpoints.appointment}/`,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  getAppointmentByPet (petid, callback) {
    let opts = {
      method: 'GET',
      uri: `${this.options.endpoints.appointment}/${petid}`,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  saveApRecord (aprecord, callback) {
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoints.aprecord}/`,
      body: aprecord,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  updateApRecord (aprecord, token, callback) {
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoints.aprecord}/update`,
      body: aprecord,
      headers: {
        'Authorization': `Bearer ${token}`
      },
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  getApRecord (apid, callback) {
    let opts = {
      method: 'GET',
      uri: `${this.options.endpoints.aprecord}/${apid}`,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  saveProduct (product, callback) {
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoints.products}/`,
      body: product,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  updateProducts (product, token, callback) {
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoints.products}/update`,
      body: product,
      headers: {
        'Authorization': `Bearer ${token}`
      },
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  getProducts (description, callback) {
    let opts = {
      method: 'GET',
      uri: `${this.options.endpoints.products}/${description}`,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  saveBills (bill, callback) {
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoints.bills}/`,
      body: bill,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  updateBill (bill, token, callback) {
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoints.bills}/update`,
      body: bill,
      headers: {
        'Authorization': `Bearer ${token}`
      },
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  getBill (id, callback) {
    let opts = {
      method: 'GET',
      uri: `${this.options.endpoints.bills}/${id}`,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  getBillByDate (dates, callback) {
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoints.bills}/byDate`,
      body: dates,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  saveBillDetail (detail, callback) {
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoints.billdetail}/`,
      body: detail,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  updateBillDetail (detail, token, callback) {
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoints.billdetail}/update`,
      body: detail,
      headers: {
        'Authorization': `Bearer ${token}`
      },
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  getBillDetail (billid, callback) {
    let opts = {
      method: 'GET',
      uri: `${this.options.endpoints.billdetail}/${billid}`,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }
}

module.exports = Client
