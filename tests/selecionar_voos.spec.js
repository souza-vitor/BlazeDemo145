const { test, expect } = require('@playwright/test')

test('Selecionar origem e destino', async ({page}) => {
    await page.goto('https://www.blazedemo.com')
    await expect(page).toHaveURL('https://www.blazedemo.com')
    // verifica o titulo da página inicial
    const titulo_inicial = page.locator('html body div.jumbotron div.container h1')
    await expect(titulo_inicial).toHaveText('Welcome to the Simple Travel Agency!')

    // seleciona a origem e o destino
    await page.selectOption('select.form-inline:nth-child(1)', 'Boston')
    await page.selectOption('select.form-inline:nth-child(4)', 'New York')
    //clica no botão "Find Flights"
    const botao_voos = page.locator('input.btn')
    await expect(botao_voos).toHaveText('Find Flights')
    await botao_voos.click()

    //checar se está na próxima página
    await expect(page).toHaveURL(/.*reserve/)
    await expect(page.locator("div.container:nth-child(2) > h3:nth-child(1)")).toHaveText("Flights from Boston to New York:")

}) // final do teste