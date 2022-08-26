import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 111222333309, 123456789);
const cliente2 = new Cliente("Alice", 88822233309, 987654321);

const conta1 = new ContaCorrente(1001, cliente1);
conta1.depositar(500)
const conta2 = new ContaCorrente(102, cliente2);
conta2.depositar(200)