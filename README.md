# Tetris Simulation Case

A test case made for a Lead Developer role at a company in the game development industry.

## Instructions

* Create a list of shapes in json file which will be read by the game. The json should provide - type of shape, initial position on grid (which column to start in) and initial shape rotation.
* First shape drops from the top and keeps dropping, until it hits the bottom.
* Next shape will then drop and stacks on top of the previous shape/s.
* When a whole row is complete, destroy the row and slide down all the rows above
it.
* Continue dropping shapes down until no more whole shapes can fit in the grid or until the end of the list of shapes (which ever comes first).
* Scoreboard – add 10 points for each row that is completed.

### Game simulation

* Grid: 3X12
* Dropping shapes:

### Requirements
* Pixi.js
* TypeScript