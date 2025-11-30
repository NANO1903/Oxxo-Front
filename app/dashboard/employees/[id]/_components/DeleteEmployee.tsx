"use client";

import { Modal, ModalContent, ModalBody, Button, useDisclosure } from "@heroui/react";
import { ReactNode } from "react";
import { LuTrash2 } from "react-icons/lu";

export default function DeleteEmployee({ children }: { children: ReactNode }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button className="bg-red-600 text-white w-[65%]" onPress={onOpen}><LuTrash2 size="20" /></Button>
            <Modal className="bg-orange-300" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody>
                                {children}
                                <Button onPress={onClose} className="font-medium bg-neutral-400">Cancelar</Button>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
