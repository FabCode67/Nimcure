"use client"

import DashboardLayout from '@/components/layout/DashboardLayout';
import AddPatientSection from '@/components/customs/add-patient-section';
import PatientManagementPage from '@/components/customs/patient-table';

export default function PatientsPage() {

  return (
    <DashboardLayout>
      <div className="w-full">
       <AddPatientSection />
      <PatientManagementPage />
      </div>
    </DashboardLayout>
  );
}