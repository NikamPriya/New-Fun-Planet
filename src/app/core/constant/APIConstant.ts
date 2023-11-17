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


FoodItemList:{
   getFoodItem:"http://freeapi.miniprojectideas.com/api/Resort/GetFoodItemList",
   createFoodItem:"http://freeapi.miniprojectideas.com/api/Resort/AddFoodItem",
   deleteFoodItem:"http://freeapi.miniprojectideas.com/api/Resort/DeleteFoodItem"
},

bookings: {
   getBookings: "https://freeapi.miniprojectideas.com/api/Resort/GetAllBookings",
   getBookingById: "https://freeapi.miniprojectideas.com/api/Resort/GetBookingByBookingId?id=",
   createBookings: "https://freeapi.miniprojectideas.com/api/Resort/CreateUpdateBooking",
   deleteBookings: "https://freeapi.miniprojectideas.com/api/Resort/DeleteBookingById?id="
},
order:{
   getOrder: "https://freeapi.miniprojectideas.com/api/Resort/GetOrderList",
   createOrder:"https://freeapi.miniprojectideas.com/api/Resort/AddOrder",
   updateOrder:"https://freeapi.miniprojectideas.com/api/Resort/UpddateOrder",
   deleteOrder:"https://freeapi.miniprojectideas.com/api/Resort/DeleteOrder"
},




}