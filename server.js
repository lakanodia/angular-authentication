const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middlewares);

server.post("/signup", (req, res) => {
  const { name, email, username, password, confirmPassword } = req.body;

  if (!username || !password || !name || !email || !confirmPassword) {
    return res
      .status(400)
      .json({ statusCode: 400, message: "Username and password are required" });
  }

  const user = router.db.get("users").find({ username }).value();

  if (user) {
    return res.status(409).json({
      statusCode: 409,
      message: "Username already exists",
    });
  }

  const newUser = {
    id: Date.now(),
    name,
    email,
    username,
    password,
    confirmPassword,
  };

  router.db.get("users").push(newUser).write();

  res.status(201).json({ statusCode: 201, message: "Successfully registered" });
});

server.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ statusCode: 400, message: "Username and password are required" });
  }

  const user = router.db.get("users").find({ username, password }).value();

  if (!user) {
    return res
      .status(401)
      .json({ statusCode: 401, message: "Incorrect username or password" });
  }
  res.status(200).json({ statusCode: 200, message: "Logged in successfully" });
});

server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
