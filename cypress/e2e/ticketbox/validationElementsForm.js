/// <reference types="cypress" />

const { Given, Then, When, Before } = require("@badeball/cypress-cucumber-preprocessor");
import loc from "../../support/ticketbox/locators";
import "../../support/commands";

// Before(() => {
//     cy.visit(Cypress.env('base_url'))
//     cy.viewport(720, 1560)
// })

Given("acesso o site do TicketBox", () => {
    cy.visit(Cypress.env('base_url'));
})

When("a tela carregar por completo", () => {
    cy.url('be.equal', Cypress.env('base_url'));
})

// Scenario: O formulário contem uma label First Name
Then("o formulário possui uma label First Name", () => {
    cy.get(loc.FORM.FIRST_NAME.LABEL).should('contain', 'First Nathre');
})

// Scenario: O formulário contem um input para First Name
Then("o formulário possui um input First Name", () => {
    cy.get(loc.FORM.FIRST_NAME.INPUT).should('exist');
})

// Scenario: O formulário contem uma label Last Name
Then("o formulário possui uma label Last Name", () => {
    cy.get(loc.FORM.LAST_NAME.LABEL).should('contain', 'Last Name');
})

// Scenario: O formulário contem um input para Last Name
Then("o formulário possui um input Last Name", () => {
    cy.get(loc.FORM.LAST_NAME.INPUT).should('exist');
})