
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
        value: 0.35,
        // min: 0,
        // max: 2,
    },
      desktop:{
        value: 0,
        // min: 0,
        // max: 2,
  }}
}
