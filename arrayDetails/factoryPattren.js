class FactoryPattren{
    createVehicle() {
        throw new Error("Create Vehicle must be Overriden")
    }
    assembly() {
        const vehicle = this.createVehicle();
        console.log(`Assemblying ${vehicle.type}`)
        return vehicle;
    }
}
class CarFactory extends FactoryPattren{
    createVehicle() {
        return new CarFactory("Sudan")
    }
}

