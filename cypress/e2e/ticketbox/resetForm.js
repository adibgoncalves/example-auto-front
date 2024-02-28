/// <reference types="cypress" />

const { Given, Then, When } = require("@badeball/cypress-cucumber-preprocessor");
import loc from "../../support/ticketbox/locators";

Given("acesso o site do TicketBox", () => {
    cy.visit(Cypress.env('base_url'));
})

When("preencho todos os campos", () => {
    cy.get(loc.FORM.FIRST_NAME.INPUT).type("Adib")
    cy.get(loc.FORM.LAST_NAME.INPUT).type("Souza")
    cy.get(loc.FORM.EMAIL.INPUT).type("adib.souza@ltm.digital")
    cy.get(loc.FORM.TICKET_QUANTITY.SELECT).select(2)
    cy.get(loc.FORM.TICKET_TYPE.VIP).click()
    cy.get(loc.FORM.ABOUT_EVENT.FRIEND).click()
    cy.get(loc.FORM.SPECIAL_REQUEST.INPUT).type("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
    cy.get(loc.FORM.PURCHASE_AGREEMENT.INPUT).click()
    cy.get(loc.FORM.SIGNATURE.INPUT).type("Adib Souza")
})

When("clico no botão Reset", () => {
    cy.get(loc.FORM.BUTTONS.RESET).click()
})

Then("todos os valores preenchidos nos campos são apagados", () => {
    cy.get(loc.FORM.FIRST_NAME.INPUT).should('not.contain.text')
    cy.get(loc.FORM.LAST_NAME.INPUT).should('not.contain.text')
    cy.get(loc.FORM.EMAIL.INPUT).should('not.contain.text')
    cy.get(loc.FORM.TICKET_QUANTITY.SELECT).should('have.value', '1')
    cy.get(loc.FORM.TICKET_TYPE.VIP).should('not.be.selected')
    cy.get(loc.FORM.ABOUT_EVENT.FRIEND).should('not.be.selected')
    cy.get(loc.FORM.ABOUT_EVENT.PUBLICATION).should('not.be.selected')
    cy.get(loc.FORM.ABOUT_EVENT.SOCIAL_MEDIA).should('not.be.selected')
    cy.get(loc.FORM.SPECIAL_REQUEST.INPUT).should('not.contain.text')
    cy.get(loc.FORM.PURCHASE_AGREEMENT.INPUT).should('not.be.selected')
    cy.get(loc.FORM.SIGNATURE.INPUT).should('not.contain.text')
})