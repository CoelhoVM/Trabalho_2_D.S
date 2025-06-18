# 1. Indrodução

**Minimundo do projeto**

O Pet Shop PetLand visa implementar um sistema informatizado com o objetivo de integrar os clientes aos produtos e serviços disponibilizados pela empresa, otimizando os  processos de registro, compra, agendamento e atendimento.
Clientes podem se cadastrar no sistema fornecendo informações como: nome completo, CPF, data de nascimento, endereço, telefone e e-mail. Para completar o cadastro, é necessário que o cliente crie um login e senha.  A autenticação será realizada por meio de login com senha segura.
Cada cliente pode cadastrar um ou mais animais de estimação (pets), informando os seguintes dados: nome, espécie (ex: gato, cachorro), raça, gênero, data de nascimento, cor da pelagem, peso aproximado, se é microchipado, se é castrado, além de observações gerais e uma imagem do animal. Cada pet será automaticamente identificado por um ID exclusivo gerado pelo sistema.
Cada pet poderá ser vinculado a um ou mais serviços oferecidos pelo Pet Shop. Os serviços são agendados exclusivamente para os animais, mas mantêm relação com os dados do respectivo dono (cliente), especialmente para verificação de informações de contato ou endereço quando necessário. As informações relacionadas aos serviços incluem: nome do serviço, descrição, duração estimada, valor e profissionais habilitados e disponíveis para execução.
O agendamento de serviços poderá ser realizado tanto pelos clientes quanto pelos funcionários do Pet Shop (atendentes ou administradores). O sistema permite: Consulta da disponibilidade dos serviços conforme a agenda.


Agendamento, cancelamento e reagendamento de serviços, com envio automático de notificações aos clientes.


Registro dos serviços agendados, com bloqueio automático  dos horários ocupados.


Atribuição de profissional responsável, quando aplicável.


Além disso, o sistema permite que o cliente realize:
Compras de produtos com verificação de disponibilidade em estoque.


Pagamentos processados diretamente pela plataforma, com registro do método utilizado (como cartão de crédito ou Pix) e status da transação.


Formas de retirada do produto: retirada presencial no local ou entrega via delivery. O endereço de entrega poderá ser diferente do endereço principal cadastrado pelo cliente.


Durante a experiência de compra, o cliente poderá utilizar um carrinho de compras virtual para adicionar produtos antes da finalização do pagamento.
O sistema também será responsável pelo gerenciamento do calendário geral de atendimentos do Pet Shop, permitindo visualização de horários disponíveis, registro de agendamentos e bloqueio automático de horários já ocupados.
Notificações automáticas serão enviadas aos clientes para confirmar agendamentos, lembrar de compromissos ou informar cancelamentos e alterações. Essas notificações poderão ser armazenadas no sistema com status de envio e visualização.

## 1.1 Objetivo

Este projeto visa desenvolver um sistema que conecta clientes aos serviços (como banho, tosa e outros cuidados) e produtos (como ração, brinquedos e acessórios) oferecidos pela empresa. O sistema terá como finalidade facilitar o acesso a esses serviços e produtos, promovendo comodidade aos tutores e bem-estar aos pets. O sistema se destina a clientes que buscam praticidade no cuidado com seus animais de estimação, permitindo o cadastro de pets no sistema, o agendamento de serviços, a realização de pedidos online e o acompanhamento de suas compras, bem como a funcionários e administradores, promovendo uma conexão mais prática e eficiente entre a empresa e os clientes/usuários.

## 1.2 Escopo

Este projeto visa desenvolver um sistema que conecta clientes aos serviços (como banho, tosa e outros cuidados) e produtos (como ração, brinquedos e acessórios) oferecidos pela empresa. O sistema terá como finalidade facilitar o acesso a esses serviços e produtos, promovendo comodidade aos tutores e bem-estar aos pets. O sistema se destina a clientes que buscam praticidade no cuidado com seus animais de estimação, permitindo o cadastro de pets no sistema, o agendamento de serviços, a realização de pedidos online e o acompanhamento de suas compras, bem como a funcionários e administradores, promovendo uma conexão mais prática e eficiente entre a empresa e os clientes/usuários.

## 1.3 Definições, Acrônimos e Abreviações

- ID (Identificador): Número gerado pelo sistema para identificar um animal dentro do mesmo.

## 1.4 Público-alvo

Este documento destina-se a todas as partes interessadas envolvidas no desenvolvimento, implementação e uso do software PetShop PetLand. Isso inclui membros da equipe de desenvolvimento, gerentes de projeto, clientes/tutores de pets, em sua maioria pessoas entre 18 e 60 anos, que buscam praticidade e agilidade na hora de cuidar dos seus animais de estimação. Isso inclui donos de cães e gatos interessados em agendar serviços como banho, tosa e consultas, além de comprar produtos como rações, brinquedos e acessórios, bem como usuários finais e outras partes interessadas relevantes.

