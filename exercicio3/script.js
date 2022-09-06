let nacionalidade = prompt
('Qual a sua nacionalidade? nosso programa so aceita as seguintes nacionalidades brasileira , argentina, uruguaia, chilena, colombiana').toLowerCase().trim()



if (nacionalidade === 'brasileira'){
    console.log('Voce e Brasileiro')
}else if(nacionalidade === 'argentina'){
    console.log('Voce e Argentino')
}else if(nacionalidade === 'uruguaia'){
    console.log('Voce e Uruguaio')
}else if(nacionalidade === 'chilena'){
    console.log('Voce e Chileno')
}else if(nacionalidade === 'colombiana'){
    console.log('Voce e Colombiano')
}else{
    console.log('informacoes nao encontradas')
}

