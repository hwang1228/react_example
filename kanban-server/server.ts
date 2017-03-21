import * as restify from "restify";
import {Card, Task} from "./Card";
import NeDBDataStore = require("nedb");
import CardRepository from "./CardRepository";
import {sendResponse, sendError} from "./utils";

let db = new NeDBDataStore({filename: 'kanbandb.json', autoload: true});
let cardRepository = new CardRepository(db);

var server = restify.createServer({
  name: 'Kanban API Server!',
  version: '1.0.0'
});

server.use(restify.CORS());
server.use(restify.jsonp());

server.opts(/.*/, function (req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", req.header("Access-Control-Request-Method"));
    res.header("Access-Control-Allow-Headers", req.header("Access-Control-Request-Headers"));
    res.send(200);
    return next();
});

//server.use(restify.bodyParser());
server.use(restify.bodyParser({ mapParams: false }));

server.get('/cards', (req, res, next) => {
    console.log("### GET /cards");
    cardRepository
        .findAll()
        .then(sendResponse(res, next))
        .catch(sendError);
});

server.post('/cards', (req, res, next) => {
    console.log("### post /cards");
    //console.log(JSON.stringify(req.body));
    let card: Card = req.body;
    cardRepository
        .addCard(card)
        .then(sendResponse(res, next))
        .catch(sendError);
});

server.post('/cards/:cardId/tasks', (req, res, next) => {
    console.log("### post /cards/:cardId/tasks");    
    let cardId = Number(req.params.cardId);
    let newTask: Task = req.body;

    cardRepository
        .addTask(cardId, newTask)
        .then(sendResponse(res,next))
        .catch(sendError);
});

server.del('/cards/:cardId/tasks/:taskId', (req, res, next) => {
    console.log("### DELETE /cards/:cardId/tasks/:taskId");
    let cardId = Number(req.params.cardId);
    let taskId = Number(req.params.taskId);
    console.log("### DELETE /cards/:cardId/tasks/:taskId");
    cardRepository
        .deleteTask(cardId, taskId)
        .then(sendResponse(res, next))
        .catch(sendError);
});

server.put('/cards/:cardId/tasks/:taskId', (req, res, next) => {
    console.log("### put /cards/:cardId/tasks/:taskId"); 
    let cardId = Number(req.params.cardId);
    let taskId = Number(req.params.taskId);
    let status = req.body.done

    cardRepository
        .updateTaskStatus(cardId, taskId, status)
        .then(sendResponse(res, next))
        .catch(sendError);
});

server.put('/cards/:cardId', (req, res, next) => {
    console.log("### put /cards/:cardId");
    let cardId: number = Number(req.params.cardId);
    let card: Card = req.body;

    cardRepository
        .updateCard(cardId, card)
        .then(sendResponse(res, next))
        .catch(sendError);
});

server.listen(3000, () => {
    console.log(`${server.name} listening at ${server.url}`);
});