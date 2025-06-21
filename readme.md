# itty-router-api-boilerplate ⚡️

A minimal, **zero-bloat Node.js API boilerplate** using **itty-router**, ideal for small projects, prototypes, or APIs meant to later deploy to serverless platforms like **Cloudflare Workers**.

---

## 🚀 Features

- ⚡ Tiny & fast router (no Express bloat)
- ✅ Clean route definitions (`.get()`, `.post()`, etc.)
- ✅ Dynamic route parameters
- ✅ JSON response handling
- ✅ Ready to deploy to **Node.js** or **Cloudflare Workers**

---

## 📦 Installation

```bash
git clone https://github.com/kemalbatuhanabut/itty-router-api-boilerplate.git
cd itty-router-api-boilerplate
npm install
npm start
````

Runs by default on:
`http://localhost:8787`

---

## 🖥 Example Endpoints

* `GET /api/hello` → `{ "message": "Hello, World!" }`
* `GET /api/greet/:name` → `{ "greeting": "Hello, NAME!" }`

Example:

```bash
curl http://localhost:8787/api/greet/Kemal
```

---

## 📌 Why itty-router?

* **\~500B gzipped**
* Blazing fast
* Supports wildcards, dynamic params, method-based routing
* Works **perfectly with Cloudflare Workers**, but also runs nicely with **Node.js HTTP servers**

---

## 🏷 License

MIT License — Free to use, fork, and modify.

---

## 👨‍💻 Author

**Kemal Batuhan Abut**
GitHub → [@kemalbatuhanabut](https://github.com/kemalbatuhanabut)

---

**Minimal setup. Maximum flexibility. Start fast. Scale clean.**
