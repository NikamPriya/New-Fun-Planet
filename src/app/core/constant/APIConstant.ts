export const APIConstant = {

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
   }



}