const express = require('express')
const Router = express.Router()
const ChannelController = require('../controllers/Channels')

Router.get("/channels", (req, res)=>{})
Router.get("/channels/:id", (req, res)=>{})
Router.get("/channels/:id/messages", (req, res)=>{})
Router.get("/channels/:id/message/:idmessage", (req, res)=>{})

Router.post("/channels", (req, res)=>{})

module.exports = Router