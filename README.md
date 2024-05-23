![Banner do Projeto]('./banner.jpg')
# Introdução
Este projeto, construído com as versões mais recentes do Next.js e TypeScript, replica o Zoom, uma ferramenta amplamente utilizada para videoconferências. Ele permite que os usuários façam login com segurança, criem reuniões e acessem várias funcionalidades como gravação, compartilhamento de tela e gerenciamento de participantes.

Se você está começando e precisa de ajuda ou enfrenta algum bug, junte-se à nossa comunidade ativa no Discord com mais de 30 mil membros. É um lugar onde as pessoas se ajudam mutuamente.

# ⚙️ Tecnologias Utilizadas
- Next.js
- TypeScript
- Clerk
- getstream
- shadcn
- Tailwind CSS

# 🔋 Funcionalidades
👉 **Autenticação:** Implementa recursos de autenticação e autorização usando Clerk, permitindo que os usuários façam login com segurança via redes sociais ou métodos tradicionais de e-mail e senha, garantindo níveis de acesso e permissões apropriados dentro da plataforma.

👉 **Nova Reunião:** Inicie rapidamente uma nova reunião, configurando as configurações da câmera e do microfone antes de entrar.

👉 **Controles da Reunião:** Os participantes têm controle total sobre os aspectos da reunião, incluindo gravação, reações com emojis, compartilhamento de tela, silenciamento/reativação do som, ajustes de som, layout de grade, visualização da lista de participantes e gerenciamento individual dos participantes (fixar, silenciar, reativar som, bloquear, permitir compartilhamento de vídeo).

👉 **Sair da Reunião:** Os participantes podem sair de uma reunião, ou os criadores podem encerrá-la para todos os participantes.

👉 **Agendar Reuniões Futuras:** Insira os detalhes da reunião (data, hora) para agendar reuniões futuras, acessíveis na página de 'Próximas Reuniões' para compartilhar o link ou iniciar imediatamente.

👉 **Lista de Reuniões Passadas:** Acesse uma lista de reuniões realizadas anteriormente, incluindo detalhes e metadados.

👉 **Visualizar Reuniões Gravadas:** Acesse gravações de reuniões passadas para revisão ou referência.

👉 **Sala Pessoal:** Os usuários têm uma sala pessoal com um link de reunião único para reuniões instantâneas, que podem ser compartilhadas com outras pessoas.

👉 **Participar de Reuniões via Link:** Participe facilmente de reuniões criadas por outros fornecendo um link.

👉 **Funcionalidade Segura em Tempo Real:** Todas as interações na plataforma são seguras e ocorrem em tempo real, mantendo a privacidade e a integridade dos dados dos usuários.

👉 **Design Responsivo:** Segue os princípios de design responsivo para garantir uma experiência de usuário ideal em todos os dispositivos, adaptando-se perfeitamente a diferentes tamanhos e resoluções de tela.

E muitas outras funcionalidades, incluindo arquitetura de código e reutilização.

# 🤸 Início Rápido
Siga estes passos para configurar o projeto localmente em sua máquina.

## Pré-requisitos
Certifique-se de ter os seguintes itens instalados em sua máquina:
- Git
- Node.js
- npm (Node Package Manager)

## Clonando o Repositório
```bash
git clone https://github.com/adrianhajdin/zoom-clone.git
cd zoom-clone
```

## Instalação
Instale as dependências do projeto usando npm:
```bash
npm install
```

## Configuração das Variáveis de Ambiente
Crie um novo arquivo chamado `.env` na raiz do seu projeto e adicione o seguinte conteúdo:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_STREAM_API_KEY=
STREAM_SECRET_KEY=
```
Substitua os valores de placeholder com suas credenciais reais do Clerk & getstream. Você pode obter essas credenciais se inscrevendo no site do Clerk e do getstream.

## Executando o Projeto
```bash
npm run dev
```
Abra `http://localhost:3000` em seu navegador para visualizar o projeto.
