"use client";

import { Employee } from "@/entitites";
import { Modal, ModalContent, ModalBody, useDisclosure, Image } from "@heroui/react";
import { ReactNode } from "react";

export default function CreateUser({ children, photo }: { children: ReactNode, photo: string }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Image src={photo} isZoomed className="object-cover max-h-60 p-1" classNames={{ img: "size-full", }} onClick={onOpen}></Image>
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
