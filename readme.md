
# Express.js – PATCH, PUT, JSON Parsing, and Array Methods Summary

---

## 🧩 1. `req.body` in Express

- `req.body` contains the data sent by the client in a POST, PUT, or PATCH request.
- You must use middleware to parse the request body:

```js
app.use(express.json()); // For JSON
app.use(express.urlencoded({ extended: true })); // For HTML form data
```

---

## 🔧 2. PUT vs PATCH

| Method | Description                          | Use Case                     |
|--------|--------------------------------------|------------------------------|
| PUT    | Replaces the entire resource         | Update full user object      |
| PATCH  | Partially updates the resource       | Update only some fields      |

---

## 🛠 3. PATCH Route Flow Example

```js
app.patch("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedData = req.body;

  const userIndex = users.findIndex(user => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  users[userIndex] = {
    ...users[userIndex],
    ...updatedData
  };

  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ error: "Failed to update user" });
    }

    res.json({
      message: "User updated successfully",
      userId: userId,
      updatedUser: users[userIndex]
    });
  });
});
```

---

## 🔍 4. `.find()` Explanation

```js
const user = users.find(user => user.id === parseInt(userId));
```

- Searches the array and returns the **first matching user object**.
- Returns `undefined` if no match found.

---

## 🔍 5. `.splice()` Explanation

```js
users.splice(userIndex, 1);
```

- Removes 1 element from the array at the given index.
- Used to **delete** a user from the array.
- It **modifies the original array**.

---

## 💾 6. Writing to JSON File

```js
fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), callback);
```

- Writes the updated `users` array back to the file.
- `JSON.stringify(..., null, 2)` formats the JSON in a readable way with 2-space indentation.

---

## ✅ Summary in Hinglish

- `req.body` → client ka bheja hua data hota hai.
- `PUT` → pura object replace karta hai.
- `PATCH` → sirf bheje hue fields update karta hai.
- `.find()` → array me se pehla match dhundta hai.
- `.splice()` → array me se ek item hata deta hai.
- `fs.writeFile()` → updated data ko file me permanently save karta hai.

---
