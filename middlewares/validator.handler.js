const boom = require('@hapi/boom');

function validatorHandler(schema, property){

  return (req,res,next) => {
    // This data could come from:
    // req.body
    // req.params
    // req.query
    // this is why this middleware should be dynamic

    const data = req[property];
    const {error} = schema.validate(data);
    if(error){
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validatorHandler;
