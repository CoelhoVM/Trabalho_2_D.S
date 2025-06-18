# 3. Principais Recursos e Funcionalidades

### Cadastro e Autenticação: 

Cadastro do Cliente com os dados colocados por ele (nome, CPF, data de nascimento, endereço, telefone, e-mail).
Autenticação do login com base nos dados informados no cadastro.


### Gerenciamento de Pets:

Cada Cliente pode cadastrar múltiplos animais no sistema.
Cada animal será registrado com informações sobre ele (peso, pelagem, tamanho, se é castrado e vacinas)
Cada animal cadastrado terá um ID gerado pelo sistema automaticamente para a identificação do animal dentro do sistema.

### Agendamento e Serviços:

Será possível agendar um serviço no petshop (vacinação, exames veterinários, banho e tosa) caso haja um horário disponível para para o agendamento.
Será possível que o usuário veja quais consultas ele tem agendadas.
Será possível ao usuário cancelar um agendamento feito por ele.
Cada agendamento será automaticamente atribuído a um profissional do Pet Shop especializado naquele serviço.

### Compra de produtos: 

Cada produto selecionado para compra será adicionado a um carrinho virtual.
É verificado se tem um produto no estoque antes de ele ser posto no carrinho.
Os pagamentos podem ser feitos por meio de cartão de crédito e débito ou por meio de Pix.
Os produtos podem ser retirados no local ou recebidos na casa do cliente por delivery.

### Notificações: 

É enviado notificações automaticamente para os clientes sobre as consultas e compras deles.

## 3.1 Requisitos Funcionais

- **RF.001** - O sistema deve permitir o cadastro de clientes.
	
- **RF.002** - O sistema deve permitir que o usuário cadastre um ou mais animais de estimação.
	
- **RF.003** - O sistema deve permitir que o usuário realize logout.

- **RF.004** – O sistema deve permitir que o cliente visualize os produtos e serviços disponíveis.

- **RF.005** – O sistema deve permitir que o usuário agende serviços com data e horário.

- **RF.006** – O sistema deve permitir que o cliente finalize pedidos de produtos.

- **RF.007** – O sistema deve permitir ao administrador/funcionário cadastrar, editar e excluir produtos e serviços.

## 3.2 Requisitos Não Funcionais

- **RNF.001** – O cadastro de usuários deve conter os campos: nome completo, CPF, data de nascimento, endereço, telefone e e-mail.

- **RNF.002** – O cliente deve obrigatoriamente se cadastrar para utilizar os serviços do site.

- **RNF.003** – O cadastro de animais deve conter os campos: nome, espécie, raça, gênero, data de nascimento, cor da pelagem, peso aproximado, se é microchipado, se é castrado, observações e uma imagem.

- **RNF.004** – O sistema deve validar a identidade do cliente antes da exclusão da conta, por meio de e-mail e senha.

- **RNF.005** – O botão de logout deve estar visível e acessível ao usuário logado.

- **RNF.006** – O site deve oferecer as seguintes formas de pagamento: cartão de crédito, cartão de débito, boleto bancário e Pix.

- **RNF.007** – O sistema deve ser acessível via navegador em dispositivos móveis e desktops (responsivo).

