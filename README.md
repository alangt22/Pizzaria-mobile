# Mobile - Sujeito Pizza

Aplicativo mobile para atendimento de pizzaria (garçom/atendente).

## Stack

- **Framework**: Expo (React Native)
- **Linguagem**: TypeScript
- **Navegação**: React Navigation (Native Stack)
- **HTTP Client**: Axios
- **Armazenamento**: AsyncStorage
- **Ícones**: @expo/vector-icons

## Funcionalidades

### Autenticação
- Login de usuários
- Sessão persistida com AsyncStorage

### Dashboard
- Abertura de mesas
- Criação de novos pedidos

### Pedidos
- Adicionar produtos ao pedido
- Selecionar categoria de produtos
- Visualizar itens do pedido
- Remover itens
- Finalizar pedido

### Fluxo de Trabalho
1. Garçom abre mesa (número da mesa)
2. Seleciona produtos por categoria
3. Adiciona itens ao pedido
4. Enviado para cozinha
5. Finaliza pedido

## Estrutura

```
src/
├── components/           # Componentes reutilizáveis
├── contexts/            # Contextos (Auth)
├── pages/               # Telas do app
│   ├── Dashboard/       # Abertura de mesa
│   ├── Order/           # Montagem do pedido
│   ├── FinishOrder/     # Finalização
│   └── Signin/          # Login
├── routes/              # Configuração de rotas
│   ├── app.routes.tsx   # Rotas autenticadas
│   ├── auth.routes.tsx  # Rotas públicas
│   └── index.tsx        # Navegador principal
└── services/            # Configuração da API
```

## Screenshots
 
O app possui interface escura com:
- Tela de login
- Dashboard para abrir mesa
- Lista de produtos por categoria
- Carrinho de pedidos
- Tela de finalização
