function logEtapa(etapa) {
    const h = new Date().toLocaleTimeString();
    console.log(`[${h}] ${etapa}`)
}

function requicaoSimulada(nome, tempoMs = 1500, deveFalhar = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (deveFalhar) {
                reject(new Error(`Falha em ${nome}`))
            } else {
                resolve(` ${nome} concluida ${tempoMs}ms`)
            }
        }, tempoMs)
    })
}

async function paralelo() {
    logEtapa(`Paralelo: Iniciando 3 tarefas`);

    const [a, b, c] = await Promise.all([
        requicaoSimulada("Post", 2000),
        requicaoSimulada("Comentario", 1500),
        requicaoSimulada("Likes", 1000)
    ]);

    logEtapa("Paralelo" + a);
    logEtapa("Paralelo" + b);
    logEtapa("Paralelo" + c);

}

paralelo()