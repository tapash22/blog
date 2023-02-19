export default {
  namespaced: true,
  state() {
    return {
      hotels: [
        {
          id: 1,
          name: "Hotel Rangamati",
          location: "Rampura",
          des: "distinctio quo a dolore illo dolorum at quae. Vitae,tenetur. Aut atque repellendus quaerat architecto explicabo fugit quibusdam similique enim dolorem, asperiores nemo vero laudantium eius repudiandae harum tenetur labore qui animi. Earum id alias culpa.Fuga est cum possimus odit, recusandae ratione tenetur incidunt quisquam autem ipsam? Maiores sequi quo accusamus amet nesciunt, dolore deserunt libero similique atque ratione tempora non nemo cum nulla commodi? Dolore quidem itaque non quas dolorum, harum corrupti iusto?",
          info: "distinctio quo a dolore illo dolorum at quae. Vitae,tenetur. Aut atque repellendus quaerat architecto explicabo fugit quibusdam similique enim dolorem, asperiores nemo vero laudantium eius repudiandae harum tenetur labore qui animi. Earum id alias culpa.Fuga est cum possimus odit, recusandae ratione tenetur incidunt quisquam autem ipsam? Maiores sequi quo accusamus amet nesciunt, dolore deserunt libero similique atque ratione tempora non nemo cum nulla commodi? Dolore quidem itaque non quas dolorum, harum corrupti iusto?",
          image1:
            "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            image:[
              'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg',
              'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg',
              'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg',
              'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg',
            ],
          rating: 4,
          price: 44,

          images_view: [
            {
              id: 1,
              name: "room1",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 2,
              name: "room2",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 3,
              name: "room3",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 4,
              name: "room4",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 5,
              name: "room5",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 6,
              name: "room6",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 7,
              name: "room7",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 8,
              name: "room8",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
          ],

          hotel_rooms: [
            {
              id: 1,
              room: "Couple Room",
              image:
                "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
              price: "Tk. 9,444",
              rating: 4,
              services: [
                {
                  id: 1,
                  text: "Room Size : 15 X 15",
                  icon: "mdi-bed",
                },
                {
                  id: 2,
                  text: "Bed : Queen Size",
                  icon: "mdi-bed-queen",
                },
                {
                  id: 3,
                  text: "Pickup & Drop",
                  icon: "mdi-car-convertible",
                },
                {
                  id: 4,
                  text: "Free Wifi",
                  icon: "mdi-wifi",
                },
                {
                  id: 5,
                  text: "Breakfast, Lunch, Dinner",
                  icon: "mdi-food-variant",
                },
                {
                  id: 6,
                  text: "Air Condition : Available",
                  icon: "mdi-air-conditioner",
                },
                {
                  id: 7,
                  text: "Amenities : Swimming Pool",
                  icon: "mdi-pool",
                },
                {
                  id: 8,
                  text: "Hot & cold Water",
                  icon: "mdi-fire",
                },
              ],
            },
            {
              id: 2,
              room: "couple Suit",
              image:
                "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
              price: "Tk. 9,444",
              rating: 4,
              services: [
                {
                  id: 1,
                  text: "Room Size : 15 X 15",
                  icon: "mdi-bed",
                },
                {
                  id: 2,
                  text: "Bed : Queen Size",
                  icon: "mdi-bed-queen",
                },
                {
                  id: 3,
                  text: "Pickup & Drop",
                  icon: "mdi-car-convertible",
                },
                {
                  id: 4,
                  text: "Free Wifi",
                  icon: "mdi-wifi",
                },
                {
                  id: 5,
                  text: "Breakfast, Lunch, Dinner",
                  icon: "mdi-food-variant",
                },
                {
                  id: 6,
                  text: "Air Condition : Available",
                  icon: "mdi-air-conditioner",
                },
                {
                  id: 7,
                  text: "Amenities : Swimming Pool",
                  icon: "mdi-pool",
                },
                {
                  id: 8,
                  text: "Hot & cold Water",
                  icon: "mdi-fire",
                },
              ],
            },
            {
              id: 3,
              room: "Group Room",
              image:
                "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
              price: "Tk. 9,444",
              rating: 4,
              services: [
                {
                  id: 1,
                  text: "Room Size : 15 X 15",
                  icon: "mdi-bed",
                },
                {
                  id: 2,
                  text: "Bed : Queen Size",
                  icon: "mdi-bed-queen",
                },
                {
                  id: 3,
                  text: "Pickup & Drop",
                  icon: "mdi-car-convertible",
                },
                {
                  id: 4,
                  text: "Free Wifi",
                  icon: "mdi-wifi",
                },
                {
                  id: 5,
                  text: "Breakfast, Lunch, Dinner",
                  icon: "mdi-food-variant",
                },
                {
                  id: 6,
                  text: "Air Condition : Available",
                  icon: "mdi-air-conditioner",
                },
                {
                  id: 7,
                  text: "Amenities : Swimming Pool",
                  icon: "mdi-pool",
                },
                {
                  id: 8,
                  text: "Hot & cold Water",
                  icon: "mdi-fire",
                },
              ],
            },
            {
              id: 4,
              room: "Family Room",
              image:
                "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
              price: "Tk. 9,444",
              rating: 4,
              services: [
                {
                  id: 1,
                  text: "Room Size : 15 X 15",
                  icon: "mdi-bed",
                },
                {
                  id: 2,
                  text: "Bed : Queen Size",
                  icon: "mdi-bed-queen",
                },
                {
                  id: 3,
                  text: "Pickup & Drop",
                  icon: "mdi-car-convertible",
                },
                {
                  id: 4,
                  text: "Free Wifi",
                  icon: "mdi-wifi",
                },
                {
                  id: 5,
                  text: "Breakfast, Lunch, Dinner",
                  icon: "mdi-food-variant",
                },
                {
                  id: 6,
                  text: "Air Condition : Available",
                  icon: "mdi-air-conditioner",
                },
                {
                  id: 7,
                  text: "Amenities : Swimming Pool",
                  icon: "mdi-pool",
                },
                {
                  id: 8,
                  text: "Hot & cold Water",
                  icon: "mdi-fire",
                },
              ],
            },
          ],

          lists: [
            {
              id: 1,
              name: "Free Wifi",
              icon: "mdi-wifi",
            },
            {
              id: 2,
              name: "Breakfast, Lunch, Dinner",
              icon: "mdi-food-variant",
            },
            {
              id: 3,
              name: "Amenities : Swimming Pool",
              icon: "mdi-pool",
            },
            {
              id: 4,
              name: "Hot & cold Water",
              icon: "mdi-fire",
            },
          ],

          questions: [
            {
              id: 1,
              question: "Booking Process?",
              answer:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quaerat beatae culpa doloribus ut aliquam placeat repudiandae deserunt illo voluptatibus corrupti porro aut ipsa, amet sunt aperiam ea, omnis tempora ex. Ducimus praesentium totam beatae, deleniti unde dolores quos a maxime nostrum doloremque id aut explicabo delectus aliquid optio itaque!",
            },
            {
              id: 2,
              question: "Does this hotel has resturent facility?",
              answer:
                "Yes, This hotel have restaurent with continental food menu and train team of cook",
            },
            {
              id: 3,
              question: "Kids policy?",
              answer:
                "No charge are aplicable for kids, below 6 years (No food no charge policy.If guest take foods for kids an extra charge will be aplicable) -Kids above 6 years will be considers an adult will be charge full amount.",
            },
            {
              id: 4,
              question: "what document are essential to carry?",
              answer:
                "Please bring your National ID card if you are outside  from country, then bring your Passport please",
            },
          ],
        },
        {
          id: 2,
          name: "Hotel Cox's Bazer",
          location: "Rampura",
          des: "distinctio quo a dolore illo dolorum at quae. Vitae,tenetur. Aut atque repellendus quaerat architecto explicabo fugit quibusdam similique enim dolorem, asperiores nemo vero laudantium eius repudiandae harum tenetur labore qui animi. Earum id alias culpa.Fuga est cum possimus odit, recusandae ratione tenetur incidunt quisquam autem ipsam? Maiores sequi quo accusamus amet nesciunt, dolore deserunt libero similique atque ratione tempora non nemo cum nulla commodi? Dolore quidem itaque non quas dolorum, harum corrupti iusto?",
          info: "distinctio quo a dolore illo dolorum at quae. Vitae,tenetur. Aut atque repellendus quaerat architecto explicabo fugit quibusdam similique enim dolorem, asperiores nemo vero laudantium eius repudiandae harum tenetur labore qui animi. Earum id alias culpa.Fuga est cum possimus odit, recusandae ratione tenetur incidunt quisquam autem ipsam? Maiores sequi quo accusamus amet nesciunt, dolore deserunt libero similique atque ratione tempora non nemo cum nulla commodi? Dolore quidem itaque non quas dolorum, harum corrupti iusto?",
          image1:
          "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
          image:[
            'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg',
            'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg',
            'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg',
            'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg',
          ],
          rating: 4,
          price: 44,
          images_view: [
            {
              id: 1,
              name: "room1",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 2,
              name: "room2",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 3,
              name: "room3",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 4,
              name: "room4",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 5,
              name: "room5",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 6,
              name: "room6",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 7,
              name: "room7",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 8,
              name: "room8",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
          ],
          hotel_rooms: [
            {
              id: 1,
              room: "Couple Room",
              image:
                "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
              price: "Tk. 9,444",
              rating: 4,
              services: [
                {
                  id: 1,
                  text: "Room Size : 15 X 15",
                  icon: "mdi-bed",
                },
                {
                  id: 2,
                  text: "Bed : Queen Size",
                  icon: "mdi-bed-queen",
                },
                {
                  id: 3,
                  text: "Pickup & Drop",
                  icon: "mdi-car-convertible",
                },
                {
                  id: 4,
                  text: "Free Wifi",
                  icon: "mdi-wifi",
                },
                {
                  id: 5,
                  text: "Breakfast, Lunch, Dinner",
                  icon: "mdi-food-variant",
                },
                {
                  id: 6,
                  text: "Air Condition : Available",
                  icon: "mdi-air-conditioner",
                },
                {
                  id: 7,
                  text: "Amenities : Swimming Pool",
                  icon: "mdi-pool",
                },
                {
                  id: 8,
                  text: "Hot & cold Water",
                  icon: "mdi-fire",
                },
              ],
            },
            {
              id: 2,
              room: "couple Suit",
              image:
                "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
              price: "Tk. 9,444",
              rating: 4,
              services: [
                {
                  id: 1,
                  text: "Room Size : 15 X 15",
                  icon: "mdi-bed",
                },
                {
                  id: 2,
                  text: "Bed : Queen Size",
                  icon: "mdi-bed-queen",
                },
                {
                  id: 3,
                  text: "Pickup & Drop",
                  icon: "mdi-car-convertible",
                },
                {
                  id: 4,
                  text: "Free Wifi",
                  icon: "mdi-wifi",
                },
                {
                  id: 5,
                  text: "Breakfast, Lunch, Dinner",
                  icon: "mdi-food-variant",
                },
                {
                  id: 6,
                  text: "Air Condition : Available",
                  icon: "mdi-air-conditioner",
                },
                {
                  id: 7,
                  text: "Amenities : Swimming Pool",
                  icon: "mdi-pool",
                },
                {
                  id: 8,
                  text: "Hot & cold Water",
                  icon: "mdi-fire",
                },
              ],
            },
            {
              id: 3,
              room: "Group Room",
              image:
                "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
              price: "Tk. 9,444",
              rating: 4,
              services: [
                {
                  id: 1,
                  text: "Room Size : 15 X 15",
                  icon: "mdi-bed",
                },
                {
                  id: 2,
                  text: "Bed : Queen Size",
                  icon: "mdi-bed-queen",
                },
                {
                  id: 3,
                  text: "Pickup & Drop",
                  icon: "mdi-car-convertible",
                },
                {
                  id: 4,
                  text: "Free Wifi",
                  icon: "mdi-wifi",
                },
                {
                  id: 5,
                  text: "Breakfast, Lunch, Dinner",
                  icon: "mdi-food-variant",
                },
                {
                  id: 6,
                  text: "Air Condition : Available",
                  icon: "mdi-air-conditioner",
                },
                {
                  id: 7,
                  text: "Amenities : Swimming Pool",
                  icon: "mdi-pool",
                },
                {
                  id: 8,
                  text: "Hot & cold Water",
                  icon: "mdi-fire",
                },
              ],
            },
            {
              id: 4,
              room: "Family Room",
              image:
                "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
              price: "Tk. 9,444",
              rating: 4,
              services: [
                {
                  id: 1,
                  text: "Room Size : 15 X 15",
                  icon: "mdi-bed",
                },
                {
                  id: 2,
                  text: "Bed : Queen Size",
                  icon: "mdi-bed-queen",
                },
                {
                  id: 3,
                  text: "Pickup & Drop",
                  icon: "mdi-car-convertible",
                },
                {
                  id: 4,
                  text: "Free Wifi",
                  icon: "mdi-wifi",
                },
                {
                  id: 5,
                  text: "Breakfast, Lunch, Dinner",
                  icon: "mdi-food-variant",
                },
                {
                  id: 6,
                  text: "Air Condition : Available",
                  icon: "mdi-air-conditioner",
                },
                {
                  id: 7,
                  text: "Amenities : Swimming Pool",
                  icon: "mdi-pool",
                },
                {
                  id: 8,
                  text: "Hot & cold Water",
                  icon: "mdi-fire",
                },
              ],
            },
          ],
          lists: [
            {
              id: 1,
              name: "Free Wifi",
              icon: "mdi-wifi",
            },
            {
              id: 2,
              name: "Breakfast, Lunch, Dinner",
              icon: "mdi-food-variant",
            },
            {
              id: 3,
              name: "Amenities : Swimming Pool",
              icon: "mdi-pool",
            },
            {
              id: 4,
              name: "Hot & cold Water",
              icon: "mdi-fire",
            },
          ],
          questions: [
            {
              id: 1,
              question: "Booking Process?",
              answer:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quaerat beatae culpa doloribus ut aliquam placeat repudiandae deserunt illo voluptatibus corrupti porro aut ipsa, amet sunt aperiam ea, omnis tempora ex. Ducimus praesentium totam beatae, deleniti unde dolores quos a maxime nostrum doloremque id aut explicabo delectus aliquid optio itaque!",
            },
            {
              id: 2,
              question: "Does this hotel has resturent facility?",
              answer:
                "Yes, This hotel have restaurent with continental food menu and train team of cook",
            },
            {
              id: 3,
              question: "Kids policy?",
              answer:
                "No charge are aplicable for kids, below 6 years (No food no charge policy.If guest take foods for kids an extra charge will be aplicable) -Kids above 6 years will be considers an adult will be charge full amount.",
            },
            {
              id: 4,
              question: "what document are essential to carry?",
              answer:
                "Please bring your National ID card if you are outside  from country, then bring your Passport please",
            },
          ],
        },
        {
          id: 3,
          name: "Hotel Srimongol",
          location: "Rampura",
          des: "distinctio quo a dolore illo dolorum at quae. Vitae,tenetur. Aut atque repellendus quaerat architecto explicabo fugit quibusdam similique enim dolorem, asperiores nemo vero laudantium eius repudiandae harum tenetur labore qui animi. Earum id alias culpa.Fuga est cum possimus odit, recusandae ratione tenetur incidunt quisquam autem ipsam? Maiores sequi quo accusamus amet nesciunt, dolore deserunt libero similique atque ratione tempora non nemo cum nulla commodi? Dolore quidem itaque non quas dolorum, harum corrupti iusto?",
          info: "distinctio quo a dolore illo dolorum at quae. Vitae,tenetur. Aut atque repellendus quaerat architecto explicabo fugit quibusdam similique enim dolorem, asperiores nemo vero laudantium eius repudiandae harum tenetur labore qui animi. Earum id alias culpa.Fuga est cum possimus odit, recusandae ratione tenetur incidunt quisquam autem ipsam? Maiores sequi quo accusamus amet nesciunt, dolore deserunt libero similique atque ratione tempora non nemo cum nulla commodi? Dolore quidem itaque non quas dolorum, harum corrupti iusto?",
          image1:
          "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
          image:[
            'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg',
            'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg',
            'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg',
            'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg',
          ],
          rating: 4,
          price: 44,
          images_view: [
            {
              id: 1,
              name: "room1",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 2,
              name: "room2",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 3,
              name: "room3",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 4,
              name: "room4",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 5,
              name: "room5",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 6,
              name: "room6",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 7,
              name: "room7",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 8,
              name: "room8",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
          ],

          hotel_rooms: [
            {
              id: 1,
              room: "Couple Room",
              image:
                "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
              price: "Tk. 9,444",
              rating: 4,
              services: [
                {
                  id: 1,
                  text: "Room Size : 15 X 15",
                  icon: "mdi-bed",
                },
                {
                  id: 2,
                  text: "Bed : Queen Size",
                  icon: "mdi-bed-queen",
                },
                {
                  id: 3,
                  text: "Pickup & Drop",
                  icon: "mdi-car-convertible",
                },
                {
                  id: 4,
                  text: "Free Wifi",
                  icon: "mdi-wifi",
                },
                {
                  id: 5,
                  text: "Breakfast, Lunch, Dinner",
                  icon: "mdi-food-variant",
                },
                {
                  id: 6,
                  text: "Air Condition : Available",
                  icon: "mdi-air-conditioner",
                },
                {
                  id: 7,
                  text: "Amenities : Swimming Pool",
                  icon: "mdi-pool",
                },
                {
                  id: 8,
                  text: "Hot & cold Water",
                  icon: "mdi-fire",
                },
              ],
            },
            {
              id: 2,
              room: "couple Suit",
              image:
                "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
              price: "Tk. 9,444",
              rating: 4,
              services: [
                {
                  id: 1,
                  text: "Room Size : 15 X 15",
                  icon: "mdi-bed",
                },
                {
                  id: 2,
                  text: "Bed : Queen Size",
                  icon: "mdi-bed-queen",
                },
                {
                  id: 3,
                  text: "Pickup & Drop",
                  icon: "mdi-car-convertible",
                },
                {
                  id: 4,
                  text: "Free Wifi",
                  icon: "mdi-wifi",
                },
                {
                  id: 5,
                  text: "Breakfast, Lunch, Dinner",
                  icon: "mdi-food-variant",
                },
                {
                  id: 6,
                  text: "Air Condition : Available",
                  icon: "mdi-air-conditioner",
                },
                {
                  id: 7,
                  text: "Amenities : Swimming Pool",
                  icon: "mdi-pool",
                },
                {
                  id: 8,
                  text: "Hot & cold Water",
                  icon: "mdi-fire",
                },
              ],
            },
            {
              id: 3,
              room: "Group Room",
              image:
                "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
              price: "Tk. 9,444",
              rating: 4,
              services: [
                {
                  id: 1,
                  text: "Room Size : 15 X 15",
                  icon: "mdi-bed",
                },
                {
                  id: 2,
                  text: "Bed : Queen Size",
                  icon: "mdi-bed-queen",
                },
                {
                  id: 3,
                  text: "Pickup & Drop",
                  icon: "mdi-car-convertible",
                },
                {
                  id: 4,
                  text: "Free Wifi",
                  icon: "mdi-wifi",
                },
                {
                  id: 5,
                  text: "Breakfast, Lunch, Dinner",
                  icon: "mdi-food-variant",
                },
                {
                  id: 6,
                  text: "Air Condition : Available",
                  icon: "mdi-air-conditioner",
                },
                {
                  id: 7,
                  text: "Amenities : Swimming Pool",
                  icon: "mdi-pool",
                },
                {
                  id: 8,
                  text: "Hot & cold Water",
                  icon: "mdi-fire",
                },
              ],
            },
            {
              id: 4,
              room: "Family Room",
              image:
                "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
              price: "Tk. 9,444",
              rating: 4,
              services: [
                {
                  id: 1,
                  text: "Room Size : 15 X 15",
                  icon: "mdi-bed",
                },
                {
                  id: 2,
                  text: "Bed : Queen Size",
                  icon: "mdi-bed-queen",
                },
                {
                  id: 3,
                  text: "Pickup & Drop",
                  icon: "mdi-car-convertible",
                },
                {
                  id: 4,
                  text: "Free Wifi",
                  icon: "mdi-wifi",
                },
                {
                  id: 5,
                  text: "Breakfast, Lunch, Dinner",
                  icon: "mdi-food-variant",
                },
                {
                  id: 6,
                  text: "Air Condition : Available",
                  icon: "mdi-air-conditioner",
                },
                {
                  id: 7,
                  text: "Amenities : Swimming Pool",
                  icon: "mdi-pool",
                },
                {
                  id: 8,
                  text: "Hot & cold Water",
                  icon: "mdi-fire",
                },
              ],
            },
          ],
          lists: [
            {
              id: 1,
              name: "Free Wifi",
              icon: "mdi-wifi",
            },
            {
              id: 2,
              name: "Breakfast, Lunch, Dinner",
              icon: "mdi-food-variant",
            },
            {
              id: 3,
              name: "Amenities : Swimming Pool",
              icon: "mdi-pool",
            },
            {
              id: 4,
              name: "Hot & cold Water",
              icon: "mdi-fire",
            },
          ],
          questions: [
            {
              id: 1,
              question: "Booking Process?",
              answer:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quaerat beatae culpa doloribus ut aliquam placeat repudiandae deserunt illo voluptatibus corrupti porro aut ipsa, amet sunt aperiam ea, omnis tempora ex. Ducimus praesentium totam beatae, deleniti unde dolores quos a maxime nostrum doloremque id aut explicabo delectus aliquid optio itaque!",
            },
            {
              id: 2,
              question: "Does this hotel has resturent facility?",
              answer:
                "Yes, This hotel have restaurent with continental food menu and train team of cook",
            },
            {
              id: 3,
              question: "Kids policy?",
              answer:
                "No charge are aplicable for kids, below 6 years (No food no charge policy.If guest take foods for kids an extra charge will be aplicable) -Kids above 6 years will be considers an adult will be charge full amount.",
            },
            {
              id: 4,
              question: "what document are essential to carry?",
              answer:
                "Please bring your National ID card if you are outside  from country, then bring your Passport please",
            },
          ],
        },
        {
          id: 4,
          name: "Hotel Sajak",
          location: "Rampura",
          des: "distinctio quo a dolore illo dolorum at quae. Vitae,tenetur. Aut atque repellendus quaerat architecto explicabo fugit quibusdam similique enim dolorem, asperiores nemo vero laudantium eius repudiandae harum tenetur labore qui animi. Earum id alias culpa.Fuga est cum possimus odit, recusandae ratione tenetur incidunt quisquam autem ipsam? Maiores sequi quo accusamus amet nesciunt, dolore deserunt libero similique atque ratione tempora non nemo cum nulla commodi? Dolore quidem itaque non quas dolorum, harum corrupti iusto?",
          info: "distinctio quo a dolore illo dolorum at quae. Vitae,tenetur. Aut atque repellendus quaerat architecto explicabo fugit quibusdam similique enim dolorem, asperiores nemo vero laudantium eius repudiandae harum tenetur labore qui animi. Earum id alias culpa.Fuga est cum possimus odit, recusandae ratione tenetur incidunt quisquam autem ipsam? Maiores sequi quo accusamus amet nesciunt, dolore deserunt libero similique atque ratione tempora non nemo cum nulla commodi? Dolore quidem itaque non quas dolorum, harum corrupti iusto?",
          image1:
          "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
          image:[
            'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg',
            'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg',
            'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg',
            'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg',
          ],
          rating: 4,
          price: 44,
          images_view: [
            {
              id: 1,
              name: "room1",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 2,
              name: "room2",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 3,
              name: "room3",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 4,
              name: "room4",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 5,
              name: "room5",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 6,
              name: "room6",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 7,
              name: "room7",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 8,
              name: "room8",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
          ],
          hotel_rooms: [
            {
              id: 1,
              room: "Couple Room",
              image:
                "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
              price: "Tk. 9,444",
              rating: 4,
              services: [
                {
                  id: 1,
                  text: "Room Size : 15 X 15",
                  icon: "mdi-bed",
                },
                {
                  id: 2,
                  text: "Bed : Queen Size",
                  icon: "mdi-bed-queen",
                },
                {
                  id: 3,
                  text: "Pickup & Drop",
                  icon: "mdi-car-convertible",
                },
                {
                  id: 4,
                  text: "Free Wifi",
                  icon: "mdi-wifi",
                },
                {
                  id: 5,
                  text: "Breakfast, Lunch, Dinner",
                  icon: "mdi-food-variant",
                },
                {
                  id: 6,
                  text: "Air Condition : Available",
                  icon: "mdi-air-conditioner",
                },
                {
                  id: 7,
                  text: "Amenities : Swimming Pool",
                  icon: "mdi-pool",
                },
                {
                  id: 8,
                  text: "Hot & cold Water",
                  icon: "mdi-fire",
                },
              ],
            },
            {
              id: 2,
              room: "couple Suit",
              image:
                "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
              price: "Tk. 9,444",
              rating: 4,
              services: [
                {
                  id: 1,
                  text: "Room Size : 15 X 15",
                  icon: "mdi-bed",
                },
                {
                  id: 2,
                  text: "Bed : Queen Size",
                  icon: "mdi-bed-queen",
                },
                {
                  id: 3,
                  text: "Pickup & Drop",
                  icon: "mdi-car-convertible",
                },
                {
                  id: 4,
                  text: "Free Wifi",
                  icon: "mdi-wifi",
                },
                {
                  id: 5,
                  text: "Breakfast, Lunch, Dinner",
                  icon: "mdi-food-variant",
                },
                {
                  id: 6,
                  text: "Air Condition : Available",
                  icon: "mdi-air-conditioner",
                },
                {
                  id: 7,
                  text: "Amenities : Swimming Pool",
                  icon: "mdi-pool",
                },
                {
                  id: 8,
                  text: "Hot & cold Water",
                  icon: "mdi-fire",
                },
              ],
            },
            {
              id: 3,
              room: "Group Room",
              image:
                "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
              price: "Tk. 9,444",
              rating: 4,
              services: [
                {
                  id: 1,
                  text: "Room Size : 15 X 15",
                  icon: "mdi-bed",
                },
                {
                  id: 2,
                  text: "Bed : Queen Size",
                  icon: "mdi-bed-queen",
                },
                {
                  id: 3,
                  text: "Pickup & Drop",
                  icon: "mdi-car-convertible",
                },
                {
                  id: 4,
                  text: "Free Wifi",
                  icon: "mdi-wifi",
                },
                {
                  id: 5,
                  text: "Breakfast, Lunch, Dinner",
                  icon: "mdi-food-variant",
                },
                {
                  id: 6,
                  text: "Air Condition : Available",
                  icon: "mdi-air-conditioner",
                },
                {
                  id: 7,
                  text: "Amenities : Swimming Pool",
                  icon: "mdi-pool",
                },
                {
                  id: 8,
                  text: "Hot & cold Water",
                  icon: "mdi-fire",
                },
              ],
            },
            {
              id: 4,
              room: "Family Room",
              image:
                "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
              price: "Tk. 9,444",
              rating: 4,
              services: [
                {
                  id: 1,
                  text: "Room Size : 15 X 15",
                  icon: "mdi-bed",
                },
                {
                  id: 2,
                  text: "Bed : Queen Size",
                  icon: "mdi-bed-queen",
                },
                {
                  id: 3,
                  text: "Pickup & Drop",
                  icon: "mdi-car-convertible",
                },
                {
                  id: 4,
                  text: "Free Wifi",
                  icon: "mdi-wifi",
                },
                {
                  id: 5,
                  text: "Breakfast, Lunch, Dinner",
                  icon: "mdi-food-variant",
                },
                {
                  id: 6,
                  text: "Air Condition : Available",
                  icon: "mdi-air-conditioner",
                },
                {
                  id: 7,
                  text: "Amenities : Swimming Pool",
                  icon: "mdi-pool",
                },
                {
                  id: 8,
                  text: "Hot & cold Water",
                  icon: "mdi-fire",
                },
              ],
            },
          ],
          lists: [
            {
              id: 1,
              name: "Free Wifi",
              icon: "mdi-wifi",
            },
            {
              id: 2,
              name: "Breakfast, Lunch, Dinner",
              icon: "mdi-food-variant",
            },
            {
              id: 3,
              name: "Amenities : Swimming Pool",
              icon: "mdi-pool",
            },
            {
              id: 4,
              name: "Hot & cold Water",
              icon: "mdi-fire",
            },
          ],
          questions: [
            {
              id: 1,
              question: "Booking Process?",
              answer:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quaerat beatae culpa doloribus ut aliquam placeat repudiandae deserunt illo voluptatibus corrupti porro aut ipsa, amet sunt aperiam ea, omnis tempora ex. Ducimus praesentium totam beatae, deleniti unde dolores quos a maxime nostrum doloremque id aut explicabo delectus aliquid optio itaque!",
            },
            {
              id: 2,
              question: "Does this hotel has resturent facility?",
              answer:
                "Yes, This hotel have restaurent with continental food menu and train team of cook",
            },
            {
              id: 3,
              question: "Kids policy?",
              answer:
                "No charge are aplicable for kids, below 6 years (No food no charge policy.If guest take foods for kids an extra charge will be aplicable) -Kids above 6 years will be considers an adult will be charge full amount.",
            },
            {
              id: 4,
              question: "what document are essential to carry?",
              answer:
                "Please bring your National ID card if you are outside  from country, then bring your Passport please",
            },
          ],
        },
        {
          id: 5,
          name: "Hotel Sundorbon",
          location: "Rampura",
          des: "distinctio quo a dolore illo dolorum at quae. Vitae,tenetur. Aut atque repellendus quaerat architecto explicabo fugit quibusdam similique enim dolorem, asperiores nemo vero laudantium eius repudiandae harum tenetur labore qui animi. Earum id alias culpa.Fuga est cum possimus odit, recusandae ratione tenetur incidunt quisquam autem ipsam? Maiores sequi quo accusamus amet nesciunt, dolore deserunt libero similique atque ratione tempora non nemo cum nulla commodi? Dolore quidem itaque non quas dolorum, harum corrupti iusto?",
          info: "distinctio quo a dolore illo dolorum at quae. Vitae,tenetur. Aut atque repellendus quaerat architecto explicabo fugit quibusdam similique enim dolorem, asperiores nemo vero laudantium eius repudiandae harum tenetur labore qui animi. Earum id alias culpa.Fuga est cum possimus odit, recusandae ratione tenetur incidunt quisquam autem ipsam? Maiores sequi quo accusamus amet nesciunt, dolore deserunt libero similique atque ratione tempora non nemo cum nulla commodi? Dolore quidem itaque non quas dolorum, harum corrupti iusto?",
          image1:
          "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
          image:[
            'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg',
            'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg',
            'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg',
            'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg',
          ],
          rating: 4,
          price: 44,
          images_view: [
            {
              id: 1,
              name: "room1",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 2,
              name: "room2",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 3,
              name: "room3",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 4,
              name: "room4",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 5,
              name: "room5",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 6,
              name: "room6",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 7,
              name: "room7",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 8,
              name: "room8",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
          ],
          hotel_rooms: [
            {
              id: 1,
              room: "Couple Room",
              image:
                "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
              price: "Tk. 9,444",
              rating: 4,
              services: [
                {
                  id: 1,
                  text: "Room Size : 15 X 15",
                  icon: "mdi-bed",
                },
                {
                  id: 2,
                  text: "Bed : Queen Size",
                  icon: "mdi-bed-queen",
                },
                {
                  id: 3,
                  text: "Pickup & Drop",
                  icon: "mdi-car-convertible",
                },
                {
                  id: 4,
                  text: "Free Wifi",
                  icon: "mdi-wifi",
                },
                {
                  id: 5,
                  text: "Breakfast, Lunch, Dinner",
                  icon: "mdi-food-variant",
                },
                {
                  id: 6,
                  text: "Air Condition : Available",
                  icon: "mdi-air-conditioner",
                },
                {
                  id: 7,
                  text: "Amenities : Swimming Pool",
                  icon: "mdi-pool",
                },
                {
                  id: 8,
                  text: "Hot & cold Water",
                  icon: "mdi-fire",
                },
              ],
            },
            {
              id: 2,
              room: "couple Suit",
              image:
                "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
              price: "Tk. 9,444",
              rating: 4,
              services: [
                {
                  id: 1,
                  text: "Room Size : 15 X 15",
                  icon: "mdi-bed",
                },
                {
                  id: 2,
                  text: "Bed : Queen Size",
                  icon: "mdi-bed-queen",
                },
                {
                  id: 3,
                  text: "Pickup & Drop",
                  icon: "mdi-car-convertible",
                },
                {
                  id: 4,
                  text: "Free Wifi",
                  icon: "mdi-wifi",
                },
                {
                  id: 5,
                  text: "Breakfast, Lunch, Dinner",
                  icon: "mdi-food-variant",
                },
                {
                  id: 6,
                  text: "Air Condition : Available",
                  icon: "mdi-air-conditioner",
                },
                {
                  id: 7,
                  text: "Amenities : Swimming Pool",
                  icon: "mdi-pool",
                },
                {
                  id: 8,
                  text: "Hot & cold Water",
                  icon: "mdi-fire",
                },
              ],
            },
            {
              id: 3,
              room: "Group Room",
              image:
                "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
              price: "Tk. 9,444",
              rating: 4,
              services: [
                {
                  id: 1,
                  text: "Room Size : 15 X 15",
                  icon: "mdi-bed",
                },
                {
                  id: 2,
                  text: "Bed : Queen Size",
                  icon: "mdi-bed-queen",
                },
                {
                  id: 3,
                  text: "Pickup & Drop",
                  icon: "mdi-car-convertible",
                },
                {
                  id: 4,
                  text: "Free Wifi",
                  icon: "mdi-wifi",
                },
                {
                  id: 5,
                  text: "Breakfast, Lunch, Dinner",
                  icon: "mdi-food-variant",
                },
                {
                  id: 6,
                  text: "Air Condition : Available",
                  icon: "mdi-air-conditioner",
                },
                {
                  id: 7,
                  text: "Amenities : Swimming Pool",
                  icon: "mdi-pool",
                },
                {
                  id: 8,
                  text: "Hot & cold Water",
                  icon: "mdi-fire",
                },
              ],
            },
            {
              id: 4,
              room: "Family Room",
              image:
                "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
              price: "Tk. 9,444",
              rating: 4,
              services: [
                {
                  id: 1,
                  text: "Room Size : 15 X 15",
                  icon: "mdi-bed",
                },
                {
                  id: 2,
                  text: "Bed : Queen Size",
                  icon: "mdi-bed-queen",
                },
                {
                  id: 3,
                  text: "Pickup & Drop",
                  icon: "mdi-car-convertible",
                },
                {
                  id: 4,
                  text: "Free Wifi",
                  icon: "mdi-wifi",
                },
                {
                  id: 5,
                  text: "Breakfast, Lunch, Dinner",
                  icon: "mdi-food-variant",
                },
                {
                  id: 6,
                  text: "Air Condition : Available",
                  icon: "mdi-air-conditioner",
                },
                {
                  id: 7,
                  text: "Amenities : Swimming Pool",
                  icon: "mdi-pool",
                },
                {
                  id: 8,
                  text: "Hot & cold Water",
                  icon: "mdi-fire",
                },
              ],
            },
          ],
          lists: [
            {
              id: 1,
              name: "Free Wifi",
              icon: "mdi-wifi",
            },
            {
              id: 2,
              name: "Breakfast, Lunch, Dinner",
              icon: "mdi-food-variant",
            },
            {
              id: 3,
              name: "Amenities : Swimming Pool",
              icon: "mdi-pool",
            },
            {
              id: 4,
              name: "Hot & cold Water",
              icon: "mdi-fire",
            },
          ],
          questions: [
            {
              id: 1,
              question: "Booking Process?",
              answer:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quaerat beatae culpa doloribus ut aliquam placeat repudiandae deserunt illo voluptatibus corrupti porro aut ipsa, amet sunt aperiam ea, omnis tempora ex. Ducimus praesentium totam beatae, deleniti unde dolores quos a maxime nostrum doloremque id aut explicabo delectus aliquid optio itaque!",
            },
            {
              id: 2,
              question: "Does this hotel has resturent facility?",
              answer:
                "Yes, This hotel have restaurent with continental food menu and train team of cook",
            },
            {
              id: 3,
              question: "Kids policy?",
              answer:
                "No charge are aplicable for kids, below 6 years (No food no charge policy.If guest take foods for kids an extra charge will be aplicable) -Kids above 6 years will be considers an adult will be charge full amount.",
            },
            {
              id: 4,
              question: "what document are essential to carry?",
              answer:
                "Please bring your National ID card if you are outside  from country, then bring your Passport please",
            },
          ],
        },
        {
          id: 6,
          name: "Hotel sunamgonj",
          location: "Rampura",
          des: "distinctio quo a dolore illo dolorum at quae. Vitae,tenetur. Aut atque repellendus quaerat architecto explicabo fugit quibusdam similique enim dolorem, asperiores nemo vero laudantium eius repudiandae harum tenetur labore qui animi. Earum id alias culpa.Fuga est cum possimus odit, recusandae ratione tenetur incidunt quisquam autem ipsam? Maiores sequi quo accusamus amet nesciunt, dolore deserunt libero similique atque ratione tempora non nemo cum nulla commodi? Dolore quidem itaque non quas dolorum, harum corrupti iusto?",
          info: "distinctio quo a dolore illo dolorum at quae. Vitae,tenetur. Aut atque repellendus quaerat architecto explicabo fugit quibusdam similique enim dolorem, asperiores nemo vero laudantium eius repudiandae harum tenetur labore qui animi. Earum id alias culpa.Fuga est cum possimus odit, recusandae ratione tenetur incidunt quisquam autem ipsam? Maiores sequi quo accusamus amet nesciunt, dolore deserunt libero similique atque ratione tempora non nemo cum nulla commodi? Dolore quidem itaque non quas dolorum, harum corrupti iusto?",
          image1:
          "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
          image:[
            'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg',
            'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg',
            'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg',
            'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg',
          ],
          rating: 4,
          price: 44,
          images_view: [
            {
              id: 1,
              name: "room1",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 2,
              name: "room2",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 3,
              name: "room3",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 4,
              name: "room4",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 5,
              name: "room5",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 6,
              name: "room6",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 7,
              name: "room7",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 8,
              name: "room8",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
          ],
          hotel_rooms: [
            {
              id: 1,
              room: "Couple Room",
              image:
                "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
              price: "Tk. 9,444",
              rating: 4,
              services: [
                {
                  id: 1,
                  text: "Room Size : 15 X 15",
                  icon: "mdi-bed",
                },
                {
                  id: 2,
                  text: "Bed : Queen Size",
                  icon: "mdi-bed-queen",
                },
                {
                  id: 3,
                  text: "Pickup & Drop",
                  icon: "mdi-car-convertible",
                },
                {
                  id: 4,
                  text: "Free Wifi",
                  icon: "mdi-wifi",
                },
                {
                  id: 5,
                  text: "Breakfast, Lunch, Dinner",
                  icon: "mdi-food-variant",
                },
                {
                  id: 6,
                  text: "Air Condition : Available",
                  icon: "mdi-air-conditioner",
                },
                {
                  id: 7,
                  text: "Amenities : Swimming Pool",
                  icon: "mdi-pool",
                },
                {
                  id: 8,
                  text: "Hot & cold Water",
                  icon: "mdi-fire",
                },
              ],
            },
            {
              id: 2,
              room: "couple Suit",
              image:
                "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
              price: "Tk. 9,444",
              rating: 4,
              services: [
                {
                  id: 1,
                  text: "Room Size : 15 X 15",
                  icon: "mdi-bed",
                },
                {
                  id: 2,
                  text: "Bed : Queen Size",
                  icon: "mdi-bed-queen",
                },
                {
                  id: 3,
                  text: "Pickup & Drop",
                  icon: "mdi-car-convertible",
                },
                {
                  id: 4,
                  text: "Free Wifi",
                  icon: "mdi-wifi",
                },
                {
                  id: 5,
                  text: "Breakfast, Lunch, Dinner",
                  icon: "mdi-food-variant",
                },
                {
                  id: 6,
                  text: "Air Condition : Available",
                  icon: "mdi-air-conditioner",
                },
                {
                  id: 7,
                  text: "Amenities : Swimming Pool",
                  icon: "mdi-pool",
                },
                {
                  id: 8,
                  text: "Hot & cold Water",
                  icon: "mdi-fire",
                },
              ],
            },
            {
              id: 3,
              room: "Group Room",
              image:
                "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
              price: "Tk. 9,444",
              rating: 4,
              services: [
                {
                  id: 1,
                  text: "Room Size : 15 X 15",
                  icon: "mdi-bed",
                },
                {
                  id: 2,
                  text: "Bed : Queen Size",
                  icon: "mdi-bed-queen",
                },
                {
                  id: 3,
                  text: "Pickup & Drop",
                  icon: "mdi-car-convertible",
                },
                {
                  id: 4,
                  text: "Free Wifi",
                  icon: "mdi-wifi",
                },
                {
                  id: 5,
                  text: "Breakfast, Lunch, Dinner",
                  icon: "mdi-food-variant",
                },
                {
                  id: 6,
                  text: "Air Condition : Available",
                  icon: "mdi-air-conditioner",
                },
                {
                  id: 7,
                  text: "Amenities : Swimming Pool",
                  icon: "mdi-pool",
                },
                {
                  id: 8,
                  text: "Hot & cold Water",
                  icon: "mdi-fire",
                },
              ],
            },
            {
              id: 4,
              room: "Family Room",
              image:
                "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
              price: "Tk. 9,444",
              rating: 4,
              services: [
                {
                  id: 1,
                  text: "Room Size : 15 X 15",
                  icon: "mdi-bed",
                },
                {
                  id: 2,
                  text: "Bed : Queen Size",
                  icon: "mdi-bed-queen",
                },
                {
                  id: 3,
                  text: "Pickup & Drop",
                  icon: "mdi-car-convertible",
                },
                {
                  id: 4,
                  text: "Free Wifi",
                  icon: "mdi-wifi",
                },
                {
                  id: 5,
                  text: "Breakfast, Lunch, Dinner",
                  icon: "mdi-food-variant",
                },
                {
                  id: 6,
                  text: "Air Condition : Available",
                  icon: "mdi-air-conditioner",
                },
                {
                  id: 7,
                  text: "Amenities : Swimming Pool",
                  icon: "mdi-pool",
                },
                {
                  id: 8,
                  text: "Hot & cold Water",
                  icon: "mdi-fire",
                },
              ],
            },
          ],
          lists: [
            {
              id: 1,
              name: "Free Wifi",
              icon: "mdi-wifi",
            },
            {
              id: 2,
              name: "Breakfast, Lunch, Dinner",
              icon: "mdi-food-variant",
            },
            {
              id: 3,
              name: "Amenities : Swimming Pool",
              icon: "mdi-pool",
            },
            {
              id: 4,
              name: "Hot & cold Water",
              icon: "mdi-fire",
            },
          ],
          questions: [
            {
              id: 1,
              question: "Booking Process?",
              answer:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quaerat beatae culpa doloribus ut aliquam placeat repudiandae deserunt illo voluptatibus corrupti porro aut ipsa, amet sunt aperiam ea, omnis tempora ex. Ducimus praesentium totam beatae, deleniti unde dolores quos a maxime nostrum doloremque id aut explicabo delectus aliquid optio itaque!",
            },
            {
              id: 2,
              question: "Does this hotel has resturent facility?",
              answer:
                "Yes, This hotel have restaurent with continental food menu and train team of cook",
            },
            {
              id: 3,
              question: "Kids policy?",
              answer:
                "No charge are aplicable for kids, below 6 years (No food no charge policy.If guest take foods for kids an extra charge will be aplicable) -Kids above 6 years will be considers an adult will be charge full amount.",
            },
            {
              id: 4,
              question: "what document are essential to carry?",
              answer:
                "Please bring your National ID card if you are outside  from country, then bring your Passport please",
            },
          ],
        },
        {
          id: 7,
          name: "Hotel kuakata",
          location: "Rampura",
          des: "distinctio quo a dolore illo dolorum at quae. Vitae,tenetur. Aut atque repellendus quaerat architecto explicabo fugit quibusdam similique enim dolorem, asperiores nemo vero laudantium eius repudiandae harum tenetur labore qui animi. Earum id alias culpa.Fuga est cum possimus odit, recusandae ratione tenetur incidunt quisquam autem ipsam? Maiores sequi quo accusamus amet nesciunt, dolore deserunt libero similique atque ratione tempora non nemo cum nulla commodi? Dolore quidem itaque non quas dolorum, harum corrupti iusto?",
          info: "distinctio quo a dolore illo dolorum at quae. Vitae,tenetur. Aut atque repellendus quaerat architecto explicabo fugit quibusdam similique enim dolorem, asperiores nemo vero laudantium eius repudiandae harum tenetur labore qui animi. Earum id alias culpa.Fuga est cum possimus odit, recusandae ratione tenetur incidunt quisquam autem ipsam? Maiores sequi quo accusamus amet nesciunt, dolore deserunt libero similique atque ratione tempora non nemo cum nulla commodi? Dolore quidem itaque non quas dolorum, harum corrupti iusto?",
          image1:
          "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
          image:[
            'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg',
            'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg',
            'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg',
            'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg',
          ],
          rating: 4,
          price: 44,
          images_view: [
            {
              id: 1,
              name: "room1",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 2,
              name: "room2",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 3,
              name: "room3",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 4,
              name: "room4",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 5,
              name: "room5",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 6,
              name: "room6",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 7,
              name: "room7",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 8,
              name: "room8",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
          ],
          hotel_rooms: [
            {
              id: 1,
              room: "Couple Room",
              image:
                "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
              price: "Tk. 9,444",
              rating: 4,
              services: [
                {
                  id: 1,
                  text: "Room Size : 15 X 15",
                  icon: "mdi-bed",
                },
                {
                  id: 2,
                  text: "Bed : Queen Size",
                  icon: "mdi-bed-queen",
                },
                {
                  id: 3,
                  text: "Pickup & Drop",
                  icon: "mdi-car-convertible",
                },
                {
                  id: 4,
                  text: "Free Wifi",
                  icon: "mdi-wifi",
                },
                {
                  id: 5,
                  text: "Breakfast, Lunch, Dinner",
                  icon: "mdi-food-variant",
                },
                {
                  id: 6,
                  text: "Air Condition : Available",
                  icon: "mdi-air-conditioner",
                },
                {
                  id: 7,
                  text: "Amenities : Swimming Pool",
                  icon: "mdi-pool",
                },
                {
                  id: 8,
                  text: "Hot & cold Water",
                  icon: "mdi-fire",
                },
              ],
            },
            {
              id: 2,
              room: "couple Suit",
              image:
                "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
              price: "Tk. 9,444",
              rating: 4,
              services: [
                {
                  id: 1,
                  text: "Room Size : 15 X 15",
                  icon: "mdi-bed",
                },
                {
                  id: 2,
                  text: "Bed : Queen Size",
                  icon: "mdi-bed-queen",
                },
                {
                  id: 3,
                  text: "Pickup & Drop",
                  icon: "mdi-car-convertible",
                },
                {
                  id: 4,
                  text: "Free Wifi",
                  icon: "mdi-wifi",
                },
                {
                  id: 5,
                  text: "Breakfast, Lunch, Dinner",
                  icon: "mdi-food-variant",
                },
                {
                  id: 6,
                  text: "Air Condition : Available",
                  icon: "mdi-air-conditioner",
                },
                {
                  id: 7,
                  text: "Amenities : Swimming Pool",
                  icon: "mdi-pool",
                },
                {
                  id: 8,
                  text: "Hot & cold Water",
                  icon: "mdi-fire",
                },
              ],
            },
            {
              id: 3,
              room: "Group Room",
              image:
                "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
              price: "Tk. 9,444",
              rating: 4,
              services: [
                {
                  id: 1,
                  text: "Room Size : 15 X 15",
                  icon: "mdi-bed",
                },
                {
                  id: 2,
                  text: "Bed : Queen Size",
                  icon: "mdi-bed-queen",
                },
                {
                  id: 3,
                  text: "Pickup & Drop",
                  icon: "mdi-car-convertible",
                },
                {
                  id: 4,
                  text: "Free Wifi",
                  icon: "mdi-wifi",
                },
                {
                  id: 5,
                  text: "Breakfast, Lunch, Dinner",
                  icon: "mdi-food-variant",
                },
                {
                  id: 6,
                  text: "Air Condition : Available",
                  icon: "mdi-air-conditioner",
                },
                {
                  id: 7,
                  text: "Amenities : Swimming Pool",
                  icon: "mdi-pool",
                },
                {
                  id: 8,
                  text: "Hot & cold Water",
                  icon: "mdi-fire",
                },
              ],
            },
            {
              id: 4,
              room: "Family Room",
              image:
                "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
              price: "Tk. 9,444",
              rating: 4,
              services: [
                {
                  id: 1,
                  text: "Room Size : 15 X 15",
                  icon: "mdi-bed",
                },
                {
                  id: 2,
                  text: "Bed : Queen Size",
                  icon: "mdi-bed-queen",
                },
                {
                  id: 3,
                  text: "Pickup & Drop",
                  icon: "mdi-car-convertible",
                },
                {
                  id: 4,
                  text: "Free Wifi",
                  icon: "mdi-wifi",
                },
                {
                  id: 5,
                  text: "Breakfast, Lunch, Dinner",
                  icon: "mdi-food-variant",
                },
                {
                  id: 6,
                  text: "Air Condition : Available",
                  icon: "mdi-air-conditioner",
                },
                {
                  id: 7,
                  text: "Amenities : Swimming Pool",
                  icon: "mdi-pool",
                },
                {
                  id: 8,
                  text: "Hot & cold Water",
                  icon: "mdi-fire",
                },
              ],
            },
          ],
          lists: [
            {
              id: 1,
              name: "Free Wifi",
              icon: "mdi-wifi",
            },
            {
              id: 2,
              name: "Breakfast, Lunch, Dinner",
              icon: "mdi-food-variant",
            },
            {
              id: 3,
              name: "Amenities : Swimming Pool",
              icon: "mdi-pool",
            },
            {
              id: 4,
              name: "Hot & cold Water",
              icon: "mdi-fire",
            },
          ],
          questions: [
            {
              id: 1,
              question: "Booking Process?",
              answer:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quaerat beatae culpa doloribus ut aliquam placeat repudiandae deserunt illo voluptatibus corrupti porro aut ipsa, amet sunt aperiam ea, omnis tempora ex. Ducimus praesentium totam beatae, deleniti unde dolores quos a maxime nostrum doloremque id aut explicabo delectus aliquid optio itaque!",
            },
            {
              id: 2,
              question: "Does this hotel has resturent facility?",
              answer:
                "Yes, This hotel have restaurent with continental food menu and train team of cook",
            },
            {
              id: 3,
              question: "Kids policy?",
              answer:
                "No charge are aplicable for kids, below 6 years (No food no charge policy.If guest take foods for kids an extra charge will be aplicable) -Kids above 6 years will be considers an adult will be charge full amount.",
            },
            {
              id: 4,
              question: "what document are essential to carry?",
              answer:
                "Please bring your National ID card if you are outside  from country, then bring your Passport please",
            },
          ],
        },
        {
          id: 8,
          name: "Hotel Bandorbon",
          location: "Rampura",
          des: "distinctio quo a dolore illo dolorum at quae. Vitae,tenetur. Aut atque repellendus quaerat architecto explicabo fugit quibusdam similique enim dolorem, asperiores nemo vero laudantium eius repudiandae harum tenetur labore qui animi. Earum id alias culpa.Fuga est cum possimus odit, recusandae ratione tenetur incidunt quisquam autem ipsam? Maiores sequi quo accusamus amet nesciunt, dolore deserunt libero similique atque ratione tempora non nemo cum nulla commodi? Dolore quidem itaque non quas dolorum, harum corrupti iusto?",
          info: "distinctio quo a dolore illo dolorum at quae. Vitae,tenetur. Aut atque repellendus quaerat architecto explicabo fugit quibusdam similique enim dolorem, asperiores nemo vero laudantium eius repudiandae harum tenetur labore qui animi. Earum id alias culpa.Fuga est cum possimus odit, recusandae ratione tenetur incidunt quisquam autem ipsam? Maiores sequi quo accusamus amet nesciunt, dolore deserunt libero similique atque ratione tempora non nemo cum nulla commodi? Dolore quidem itaque non quas dolorum, harum corrupti iusto?",
          image1:
          "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
          image:[
            'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg',
            'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg',
            'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg',
            'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg',
          ],
          rating: 4,
          price: 44,
          images_view: [
            {
              id: 1,
              name: "room1",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 2,
              name: "room2",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 3,
              name: "room3",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 4,
              name: "room4",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 5,
              name: "room5",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 6,
              name: "room6",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 7,
              name: "room7",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
            {
              id: 8,
              name: "room8",
              image:
                "https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg",
            },
          ],
          hotel_rooms: [
            {
              id: 1,
              room: "Couple Room",
              image:
                "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
              price: "Tk. 9,444",
              rating: 4,
              services: [
                {
                  id: 1,
                  text: "Room Size : 15 X 15",
                  icon: "mdi-bed",
                },
                {
                  id: 2,
                  text: "Bed : Queen Size",
                  icon: "mdi-bed-queen",
                },
                {
                  id: 3,
                  text: "Pickup & Drop",
                  icon: "mdi-car-convertible",
                },
                {
                  id: 4,
                  text: "Free Wifi",
                  icon: "mdi-wifi",
                },
                {
                  id: 5,
                  text: "Breakfast, Lunch, Dinner",
                  icon: "mdi-food-variant",
                },
                {
                  id: 6,
                  text: "Air Condition : Available",
                  icon: "mdi-air-conditioner",
                },
                {
                  id: 7,
                  text: "Amenities : Swimming Pool",
                  icon: "mdi-pool",
                },
                {
                  id: 8,
                  text: "Hot & cold Water",
                  icon: "mdi-fire",
                },
              ],
            },
            {
              id: 2,
              room: "couple Suit",
              image:
                "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
              price: "Tk. 9,444",
              rating: 4,
              services: [
                {
                  id: 1,
                  text: "Room Size : 15 X 15",
                  icon: "mdi-bed",
                },
                {
                  id: 2,
                  text: "Bed : Queen Size",
                  icon: "mdi-bed-queen",
                },
                {
                  id: 3,
                  text: "Pickup & Drop",
                  icon: "mdi-car-convertible",
                },
                {
                  id: 4,
                  text: "Free Wifi",
                  icon: "mdi-wifi",
                },
                {
                  id: 5,
                  text: "Breakfast, Lunch, Dinner",
                  icon: "mdi-food-variant",
                },
                {
                  id: 6,
                  text: "Air Condition : Available",
                  icon: "mdi-air-conditioner",
                },
                {
                  id: 7,
                  text: "Amenities : Swimming Pool",
                  icon: "mdi-pool",
                },
                {
                  id: 8,
                  text: "Hot & cold Water",
                  icon: "mdi-fire",
                },
              ],
            },
            {
              id: 3,
              room: "Group Room",
              image:
                "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
              price: "Tk. 9,444",
              rating: 4,
              services: [
                {
                  id: 1,
                  text: "Room Size : 15 X 15",
                  icon: "mdi-bed",
                },
                {
                  id: 2,
                  text: "Bed : Queen Size",
                  icon: "mdi-bed-queen",
                },
                {
                  id: 3,
                  text: "Pickup & Drop",
                  icon: "mdi-car-convertible",
                },
                {
                  id: 4,
                  text: "Free Wifi",
                  icon: "mdi-wifi",
                },
                {
                  id: 5,
                  text: "Breakfast, Lunch, Dinner",
                  icon: "mdi-food-variant",
                },
                {
                  id: 6,
                  text: "Air Condition : Available",
                  icon: "mdi-air-conditioner",
                },
                {
                  id: 7,
                  text: "Amenities : Swimming Pool",
                  icon: "mdi-pool",
                },
                {
                  id: 8,
                  text: "Hot & cold Water",
                  icon: "mdi-fire",
                },
              ],
            },
            {
              id: 4,
              room: "Family Room",
              image:
                "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
              price: "Tk. 9,444",
              rating: 4,
              services: [
                {
                  id: 1,
                  text: "Room Size : 15 X 15",
                  icon: "mdi-bed",
                },
                {
                  id: 2,
                  text: "Bed : Queen Size",
                  icon: "mdi-bed-queen",
                },
                {
                  id: 3,
                  text: "Pickup & Drop",
                  icon: "mdi-car-convertible",
                },
                {
                  id: 4,
                  text: "Free Wifi",
                  icon: "mdi-wifi",
                },
                {
                  id: 5,
                  text: "Breakfast, Lunch, Dinner",
                  icon: "mdi-food-variant",
                },
                {
                  id: 6,
                  text: "Air Condition : Available",
                  icon: "mdi-air-conditioner",
                },
                {
                  id: 7,
                  text: "Amenities : Swimming Pool",
                  icon: "mdi-pool",
                },
                {
                  id: 8,
                  text: "Hot & cold Water",
                  icon: "mdi-fire",
                },
              ],
            },
          ],
          lists: [
            {
              id: 1,
              name: "Free Wifi",
              icon: "mdi-wifi",
            },
            {
              id: 2,
              name: "Breakfast, Lunch, Dinner",
              icon: "mdi-food-variant",
            },
            {
              id: 3,
              name: "Amenities : Swimming Pool",
              icon: "mdi-pool",
            },
            {
              id: 4,
              name: "Hot & cold Water",
              icon: "mdi-fire",
            },
          ],
          questions: [
            {
              id: 1,
              question: "Booking Process?",
              answer:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quaerat beatae culpa doloribus ut aliquam placeat repudiandae deserunt illo voluptatibus corrupti porro aut ipsa, amet sunt aperiam ea, omnis tempora ex. Ducimus praesentium totam beatae, deleniti unde dolores quos a maxime nostrum doloremque id aut explicabo delectus aliquid optio itaque!",
            },
            {
              id: 2,
              question: "Does this hotel has resturent facility?",
              answer:
                "Yes, This hotel have restaurent with continental food menu and train team of cook",
            },
            {
              id: 3,
              question: "Kids policy?",
              answer:
                "No charge are aplicable for kids, below 6 years (No food no charge policy.If guest take foods for kids an extra charge will be aplicable) -Kids above 6 years will be considers an adult will be charge full amount.",
            },
            {
              id: 4,
              question: "what document are essential to carry?",
              answer:
                "Please bring your National ID card if you are outside  from country, then bring your Passport please",
            },
          ],
        },
      ],
    };
  },
  mutations: {},

  getters: {
    getHotelById: (state) => (id) => {
      return state.hotels.find((hotel) => hotel.id == id);
    },
  },

  actions: {},
};
