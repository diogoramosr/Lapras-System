import React from "react";
import { io } from "socket.io-client";
import { v4 } from "uuid";
import { useState, useEffect } from "react";

const porta = 3001;
const socket = io(`http://localhost:${porta}`);

const Chat = () => {
  const [nome, setNome] = useState("");
  const [sala, setSala] = useState("");
  const [novaMensagem, setnovaMensagem] = useState("");
  const [mensagens, setMensagens] = useState([]);
  const [estaConectado, setEstaConectado] = useState(socket.connected);
  const [chatvisivel, setChatVisivel] = useState(false);

  useEffect(() => {
    console.log("Conectado: " + socket.connected);
    socket.on("connect", () => {
      setEstaConectado(true);
    });

    socket.on("disconnect", () => {
      setEstaConectado(false);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, [estaConectado]);

  useEffect(() => {
    socket.on("recebeu_mensagem", ({ nome, mensagem }) => {
      const newMessage = `${nome} enviou: ${mensagem}`;
      setMensagens((prevState) => [newMessage, ...prevState]);
    });
  }, [socket]);

  const entrarNaSala = () => {
    if (nome !== "" && sala !== "") {
      setChatVisivel(true);
      socket.emit("entrou_na_sala", { sala, nome });
    }
  };

  const enviarMensagem = () => {
    const messageModel = {
      sala: sala,
      nome: nome,
      mensagem: novaMensagem,
    };
    socket.emit("enviou_mensagem", messageModel);
    const newMessage = `${nome} enviou: ${messageModel}`;
    //setMensagens((mensagens) => [...mensagens, newMessage]);
    setMensagens((prevState) => [newMessage, ...prevState]);
    setnovaMensagem("");
  };

  return (
    <div className="py-5 flex flex-col gap-2 justify-center items-center bg-slate-600 ">
      {!chatvisivel ? (
        <>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="text"
            placeholder="Sala"
            value={sala}
            onChange={(e) => setSala(e.target.value)}
          />
          <button className="pl-5" onClick={entrarNaSala}>
            Entrar
          </button>
        </>
      ) : (
        <>
          <h5>
            Sala : {sala} || Nome : {nome}
          </h5>
          <div className="h-52 w-64 border-solid border-x-stone-50 mb-3 py-3">
            {mensagens.map((el) => (
              <div key={v4()}>{el}</div>
            ))}
          </div>

          <input
            type="text"
            placeholder="Mensagem"
            value={novaMensagem}
            onChange={(e) => setnovaMensagem(e.target.value)}
          />
          <button onClick={enviarMensagem}>Enviar</button>
        </>
      )}
    </div>
  );
};

export default Chat;
