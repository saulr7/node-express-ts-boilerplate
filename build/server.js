"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var postController_1 = __importDefault(require("./controllers/postController"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.configuration();
        this.postController = new postController_1.default();
        this.routes();
    }
    Server.prototype.configuration = function () {
        this.app.set("port", process.env.PORT || 3002);
    };
    Server.prototype.routes = function () {
        this.app.use('/api/posts/', this.postController.router);
        this.app.get('/', function (req, res) {
            res.send("It works");
        });
    };
    Server.prototype.start = function () {
        var PORT = this.app.get("port") || 0;
        this.app.listen(PORT, function () {
            console.log(" Running at " + PORT);
        });
    };
    return Server;
}());
exports.default = Server;
