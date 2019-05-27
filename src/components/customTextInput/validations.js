export const notEmpty = value => (!value || value.length === 0) && 'required';
export const greaterThanZero = value =>
  (!value || value <= 0) && 'must be positive';
