import { test, expect } from '@playwright/test'

test.describe("BookStore API Testing for GET request", () => {

    test("it should return 200 for valid  request", async ({ request }) => {
        const response = await request.get("https://demoqa.com/BookStore/v1/Books");
        expect(await response.status()).toBe(200);
        const resBody = await JSON.parse(await response.text())
        expect(await resBody.books[0].isbn).toBeTruthy();
    });

    test("it should return particular isbn after passing  valid isbn code ", async ({ request }) => {
        const response = await request.get("https://demoqa.com/BookStore/v1/Book", {
            params: {
                'ISBN': '9781593275846'
            }
        })
        const resBody = (JSON.parse(await response.text()))
        expect(await response.status()).toBe(200);
        expect(await resBody.isbn).toBe("9781593275846")
    });

    test("it should return 400 for invalid isbn", async ({ request }) => {
        const response = await request.get("https://demoqa.com/BookStore/v1/Book", {
            params: {
                'ISBN': '1234',
            },
            headers: {
                'Content-Type': "application/json"
            }
        })
        expect(await response.status()).toBe(400);
    })
});

test.describe("BookStore API Testing for POST request", () => {
    test("it should return 201 to create  ", async ({ request }) => {
        const response = await request.post("https://demoqa.com/BookStore/v1/Books", {
            data: {
                "userId": "2d9387a7-923b-4233-a66a-1c98d1b45282",
                "collectionOfIsbns": [
                    {
                        "isbn": "9781593277574"
                    }
                ]
            },
            headers: {
                "Content-Type": "application/json",
            },

        })
        expect(await response.status()).toBe(201);
        const resBody = JSON.parse(await response.text());
        expect(await resBody).toBe("{ books: [ { isbn: '9781593277574' } ] }")
    })

    test("it should return 400 for already Created ISBN  ", async ({ request }) => {
        const response = await request.post("https://demoqa.com/BookStore/v1/Books", {
            data: {
                "userId": "2d9387a7-923b-4233-a66a-1c98d1b45282",
                "collectionOfIsbns": [
                    {
                        "isbn": "9781593277574"
                    }
                ]
            },
            headers: {
                "Content-Type": "application/json",
            },

        })
        expect(await response.status()).toBe(400);
        const resBody = JSON.parse(await response.text());
        expect(await resBody.message).toBe("ISBN already present in the User's Collection!")
    })

    test("it should return 401 for unauthorized user  ", async ({ request }) => {
        const response = await request.post("https://demoqa.com/BookStore/v1/Books", {
            data: {
                "userId": "2d9387a7-923b-4233-a66a-1c98d1b45282",
                "collectionOfIsbns": [
                    {
                        "isbn": "9781593277574"
                    }
                ]
            },
            headers: {
                "Content-Type": "application/json",
            },

        })
        expect(await response.status()).toBe(401);
        const resBody = JSON.parse(await response.text());
        expect(await resBody.message).toBe("User not authorized!")
    })
})

test.describe("BookStore API Testing for DELETE Request",()=>{
    test("it should return 204 for deletion",async({request})=>{
    const response = await request.delete("https://demoqa.com/BookStore/v1/Books",{
        params:{
            UserId:"2d9387a7-923b-4233-a66a-1c98d1b45282"
        }
    });
    expect(await response.status()).toBe(204);
    })
});


