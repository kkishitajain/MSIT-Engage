const router = require("express").Router();
const Event = require("../models/Event");
const moment = require("moment");

router.post(path="/create-event",handlers = async (req ,res ) => {
// console.log(req.body);
const event = Event(req.body);
await event.save();
res.sendStatus(code=201);

})

router.get(path="/get-events",handlers = async (req ,res ) =>{
    const events = await Event.find({
        // moment(new Date("27/04/2016")).format
        start:{$gte:moment(new Date(req.query.start))}, 
        end:{$lte:moment(new Date(req.query.end))},
        // start:{$gte:moment(req.query.start).toDate()}, 
        // end:{$lte:moment(req.query.end).toDate()},
    });
    res.send(events);
});

module.exports = router;
 