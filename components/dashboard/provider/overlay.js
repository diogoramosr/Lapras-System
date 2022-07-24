// VOU TENTAR ENCAIXAR ESSE OVERLAY, ELE BASICAMENTE NÃO DEIXA CLICAR EM
// NADA QUANDO O SIDEBAR ESTAR ABERTO, ISSO COLOCANDO W-SCREEN NO STYLE.

import React, { useToggle } from './context';

const style = {
  overlay: `bg-black fixed h-screen left-0 opacity-40 top-0 z-30 lg:bg-transparent`,
};

// Sobreposição visível somente nas telas pequenas.
export default function Overlay() {
  const { open } = useToggle();
  return <div className={open ? style.overlay : ''} />;
}