const express = require("express");
const zod = require("zod");
const { Pet } = require("./db");

const app = express();
app.use(express.json());

const petSchema = zod.object({
  petName: zod.string(),
  petType: zod.string(),
  breed: zod.string(),
  userName: zod.string(),
  userEmail: zod.string().email("email is not valid"),
  phone: zod.number(),
});

app.post("/", async (req, res) => {
  const parsed = petSchema.safeParse(req.body);
  if (!parsed.success) {
    console.log(parsed.error.format());
    return res
      .status(411)
      .json({ msg: "input is not valid", errors: parsed.error.format() });
  }
  const petExist = await Pet.findOne({
    petName: req.body.petName,
    userEmail: req.body.userEmail,
  });
  if (petExist) {
    return res.status(409).json({ msg: "You already uploaded this pet Once" });
  }
  const createdInfo = await Pet.create({
    petName: req.body.petName,
    petType: req.body.petType,
    breed: req.body.breed,
    userName: req.body.userName,
    userEmail: req.body.userEmail,
    phone: req.body.phone,
  });

  res.status(200).json({ msg: "your data is uploaded" });
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3000, () => {
  console.log(`server is live `);
});
