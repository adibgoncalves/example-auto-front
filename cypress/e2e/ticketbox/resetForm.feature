Feature: Funcionalidade de Reset de formulário

    Scenario: Realizar reset no formulário
        Given acesso o site do TicketBox
        When preencho todos os campos
        When clico no botão Reset
        Then todos os valores preenchidos nos campos são apagados