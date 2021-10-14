const request = require("supertest");
const app = require("../src/app");
const User = require("../src/models/User");
const sequelize = require("../src/config/database");

beforeAll(() => {
    sequelize.sync();
})
beforeEach(() => {
    User.destroy({truncate:true});
})

const userExample = {
    username: "user1",
    email: "user1@mail.com",
    password: "password",
  }

const postUser = (user = userExample) => {
    return request(app)
    .post("/api/1.0/users")
    .send(user)
}

describe("User Registration", () => {
   
    it("returns 200 on valid registration", async () => {
        const res = await postUser();
        expect(res.status).toBe(200);
        expect(res.body.message).toBe("Created");
      });

    it("saves the user to database", async () => {
        await postUser();
        const list = await User.findAll()
        const savedUser = list[0];
        expect(savedUser.username).toBe("user1");
        expect(savedUser.email).toBe("user1@mail.com");
    });

    it("hashes the password in database", async () => {
        await postUser();
        const list = await User.findAll()
        const savedUser = list[0];
        expect(savedUser.password).not.toBe("password");
    })

    it("returns 400 when user is null", async () => {
        const response = await postUser({
          username: null,
          email: "user1@mail.com",
          password: "password",
        })
        expect(response.status).toBe(400)
    })

    it("returns username validation error when validation fails" , async () => {
        const response = await postUser({
            username: null,
            email: "user1@mail.com",
            password: "password",
          })
        const body = response.body;
        expect(body.validationErrors.username).not.toBe(undefined);
    })

    it("returns email validation error when validation fails" , async () => {
        const response = await postUser({
            username: "username",
            email: null,
            password: "password",
          })
        const body = response.body;
        expect(body.validationErrors.email).not.toBe(undefined);
    })

    it("returns validation error when both username and email are null" , async () => {
        const response = await postUser({
            username: null,
            email: null,
            password: "password",
          })
        const body = response.body;
        expect(Object.keys(body.validationErrors)).toEqual(['username', 'email']);
    })

    it("password cannot be null" , async () => {
        const response = await postUser({
            username: null,
            email: null,
            password: "password",
          })
        const body = response.body;
        expect(Object.keys(body.validationErrors)).toEqual(['username', 'email']);
    })
});

