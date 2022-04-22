const Request = require('../models/request')


module.exports.get = async  (req, res) =>{
  
      res.send({ 
        location: { 
        adds: "Пушкина 84", 
        apart_number: 42 
        
        }, 
        property_rights: "Собственник", 
        online_display: true, 
        about_apartment: { 
        
        housing_type: "Квартира", 
        floor: 5, 
        number_of_rooms: 3, 
        balcony: true, 
        loggia: true, 
        total_area: 40.3, 
        living_space: 37.8, 
        repair: "Косметический", 
        trim: "Без отделки", 
        technics: ["Кондиционер","Холодильник","Посудомоечная машина","Водонагреватель"]  
        }, 
        "price": 35000000, 
        "id": 420006397 
       })
    
}


