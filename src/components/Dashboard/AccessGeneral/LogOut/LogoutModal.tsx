"use client";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface LogoutModalProps {
    open: boolean;
    onClose: () => void;
    onLogout: () => void;
}

export function LogoutModal({ open, onClose, onLogout }: LogoutModalProps) {
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="bg-black text-white p-6 rounded-md">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Confirmación de Cierre de Sesión</DialogTitle>
                    <DialogDescription className="mt-2 text-lg">¿Estás seguro de que deseas cerrar sesión?</DialogDescription>
                </DialogHeader>
                <DialogFooter className="mt-4 flex justify-end">
                    <Button variant="outline" className="mr-4 border-gray-500 text-gray-500" onClick={onClose}>
                        Cancelar
                    </Button>
                    <Button variant="outline" className="bg-yellow-500 text-white hover:bg-yellow-600" onClick={onLogout}>
                        Cerrar Sesión
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
