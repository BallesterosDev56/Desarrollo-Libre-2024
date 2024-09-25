import dotenv from 'dotenv'
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const genAi = new GoogleGenerativeAI("AIzaSyCl1oYF5tmMcmh5WJ8y-7dWvAGO1IfJGMY")
console.log(process.env.PORT);

export async function name(prompt) {
    try{
        const model = genAi.getGenerativeModel({model: "gemini-pro"})
        const result = await model.generateContent(prompt)
        const response = result.response
        console.log(response.text())
    }catch(err){
        console.log(err)
    }
}

const prompt = `Eres un analista de resultado economicos, con base a resultados en pesos colombianos que te voy a dar, 
debes predecir que ventas se van a tener en cada uno de las regiones, por ejemplo te doy.  
Enero = Antioquia: 100, Valle: 10, Cundinamarca: 20, Atlantico: 90, Caldas: 60. Debes con base a los resultados crear una prediccion del proximo mes.
quiero que el formato de tu respuesta sea asi, por ejemplo [110, 20, 10, 23, 72] solo responde con ese array. Que los numeros esten en orden de las regionales, osea 
[Antioquia, Valle, Cundinamarca, Atlantico, Caldas]. Ademas ten buenas fluctuaciones respecto al valor inicial, algo que se vea real pero no debe ser, positivo necesariamente,
puedes aleatoriamente dar algunos a la baja y otros a la alza`

name(prompt)