const dummy = require('./dummy')

module.exports = async (decoded, request, callback) => {
    request.logger.info('Decoded JWT : %s', decoded)

    if (dummy.users.find(e => e.id === decoded.id)) {
        return {
            isValid: true
        }
    }

    return {
        isValid: false
    }
}
