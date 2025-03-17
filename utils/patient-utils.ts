import { PatientInterface } from "@/app/interface/patient";

export const getStatusColor = (status: PatientInterface["status"]) => {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-800";
    case "Due & Paid":
      return "bg-orange-100 text-orange-800";
    case "Due & Unpaid":
      return "bg-red-100 text-red-800";
    case "Assigned":
      return "bg-blue-100 text-blue-800";
    case "Paid":
      return "bg-green-100 text-green-800";
    default:
      return "";
  }
};

export const sortPatients = (patientsToSort: PatientInterface[], sortCriteria: string) => {
  return [...patientsToSort].sort((a, b) => {
    switch (sortCriteria) {
      case "Hospital ID":
        return a.id.localeCompare(b.id);
      case "Patient's Name":
        return a.name.localeCompare(b.name);
      case "Next Delivery Date":
        return a.deliveryDate.localeCompare(b.deliveryDate);
      case "Location":
        return a.location.localeCompare(b.location);
      case "Status":
        return a.status.localeCompare(b.status);
      default:
        return 0;
    }
  });
};