const moment = require('moment');
const { success, errors } = require('../network/response');

const { validateDateFormat, validateOddDay, validatePayment } = require('../services/payment');

const validateDate = (req, res, next) => {
    const { fechaPago } = req.body;

    if (!validateDateFormat(fechaPago)) {
        errors(req, res, 'Formato de fecha incorrecto');
    }
    const splitedDate = fechaPago.split('/').map(data => Number(data));
    req.body.fechaPago = moment(splitedDate.reverse()).subtract(1, 'month');

    if (!validateOddDay(req.body.fechaPago.toDate()) || !req.body.fechaPago.isValid()) {
        errors(req, res, 'Lo siento pero no se puede recibir el pago por decreto de administración');
    }

    next();
}

const validatePaymentValue = (req, res, next) => {
    const { valorPagado } = req.body;

    if (validatePayment(valorPagado)) {
        errors(req, res, 'El valor a pagar debe estar entre 1 y 1000000');
    }

    next();
}

const validatePaymentId = (req, res, next) => {
    const { documentoIdentificacionArrendatario } = req.body;

    if (isNaN(Number(documentoIdentificacionArrendatario))) {
        errors(req, res, 'El documento debe ser un valor numérico');
    }

    next();
}

module.exports = {
    validateDate,
    validatePaymentValue,
    validatePaymentId
}