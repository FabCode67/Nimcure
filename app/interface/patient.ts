

export interface PatientInterface {
  id: string
  name: string
  phoneNumber: string
  deliveryDate: string
  location: string
  status: "Completed" | "Due & Paid" | "Due & Unpaid" | "Assigned" | "Paid"
}

