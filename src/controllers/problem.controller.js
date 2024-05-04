const {StatusCodes} = require('http-status-codes');
const NotImplemented = require('../errors/notInplemented.error');
const BadRequest = require('../errors/BadRequest.error');

function  pingProblemController(req, res) {
    return res.json({message: 'Ping controller is up'})
}

function addProblem(req, res, next) {
  try {
    throw new NotImplemented('addProblem');
  } catch (error) {
    next(error);
  }
}

function getProblem(req, res, next) {
  try {
    throw new NotImplemented("addProblem");
  } catch (error) {
    next(error);
  }
}

function getProblems(req, res, next) {
  try {
    throw new NotImplemented("addProblem");
  } catch (error) {
    next(error);
  }
}

function deleteProblem(req, res, next) {
  try {
    throw new NotImplemented("addProblem");
  } catch (error) {
    next(error);
  }
}

function updateProblem(req, res, next) {
  try {
    throw new NotImplemented("addProblem");
  } catch (error) {
    next(error);
  }
}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  pingProblemController,
};