export class resortServices {
    serviceId: 0;
    serviceName:string ;
    taxableAmount: 0;
    cgst: 0;
    sgst: 0;
    isActive: true;
    isDeleted: true

    constructor (){
        this.serviceId = 0;
        this.serviceName = "";
        this.taxableAmount=0;
        this.cgst=0;
        this.sgst=0;
        this.isActive=true;
        this.isDeleted=true

    }
}
