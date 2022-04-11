const db = require('../database');

const procedures = {
    nostaRahaaDebit: function(id, tilinumero, kortinnumero, debitSaldo, nostoSumma, callback) {
      return db.query('call nostaRahaaDebit(?,?,?,?,?)',
       [id, tilinumero, kortinnumero, debitSaldo, nostoSumma], callback);
    },

    nostaRahaaCredit: function(id, tilinumero, kortinnumero, creditSaldo, luottoraja, nostoSumma, callback) {
      return db.query('call nostaRahaaCredit(?,?,?,?,?,?)',
       [id, tilinumero, kortinnumero, creditSaldo, luottoraja, nostoSumma], callback);
    }


  };

module.exports = procedures;