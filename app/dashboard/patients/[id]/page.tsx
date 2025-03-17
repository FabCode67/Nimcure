"use client";

import PatientContent from "@/components/customs/reder-profile";
import PatientHeader from "@/components/customs/single-patient-header";
import DashboardLayout from "@/components/layout/DashboardLayout";


export default function PatientView() {
    return (
        <DashboardLayout>
            <PatientHeader />
            <PatientContent />
        </DashboardLayout>
    );
}