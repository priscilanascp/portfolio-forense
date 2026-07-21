const fs = require('fs');

function verificarComandosPerigosos(caminhoHistorico) {
    console.log("=== AUDITORIA DE HISTÓRICO DE COMANDOS (BASH) ===");
    
    // Lista de comandos que representam risco de apagamento ou alteração indevida
    const comandosDeRisco = ["rm -rf", "sudo rm", "chmod 777", "mkfs", "dd", "history -c"];
    let alertas = 0;

    try {
        const dados = fs.readFileSync(caminhoHistorico, 'utf-8');
        const linhas = dados.split('\n');

        linhas.forEach((comando, index) => {
            const linhaLimpa = comando.trim();
            
            comandosDeRisco.forEach((termo) => {
                if (linhaLimpa.includes(termo)) {
                    alertas++;
                    console.log(`[ALERTA - Linha ${index + 1}] Comando perigoso executado: '${linhaLimpa}'`);
                }
            });
        });

        console.log("\n=== ANÁLISE DE SEGURANÇA CONCLUÍDA ===");
        console.log(`Total de ações críticas encontradas: ${alertas}`);

    } catch (erro) {
        console.error("Erro ao ler o histórico de comandos:", erro.message);
    }
}

// Executa a auditoria no arquivo de histórico que criamos
verificarComandosPerigosos("bash_history.txt");