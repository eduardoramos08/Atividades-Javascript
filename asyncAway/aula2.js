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

async function exemploAsyncAwait() {
  logEtapa("1. Inicio (com await)")

  try {
    const resultado = await requicaoSimulada("Vitor", 3000);
    logEtapa(`2. Then ${resultado}`)
    logEtapa("3. So depois do await eu chego aqui")
  } catch (erro) {
    console.error(`Erro capturado com .catch ${erro.message}`)
  } finally {
    logEtapa("4. Continuou o fluxo (Sempre executa)")
  }
}



exemploAsyncAwait()