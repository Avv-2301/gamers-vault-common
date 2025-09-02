# 🎮 Gamers Vault Common

[![npm version](https://img.shields.io/npm/v/@avv-2301/gamers-vault-common?color=blue)](1.0.11)
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
```

Importing Functions and Constants
```bash
import { callService, RESPONSE_FORMAT, CONSTANTS } from '@avv-2301/gamers-vault-common';
```


Using Constants
```bash
import { CONSTANTS } from '@avv-2301/gamers-vault-common';
console.log(CONSTANTS.DEFAULT_PAGE_SIZE);
```


Function Signature
```bash
export async function callService(
  serviceName: string,
  endpoint: string,
  data: any = {},
  headers: Record<string, string> = {},
  method: Method = "POST"
): Promise<any>
```


Importing CallService And Usage
```bash
import { callService } from '@avv-2301/gamers-vault-common';

  const response = await callService(
      'UserService',       // serviceName
      `/getUser/${userId}`,// endpoint
      {},                  // data (optional)
      { Authorization: 'Bearer TOKEN' }, // headers (optional)
      'GET'                // method (optional, defaults to POST)
    );
```
