const problemController = require('../controllers/problem.controller');
const problemService = require('../services/problem.service');
const { StatusCodes } = require('http-status-codes');


jest.mock('../services/problem.service');

describe("tests", () => {

    beforeEach(() => {
        req = {};
        res = {
            status: jest.fn(() => res),
            json: jest.fn()
        };

        next = jest.fn();
    });

    test("should get all problems", async () => {
      const problems = [];
      problemService.prototype.getAllProblems.mockResolvedValue(problems);
      await problemController.getProblems(req, res, next);

      expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
      expect(problemService.prototype.getAllProblems).toHaveBeenCalledTimes(1);
      expect(next).not.toHaveBeenCalled();
    });

});

