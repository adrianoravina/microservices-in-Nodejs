import subscribe from '../services/products-service.js'

const  appEvents = (app) => {


    app.use('/app-events', async (req,res,next) => {

        const {payload} = req.body;
        subscribe(payload);

        console.log("========= Products Service received Event ===========")
        return res.status(200).json(payload);
    })

}

export default appEvents;