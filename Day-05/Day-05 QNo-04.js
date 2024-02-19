//---------------------------------Day-05 QNo-04----------------------------------------
//--------------------write a class to calculate the Uber price------------------------

class UberPrice {
  constructor(fixCharge = 50, perKm, tollCharges = false) {
    this.fixCharge = fixCharge;
    this.perKm = perKm;
    this.tollCharges = tollCharges;
  }

  set setDistanceTravelled(distance) {
    this.distance = distance;
  }

  get getDistanceTravelled() {
    return this.distance;
  }

  totalBillGenerated() {
    return (
      this.getDistanceTravelled * this.perKm +
      this.fixCharge +
      (this.tollCharges === true ? 200 : 0)
    );
  }
}

let user_01 = new UberPrice(undefined, 12);
let user_02 = new UberPrice(undefined, 14, true);

user_01.setDistanceTravelled = 10;
console.log(user_01.totalBillGenerated());

user_02.setDistanceTravelled = 26;
console.log(user_02.totalBillGenerated());
