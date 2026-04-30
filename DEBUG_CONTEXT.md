# Guia de Debug: Falha de WebSocket (HMR) no Next.js 16

Este documento foi criado para fornecer o contexto técnico necessário para diagnosticar e resolver os erros de conexão WebSocket que você está observando no console do navegador durante o `npm run dev`.

## 🔍 Entendendo o Erro

A mensagem `WebSocket connection to 'ws://10.2.21.194:3000/_next/webpack-hmr' failed` indica que o **Hot Module Replacement (HMR)** do Next.js não consegue se comunicar com o servidor de desenvolvimento. 

O HMR é responsável por atualizar o navegador instantaneamente quando você salva um arquivo, sem recarregar a página inteira.

---

## 🚦 Possíveis Causas

### 1. Detecção de Interface de Rede (IP 10.x.x.x)
O Next.js 16 detectou seu IP interno da rede local (`10.2.21.194`) e informou ao navegador para se conectar via esse endereço. 
- **O Problema**: Se houver um firewall, VPN ou se o roteamento local estiver restrito, o navegador (mesmo na mesma máquina) pode ser impedido de abrir uma conexão WebSocket para esse IP específico, embora o acesso via `localhost` funcione.

### 2. Turbopack (Next.js 16 Default)
O Next.js 16 usa o **Turbopack** por padrão. O Turbopack gerencia as conexões HMR de forma ligeiramente diferente do Webpack clássico. Em alguns ambientes Windows, a detecção automática do hostname do WebSocket pode falhar ou apontar para a interface errada.

### 3. Firewall do Windows / Antivírus
Firewalls corporativos ou o Windows Defender podem bloquear conexões de entrada na porta 3000 para IPs que não sejam o `127.0.0.1` (loopback).

---

## 🛠️ Passos para Resolução

### Passo 1: Forçar Host Local
Tente acessar a aplicação especificamente via `http://localhost:3000` em vez de usar o IP sugerido no terminal. Isso geralmente força o WebSocket a tentar o `localhost` também.

### Passo 2: Testar sem Turbopack
Para isolar se o problema é o novo motor Turbopack, tente rodar o servidor usando o Webpack clássico:
```bash
npx next dev --webpack
```
*Se as mensagens de erro pararem, o problema está na configuração de rede do Turbopack.*

### Passo 3: Configurar Host Manualmente
Inicie o servidor forçando a escuta em todas as interfaces, o que às vezes ajuda na negociação do WebSocket:
```bash
npm run dev -- -H 0.0.0.0
```

### Passo 4: Limpeza de Cache
Às vezes, estados antigos do Turbopack causam loops de reconexão:
1. Pare o `npm run dev`.
2. Delete a pasta `.next`.
3. Rode `npm run dev` novamente.

---

## 📝 Resumo do Ambiente Atual
- **Framework**: Next.js 16.2.1
- **Motor**: Turbopack (padrão)
- **Protocolo HMR**: WebSocket (`ws://`)
- **Porta**: 3000
- **Contexto de Rede Detectado**: 10.2.21.194
