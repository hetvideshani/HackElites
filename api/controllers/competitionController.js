const mongoose = require('mongoose');
const Competition = require('../models/competitionSchema.js')
const Participant = require('../models/participantSchema.js');

const createComp = async (req, res) => {
    try {
        const competitiondata = new Competition({
            comName: req.body.comName,
            comDescription: req.body.comDescription,
            date: req.body.date,
            venue: req.body.venue,
            maxParticipants: req.body.maxParticipants,
            coordinator: req.body.coordinator,
            comImage: req.body.comImage,
            event: req.body.event
        })
        console.log(competitiondata);

        if (!competitiondata && competitiondata == '') {
            return res.status(400).json({ msg: "Competition not added!" })
        }

        await competitiondata.save();

        res.status(200).json({ msg: "Competition created successfully!" })
    } catch (error) {
        return res.status(500).send("Competition is not created")
    }
}

const getAllComp = async (req, res) => {
    try {
        const compData = await Competition.find();

        if (!compData) {
            return res.status(404).json({ msg: "Competition data not found" });
        }
        // console.log(compData)
        res.status(200).json(compData)

    } catch (error) {
        res.status(500).json({ error: error });
    }
}

const getOneComp = async (req, res) => {
    try {
        // const id = req.params._id;
        const name = req.params.name
        // console.log(id)

        const CompetitionExist = await Competition.findOne(name);
        console.log(CompetitionExist)

        if (!CompetitionExist) {
            return res.status(404).json({ msg: "Competition not found" });
        }
        res.status(200).json(CompetitionExist);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
}

const deleteComp = async (req, res) => {
    try {
        e = await Competition.deleteOne({ eventName: req.params.name });

        c = await Participant.deleteMany({ event: req.params.name });

        console.log(e);
        console.log(c);
        res.status(200).json({ message: "Event delete successfully" });
    }
    catch (err) {
        res.status(500).json({ err });
    }
}

const updateComp = async (req, res) => {
    try {
        const name = req.params.name;
        const CompetitionExist = await Competition.findOne(name)
        console.log(CompetitionExist)

        if (!CompetitionExist) {
            return res.status(404).json({ msg: "Competition not found" });
        }

        await Competition.findOneAndUpdate(name, req.body, { new: true })
        res.status(200).json({ msg: "Competition updated successfully" });

    } catch (error) {
        res.status(500).json({ error: error });
    }

}

module.exports = { createComp, getOneComp, getAllComp, deleteComp, updateComp }