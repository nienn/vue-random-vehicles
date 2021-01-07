# A Vue Project

A very simple vue project that displays a list of 50 random vehicles with stats and drivers.  
Some features:

- SCSS;
- Faker.js;
- Responsive Layout;
- Vehicle array stored in **Session Storage** for up to **30 min**
- Filters:
    - Vehicles with insurance;
    - Vehicles without insurance;
    - Odometer > 75.000km;
    - Odometer >= 130.000km;
    - Odometer > 250.000km;
    - Vehicle without driver;


## Objective

Create a method that returns an array with 50 vehicles, with the following criteria:

- ID (GUID);
- driverName;
- licensePlate;
- manufacturer;
- acquisitionDate;
- odometer;
- hasInsurance;
- dateNextInspection;