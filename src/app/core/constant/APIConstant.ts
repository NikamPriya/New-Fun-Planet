export const APIConstant = {
   weddingServices: {
      getWeddingServices: 'https://freeapi.miniprojectideas.com/api/Resort/GetweddingService',
      addWeddingServices: 'https://freeapi.miniprojectideas.com/api/Resort/AddweddingService',
      updateWeddingServices: 'https://freeapi.miniprojectideas.com/api/Resort/AddUpdateBulkWeddingService',
      deleteWeddingServices: 'https://freeapi.miniprojectideas.com/api/Resort/DeleteweddingService'
   },

   Resort: {
      get: "https://freeapi.miniprojectideas.com/api/Resort/GetAllService",
      Create: "https://freeapi.miniprojectideas.com/api/Resort/AddService",
      Delete: "https://freeapi.miniprojectideas.com/api/Resort/DeleteService"

   },
   weddingPackages: {
      getWeddingPackages: "https://freeapi.miniprojectideas.com/api/Resort/GetAllWeddingPackages",
      createWeddingPackage: "https://freeapi.miniprojectideas.com/api/Resort/CreateUpdateWeddingPackage",
      deleteWeddingPackage: "https://freeapi.miniprojectideas.com/api/Resort/DeleteWeddingPackageById?id="
   },
   foodItemType: {
      getAllFoodItemType: "https://freeapi.miniprojectideas.com/api/Resort/GetAllFoodItemType",
      addFoodItemType: "https://freeapi.miniprojectideas.com/api/Resort/AddFoodItemtype"
   },

   Users: {
      get: "https://freeapi.miniprojectideas.com/api/Resort/GetAllUser",
      Create: "https://freeapi.miniprojectideas.com/api/Resort/AddUser",
      Delete: "https://freeapi.miniprojectideas.com/api/Resort/DeleteUser"
   },

   Offers: {
      getOffers: "https://freeapi.miniprojectideas.com/api/Resort/GetAllOffer",
      createOffers: "https://freeapi.miniprojectideas.com/api/Resort/AddOffer",
      deleteOffers: "https://freeapi.miniprojectideas.com/api/Resort/DeleteOffer"
   },

   FoodItemList: {
      getFoodItem: "https://freeapi.miniprojectideas.com/api/Resort/GetFoodItemList",
      createFoodItem: "https://freeapi.miniprojectideas.com/api/Resort/AddFoodItem",
      deleteFoodItem: "https://freeapi.miniprojectideas.com/api/Resort/DeleteFoodItem",
      getAllFoodItemType: "https://freeapi.miniprojectideas.com/api/Resort/GetAllFoodItemType",
   },


   bookings: {
      getBookings: "https://freeapi.miniprojectideas.com/api/Resort/GetAllBookings",
      getBookingById: "https://freeapi.miniprojectideas.com/api/Resort/GetBookingByBookingId?id=",
      createBookings: "https://freeapi.miniprojectideas.com/api/Resort/CreateUpdateBooking",
      // deleteBookings: "https://freeapi.miniprojectideas.com/api/Resort/DeleteBookingById?id="
      deleteBooking: "https://freeapi.miniprojectideas.com/api/Resort/DeleteBookingById?id="
   },
   order: {
      getOrder: "https://freeapi.miniprojectideas.com/api/Resort/GetOrderList",
      editOrder: "https://freeapi.miniprojectideas.com/api/Resort/GetOrder?id=",
      createOrder: "https://freeapi.miniprojectideas.com/api/Resort/AddOrder",
      updateOrder: "https://freeapi.miniprojectideas.com/api/Resort/UpddateOrder",
      deleteOrder: "https://freeapi.miniprojectideas.com/api/Resort/DeleteOrder",
      getOpenOrder: "https://freeapi.miniprojectideas.com/api/Resort/GetOpenOrderList",
      getOrderStatus: "https://freeapi.miniprojectideas.com/api/Resort/GetOrderStatus"
   },

vists:{
   addVisit:"https://freeapi.miniprojectideas.com/api/Resort/AddVisit",
   filterAllVisit:"https://freeapi.miniprojectideas.com/api/Resort/GetAllVisit"
},

home:{
   GetTodaysVisit:"https://freeapi.miniprojectideas.com/api/Resort/GetTodaysVisit",
   GetDasboardData:"https://freeapi.miniprojectideas.com/api/Resort/GetDasboardData",
   getTodayDashboardCount:"https://freeapi.miniprojectideas.com/api/Resort/getTodayDashboardCount",
   getDateWiseVisit:"https://freeapi.miniprojectideas.com/api/Resort/getDateWiseVisit",
}


}
