"use client";

import { Modal, ModalContent, ModalBody, Button, useDisclosure } from "@heroui/react";
import { ReactNode } from "react";
import { LuPencil } from "react-icons/lu";

export default function UdpdateLocation({ children }: { children: ReactNode }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button color="primary" onPress={onOpen}><LuPencil size="20" /></Button>
            <Modal className="bg-orange-400" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {() => (
                        <>
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
