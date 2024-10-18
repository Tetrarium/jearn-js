console.log("hello.js");

import { user } from "./user.js";

const p = document.createElement('p');
p.textContent = user;
document.body.appendChild(p);