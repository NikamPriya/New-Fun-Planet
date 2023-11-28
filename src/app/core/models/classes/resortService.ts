export class resortServices {
    serviceId: 0;
    serviceName:string ;
    taxableAmount: null;
    cgst: null;
    sgst: null;
    isActive: true;
    isDeleted: true

    constructor (){
        this.serviceId = 0;
        this.serviceName = "";
        this.taxableAmount=null;
        this.cgst=null;
        this.sgst=null;
        this.isActive=true;
        this.isDeleted=true

    }
}
export class ReturnClass {

    message: string;
    result: boolean;
    data: any
    constructor() {
        this.message ='',
        this.result = false,
        this.data = null
    }
}
