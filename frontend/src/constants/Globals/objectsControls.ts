
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

// wand controller
export const wandControlConfig : ModelControl = {
    rotationX: {
        value : 2.8,
        min: -10,
        max: 10,
      },
      rotationY: {
        value : 0,
        min: -10,
        max: 10,
      },
      rotationZ: {
        value : -1.4,
        min: -10,
        max: 10,
      },
      positionX: {
        value : -1.2,
        min: -10,
        max: 10,
      },
      positionY: {
        value : 0.3,
        min: -10,
        max: 10,
      },
      positionZ: {
        value : -1.5,
        min: -10,
        max: 10,
      },
      scale : {
        value: 0.02,
        min: 0.02,
        max: 0.02,
    }
}

// Crystall ball controller
export const crystallBallControlConfig : ModelControl = {
    rotationX: {
        value : 0.6,
        min: -10,
        max: 10,
      },
      rotationY: {
        value : -2.6,
        min: -10,
        max: 10,
      },
      rotationZ: {
        value : 0.4,
        min: -10,
        max: 10,
      },
      positionX: {
        value : -8,
        min: -10,
        max: 10,
      },
      positionY: {
        value : -1.3,
        min: -10,
        max: 10,
      },
      positionZ: {
        value : -4.5,
        min: -10,
        max: 10,
      },
      scale : {
        value: 0.2,
        min: 0.1,
        max: 10,
    }
}
