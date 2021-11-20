import { createServer,Model } from "miragejs"
const seats=
[
  {
    "id": "6198b71513c986974f0599c7",
    "seatNumber": 15,
    "price": 333,
    "booked": false,
    "disabled": false
  },
  {
    "id": "6198b715e6b351f07d50ca8e",
    "seatNumber": 2,
    "price": 384,
    "booked": false,
    "disabled": false
  },
  {
    "id": "6198b715f9fa067366afa072",
    "seatNumber": 1,
    "price": 376,
    "booked": false,
    "disabled": false
  },
  {
    "id": "6198b7157abcf8696f45824b",
    "seatNumber": 13,
    "price": 345,
    "booked": false,
    "disabled": false
  },
  {
    "id": "6198b715398e85a4fef39695",
    "seatNumber": 19,
    "price": 288,
    "booked": false,
    "disabled": false
  },
  {
    "id": "6198b715900546f9a2599431",
    "seatNumber": 2,
    "price": 259,
    "booked": false,
    "disabled": false
  },
  {
    "id": "6198b715671db1aa8dcb4caf",
    "seatNumber": 11,
    "price": 244,
    "booked": false,
    "disabled": false
  },
  {
    "id": "6198b7150415fd4f5b26af0c",
    "seatNumber": 13,
    "price": 298,
    "booked": false,
    "disabled": false
  },
  {
    "id": "6198b71547998665666bd7f6",
    "seatNumber": 16,
    "price": 276,
    "booked": false,
    "disabled": false
  },
  {
    "id": "6198b71543948a83667c60a9",
    "seatNumber": 16,
    "price": 233,
    "booked": false,
    "disabled": false
  },
  {
    "id": "6198b7155cfa203d4f194e51",
    "seatNumber": 9,
    "price": 244,
    "booked": false,
    "disabled": false
  },
  {
    "id": "6198b71595e42ba89c81c9d0",
    "seatNumber": 2,
    "price": 368,
    "booked": false,
    "disabled": false
  },
  {
    "id": "6198b715c15067dbb149c022",
    "seatNumber": 13,
    "price": 209,
    "booked": false,
    "disabled": false
  },
  {
    "id": "6198b715051349a841ef3f64",
    "seatNumber": 16,
    "price": 396,
    "booked": false,
    "disabled": false
  },
  {
    "id": "6198b71544d4e0b3df8a71a7",
    "seatNumber": 5,
    "price": 234,
    "booked": true,
    "disabled": false
  }
]
const server=createServer({
  models: {
    seats: Model,
  },

  seeds(server) {
    for(let i=0;i<seats.length;i++){
      server.create("seat", seats[i])


    }


  },
  
  routes() {
    this.get("/api/seats", (schema) =>  {
      return schema.seats.all()
    })

    this.put("/seats/:id", function (schema, request) {
      const parsedData=JSON.parse(request.requestBody)
      console.log(parsedData);
      let id = request.params.id
      return schema.seats.find(id).update(parsedData)
      //let attrs = this.normalizedRequestAttrs(seats);
      
      //console.log(attrs);
    
     // 
    })
  },

})

export default server