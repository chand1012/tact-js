export interface DotPoint {
  index: number;
  intensity: number;
}

export interface PathPoint {
  x: number;
  y: number;
  intensity: number;
}


export interface ScaleOption {
  intensity: number;
  duration: number;
}


export interface RotationOption {
  offsetAngleX: number;
  offsetY: number;
}


export enum PositionType {
  VestFront = 'VestFront',
  VestBack = 'VestBack',
  Head = 'Head',
  ForearmL = 'ForearmL',
  ForearmR = 'ForearmR',
}


export enum ErrorCode {
  SUCCESS,
  MESSAGE_NOT_DEFINED,
  CONNECTION_NOT_ESTABLISHED,
  FAILED_TO_SEND_MESSAGE,
  MESSAGE_INVALID,
  MESSAGE_INVALID_DURATION_MILLIS,

  MESSAGE_INVALID_INDEX,
  MESSAGE_INVALID_INTENSITY,
  MESSAGE_INVALID_X,
  MESSAGE_INVALID_Y,
  MESSAGE_INVALID_ROTATION_X,
  MESSAGE_INVALID_ROTATION_Y,
}

