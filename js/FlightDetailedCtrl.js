flightinfoApp.controller('FlightDetailedCtrl', function ($scope, InfoService) {
  $scope.flightInfo = InfoService.getFilter();
  $scope.message = InfoService.messageDisplay();

//   $scope.flightInfo = [
// {    'Flight': 'AC997',
//      'leaving': 0910,
//      'returning:': 1030,
//      'price': 2000,
//      'Air_line': 'Air Canada',
//      'image': 'AirCanada.png',

//       airPortL : 'YVR ',
//       airPortR : 'HKG ',

//      'leavingFlightNo': 'AC999',
//      'departLocationL' : 'Vanvouer',
//      'arriveLocationL' : 'Hong Kong',
//      'arrivelTimeL': 1745,

//      'returningFlightNo' : 'AC979',
//      'departLocationR' : 'Hong Kong',
//      'arriveLocationR' : 'Vanvouer',
//      'arrivelTimeR': 1025

//    },
//     {'Flight': 'DL4849',
//      'leaving': 1010,
//      'returning': 1030,
//      'price': 1900,
//      'Air_line': 'Delta Air Lines',
//      'image': 'Delta.png',

//       airPortL : 'YVR ',
//       airPortR : 'HKG ',

//      'leavingFlightNo': 'DL4849',
//      'departLocationL' : 'Vanvouer',
//      'arriveLocationL' : 'Hong Kong',
//      'arrivelTimeL': 1245,

//      'returningFlightNo' : 'DL9379',
//      'departLocationR' : 'Hong Kong',
//      'arriveLocationR' : 'Vanvouer',
//      'arrivelTimeR': 1025
//    },
//    {'Flight': 'WS3255',
//      'leaving': 1010,
//      'returning': 1030,
//      'price': 2100,
//      'Air_line': 'WestJet',
//      'image': 'WestJet.png',

//        airPortL : 'YVR ',
//       airPortR : 'HKG ',

//      'leavingFlightNo': 'Ws3255',
//      'departLocationL' : 'Vanvouer',
//      'arriveLocationL' : 'Hong Kong',
//      'arrivelTimeL': 1745,

//      'returningFlightNo' : 'Ws3479',
//      'departLocationR' : 'Hong Kong',
//      'arriveLocationR' : 'Vanvouer',
//      'arrivelTimeR': 1025
//    },
//     {'Flight': 'CX838',
//      'leaving': 1940,
//      'returning': 1030,
//      'snippet': 'The Next, Next Generation tablet.',
//      'price': 2800,
//      'Air_line': 'Cathay Pacific Airways',
//      'image': 'CathayPacific.png',


//       airPortL : 'YVR ',
//       airPortR : 'HKG ',

//      'leavingFlightNo': 'CX839',
//      'departLocationL' : 'Vanvouer',
//      'arriveLocationL' : 'Hong Kong',
//      'arrivelTimeL': 2145,

//      'returningFlightNo' : 'CX888',
//      'departLocationR' : 'Hong Kong',
//      'arriveLocationR' : 'Vanvouer',
//      'arrivelTimeR': 1025
//    }
//   ];


  $scope.inputDepartLocation = String(InfoService.getFromInfo()).split("-")[0];
  $scope.inputArriveLocation = String(InfoService.getDestinationInfo()).split("-")[0];
 
  $scope.inputLeavingTime = InfoService.getLeavingInfo();
  $scope.inputReturningTime = InfoService.getReturningInfo();

  $scope.orderProp = 'Air_line';
  $scope.orderProp = 'leaving';
  $scope.orderProp = 'price';

  $scope.prices = [
    { 'name' : 'CAN - Canadian',
      'value'  : 0
    },
    {
      'name' : 'USD - US dollor',
      'value' : 0
    },
    {
      'name' : 'HKD Hong Kong Dollar',
      'value' : 0
    }
  ];

});