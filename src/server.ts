import { App } from "./app"
import { connectDb } from "./db/mongo"

export const startApp = async () => {
    const app = App.getInstance()

    const port = process.env.PORT || 5000

    connectDb()
    app.listen(port, () => {
        console.log(`Servidor en el puerto ${port}`);
    });
}

startApp()