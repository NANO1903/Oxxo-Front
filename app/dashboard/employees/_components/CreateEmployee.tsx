"use client";

import { Modal, ModalContent, ModalBody, Button, useDisclosure } from "@heroui/react";
import { ReactNode } from "react";

export default function CreateEmployee({ children, icon }: { children: ReactNode, icon: ReactNode }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button className="w-fit max-h-[55px] min-h-[55px]" color="primary" onPress={onOpen}>{icon}</Button>
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
