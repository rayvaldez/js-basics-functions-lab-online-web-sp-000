// Code your solution in this file!
function distanceFromHqInBlocks(value) {
  const hQ = 42

  let distance;

  if (value > hQ) {
    distance = value - hQ;
  } else if (value < hQ) {
    distance = hQ - value;
  }

  return distance
}

function distanceFromHqInFeet(value) {
  const block = 264

  let feet;

  feet = block * (distanceFromHqInBlocks(value))

  return feet;
}

function distanceTravelledInFeet(a, b) {
  let feet;

  const block =
    (a > b) ? a % b : b % a;

  feet = block * 264

  return feet
}

function calculatesFarePrice(a, b) {
  const block = 264

  let price;

  if (distanceTravelledInFeet(a,b) < 400) {
    price = 0;
  } else if (distanceTravelledInFeet(a,b) < 2000) {
    price = (distanceTravelledInFeet(a,b) - 400) * 0.02
  } else if (distanceTravelledInFeet(a,b) < 2500) {
    price = 25;
  } else {
    price = 'cannot travel that far';
  }

  return price;
}
