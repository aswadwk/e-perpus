import { useModal } from "./LoginContext";
import { ModalLogin } from "./LoginModal";

export function ModalLoginWrapper() {
  const { isLoginModalOpen, closeLoginModal } = useModal();

  const handleLogin = (email: string, password: string) => {
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
