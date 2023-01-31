class ResponseModel {
    constructor(success, message , error_code, data){
        this.success = success,
        this.message = message, 
        this.error_code = error_code,
        this.data = data
    }
}

module.exports =  ResponseModel;