import dotenv from 'dotenv'
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const genAi = new GoogleGenerativeAI("AIzaSyCl1oYF5tmMcmh5WJ8y-7dWvAGO1IfJGMY")
console.log(process.env.PORT);

export async function analista(consulta) {
    try{
        const prompt = `Eres un analista de resultado economicos, con base a resultados en pesos colombianos que te voy a dar, 
        debes predecir que ventas en el alquiler de bicicletas, se van a tener en cada uno de las regiones, por ejemplo te doy.  
        Enero = Antioquia: 353500, Valle: 810500, Cundinamarca: 428500, Caldas: 132500, Quindio: 101500. Debes con base a los resultados crear una prediccion del proximo mes.
        quiero que el formato de tu respuesta sea asi, por ejemplo [459000, 750500, 374000, 250000, 316000] solo responde con ese array, y los numrtod purfrn tener buenas variaciones numericas, no hagas todas mas altas que las qu hay, se negativo con alginas. Que los numeros esten en orden de las regionales, osea 
        [Antioquia, Valle, Cundinamarca, Atlantico, Caldas]. Ademas ten buenas fluctuaciones respecto al valor inicial, algo que se vea real pero no debe ser, positivo necesariamente, y ten variaciones 
        puedes aleatoriamente dar algunos a la baja y otros a la alza. teniendo en cuenta esto y que el mes actual es septiembre, y los datos que te pase corresponden a este mes, responde a esta pregunta ¿${consulta}?`
        const model = genAi.getGenerativeModel({model: "gemini-pro"})
        const result = await model.generateContent(prompt)
        const response = result.response
        return response.text()
    }catch(err){
        console.log(err)
    }
}

export async function analista2() {
    try{
        const prompt = `Eres un analista de resultado economicos, y exporto en la RENTA de bicicletas en colombia, rentas en las siguientes regiones: Antioquia, Valle, Cundinamarca, Caldas, Quindio.
        teniendo en cuenta que eres el asistente viertual de la pagina ecosena, dame un consejo sobre como mejorar mis ventas en general, en un solo parrafo sin usar caracteres especiales y de forma corta, y no hablando de ventas sino de rentas`
        const model = genAi.getGenerativeModel({model: "gemini-pro"})
        const result = await model.generateContent(prompt)
        const response = result.response
        return response.text()
    }catch(err){
        console.log(err)
    }
}

analista2()