import { useEffect, useState } from "react";

const useIsMobile = (breakpoint = 767) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    checkIsMobile(); // Verificar o estado inicial ao carregar o componente

    // Adicionar um listener para atualizar o estado quando o tamanho da janela mudar
    window.addEventListener("resize", checkIsMobile);

    // Remover o listener quando o componente for desmontado
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
