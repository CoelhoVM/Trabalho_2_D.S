# 4. Diagrama de Caso de Uso

<img src="/Diagrama_PetShop-Diagrama de Caso de Uso.drawio.png" alt="Canvas do Projeto" style="width: 100%; margin-top: 30px" />

## 4.1 Descrição de Caso de Uso

### Caso de Uso 1: Cadastrar Cliente

- **Atores:** Cliente


- **Descrição:** Permite que um novo cliente se cadastre no sistema fornecendo seus dados pessoais e criando um login com senha.


- **Pré-condições:** O cliente não pode estar previamente cadastrado.


- **Pós-condições:** Os dados são salvos no sistema e o cliente pode acessar sua conta.


###### Fluxo Principal:


- O cliente acessa a opção de cadastro.


- Preenche nome, CPF, data de nascimento, endereço, telefone e e-mail.


- Define login e senha.


- Confirma o cadastro.


- O sistema valida e salva os dados.


##### Fluxo Alternativo:


- Se o CPF já estiver cadastrado, o sistema exibe uma mensagem de erro e solicita outro.

### Caso de Uso 2: Cadastrar Pet

- **Atores:** Cliente


- **Descrição:** Permite que o cliente cadastre um ou mais pets vinculados à sua conta.


- **Pré-condições:** O cliente deve estar autenticado no sistema.


- **Pós-condições:** Um novo pet é registrado com um ID exclusivo.


##### Fluxo Principal:


- O cliente acessa a seção "Meus Pets".


- Seleciona "Cadastrar novo pet".


- Preenche os dados do animal: nome, espécie, raça, gênero, nascimento, cor, peso, microchipado, castrado, observações e imagem.


- O sistema gera um ID exclusivo e salva o pet.


##### Fluxo Alternativo:

- Caso algum campo obrigatório esteja em branco, o sistema solicita o preenchimento.

### Caso de Uso 3: Agendar Serviço

- **Atores:** Cliente, Funcionário


- **Descrição:** Permite o agendamento de um serviço para um pet.


- **Pré-condições:** O cliente deve estar autenticado e o pet já cadastrado.


- **Pós-condições:** O serviço é registrado com data, hora e profissional (se aplicável).


##### Fluxo Principal:


- O cliente acessa a agenda de serviços.


- Seleciona o pet.


- Escolhe o tipo de serviço.


- Consulta a disponibilidade.


- Escolhe data e hora disponíveis.


- O sistema confirma e bloqueia o horário.


- Envia notificação de confirmação ao cliente.


##### Fluxo Alternativo:


- Se não houver horário disponível, o sistema informa ao cliente.

### Caso de Uso 4: Realizar Compra de Produto

- **Atores:** Cliente


- **Descrição:** Permite que o cliente compre produtos disponíveis no Pet Shop, utilizando um carrinho de compras.


- **Pré-condições:** O cliente deve estar autenticado.


- **Pós-condições:** O pedido é registrado com método de pagamento e status.


##### Fluxo Principal:


- O cliente acessa a loja virtual.


- Adiciona produtos ao carrinho.


- Vai para o checkout.


- Escolhe a forma de retirada (presencial ou entrega).


- Informa endereço de entrega, se aplicável.


- Seleciona o método de pagamento (cartão ou Pix).


- O sistema processa o pagamento.


- O pedido é registrado e a notificação é enviada ao cliente.


##### Fluxo Alternativo:


- Se o pagamento falhar, o sistema informa erro e permite tentar novamente.


