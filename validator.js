const { COMMAND, ERROR, STATUS } = require('./constants');
function commandValidator(cmd) {
  if (
    !(
      cmd === COMMAND.SHOW ||
      cmd === COMMAND.ADD ||
      cmd === COMMAND.DELETE ||
      cmd === COMMAND.UPDATE
    )
  )
    throw new Error(ERROR.INVALID_COMMAND);
}

function statusValidator(status) {
  if (
    !(
      status === STATUS.ALL ||
      status === STATUS.DOING ||
      status === STATUS.TODO ||
      status === STATUS.DONE
    )
  )
    throw new Error(ERROR.INVALID_STATUS);
}

function idValidator(idx) {
  if (idx === -1) throw new Error(ERROR.ID_NOT_EXIST);
}
module.exports = { commandValidator, statusValidator, idValidator };
