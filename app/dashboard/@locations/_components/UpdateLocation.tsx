"use client";

import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure } from "@heroui/react";
import { ReactNode } from "react";
import { LuPencil } from "react-icons/lu";

export default function UdpdateLocation({ children }: { children: ReactNode }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button color="primary" onPress={onOpen}><LuPencil size="20" /></Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {() => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Editar Tienda</ModalHeader>
                            <ModalBody>
                                {children}
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
