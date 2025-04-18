# 🧑‍💻 Coding Style Guide

This guide outlines the coding conventions and best practices we follow in this project. These conventions help keep our code clean, consistent, and easy to understand — for humans and for tools like GitHub Copilot.



## 🧱 Code Structure

- Use **functional programming** where possible (pure functions > classes).
- Favor **early returns** to reduce nesting.
- Keep functions under 40 lines.
- Use **async/await** instead of callbacks or `.then()` chains.



## 🧑‍💻 Naming Conventions

- `camelCase` for variables and functions.
- `PascalCase` for class names and React components.
- Boolean variables start with `is`, `has`, or `can`  
  _(e.g., `isValid`, `hasPermission`, `canRetry`)_
- Functions should be descriptively named, like:
  - `getUserById`
  - `filterInactiveAccounts`



## 📝 Comments

- Use full-sentence comments, capitalized and punctuated.
- Add comments above any logic that’s not instantly obvious.

```ts
// Filter out users who haven't logged in for 90 days
```



## ⚙️ Formatting Rules

- Indent with 2 spaces
- Use double quotes for strings
- Trailing commas in multiline objects/arrays
- Max line length: 100 characters



## 🧪 Testing

- Every public function must have a corresponding test in the `__tests__` directory.
- Mirror the folder structure of `src/` in your test files.
- Use descriptive test names (e.g. `"returns empty list if no active users"`).



## 💡 Preferred Patterns

```js

// ✅ Preferred
const activeUsers = users.filter(user => user.isActive);

// 🚫 Avoid
let activeUsers = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].isActive) {
    activeUsers.push(users[i]);
  }
}

```

```ts
// ✅ Preferred
async function fetchUser(id: string): Promise<User> {
  const res = await api.get(`/users/${id}`);
  return res.data;
}
```



## 🔁 Reuse

- Extract repeated logic into helper functions
- Avoid magic numbers — use named constants

```ts
const MAX_RETRIES = 3;
```



## 🧼 Clean Code Principles

- One function = one responsibility
- Use clear and intentional variable names
- Delete dead code and unused imports