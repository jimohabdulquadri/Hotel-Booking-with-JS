/*
Program : Hotel Booking Application
Description : A mini to highlight modelling and engineering of data
*/

/*
Room Data
*/
let roomCategories = [{
    name: 'Presidential',
    description: 'For the big boys',
    categoryId: 27,
    price: 9500,
    breakFastIncluded: true,
    freeWifi: true,
    isAvailable: true
}, {
    name: 'Deluxe',
    description: 'bla bla bla',
    categoryId: 24,
    price: 6000,
    breakFastIncluded: true,
    freeWifi: true,
    isAvailable: true
}, {
    name: 'Royal',
    description: 'bla bla bla',
    categoryId: 40,
    price: 3000,
    breakFastIncluded: false,
    freeWifi: true,
    isAvailable: true
}]

let rooms = [{
        roomNumber: 37,
        categoryId: 27,
        location: 'First Floor',
        accessories: [{
            name: 'Bed',
            size: 'King Size',
            numberOfPillow: 4
        }, {
            name: 'Toilet',
            size: 'Jakuzzi'
        }, {
            name: 'Tv',
            size: ' Big Flat Screen'
        }]
    },

    {
        roomNumber: 102,
        categoryId: 24,
        location: 'Second Floor',
        accessories: [{
            name: 'Bed',
            size: 'Double',
            numberOfPillow: 2
        }, {
            name: 'Toilet',
            size: 'Bathtub'
        }, {
            name: 'Tv',
            size: 'FlatScreen'
        }]
    },

    {
        roomNumber: 10,
        categoryId: 40,
        location: 'Ground Floor',
        accessories: [{
            name: 'Bed',
            size: 'Single',
            numberOfPillow: 2
        }, {
            name: 'Toilet',
            size: 'Shower'
        }, {
            name: 'Tv',
            size: ' Mini FlatScreen'
        }]
    }
]

/* 
Customers
*/
let customer = [{
        customerName: 'Bunmi',
        customerID: 5,
        phoneNumber: '08025457651',
        email: 'bunmi@gmail.com',
        gender: 'Female',
        address: {
            country: 'Nigeria',
            state: 'Lagos',
            LGA: 'Kosofe',
            streetAddress: '14, Olanipeku street'
        }
    },
    {
        customerName: 'Charity',
        customerID: 15,
        phoneNumber: '08033551144',
        email: 'charity@gmail.com',
        gender: 'Female',
        address: {
            country: 'Nigeria',
            state: 'Lagos',
            LGA: 'Ikorodu',
            streetAddress: '29, Moshood street'
        }
    },
    {
        customerName: 'Rasheed',
        customerID: 47,
        phoneNumber: '08033445540',
        email: 'rasheed@gmail.com',
        gender: 'Male',
        address: {
            country: 'Nigeria',
            state: 'Lagos',
            LGA: 'Eti-Osa',
            streetAddress: '14, Pike street'
        }
    },
    {
        customerName: 'Abdul',
        customerID: 51,
        phoneNumber: '07033448877',
        email: 'bunmi@gmail.com',
        gender: 'Male',
        address: {
            country: 'Nigeria',
            state: 'Lagos',
            LGA: 'Ikeja',
            streetAddress: '7B, Taiwo street'
        }
    }
]

/*
Reservation
*/
let reservations = [{
        customerID: 5,
        purpose: 'To spend the night',
        duration: 1,
        numberOfPersons: 2,
        rooms: [37]
    },
    {
        customerID: 7,
        purpose: 'To spend the night',
        duration: 5,
        numberOfPersons: 1,
        rooms: [102]
    },
    {
        customerID: 51,
        purpose: 'To spend the night',
        duration: 1,
        numberOfPersons: 2,
        rooms: [10]
    }
]

console.log(roomCategories.length)
roomCategories.map((roomCategory, i) => {
    console.log(roomCategory.name)
    console.log("Rooms")
    let categoryRooms = rooms.filter(room => room.categoryId === roomCategory.categoryId)
    categoryRooms.map(room => {
        console.log(room.roomNumber)
        console.log(room.accessories.length)
            // let totalBooking = 0
            // reservations.map(reservation => {
            //     if (reservation.rooms.includes(room.roomNumber)) {
            //         totalBooking += 1
            //     }
            // })
        let totalBooking = reservations.filter(reservation => reservation.rooms.includes(room.roomNumber)).length
        let profitFromRoom = totalBooking * roomCategory.price
        console.log(`You have made ${profitFromRoom} from the room number ${room.roomNumber}`)
    })
})