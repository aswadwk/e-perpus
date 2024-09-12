"use client";

import { useModal } from "./LoginContext";
import { ModalLogin } from "./LoginModal";

export function ModalLoginWrapper() {
  const { isLoginModalOpen, closeLoginModal } = useModal();

  const handleLogin = (email: string, password: string) => {
    // Implement your login logic here
    console.log("Login attempt with:", email, password);
    closeLoginModal();
  };

  return (
    <ModalLogin
      isOpen={isLoginModalOpen}
      onClose={closeLoginModal}
      onLogin={handleLogin}
    />
  );
}
