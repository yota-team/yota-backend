const Destination = require('../models/Destination')
const Car = require('../models/Car')
const Position = require('../models/Position')

module.exports = {
  create: (req, res) => {
    Destination.find()
      .then(response => {
        // console.log(response.length)
        // if (response.length != 0) {
        //   res.send('DATA DUMMY SUDAH ADA')
        // } else {

          var dummyDestinations = [
            {
              destination_code: 'd0001',
              list_of_destination: ['pondok indah', 'tanah kusir', 'gandaria']
            },
            {
              destination_code: 'd0002',
              list_of_destination: ['kampung rambutan', 'pasar rebo', 'pasar minggu']
            },
            {
              destination_code: 'd0003',
              list_of_destination: ['kebun jeruk', 'indosiar', 'cempaka putih']
            }
          ]

          dummyDestinations.map((destination, idx) => {
            Destination.create(destination)
              .then(created => {
                dummyDestinations[idx]._id = created._id
                // console.log(created)
                // console.log('=====', dummyDestinations[idx])
                if (idx == dummyDestinations.length-1) {

                  var dummyCars = [
                    {
                      car_code: 'c0001',
                      destination: dummyDestinations[0]._id
                    },
                    {
                      car_code: 'c0002',
                      destination: dummyDestinations[0]._id
                    },
                    {
                      car_code: 'c0003',
                      destination: dummyDestinations[0]._id
                    },
                    {
                      car_code: 'c0004',
                      destination: dummyDestinations[0]._id
                    },
                    {
                      car_code: 'c0005',
                      destination: dummyDestinations[2]._id
                    },
                    {
                      car_code: 'c0006',
                      destination: dummyDestinations[2]._id
                    }
                  ]

                  dummyCars.map((car, idx) => {
                    Car.create(car)
                      .then(created => {
                        dummyCars[idx]._id = created._id
                        // console.log(created)
                        if (idx == dummyCars.length-1) {

                          var dummyPositions = [
                            // mobil kedua
                            { latitude: -6.307745, longitude: 106.880915, car: dummyCars[1]._id },
                            { latitude: -6.306817, longitude: 106.879611, car: dummyCars[1]._id },
                            // { latitude: -6.309904, longitude: 106.882797, car: dummyCars[1]._id },
                            // { latitude: -6.310107, longitude: 106.882738, car: dummyCars[1]._id },
                            { latitude: -6.309851, longitude: 106.882084, car: dummyCars[1]._id },
                            { latitude: -6.309579, longitude: 106.881741, car: dummyCars[1]._id },
                            // { latitude: -6.306588, longitude: 106.880636, car: dummyCars[1]._id },
                            // { latitude: -6.306908, longitude: 106.879263, car: dummyCars[1]._id },
                            { latitude: -6.306529, longitude: 106.878689, car: dummyCars[1]._id },
                            // { latitude: -6.307345, longitude: 106.877718, car: dummyCars[1]._id },
                            { latitude: -6.307852, longitude: 106.875572, car: dummyCars[1]._id },
                            { latitude: -6.307857, longitude: 106.873576, car: dummyCars[1]._id },
                            // { latitude: -6.308236, longitude: 106.874064, car: dummyCars[1]._id },
                            // { latitude: -6.308748, longitude: 106.871822, car: dummyCars[1]._id },
                            // { latitude: -6.308252, longitude: 106.869537, car: dummyCars[1]._id },
                            // { latitude: -6.306663, longitude: 106.866296, car: dummyCars[1]._id },
                            { latitude: -6.306546, longitude: 106.865593, car: dummyCars[1]._id },
                            // { latitude: -6.306487, longitude: 106.865368, car: dummyCars[1]._id },
                            // { latitude: -6.305501, longitude: 106.863861, car: dummyCars[1]._id },
                            { latitude: -6.304723, longitude: 106.862788, car: dummyCars[1]._id },
                            { latitude: -6.302422, longitude: 106.858969, car: dummyCars[1]._id },
                            // { latitude: -6.302390, longitude: 106.857193, car: dummyCars[1]._id },
                            // { latitude: -6.302609, longitude: 106.856007, car: dummyCars[1]._id },
                            // { latitude: -6.302508, longitude: 106.855052, car: dummyCars[1]._id },
                            // { latitude: -6.302748, longitude: 106.853325, car: dummyCars[1]._id },
                            { latitude: -6.851839, longitude: 106.851839, car: dummyCars[1]._id },
                            { latitude: -6.304502, longitude: 106.849790, car: dummyCars[1]._id },
                            // { latitude: -6.303947, longitude: 106.848900, car: dummyCars[1]._id },
                            // { latitude: -6.304288, longitude: 106.846207, car: dummyCars[1]._id },
                            // { latitude: -6.303776, longitude: 106.846690, car: dummyCars[1]._id },
                            // { latitude: -6.303925, longitude: 106.843675, car: dummyCars[1]._id },
                            // { latitude: -6.303274, longitude: 106.842924, car: dummyCars[1]._id },
                            // { latitude: -6.301024, longitude: 106.835897, car: dummyCars[1]._id },
                            { latitude: -6.300150, longitude: 106.833547, car: dummyCars[1]._id },
                            { latitude: -6.298241, longitude: 106.831820, car: dummyCars[1]._id },
                            // { latitude: -6.296727, longitude: 106.827807, car: dummyCars[1]._id },
                            // { latitude: -6.295991, longitude: 106.827539, car: dummyCars[1]._id },
                            // { latitude: -6.294306, longitude: 106.822947, car: dummyCars[1]._id },
                            // { latitude: -6.294306, longitude: 106.822475, car: dummyCars[1]._id },
                            // { latitude: -6.293522, longitude: 106.822287, car: dummyCars[1]._id },
                            { latitude: -6.293522, longitude: 106.822287, car: dummyCars[1]._id },
                            // { latitude: -6.293725, longitude: 106.821236, car: dummyCars[1]._id },
                            { latitude: -6.293016, longitude: 106.819203, car: dummyCars[1]._id },
                            // { latitude: -6.292632, longitude: 106.817138, car: dummyCars[1]._id },
                            // { latitude: -6.292003, longitude: 106.816129, car: dummyCars[1]._id },
                            { latitude: -6.292451, longitude: 106.812422, car: dummyCars[1]._id },
                            // { latitude: -6.291923, longitude: 106.810180, car: dummyCars[1]._id },
                            // { latitude: -6.292547, longitude: 106.808083, car: dummyCars[1]._id },
                            { latitude: -6.292083, longitude: 106.805503, car: dummyCars[1]._id },
                            { latitude: -6.292675, longitude: 106.804264, car: dummyCars[1]._id },
                            // { latitude: -6.292040, longitude: 106.802097, car: dummyCars[1]._id },
                            // { latitude: -6.292525, longitude: 106.797741, car: dummyCars[1]._id },
                            { latitude: -6.292008, longitude: 106.798449, car: dummyCars[1]._id },
                            { latitude: -6.292537, longitude: 106.797029, car: dummyCars[1]._id },
                            // { latitude: -6.291998, longitude: 106.795602, car: dummyCars[1]._id },
                            // { latitude: -6.292499, longitude: 106.794111, car: dummyCars[1]._id },
                            // { latitude: -6.291939, longitude: 106.792598, car: dummyCars[1]._id },

                            //TRAYEK PERTAMA
                            // { latitude: -6.275909, longitude: 106.781904, car: dummyCars[0]._id },
                            // { latitude: -6.275263, longitude: 106.782066, car: dummyCars[0]._id },
                            { latitude: -6.274933, longitude: 106.782140, car: dummyCars[0]._id },
                            { latitude: -6.273045, longitude: 106.782607, car: dummyCars[0]._id },
                            // { latitude: -6.273045, longitude: 106.782608, car: dummyCars[0]._id },
                            // { latitude: -6.273381, longitude: 106.782516, car: dummyCars[0]._id },
                            // { latitude: -6.271067, longitude: 106.783128, car: dummyCars[0]._id },
                            // { latitude: -6.267620, longitude: 106.783528, car: dummyCars[0]._id },
                            // { latitude: -6.266522, longitude: 106.783523, car: dummyCars[0]._id},
                            { latitude: -6.266640, longitude: 106.783531, car: dummyCars[0]._id},
                            { latitude: -6.266053, longitude: 106.783520, car: dummyCars[0]._id},
                            // { latitude: -6.265957, longitude: 106.783525, car: dummyCars[0]._id},
                            // { latitude: -6.265994, longitude: 106.783520, car: dummyCars[0]._id},
                            { latitude: -6.261353, longitude: 106.781994, car: dummyCars[0]._id},
                            { latitude: -6.261273, longitude: 106.781962, car: dummyCars[0]._id},
                            // { latitude: -6.261342, longitude: 106.781983, car: dummyCars[0]._id},
                            // { latitude: -6.260755, longitude: 106.781806, car: dummyCars[0]._id},
                            { latitude: -6.260563, longitude: 106.781752, car: dummyCars[0]._id},
                            // { latitude: -6.260643, longitude: 106.781773, car: dummyCars[0]._id},
                            // { latitude: -6.260241, longitude: 106.781714, car: dummyCars[0]._id},
                            { latitude: -6.259561, longitude: 106.781676, car: dummyCars[0]._id},
                            // { latitude: -6.259764, longitude: 106.781687, car: dummyCars[0]._id},
                            { latitude: -6.258543, longitude: 106.781592, car: dummyCars[0]._id},
                            // { latitude: -6.257114, longitude: 106.781577, car: dummyCars[0]._id},
                            // { latitude: -6.256815, longitude: 106.781609, car: dummyCars[0]._id},
                            // { latitude: -6.256090, longitude: 106.781577, car: dummyCars[0]._id},
                            { latitude: -6.255706, longitude: 106.781631, car: dummyCars[0]._id},
                            // { latitude: -6.255386, longitude: 106.781610, car: dummyCars[0]._id},
                            { latitude: -6.254692, longitude: 106.781606, car: dummyCars[0]._id},
                            // { latitude: -6.253306, longitude: 106.781553, car: dummyCars[0]._id},
                            { latitude: -6.252943, longitude: 106.781542, car: dummyCars[0]._id},
                            // { latitude: -6.252495, longitude: 106.781510, car: dummyCars[0]._id},
                            // { latitude: -6.251055, longitude: 106.781456, car: dummyCars[0]._id},
                            // { latitude: -6.250788, longitude: 106.781424, car: dummyCars[0]._id},
                            { latitude: -6.250425, longitude: 106.781392, car: dummyCars[0]._id},
                            // { latitude: -6.250180, longitude: 106.781338, car: dummyCars[0]._id},
                            // { latitude: -6.249977, longitude: 106.781295, car: dummyCars[0]._id},
                            { latitude: -6.248729, longitude: 106.781048, car: dummyCars[0]._id},
                            // { latitude: -6.248558, longitude: 106.781048, car: dummyCars[0]._id},
                            // { latitude: -6.247929, longitude: 106.781102, car: dummyCars[0]._id},
                            { latitude: -6.247705, longitude: 106.781123, car: dummyCars[0]._id},
                            // { latitude: -6.247225, longitude: 106.781220, car: dummyCars[0]._id},
                            { latitude: -6.246916, longitude: 106.781317, car: dummyCars[0]._id},
                            // { latitude: -6.246617, longitude: 106.781381, car: dummyCars[0]._id},
                            // { latitude: -6.246457, longitude: 106.781445, car: dummyCars[0]._id},
                            // { latitude: -6.246180, longitude: 106.781520, car: dummyCars[0]._id},
                            // { latitude: -6.245830, longitude: 106.781702, car: dummyCars[0]._id},
                            { latitude: -6.245458, longitude: 106.781823, car: dummyCars[0]._id},
                            { latitude: -6.243794, longitude: 106.782392, car: dummyCars[0]._id},
                            // { latitude: -6.242376, longitude: 106.782542, car: dummyCars[0]._id},
                            // { latitude: -6.241821, longitude: 106.782606, car: dummyCars[0]._id},
                            // { latitude: -6.240648, longitude: 106.782692, car: dummyCars[0]._id},
                            // { latitude: -6.240083, longitude: 106.783100, car: dummyCars[0]._id},
                            { latitude: -6.240819, longitude: 106.782999, car: dummyCars[0]._id},
                            // { latitude: -6.241989, longitude: 106.782930, car: dummyCars[0]._id},
                            // { latitude: -6.242407, longitude: 106.782884, car: dummyCars[0]._id},
                            // { latitude: -6.243271, longitude: 106.782755, car: dummyCars[0]._id},
                            { latitude: -6.243474, longitude: 106.782734, car: dummyCars[0]._id},
                            { latitude: -6.245304, longitude: 106.782166, car: dummyCars[0]._id},
                            // { latitude: -6.245593, longitude: 106.782067, car: dummyCars[0]._id},
                            // { latitude: -6.245940, longitude: 106.781922, car: dummyCars[0]._id},
                            // { latitude: -6.246308, longitude: 106.781788, car: dummyCars[0]._id},
                            // { latitude: -6.246511, longitude: 106.781718, car: dummyCars[0]._id},
                            { latitude: -6.246799, longitude: 106.781627, car: dummyCars[0]._id},
                            // { latitude: -6.246879, longitude: 106.781606, car: dummyCars[0]._id},
                            // { latitude: -6.247210, longitude: 106.781526, car: dummyCars[0]._id},
                            { latitude: -6.247391, longitude: 106.781478, car: dummyCars[0]._id},
                            // { latitude: -6.247770, longitude: 106.781419, car: dummyCars[0]._id},
                            { latitude: -6.248047, longitude: 106.781381, car: dummyCars[0]._id},
                            // { latitude: -6.248538, longitude: 106.781360, car: dummyCars[0]._id},
                            // { latitude: -6.249039, longitude: 106.781403, car: dummyCars[0]._id},
                            // { latitude: -6.249487, longitude: 106.781457, car: dummyCars[0]._id},
                            { latitude: -6.249487, longitude: 106.781457, car: dummyCars[0]._id},
                            // { latitude: -6.249951, longitude: 106.781537, car: dummyCars[0]._id},
                            // { latitude: -6.250815, longitude: 106.781655, car: dummyCars[0]._id},
                            // { latitude: -6.251354, longitude: 106.781714, car: dummyCars[0]._id},
                            // { latitude: -6.251882, longitude: 106.781746, car: dummyCars[0]._id},
                            { latitude: -6.252186, longitude: 106.781757, car: dummyCars[0]._id},
                            // { latitude: -6.252506, longitude: 106.781789, car: dummyCars[0]._id},
                            // { latitude: -6.253007, longitude: 106.781794, car: dummyCars[0]._id},
                            // { latitude: -6.253476, longitude: 106.781815, car: dummyCars[0]._id},
                            // { latitude: -6.253844, longitude: 106.781804, car: dummyCars[0]._id},
                            // { latitude: -6.254378, longitude: 106.781821, car: dummyCars[0]._id},
                            // { latitude: -6.255262, longitude: 106.781842, car: dummyCars[0]._id},
                            { latitude: -6.255534, longitude: 106.781844, car: dummyCars[0]._id},
                            { latitude: -6.255998, longitude: 106.781833, car: dummyCars[0]._id},
                            // { latitude: -6.256873, longitude: 106.781844, car: dummyCars[0]._id},
                            // { latitude: -6.257502, longitude: 106.781823, car: dummyCars[0]._id},
                            // { latitude: -6.258222, longitude: 106.781844, car: dummyCars[0]._id},
                            // { latitude: -6.258633, longitude: 106.781860, car: dummyCars[0]._id},
                            { latitude: -6.259049, longitude: 106.781876, car: dummyCars[0]._id},
                            // { latitude: -6.260324, longitude: 106.781945, car: dummyCars[0]._id},
                            // { latitude: -6.261045, longitude: 106.782078, car: dummyCars[0]._id},
                            // { latitude: -6.261824, longitude: 106.782486, car: dummyCars[0]._id},
                            // { latitude: -6.264778, longitude: 106.783838, car: dummyCars[0]._id},
                            // { latitude: -6.265082, longitude: 106.783865, car: dummyCars[0]._id},
                            { latitude: -6.266442, longitude: 106.783785, car: dummyCars[0]._id},
                            // { latitude: -6.267562, longitude: 106.783790, car: dummyCars[0]._id},
                            // { latitude: -6.272046, longitude: 106.783083, car: dummyCars[0]._id},
                            // { latitude: -6.274579, longitude: 106.782445, car: dummyCars[0]._id},
                            // { latitude: -6.275579, longitude: 106.782212, car: dummyCars[0]._id},
                            // { latitude: -6.276340, longitude: 106.782008, car: dummyCars[0]._id},
                            // { latitude: -6.277589, longitude: 106.781682, car: dummyCars[0]._id},
                            // { latitude: -6.277881, longitude: 106.781556, car: dummyCars[0]._id},
                            // { latitude: -6.279625, longitude: 106.781056, car: dummyCars[0]._id},
                            { latitude: -6.283320, longitude: 106.780224, car: dummyCars[0]._id},
                            // { latitude: -6.283618, longitude: 106.780233, car: dummyCars[0]._id},
                            //
                            // //TRAYEK 3
                            // { latitude: -6.280595, longitude: 106.772118, car: dummyCars[2]._id },
                            { latitude: -6.280223, longitude: 106.772197, car: dummyCars[2]._id },
                            { latitude: -6.279594, longitude: 106.772283, car: dummyCars[2]._id },
                            // { latitude: -6.254091, longitude: 106.781621, car: dummyCars[2]._id },
                            // { latitude: -6.278929, longitude: 106.772395, car: dummyCars[2]._id },

                            // { latitude: -6.278302, longitude: 106.772500, car: dummyCars[2]._id },
                            // { latitude: -6.277523, longitude: 106.772626, car: dummyCars[2]._id },
                            // { latitude: -6.277019, longitude: 106.772720, car: dummyCars[2]._id },
                            { latitude: -6.275838, longitude: 106.773109, car: dummyCars[2]._id },
                            // { latitude: -6.274622, longitude: 106.773570, car: dummyCars[2]._id },
                            //
                            // { latitude: -6.274481, longitude: 106.773659, car: dummyCars[2]._id },
                            // { latitude: -6.273868, longitude: 106.774142, car: dummyCars[2]._id },
                            // { latitude: -6.272823, longitude: 106.774799, car: dummyCars[2]._id },
                            { latitude: -6.271245, longitude: 106.775268, car: dummyCars[2]._id },
                            // { latitude: -6.270802, longitude: 106.775204, car: dummyCars[2]._id },

                            // { latitude: -6.270143, longitude: 106.775097, car: dummyCars[2]._id },
                            { latitude: -6.270250, longitude: 106.775129, car: dummyCars[2]._id },
                            // { latitude: -6.269549, longitude: 106.774976, car: dummyCars[2]._id },
                            // { latitude: -6.268734, longitude: 106.774984, car: dummyCars[2]._id },
                            // { latitude: -6.268286, longitude: 106.774922, car: dummyCars[2]._id },
                            //
                            // { latitude: -6.267593, longitude: 106.774809, car: dummyCars[2]._id },
                            // { latitude: -6.266377, longitude: 106.774858, car: dummyCars[2]._id },
                            // { latitude: -6.265260, longitude: 106.775065, car: dummyCars[2]._id },
                            { latitude: -6.264647, longitude: 106.775081, car: dummyCars[2]._id },
                            // { latitude: -6.263253, longitude: 106.775105, car: dummyCars[2]._id },

                            // { latitude: -6.261580, longitude: 106.775080, car: dummyCars[2]._id },
                            // { latitude: -6.260883, longitude: 106.775443, car: dummyCars[2]._id },
                            // { latitude: -6.260440, longitude: 106.776505, car: dummyCars[2]._id },
                            // { latitude: -6.257494, longitude: 106.777347, car: dummyCars[2]._id },
                            { latitude: -6.256284, longitude: 106.777419, car: dummyCars[2]._id },
                            //
                            // { latitude: -6.254658, longitude: 106.777395, car: dummyCars[2]._id },
                            { latitude: -6.253410, longitude: 106.777698, car: dummyCars[2]._id },
                            // { latitude: -6.251635, longitude: 106.778192, car: dummyCars[2]._id },
                            // { latitude: -6.250854, longitude: 106.778171, car: dummyCars[2]._id },
                            // { latitude: -6.253391, longitude: 106.775930, car: dummyCars[2]._id },

                            // { latitude: -6.253329, longitude: 106.774798, car: dummyCars[2]._id },
                            // { latitude: -6.253142, longitude: 106.772743, car: dummyCars[2]._id },
                            { latitude: -6.253102, longitude: 106.771724, car: dummyCars[2]._id },
                            // { latitude: -6.253003, longitude: 106.772223, car: dummyCars[2]._id },
                            // { latitude: -6.253072, longitude: 106.773052, car: dummyCars[2]._id },
                            //
                            // { latitude: -6.253112, longitude: 106.773564, car: dummyCars[2]._id },
                            // { latitude: -6.253219, longitude: 106.775012, car: dummyCars[2]._id },
                            { latitude: -6.253342, longitude: 106.776541, car: dummyCars[2]._id },
                            // { latitude: -6.253389, longitude: 106.777110, car: dummyCars[2]._id },
                            // { latitude: -6.254605, longitude: 106.773052, car: dummyCars[2]._id },

                            { latitude: -6.257522, longitude: 106.777495, car: dummyCars[2]._id },
                            // { latitude: -6.258453, longitude: 106.777573, car: dummyCars[2]._id },
                            // { latitude: -6.260106, longitude: 106.777175, car: dummyCars[2]._id },
                            // { latitude: -6.260695, longitude: 106.776200, car: dummyCars[2]._id },
                            { latitude: -6.260746, longitude: 106.775878, car: dummyCars[2]._id },
                            //
                            // { latitude: -6.263322, longitude: 106.775249, car: dummyCars[2]._id },
                            // { latitude: -6.264431, longitude: 106.775260, car: dummyCars[2]._id },
                            { latitude: -6.265303, longitude: 106.775201, car: dummyCars[2]._id },
                            // { latitude: -6.266639, longitude: 106.775011, car: dummyCars[2]._id },
                            // { latitude: -6.267900, longitude: 106.775030, car: dummyCars[2]._id },

                            // { latitude: -6.268828, longitude: 106.775132, car: dummyCars[2]._id },
                            // { latitude: -6.270524, longitude: 106.775278, car: dummyCars[2]._id },
                            { latitude: -6.271516, longitude: 106.775372, car: dummyCars[2]._id },
                            // { latitude: -6.272689, longitude: 106.775018, car: dummyCars[2]._id },
                            // { latitude: -6.273667, longitude: 106.774490, car: dummyCars[2]._id },

                            // { latitude: -6.275074, longitude: 106.773515, car: dummyCars[2]._id },
                            // { latitude: -6.276535, longitude: 106.773032, car: dummyCars[2]._id },
                            { latitude: -6.278935, longitude: 106.772536, car: dummyCars[2]._id },
                            // { latitude: -6.280684, longitude: 106.772287, car: dummyCars[2]._id },
                            // { latitude: -6.280745, longitude: 106.772276, car: dummyCars[2]._id }

                          ]

                          dummyPositions.map((position, idx) => {
                            Position.create(position)
                              .then(created => {
                                dummyPositions[idx]._id = created._id
                                // console.log(created)
                                if (idx == dummyPositions.length-1) {

                                  res.send({
                                    dummyDestinations,
                                    dummyCars,
                                    dummyPositions
                                  })

                                }
                              })
                              .catch(err => console.error(err))
                          })

                        }
                      })
                      .catch(err => console.error(err))
                  })

                }
              })
              .catch(err => console.error(err))
          })

        // }
      })
      .catch(err => console.log(err))
  }
}
