Feature: Validar componentes do formulário do TicketBox

    Scenario: O formulário contem uma label First Name
        Given acesso o site do TicketBox
        When a tela carregar por completo
        Then o formulário possui uma label First Name

    Scenario: O formulário contem um input para First Name
        Given acesso o site do TicketBox
        When a tela carregar por completo
        Then o formulário possui um input First Name

    Scenario: O formulário contem uma label Last Name
        Given acesso o site do TicketBox
        When a tela carregar por completo
        Then o formulário possui uma label Last Name

    Scenario: O formulário contem um input para Last Name
        Given acesso o site do TicketBox
        When a tela carregar por completo
        Then o formulário possui um input Last Name