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
   getAllFoodItemType: "https://freeapi.miniprojectideas.com/api/Resort/GetAllFoodItemType",
   createFoodItem:"http://freeapi.miniprojectideas.com/api/Resort/AddFoodItem",
   deleteFoodItem:"http://freeapi.miniprojectideas.com/api/Resort/DeleteFoodItem"
},

Visit:{
   addVisit:"http://freeapi.miniprojectideas.com/api/Resort/AddVisit",
}




}