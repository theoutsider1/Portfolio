
interface Control {
    value: number;
    // min: number;
    // max: number;
}

interface DeviceValues {
  mobile:Control,
  desktop:Control ,
}
// Model Control will be used to controll the model using Leva
interface ModelControl {
    rotationX: DeviceValues;
    rotationY: DeviceValues;
    rotationZ: DeviceValues;

    positionX: DeviceValues;
    positionY: DeviceValues;
    positionZ: DeviceValues;

    scale: DeviceValues;
}

// wand controller
// export const wandControlConfig : ModelControl = {
//     rotationX: {
//       mobile:{
//                 value : 2.8,
//                 min: -10,
//                 max: 10},
//       desktop:{
//                 value : 2.8,
//                 min: -10,
//                 max: 10},
//               },

//       rotationY:{
//         mobile: {
//                 value : 0,
//                 min: -10,
//                 max: 10,
//               },
//         desktop:{
//                 value : 0,
//                 min: -10,
//                 max: 10,
//               }},

//       rotationZ:{
//         mobile: {
//                 value : -1.4,
//                 min: -10,
//                 max: 10,
//               },
//         desktop: {
//                 value : -1.4,
//                 min: -10,
//                 max: 10,
//               },
//             },
//       positionX:{
//         mobile: {
//                 value : -1.2,
//                 min: -10,
//                 max: 10,
//       },
//         desktop: {
//                 value : -1.2,
//                 min: -10,
//                 max: 10,}
//               },
//       positionY:{
//         mobile: {
//                 value : 0.3,
//                 min: -10,
//                 max: 10,
//               },
//         desktop: {
//                 value : 0.3,
//                 min: -10,
//                 max: 10,
//               },
//             },
//       positionZ:{
//         mobile: {
//                 value : -1.5,
//                 min: -10,
//                 max: 10,
//               },
//       desktop: {
//                 value : -1.5,
//                 min: -10,
//                 max: 10,
//               },
//             },
//       scale :{ 
//         mobile:{
//           value: 0.02,
//           min: 0.02,
//           max: 0.02,
//       },
//         desktop:{
//           value: 0.02,
//           min: 0.02,
//           max: 0.02,
//     }}
// }
export const wandControlConfig : ModelControl = {
  rotationX: {
    mobile:{
              value : 0.5,
              // min: -10,
              // max: 10
            },
    desktop:{
              value : 0.5,
              // min: -10,
              // max: 10
            },
            },

    rotationY:{
      mobile: {
              value : 0,
              // min: -10,
              // max: 10,
            },
      desktop:{
              value : 1,
              // min: -10,
              // max: 10,
            }},

    rotationZ:{
      mobile: {
              value : 1,
              // min: -10,
              // max: 10,
            },
      desktop: {
              value : 1,
              // min: -10,
              // max: 10,
            },
          },
    positionX:{
      mobile: {
              value : 0,
              // min: -10,
              // max: 10,
    },
      desktop: {
              value : 0,
              // min: -10,
              // max: 10,
            }
            },
    positionY:{
      mobile: {
              value : 0,
              // min: -10,
              // max: 10,
            },
      desktop: {
              value : 0,
              // min: -10,
              // max: 10,
            },
          },
    positionZ:{
      mobile: {
              value : 0.5,
              // min: -10,
              // max: 10,
            },
    desktop: {
              value : -5,
              // min: -10,
              // max: 10,
            },
          },
    scale :{ 
      mobile:{
        value: 0.5,
        // min: 0,
        // max: 2,
    },
      desktop:{
        value: 0.4,
        // min: 0,
        // max: 2,
  }}
}
// Crystall ball controller
// export const crystallBallControlConfig : ModelControl = {
//     rotationX: {
//         value : 0.6,
//         min: -10,
//         max: 10,
//       },
//       rotationY: {
//         value : -7.8,
//         min: -10,
//         max: 10,
//       },
//       rotationZ: {
//         value : 0.4,
//         min: -10,
//         max: 10,
//       },
//       positionX: {
//         // value : 1.9,
//         value : 0,
//         min: -10,
//         max: 10,
//       },
//       positionY: {
//         value : -0.4,
//         min: -10,
//         max: 10,
//       },
//       positionZ: {
//         // value : -3,
//         value : -2,
//         min: -10,
//         max: 10,
//       },
//       scale : {
//         value: 0.2,
//         min: 0.1,
//         max: 10,
//     }
// }


