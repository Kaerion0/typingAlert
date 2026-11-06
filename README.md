# TypingAlert

> Shows a notification when someone is typing to you in DMs

[![Vencord](https://img.shields.io/badge/Vencord-unofficial%20userplugin-5865F2?style=flat-square&logo=discord&logoColor=white)](https://vencord.dev)
[![License](https://img.shields.io/github/license/Kaerion0/typingAlert?style=flat-square&color=8b949e)](./LICENSE)
[![Last commit](https://img.shields.io/github/last-commit/Kaerion0/typingAlert?style=flat-square&color=2ea043)](https://github.com/Kaerion0/typingAlert/commits)
[![Stars](https://img.shields.io/github/stars/Kaerion0/typingAlert?style=flat-square&color=f5c542)](https://github.com/Kaerion0/typingAlert/stargazers)

**Contents**

1. [Features](#features)
2. [Screenshots](#screenshots)
3. [Installation](#installation)
4. [Settings](#settings)
5. [Authors](#authors)

---

## Features

- **Click to open**: Clicking the notification opens the DM
- **No alerts for the open chat**: Skipped if the DM is already open and Discord is focused
- **DMs only**: Group DMs and servers are not tracked

---

## Screenshots

<p>
<img src="https://github.com/user-attachments/assets/7cf2b186-3b86-497b-a0e3-c37da5cd2eab" width="100%" alt="screenshot">
</p>

---

## Installation

> [!IMPORTANT]
> Userplugins only work in Vencord built from source. Guide: [docs.vencord.dev/installing](https://docs.vencord.dev/installing/)

Run all commands from the folder where Vencord is cloned.

1. Clone the plugin into `src/userplugins`:
   ```sh
   git clone https://github.com/Kaerion0/typingAlert src/userplugins/typingAlert
   ```
2. Build Vencord:
   ```sh
   pnpm build
   ```
3. Inject Vencord into Discord. Only needed once, if you haven't installed Vencord from source yet:
   ```sh
   pnpm inject
   ```
4. Fully restart Discord.
5. Enable it: **Settings → Vencord → Plugins → typingAlert**

### Update

From the Vencord folder, then restart Discord:

```sh
git -C src/userplugins/typingAlert pull && pnpm build
```

---

## Settings

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `cooldown` | `slider` | `60` | Notification cooldown per DM (seconds) |

---

## Authors

<table>
  <tr>
    <td align="center" width="120">
      <a href="https://github.com/Kaerion0"><img src="https://github.com/Kaerion0.png?size=160" width="80" alt="Kaerion"><br><b>Kaerion</b></a>
    </td>
  </tr>
</table>
