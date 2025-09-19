const { test, expect } = require('@playwright/test')

test('Cadastro de usuário', async ({page}) => {
    await page.goto('https://www.blazedemo.com/login')
    await expect(page).toHaveURL('https://www.blazedemo.com/login')

    await expect(page.locator('.panel-heading')).toHaveText('Login')

    await page.fill('#email', 'ronaldo-silv@baseustech.com')
    await page.fill('#password', '123456')
    await page.locator('.btn-primary').click()

    // pagina de confirmação
    await expect(page.locator('.code')).toHaveText('419')
    await expect(page.locator('.message')).toHaveText('Page Expired')
}) // fim do teste