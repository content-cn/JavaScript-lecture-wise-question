
        function main(){
        function Shipment(id, location, destination, status, resources) {
          this.id = id;
          this.location = location;
          this.destination = destination;
          this.status = status;
          this.resources = resources || [];
        }
      
        Shipment.prototype.updateStatusAndResources = function (
          newStatus,
          newResources
        ) {
          this.status = newStatus;
          this.resources = newResources;
        };
      
        Shipment.prototype.assignResources = function (...assignedResources) {
          this.resources.push(...assignedResources);
        };
      
        const TrackingSystem = {
          shipments: [],
      
          updateStatus: function (id, newStatus) {
            const shipment = this.shipments.find((shipment) => shipment.id === id);
            if (shipment) {
              shipment.status = newStatus;
            }
          },
      
          viewShipment: function (id) {
            const shipment = this.shipments.find((shipment) => shipment.id === id);
            if (shipment) {
              const {
                id: shipmentId,
                status,
                resources,
                location,
                destination
              } = shipment;
              console.log(`
              Shipment ID: ${shipmentId}
              Status: ${status}
              Resources: ${resources.join(", ")}
              Location: ${location}
              Destination: ${destination}
            `);
            }
          }
        };
      
        return {Shipment,TrackingSystem};        
}
      