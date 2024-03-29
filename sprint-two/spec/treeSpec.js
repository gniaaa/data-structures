describe('tree', function () {
  var tree;

  beforeEach(function () {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function () {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function () {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function () {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function () {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function () {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function () {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should correctly detect parent node', function () {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.children[0].parent).to.eql(tree);
    expect(tree.children[1].parent).to.eql(tree);
    expect(tree.children[0].children[0].parent).to.eql(tree.children[0]);
    expect(tree.children[1].children[0].parent).to.eql(tree.children[1]);
  });

  it('should dissociate from parent node in both ways if removeParent() is called', function () {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    tree.children[0].children[0].removeFromParent();
    tree.children[1].removeFromParent();

    expect(tree.children[0].contains(7)).to.equal(false);
    expect(tree.contains(6)).to.equal(false);
    expect(tree.contains(8)).to.equal(false);

  });

  it('should traverse tree and perform callback on each value in the tree', function () {
    var addSix = function (x) {
      return x + 6;
    };

    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    tree.children[0].children[0].addChild(9);
    tree.traverse(addSix);

    expect(tree.children[0].value).to.equal(11);
    expect(tree.children[1].value).to.equal(12);
    expect(tree.children[0].children[0].value).to.equal(13);
    expect(tree.children[1].children[0].value).to.equal(14);
    expect(tree.children[0].children[0].children[0].value).to.equal(15);
  });

});
