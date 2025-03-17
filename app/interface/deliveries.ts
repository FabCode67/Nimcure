
export  interface DeliveryInterface {
  id: string;
  packageCode: string;
  deliveryDate: string;
  patientName: string;
  phoneNumber: string;
  location: string;
  status: 'paid' | 'unpaid' | 'pending' | 'successful' | 'failed';
}
