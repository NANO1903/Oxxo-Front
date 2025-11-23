"use client";

import { Modal, ModalContent, ModalBody, Button, useDisclosure } from "@heroui/react";
import { ReactNode } from "react";
import { LuPlus } from "react-icons/lu";

export default function AddProvider({ children }: { children: ReactNode }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button className="w-fit" color="primary" onPress={onOpen}><LuPlus size="20" /></Button>
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
