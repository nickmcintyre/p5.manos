describe('utils/matter', function () {
  let pInst;

  beforeEach(function () {
    pInst = new p5(function () {});
  });

  afterEach(function () {
    pInst.remove();
  });

  describe('createMatter()', function () {
    it('Returns a Matter object', function () {
      let m = pInst.createMatter();
      const keys = ['name', 'version', 'uses', 'used', 'use',
        'before', 'after', 'Body', 'Composite', 'World', 'Contact',
        'Detector', 'Grid', 'Pairs', 'Pair', 'Query', 'Resolver',
        'SAT', 'Constraint', 'MouseConstraint', 'Common', 'Engine',
        'Events', 'Mouse', 'Runner', 'Sleeping', 'Plugin', 'Bodies',
        'Composites', 'Axes', 'Bounds', 'Svg', 'Vector', 'Vertices',
        'Render', 'RenderPixi'];
      expect(m).to.have.all.keys(keys);
    });
  });
});
