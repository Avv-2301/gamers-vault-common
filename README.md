# 🎮 Gamers Vault Common

[![npm version](https://img.shields.io/npm/v/@avv-2301/gamers-vault-common?color=blue)](https://www.npmjs.com/package/@avv-2301/gamers-vault-common)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue?logo=typescript)](https://www.typescriptlang.org/)

`Gamers Vault Common` is a TypeScript utility package containing shared files and functions for multiple services. It helps maintain consistency across your projects by providing constants, service-calling utilities, and standardized response formats.

---

## ✨ Features

- **Constants** – Centralized constants for reuse across services.  
- **Service Caller** – `callService` function to call other services in a consistent way.  
- **Response Format** – Standardized API response format for better consistency.  
- **TypeScript Support** – Fully typed for safer and more predictable development.  

---

## 💾 Installation

Install via npm:

```bash
npm install @avv-2301/gamers-vault-common@1.0.6


Importing Functions and Constants
import { callService, RESPONSE_FORMAT, CONSTANTS } from '@avv-2301/gamers-vault-common';
