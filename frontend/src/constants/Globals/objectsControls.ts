
interface Control {
    value: number;
    min: number;
    max: number;
}

interface ModelControl {
    rotationX: Control;
    rotationY: Control;
    rotationZ: Control;

    positionX: Control;
    positionY: Control;
    positionZ: Control;

    scale: Control;
}

