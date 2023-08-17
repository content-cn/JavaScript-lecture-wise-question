// require('text-encoding').TextEncoder;
import "@testing-library/jest-dom/extend-expect";
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

let dom;
let document;
let window;
let main;
describe("The final code should be working", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
  });
  test('updating shipment through TrackingSystem', () => {
    const {Shipment,TrackingSystem} = main();
    const shipment1 = new Shipment(
      "12345",
      "New York",
      "Los Angeles",
      "En route",
      ["Driver", "Truck"]
    );
    shipment1.updateStatusAndResources("Delayed", ["Forklift"]);
    shipment1.assignResources("Worker", "Pallets");

    const shipment2 = new Shipment("67890", "Chicago", "Miami", "In transit", [
      "Forklift"
    ]);

    TrackingSystem.shipments.push(shipment1, shipment2);
    TrackingSystem.updateStatus("12345", "Delivered");


    expect(shipment1.status).toBe("Delivered");
  });
});
describe("cheking the Shipment constructor", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
  });
  test('checking if Shipment is properly defined',()=>{
    const {Shipment,TrackingSystem} = main();
    expect(Shipment).toBeDefined();
  });
  test('checking the working of updateStatusAndResources and assignResources',()=>{
    const {Shipment,TrackingSystem} = main();
    const shipment1 = new Shipment(
      "12345",
      "New York",
      "Los Angeles",
      "En route",
      ["Driver", "Truck"]
    );
    shipment1.updateStatusAndResources("Delayed", ["Forklift"]);
    shipment1.assignResources("Worker", "Pallets");
    expect(shipment1.status).toBe("Delayed");
    expect(shipment1.resources.length).toBe(3);

  })
});
describe("checking the TrackingSystem", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;

  });
  test('cheking if Shipment array is defined in TrackingSystem',()=>{
    const {Shipment,TrackingSystem} = main();
    const shipment1 = new Shipment(
      "12345",
      "New York",
      "Los Angeles",
      "En route",
      ["Driver", "Truck"]
    );
    shipment1.updateStatusAndResources("Delayed", ["Forklift"]);
    shipment1.assignResources("Worker", "Pallets");

    const shipment2 = new Shipment("67890", "Chicago", "Miami", "In transit", [
      "Forklift"
    ]);

    TrackingSystem.shipments.push(shipment1, shipment2);
    TrackingSystem.updateStatus("12345", "Delivered");


    expect(TrackingSystem).toBeDefined();
  });
  test('checking the working of updateStatus with TrackingSystem',()=>{
    const {Shipment,TrackingSystem} = main();
    const shipment1 = new Shipment(
      "12345",
      "New York",
      "Los Angeles",
      "En route",
      ["Driver", "Truck"]
    );
    shipment1.updateStatusAndResources("Delayed", ["Forklift"]);
    shipment1.assignResources("Worker", "Pallets");

    const shipment2 = new Shipment("67890", "Chicago", "Miami", "In transit", [
      "Forklift"
    ]);

    TrackingSystem.shipments.push(shipment1, shipment2);
    TrackingSystem.updateStatus("12345", "Delivered");

  expect(TrackingSystem.shipments.length).toBe(2)
  })
  test('checking the working of viewShipment',()=>{
    const {Shipment,TrackingSystem} = main();
    const shipment1 = new Shipment(
      "12345",
      "New York",
      "Los Angeles",
      "En route",
      ["Driver", "Truck"]
    );
    shipment1.updateStatusAndResources("Delayed", ["Forklift"]);
    shipment1.assignResources("Worker", "Pallets");

    const shipment2 = new Shipment("67890", "Chicago", "Miami", "In transit", [
      "Forklift"
    ]);

    TrackingSystem.shipments.push(shipment1, shipment2);
    TrackingSystem.updateStatus("12345", "Delivered");

    expect(TrackingSystem.viewShipment).toBeDefined();
  })
});
