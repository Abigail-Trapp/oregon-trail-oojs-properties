function Traveler(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
}
function Wagon(capacity) {
    this.capacity = capacity;
    this.passengers = [];
}
// Prototype functions here!
Traveler.prototype.hunt = function () {
    return this.food += 2
}
Traveler.prototype.eat = function () {
    if (this.food <= 0) {
        this.isHealthy = false
        return this.food
    }
    return this.food -= 1
}
Wagon.prototype.getAvailableSeatCount = function () {
    let availability = this.capacity - this.passengers.length
    return availability
}
Wagon.prototype.join = function (Traveler) {
    if (this.getAvailableSeatCount() >= 1) {
        this.passengers.push(Traveler)
        console.log(`${Traveler.name} is boarding!`)
    } else {
        console.log("Wagon is full!")
    }

}
Wagon.prototype.shouldQuarantine = function () {
    for (let i = 0; i < this.passengers.length; i++) {
        let traveler = this.passengers[i]
        if (traveler.isHealthy === false) {
            return true
        }
    }
    return false
}
Wagon.prototype.totalFood = function () {
    let foodTotal = 0
    for (let i = 0; i < this.passengers.length; i++) {
        let travelerFood = this.passengers[i].food
        return foodTotal += travelerFood
    }
}