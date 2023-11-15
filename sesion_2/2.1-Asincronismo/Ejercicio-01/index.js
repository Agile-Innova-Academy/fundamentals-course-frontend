const dividir = (number1,number2,callback) => {
    if(number2 ===0 ) {
        callback({
            error: true,
            message: 'No se puede dividir por 0'
        })
    }else {
        const value = number1/number2;
        callback(null,{
            error: false,
            value
        })
    }
}

dividir(10,2,(err,result)=>{
    if(err) console.log('Ha ocurrido un error', err.message)
    else console.log('Resultado obtenido correctamente y es: ', result.value)
})

dividir(10,0,(err,result)=>{
    if(err) console.log('Ha ocurrido un error', err.message)
    else console.log('Resultado obtenido correctamente y es: ', result.value)
})