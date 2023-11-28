export class weddingServicesList {
    serviceId: number;
    rate: number;
    isActive: boolean;
    isDeleted: boolean;
    isPax: boolean;
    message: string;
    orderNo: number;
    result: boolean;
    serviceType: string;
    name: string


    constructor() {

        this.serviceId = 0,
            this.rate = 0,
            this.isActive = true,
            this.isDeleted = true,
            this.isPax = true,
            this.message = '',
            this.orderNo = 0,
            this.result = false,
            this.serviceType = '',
            this.name = ''
    }
}

export class ReturnClass {
    message: string;
    result: boolean;
    data: any;

    constructor() {
        this.message = '';
        this.data = null;
        this.result = false;
    }
}