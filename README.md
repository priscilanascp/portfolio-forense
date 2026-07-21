# 🛡️ Ferramentas de Auditoria Forense Digital em JavaScript

Este repositório contém uma suíte de scripts em **Node.js (JavaScript)** desenvolvida para auxiliar e automatizar o processo de triagem em análises forenses digitais. 

O objetivo principal é processar grandes volumes de dados brutos (logs e históricos de comandos) de forma rápida, identificando anomalias e comportamentos suspeitos que fundamentam a elaboração de **Pareceres Técnicos Periciais**.

---

## 🛠️ Scripts Incluídos

### 1. Varredor de Invasões e Falhas de Acesso (`analisador.js`)
* **Finalidade:** Audita arquivos de log de autenticação (`auth.log`) em servidores.
* **O que identifica:** Tentativas falhas de login (brute force) e extrai automaticamente o endereço IP de origem dos ataques.
* **Aplicação Prática:** Validação de acessos não autorizados e invasões de sistema.

### 2. Auditor de Histórico de Comandos Bash (`auditor_comandos.js`)
* **Finalidade:** Analisa o histórico de execução do terminal Linux (`.bash_history`).
* **O que identifica:** Comandos de alto risco de exclusão irreversível (`rm -rf`), alteração permissiva de privilégios (`chmod 777`) e eliminação de vestígios (`history -c`).
* **Aplicação Prática:** Identificação de condutas de sabotagem, apagamento doloso de dados ou tentativas de ocultar provas.

---

## 🚀 Como Executar no Ambiente Local / Codespaces

Para executar as ferramentas de auditoria no terminal Node.js:

1. **Auditoria de Acessos:**
   ```bash
   node analisador.js