import { expect, test } from "@playwright/test";

test.describe("API testing for GET Request", () => {
    test("should return statusCode 200 for Valid Endpoint", async ({ request }) => {
        const response = await request.get("https://reqres.in/api/users/2");
        const resBody = await JSON.parse(await response.text());
        expect(await response.status()).toBe(200);
    });

    test("it should return statusCode 404 for Invalid EndPoint", async ({ request }) => {
        const response = await request.get("https://reqres.in/apifeefd");
        const resBody = await JSON.parse(await response.text());
        expect(await response.status()).toBe(404);
    });

});

test.describe("API Testing for Post Request", () => {
    test("it should return 201 for successful POST data ", async ({ request }) => {
        const response = await request.post("https://reqres.in/api/users", {
            data: {
                "name": "morpheus",
                "job": "leader"
            }
        })
        expect(await response.status()).toBe(201);
        const resBody = await JSON.parse(await response.text())
        expect(await resBody.id).toBeTruthy()
    })

    test("it should return 400 for Unsuccessful POST data ", async ({ request }) => {
        const response = await request.post("https://reqres.in/api/register", {
            data: {
                "email": "sydney@fife"

            }
        })
        expect(await response.status()).toBe(400);
        const resBody = await JSON.parse(await response.text())
        expect(await resBody.error).toBe("Missing password")
    })
});

test.describe("API Testing for PUT Request", () => {
    test("it should return statusCode 200 for successful PUT data", async ({ request }) => {
        const response = await request.put("https://reqres.in/api/users/2", {
            data: {
                "name": "morpheus",
                "job": "zion resident"
            }
        })
        expect(await response.status()).toBe(200);
        const resBody = await JSON.parse(await response.text())
        expect(await resBody.updatedAt).toBeTruthy()
    })
});

test.describe("API Testing for Delete Request", () => {
    test("it should return 204 statusCode for deletion", async ({ request }) => {
        const response = await request.delete("https://reqres.in/api/users/2");
        expect(await response.status()).toBe(204)
    })
})

