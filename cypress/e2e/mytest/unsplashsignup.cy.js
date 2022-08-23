describe('Sign Up', () => {

  it('Прохожу полную регистрацию аккаунта и получаю ошибку,что такой аккаунт уже зареган', () => {
    cy.visit('https://unsplash.com/');
    cy.contains('Log in').click();
    cy.contains('Join Unsplash').click();
    cy.get('input[autofocus="autofocus"]').type('John');
    cy.get('input[class="form-control"]').type('Doe');
    cy.get('#user_email').type('cypresstest@rabmler.ru');
    cy.get('#user_username').type('testcypress1').click();
    cy.get('#user_password').type('test1!1!').click();
    cy.get('.js-fake-join-form-submit-button').click();
    cy.end()
    

  })
})