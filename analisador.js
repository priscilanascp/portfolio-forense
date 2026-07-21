const fs = require('fs');

function analisarLogs(caminhoDoLog) {
    console.log("=== INICIANDO AUDITORIA DE SEGURANÇA ===");
    let tentativasFalhas = 0;
    const padraoIP = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/;

    try {
        const dados = fs.readFileSync(caminhoDoLog, 'utf-8');
        const linhas = dados.split('\n');

        linhas.forEach((linha) => {
            if (linha.includes("Failed password") || linha.includes("failed")) {
                tentativasFalhas++;
                const ipDetectado = linha.match(padraoIP);
                const ip = ipDetectado ? ipDetectado[0] : "IP oculto";
                console.log(`[ALERTA] Falha de login detectada. IP de Origem: ${ip}`);
            }
        });

        console.log("\n=== RESUMO DA AUDITORIA ===");
        console.log(`Total de tentativas suspeitas de login: ${tentativasFalhas}`);

    } catch (erro) {
        console.error("Erro ao ler o arquivo de log:", erro.message);
    }
}

// Executa a análise no arquivo auth.log que criamos
analisarLogs("auth.log");