'use client'

import React, { useState } from "react";

export default function Copy() {

    const [textToCopy, setTextToCopy] = useState("Texto a ser copiado");

    function copyToClipboard() {
        navigator.clipboard.writeText(textToCopy).then(() => {
        console.log("Texto copiado para a área de transferência");
        }).catch((err) => {
        console.log("Falha ao copiar o texto", err);
        });
    }

    return (
        <div>
          <input type="text" value={textToCopy} onChange={(e) => setTextToCopy(e.target.value)} />
          <button onClick={copyToClipboard}>Copiar para Área de Transferência</button>
        </div>
      );
}