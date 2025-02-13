const express = require("express");
const session = require("express-session");
const Keycloak = require("keycloak-connect");
const db = require("./database");

const app = express();
app.use(express.json());

const PORT = 3000;

// 🟢 Configuration de la session pour Keycloak
const memoryStore = new session.MemoryStore();
app.use(
  session({
    secret: "uTtgIJqYqm0hg1t53qtxLGbgueUB0Poa",
    resave: false,
    saveUninitialized: true,
    store: memoryStore,
  })
);

// 🔐 Initialisation de Keycloak
const keycloak = new Keycloak({ store: memoryStore }, "./keycloak-config.json");
app.use(keycloak.middleware());

app.get("/", (req, res) => {
  res.json("Registre de personnes! Choisissez le bon routage!");
});

// 🔒 Routes sécurisées avec Keycloak
app.get("/personnes", keycloak.protect(), (req, res) => {
  db.all("SELECT * FROM personnes", [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ message: "success", data: rows });
  });
});

app.get("/personnes/:id", keycloak.protect(), (req, res) => {
  const id = req.params.id;
  db.get("SELECT * FROM personnes WHERE id = ?", [id], (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ message: "success", data: row });
  });
});

app.post("/personnes", keycloak.protect(), (req, res) => {
  const { nom, adresse } = req.body;
  db.run(
    `INSERT INTO personnes (nom, adresse) VALUES (?, ?)`,
    [nom, adresse],
    function (err) {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({ message: "success", data: { id: this.lastID } });
    }
  );
});

app.put("/personnes/:id", keycloak.protect(), (req, res) => {
  const id = req.params.id;
  const { nom, adresse } = req.body;
  db.run(
    `UPDATE personnes SET nom = ?, adresse = ? WHERE id = ?`,
    [nom, adresse, id],
    function (err) {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({ message: "success" });
    }
  );
});

app.delete("/personnes/:id", keycloak.protect(), (req, res) => {
  const id = req.params.id;
  db.run(`DELETE FROM personnes WHERE id = ?`, id, function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ message: "success" });
  });
});

// 🔐 Route de test sécurisée
app.get("/secure", keycloak.protect(), (req, res) => {
  console.log(
    "Utilisateur authentifié :",
    req.kauth.grant.access_token.content
  );
  res.json({ message: "Vous êtes authentifié avec Keycloak !" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
