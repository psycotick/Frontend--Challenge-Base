"use client";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { User } from "lucide-react";
import { useState, useEffect } from "react";
import { AccessGeneral } from "../AccessGeneral/AccessGeneral";
import { LogoutModal } from "../AccessGeneral/LogOut/LogoutModal";

export function ButtonAccess() {
    const [openDialog, setOpenDialog] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [openLogoutModal, setOpenLogoutModal] = useState(false);

    useEffect(() => {
        // Verifica si hay un token guardado en el localStorage
        const token = localStorage.getItem("authToken");
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleButtonClick = () => {
        if (isLoggedIn) {
            // Abrir el modal de cierre de sesión
            setOpenLogoutModal(true);
        } else {
            // Abrir el diálogo de inicio de sesión
            setOpenDialog(true);
        }
    };

    const handleLogout = () => {
        // Cerrar sesión: eliminar el token del localStorage y restablecer el estado
        localStorage.removeItem("authToken");
        setIsLoggedIn(false);
        setOpenLogoutModal(false);
    };

    return (
        <>
            <Button
                variant="outline"
                className={`flex items-center justify-center w-8 h-8 ${isLoggedIn ? 'bg-yellow-500' : 'bg-black'} rounded-full border-2 border-white`}
                onClick={handleButtonClick}
            >
                <User className="text-white" strokeWidth={1.5} />
            </Button>

            <Dialog open={openDialog} onOpenChange={(isOpen) => setOpenDialog(isOpen)}>
                {openDialog && (
                    <DialogContent className="bg-transparent bg-opacity-24 backdrop-blur-3xl p-6 rounded-lg border border-gray-500 w-full h-full max-w-none max-h-none">
                        <DialogHeader>
                            <DialogTitle></DialogTitle>
                            <DialogDescription asChild>
                                <div>
                                    <AccessGeneral setOpenDialog={setOpenDialog} setIsLoggedIn={setIsLoggedIn} />
                                </div>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                )}
            </Dialog>

            <LogoutModal
                open={openLogoutModal}
                onClose={() => setOpenLogoutModal(false)}
                onLogout={handleLogout}
            />
        </>
    );
}
