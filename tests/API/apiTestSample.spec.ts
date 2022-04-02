import {expect, test} from "@playwright/test";

/**
 * Please refer to the official docs/guide at https://playwright.dev/docs/test-api-testing
 */
test.describe("@api Sample api test", ()=> {
    test.use({
        baseURL: "https://reqres.in"
    })

    test("Should get users and status of 200", async ({request})=> {
        const response = await request.get("/api/users?page=2")
        expect(response.status()).toEqual(200)

        const responseBody = await response.json()
        expect(responseBody.data).toContainEqual(expect.objectContaining({
            id: 7,
            email: 'michael.lawson@reqres.in',
            first_name: 'Michael',
            last_name: 'Lawson',
            avatar: 'https://reqres.in/img/faces/7-image.jpg'
        }))
        //uncomment line below if you want to see the jason payload
        //console.log(await response.json())
    })
})