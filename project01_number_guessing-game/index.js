"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
/**
 * Number Guessing Game
 * Computer will pick a random number between 0 to max
 * Player have to guess the number
 * If guess is right player will be rewarded a point,
 * and if wrong computer will be rewarded a point whoever
 * completes the target first wins.
 * Max number and target can be set by the user
 */
//Change this number to increase or decrease the max number e.g if number is set to 5 then computer will pick a number between 0 to 5.
var MAX_NUMBER = 5;
//Change this number to increase or decrease the target e.g if number is set to 5 then whoever reaches 5 points first wins.
var TARGET = 10;
//Main
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var playerScore, computerScore, playerGuess, computerGuess;
        return __generator(this, function (_a) {
            playerScore = 0;
            computerScore = 0;
            while (playerScore < TARGET && computerScore < TARGET) {
                playerGuess = parseInt((0, readline_sync_1.question)("Enter your guess: \n"));
                computerGuess = getRandomInt(MAX_NUMBER);
                if (playerGuess === computerGuess) {
                    playerScore++;
                    logScore(computerGuess, playerScore, computerScore);
                }
                else {
                    computerScore++;
                    logScore(computerGuess, playerScore, computerScore);
                }
            }
            if (playerScore > computerScore) {
                console.log("Player Wins!");
            }
            else {
                console.log("Computer Wins!");
            }
            return [2 /*return*/];
        });
    });
}
main()["catch"](function (error) {
    console.error(error);
});
//Helpers
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function logScore(cGuess, pPoints, cPoints) {
    console.log("Computer Guess: ", cGuess, "\n");
    console.log("Player Score: ", pPoints, "\n");
    console.log("Computer Score: ", cPoints, "\n");
}
