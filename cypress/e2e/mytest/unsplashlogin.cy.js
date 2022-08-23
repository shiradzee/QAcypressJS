describe("Залогинится на сайте unsplash", function () {
  it("Ввести несуществующие данные", function () {
    //Вводим наш сайт
    cy.visit("https://unsplash.com/"),
      cy.contains("Log in").click()
      //Ввводим имейл
    cy.get("input[type='email']").type('test@mail.ru'),
    //Вводим пароль
      cy.get("input[type='password']").type('cypresstest1')
    //Добавляем действие для авторизации
    cy.get("input[type='submit']").click()
    cy.end()
  })
});