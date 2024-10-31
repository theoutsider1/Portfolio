
interface Control {
    value: number;
    min: number;
    max: number;
}
// Model Control will be used to controll the model using Leva
interface ModelControl {
    rotationX: Control;
    rotationY: Control;
    rotationZ: Control;

    positionX: Control;
    positionY: Control;
    positionZ: Control;

    scale: Control;
}

// wandControlConfig
export const wandControlConfig : ModelControl = {
    rotationX: {
        value : 0,
        min: -10,
        max: 10,
      },
      rotationY: {
        value : -6.6,
        min: -10,
        max: 10,
      },
      rotationZ: {
        value : 0.4,
        min: -10,
        max: 10,
      },
      positionX: {
        value : 0,
        min: -10,
        max: 10,
      },
      positionY: {
        value : -1.9,
        min: -10,
        max: 10,
      },
      positionZ: {
        value : -5.5,
        min: -10,
        max: 10,
      },
      scale : {
        value: 0.2,
        min: 0.1,
        max: 10,
    }
}
