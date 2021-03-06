
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes[node] ? true : false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this.nodes[node]) {
    delete this.nodes[key][node];
  }
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.nodes[fromNode][toNode]) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode][toNode] = true;
  this.nodes[toNode][fromNode] = true;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (key in this.nodes) {
    cb(key, this.nodes[key], this.nodes);
  }
};


/*
  Complexity: What is the time complexity of the above functions?

this.node[node]
 gives us the edges for key in this.node[7]   del this.node[key][target]
// nodes  { nodes:
            // {3: {5: true, 7: true}}
            // {5: {3: true}}
            // {7:

            // {9: {7: true}}

addNode = O(1)
contains = O(1)
removeNode O(1)
hasEdge O(1)
addEdge O(1)
removeEdge O(1)
forEachNode = O(n)



 */


