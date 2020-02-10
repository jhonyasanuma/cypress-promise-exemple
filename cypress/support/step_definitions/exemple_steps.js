import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import promisify from 'cypress-promise';

Given('I do simple request', async function () {
  const foo = await promisify(cy.request('https://www.google.com/'));
  cy.log('foo', foo);
});

Then('I check some results', async function () {
  const bar = await cy.request('https://www.google.com/').promisify();
  cy.log('bar', bar);
})