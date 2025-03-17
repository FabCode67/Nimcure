'use client'
import React, { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import QrScanner from "qr-scanner";
import Image from "next/image";

interface StepThreeProps {
    scannedPackages: string[];
    setScannedPackages: (value: string[]) => void;
    patientName: string;
}

type ScanningState = "initial" | "scanning" | "success" | "manual";

const StepThree: React.FC<StepThreeProps> = ({
    scannedPackages,
    setScannedPackages,
    patientName = "Oluwaseun Aregbesola",

}) => {
    const [scanningState, setScanningState] = useState<ScanningState>("initial");
    const [packageCode, setPackageCode] = useState<string>("");
    const [manualCode, setManualCode] = useState<string>("");
    const [scannerError, setScannerError] = useState<string | null>(null);
    const [isSimulation, ] = useState<boolean>(true);

    const videoRef = useRef<HTMLVideoElement | null>(null);
    const scannerRef = useRef<QrScanner | null>(null);
    const simulationTimerRef = useRef<NodeJS.Timeout | null>(null);

    const startScanner = async () => {
        setScanningState("scanning");
        setScannerError(null);

        if (isSimulation) {
            simulationTimerRef.current = setTimeout(() => {
                const mockPackageCode = "5673AD";
                setPackageCode(mockPackageCode);
                setScanningState("success");

                if (!scannedPackages.includes(mockPackageCode)) {
                    setScannedPackages([...scannedPackages, mockPackageCode]);
                }
            }, 2000);
            return;
        }

        if (!videoRef.current) return;

        try {
            if (scannerRef.current) {
                scannerRef.current.destroy();
            }

            const qrScanner = new QrScanner(
                videoRef.current,
                (result) => {
                    const scannedCode = result.data;
                    setPackageCode(scannedCode);
                    setScanningState("success");

                    if (!scannedPackages.includes(scannedCode)) {
                        setScannedPackages([...scannedPackages, scannedCode]);
                    }
                    qrScanner.stop();
                },
                {
                    highlightScanRegion: true,
                    highlightCodeOutline: true,
                    returnDetailedScanResult: true,
                }
            );

            scannerRef.current = qrScanner;
            await qrScanner.start();
        } catch (error) {
            console.error("Error starting QR scanner:", error);
            setScannerError("Could not access camera. Please ensure you've granted camera permissions.");
            setScanningState("initial");
        }
    };

    const handleSubmitCode = () => {
        if (manualCode.trim()) {
            setPackageCode(manualCode.trim());
            setScanningState("success");

            if (!scannedPackages.includes(manualCode.trim())) {
                setScannedPackages([...scannedPackages, manualCode.trim()]);
            }

            setManualCode("");
        }
    };

    const resetScanner = () => {
        setScanningState("initial");
        setPackageCode("");
        setScannerError(null);

        if (simulationTimerRef.current) {
            clearTimeout(simulationTimerRef.current);
            simulationTimerRef.current = null;
        }

        if (scannerRef.current) {
            scannerRef.current.stop();
        }
    };

    const removePackage = (code: string) => {
        setScannedPackages(scannedPackages.filter(pkg => pkg !== code));
        resetScanner();
    };

    useEffect(() => {
        return () => {
            if (simulationTimerRef.current) {
                clearTimeout(simulationTimerRef.current);
            }
            if (scannerRef.current) {
                scannerRef.current.destroy();
            }
        };
    }, []);

    return (
        <Card className="mt-4">
            <CardContent>
                {scanningState === "initial" && (
                    <div className="flex flex-col items-center justify-center p-4">
                        <p className="text-center text-muted-foreground mb-8">
                            Scan a package to assign it to {patientName}
                        </p>
                        <div className="flex flex-row w-full gap-12 mx-auto self-center justify-center items-start mb-8">
                            <div className="flex flex-col items-center">
                                <div className="mb-6 w-[187px] h-[187px] flex items-center justify-center relative">
                                    <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-blue-500"></div>
                                    <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-blue-500"></div>
                                    <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-blue-500"></div>
                                    <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-blue-500"></div>

                                    <div className="w-[147px] h-[147px] flex items-center justify-center">
                                        <Image
                                            height={200}
                                            width={200}
                                            src="/qrcode.svg"
                                            alt="QR code placeholder"
                                            className="opacity-50"
                                        />
                                    </div>
                                </div>

                                <Button
                                    onClick={startScanner}
                                    variant="default"
                                    className="w-48 rounded-none bg-[#276DF7] h-[60px] hover:bg-blue-600"
                                >
                                    Scan Package
                                </Button>

                                {scannerError && (
                                    <p className="text-sm text-red-500 mt-2">{scannerError}</p>
                                )}
                            </div>
                            <div className="flex flex-col items-center justify-center h-[187px]">
                                <div className="text-muted-foreground">OR</div>
                            </div>

                            <div className="flex flex-col items-center justify-center">
                                <div className="h-[187px] mb-6">
                                    <p className="text-sm text-muted-foreground mb-2">Trouble scanning QR Code?</p>
                                    <p className="text-sm text-muted-foreground mb-4">Enter manually</p>

                                    <Input
                                        type="text"
                                        value={manualCode}
                                        onChange={(e) => setManualCode(e.target.value)}
                                        placeholder="Enter Code"
                                        className="w-full mb-4"
                                    />
                                </div>
                                <Button
                                    onClick={handleSubmitCode}
                                    className="w-48 rounded-none text-[#276DF7] border border-[#276DF7] h-[60px] bg-white hover:bg-[#276DF7] hover:text-white"
                                >
                                    Submit Code
                                </Button>
                            </div>
                        </div>
                    </div>
                )}

                {scanningState === "scanning" && (
                    <div className="flex flex-col items-center justify-center p-4">
                        <p className="text-center text-muted-foreground mb-8">
                            Scan a package to assign it to {patientName}
                        </p>
                        <div className="relative w-[220px] h-[220px] flex items-center justify-center mb-8">
                            <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-green-500 z-30"></div>
                            <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-green-500 z-30"></div>
                            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-green-500 z-30"></div>
                            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-green-500 z-30"></div>
                            <div className="absolute left-0 right-0 top-1/6 h-1 z-30" style={{ backgroundColor: "rgba(34, 197, 94, 0.5)" }}></div>
                            <div className="absolute inset-0 top-1/6 z-20" style={{ backgroundColor: "rgba(34, 197, 94, 0.5)" }}></div>

                            <div className="w-[180px] h-[180px] relative z-10">
                                <Image
                                    height={180}
                                    width={180}
                                    src="/qrcode.svg"
                                    alt="QR code being scanned"
                                    className="absolute inset-0 z-10"
                                />

                                <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-white rounded-full z-40"></div>
                                <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-white rounded-full z-40"></div>
                                <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-white rounded-full z-40"></div>
                            </div>
                        </div>

                        <p className="text-center font-medium mb-4">Scanning Package...</p>

                        <Button
                            onClick={resetScanner}
                            variant="outline"
                            className="mt-2"
                        >
                            Cancel
                        </Button>
                    </div>
                )}

                {scanningState === "success" && (
                    <div className="flex flex-col items-center justify-center p-4">
                        <p className="text-center text-muted-foreground mb-8">
                            Scan a package to assign it to {patientName}
                        </p>

                        <div className="w-full max-w-md mb-8">
                            <p className="text-sm text-muted-foreground mb-2">Package Code</p>
                            <div className="flex items-center justify-between bg-muted p-4 rounded">
                                <span className="font-medium text-lg">{packageCode}</span>
                                <Button
                                    onClick={() => removePackage(packageCode)}
                                    variant="ghost"
                                    className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 h-8"
                                >
                                    <X size={16} className="mr-1" /> Remove
                                </Button>
                            </div>
                        </div>

                        <p className="text-green-600 font-medium mb-4">Package successfully scanned</p>

                        <div className="flex justify-between w-full max-w-md mt-4">
                            <Button
                                onClick={resetScanner}
                                variant="outline"
                                className="border-gray-300 text-gray-700"
                            >
                                Back
                            </Button>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default StepThree;