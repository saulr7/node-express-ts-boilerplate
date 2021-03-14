"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PostService = /** @class */ (function () {
    function PostService() {
        this.index = function () {
            var posts = [{ ok: true }, { ok: true }, { ok: false }];
            return posts;
        };
        this.create = function () {
            return "create post";
        };
        this.update = function () {
            return "create update";
        };
    }
    return PostService;
}());
exports.default = PostService;
