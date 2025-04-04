var Box2D = {};
(function (n, r) {
  function p() {}
  !(Object.prototype.defineProperty instanceof Function) &&
    Object.prototype.__defineGetter__ instanceof Function &&
    Object.prototype.__defineSetter__ instanceof Function &&
    (Object.defineProperty = function (m, e, j) {
      j.get instanceof Function && m.__defineGetter__(e, j.get);
      j.set instanceof Function && m.__defineSetter__(e, j.set);
    });
  n.inherit = function (m, e) {
    p.prototype = e.prototype;
    m.prototype = new p();
    m.prototype.constructor = m;
  };
  n.generateCallback = function (m, e) {
    return function () {
      e.apply(m, arguments);
    };
  };
  n.NVector = function (m) {
    m === r && (m = 0);
    for (var e = Array(m || 0), j = 0; j < m; ++j) e[j] = 0;
    return e;
  };
  n.is = function (m, e) {
    return null === m
      ? !1
      : (e instanceof Function && m instanceof e) ||
        (m.constructor.__implements != r && m.constructor.__implements[e])
      ? !0
      : !1;
  };
  n.parseUInt = function (m) {
    return Math.abs(parseInt(m));
  };
})(Box2D);
var Vector = Array,
  Vector_a2j_Number = Box2D.NVector;
"undefined" === typeof Box2D && (Box2D = {});
"undefined" === typeof Box2D.Collision && (Box2D.Collision = {});
"undefined" === typeof Box2D.Collision.Shapes && (Box2D.Collision.Shapes = {});
"undefined" === typeof Box2D.Common && (Box2D.Common = {});
"undefined" === typeof Box2D.Common.Math && (Box2D.Common.Math = {});
"undefined" === typeof Box2D.Dynamics && (Box2D.Dynamics = {});
"undefined" === typeof Box2D.Dynamics.Contacts &&
  (Box2D.Dynamics.Contacts = {});
"undefined" === typeof Box2D.Dynamics.Controllers &&
  (Box2D.Dynamics.Controllers = {});
"undefined" === typeof Box2D.Dynamics.Joints && (Box2D.Dynamics.Joints = {});
(function () {
  function n() {
    n.b2AABB.apply(this, arguments);
  }

  function r() {
    r.b2Bound.apply(this, arguments);
  }

  function p() {
    p.b2BoundValues.apply(this, arguments);
    this.constructor === p && this.b2BoundValues.apply(this, arguments);
  }

  function m() {
    m.b2Collision.apply(this, arguments);
  }

  function e() {
    e.b2ContactID.apply(this, arguments);
    this.constructor === e && this.b2ContactID.apply(this, arguments);
  }

  function j() {
    j.b2ContactPoint.apply(this, arguments);
  }

  function x() {
    x.b2Distance.apply(this, arguments);
  }

  function c() {
    c.b2DistanceInput.apply(this, arguments);
  }

  function q() {
    q.b2DistanceOutput.apply(this, arguments);
  }

  function K() {
    K.b2DistanceProxy.apply(this, arguments);
  }

  function D() {
    D.b2DynamicTree.apply(this, arguments);
    this.constructor === D && this.b2DynamicTree.apply(this, arguments);
  }

  function w() {
    w.b2DynamicTreeBroadPhase.apply(this, arguments);
  }

  function A() {
    A.b2DynamicTreeNode.apply(this, arguments);
  }

  function t() {
    t.b2DynamicTreePair.apply(this, arguments);
  }

  function J() {
    J.b2Manifold.apply(this, arguments);
    this.constructor === J && this.b2Manifold.apply(this, arguments);
  }

  function L() {
    L.b2ManifoldPoint.apply(this, arguments);
    this.constructor === L && this.b2ManifoldPoint.apply(this, arguments);
  }

  function d() {
    d.b2Point.apply(this, arguments);
  }

  function z() {
    z.b2RayCastInput.apply(this, arguments);
    this.constructor === z && this.b2RayCastInput.apply(this, arguments);
  }

  function l() {
    l.b2RayCastOutput.apply(this, arguments);
  }

  function C() {
    C.b2Segment.apply(this, arguments);
  }

  function F() {
    F.b2SeparationFunction.apply(this, arguments);
  }

  function H() {
    H.b2Simplex.apply(this, arguments);
    this.constructor === H && this.b2Simplex.apply(this, arguments);
  }

  function B() {
    B.b2SimplexCache.apply(this, arguments);
  }

  function M() {
    M.b2SimplexVertex.apply(this, arguments);
  }

  function E() {
    E.b2TimeOfImpact.apply(this, arguments);
  }

  function G() {
    G.b2TOIInput.apply(this, arguments);
  }

  function N() {
    N.b2WorldManifold.apply(this, arguments);
    this.constructor === N && this.b2WorldManifold.apply(this, arguments);
  }

  function I() {
    I.ClipVertex.apply(this, arguments);
  }

  function a() {
    a.Features.apply(this, arguments);
  }

  function h() {
    h.b2CircleShape.apply(this, arguments);
    this.constructor === h && this.b2CircleShape.apply(this, arguments);
  }

  function s() {
    s.b2EdgeChainDef.apply(this, arguments);
    this.constructor === s && this.b2EdgeChainDef.apply(this, arguments);
  }

  function g() {
    g.b2EdgeShape.apply(this, arguments);
    this.constructor === g && this.b2EdgeShape.apply(this, arguments);
  }

  function u() {
    u.b2MassData.apply(this, arguments);
  }

  function y() {
    y.b2PolygonShape.apply(this, arguments);
    this.constructor === y && this.b2PolygonShape.apply(this, arguments);
  }

  function f() {
    f.b2Shape.apply(this, arguments);
    this.constructor === f && this.b2Shape.apply(this, arguments);
  }

  function b() {
    b.b2Color.apply(this, arguments);
    this.constructor === b && this.b2Color.apply(this, arguments);
  }

  function k() {
    k.b2Settings.apply(this, arguments);
  }

  function v() {
    v.b2Mat22.apply(this, arguments);
    this.constructor === v && this.b2Mat22.apply(this, arguments);
  }

  function O() {
    O.b2Mat33.apply(this, arguments);
    this.constructor === O && this.b2Mat33.apply(this, arguments);
  }

  function za() {
    za.b2Math.apply(this, arguments);
  }

  function Aa() {
    Aa.b2Sweep.apply(this, arguments);
  }

  function P() {
    P.b2Transform.apply(this, arguments);
    this.constructor === P && this.b2Transform.apply(this, arguments);
  }

  function Q() {
    Q.b2Vec2.apply(this, arguments);
    this.constructor === Q && this.b2Vec2.apply(this, arguments);
  }

  function R() {
    R.b2Vec3.apply(this, arguments);
    this.constructor === R && this.b2Vec3.apply(this, arguments);
  }

  function S() {
    S.b2Body.apply(this, arguments);
    this.constructor === S && this.b2Body.apply(this, arguments);
  }

  function T() {
    T.b2BodyDef.apply(this, arguments);
    this.constructor === T && this.b2BodyDef.apply(this, arguments);
  }

  function Ba() {
    Ba.b2ContactFilter.apply(this, arguments);
  }

  function Ca() {
    Ca.b2ContactImpulse.apply(this, arguments);
  }

  function Da() {
    Da.b2ContactListener.apply(this, arguments);
  }

  function U() {
    U.b2ContactManager.apply(this, arguments);
    this.constructor === U && this.b2ContactManager.apply(this, arguments);
  }

  function V() {
    V.b2DebugDraw.apply(this, arguments);
    this.constructor === V && this.b2DebugDraw.apply(this, arguments);
  }

  function Ea() {
    Ea.b2DestructionListener.apply(this, arguments);
  }

  function Fa() {
    Fa.b2FilterData.apply(this, arguments);
  }

  function W() {
    W.b2Fixture.apply(this, arguments);
    this.constructor === W && this.b2Fixture.apply(this, arguments);
  }

  function X() {
    X.b2FixtureDef.apply(this, arguments);
    this.constructor === X && this.b2FixtureDef.apply(this, arguments);
  }

  function Y() {
    Y.b2Island.apply(this, arguments);
    this.constructor === Y && this.b2Island.apply(this, arguments);
  }

  function Ga() {
    Ga.b2TimeStep.apply(this, arguments);
  }

  function Z() {
    Z.b2World.apply(this, arguments);
    this.constructor === Z && this.b2World.apply(this, arguments);
  }

  function Ha() {
    Ha.b2CircleContact.apply(this, arguments);
  }

  function $() {
    $.b2Contact.apply(this, arguments);
    this.constructor === $ && this.b2Contact.apply(this, arguments);
  }

  function aa() {
    aa.b2ContactConstraint.apply(this, arguments);
    this.constructor === aa && this.b2ContactConstraint.apply(this, arguments);
  }

  function Ia() {
    Ia.b2ContactConstraintPoint.apply(this, arguments);
  }

  function Ja() {
    Ja.b2ContactEdge.apply(this, arguments);
  }

  function ba() {
    ba.b2ContactFactory.apply(this, arguments);
    this.constructor === ba && this.b2ContactFactory.apply(this, arguments);
  }

  function Ka() {
    Ka.b2ContactRegister.apply(this, arguments);
  }

  function La() {
    La.b2ContactResult.apply(this, arguments);
  }

  function ca() {
    ca.b2ContactSolver.apply(this, arguments);
    this.constructor === ca && this.b2ContactSolver.apply(this, arguments);
  }

  function Ma() {
    Ma.b2EdgeAndCircleContact.apply(this, arguments);
  }

  function da() {
    da.b2NullContact.apply(this, arguments);
    this.constructor === da && this.b2NullContact.apply(this, arguments);
  }

  function Na() {
    Na.b2PolyAndCircleContact.apply(this, arguments);
  }

  function Oa() {
    Oa.b2PolyAndEdgeContact.apply(this, arguments);
  }

  function Pa() {
    Pa.b2PolygonContact.apply(this, arguments);
  }

  function ea() {
    ea.b2PositionSolverManifold.apply(this, arguments);
    this.constructor === ea &&
      this.b2PositionSolverManifold.apply(this, arguments);
  }

  function Qa() {
    Qa.b2BuoyancyController.apply(this, arguments);
  }

  function Ra() {
    Ra.b2ConstantAccelController.apply(this, arguments);
  }

  function Sa() {
    Sa.b2ConstantForceController.apply(this, arguments);
  }

  function Ta() {
    Ta.b2Controller.apply(this, arguments);
  }

  function Ua() {
    Ua.b2ControllerEdge.apply(this, arguments);
  }

  function Va() {
    Va.b2GravityController.apply(this, arguments);
  }

  function Wa() {
    Wa.b2TensorDampingController.apply(this, arguments);
  }

  function fa() {
    fa.b2DistanceJoint.apply(this, arguments);
    this.constructor === fa && this.b2DistanceJoint.apply(this, arguments);
  }

  function ga() {
    ga.b2DistanceJointDef.apply(this, arguments);
    this.constructor === ga && this.b2DistanceJointDef.apply(this, arguments);
  }

  function ha() {
    ha.b2FrictionJoint.apply(this, arguments);
    this.constructor === ha && this.b2FrictionJoint.apply(this, arguments);
  }

  function ia() {
    ia.b2FrictionJointDef.apply(this, arguments);
    this.constructor === ia && this.b2FrictionJointDef.apply(this, arguments);
  }

  function ja() {
    ja.b2GearJoint.apply(this, arguments);
    this.constructor === ja && this.b2GearJoint.apply(this, arguments);
  }

  function ka() {
    ka.b2GearJointDef.apply(this, arguments);
    this.constructor === ka && this.b2GearJointDef.apply(this, arguments);
  }

  function Xa() {
    Xa.b2Jacobian.apply(this, arguments);
  }

  function la() {
    la.b2Joint.apply(this, arguments);
    this.constructor === la && this.b2Joint.apply(this, arguments);
  }

  function ma() {
    ma.b2JointDef.apply(this, arguments);
    this.constructor === ma && this.b2JointDef.apply(this, arguments);
  }

  function Ya() {
    Ya.b2JointEdge.apply(this, arguments);
  }

  function na() {
    na.b2LineJoint.apply(this, arguments);
    this.constructor === na && this.b2LineJoint.apply(this, arguments);
  }

  function oa() {
    oa.b2LineJointDef.apply(this, arguments);
    this.constructor === oa && this.b2LineJointDef.apply(this, arguments);
  }

  function pa() {
    pa.b2MouseJoint.apply(this, arguments);
    this.constructor === pa && this.b2MouseJoint.apply(this, arguments);
  }

  function qa() {
    qa.b2MouseJointDef.apply(this, arguments);
    this.constructor === qa && this.b2MouseJointDef.apply(this, arguments);
  }

  function ra() {
    ra.b2PrismaticJoint.apply(this, arguments);
    this.constructor === ra && this.b2PrismaticJoint.apply(this, arguments);
  }

  function sa() {
    sa.b2PrismaticJointDef.apply(this, arguments);
    this.constructor === sa && this.b2PrismaticJointDef.apply(this, arguments);
  }

  function ta() {
    ta.b2PulleyJoint.apply(this, arguments);
    this.constructor === ta && this.b2PulleyJoint.apply(this, arguments);
  }

  function ua() {
    ua.b2PulleyJointDef.apply(this, arguments);
    this.constructor === ua && this.b2PulleyJointDef.apply(this, arguments);
  }

  function va() {
    va.b2RevoluteJoint.apply(this, arguments);
    this.constructor === va && this.b2RevoluteJoint.apply(this, arguments);
  }

  function wa() {
    wa.b2RevoluteJointDef.apply(this, arguments);
    this.constructor === wa && this.b2RevoluteJointDef.apply(this, arguments);
  }

  function xa() {
    xa.b2WeldJoint.apply(this, arguments);
    this.constructor === xa && this.b2WeldJoint.apply(this, arguments);
  }

  function ya() {
    ya.b2WeldJointDef.apply(this, arguments);
    this.constructor === ya && this.b2WeldJointDef.apply(this, arguments);
  }
  Box2D.Collision.IBroadPhase = "Box2D.Collision.IBroadPhase";
  Box2D.Collision.b2AABB = n;
  Box2D.Collision.b2Bound = r;
  Box2D.Collision.b2BoundValues = p;
  Box2D.Collision.b2Collision = m;
  Box2D.Collision.b2ContactID = e;
  Box2D.Collision.b2ContactPoint = j;
  Box2D.Collision.b2Distance = x;
  Box2D.Collision.b2DistanceInput = c;
  Box2D.Collision.b2DistanceOutput = q;
  Box2D.Collision.b2DistanceProxy = K;
  Box2D.Collision.b2DynamicTree = D;
  Box2D.Collision.b2DynamicTreeBroadPhase = w;
  Box2D.Collision.b2DynamicTreeNode = A;
  Box2D.Collision.b2DynamicTreePair = t;
  Box2D.Collision.b2Manifold = J;
  Box2D.Collision.b2ManifoldPoint = L;
  Box2D.Collision.b2Point = d;
  Box2D.Collision.b2RayCastInput = z;
  Box2D.Collision.b2RayCastOutput = l;
  Box2D.Collision.b2Segment = C;
  Box2D.Collision.b2SeparationFunction = F;
  Box2D.Collision.b2Simplex = H;
  Box2D.Collision.b2SimplexCache = B;
  Box2D.Collision.b2SimplexVertex = M;
  Box2D.Collision.b2TimeOfImpact = E;
  Box2D.Collision.b2TOIInput = G;
  Box2D.Collision.b2WorldManifold = N;
  Box2D.Collision.ClipVertex = I;
  Box2D.Collision.Features = a;
  Box2D.Collision.Shapes.b2CircleShape = h;
  Box2D.Collision.Shapes.b2EdgeChainDef = s;
  Box2D.Collision.Shapes.b2EdgeShape = g;
  Box2D.Collision.Shapes.b2MassData = u;
  Box2D.Collision.Shapes.b2PolygonShape = y;
  Box2D.Collision.Shapes.b2Shape = f;
  Box2D.Common.b2internal = "Box2D.Common.b2internal";
  Box2D.Common.b2Color = b;
  Box2D.Common.b2Settings = k;
  Box2D.Common.Math.b2Mat22 = v;
  Box2D.Common.Math.b2Mat33 = O;
  Box2D.Common.Math.b2Math = za;
  Box2D.Common.Math.b2Sweep = Aa;
  Box2D.Common.Math.b2Transform = P;
  Box2D.Common.Math.b2Vec2 = Q;
  Box2D.Common.Math.b2Vec3 = R;
  Box2D.Dynamics.b2Body = S;
  Box2D.Dynamics.b2BodyDef = T;
  Box2D.Dynamics.b2ContactFilter = Ba;
  Box2D.Dynamics.b2ContactImpulse = Ca;
  Box2D.Dynamics.b2ContactListener = Da;
  Box2D.Dynamics.b2ContactManager = U;
  Box2D.Dynamics.b2DebugDraw = V;
  Box2D.Dynamics.b2DestructionListener = Ea;
  Box2D.Dynamics.b2FilterData = Fa;
  Box2D.Dynamics.b2Fixture = W;
  Box2D.Dynamics.b2FixtureDef = X;
  Box2D.Dynamics.b2Island = Y;
  Box2D.Dynamics.b2TimeStep = Ga;
  Box2D.Dynamics.b2World = Z;
  Box2D.Dynamics.Contacts.b2CircleContact = Ha;
  Box2D.Dynamics.Contacts.b2Contact = $;
  Box2D.Dynamics.Contacts.b2ContactConstraint = aa;
  Box2D.Dynamics.Contacts.b2ContactConstraintPoint = Ia;
  Box2D.Dynamics.Contacts.b2ContactEdge = Ja;
  Box2D.Dynamics.Contacts.b2ContactFactory = ba;
  Box2D.Dynamics.Contacts.b2ContactRegister = Ka;
  Box2D.Dynamics.Contacts.b2ContactResult = La;
  Box2D.Dynamics.Contacts.b2ContactSolver = ca;
  Box2D.Dynamics.Contacts.b2EdgeAndCircleContact = Ma;
  Box2D.Dynamics.Contacts.b2NullContact = da;
  Box2D.Dynamics.Contacts.b2PolyAndCircleContact = Na;
  Box2D.Dynamics.Contacts.b2PolyAndEdgeContact = Oa;
  Box2D.Dynamics.Contacts.b2PolygonContact = Pa;
  Box2D.Dynamics.Contacts.b2PositionSolverManifold = ea;
  Box2D.Dynamics.Controllers.b2BuoyancyController = Qa;
  Box2D.Dynamics.Controllers.b2ConstantAccelController = Ra;
  Box2D.Dynamics.Controllers.b2ConstantForceController = Sa;
  Box2D.Dynamics.Controllers.b2Controller = Ta;
  Box2D.Dynamics.Controllers.b2ControllerEdge = Ua;
  Box2D.Dynamics.Controllers.b2GravityController = Va;
  Box2D.Dynamics.Controllers.b2TensorDampingController = Wa;
  Box2D.Dynamics.Joints.b2DistanceJoint = fa;
  Box2D.Dynamics.Joints.b2DistanceJointDef = ga;
  Box2D.Dynamics.Joints.b2FrictionJoint = ha;
  Box2D.Dynamics.Joints.b2FrictionJointDef = ia;
  Box2D.Dynamics.Joints.b2GearJoint = ja;
  Box2D.Dynamics.Joints.b2GearJointDef = ka;
  Box2D.Dynamics.Joints.b2Jacobian = Xa;
  Box2D.Dynamics.Joints.b2Joint = la;
  Box2D.Dynamics.Joints.b2JointDef = ma;
  Box2D.Dynamics.Joints.b2JointEdge = Ya;
  Box2D.Dynamics.Joints.b2LineJoint = na;
  Box2D.Dynamics.Joints.b2LineJointDef = oa;
  Box2D.Dynamics.Joints.b2MouseJoint = pa;
  Box2D.Dynamics.Joints.b2MouseJointDef = qa;
  Box2D.Dynamics.Joints.b2PrismaticJoint = ra;
  Box2D.Dynamics.Joints.b2PrismaticJointDef = sa;
  Box2D.Dynamics.Joints.b2PulleyJoint = ta;
  Box2D.Dynamics.Joints.b2PulleyJointDef = ua;
  Box2D.Dynamics.Joints.b2RevoluteJoint = va;
  Box2D.Dynamics.Joints.b2RevoluteJointDef = wa;
  Box2D.Dynamics.Joints.b2WeldJoint = xa;
  Box2D.Dynamics.Joints.b2WeldJointDef = ya;
})();
Box2D.postDefs = [];
(function () {
  var n = Box2D.Collision.Shapes.b2CircleShape,
    r = Box2D.Collision.Shapes.b2PolygonShape,
    p = Box2D.Collision.Shapes.b2Shape,
    m = Box2D.Common.b2Settings,
    e = Box2D.Common.Math.b2Math,
    j = Box2D.Common.Math.b2Sweep,
    x = Box2D.Common.Math.b2Transform,
    c = Box2D.Common.Math.b2Vec2,
    q = Box2D.Collision.b2AABB,
    K = Box2D.Collision.b2Bound,
    D = Box2D.Collision.b2BoundValues,
    w = Box2D.Collision.b2Collision,
    A = Box2D.Collision.b2ContactID,
    t = Box2D.Collision.b2ContactPoint,
    J = Box2D.Collision.b2Distance,
    L = Box2D.Collision.b2DistanceInput,
    d = Box2D.Collision.b2DistanceOutput,
    z = Box2D.Collision.b2DistanceProxy,
    l = Box2D.Collision.b2DynamicTree,
    C = Box2D.Collision.b2DynamicTreeBroadPhase,
    F = Box2D.Collision.b2DynamicTreeNode,
    H = Box2D.Collision.b2DynamicTreePair,
    B = Box2D.Collision.b2Manifold,
    M = Box2D.Collision.b2ManifoldPoint,
    E = Box2D.Collision.b2Point,
    G = Box2D.Collision.b2RayCastInput,
    N = Box2D.Collision.b2RayCastOutput,
    I = Box2D.Collision.b2Segment,
    a = Box2D.Collision.b2SeparationFunction,
    h = Box2D.Collision.b2Simplex,
    s = Box2D.Collision.b2SimplexCache,
    g = Box2D.Collision.b2SimplexVertex,
    u = Box2D.Collision.b2TimeOfImpact,
    y = Box2D.Collision.b2TOIInput,
    f = Box2D.Collision.b2WorldManifold,
    b = Box2D.Collision.ClipVertex,
    k = Box2D.Collision.Features,
    v = Box2D.Collision.IBroadPhase;
  q.b2AABB = function () {
    this.lowerBound = new c();
    this.upperBound = new c();
  };
  q.prototype.IsValid = function () {
    var b = this.upperBound.y - this.lowerBound.y;
    return (b =
      (b = 0 <= this.upperBound.x - this.lowerBound.x && 0 <= b) &&
      this.lowerBound.IsValid() &&
      this.upperBound.IsValid());
  };
  q.prototype.GetCenter = function () {
    return new c(
      (this.lowerBound.x + this.upperBound.x) / 2,
      (this.lowerBound.y + this.upperBound.y) / 2
    );
  };
  q.prototype.GetExtents = function () {
    return new c(
      (this.upperBound.x - this.lowerBound.x) / 2,
      (this.upperBound.y - this.lowerBound.y) / 2
    );
  };
  q.prototype.Contains = function (b) {
    var k;
    return (k =
      (k =
        (k =
          (k = this.lowerBound.x <= b.lowerBound.x) &&
          this.lowerBound.y <= b.lowerBound.y) &&
        b.upperBound.x <= this.upperBound.x) &&
      b.upperBound.y <= this.upperBound.y);
  };
  q.prototype.RayCast = function (b, k) {
    var a = -Number.MAX_VALUE,
      h = Number.MAX_VALUE,
      g = k.p1.x,
      v = k.p1.y,
      s = k.p2.x - k.p1.x,
      d = k.p2.y - k.p1.y,
      f = Math.abs(s),
      u = Math.abs(d),
      c = b.normal,
      y = 0,
      l = 0,
      e = (y = 0),
      e = 0;
    if (f < Number.MIN_VALUE) {
      if (g < this.lowerBound.x || this.upperBound.x < g) return !1;
    } else if (
      ((y = 1 / s),
      (l = (this.lowerBound.x - g) * y),
      (y *= this.upperBound.x - g),
      (e = -1),
      l > y && ((e = l), (l = y), (y = e), (e = 1)),
      l > a && ((c.x = e), (c.y = 0), (a = l)),
      (h = Math.min(h, y)),
      a > h)
    )
      return !1;
    if (u < Number.MIN_VALUE) {
      if (v < this.lowerBound.y || this.upperBound.y < v) return !1;
    } else if (
      ((y = 1 / d),
      (l = (this.lowerBound.y - v) * y),
      (y *= this.upperBound.y - v),
      (e = -1),
      l > y && ((e = l), (l = y), (y = e), (e = 1)),
      l > a && ((c.y = e), (c.x = 0), (a = l)),
      (h = Math.min(h, y)),
      a > h)
    )
      return !1;
    b.fraction = a;
    return !0;
  };
  q.prototype.TestOverlap = function (b) {
    var k = b.lowerBound.y - this.upperBound.y,
      a = this.lowerBound.y - b.upperBound.y;
    return 0 < b.lowerBound.x - this.upperBound.x ||
      0 < k ||
      0 < this.lowerBound.x - b.upperBound.x ||
      0 < a
      ? !1
      : !0;
  };
  q.Combine = function (b, k) {
    var a = new q();
    a.Combine(b, k);
    return a;
  };
  q.prototype.Combine = function (b, k) {
    this.lowerBound.x = Math.min(b.lowerBound.x, k.lowerBound.x);
    this.lowerBound.y = Math.min(b.lowerBound.y, k.lowerBound.y);
    this.upperBound.x = Math.max(b.upperBound.x, k.upperBound.x);
    this.upperBound.y = Math.max(b.upperBound.y, k.upperBound.y);
  };
  K.b2Bound = function () {};
  K.prototype.IsLower = function () {
    return 0 == (this.value & 1);
  };
  K.prototype.IsUpper = function () {
    return 1 == (this.value & 1);
  };
  K.prototype.Swap = function (b) {
    var k = this.value,
      a = this.proxy,
      h = this.stabbingCount;
    this.value = b.value;
    this.proxy = b.proxy;
    this.stabbingCount = b.stabbingCount;
    b.value = k;
    b.proxy = a;
    b.stabbingCount = h;
  };
  D.b2BoundValues = function () {};
  D.prototype.b2BoundValues = function () {
    this.lowerValues = new Vector_a2j_Number();
    this.lowerValues[0] = 0;
    this.lowerValues[1] = 0;
    this.upperValues = new Vector_a2j_Number();
    this.upperValues[0] = 0;
    this.upperValues[1] = 0;
  };
  w.b2Collision = function () {};
  w.ClipSegmentToLine = function (b, k, a, h) {
    void 0 === h && (h = 0);
    var g,
      v = 0;
    g = k[0];
    var s = g.v;
    g = k[1];
    var d = g.v,
      f = a.x * s.x + a.y * s.y - h;
    g = a.x * d.x + a.y * d.y - h;
    0 >= f && b[v++].Set(k[0]);
    0 >= g && b[v++].Set(k[1]);
    0 > f * g &&
      ((a = f / (f - g)),
      (g = b[v]),
      (g = g.v),
      (g.x = s.x + a * (d.x - s.x)),
      (g.y = s.y + a * (d.y - s.y)),
      (g = b[v]),
      (g.id = (0 < f ? k[0] : k[1]).id),
      ++v);
    return v;
  };
  w.EdgeSeparation = function (b, k, a, h, g) {
    void 0 === a && (a = 0);
    parseInt(b.m_vertexCount);
    var v = b.m_vertices,
      b = b.m_normals,
      s = parseInt(h.m_vertexCount),
      d = h.m_vertices,
      f,
      u;
    f = k.R;
    u = b[a];
    b = f.col1.x * u.x + f.col2.x * u.y;
    h = f.col1.y * u.x + f.col2.y * u.y;
    f = g.R;
    var y = f.col1.x * b + f.col1.y * h;
    f = f.col2.x * b + f.col2.y * h;
    for (var c = 0, l = Number.MAX_VALUE, e = 0; e < s; ++e)
      (u = d[e]), (u = u.x * y + u.y * f), u < l && ((l = u), (c = e));
    u = v[a];
    f = k.R;
    a = k.position.x + (f.col1.x * u.x + f.col2.x * u.y);
    k = k.position.y + (f.col1.y * u.x + f.col2.y * u.y);
    u = d[c];
    f = g.R;
    v = g.position.x + (f.col1.x * u.x + f.col2.x * u.y);
    g = g.position.y + (f.col1.y * u.x + f.col2.y * u.y);
    return (v - a) * b + (g - k) * h;
  };
  w.FindMaxSeparation = function (b, k, a, h, g) {
    var v = parseInt(k.m_vertexCount),
      s = k.m_normals,
      f,
      d;
    d = g.R;
    f = h.m_centroid;
    var u = g.position.x + (d.col1.x * f.x + d.col2.x * f.y),
      y = g.position.y + (d.col1.y * f.x + d.col2.y * f.y);
    d = a.R;
    f = k.m_centroid;
    u -= a.position.x + (d.col1.x * f.x + d.col2.x * f.y);
    y -= a.position.y + (d.col1.y * f.x + d.col2.y * f.y);
    d = u * a.R.col1.x + y * a.R.col1.y;
    for (
      var y = u * a.R.col2.x + y * a.R.col2.y,
        u = 0,
        c = -Number.MAX_VALUE,
        l = 0;
      l < v;
      ++l
    )
      (f = s[l]), (f = f.x * d + f.y * y), f > c && ((c = f), (u = l));
    s = w.EdgeSeparation(k, a, u, h, g);
    f = parseInt(0 <= u - 1 ? u - 1 : v - 1);
    d = w.EdgeSeparation(k, a, f, h, g);
    var y = parseInt(u + 1 < v ? u + 1 : 0),
      c = w.EdgeSeparation(k, a, y, h, g),
      e = (l = 0),
      m = 0;
    if (d > s && d > c) (m = -1), (l = f), (e = d);
    else if (c > s) (m = 1), (l = y), (e = c);
    else return (b[0] = u), s;
    for (;;)
      if (
        ((u = -1 == m ? (0 <= l - 1 ? l - 1 : v - 1) : l + 1 < v ? l + 1 : 0),
        (s = w.EdgeSeparation(k, a, u, h, g)),
        s > e)
      )
        (l = u), (e = s);
      else break;
    b[0] = l;
    return e;
  };
  w.FindIncidentEdge = function (b, k, a, h, g, v) {
    void 0 === h && (h = 0);
    parseInt(k.m_vertexCount);
    var s = k.m_normals,
      f = parseInt(g.m_vertexCount),
      k = g.m_vertices,
      g = g.m_normals,
      d;
    d = a.R;
    var a = s[h],
      s = d.col1.x * a.x + d.col2.x * a.y,
      u = d.col1.y * a.x + d.col2.y * a.y;
    d = v.R;
    a = d.col1.x * s + d.col1.y * u;
    u = d.col2.x * s + d.col2.y * u;
    s = a;
    d = 0;
    for (var y = Number.MAX_VALUE, c = 0; c < f; ++c)
      (a = g[c]), (a = s * a.x + u * a.y), a < y && ((y = a), (d = c));
    g = parseInt(d);
    s = parseInt(g + 1 < f ? g + 1 : 0);
    f = b[0];
    a = k[g];
    d = v.R;
    f.v.x = v.position.x + (d.col1.x * a.x + d.col2.x * a.y);
    f.v.y = v.position.y + (d.col1.y * a.x + d.col2.y * a.y);
    f.id.features.referenceEdge = h;
    f.id.features.incidentEdge = g;
    f.id.features.incidentVertex = 0;
    f = b[1];
    a = k[s];
    d = v.R;
    f.v.x = v.position.x + (d.col1.x * a.x + d.col2.x * a.y);
    f.v.y = v.position.y + (d.col1.y * a.x + d.col2.y * a.y);
    f.id.features.referenceEdge = h;
    f.id.features.incidentEdge = s;
    f.id.features.incidentVertex = 1;
  };
  w.MakeClipPointVector = function () {
    var O = new Vector(2);
    O[0] = new b();
    O[1] = new b();
    return O;
  };
  w.CollidePolygons = function (b, a, k, h, g) {
    var v;
    b.m_pointCount = 0;
    var s = a.m_radius + h.m_radius;
    w.s_edgeAO[0] = 0;
    var f = w.FindMaxSeparation(w.s_edgeAO, a, k, h, g);
    v = w.s_edgeAO[0];
    if (!(f > s)) {
      var d;
      w.s_edgeBO[0] = 0;
      var u = w.FindMaxSeparation(w.s_edgeBO, h, g, a, k);
      d = w.s_edgeBO[0];
      if (!(u > s)) {
        var y = 0,
          c = 0;
        u > 0.98 * f + 0.001
          ? ((f = h),
            (h = a),
            (a = g),
            (y = d),
            (b.m_type = B.e_faceB),
            (c = 1))
          : ((f = a),
            (a = k),
            (k = g),
            (y = v),
            (b.m_type = B.e_faceA),
            (c = 0));
        v = w.s_incidentEdge;
        w.FindIncidentEdge(v, f, a, y, h, k);
        d = parseInt(f.m_vertexCount);
        var g = f.m_vertices,
          f = g[y],
          l;
        l = y + 1 < d ? g[parseInt(y + 1)] : g[0];
        y = w.s_localTangent;
        y.Set(l.x - f.x, l.y - f.y);
        y.Normalize();
        g = w.s_localNormal;
        g.x = y.y;
        g.y = -y.x;
        h = w.s_planePoint;
        h.Set(0.5 * (f.x + l.x), 0.5 * (f.y + l.y));
        u = w.s_tangent;
        d = a.R;
        u.x = d.col1.x * y.x + d.col2.x * y.y;
        u.y = d.col1.y * y.x + d.col2.y * y.y;
        var e = w.s_tangent2;
        e.x = -u.x;
        e.y = -u.y;
        y = w.s_normal;
        y.x = u.y;
        y.y = -u.x;
        var z = w.s_v11,
          j = w.s_v12;
        z.x = a.position.x + (d.col1.x * f.x + d.col2.x * f.y);
        z.y = a.position.y + (d.col1.y * f.x + d.col2.y * f.y);
        j.x = a.position.x + (d.col1.x * l.x + d.col2.x * l.y);
        j.y = a.position.y + (d.col1.y * l.x + d.col2.y * l.y);
        a = y.x * z.x + y.y * z.y;
        d = u.x * j.x + u.y * j.y + s;
        l = w.s_clipPoints1;
        f = w.s_clipPoints2;
        j = 0;
        j = w.ClipSegmentToLine(l, v, e, -u.x * z.x - u.y * z.y + s);
        if (!(2 > j) && ((j = w.ClipSegmentToLine(f, l, u, d)), !(2 > j))) {
          b.m_localPlaneNormal.SetV(g);
          b.m_localPoint.SetV(h);
          for (h = g = 0; h < m.b2_maxManifoldPoints; ++h)
            (v = f[h]),
              y.x * v.v.x + y.y * v.v.y - a <= s &&
                ((u = b.m_points[g]),
                (d = k.R),
                (e = v.v.x - k.position.x),
                (z = v.v.y - k.position.y),
                (u.m_localPoint.x = e * d.col1.x + z * d.col1.y),
                (u.m_localPoint.y = e * d.col2.x + z * d.col2.y),
                u.m_id.Set(v.id),
                (u.m_id.features.flip = c),
                ++g);
          b.m_pointCount = g;
        }
      }
    }
  };
  w.CollideCircles = function (b, a, k, g, h) {
    b.m_pointCount = 0;
    var v, d;
    v = k.R;
    d = a.m_p;
    var f = k.position.x + (v.col1.x * d.x + v.col2.x * d.y),
      k = k.position.y + (v.col1.y * d.x + v.col2.y * d.y);
    v = h.R;
    d = g.m_p;
    f = h.position.x + (v.col1.x * d.x + v.col2.x * d.y) - f;
    h = h.position.y + (v.col1.y * d.x + v.col2.y * d.y) - k;
    v = a.m_radius + g.m_radius;
    f * f + h * h > v * v ||
      ((b.m_type = B.e_circles),
      b.m_localPoint.SetV(a.m_p),
      b.m_localPlaneNormal.SetZero(),
      (b.m_pointCount = 1),
      b.m_points[0].m_localPoint.SetV(g.m_p),
      (b.m_points[0].m_id.key = 0));
  };
  w.CollidePolygonAndCircle = function (b, a, k, h, g) {
    var v = (b.m_pointCount = 0),
      d = 0,
      f,
      s;
    s = g.R;
    f = h.m_p;
    var u = g.position.y + (s.col1.y * f.x + s.col2.y * f.y),
      v = g.position.x + (s.col1.x * f.x + s.col2.x * f.y) - k.position.x,
      d = u - k.position.y;
    s = k.R;
    k = v * s.col1.x + d * s.col1.y;
    s = v * s.col2.x + d * s.col2.y;
    for (
      var y = 0,
        u = -Number.MAX_VALUE,
        g = a.m_radius + h.m_radius,
        c = parseInt(a.m_vertexCount),
        l = a.m_vertices,
        a = a.m_normals,
        e = 0;
      e < c;
      ++e
    ) {
      f = l[e];
      v = k - f.x;
      d = s - f.y;
      f = a[e];
      v = f.x * v + f.y * d;
      if (v > g) return;
      v > u && ((u = v), (y = e));
    }
    v = parseInt(y);
    d = parseInt(v + 1 < c ? v + 1 : 0);
    f = l[v];
    l = l[d];
    u < Number.MIN_VALUE
      ? ((b.m_pointCount = 1),
        (b.m_type = B.e_faceA),
        b.m_localPlaneNormal.SetV(a[y]),
        (b.m_localPoint.x = 0.5 * (f.x + l.x)),
        (b.m_localPoint.y = 0.5 * (f.y + l.y)),
        b.m_points[0].m_localPoint.SetV(h.m_p),
        (b.m_points[0].m_id.key = 0))
      : ((u = (k - l.x) * (f.x - l.x) + (s - l.y) * (f.y - l.y)),
        0 >= (k - f.x) * (l.x - f.x) + (s - f.y) * (l.y - f.y)
          ? (k - f.x) * (k - f.x) + (s - f.y) * (s - f.y) > g * g ||
            ((b.m_pointCount = 1),
            (b.m_type = B.e_faceA),
            (b.m_localPlaneNormal.x = k - f.x),
            (b.m_localPlaneNormal.y = s - f.y),
            b.m_localPlaneNormal.Normalize(),
            b.m_localPoint.SetV(f),
            b.m_points[0].m_localPoint.SetV(h.m_p),
            (b.m_points[0].m_id.key = 0))
          : 0 >= u
          ? (k - l.x) * (k - l.x) + (s - l.y) * (s - l.y) > g * g ||
            ((b.m_pointCount = 1),
            (b.m_type = B.e_faceA),
            (b.m_localPlaneNormal.x = k - l.x),
            (b.m_localPlaneNormal.y = s - l.y),
            b.m_localPlaneNormal.Normalize(),
            b.m_localPoint.SetV(l),
            b.m_points[0].m_localPoint.SetV(h.m_p),
            (b.m_points[0].m_id.key = 0))
          : ((y = 0.5 * (f.x + l.x)),
            (f = 0.5 * (f.y + l.y)),
            (u = (k - y) * a[v].x + (s - f) * a[v].y),
            u > g ||
              ((b.m_pointCount = 1),
              (b.m_type = B.e_faceA),
              (b.m_localPlaneNormal.x = a[v].x),
              (b.m_localPlaneNormal.y = a[v].y),
              b.m_localPlaneNormal.Normalize(),
              b.m_localPoint.Set(y, f),
              b.m_points[0].m_localPoint.SetV(h.m_p),
              (b.m_points[0].m_id.key = 0))));
  };
  w.TestOverlap = function (b, a) {
    var k = a.lowerBound,
      g = b.upperBound,
      h = k.x - g.x,
      v = k.y - g.y,
      k = b.lowerBound,
      g = a.upperBound,
      f = k.y - g.y;
    return 0 < h || 0 < v || 0 < k.x - g.x || 0 < f ? !1 : !0;
  };
  Box2D.postDefs.push(function () {
    Box2D.Collision.b2Collision.s_incidentEdge = w.MakeClipPointVector();
    Box2D.Collision.b2Collision.s_clipPoints1 = w.MakeClipPointVector();
    Box2D.Collision.b2Collision.s_clipPoints2 = w.MakeClipPointVector();
    Box2D.Collision.b2Collision.s_edgeAO = new Vector_a2j_Number(1);
    Box2D.Collision.b2Collision.s_edgeBO = new Vector_a2j_Number(1);
    Box2D.Collision.b2Collision.s_localTangent = new c();
    Box2D.Collision.b2Collision.s_localNormal = new c();
    Box2D.Collision.b2Collision.s_planePoint = new c();
    Box2D.Collision.b2Collision.s_normal = new c();
    Box2D.Collision.b2Collision.s_tangent = new c();
    Box2D.Collision.b2Collision.s_tangent2 = new c();
    Box2D.Collision.b2Collision.s_v11 = new c();
    Box2D.Collision.b2Collision.s_v12 = new c();
    Box2D.Collision.b2Collision.b2CollidePolyTempVec = new c();
    Box2D.Collision.b2Collision.b2_nullFeature = 255;
  });
  A.b2ContactID = function () {
    this.features = new k();
  };
  A.prototype.b2ContactID = function () {
    this.features._m_id = this;
  };
  A.prototype.Set = function (b) {
    this.key = b._key;
  };
  A.prototype.Copy = function () {
    var b = new A();
    b.key = this.key;
    return b;
  };
  Object.defineProperty(A.prototype, "key", {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this._key;
    },
  });
  Object.defineProperty(A.prototype, "key", {
    enumerable: !1,
    configurable: !0,
    set: function (b) {
      void 0 === b && (b = 0);
      this._key = b;
      this.features._referenceEdge = this._key & 255;
      this.features._incidentEdge = ((this._key & 65280) >> 8) & 255;
      this.features._incidentVertex = ((this._key & 16711680) >> 16) & 255;
      this.features._flip = ((this._key & 4278190080) >> 24) & 255;
    },
  });
  t.b2ContactPoint = function () {
    this.position = new c();
    this.velocity = new c();
    this.normal = new c();
    this.id = new A();
  };
  J.b2Distance = function () {};
  J.Distance = function (b, k, a) {
    ++J.b2_gjkCalls;
    var g = a.proxyA,
      h = a.proxyB,
      v = a.transformA,
      f = a.transformB,
      d = J.s_simplex;
    d.ReadCache(k, g, v, h, f);
    var s = d.m_vertices,
      u = J.s_saveA,
      y = J.s_saveB,
      l = 0;
    d.GetClosestPoint().LengthSquared();
    for (var z = 0, j, q = 0; 20 > q; ) {
      l = d.m_count;
      for (z = 0; z < l; z++) (u[z] = s[z].indexA), (y[z] = s[z].indexB);
      switch (d.m_count) {
        case 1:
          break;
        case 2:
          d.Solve2();
          break;
        case 3:
          d.Solve3();
          break;
        default:
          m.b2Assert(!1);
      }
      if (3 == d.m_count) break;
      j = d.GetClosestPoint();
      j.LengthSquared();
      z = d.GetSearchDirection();
      if (z.LengthSquared() < Number.MIN_VALUE * Number.MIN_VALUE) break;
      j = s[d.m_count];
      j.indexA = g.GetSupport(e.MulTMV(v.R, z.GetNegative()));
      j.wA = e.MulX(v, g.GetVertex(j.indexA));
      j.indexB = h.GetSupport(e.MulTMV(f.R, z));
      j.wB = e.MulX(f, h.GetVertex(j.indexB));
      j.w = e.SubtractVV(j.wB, j.wA);
      ++q;
      ++J.b2_gjkIters;
      for (var C = !1, z = 0; z < l; z++)
        if (j.indexA == u[z] && j.indexB == y[z]) {
          C = !0;
          break;
        }
      if (C) break;
      ++d.m_count;
    }
    J.b2_gjkMaxIters = e.Max(J.b2_gjkMaxIters, q);
    d.GetWitnessPoints(b.pointA, b.pointB);
    b.distance = e.SubtractVV(b.pointA, b.pointB).Length();
    b.iterations = q;
    d.WriteCache(k);
    a.useRadii &&
      ((k = g.m_radius),
      (h = h.m_radius),
      b.distance > k + h && b.distance > Number.MIN_VALUE
        ? ((b.distance -= k + h),
          (a = e.SubtractVV(b.pointB, b.pointA)),
          a.Normalize(),
          (b.pointA.x += k * a.x),
          (b.pointA.y += k * a.y),
          (b.pointB.x -= h * a.x),
          (b.pointB.y -= h * a.y))
        : ((j = new c()),
          (j.x = 0.5 * (b.pointA.x + b.pointB.x)),
          (j.y = 0.5 * (b.pointA.y + b.pointB.y)),
          (b.pointA.x = b.pointB.x = j.x),
          (b.pointA.y = b.pointB.y = j.y),
          (b.distance = 0)));
  };
  Box2D.postDefs.push(function () {
    Box2D.Collision.b2Distance.s_simplex = new h();
    Box2D.Collision.b2Distance.s_saveA = new Vector_a2j_Number(3);
    Box2D.Collision.b2Distance.s_saveB = new Vector_a2j_Number(3);
  });
  L.b2DistanceInput = function () {};
  d.b2DistanceOutput = function () {
    this.pointA = new c();
    this.pointB = new c();
  };
  z.b2DistanceProxy = function () {};
  z.prototype.Set = function (b) {
    switch (b.GetType()) {
      case p.e_circleShape:
        b = b instanceof n ? b : null;
        this.m_vertices = new Vector(1, !0);
        this.m_vertices[0] = b.m_p;
        this.m_count = 1;
        this.m_radius = b.m_radius;
        break;
      case p.e_polygonShape:
        b = b instanceof r ? b : null;
        this.m_vertices = b.m_vertices;
        this.m_count = b.m_vertexCount;
        this.m_radius = b.m_radius;
        break;
      default:
        m.b2Assert(!1);
    }
  };
  z.prototype.GetSupport = function (b) {
    for (
      var a = 0,
        k = this.m_vertices[0].x * b.x + this.m_vertices[0].y * b.y,
        g = 1;
      g < this.m_count;
      ++g
    ) {
      var h = this.m_vertices[g].x * b.x + this.m_vertices[g].y * b.y;
      h > k && ((a = g), (k = h));
    }
    return a;
  };
  z.prototype.GetSupportVertex = function (b) {
    for (
      var a = 0,
        k = this.m_vertices[0].x * b.x + this.m_vertices[0].y * b.y,
        g = 1;
      g < this.m_count;
      ++g
    ) {
      var h = this.m_vertices[g].x * b.x + this.m_vertices[g].y * b.y;
      h > k && ((a = g), (k = h));
    }
    return this.m_vertices[a];
  };
  z.prototype.GetVertexCount = function () {
    return this.m_count;
  };
  z.prototype.GetVertex = function (b) {
    void 0 === b && (b = 0);
    m.b2Assert(0 <= b && b < this.m_count);
    return this.m_vertices[b];
  };
  l.b2DynamicTree = function () {};
  l.prototype.b2DynamicTree = function () {
    this.m_freeList = this.m_root = null;
    this.m_insertionCount = this.m_path = 0;
  };
  l.prototype.CreateProxy = function (b, a) {
    var k = this.AllocateNode(),
      g = m.b2_aabbExtension,
      h = m.b2_aabbExtension;
    k.aabb.lowerBound.x = b.lowerBound.x - g;
    k.aabb.lowerBound.y = b.lowerBound.y - h;
    k.aabb.upperBound.x = b.upperBound.x + g;
    k.aabb.upperBound.y = b.upperBound.y + h;
    k.userData = a;
    this.InsertLeaf(k);
    return k;
  };
  l.prototype.DestroyProxy = function (b) {
    this.RemoveLeaf(b);
    this.FreeNode(b);
  };
  l.prototype.MoveProxy = function (b, k, a) {
    m.b2Assert(b.IsLeaf());
    if (b.aabb.Contains(k)) return !1;
    this.RemoveLeaf(b);
    var g = m.b2_aabbExtension + m.b2_aabbMultiplier * (0 < a.x ? a.x : -a.x),
      a = m.b2_aabbExtension + m.b2_aabbMultiplier * (0 < a.y ? a.y : -a.y);
    b.aabb.lowerBound.x = k.lowerBound.x - g;
    b.aabb.lowerBound.y = k.lowerBound.y - a;
    b.aabb.upperBound.x = k.upperBound.x + g;
    b.aabb.upperBound.y = k.upperBound.y + a;
    this.InsertLeaf(b);
    return !0;
  };
  l.prototype.Rebalance = function (b) {
    void 0 === b && (b = 0);
    if (null != this.m_root)
      for (var a = 0; a < b; a++) {
        for (var k = this.m_root, g = 0; !1 == k.IsLeaf(); )
          (k = (this.m_path >> g) & 1 ? k.child2 : k.child1),
            (g = (g + 1) & 31);
        ++this.m_path;
        this.RemoveLeaf(k);
        this.InsertLeaf(k);
      }
  };
  l.prototype.GetFatAABB = function (b) {
    return b.aabb;
  };
  l.prototype.GetUserData = function (b) {
    return b.userData;
  };
  l.prototype.Query = function (b, k) {
    if (null != this.m_root) {
      var a = new Vector(),
        g = 0;
      for (a[g++] = this.m_root; 0 < g; ) {
        var h = a[--g];
        if (h.aabb.TestOverlap(k))
          if (h.IsLeaf()) {
            if (!b(h)) break;
          } else (a[g++] = h.child1), (a[g++] = h.child2);
      }
    }
  };
  l.prototype.RayCast = function (b, a) {
    if (null != this.m_root) {
      var k = a.p1,
        g = a.p2,
        h = e.SubtractVV(k, g);
      h.Normalize();
      var h = e.CrossFV(1, h),
        v = e.AbsV(h),
        f = a.maxFraction,
        d = new q(),
        s = 0,
        u = 0,
        s = k.x + f * (g.x - k.x),
        u = k.y + f * (g.y - k.y);
      d.lowerBound.x = Math.min(k.x, s);
      d.lowerBound.y = Math.min(k.y, u);
      d.upperBound.x = Math.max(k.x, s);
      d.upperBound.y = Math.max(k.y, u);
      var y = new Vector(),
        c = 0;
      for (y[c++] = this.m_root; 0 < c; )
        if (
          ((f = y[--c]),
          !1 != f.aabb.TestOverlap(d) &&
            ((s = f.aabb.GetCenter()),
            (u = f.aabb.GetExtents()),
            !(
              0 <
              Math.abs(h.x * (k.x - s.x) + h.y * (k.y - s.y)) -
                v.x * u.x -
                v.y * u.y
            )))
        )
          if (f.IsLeaf()) {
            s = new G();
            s.p1 = a.p1;
            s.p2 = a.p2;
            s.maxFraction = a.maxFraction;
            f = b(s, f);
            if (0 == f) break;
            0 < f &&
              ((s = k.x + f * (g.x - k.x)),
              (u = k.y + f * (g.y - k.y)),
              (d.lowerBound.x = Math.min(k.x, s)),
              (d.lowerBound.y = Math.min(k.y, u)),
              (d.upperBound.x = Math.max(k.x, s)),
              (d.upperBound.y = Math.max(k.y, u)));
          } else (y[c++] = f.child1), (y[c++] = f.child2);
    }
  };
  l.prototype.AllocateNode = function () {
    if (this.m_freeList) {
      var b = this.m_freeList;
      this.m_freeList = b.parent;
      b.parent = null;
      b.child1 = null;
      b.child2 = null;
      return b;
    }
    return new F();
  };
  l.prototype.FreeNode = function (b) {
    b.parent = this.m_freeList;
    this.m_freeList = b;
  };
  l.prototype.InsertLeaf = function (b) {
    ++this.m_insertionCount;
    if (null == this.m_root) (this.m_root = b), (this.m_root.parent = null);
    else {
      var k = b.aabb.GetCenter(),
        a = this.m_root;
      if (!1 == a.IsLeaf()) {
        do
          var g = a.child1,
            a = a.child2,
            h =
              Math.abs((g.aabb.lowerBound.x + g.aabb.upperBound.x) / 2 - k.x) +
              Math.abs((g.aabb.lowerBound.y + g.aabb.upperBound.y) / 2 - k.y),
            v =
              Math.abs((a.aabb.lowerBound.x + a.aabb.upperBound.x) / 2 - k.x) +
              Math.abs((a.aabb.lowerBound.y + a.aabb.upperBound.y) / 2 - k.y),
            a = h < v ? g : a;
        while (!1 == a.IsLeaf());
      }
      k = a.parent;
      g = this.AllocateNode();
      g.parent = k;
      g.userData = null;
      g.aabb.Combine(b.aabb, a.aabb);
      if (k) {
        a.parent.child1 == a ? (k.child1 = g) : (k.child2 = g);
        g.child1 = a;
        g.child2 = b;
        a.parent = g;
        b.parent = g;
        do {
          if (k.aabb.Contains(g.aabb)) break;
          k.aabb.Combine(k.child1.aabb, k.child2.aabb);
          g = k;
          k = k.parent;
        } while (k);
      } else
        (g.child1 = a),
          (g.child2 = b),
          (a.parent = g),
          (this.m_root = b.parent = g);
    }
  };
  l.prototype.RemoveLeaf = function (b) {
    if (b == this.m_root) this.m_root = null;
    else {
      var k = b.parent,
        a = k.parent,
        b = k.child1 == b ? k.child2 : k.child1;
      if (a) {
        a.child1 == k ? (a.child1 = b) : (a.child2 = b);
        b.parent = a;
        for (this.FreeNode(k); a; ) {
          k = a.aabb;
          a.aabb = q.Combine(a.child1.aabb, a.child2.aabb);
          if (k.Contains(a.aabb)) break;
          a = a.parent;
        }
      } else (this.m_root = b), (b.parent = null), this.FreeNode(k);
    }
  };
  C.b2DynamicTreeBroadPhase = function () {
    this.m_tree = new l();
    this.m_moveBuffer = new Vector();
    this.m_pairBuffer = new Vector();
    this.m_pairCount = 0;
  };
  C.prototype.CreateProxy = function (b, k) {
    var a = this.m_tree.CreateProxy(b, k);
    ++this.m_proxyCount;
    this.BufferMove(a);
    return a;
  };
  C.prototype.DestroyProxy = function (b) {
    this.UnBufferMove(b);
    --this.m_proxyCount;
    this.m_tree.DestroyProxy(b);
  };
  C.prototype.MoveProxy = function (b, k, a) {
    this.m_tree.MoveProxy(b, k, a) && this.BufferMove(b);
  };
  C.prototype.TestOverlap = function (b, k) {
    var a = this.m_tree.GetFatAABB(b),
      g = this.m_tree.GetFatAABB(k);
    return a.TestOverlap(g);
  };
  C.prototype.GetUserData = function (b) {
    return this.m_tree.GetUserData(b);
  };
  C.prototype.GetFatAABB = function (b) {
    return this.m_tree.GetFatAABB(b);
  };
  C.prototype.GetProxyCount = function () {
    return this.m_proxyCount;
  };
  C.prototype.UpdatePairs = function (b) {
    for (
      var k = this, a = (k.m_pairCount = 0), g, a = 0;
      a < k.m_moveBuffer.length;
      ++a
    ) {
      g = k.m_moveBuffer[a];
      var h = k.m_tree.GetFatAABB(g);
      k.m_tree.Query(function (b) {
        if (b == g) return !0;
        k.m_pairCount == k.m_pairBuffer.length &&
          (k.m_pairBuffer[k.m_pairCount] = new H());
        var a = k.m_pairBuffer[k.m_pairCount];
        a.proxyA = b < g ? b : g;
        a.proxyB = b >= g ? b : g;
        ++k.m_pairCount;
        return !0;
      }, h);
    }
    for (a = k.m_moveBuffer.length = 0; a < k.m_pairCount; ) {
      var h = k.m_pairBuffer[a],
        v = k.m_tree.GetUserData(h.proxyA),
        f = k.m_tree.GetUserData(h.proxyB);
      b(v, f);
      for (++a; a < k.m_pairCount; ) {
        v = k.m_pairBuffer[a];
        if (v.proxyA != h.proxyA || v.proxyB != h.proxyB) break;
        ++a;
      }
    }
  };
  C.prototype.Query = function (b, k) {
    this.m_tree.Query(b, k);
  };
  C.prototype.RayCast = function (b, k) {
    this.m_tree.RayCast(b, k);
  };
  C.prototype.Validate = function () {};
  C.prototype.Rebalance = function (b) {
    void 0 === b && (b = 0);
    this.m_tree.Rebalance(b);
  };
  C.prototype.BufferMove = function (b) {
    this.m_moveBuffer[this.m_moveBuffer.length] = b;
  };
  C.prototype.UnBufferMove = function (b) {
    b = parseInt(this.m_moveBuffer.indexOf(b));
    this.m_moveBuffer.splice(b, 1);
  };
  C.prototype.ComparePairs = function () {
    return 0;
  };
  C.__implements = {};
  C.__implements[v] = !0;
  F.b2DynamicTreeNode = function () {
    this.aabb = new q();
  };
  F.prototype.IsLeaf = function () {
    return null == this.child1;
  };
  H.b2DynamicTreePair = function () {};
  B.b2Manifold = function () {
    this.m_pointCount = 0;
  };
  B.prototype.b2Manifold = function () {
    this.m_points = new Vector(m.b2_maxManifoldPoints);
    for (var b = 0; b < m.b2_maxManifoldPoints; b++) this.m_points[b] = new M();
    this.m_localPlaneNormal = new c();
    this.m_localPoint = new c();
  };
  B.prototype.Reset = function () {
    for (var b = 0; b < m.b2_maxManifoldPoints; b++)
      (this.m_points[b] instanceof M ? this.m_points[b] : null).Reset();
    this.m_localPlaneNormal.SetZero();
    this.m_localPoint.SetZero();
    this.m_pointCount = this.m_type = 0;
  };
  B.prototype.Set = function (b) {
    this.m_pointCount = b.m_pointCount;
    for (var k = 0; k < m.b2_maxManifoldPoints; k++)
      (this.m_points[k] instanceof M ? this.m_points[k] : null).Set(
        b.m_points[k]
      );
    this.m_localPlaneNormal.SetV(b.m_localPlaneNormal);
    this.m_localPoint.SetV(b.m_localPoint);
    this.m_type = b.m_type;
  };
  B.prototype.Copy = function () {
    var b = new B();
    b.Set(this);
    return b;
  };
  Box2D.postDefs.push(function () {
    Box2D.Collision.b2Manifold.e_circles = 1;
    Box2D.Collision.b2Manifold.e_faceA = 2;
    Box2D.Collision.b2Manifold.e_faceB = 4;
  });
  M.b2ManifoldPoint = function () {
    this.m_localPoint = new c();
    this.m_id = new A();
  };
  M.prototype.b2ManifoldPoint = function () {
    this.Reset();
  };
  M.prototype.Reset = function () {
    this.m_localPoint.SetZero();
    this.m_tangentImpulse = this.m_normalImpulse = 0;
    this.m_id.key = 0;
  };
  M.prototype.Set = function (b) {
    this.m_localPoint.SetV(b.m_localPoint);
    this.m_normalImpulse = b.m_normalImpulse;
    this.m_tangentImpulse = b.m_tangentImpulse;
    this.m_id.Set(b.m_id);
  };
  E.b2Point = function () {
    this.p = new c();
  };
  E.prototype.Support = function () {
    return this.p;
  };
  E.prototype.GetFirstVertex = function () {
    return this.p;
  };
  G.b2RayCastInput = function () {
    this.p1 = new c();
    this.p2 = new c();
  };
  G.prototype.b2RayCastInput = function (b, k, a) {
    void 0 === b && (b = null);
    void 0 === k && (k = null);
    void 0 === a && (a = 1);
    b && this.p1.SetV(b);
    k && this.p2.SetV(k);
    this.maxFraction = a;
  };
  N.b2RayCastOutput = function () {
    this.normal = new c();
  };
  I.b2Segment = function () {
    this.p1 = new c();
    this.p2 = new c();
  };
  I.prototype.TestSegment = function (b, k, a, g) {
    void 0 === g && (g = 0);
    var h = a.p1,
      v = a.p2.x - h.x,
      f = a.p2.y - h.y,
      a = this.p2.y - this.p1.y,
      d = -(this.p2.x - this.p1.x),
      s = 100 * Number.MIN_VALUE,
      u = -(v * a + f * d);
    if (u > s) {
      var y = h.x - this.p1.x,
        c = h.y - this.p1.y,
        h = y * a + c * d;
      if (
        0 <= h &&
        h <= g * u &&
        ((g = -v * c + f * y), -s * u <= g && g <= u * (1 + s))
      )
        return (
          (h /= u),
          (g = Math.sqrt(a * a + d * d)),
          (b[0] = h),
          k.Set(a / g, d / g),
          !0
        );
    }
    return !1;
  };
  I.prototype.Extend = function (b) {
    this.ExtendForward(b);
    this.ExtendBackward(b);
  };
  I.prototype.ExtendForward = function (b) {
    var k = this.p2.x - this.p1.x,
      a = this.p2.y - this.p1.y,
      b = Math.min(
        0 < k
          ? (b.upperBound.x - this.p1.x) / k
          : 0 > k
          ? (b.lowerBound.x - this.p1.x) / k
          : Number.POSITIVE_INFINITY,
        0 < a
          ? (b.upperBound.y - this.p1.y) / a
          : 0 > a
          ? (b.lowerBound.y - this.p1.y) / a
          : Number.POSITIVE_INFINITY
      );
    this.p2.x = this.p1.x + k * b;
    this.p2.y = this.p1.y + a * b;
  };
  I.prototype.ExtendBackward = function (b) {
    var k = -this.p2.x + this.p1.x,
      a = -this.p2.y + this.p1.y,
      b = Math.min(
        0 < k
          ? (b.upperBound.x - this.p2.x) / k
          : 0 > k
          ? (b.lowerBound.x - this.p2.x) / k
          : Number.POSITIVE_INFINITY,
        0 < a
          ? (b.upperBound.y - this.p2.y) / a
          : 0 > a
          ? (b.lowerBound.y - this.p2.y) / a
          : Number.POSITIVE_INFINITY
      );
    this.p1.x = this.p2.x + k * b;
    this.p1.y = this.p2.y + a * b;
  };
  a.b2SeparationFunction = function () {
    this.m_localPoint = new c();
    this.m_axis = new c();
  };
  a.prototype.Initialize = function (b, k, g, h, v) {
    this.m_proxyA = k;
    this.m_proxyB = h;
    var f = parseInt(b.count);
    m.b2Assert(0 < f && 3 > f);
    var d,
      s,
      u,
      y,
      l = (y = u = h = k = 0),
      z = 0,
      l = 0;
    1 == f
      ? ((this.m_type = a.e_points),
        (d = this.m_proxyA.GetVertex(b.indexA[0])),
        (s = this.m_proxyB.GetVertex(b.indexB[0])),
        (f = d),
        (b = g.R),
        (k = g.position.x + (b.col1.x * f.x + b.col2.x * f.y)),
        (h = g.position.y + (b.col1.y * f.x + b.col2.y * f.y)),
        (f = s),
        (b = v.R),
        (u = v.position.x + (b.col1.x * f.x + b.col2.x * f.y)),
        (y = v.position.y + (b.col1.y * f.x + b.col2.y * f.y)),
        (this.m_axis.x = u - k),
        (this.m_axis.y = y - h),
        this.m_axis.Normalize())
      : (b.indexB[0] == b.indexB[1]
          ? ((this.m_type = a.e_faceA),
            (k = this.m_proxyA.GetVertex(b.indexA[0])),
            (h = this.m_proxyA.GetVertex(b.indexA[1])),
            (s = this.m_proxyB.GetVertex(b.indexB[0])),
            (this.m_localPoint.x = 0.5 * (k.x + h.x)),
            (this.m_localPoint.y = 0.5 * (k.y + h.y)),
            (this.m_axis = e.CrossVF(e.SubtractVV(h, k), 1)),
            this.m_axis.Normalize(),
            (f = this.m_axis),
            (b = g.R),
            (l = b.col1.x * f.x + b.col2.x * f.y),
            (z = b.col1.y * f.x + b.col2.y * f.y),
            (f = this.m_localPoint),
            (b = g.R),
            (k = g.position.x + (b.col1.x * f.x + b.col2.x * f.y)),
            (h = g.position.y + (b.col1.y * f.x + b.col2.y * f.y)),
            (f = s),
            (b = v.R),
            (u = v.position.x + (b.col1.x * f.x + b.col2.x * f.y)),
            (y = v.position.y + (b.col1.y * f.x + b.col2.y * f.y)),
            (l = (u - k) * l + (y - h) * z))
          : b.indexA[0] == b.indexA[0]
          ? ((this.m_type = a.e_faceB),
            (u = this.m_proxyB.GetVertex(b.indexB[0])),
            (y = this.m_proxyB.GetVertex(b.indexB[1])),
            (d = this.m_proxyA.GetVertex(b.indexA[0])),
            (this.m_localPoint.x = 0.5 * (u.x + y.x)),
            (this.m_localPoint.y = 0.5 * (u.y + y.y)),
            (this.m_axis = e.CrossVF(e.SubtractVV(y, u), 1)),
            this.m_axis.Normalize(),
            (f = this.m_axis),
            (b = v.R),
            (l = b.col1.x * f.x + b.col2.x * f.y),
            (z = b.col1.y * f.x + b.col2.y * f.y),
            (f = this.m_localPoint),
            (b = v.R),
            (u = v.position.x + (b.col1.x * f.x + b.col2.x * f.y)),
            (y = v.position.y + (b.col1.y * f.x + b.col2.y * f.y)),
            (f = d),
            (b = g.R),
            (k = g.position.x + (b.col1.x * f.x + b.col2.x * f.y)),
            (h = g.position.y + (b.col1.y * f.x + b.col2.y * f.y)),
            (l = (k - u) * l + (h - y) * z))
          : ((k = this.m_proxyA.GetVertex(b.indexA[0])),
            (h = this.m_proxyA.GetVertex(b.indexA[1])),
            (u = this.m_proxyB.GetVertex(b.indexB[0])),
            (y = this.m_proxyB.GetVertex(b.indexB[1])),
            e.MulX(g, d),
            (d = e.MulMV(g.R, e.SubtractVV(h, k))),
            e.MulX(v, s),
            (l = e.MulMV(v.R, e.SubtractVV(y, u))),
            (v = d.x * d.x + d.y * d.y),
            (s = l.x * l.x + l.y * l.y),
            (b = e.SubtractVV(l, d)),
            (g = d.x * b.x + d.y * b.y),
            (b = l.x * b.x + l.y * b.y),
            (d = d.x * l.x + d.y * l.y),
            (z = v * s - d * d),
            (l = 0),
            0 != z && (l = e.Clamp((d * b - g * s) / z, 0, 1)),
            0 > (d * l + b) / s && (l = e.Clamp((d - g) / v, 0, 1)),
            (d = new c()),
            (d.x = k.x + l * (h.x - k.x)),
            (d.y = k.y + l * (h.y - k.y)),
            (s = new c()),
            (s.x = u.x + l * (y.x - u.x)),
            (s.y = u.y + l * (y.y - u.y)),
            0 == l || 1 == l
              ? ((this.m_type = a.e_faceB),
                (this.m_axis = e.CrossVF(e.SubtractVV(y, u), 1)),
                this.m_axis.Normalize(),
                (this.m_localPoint = s))
              : ((this.m_type = a.e_faceA),
                (this.m_axis = e.CrossVF(e.SubtractVV(h, k), 1)),
                (this.m_localPoint = d))),
        0 > l && this.m_axis.NegativeSelf());
  };
  a.prototype.Evaluate = function (b, k) {
    var g,
      h,
      v = 0;
    switch (this.m_type) {
      case a.e_points:
        return (
          (g = e.MulTMV(b.R, this.m_axis)),
          (h = e.MulTMV(k.R, this.m_axis.GetNegative())),
          (g = this.m_proxyA.GetSupportVertex(g)),
          (h = this.m_proxyB.GetSupportVertex(h)),
          (g = e.MulX(b, g)),
          (h = e.MulX(k, h)),
          (v = (h.x - g.x) * this.m_axis.x + (h.y - g.y) * this.m_axis.y)
        );
      case a.e_faceA:
        return (
          (v = e.MulMV(b.R, this.m_axis)),
          (g = e.MulX(b, this.m_localPoint)),
          (h = e.MulTMV(k.R, v.GetNegative())),
          (h = this.m_proxyB.GetSupportVertex(h)),
          (h = e.MulX(k, h)),
          (v = (h.x - g.x) * v.x + (h.y - g.y) * v.y)
        );
      case a.e_faceB:
        return (
          (v = e.MulMV(k.R, this.m_axis)),
          (h = e.MulX(k, this.m_localPoint)),
          (g = e.MulTMV(b.R, v.GetNegative())),
          (g = this.m_proxyA.GetSupportVertex(g)),
          (g = e.MulX(b, g)),
          (v = (g.x - h.x) * v.x + (g.y - h.y) * v.y)
        );
      default:
        return m.b2Assert(!1), 0;
    }
  };
  Box2D.postDefs.push(function () {
    Box2D.Collision.b2SeparationFunction.e_points = 1;
    Box2D.Collision.b2SeparationFunction.e_faceA = 2;
    Box2D.Collision.b2SeparationFunction.e_faceB = 4;
  });
  h.b2Simplex = function () {
    this.m_v1 = new g();
    this.m_v2 = new g();
    this.m_v3 = new g();
    this.m_vertices = new Vector(3);
  };
  h.prototype.b2Simplex = function () {
    this.m_vertices[0] = this.m_v1;
    this.m_vertices[1] = this.m_v2;
    this.m_vertices[2] = this.m_v3;
  };
  h.prototype.ReadCache = function (b, k, a, g, h) {
    m.b2Assert(0 <= b.count && 3 >= b.count);
    var v, f;
    this.m_count = b.count;
    for (var d = this.m_vertices, s = 0; s < this.m_count; s++) {
      var u = d[s];
      u.indexA = b.indexA[s];
      u.indexB = b.indexB[s];
      v = k.GetVertex(u.indexA);
      f = g.GetVertex(u.indexB);
      u.wA = e.MulX(a, v);
      u.wB = e.MulX(h, f);
      u.w = e.SubtractVV(u.wB, u.wA);
      u.a = 0;
    }
    if (
      1 < this.m_count &&
      ((b = b.metric),
      (v = this.GetMetric()),
      v < 0.5 * b || 2 * b < v || v < Number.MIN_VALUE)
    )
      this.m_count = 0;
    0 == this.m_count &&
      ((u = d[0]),
      (u.indexA = 0),
      (u.indexB = 0),
      (v = k.GetVertex(0)),
      (f = g.GetVertex(0)),
      (u.wA = e.MulX(a, v)),
      (u.wB = e.MulX(h, f)),
      (u.w = e.SubtractVV(u.wB, u.wA)),
      (this.m_count = 1));
  };
  h.prototype.WriteCache = function (b) {
    b.metric = this.GetMetric();
    b.count = Box2D.parseUInt(this.m_count);
    for (var k = this.m_vertices, a = 0; a < this.m_count; a++)
      (b.indexA[a] = Box2D.parseUInt(k[a].indexA)),
        (b.indexB[a] = Box2D.parseUInt(k[a].indexB));
  };
  h.prototype.GetSearchDirection = function () {
    switch (this.m_count) {
      case 1:
        return this.m_v1.w.GetNegative();
      case 2:
        var b = e.SubtractVV(this.m_v2.w, this.m_v1.w);
        return 0 < e.CrossVV(b, this.m_v1.w.GetNegative())
          ? e.CrossFV(1, b)
          : e.CrossVF(b, 1);
      default:
        return m.b2Assert(!1), new c();
    }
  };
  h.prototype.GetClosestPoint = function () {
    switch (this.m_count) {
      case 0:
        return m.b2Assert(!1), new c();
      case 1:
        return this.m_v1.w;
      case 2:
        return new c(
          this.m_v1.a * this.m_v1.w.x + this.m_v2.a * this.m_v2.w.x,
          this.m_v1.a * this.m_v1.w.y + this.m_v2.a * this.m_v2.w.y
        );
      default:
        return m.b2Assert(!1), new c();
    }
  };
  h.prototype.GetWitnessPoints = function (b, k) {
    switch (this.m_count) {
      case 0:
        m.b2Assert(!1);
        break;
      case 1:
        b.SetV(this.m_v1.wA);
        k.SetV(this.m_v1.wB);
        break;
      case 2:
        b.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x;
        b.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y;
        k.x = this.m_v1.a * this.m_v1.wB.x + this.m_v2.a * this.m_v2.wB.x;
        k.y = this.m_v1.a * this.m_v1.wB.y + this.m_v2.a * this.m_v2.wB.y;
        break;
      case 3:
        k.x = b.x =
          this.m_v1.a * this.m_v1.wA.x +
          this.m_v2.a * this.m_v2.wA.x +
          this.m_v3.a * this.m_v3.wA.x;
        k.y = b.y =
          this.m_v1.a * this.m_v1.wA.y +
          this.m_v2.a * this.m_v2.wA.y +
          this.m_v3.a * this.m_v3.wA.y;
        break;
      default:
        m.b2Assert(!1);
    }
  };
  h.prototype.GetMetric = function () {
    switch (this.m_count) {
      case 0:
        return m.b2Assert(!1), 0;
      case 1:
        return 0;
      case 2:
        return e.SubtractVV(this.m_v1.w, this.m_v2.w).Length();
      case 3:
        return e.CrossVV(
          e.SubtractVV(this.m_v2.w, this.m_v1.w),
          e.SubtractVV(this.m_v3.w, this.m_v1.w)
        );
      default:
        return m.b2Assert(!1), 0;
    }
  };
  h.prototype.Solve2 = function () {
    var b = this.m_v1.w,
      k = this.m_v2.w,
      a = e.SubtractVV(k, b),
      b = -(b.x * a.x + b.y * a.y);
    0 >= b
      ? (this.m_count = this.m_v1.a = 1)
      : ((k = k.x * a.x + k.y * a.y),
        0 >= k
          ? ((this.m_count = this.m_v2.a = 1), this.m_v1.Set(this.m_v2))
          : ((a = 1 / (k + b)),
            (this.m_v1.a = k * a),
            (this.m_v2.a = b * a),
            (this.m_count = 2)));
  };
  h.prototype.Solve3 = function () {
    var b = this.m_v1.w,
      k = this.m_v2.w,
      a = this.m_v3.w,
      g = e.SubtractVV(k, b),
      h = e.Dot(b, g),
      v = e.Dot(k, g),
      h = -h,
      f = e.SubtractVV(a, b),
      d = e.Dot(b, f),
      s = e.Dot(a, f),
      d = -d,
      u = e.SubtractVV(a, k),
      y = e.Dot(k, u),
      u = e.Dot(a, u),
      y = -y,
      f = e.CrossVV(g, f),
      g = f * e.CrossVV(k, a),
      a = f * e.CrossVV(a, b),
      b = f * e.CrossVV(b, k);
    0 >= h && 0 >= d
      ? (this.m_count = this.m_v1.a = 1)
      : 0 < v && 0 < h && 0 >= b
      ? ((s = 1 / (v + h)),
        (this.m_v1.a = v * s),
        (this.m_v2.a = h * s),
        (this.m_count = 2))
      : 0 < s && 0 < d && 0 >= a
      ? ((v = 1 / (s + d)),
        (this.m_v1.a = s * v),
        (this.m_v3.a = d * v),
        (this.m_count = 2),
        this.m_v2.Set(this.m_v3))
      : 0 >= v && 0 >= y
      ? ((this.m_count = this.m_v2.a = 1), this.m_v1.Set(this.m_v2))
      : 0 >= s && 0 >= u
      ? ((this.m_count = this.m_v3.a = 1), this.m_v1.Set(this.m_v3))
      : 0 < u && 0 < y && 0 >= g
      ? ((v = 1 / (u + y)),
        (this.m_v2.a = u * v),
        (this.m_v3.a = y * v),
        (this.m_count = 2),
        this.m_v1.Set(this.m_v3))
      : ((v = 1 / (g + a + b)),
        (this.m_v1.a = g * v),
        (this.m_v2.a = a * v),
        (this.m_v3.a = b * v),
        (this.m_count = 3));
  };
  s.b2SimplexCache = function () {
    this.indexA = new Vector_a2j_Number(3);
    this.indexB = new Vector_a2j_Number(3);
  };
  g.b2SimplexVertex = function () {};
  g.prototype.Set = function (b) {
    this.wA.SetV(b.wA);
    this.wB.SetV(b.wB);
    this.w.SetV(b.w);
    this.a = b.a;
    this.indexA = b.indexA;
    this.indexB = b.indexB;
  };
  u.b2TimeOfImpact = function () {};
  u.TimeOfImpact = function (b) {
    ++u.b2_toiCalls;
    var k = b.proxyA,
      a = b.proxyB,
      g = b.sweepA,
      h = b.sweepB;
    m.b2Assert(g.t0 == h.t0);
    m.b2Assert(1 - g.t0 > Number.MIN_VALUE);
    var v = k.m_radius + a.m_radius,
      b = b.tolerance,
      f = 0,
      d = 0,
      s = 0;
    u.s_cache.count = 0;
    for (u.s_distanceInput.useRadii = !1; ; ) {
      g.GetTransform(u.s_xfA, f);
      h.GetTransform(u.s_xfB, f);
      u.s_distanceInput.proxyA = k;
      u.s_distanceInput.proxyB = a;
      u.s_distanceInput.transformA = u.s_xfA;
      u.s_distanceInput.transformB = u.s_xfB;
      J.Distance(u.s_distanceOutput, u.s_cache, u.s_distanceInput);
      if (0 >= u.s_distanceOutput.distance) {
        f = 1;
        break;
      }
      u.s_fcn.Initialize(u.s_cache, k, u.s_xfA, a, u.s_xfB);
      var y = u.s_fcn.Evaluate(u.s_xfA, u.s_xfB);
      if (0 >= y) {
        f = 1;
        break;
      }
      0 == d && (s = y > v ? e.Max(v - b, 0.75 * v) : e.Max(y - b, 0.02 * v));
      if (y - s < 0.5 * b) {
        if (0 == d) {
          f = 1;
          break;
        }
        break;
      }
      var c = f,
        l = f,
        z = 1;
      g.GetTransform(u.s_xfA, z);
      h.GetTransform(u.s_xfB, z);
      var j = u.s_fcn.Evaluate(u.s_xfA, u.s_xfB);
      if (j >= s) {
        f = 1;
        break;
      }
      for (var q = 0; ; ) {
        var C = 0,
          C = q & 1 ? l + ((s - y) * (z - l)) / (j - y) : 0.5 * (l + z);
        g.GetTransform(u.s_xfA, C);
        h.GetTransform(u.s_xfB, C);
        var B = u.s_fcn.Evaluate(u.s_xfA, u.s_xfB);
        if (e.Abs(B - s) < 0.025 * b) {
          c = C;
          break;
        }
        B > s ? ((l = C), (y = B)) : ((z = C), (j = B));
        ++q;
        ++u.b2_toiRootIters;
        if (50 == q) break;
      }
      u.b2_toiMaxRootIters = e.Max(u.b2_toiMaxRootIters, q);
      if (c < (1 + 100 * Number.MIN_VALUE) * f) break;
      f = c;
      d++;
      ++u.b2_toiIters;
      if (1e3 == d) break;
    }
    u.b2_toiMaxIters = e.Max(u.b2_toiMaxIters, d);
    return f;
  };
  Box2D.postDefs.push(function () {
    Box2D.Collision.b2TimeOfImpact.b2_toiCalls = 0;
    Box2D.Collision.b2TimeOfImpact.b2_toiIters = 0;
    Box2D.Collision.b2TimeOfImpact.b2_toiMaxIters = 0;
    Box2D.Collision.b2TimeOfImpact.b2_toiRootIters = 0;
    Box2D.Collision.b2TimeOfImpact.b2_toiMaxRootIters = 0;
    Box2D.Collision.b2TimeOfImpact.s_cache = new s();
    Box2D.Collision.b2TimeOfImpact.s_distanceInput = new L();
    Box2D.Collision.b2TimeOfImpact.s_xfA = new x();
    Box2D.Collision.b2TimeOfImpact.s_xfB = new x();
    Box2D.Collision.b2TimeOfImpact.s_fcn = new a();
    Box2D.Collision.b2TimeOfImpact.s_distanceOutput = new d();
  });
  y.b2TOIInput = function () {
    this.proxyA = new z();
    this.proxyB = new z();
    this.sweepA = new j();
    this.sweepB = new j();
  };
  f.b2WorldManifold = function () {
    this.m_normal = new c();
  };
  f.prototype.b2WorldManifold = function () {
    this.m_points = new Vector(m.b2_maxManifoldPoints);
    for (var b = 0; b < m.b2_maxManifoldPoints; b++) this.m_points[b] = new c();
  };
  f.prototype.Initialize = function (b, k, a, g, h) {
    void 0 === a && (a = 0);
    void 0 === h && (h = 0);
    if (0 != b.m_pointCount) {
      var v = 0,
        f,
        d,
        s = 0,
        u = 0,
        y = 0,
        c = 0,
        l = 0;
      f = 0;
      switch (b.m_type) {
        case B.e_circles:
          d = k.R;
          f = b.m_localPoint;
          v = k.position.x + d.col1.x * f.x + d.col2.x * f.y;
          k = k.position.y + d.col1.y * f.x + d.col2.y * f.y;
          d = g.R;
          f = b.m_points[0].m_localPoint;
          b = g.position.x + d.col1.x * f.x + d.col2.x * f.y;
          g = g.position.y + d.col1.y * f.x + d.col2.y * f.y;
          f = b - v;
          d = g - k;
          s = f * f + d * d;
          s > Number.MIN_VALUE * Number.MIN_VALUE
            ? ((s = Math.sqrt(s)),
              (this.m_normal.x = f / s),
              (this.m_normal.y = d / s))
            : ((this.m_normal.x = 1), (this.m_normal.y = 0));
          f = k + a * this.m_normal.y;
          g -= h * this.m_normal.y;
          this.m_points[0].x =
            0.5 * (v + a * this.m_normal.x + (b - h * this.m_normal.x));
          this.m_points[0].y = 0.5 * (f + g);
          break;
        case B.e_faceA:
          d = k.R;
          f = b.m_localPlaneNormal;
          s = d.col1.x * f.x + d.col2.x * f.y;
          u = d.col1.y * f.x + d.col2.y * f.y;
          d = k.R;
          f = b.m_localPoint;
          y = k.position.x + d.col1.x * f.x + d.col2.x * f.y;
          c = k.position.y + d.col1.y * f.x + d.col2.y * f.y;
          this.m_normal.x = s;
          this.m_normal.y = u;
          for (v = 0; v < b.m_pointCount; v++)
            (d = g.R),
              (f = b.m_points[v].m_localPoint),
              (l = g.position.x + d.col1.x * f.x + d.col2.x * f.y),
              (f = g.position.y + d.col1.y * f.x + d.col2.y * f.y),
              (this.m_points[v].x =
                l + 0.5 * (a - (l - y) * s - (f - c) * u - h) * s),
              (this.m_points[v].y =
                f + 0.5 * (a - (l - y) * s - (f - c) * u - h) * u);
          break;
        case B.e_faceB:
          d = g.R;
          f = b.m_localPlaneNormal;
          s = d.col1.x * f.x + d.col2.x * f.y;
          u = d.col1.y * f.x + d.col2.y * f.y;
          d = g.R;
          f = b.m_localPoint;
          y = g.position.x + d.col1.x * f.x + d.col2.x * f.y;
          c = g.position.y + d.col1.y * f.x + d.col2.y * f.y;
          this.m_normal.x = -s;
          this.m_normal.y = -u;
          for (v = 0; v < b.m_pointCount; v++)
            (d = k.R),
              (f = b.m_points[v].m_localPoint),
              (l = k.position.x + d.col1.x * f.x + d.col2.x * f.y),
              (f = k.position.y + d.col1.y * f.x + d.col2.y * f.y),
              (this.m_points[v].x =
                l + 0.5 * (h - (l - y) * s - (f - c) * u - a) * s),
              (this.m_points[v].y =
                f + 0.5 * (h - (l - y) * s - (f - c) * u - a) * u);
      }
    }
  };
  b.ClipVertex = function () {
    this.v = new c();
    this.id = new A();
  };
  b.prototype.Set = function (b) {
    this.v.SetV(b.v);
    this.id.Set(b.id);
  };
  k.Features = function () {};
  Object.defineProperty(k.prototype, "referenceEdge", {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this._referenceEdge;
    },
  });
  Object.defineProperty(k.prototype, "referenceEdge", {
    enumerable: !1,
    configurable: !0,
    set: function (b) {
      void 0 === b && (b = 0);
      this._referenceEdge = b;
      this._m_id._key =
        (this._m_id._key & 4294967040) | (this._referenceEdge & 255);
    },
  });
  Object.defineProperty(k.prototype, "incidentEdge", {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this._incidentEdge;
    },
  });
  Object.defineProperty(k.prototype, "incidentEdge", {
    enumerable: !1,
    configurable: !0,
    set: function (b) {
      void 0 === b && (b = 0);
      this._incidentEdge = b;
      this._m_id._key =
        (this._m_id._key & 4294902015) | ((this._incidentEdge << 8) & 65280);
    },
  });
  Object.defineProperty(k.prototype, "incidentVertex", {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this._incidentVertex;
    },
  });
  Object.defineProperty(k.prototype, "incidentVertex", {
    enumerable: !1,
    configurable: !0,
    set: function (b) {
      void 0 === b && (b = 0);
      this._incidentVertex = b;
      this._m_id._key =
        (this._m_id._key & 4278255615) |
        ((this._incidentVertex << 16) & 16711680);
    },
  });
  Object.defineProperty(k.prototype, "flip", {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this._flip;
    },
  });
  Object.defineProperty(k.prototype, "flip", {
    enumerable: !1,
    configurable: !0,
    set: function (b) {
      void 0 === b && (b = 0);
      this._flip = b;
      this._m_id._key =
        (this._m_id._key & 16777215) | ((this._flip << 24) & 4278190080);
    },
  });
})();
(function () {
  var n = Box2D.Common.b2Settings,
    r = Box2D.Collision.Shapes.b2CircleShape,
    p = Box2D.Collision.Shapes.b2EdgeChainDef,
    m = Box2D.Collision.Shapes.b2EdgeShape,
    e = Box2D.Collision.Shapes.b2MassData,
    j = Box2D.Collision.Shapes.b2PolygonShape,
    x = Box2D.Collision.Shapes.b2Shape,
    c = Box2D.Common.Math.b2Mat22,
    q = Box2D.Common.Math.b2Math,
    K = Box2D.Common.Math.b2Transform,
    D = Box2D.Common.Math.b2Vec2,
    w = Box2D.Collision.b2Distance,
    A = Box2D.Collision.b2DistanceInput,
    t = Box2D.Collision.b2DistanceOutput,
    J = Box2D.Collision.b2DistanceProxy,
    L = Box2D.Collision.b2SimplexCache;
  Box2D.inherit(r, Box2D.Collision.Shapes.b2Shape);
  r.prototype.__super = Box2D.Collision.Shapes.b2Shape.prototype;
  r.b2CircleShape = function () {
    Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments);
    this.m_p = new D();
  };
  r.prototype.Copy = function () {
    var d = new r();
    d.Set(this);
    return d;
  };
  r.prototype.Set = function (d) {
    this.__super.Set.call(this, d);
    Box2D.is(d, r) && this.m_p.SetV((d instanceof r ? d : null).m_p);
  };
  r.prototype.TestPoint = function (d, c) {
    var l = d.R,
      e = d.position.x + (l.col1.x * this.m_p.x + l.col2.x * this.m_p.y),
      l = d.position.y + (l.col1.y * this.m_p.x + l.col2.y * this.m_p.y),
      e = c.x - e,
      l = c.y - l;
    return e * e + l * l <= this.m_radius * this.m_radius;
  };
  r.prototype.RayCast = function (d, c, l) {
    var e = l.R,
      j =
        c.p1.x -
        (l.position.x + (e.col1.x * this.m_p.x + e.col2.x * this.m_p.y)),
      l =
        c.p1.y -
        (l.position.y + (e.col1.y * this.m_p.x + e.col2.y * this.m_p.y)),
      e = c.p2.x - c.p1.x,
      m = c.p2.y - c.p1.y,
      q = j * e + l * m,
      n = e * e + m * m,
      t = q * q - n * (j * j + l * l - this.m_radius * this.m_radius);
    if (0 > t || n < Number.MIN_VALUE) return !1;
    q = -(q + Math.sqrt(t));
    return 0 <= q && q <= c.maxFraction * n
      ? ((q /= n),
        (d.fraction = q),
        (d.normal.x = j + q * e),
        (d.normal.y = l + q * m),
        d.normal.Normalize(),
        !0)
      : !1;
  };
  r.prototype.ComputeAABB = function (d, c) {
    var l = c.R,
      e = c.position.x + (l.col1.x * this.m_p.x + l.col2.x * this.m_p.y),
      l = c.position.y + (l.col1.y * this.m_p.x + l.col2.y * this.m_p.y);
    d.lowerBound.Set(e - this.m_radius, l - this.m_radius);
    d.upperBound.Set(e + this.m_radius, l + this.m_radius);
  };
  r.prototype.ComputeMass = function (d, c) {
    void 0 === c && (c = 0);
    d.mass = c * n.b2_pi * this.m_radius * this.m_radius;
    d.center.SetV(this.m_p);
    d.I =
      d.mass *
      (0.5 * this.m_radius * this.m_radius +
        (this.m_p.x * this.m_p.x + this.m_p.y * this.m_p.y));
  };
  r.prototype.ComputeSubmergedArea = function (d, c, l, e) {
    void 0 === c && (c = 0);
    var l = q.MulX(l, this.m_p),
      j = -(q.Dot(d, l) - c);
    if (j < -this.m_radius + Number.MIN_VALUE) return 0;
    if (j > this.m_radius)
      return e.SetV(l), Math.PI * this.m_radius * this.m_radius;
    var c = this.m_radius * this.m_radius,
      m = j * j,
      j =
        c * (Math.asin(j / this.m_radius) + Math.PI / 2) + j * Math.sqrt(c - m),
      c = ((-2 / 3) * Math.pow(c - m, 1.5)) / j;
    e.x = l.x + d.x * c;
    e.y = l.y + d.y * c;
    return j;
  };
  r.prototype.GetLocalPosition = function () {
    return this.m_p;
  };
  r.prototype.SetLocalPosition = function (d) {
    this.m_p.SetV(d);
  };
  r.prototype.GetRadius = function () {
    return this.m_radius;
  };
  r.prototype.SetRadius = function (d) {
    void 0 === d && (d = 0);
    this.m_radius = d;
  };
  r.prototype.b2CircleShape = function (d) {
    void 0 === d && (d = 0);
    this.__super.b2Shape.call(this);
    this.m_type = x.e_circleShape;
    this.m_radius = d;
  };
  p.b2EdgeChainDef = function () {};
  p.prototype.b2EdgeChainDef = function () {
    this.vertexCount = 0;
    this.isALoop = !0;
    this.vertices = [];
  };
  Box2D.inherit(m, Box2D.Collision.Shapes.b2Shape);
  m.prototype.__super = Box2D.Collision.Shapes.b2Shape.prototype;
  m.b2EdgeShape = function () {
    Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments);
    this.s_supportVec = new D();
    this.m_v1 = new D();
    this.m_v2 = new D();
    this.m_coreV1 = new D();
    this.m_coreV2 = new D();
    this.m_normal = new D();
    this.m_direction = new D();
    this.m_cornerDir1 = new D();
    this.m_cornerDir2 = new D();
  };
  m.prototype.TestPoint = function () {
    return !1;
  };
  m.prototype.RayCast = function (d, c, l) {
    var e,
      j = c.p2.x - c.p1.x,
      m = c.p2.y - c.p1.y;
    e = l.R;
    var q = l.position.x + (e.col1.x * this.m_v1.x + e.col2.x * this.m_v1.y),
      n = l.position.y + (e.col1.y * this.m_v1.x + e.col2.y * this.m_v1.y),
      t = l.position.y + (e.col1.y * this.m_v2.x + e.col2.y * this.m_v2.y) - n,
      l = -(
        l.position.x +
        (e.col1.x * this.m_v2.x + e.col2.x * this.m_v2.y) -
        q
      );
    e = 100 * Number.MIN_VALUE;
    var r = -(j * t + m * l);
    if (r > e) {
      var q = c.p1.x - q,
        p = c.p1.y - n,
        n = q * t + p * l;
      if (
        0 <= n &&
        n <= c.maxFraction * r &&
        ((c = -j * p + m * q), -e * r <= c && c <= r * (1 + e))
      )
        return (
          (d.fraction = n / r),
          (c = Math.sqrt(t * t + l * l)),
          (d.normal.x = t / c),
          (d.normal.y = l / c),
          !0
        );
    }
    return !1;
  };
  m.prototype.ComputeAABB = function (d, c) {
    var l = c.R,
      e = c.position.x + (l.col1.x * this.m_v1.x + l.col2.x * this.m_v1.y),
      j = c.position.y + (l.col1.y * this.m_v1.x + l.col2.y * this.m_v1.y),
      q = c.position.x + (l.col1.x * this.m_v2.x + l.col2.x * this.m_v2.y),
      l = c.position.y + (l.col1.y * this.m_v2.x + l.col2.y * this.m_v2.y);
    e < q
      ? ((d.lowerBound.x = e), (d.upperBound.x = q))
      : ((d.lowerBound.x = q), (d.upperBound.x = e));
    j < l
      ? ((d.lowerBound.y = j), (d.upperBound.y = l))
      : ((d.lowerBound.y = l), (d.upperBound.y = j));
  };
  m.prototype.ComputeMass = function (d) {
    d.mass = 0;
    d.center.SetV(this.m_v1);
    d.I = 0;
  };
  m.prototype.ComputeSubmergedArea = function (d, c, l, e) {
    void 0 === c && (c = 0);
    var j = new D(d.x * c, d.y * c),
      m = q.MulX(l, this.m_v1),
      l = q.MulX(l, this.m_v2),
      n = q.Dot(d, m) - c,
      d = q.Dot(d, l) - c;
    if (0 < n) {
      if (0 < d) return 0;
      m.x = (-d / (n - d)) * m.x + (n / (n - d)) * l.x;
      m.y = (-d / (n - d)) * m.y + (n / (n - d)) * l.y;
    } else
      0 < d &&
        ((l.x = (-d / (n - d)) * m.x + (n / (n - d)) * l.x),
        (l.y = (-d / (n - d)) * m.y + (n / (n - d)) * l.y));
    e.x = (j.x + m.x + l.x) / 3;
    e.y = (j.y + m.y + l.y) / 3;
    return 0.5 * ((m.x - j.x) * (l.y - j.y) - (m.y - j.y) * (l.x - j.x));
  };
  m.prototype.GetLength = function () {
    return this.m_length;
  };
  m.prototype.GetVertex1 = function () {
    return this.m_v1;
  };
  m.prototype.GetVertex2 = function () {
    return this.m_v2;
  };
  m.prototype.GetCoreVertex1 = function () {
    return this.m_coreV1;
  };
  m.prototype.GetCoreVertex2 = function () {
    return this.m_coreV2;
  };
  m.prototype.GetNormalVector = function () {
    return this.m_normal;
  };
  m.prototype.GetDirectionVector = function () {
    return this.m_direction;
  };
  m.prototype.GetCorner1Vector = function () {
    return this.m_cornerDir1;
  };
  m.prototype.GetCorner2Vector = function () {
    return this.m_cornerDir2;
  };
  m.prototype.Corner1IsConvex = function () {
    return this.m_cornerConvex1;
  };
  m.prototype.Corner2IsConvex = function () {
    return this.m_cornerConvex2;
  };
  m.prototype.GetFirstVertex = function (d) {
    var c = d.R;
    return new D(
      d.position.x + (c.col1.x * this.m_coreV1.x + c.col2.x * this.m_coreV1.y),
      d.position.y + (c.col1.y * this.m_coreV1.x + c.col2.y * this.m_coreV1.y)
    );
  };
  m.prototype.GetNextEdge = function () {
    return this.m_nextEdge;
  };
  m.prototype.GetPrevEdge = function () {
    return this.m_prevEdge;
  };
  m.prototype.Support = function (d, c, l) {
    void 0 === c && (c = 0);
    void 0 === l && (l = 0);
    var e = d.R,
      j =
        d.position.x +
        (e.col1.x * this.m_coreV1.x + e.col2.x * this.m_coreV1.y),
      m =
        d.position.y +
        (e.col1.y * this.m_coreV1.x + e.col2.y * this.m_coreV1.y),
      q =
        d.position.x +
        (e.col1.x * this.m_coreV2.x + e.col2.x * this.m_coreV2.y),
      d =
        d.position.y +
        (e.col1.y * this.m_coreV2.x + e.col2.y * this.m_coreV2.y);
    j * c + m * l > q * c + d * l
      ? ((this.s_supportVec.x = j), (this.s_supportVec.y = m))
      : ((this.s_supportVec.x = q), (this.s_supportVec.y = d));
    return this.s_supportVec;
  };
  m.prototype.b2EdgeShape = function (d, c) {
    this.__super.b2Shape.call(this);
    this.m_type = x.e_edgeShape;
    this.m_nextEdge = this.m_prevEdge = null;
    this.m_v1 = d;
    this.m_v2 = c;
    this.m_direction.Set(this.m_v2.x - this.m_v1.x, this.m_v2.y - this.m_v1.y);
    this.m_length = this.m_direction.Normalize();
    this.m_normal.Set(this.m_direction.y, -this.m_direction.x);
    this.m_coreV1.Set(
      -n.b2_toiSlop * (this.m_normal.x - this.m_direction.x) + this.m_v1.x,
      -n.b2_toiSlop * (this.m_normal.y - this.m_direction.y) + this.m_v1.y
    );
    this.m_coreV2.Set(
      -n.b2_toiSlop * (this.m_normal.x + this.m_direction.x) + this.m_v2.x,
      -n.b2_toiSlop * (this.m_normal.y + this.m_direction.y) + this.m_v2.y
    );
    this.m_cornerDir1 = this.m_normal;
    this.m_cornerDir2.Set(-this.m_normal.x, -this.m_normal.y);
  };
  m.prototype.SetPrevEdge = function (d, c, l, e) {
    this.m_prevEdge = d;
    this.m_coreV1 = c;
    this.m_cornerDir1 = l;
    this.m_cornerConvex1 = e;
  };
  m.prototype.SetNextEdge = function (d, c, l, e) {
    this.m_nextEdge = d;
    this.m_coreV2 = c;
    this.m_cornerDir2 = l;
    this.m_cornerConvex2 = e;
  };
  e.b2MassData = function () {
    this.mass = 0;
    this.center = new D(0, 0);
    this.I = 0;
  };
  Box2D.inherit(j, Box2D.Collision.Shapes.b2Shape);
  j.prototype.__super = Box2D.Collision.Shapes.b2Shape.prototype;
  j.b2PolygonShape = function () {
    Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments);
  };
  j.prototype.Copy = function () {
    var d = new j();
    d.Set(this);
    return d;
  };
  j.prototype.Set = function (d) {
    this.__super.Set.call(this, d);
    if (Box2D.is(d, j)) {
      d = d instanceof j ? d : null;
      this.m_centroid.SetV(d.m_centroid);
      this.m_vertexCount = d.m_vertexCount;
      this.Reserve(this.m_vertexCount);
      for (var c = 0; c < this.m_vertexCount; c++)
        this.m_vertices[c].SetV(d.m_vertices[c]),
          this.m_normals[c].SetV(d.m_normals[c]);
    }
  };
  j.prototype.SetAsArray = function (d, c) {
    void 0 === c && (c = 0);
    for (var l = new Vector(), e = 0, j, e = 0; e < d.length; ++e)
      (j = d[e]), l.push(j);
    this.SetAsVector(l, c);
  };
  j.AsArray = function (d, c) {
    void 0 === c && (c = 0);
    var l = new j();
    l.SetAsArray(d, c);
    return l;
  };
  j.prototype.SetAsVector = function (d, c) {
    void 0 === c && (c = 0);
    0 == c && (c = d.length);
    n.b2Assert(2 <= c);
    this.m_vertexCount = c;
    this.Reserve(c);
    for (var l = 0, l = 0; l < this.m_vertexCount; l++)
      this.m_vertices[l].SetV(d[l]);
    for (l = 0; l < this.m_vertexCount; ++l) {
      var e = parseInt(l),
        m = parseInt(l + 1 < this.m_vertexCount ? l + 1 : 0),
        e = q.SubtractVV(this.m_vertices[m], this.m_vertices[e]);
      n.b2Assert(e.LengthSquared() > Number.MIN_VALUE);
      this.m_normals[l].SetV(q.CrossVF(e, 1));
      this.m_normals[l].Normalize();
    }
    this.m_centroid = j.ComputeCentroid(this.m_vertices, this.m_vertexCount);
  };
  j.AsVector = function (d, c) {
    void 0 === c && (c = 0);
    var l = new j();
    l.SetAsVector(d, c);
    return l;
  };
  j.prototype.SetAsBox = function (d, c) {
    void 0 === d && (d = 0);
    void 0 === c && (c = 0);
    this.m_vertexCount = 4;
    this.Reserve(4);
    this.m_vertices[0].Set(-d, -c);
    this.m_vertices[1].Set(d, -c);
    this.m_vertices[2].Set(d, c);
    this.m_vertices[3].Set(-d, c);
    this.m_normals[0].Set(0, -1);
    this.m_normals[1].Set(1, 0);
    this.m_normals[2].Set(0, 1);
    this.m_normals[3].Set(-1, 0);
    this.m_centroid.SetZero();
  };
  j.AsBox = function (d, c) {
    void 0 === d && (d = 0);
    void 0 === c && (c = 0);
    var l = new j();
    l.SetAsBox(d, c);
    return l;
  };
  j.prototype.SetAsOrientedBox = function (d, c, l, e) {
    void 0 === d && (d = 0);
    void 0 === c && (c = 0);
    void 0 === l && (l = null);
    void 0 === e && (e = 0);
    this.m_vertexCount = 4;
    this.Reserve(4);
    this.m_vertices[0].Set(-d, -c);
    this.m_vertices[1].Set(d, -c);
    this.m_vertices[2].Set(d, c);
    this.m_vertices[3].Set(-d, c);
    this.m_normals[0].Set(0, -1);
    this.m_normals[1].Set(1, 0);
    this.m_normals[2].Set(0, 1);
    this.m_normals[3].Set(-1, 0);
    this.m_centroid = l;
    d = new K();
    d.position = l;
    d.R.Set(e);
    for (l = 0; l < this.m_vertexCount; ++l)
      (this.m_vertices[l] = q.MulX(d, this.m_vertices[l])),
        (this.m_normals[l] = q.MulMV(d.R, this.m_normals[l]));
  };
  j.AsOrientedBox = function (d, c, l, e) {
    void 0 === d && (d = 0);
    void 0 === c && (c = 0);
    void 0 === l && (l = null);
    void 0 === e && (e = 0);
    var m = new j();
    m.SetAsOrientedBox(d, c, l, e);
    return m;
  };
  j.prototype.SetAsEdge = function (d, c) {
    this.m_vertexCount = 2;
    this.Reserve(2);
    this.m_vertices[0].SetV(d);
    this.m_vertices[1].SetV(c);
    this.m_centroid.x = 0.5 * (d.x + c.x);
    this.m_centroid.y = 0.5 * (d.y + c.y);
    this.m_normals[0] = q.CrossVF(q.SubtractVV(c, d), 1);
    this.m_normals[0].Normalize();
    this.m_normals[1].x = -this.m_normals[0].x;
    this.m_normals[1].y = -this.m_normals[0].y;
  };
  j.AsEdge = function (d, c) {
    var l = new j();
    l.SetAsEdge(d, c);
    return l;
  };
  j.prototype.TestPoint = function (d, c) {
    var l;
    l = d.R;
    for (
      var e = c.x - d.position.x,
        j = c.y - d.position.y,
        m = e * l.col1.x + j * l.col1.y,
        q = e * l.col2.x + j * l.col2.y,
        n = 0;
      n < this.m_vertexCount;
      ++n
    )
      if (
        ((l = this.m_vertices[n]),
        (e = m - l.x),
        (j = q - l.y),
        (l = this.m_normals[n]),
        0 < l.x * e + l.y * j)
      )
        return !1;
    return !0;
  };
  j.prototype.RayCast = function (d, c, l) {
    var e = 0,
      j = c.maxFraction,
      m = 0,
      q = 0,
      n,
      t,
      m = c.p1.x - l.position.x,
      q = c.p1.y - l.position.y;
    n = l.R;
    var r = m * n.col1.x + q * n.col1.y,
      p = m * n.col2.x + q * n.col2.y,
      m = c.p2.x - l.position.x,
      q = c.p2.y - l.position.y;
    n = l.R;
    c = m * n.col1.x + q * n.col1.y - r;
    n = m * n.col2.x + q * n.col2.y - p;
    for (var A = -1, a = 0; a < this.m_vertexCount; ++a) {
      t = this.m_vertices[a];
      m = t.x - r;
      q = t.y - p;
      t = this.m_normals[a];
      m = t.x * m + t.y * q;
      q = t.x * c + t.y * n;
      if (0 == q) {
        if (0 > m) return !1;
      } else
        0 > q && m < e * q
          ? ((e = m / q), (A = a))
          : 0 < q && m < j * q && (j = m / q);
      if (j < e - Number.MIN_VALUE) return !1;
    }
    return 0 <= A
      ? ((d.fraction = e),
        (n = l.R),
        (t = this.m_normals[A]),
        (d.normal.x = n.col1.x * t.x + n.col2.x * t.y),
        (d.normal.y = n.col1.y * t.x + n.col2.y * t.y),
        !0)
      : !1;
  };
  j.prototype.ComputeAABB = function (d, c) {
    for (
      var l = c.R,
        e = this.m_vertices[0],
        j = c.position.x + (l.col1.x * e.x + l.col2.x * e.y),
        m = c.position.y + (l.col1.y * e.x + l.col2.y * e.y),
        q = j,
        n = m,
        t = 1;
      t < this.m_vertexCount;
      ++t
    )
      var e = this.m_vertices[t],
        r = c.position.x + (l.col1.x * e.x + l.col2.x * e.y),
        e = c.position.y + (l.col1.y * e.x + l.col2.y * e.y),
        j = j < r ? j : r,
        m = m < e ? m : e,
        q = q > r ? q : r,
        n = n > e ? n : e;
    d.lowerBound.x = j - this.m_radius;
    d.lowerBound.y = m - this.m_radius;
    d.upperBound.x = q + this.m_radius;
    d.upperBound.y = n + this.m_radius;
  };
  j.prototype.ComputeMass = function (d, c) {
    void 0 === c && (c = 0);
    if (2 == this.m_vertexCount)
      (d.center.x = 0.5 * (this.m_vertices[0].x + this.m_vertices[1].x)),
        (d.center.y = 0.5 * (this.m_vertices[0].y + this.m_vertices[1].y)),
        (d.mass = 0),
        (d.I = 0);
    else {
      for (
        var e = 0, j = 0, m = 0, q = 0, n = 1 / 3, t = 0;
        t < this.m_vertexCount;
        ++t
      )
        var r = this.m_vertices[t],
          p =
            t + 1 < this.m_vertexCount
              ? this.m_vertices[parseInt(t + 1)]
              : this.m_vertices[0],
          A = r.x - 0,
          w = r.y - 0,
          a = p.x - 0,
          h = p.y - 0,
          s = A * h - w * a,
          g = 0.5 * s,
          m = m + g,
          e = e + g * n * (0 + r.x + p.x),
          j = j + g * n * (0 + r.y + p.y),
          r = A,
          q =
            q +
            s *
              (n * (0.25 * (r * r + a * r + a * a) + (0 * r + 0 * a)) +
                0 +
                (n * (0.25 * (w * w + h * w + h * h) + (0 * w + 0 * h)) + 0));
      d.mass = c * m;
      d.center.Set(e * (1 / m), j * (1 / m));
      d.I = c * q;
    }
  };
  j.prototype.ComputeSubmergedArea = function (d, c, l, j) {
    void 0 === c && (c = 0);
    for (
      var m = q.MulTMV(l.R, d),
        n = c - q.Dot(d, l.position),
        t = new Vector_a2j_Number(),
        r = 0,
        p = -1,
        c = -1,
        A = !1,
        d = (d = 0);
      d < this.m_vertexCount;
      ++d
    ) {
      t[d] = q.Dot(m, this.m_vertices[d]) - n;
      var w = t[d] < -Number.MIN_VALUE;
      0 < d && (w ? A || ((p = d - 1), r++) : A && ((c = d - 1), r++));
      A = w;
    }
    switch (r) {
      case 0:
        return A
          ? ((d = new e()),
            this.ComputeMass(d, 1),
            j.SetV(q.MulX(l, d.center)),
            d.mass)
          : 0;
      case 1:
        -1 == p ? (p = this.m_vertexCount - 1) : (c = this.m_vertexCount - 1);
    }
    d = parseInt((p + 1) % this.m_vertexCount);
    m = parseInt((c + 1) % this.m_vertexCount);
    n = (0 - t[p]) / (t[d] - t[p]);
    t = (0 - t[c]) / (t[m] - t[c]);
    p = new D(
      this.m_vertices[p].x * (1 - n) + this.m_vertices[d].x * n,
      this.m_vertices[p].y * (1 - n) + this.m_vertices[d].y * n
    );
    c = new D(
      this.m_vertices[c].x * (1 - t) + this.m_vertices[m].x * t,
      this.m_vertices[c].y * (1 - t) + this.m_vertices[m].y * t
    );
    t = 0;
    n = new D();
    for (r = this.m_vertices[d]; d != m; )
      (d = (d + 1) % this.m_vertexCount),
        (A = d == m ? c : this.m_vertices[d]),
        (w = 0.5 * ((r.x - p.x) * (A.y - p.y) - (r.y - p.y) * (A.x - p.x))),
        (t += w),
        (n.x += (w * (p.x + r.x + A.x)) / 3),
        (n.y += (w * (p.y + r.y + A.y)) / 3),
        (r = A);
    n.Multiply(1 / t);
    j.SetV(q.MulX(l, n));
    return t;
  };
  j.prototype.GetVertexCount = function () {
    return this.m_vertexCount;
  };
  j.prototype.GetVertices = function () {
    return this.m_vertices;
  };
  j.prototype.GetNormals = function () {
    return this.m_normals;
  };
  j.prototype.GetSupport = function (d) {
    for (
      var c = 0,
        e = this.m_vertices[0].x * d.x + this.m_vertices[0].y * d.y,
        j = 1;
      j < this.m_vertexCount;
      ++j
    ) {
      var m = this.m_vertices[j].x * d.x + this.m_vertices[j].y * d.y;
      m > e && ((c = j), (e = m));
    }
    return c;
  };
  j.prototype.GetSupportVertex = function (d) {
    for (
      var c = 0,
        e = this.m_vertices[0].x * d.x + this.m_vertices[0].y * d.y,
        j = 1;
      j < this.m_vertexCount;
      ++j
    ) {
      var m = this.m_vertices[j].x * d.x + this.m_vertices[j].y * d.y;
      m > e && ((c = j), (e = m));
    }
    return this.m_vertices[c];
  };
  j.prototype.Validate = function () {
    return !1;
  };
  j.prototype.b2PolygonShape = function () {
    this.__super.b2Shape.call(this);
    this.m_type = x.e_polygonShape;
    this.m_centroid = new D();
    this.m_vertices = new Vector();
    this.m_normals = new Vector();
  };
  j.prototype.Reserve = function (d) {
    void 0 === d && (d = 0);
    for (var c = parseInt(this.m_vertices.length); c < d; c++)
      (this.m_vertices[c] = new D()), (this.m_normals[c] = new D());
  };
  j.ComputeCentroid = function (d, c) {
    void 0 === c && (c = 0);
    for (var e = new D(), j = 0, m = 1 / 3, q = 0; q < c; ++q) {
      var n = d[q],
        t = q + 1 < c ? d[parseInt(q + 1)] : d[0],
        r = 0.5 * ((n.x - 0) * (t.y - 0) - (n.y - 0) * (t.x - 0)),
        j = j + r;
      e.x += r * m * (0 + n.x + t.x);
      e.y += r * m * (0 + n.y + t.y);
    }
    e.x *= 1 / j;
    e.y *= 1 / j;
    return e;
  };
  j.ComputeOBB = function (d, c, e) {
    void 0 === e && (e = 0);
    for (var j = 0, m = new Vector(e + 1), j = 0; j < e; ++j) m[j] = c[j];
    m[e] = m[0];
    c = Number.MAX_VALUE;
    for (j = 1; j <= e; ++j) {
      for (
        var q = m[parseInt(j - 1)],
          n = m[j].x - q.x,
          t = m[j].y - q.y,
          r = Math.sqrt(n * n + t * t),
          n = n / r,
          t = t / r,
          p = -t,
          A = n,
          w = (r = Number.MAX_VALUE),
          a = -Number.MAX_VALUE,
          h = -Number.MAX_VALUE,
          s = 0;
        s < e;
        ++s
      ) {
        var g = m[s].x - q.x,
          u = m[s].y - q.y,
          y = n * g + t * u,
          g = p * g + A * u;
        y < r && (r = y);
        g < w && (w = g);
        y > a && (a = y);
        g > h && (h = g);
      }
      s = (a - r) * (h - w);
      s < 0.95 * c &&
        ((c = s),
        (d.R.col1.x = n),
        (d.R.col1.y = t),
        (d.R.col2.x = p),
        (d.R.col2.y = A),
        (n = 0.5 * (r + a)),
        (t = 0.5 * (w + h)),
        (p = d.R),
        (d.center.x = q.x + (p.col1.x * n + p.col2.x * t)),
        (d.center.y = q.y + (p.col1.y * n + p.col2.y * t)),
        (d.extents.x = 0.5 * (a - r)),
        (d.extents.y = 0.5 * (h - w)));
    }
  };
  Box2D.postDefs.push(function () {
    Box2D.Collision.Shapes.b2PolygonShape.s_mat = new c();
  });
  x.b2Shape = function () {};
  x.prototype.Copy = function () {
    return null;
  };
  x.prototype.Set = function (d) {
    this.m_radius = d.m_radius;
  };
  x.prototype.GetType = function () {
    return this.m_type;
  };
  x.prototype.TestPoint = function () {
    return !1;
  };
  x.prototype.RayCast = function () {
    return !1;
  };
  x.prototype.ComputeAABB = function () {};
  x.prototype.ComputeMass = function () {};
  x.prototype.ComputeSubmergedArea = function () {
    return 0;
  };
  x.TestOverlap = function (d, c, e, j) {
    var m = new A();
    m.proxyA = new J();
    m.proxyA.Set(d);
    m.proxyB = new J();
    m.proxyB.Set(e);
    m.transformA = c;
    m.transformB = j;
    m.useRadii = !0;
    d = new L();
    d.count = 0;
    c = new t();
    w.Distance(c, d, m);
    return c.distance < 10 * Number.MIN_VALUE;
  };
  x.prototype.b2Shape = function () {
    this.m_type = x.e_unknownShape;
    this.m_radius = n.b2_linearSlop;
  };
  Box2D.postDefs.push(function () {
    Box2D.Collision.Shapes.b2Shape.e_unknownShape = -1;
    Box2D.Collision.Shapes.b2Shape.e_circleShape = 0;
    Box2D.Collision.Shapes.b2Shape.e_polygonShape = 1;
    Box2D.Collision.Shapes.b2Shape.e_edgeShape = 2;
    Box2D.Collision.Shapes.b2Shape.e_shapeTypeCount = 3;
    Box2D.Collision.Shapes.b2Shape.e_hitCollide = 1;
    Box2D.Collision.Shapes.b2Shape.e_missCollide = 0;
    Box2D.Collision.Shapes.b2Shape.e_startsInsideCollide = -1;
  });
})();
(function () {
  var n = Box2D.Common.b2Color,
    r = Box2D.Common.b2Settings,
    p = Box2D.Common.Math.b2Math;
  n.b2Color = function () {
    this._b = this._g = this._r = 0;
  };
  n.prototype.b2Color = function (m, e, j) {
    void 0 === m && (m = 0);
    void 0 === e && (e = 0);
    void 0 === j && (j = 0);
    this._r = Box2D.parseUInt(255 * p.Clamp(m, 0, 1));
    this._g = Box2D.parseUInt(255 * p.Clamp(e, 0, 1));
    this._b = Box2D.parseUInt(255 * p.Clamp(j, 0, 1));
  };
  n.prototype.Set = function (m, e, j) {
    void 0 === m && (m = 0);
    void 0 === e && (e = 0);
    void 0 === j && (j = 0);
    this._r = Box2D.parseUInt(255 * p.Clamp(m, 0, 1));
    this._g = Box2D.parseUInt(255 * p.Clamp(e, 0, 1));
    this._b = Box2D.parseUInt(255 * p.Clamp(j, 0, 1));
  };
  Object.defineProperty(n.prototype, "r", {
    enumerable: !1,
    configurable: !0,
    set: function (m) {
      void 0 === m && (m = 0);
      this._r = Box2D.parseUInt(255 * p.Clamp(m, 0, 1));
    },
  });
  Object.defineProperty(n.prototype, "g", {
    enumerable: !1,
    configurable: !0,
    set: function (m) {
      void 0 === m && (m = 0);
      this._g = Box2D.parseUInt(255 * p.Clamp(m, 0, 1));
    },
  });
  Object.defineProperty(n.prototype, "b", {
    enumerable: !1,
    configurable: !0,
    set: function (m) {
      void 0 === m && (m = 0);
      this._b = Box2D.parseUInt(255 * p.Clamp(m, 0, 1));
    },
  });
  Object.defineProperty(n.prototype, "color", {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return (this._r << 16) | (this._g << 8) | this._b;
    },
  });
  r.b2Settings = function () {};
  r.b2MixFriction = function (m, e) {
    void 0 === m && (m = 0);
    void 0 === e && (e = 0);
    return Math.sqrt(m * e);
  };
  r.b2MixRestitution = function (m, e) {
    void 0 === m && (m = 0);
    void 0 === e && (e = 0);
    return m > e ? m : e;
  };
  r.b2Assert = function (m) {
    if (!m) throw "Assertion Failed";
  };
  Box2D.postDefs.push(function () {
    Box2D.Common.b2Settings.VERSION = "2.1alpha";
    Box2D.Common.b2Settings.USHRT_MAX = 65535;
    Box2D.Common.b2Settings.b2_pi = Math.PI;
    Box2D.Common.b2Settings.b2_maxManifoldPoints = 2;
    Box2D.Common.b2Settings.b2_aabbExtension = 0.1;
    Box2D.Common.b2Settings.b2_aabbMultiplier = 2;
    Box2D.Common.b2Settings.b2_polygonRadius = 2 * r.b2_linearSlop;
    Box2D.Common.b2Settings.b2_linearSlop = 0.005;
    Box2D.Common.b2Settings.b2_angularSlop = (2 / 180) * r.b2_pi;
    Box2D.Common.b2Settings.b2_toiSlop = 8 * r.b2_linearSlop;
    Box2D.Common.b2Settings.b2_maxTOIContactsPerIsland = 32;
    Box2D.Common.b2Settings.b2_maxTOIJointsPerIsland = 32;
    Box2D.Common.b2Settings.b2_velocityThreshold = 1;
    Box2D.Common.b2Settings.b2_maxLinearCorrection = 0.2;
    Box2D.Common.b2Settings.b2_maxAngularCorrection = (8 / 180) * r.b2_pi;
    Box2D.Common.b2Settings.b2_maxTranslation = 2;
    Box2D.Common.b2Settings.b2_maxTranslationSquared =
      r.b2_maxTranslation * r.b2_maxTranslation;
    Box2D.Common.b2Settings.b2_maxRotation = 0.5 * r.b2_pi;
    Box2D.Common.b2Settings.b2_maxRotationSquared =
      r.b2_maxRotation * r.b2_maxRotation;
    Box2D.Common.b2Settings.b2_contactBaumgarte = 0.2;
    Box2D.Common.b2Settings.b2_timeToSleep = 0.5;
    Box2D.Common.b2Settings.b2_linearSleepTolerance = 0.01;
    Box2D.Common.b2Settings.b2_angularSleepTolerance = (2 / 180) * r.b2_pi;
  });
})();
(function () {
  var n = Box2D.Common.Math.b2Mat22,
    r = Box2D.Common.Math.b2Mat33,
    p = Box2D.Common.Math.b2Math,
    m = Box2D.Common.Math.b2Sweep,
    e = Box2D.Common.Math.b2Transform,
    j = Box2D.Common.Math.b2Vec2,
    x = Box2D.Common.Math.b2Vec3;
  n.b2Mat22 = function () {
    this.col1 = new j();
    this.col2 = new j();
  };
  n.prototype.b2Mat22 = function () {
    this.SetIdentity();
  };
  n.FromAngle = function (c) {
    void 0 === c && (c = 0);
    var e = new n();
    e.Set(c);
    return e;
  };
  n.FromVV = function (c, e) {
    var j = new n();
    j.SetVV(c, e);
    return j;
  };
  n.prototype.Set = function (c) {
    void 0 === c && (c = 0);
    var e = Math.cos(c),
      c = Math.sin(c);
    this.col1.x = e;
    this.col2.x = -c;
    this.col1.y = c;
    this.col2.y = e;
  };
  n.prototype.SetVV = function (c, e) {
    this.col1.SetV(c);
    this.col2.SetV(e);
  };
  n.prototype.Copy = function () {
    var c = new n();
    c.SetM(this);
    return c;
  };
  n.prototype.SetM = function (c) {
    this.col1.SetV(c.col1);
    this.col2.SetV(c.col2);
  };
  n.prototype.AddM = function (c) {
    this.col1.x += c.col1.x;
    this.col1.y += c.col1.y;
    this.col2.x += c.col2.x;
    this.col2.y += c.col2.y;
  };
  n.prototype.SetIdentity = function () {
    this.col1.x = 1;
    this.col2.x = 0;
    this.col1.y = 0;
    this.col2.y = 1;
  };
  n.prototype.SetZero = function () {
    this.col1.x = 0;
    this.col2.x = 0;
    this.col1.y = 0;
    this.col2.y = 0;
  };
  n.prototype.GetAngle = function () {
    return Math.atan2(this.col1.y, this.col1.x);
  };
  n.prototype.GetInverse = function (c) {
    var e = this.col1.x,
      j = this.col2.x,
      m = this.col1.y,
      n = this.col2.y,
      r = e * n - j * m;
    0 != r && (r = 1 / r);
    c.col1.x = r * n;
    c.col2.x = -r * j;
    c.col1.y = -r * m;
    c.col2.y = r * e;
    return c;
  };
  n.prototype.Solve = function (c, e, j) {
    void 0 === e && (e = 0);
    void 0 === j && (j = 0);
    var m = this.col1.x,
      n = this.col2.x,
      r = this.col1.y,
      t = this.col2.y,
      p = m * t - n * r;
    0 != p && (p = 1 / p);
    c.x = p * (t * e - n * j);
    c.y = p * (m * j - r * e);
    return c;
  };
  n.prototype.Abs = function () {
    this.col1.Abs();
    this.col2.Abs();
  };
  r.b2Mat33 = function () {
    this.col1 = new x();
    this.col2 = new x();
    this.col3 = new x();
  };
  r.prototype.b2Mat33 = function (c, e, j) {
    void 0 === c && (c = null);
    void 0 === e && (e = null);
    void 0 === j && (j = null);
    !c && !e && !j
      ? (this.col1.SetZero(), this.col2.SetZero(), this.col3.SetZero())
      : (this.col1.SetV(c), this.col2.SetV(e), this.col3.SetV(j));
  };
  r.prototype.SetVVV = function (c, e, j) {
    this.col1.SetV(c);
    this.col2.SetV(e);
    this.col3.SetV(j);
  };
  r.prototype.Copy = function () {
    return new r(this.col1, this.col2, this.col3);
  };
  r.prototype.SetM = function (c) {
    this.col1.SetV(c.col1);
    this.col2.SetV(c.col2);
    this.col3.SetV(c.col3);
  };
  r.prototype.AddM = function (c) {
    this.col1.x += c.col1.x;
    this.col1.y += c.col1.y;
    this.col1.z += c.col1.z;
    this.col2.x += c.col2.x;
    this.col2.y += c.col2.y;
    this.col2.z += c.col2.z;
    this.col3.x += c.col3.x;
    this.col3.y += c.col3.y;
    this.col3.z += c.col3.z;
  };
  r.prototype.SetIdentity = function () {
    this.col1.x = 1;
    this.col2.x = 0;
    this.col3.x = 0;
    this.col1.y = 0;
    this.col2.y = 1;
    this.col3.y = 0;
    this.col1.z = 0;
    this.col2.z = 0;
    this.col3.z = 1;
  };
  r.prototype.SetZero = function () {
    this.col1.x = 0;
    this.col2.x = 0;
    this.col3.x = 0;
    this.col1.y = 0;
    this.col2.y = 0;
    this.col3.y = 0;
    this.col1.z = 0;
    this.col2.z = 0;
    this.col3.z = 0;
  };
  r.prototype.Solve22 = function (c, e, j) {
    void 0 === e && (e = 0);
    void 0 === j && (j = 0);
    var m = this.col1.x,
      n = this.col2.x,
      r = this.col1.y,
      t = this.col2.y,
      p = m * t - n * r;
    0 != p && (p = 1 / p);
    c.x = p * (t * e - n * j);
    c.y = p * (m * j - r * e);
    return c;
  };
  r.prototype.Solve33 = function (c, e, j, m) {
    void 0 === e && (e = 0);
    void 0 === j && (j = 0);
    void 0 === m && (m = 0);
    var n = this.col1.x,
      r = this.col1.y,
      t = this.col1.z,
      p = this.col2.x,
      x = this.col2.y,
      d = this.col2.z,
      z = this.col3.x,
      l = this.col3.y,
      C = this.col3.z,
      F = n * (x * C - d * l) + r * (d * z - p * C) + t * (p * l - x * z);
    0 != F && (F = 1 / F);
    c.x = F * (e * (x * C - d * l) + j * (d * z - p * C) + m * (p * l - x * z));
    c.y = F * (n * (j * C - m * l) + r * (m * z - e * C) + t * (e * l - j * z));
    c.z = F * (n * (x * m - d * j) + r * (d * e - p * m) + t * (p * j - x * e));
    return c;
  };
  p.b2Math = function () {};
  p.IsValid = function (c) {
    void 0 === c && (c = 0);
    return isFinite(c);
  };
  p.Dot = function (c, e) {
    return c.x * e.x + c.y * e.y;
  };
  p.CrossVV = function (c, e) {
    return c.x * e.y - c.y * e.x;
  };
  p.CrossVF = function (c, e) {
    void 0 === e && (e = 0);
    return new j(e * c.y, -e * c.x);
  };
  p.CrossFV = function (c, e) {
    void 0 === c && (c = 0);
    return new j(-c * e.y, c * e.x);
  };
  p.MulMV = function (c, e) {
    return new j(
      c.col1.x * e.x + c.col2.x * e.y,
      c.col1.y * e.x + c.col2.y * e.y
    );
  };
  p.MulTMV = function (c, e) {
    return new j(p.Dot(e, c.col1), p.Dot(e, c.col2));
  };
  p.MulX = function (c, e) {
    var j = p.MulMV(c.R, e);
    j.x += c.position.x;
    j.y += c.position.y;
    return j;
  };
  p.MulXT = function (c, e) {
    var j = p.SubtractVV(e, c.position),
      m = j.x * c.R.col1.x + j.y * c.R.col1.y;
    j.y = j.x * c.R.col2.x + j.y * c.R.col2.y;
    j.x = m;
    return j;
  };
  p.AddVV = function (c, e) {
    return new j(c.x + e.x, c.y + e.y);
  };
  p.SubtractVV = function (c, e) {
    return new j(c.x - e.x, c.y - e.y);
  };
  p.Distance = function (c, e) {
    var j = c.x - e.x,
      m = c.y - e.y;
    return Math.sqrt(j * j + m * m);
  };
  p.DistanceSquared = function (c, e) {
    var j = c.x - e.x,
      m = c.y - e.y;
    return j * j + m * m;
  };
  p.MulFV = function (c, e) {
    void 0 === c && (c = 0);
    return new j(c * e.x, c * e.y);
  };
  p.AddMM = function (c, e) {
    return n.FromVV(p.AddVV(c.col1, e.col1), p.AddVV(c.col2, e.col2));
  };
  p.MulMM = function (c, e) {
    return n.FromVV(p.MulMV(c, e.col1), p.MulMV(c, e.col2));
  };
  p.MulTMM = function (c, e) {
    var m = new j(p.Dot(c.col1, e.col1), p.Dot(c.col2, e.col1)),
      r = new j(p.Dot(c.col1, e.col2), p.Dot(c.col2, e.col2));
    return n.FromVV(m, r);
  };
  p.Abs = function (c) {
    void 0 === c && (c = 0);
    return 0 < c ? c : -c;
  };
  p.AbsV = function (c) {
    return new j(p.Abs(c.x), p.Abs(c.y));
  };
  p.AbsM = function (c) {
    return n.FromVV(p.AbsV(c.col1), p.AbsV(c.col2));
  };
  p.Min = function (c, e) {
    void 0 === c && (c = 0);
    void 0 === e && (e = 0);
    return c < e ? c : e;
  };
  p.MinV = function (c, e) {
    return new j(p.Min(c.x, e.x), p.Min(c.y, e.y));
  };
  p.Max = function (c, e) {
    void 0 === c && (c = 0);
    void 0 === e && (e = 0);
    return c > e ? c : e;
  };
  p.MaxV = function (c, e) {
    return new j(p.Max(c.x, e.x), p.Max(c.y, e.y));
  };
  p.Clamp = function (c, e, j) {
    void 0 === c && (c = 0);
    void 0 === e && (e = 0);
    void 0 === j && (j = 0);
    return c < e ? e : c > j ? j : c;
  };
  p.ClampV = function (c, e, j) {
    return p.MaxV(e, p.MinV(c, j));
  };
  p.Swap = function (c, e) {
    var j = c[0];
    c[0] = e[0];
    e[0] = j;
  };
  p.Random = function () {
    return 2 * Math.random() - 1;
  };
  p.RandomRange = function (c, e) {
    void 0 === c && (c = 0);
    void 0 === e && (e = 0);
    var j = Math.random();
    return (e - c) * j + c;
  };
  p.NextPowerOfTwo = function (c) {
    void 0 === c && (c = 0);
    c |= (c >> 1) & 2147483647;
    c |= (c >> 2) & 1073741823;
    c |= (c >> 4) & 268435455;
    c |= (c >> 8) & 16777215;
    return (c | ((c >> 16) & 65535)) + 1;
  };
  p.IsPowerOfTwo = function (c) {
    void 0 === c && (c = 0);
    return 0 < c && 0 == (c & (c - 1));
  };
  Box2D.postDefs.push(function () {
    Box2D.Common.Math.b2Math.b2Vec2_zero = new j(0, 0);
    Box2D.Common.Math.b2Math.b2Mat22_identity = n.FromVV(
      new j(1, 0),
      new j(0, 1)
    );
    Box2D.Common.Math.b2Math.b2Transform_identity = new e(
      p.b2Vec2_zero,
      p.b2Mat22_identity
    );
  });
  m.b2Sweep = function () {
    this.localCenter = new j();
    this.c0 = new j();
    this.c = new j();
  };
  m.prototype.Set = function (c) {
    this.localCenter.SetV(c.localCenter);
    this.c0.SetV(c.c0);
    this.c.SetV(c.c);
    this.a0 = c.a0;
    this.a = c.a;
    this.t0 = c.t0;
  };
  m.prototype.Copy = function () {
    var c = new m();
    c.localCenter.SetV(this.localCenter);
    c.c0.SetV(this.c0);
    c.c.SetV(this.c);
    c.a0 = this.a0;
    c.a = this.a;
    c.t0 = this.t0;
    return c;
  };
  m.prototype.GetTransform = function (c, e) {
    void 0 === e && (e = 0);
    c.position.x = (1 - e) * this.c0.x + e * this.c.x;
    c.position.y = (1 - e) * this.c0.y + e * this.c.y;
    c.R.Set((1 - e) * this.a0 + e * this.a);
    var j = c.R;
    c.position.x -=
      j.col1.x * this.localCenter.x + j.col2.x * this.localCenter.y;
    c.position.y -=
      j.col1.y * this.localCenter.x + j.col2.y * this.localCenter.y;
  };
  m.prototype.Advance = function (c) {
    void 0 === c && (c = 0);
    if (this.t0 < c && 1 - this.t0 > Number.MIN_VALUE) {
      var e = (c - this.t0) / (1 - this.t0);
      this.c0.x = (1 - e) * this.c0.x + e * this.c.x;
      this.c0.y = (1 - e) * this.c0.y + e * this.c.y;
      this.a0 = (1 - e) * this.a0 + e * this.a;
      this.t0 = c;
    }
  };
  e.b2Transform = function () {
    this.position = new j();
    this.R = new n();
  };
  e.prototype.b2Transform = function (c, e) {
    void 0 === c && (c = null);
    void 0 === e && (e = null);
    c && (this.position.SetV(c), this.R.SetM(e));
  };
  e.prototype.Initialize = function (c, e) {
    this.position.SetV(c);
    this.R.SetM(e);
  };
  e.prototype.SetIdentity = function () {
    this.position.SetZero();
    this.R.SetIdentity();
  };
  e.prototype.Set = function (c) {
    this.position.SetV(c.position);
    this.R.SetM(c.R);
  };
  e.prototype.GetAngle = function () {
    return Math.atan2(this.R.col1.y, this.R.col1.x);
  };
  j.b2Vec2 = function () {};
  j.prototype.b2Vec2 = function (c, e) {
    void 0 === c && (c = 0);
    void 0 === e && (e = 0);
    this.x = c;
    this.y = e;
  };
  j.prototype.SetZero = function () {
    this.y = this.x = 0;
  };
  j.prototype.Set = function (c, e) {
    void 0 === c && (c = 0);
    void 0 === e && (e = 0);
    this.x = c;
    this.y = e;
  };
  j.prototype.SetV = function (c) {
    this.x = c.x;
    this.y = c.y;
  };
  j.prototype.GetNegative = function () {
    return new j(-this.x, -this.y);
  };
  j.prototype.NegativeSelf = function () {
    this.x = -this.x;
    this.y = -this.y;
  };
  j.Make = function (c, e) {
    void 0 === c && (c = 0);
    void 0 === e && (e = 0);
    return new j(c, e);
  };
  j.prototype.Copy = function () {
    return new j(this.x, this.y);
  };
  j.prototype.Add = function (c) {
    this.x += c.x;
    this.y += c.y;
  };
  j.prototype.Subtract = function (c) {
    this.x -= c.x;
    this.y -= c.y;
  };
  j.prototype.Multiply = function (c) {
    void 0 === c && (c = 0);
    this.x *= c;
    this.y *= c;
  };
  j.prototype.MulM = function (c) {
    var e = this.x;
    this.x = c.col1.x * e + c.col2.x * this.y;
    this.y = c.col1.y * e + c.col2.y * this.y;
  };
  j.prototype.MulTM = function (c) {
    var e = p.Dot(this, c.col1);
    this.y = p.Dot(this, c.col2);
    this.x = e;
  };
  j.prototype.CrossVF = function (c) {
    void 0 === c && (c = 0);
    var e = this.x;
    this.x = c * this.y;
    this.y = -c * e;
  };
  j.prototype.CrossFV = function (c) {
    void 0 === c && (c = 0);
    var e = this.x;
    this.x = -c * this.y;
    this.y = c * e;
  };
  j.prototype.MinV = function (c) {
    this.x = this.x < c.x ? this.x : c.x;
    this.y = this.y < c.y ? this.y : c.y;
  };
  j.prototype.MaxV = function (c) {
    this.x = this.x > c.x ? this.x : c.x;
    this.y = this.y > c.y ? this.y : c.y;
  };
  j.prototype.Abs = function () {
    0 > this.x && (this.x = -this.x);
    0 > this.y && (this.y = -this.y);
  };
  j.prototype.Length = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  };
  j.prototype.LengthSquared = function () {
    return this.x * this.x + this.y * this.y;
  };
  j.prototype.Normalize = function () {
    var c = Math.sqrt(this.x * this.x + this.y * this.y);
    if (c < Number.MIN_VALUE) return 0;
    var e = 1 / c;
    this.x *= e;
    this.y *= e;
    return c;
  };
  j.prototype.IsValid = function () {
    return p.IsValid(this.x) && p.IsValid(this.y);
  };
  x.b2Vec3 = function () {};
  x.prototype.b2Vec3 = function (c, e, j) {
    void 0 === c && (c = 0);
    void 0 === e && (e = 0);
    void 0 === j && (j = 0);
    this.x = c;
    this.y = e;
    this.z = j;
  };
  x.prototype.SetZero = function () {
    this.x = this.y = this.z = 0;
  };
  x.prototype.Set = function (c, e, j) {
    void 0 === c && (c = 0);
    void 0 === e && (e = 0);
    void 0 === j && (j = 0);
    this.x = c;
    this.y = e;
    this.z = j;
  };
  x.prototype.SetV = function (c) {
    this.x = c.x;
    this.y = c.y;
    this.z = c.z;
  };
  x.prototype.GetNegative = function () {
    return new x(-this.x, -this.y, -this.z);
  };
  x.prototype.NegativeSelf = function () {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
  };
  x.prototype.Copy = function () {
    return new x(this.x, this.y, this.z);
  };
  x.prototype.Add = function (c) {
    this.x += c.x;
    this.y += c.y;
    this.z += c.z;
  };
  x.prototype.Subtract = function (c) {
    this.x -= c.x;
    this.y -= c.y;
    this.z -= c.z;
  };
  x.prototype.Multiply = function (c) {
    void 0 === c && (c = 0);
    this.x *= c;
    this.y *= c;
    this.z *= c;
  };
})();
(function () {
  var n = Box2D.Common.Math.b2Math,
    r = Box2D.Common.Math.b2Sweep,
    p = Box2D.Common.Math.b2Transform,
    m = Box2D.Common.Math.b2Vec2,
    e = Box2D.Common.b2Color,
    j = Box2D.Common.b2Settings,
    x = Box2D.Collision.b2AABB,
    c = Box2D.Collision.b2ContactPoint,
    q = Box2D.Collision.b2DynamicTreeBroadPhase,
    K = Box2D.Collision.b2RayCastInput,
    D = Box2D.Collision.b2RayCastOutput,
    w = Box2D.Collision.Shapes.b2CircleShape,
    A = Box2D.Collision.Shapes.b2EdgeShape,
    t = Box2D.Collision.Shapes.b2MassData,
    J = Box2D.Collision.Shapes.b2PolygonShape,
    L = Box2D.Collision.Shapes.b2Shape,
    d = Box2D.Dynamics.b2Body,
    z = Box2D.Dynamics.b2BodyDef,
    l = Box2D.Dynamics.b2ContactFilter,
    C = Box2D.Dynamics.b2ContactImpulse,
    F = Box2D.Dynamics.b2ContactListener,
    H = Box2D.Dynamics.b2ContactManager,
    B = Box2D.Dynamics.b2DebugDraw,
    M = Box2D.Dynamics.b2DestructionListener,
    E = Box2D.Dynamics.b2FilterData,
    G = Box2D.Dynamics.b2Fixture,
    N = Box2D.Dynamics.b2FixtureDef,
    I = Box2D.Dynamics.b2Island,
    a = Box2D.Dynamics.b2TimeStep,
    h = Box2D.Dynamics.b2World,
    s = Box2D.Dynamics.Contacts.b2Contact,
    g = Box2D.Dynamics.Contacts.b2ContactFactory,
    u = Box2D.Dynamics.Contacts.b2ContactSolver,
    y = Box2D.Dynamics.Joints.b2Joint,
    f = Box2D.Dynamics.Joints.b2PulleyJoint;
  d.b2Body = function () {
    this.m_xf = new p();
    this.m_sweep = new r();
    this.m_linearVelocity = new m();
    this.m_force = new m();
  };
  d.prototype.connectEdges = function (b, k, a) {
    void 0 === a && (a = 0);
    var g = Math.atan2(k.GetDirectionVector().y, k.GetDirectionVector().x),
      a = Math.tan(0.5 * (g - a)),
      a = n.MulFV(a, k.GetDirectionVector()),
      a = n.SubtractVV(a, k.GetNormalVector()),
      a = n.MulFV(j.b2_toiSlop, a),
      a = n.AddVV(a, k.GetVertex1()),
      h = n.AddVV(b.GetDirectionVector(), k.GetDirectionVector());
    h.Normalize();
    var f = 0 < n.Dot(b.GetDirectionVector(), k.GetNormalVector());
    b.SetNextEdge(k, a, h, f);
    k.SetPrevEdge(b, a, h, f);
    return g;
  };
  d.prototype.CreateFixture = function (b) {
    if (!0 == this.m_world.IsLocked()) return null;
    var k = new G();
    k.Create(this, this.m_xf, b);
    this.m_flags & d.e_activeFlag &&
      k.CreateProxy(this.m_world.m_contactManager.m_broadPhase, this.m_xf);
    k.m_next = this.m_fixtureList;
    this.m_fixtureList = k;
    ++this.m_fixtureCount;
    k.m_body = this;
    0 < k.m_density && this.ResetMassData();
    this.m_world.m_flags |= h.e_newFixture;
    return k;
  };
  d.prototype.CreateFixture2 = function (b, k) {
    void 0 === k && (k = 0);
    var a = new N();
    a.shape = b;
    a.density = k;
    return this.CreateFixture(a);
  };
  d.prototype.DestroyFixture = function (b) {
    if (!0 != this.m_world.IsLocked()) {
      for (var k = this.m_fixtureList, a = null; null != k; ) {
        if (k == b) {
          a ? (a.m_next = b.m_next) : (this.m_fixtureList = b.m_next);
          break;
        }
        a = k;
        k = k.m_next;
      }
      for (k = this.m_contactList; k; ) {
        var a = k.contact,
          k = k.next,
          g = a.GetFixtureA(),
          h = a.GetFixtureB();
        (b == g || b == h) && this.m_world.m_contactManager.Destroy(a);
      }
      this.m_flags & d.e_activeFlag &&
        b.DestroyProxy(this.m_world.m_contactManager.m_broadPhase);
      b.Destroy();
      b.m_body = null;
      b.m_next = null;
      --this.m_fixtureCount;
      this.ResetMassData();
    }
  };
  d.prototype.SetPositionAndAngle = function (b, k) {
    void 0 === k && (k = 0);
    var a;
    if (!0 != this.m_world.IsLocked()) {
      this.m_xf.R.Set(k);
      this.m_xf.position.SetV(b);
      a = this.m_xf.R;
      var g = this.m_sweep.localCenter;
      this.m_sweep.c.x = a.col1.x * g.x + a.col2.x * g.y;
      this.m_sweep.c.y = a.col1.y * g.x + a.col2.y * g.y;
      this.m_sweep.c.x += this.m_xf.position.x;
      this.m_sweep.c.y += this.m_xf.position.y;
      this.m_sweep.c0.SetV(this.m_sweep.c);
      this.m_sweep.a0 = this.m_sweep.a = k;
      g = this.m_world.m_contactManager.m_broadPhase;
      for (a = this.m_fixtureList; a; a = a.m_next)
        a.Synchronize(g, this.m_xf, this.m_xf);
      this.m_world.m_contactManager.FindNewContacts();
    }
  };
  d.prototype.SetTransform = function (b) {
    this.SetPositionAndAngle(b.position, b.GetAngle());
  };
  d.prototype.GetTransform = function () {
    return this.m_xf;
  };
  d.prototype.GetPosition = function () {
    return this.m_xf.position;
  };
  d.prototype.SetPosition = function (b) {
    this.SetPositionAndAngle(b, this.GetAngle());
  };
  d.prototype.GetAngle = function () {
    return this.m_sweep.a;
  };
  d.prototype.SetAngle = function (b) {
    void 0 === b && (b = 0);
    this.SetPositionAndAngle(this.GetPosition(), b);
  };
  d.prototype.GetWorldCenter = function () {
    return this.m_sweep.c;
  };
  d.prototype.GetLocalCenter = function () {
    return this.m_sweep.localCenter;
  };
  d.prototype.SetLinearVelocity = function (b) {
    this.m_type != d.b2_staticBody && this.m_linearVelocity.SetV(b);
  };
  d.prototype.GetLinearVelocity = function () {
    return this.m_linearVelocity;
  };
  d.prototype.SetAngularVelocity = function (b) {
    void 0 === b && (b = 0);
    this.m_type != d.b2_staticBody && (this.m_angularVelocity = b);
  };
  d.prototype.GetAngularVelocity = function () {
    return this.m_angularVelocity;
  };
  d.prototype.GetDefinition = function () {
    var b = new z();
    b.type = this.GetType();
    b.allowSleep = (this.m_flags & d.e_allowSleepFlag) == d.e_allowSleepFlag;
    b.angle = this.GetAngle();
    b.angularDamping = this.m_angularDamping;
    b.angularVelocity = this.m_angularVelocity;
    b.fixedRotation =
      (this.m_flags & d.e_fixedRotationFlag) == d.e_fixedRotationFlag;
    b.bullet = (this.m_flags & d.e_bulletFlag) == d.e_bulletFlag;
    b.awake = (this.m_flags & d.e_awakeFlag) == d.e_awakeFlag;
    b.linearDamping = this.m_linearDamping;
    b.linearVelocity.SetV(this.GetLinearVelocity());
    b.position = this.GetPosition();
    b.userData = this.GetUserData();
    return b;
  };
  d.prototype.ApplyForce = function (b, k) {
    this.m_type == d.b2_dynamicBody &&
      (!1 == this.IsAwake() && this.SetAwake(!0),
      (this.m_force.x += b.x),
      (this.m_force.y += b.y),
      (this.m_torque +=
        (k.x - this.m_sweep.c.x) * b.y - (k.y - this.m_sweep.c.y) * b.x));
  };
  d.prototype.ApplyTorque = function (b) {
    void 0 === b && (b = 0);
    this.m_type == d.b2_dynamicBody &&
      (!1 == this.IsAwake() && this.SetAwake(!0), (this.m_torque += b));
  };
  d.prototype.ApplyImpulse = function (b, k) {
    this.m_type == d.b2_dynamicBody &&
      (!1 == this.IsAwake() && this.SetAwake(!0),
      (this.m_linearVelocity.x += this.m_invMass * b.x),
      (this.m_linearVelocity.y += this.m_invMass * b.y),
      (this.m_angularVelocity +=
        this.m_invI *
        ((k.x - this.m_sweep.c.x) * b.y - (k.y - this.m_sweep.c.y) * b.x)));
  };
  d.prototype.Split = function (b) {
    for (
      var k = this.GetLinearVelocity().Copy(),
        a = this.GetAngularVelocity(),
        g = this.GetWorldCenter(),
        h = this.m_world.CreateBody(this.GetDefinition()),
        f,
        d = this.m_fixtureList;
      d;

    )
      if (b(d)) {
        var c = d.m_next;
        f ? (f.m_next = c) : (this.m_fixtureList = c);
        this.m_fixtureCount--;
        d.m_next = h.m_fixtureList;
        h.m_fixtureList = d;
        h.m_fixtureCount++;
        d.m_body = h;
        d = c;
      } else (f = d), (d = d.m_next);
    this.ResetMassData();
    h.ResetMassData();
    f = this.GetWorldCenter();
    b = h.GetWorldCenter();
    f = n.AddVV(k, n.CrossFV(a, n.SubtractVV(f, g)));
    k = n.AddVV(k, n.CrossFV(a, n.SubtractVV(b, g)));
    this.SetLinearVelocity(f);
    h.SetLinearVelocity(k);
    this.SetAngularVelocity(a);
    h.SetAngularVelocity(a);
    this.SynchronizeFixtures();
    h.SynchronizeFixtures();
    return h;
  };
  d.prototype.Merge = function (b) {
    var k;
    for (k = b.m_fixtureList; k; ) {
      var a = k.m_next;
      b.m_fixtureCount--;
      k.m_next = this.m_fixtureList;
      this.m_fixtureList = k;
      this.m_fixtureCount++;
      k.m_body = h;
      k = a;
    }
    g.m_fixtureCount = 0;
    var g = this,
      h = b;
    g.GetWorldCenter();
    h.GetWorldCenter();
    g.GetLinearVelocity().Copy();
    h.GetLinearVelocity().Copy();
    g.GetAngularVelocity();
    h.GetAngularVelocity();
    g.ResetMassData();
    this.SynchronizeFixtures();
  };
  d.prototype.GetMass = function () {
    return this.m_mass;
  };
  d.prototype.GetInertia = function () {
    return this.m_I;
  };
  d.prototype.GetMassData = function (b) {
    b.mass = this.m_mass;
    b.I = this.m_I;
    b.center.SetV(this.m_sweep.localCenter);
  };
  d.prototype.SetMassData = function (b) {
    j.b2Assert(!1 == this.m_world.IsLocked());
    if (!0 != this.m_world.IsLocked() && this.m_type == d.b2_dynamicBody) {
      this.m_invI = this.m_I = this.m_invMass = 0;
      this.m_mass = b.mass;
      0 >= this.m_mass && (this.m_mass = 1);
      this.m_invMass = 1 / this.m_mass;
      0 < b.I &&
        0 == (this.m_flags & d.e_fixedRotationFlag) &&
        ((this.m_I =
          b.I -
          this.m_mass * (b.center.x * b.center.x + b.center.y * b.center.y)),
        (this.m_invI = 1 / this.m_I));
      var a = this.m_sweep.c.Copy();
      this.m_sweep.localCenter.SetV(b.center);
      this.m_sweep.c0.SetV(n.MulX(this.m_xf, this.m_sweep.localCenter));
      this.m_sweep.c.SetV(this.m_sweep.c0);
      this.m_linearVelocity.x +=
        this.m_angularVelocity * -(this.m_sweep.c.y - a.y);
      this.m_linearVelocity.y +=
        this.m_angularVelocity * +(this.m_sweep.c.x - a.x);
    }
  };
  d.prototype.ResetMassData = function () {
    this.m_invI = this.m_I = this.m_invMass = this.m_mass = 0;
    this.m_sweep.localCenter.SetZero();
    if (
      !(this.m_type == d.b2_staticBody || this.m_type == d.b2_kinematicBody)
    ) {
      for (var b = m.Make(0, 0), a = this.m_fixtureList; a; a = a.m_next)
        if (0 != a.m_density) {
          var g = a.GetMassData();
          this.m_mass += g.mass;
          b.x += g.center.x * g.mass;
          b.y += g.center.y * g.mass;
          this.m_I += g.I;
        }
      0 < this.m_mass
        ? ((this.m_invMass = 1 / this.m_mass),
          (b.x *= this.m_invMass),
          (b.y *= this.m_invMass))
        : (this.m_invMass = this.m_mass = 1);
      0 < this.m_I && 0 == (this.m_flags & d.e_fixedRotationFlag)
        ? ((this.m_I -= this.m_mass * (b.x * b.x + b.y * b.y)),
          (this.m_I *= this.m_inertiaScale),
          j.b2Assert(0 < this.m_I),
          (this.m_invI = 1 / this.m_I))
        : (this.m_invI = this.m_I = 0);
      a = this.m_sweep.c.Copy();
      this.m_sweep.localCenter.SetV(b);
      this.m_sweep.c0.SetV(n.MulX(this.m_xf, this.m_sweep.localCenter));
      this.m_sweep.c.SetV(this.m_sweep.c0);
      this.m_linearVelocity.x +=
        this.m_angularVelocity * -(this.m_sweep.c.y - a.y);
      this.m_linearVelocity.y +=
        this.m_angularVelocity * +(this.m_sweep.c.x - a.x);
    }
  };
  d.prototype.GetWorldPoint = function (b) {
    var a = this.m_xf.R,
      b = new m(
        a.col1.x * b.x + a.col2.x * b.y,
        a.col1.y * b.x + a.col2.y * b.y
      );
    b.x += this.m_xf.position.x;
    b.y += this.m_xf.position.y;
    return b;
  };
  d.prototype.GetWorldVector = function (b) {
    return n.MulMV(this.m_xf.R, b);
  };
  d.prototype.GetLocalPoint = function (b) {
    return n.MulXT(this.m_xf, b);
  };
  d.prototype.GetLocalVector = function (b) {
    return n.MulTMV(this.m_xf.R, b);
  };
  d.prototype.GetLinearVelocityFromWorldPoint = function (b) {
    return new m(
      this.m_linearVelocity.x -
        this.m_angularVelocity * (b.y - this.m_sweep.c.y),
      this.m_linearVelocity.y +
        this.m_angularVelocity * (b.x - this.m_sweep.c.x)
    );
  };
  d.prototype.GetLinearVelocityFromLocalPoint = function (b) {
    var a = this.m_xf.R,
      b = new m(
        a.col1.x * b.x + a.col2.x * b.y,
        a.col1.y * b.x + a.col2.y * b.y
      );
    b.x += this.m_xf.position.x;
    b.y += this.m_xf.position.y;
    return new m(
      this.m_linearVelocity.x -
        this.m_angularVelocity * (b.y - this.m_sweep.c.y),
      this.m_linearVelocity.y +
        this.m_angularVelocity * (b.x - this.m_sweep.c.x)
    );
  };
  d.prototype.GetLinearDamping = function () {
    return this.m_linearDamping;
  };
  d.prototype.SetLinearDamping = function (b) {
    void 0 === b && (b = 0);
    this.m_linearDamping = b;
  };
  d.prototype.GetAngularDamping = function () {
    return this.m_angularDamping;
  };
  d.prototype.SetAngularDamping = function (b) {
    void 0 === b && (b = 0);
    this.m_angularDamping = b;
  };
  d.prototype.SetType = function (b) {
    void 0 === b && (b = 0);
    if (this.m_type != b) {
      this.m_type = b;
      this.ResetMassData();
      this.m_type == d.b2_staticBody &&
        (this.m_linearVelocity.SetZero(), (this.m_angularVelocity = 0));
      this.SetAwake(!0);
      this.m_force.SetZero();
      this.m_torque = 0;
      for (b = this.m_contactList; b; b = b.next) b.contact.FlagForFiltering();
    }
  };
  d.prototype.GetType = function () {
    return this.m_type;
  };
  d.prototype.SetBullet = function (b) {
    this.m_flags = b
      ? this.m_flags | d.e_bulletFlag
      : this.m_flags & ~d.e_bulletFlag;
  };
  d.prototype.IsBullet = function () {
    return (this.m_flags & d.e_bulletFlag) == d.e_bulletFlag;
  };
  d.prototype.SetSleepingAllowed = function (b) {
    b
      ? (this.m_flags |= d.e_allowSleepFlag)
      : ((this.m_flags &= ~d.e_allowSleepFlag), this.SetAwake(!0));
  };
  d.prototype.SetAwake = function (b) {
    b
      ? ((this.m_flags |= d.e_awakeFlag), (this.m_sleepTime = 0))
      : ((this.m_flags &= ~d.e_awakeFlag),
        (this.m_sleepTime = 0),
        this.m_linearVelocity.SetZero(),
        (this.m_angularVelocity = 0),
        this.m_force.SetZero(),
        (this.m_torque = 0));
  };
  d.prototype.IsAwake = function () {
    return (this.m_flags & d.e_awakeFlag) == d.e_awakeFlag;
  };
  d.prototype.SetFixedRotation = function (b) {
    this.m_flags = b
      ? this.m_flags | d.e_fixedRotationFlag
      : this.m_flags & ~d.e_fixedRotationFlag;
    this.ResetMassData();
  };
  d.prototype.IsFixedRotation = function () {
    return (this.m_flags & d.e_fixedRotationFlag) == d.e_fixedRotationFlag;
  };
  d.prototype.SetActive = function (b) {
    if (b != this.IsActive()) {
      var a;
      if (b) {
        this.m_flags |= d.e_activeFlag;
        b = this.m_world.m_contactManager.m_broadPhase;
        for (a = this.m_fixtureList; a; a = a.m_next)
          a.CreateProxy(b, this.m_xf);
      } else {
        this.m_flags &= ~d.e_activeFlag;
        b = this.m_world.m_contactManager.m_broadPhase;
        for (a = this.m_fixtureList; a; a = a.m_next) a.DestroyProxy(b);
        for (b = this.m_contactList; b; )
          (a = b),
            (b = b.next),
            this.m_world.m_contactManager.Destroy(a.contact);
        this.m_contactList = null;
      }
    }
  };
  d.prototype.IsActive = function () {
    return (this.m_flags & d.e_activeFlag) == d.e_activeFlag;
  };
  d.prototype.IsSleepingAllowed = function () {
    return (this.m_flags & d.e_allowSleepFlag) == d.e_allowSleepFlag;
  };
  d.prototype.GetFixtureList = function () {
    return this.m_fixtureList;
  };
  d.prototype.GetJointList = function () {
    return this.m_jointList;
  };
  d.prototype.GetControllerList = function () {
    return this.m_controllerList;
  };
  d.prototype.GetContactList = function () {
    return this.m_contactList;
  };
  d.prototype.GetNext = function () {
    return this.m_next;
  };
  d.prototype.GetUserData = function () {
    return this.m_userData;
  };
  d.prototype.SetUserData = function (b) {
    this.m_userData = b;
  };
  d.prototype.GetWorld = function () {
    return this.m_world;
  };
  d.prototype.b2Body = function (b, a) {
    this.m_flags = 0;
    b.bullet && (this.m_flags |= d.e_bulletFlag);
    b.fixedRotation && (this.m_flags |= d.e_fixedRotationFlag);
    b.allowSleep && (this.m_flags |= d.e_allowSleepFlag);
    b.awake && (this.m_flags |= d.e_awakeFlag);
    b.active && (this.m_flags |= d.e_activeFlag);
    this.m_world = a;
    this.m_xf.position.SetV(b.position);
    this.m_xf.R.Set(b.angle);
    this.m_sweep.localCenter.SetZero();
    this.m_sweep.t0 = 1;
    this.m_sweep.a0 = this.m_sweep.a = b.angle;
    var g = this.m_xf.R,
      h = this.m_sweep.localCenter;
    this.m_sweep.c.x = g.col1.x * h.x + g.col2.x * h.y;
    this.m_sweep.c.y = g.col1.y * h.x + g.col2.y * h.y;
    this.m_sweep.c.x += this.m_xf.position.x;
    this.m_sweep.c.y += this.m_xf.position.y;
    this.m_sweep.c0.SetV(this.m_sweep.c);
    this.m_contactList = this.m_controllerList = this.m_jointList = null;
    this.m_controllerCount = 0;
    this.m_next = this.m_prev = null;
    this.m_linearVelocity.SetV(b.linearVelocity);
    this.m_angularVelocity = b.angularVelocity;
    this.m_linearDamping = b.linearDamping;
    this.m_angularDamping = b.angularDamping;
    this.m_force.Set(0, 0);
    this.m_sleepTime = this.m_torque = 0;
    this.m_type = b.type;
    this.m_invMass =
      this.m_type == d.b2_dynamicBody ? (this.m_mass = 1) : (this.m_mass = 0);
    this.m_invI = this.m_I = 0;
    this.m_inertiaScale = b.inertiaScale;
    this.m_userData = b.userData;
    this.m_fixtureList = null;
    this.m_fixtureCount = 0;
  };
  d.prototype.SynchronizeFixtures = function () {
    var b = d.s_xf1;
    b.R.Set(this.m_sweep.a0);
    var a = b.R,
      g = this.m_sweep.localCenter;
    b.position.x = this.m_sweep.c0.x - (a.col1.x * g.x + a.col2.x * g.y);
    b.position.y = this.m_sweep.c0.y - (a.col1.y * g.x + a.col2.y * g.y);
    g = this.m_world.m_contactManager.m_broadPhase;
    for (a = this.m_fixtureList; a; a = a.m_next)
      a.Synchronize(g, b, this.m_xf);
  };
  d.prototype.SynchronizeTransform = function () {
    this.m_xf.R.Set(this.m_sweep.a);
    var b = this.m_xf.R,
      a = this.m_sweep.localCenter;
    this.m_xf.position.x = this.m_sweep.c.x - (b.col1.x * a.x + b.col2.x * a.y);
    this.m_xf.position.y = this.m_sweep.c.y - (b.col1.y * a.x + b.col2.y * a.y);
  };
  d.prototype.ShouldCollide = function (b) {
    if (this.m_type != d.b2_dynamicBody && b.m_type != d.b2_dynamicBody)
      return !1;
    for (var a = this.m_jointList; a; a = a.next)
      if (a.other == b && !1 == a.joint.m_collideConnected) return !1;
    return !0;
  };
  d.prototype.Advance = function (b) {
    void 0 === b && (b = 0);
    this.m_sweep.Advance(b);
    this.m_sweep.c.SetV(this.m_sweep.c0);
    this.m_sweep.a = this.m_sweep.a0;
    this.SynchronizeTransform();
  };
  Box2D.postDefs.push(function () {
    Box2D.Dynamics.b2Body.s_xf1 = new p();
    Box2D.Dynamics.b2Body.e_islandFlag = 1;
    Box2D.Dynamics.b2Body.e_awakeFlag = 2;
    Box2D.Dynamics.b2Body.e_allowSleepFlag = 4;
    Box2D.Dynamics.b2Body.e_bulletFlag = 8;
    Box2D.Dynamics.b2Body.e_fixedRotationFlag = 16;
    Box2D.Dynamics.b2Body.e_activeFlag = 32;
    Box2D.Dynamics.b2Body.b2_staticBody = 0;
    Box2D.Dynamics.b2Body.b2_kinematicBody = 1;
    Box2D.Dynamics.b2Body.b2_dynamicBody = 2;
  });
  z.b2BodyDef = function () {
    this.position = new m();
    this.linearVelocity = new m();
  };
  z.prototype.b2BodyDef = function () {
    this.userData = null;
    this.position.Set(0, 0);
    this.angle = 0;
    this.linearVelocity.Set(0, 0);
    this.angularDamping = this.linearDamping = this.angularVelocity = 0;
    this.awake = this.allowSleep = !0;
    this.bullet = this.fixedRotation = !1;
    this.type = d.b2_staticBody;
    this.active = !0;
    this.inertiaScale = 1;
  };
  l.b2ContactFilter = function () {};
  l.prototype.ShouldCollide = function (b, a) {
    var g = b.GetFilterData(),
      h = a.GetFilterData();
    return g.groupIndex == h.groupIndex && 0 != g.groupIndex
      ? 0 < g.groupIndex
      : 0 != (g.maskBits & h.categoryBits) &&
          0 != (g.categoryBits & h.maskBits);
  };
  l.prototype.RayCollide = function (b, a) {
    return !b ? !0 : this.ShouldCollide(b instanceof G ? b : null, a);
  };
  Box2D.postDefs.push(function () {
    Box2D.Dynamics.b2ContactFilter.b2_defaultFilter = new l();
  });
  C.b2ContactImpulse = function () {
    this.normalImpulses = new Vector_a2j_Number(j.b2_maxManifoldPoints);
    this.tangentImpulses = new Vector_a2j_Number(j.b2_maxManifoldPoints);
  };
  F.b2ContactListener = function () {};
  F.prototype.BeginContact = function () {};
  F.prototype.EndContact = function () {};
  F.prototype.PreSolve = function () {};
  F.prototype.PostSolve = function () {};
  Box2D.postDefs.push(function () {
    Box2D.Dynamics.b2ContactListener.b2_defaultListener = new F();
  });
  H.b2ContactManager = function () {};
  H.prototype.b2ContactManager = function () {
    this.m_world = null;
    this.m_contactCount = 0;
    this.m_contactFilter = l.b2_defaultFilter;
    this.m_contactListener = F.b2_defaultListener;
    this.m_contactFactory = new g(this.m_allocator);
    this.m_broadPhase = new q();
  };
  H.prototype.AddPair = function (b, a) {
    var g = b instanceof G ? b : null,
      h = a instanceof G ? a : null,
      f = g.GetBody(),
      d = h.GetBody();
    if (f != d) {
      for (var c = d.GetContactList(); c; ) {
        if (c.other == f) {
          var s = c.contact.GetFixtureA(),
            u = c.contact.GetFixtureB();
          if ((s == g && u == h) || (s == h && u == g)) return;
        }
        c = c.next;
      }
      !1 != d.ShouldCollide(f) &&
        !1 != this.m_contactFilter.ShouldCollide(g, h) &&
        ((c = this.m_contactFactory.Create(g, h)),
        (g = c.GetFixtureA()),
        (h = c.GetFixtureB()),
        (f = g.m_body),
        (d = h.m_body),
        (c.m_prev = null),
        (c.m_next = this.m_world.m_contactList),
        null != this.m_world.m_contactList &&
          (this.m_world.m_contactList.m_prev = c),
        (this.m_world.m_contactList = c),
        (c.m_nodeA.contact = c),
        (c.m_nodeA.other = d),
        (c.m_nodeA.prev = null),
        (c.m_nodeA.next = f.m_contactList),
        null != f.m_contactList && (f.m_contactList.prev = c.m_nodeA),
        (f.m_contactList = c.m_nodeA),
        (c.m_nodeB.contact = c),
        (c.m_nodeB.other = f),
        (c.m_nodeB.prev = null),
        (c.m_nodeB.next = d.m_contactList),
        null != d.m_contactList && (d.m_contactList.prev = c.m_nodeB),
        (d.m_contactList = c.m_nodeB),
        ++this.m_world.m_contactCount);
    }
  };
  H.prototype.FindNewContacts = function () {
    this.m_broadPhase.UpdatePairs(Box2D.generateCallback(this, this.AddPair));
  };
  H.prototype.Destroy = function (b) {
    var a = b.GetFixtureA(),
      g = b.GetFixtureB(),
      a = a.GetBody(),
      g = g.GetBody();
    b.IsTouching() && this.m_contactListener.EndContact(b);
    b.m_prev && (b.m_prev.m_next = b.m_next);
    b.m_next && (b.m_next.m_prev = b.m_prev);
    b == this.m_world.m_contactList && (this.m_world.m_contactList = b.m_next);
    b.m_nodeA.prev && (b.m_nodeA.prev.next = b.m_nodeA.next);
    b.m_nodeA.next && (b.m_nodeA.next.prev = b.m_nodeA.prev);
    b.m_nodeA == a.m_contactList && (a.m_contactList = b.m_nodeA.next);
    b.m_nodeB.prev && (b.m_nodeB.prev.next = b.m_nodeB.next);
    b.m_nodeB.next && (b.m_nodeB.next.prev = b.m_nodeB.prev);
    b.m_nodeB == g.m_contactList && (g.m_contactList = b.m_nodeB.next);
    this.m_contactFactory.Destroy(b);
    --this.m_contactCount;
  };
  H.prototype.Collide = function () {
    for (var b = this.m_world.m_contactList; b; ) {
      var a = b.GetFixtureA(),
        g = b.GetFixtureB(),
        h = a.GetBody(),
        f = g.GetBody();
      if (!1 == h.IsAwake() && !1 == f.IsAwake()) b = b.GetNext();
      else {
        if (b.m_flags & s.e_filterFlag) {
          if (!1 == f.ShouldCollide(h)) {
            a = b;
            b = a.GetNext();
            this.Destroy(a);
            continue;
          }
          if (!1 == this.m_contactFilter.ShouldCollide(a, g)) {
            a = b;
            b = a.GetNext();
            this.Destroy(a);
            continue;
          }
          b.m_flags &= ~s.e_filterFlag;
        }
        !1 == this.m_broadPhase.TestOverlap(a.m_proxy, g.m_proxy)
          ? ((a = b), (b = a.GetNext()), this.Destroy(a))
          : (b.Update(this.m_contactListener), (b = b.GetNext()));
      }
    }
  };
  Box2D.postDefs.push(function () {
    Box2D.Dynamics.b2ContactManager.s_evalCP = new c();
  });
  B.b2DebugDraw = function () {};
  B.prototype.b2DebugDraw = function () {};
  B.prototype.SetFlags = function () {};
  B.prototype.GetFlags = function () {};
  B.prototype.AppendFlags = function () {};
  B.prototype.ClearFlags = function () {};
  B.prototype.SetSprite = function () {};
  B.prototype.GetSprite = function () {};
  B.prototype.SetDrawScale = function () {};
  B.prototype.GetDrawScale = function () {};
  B.prototype.SetLineThickness = function () {};
  B.prototype.GetLineThickness = function () {};
  B.prototype.SetAlpha = function () {};
  B.prototype.GetAlpha = function () {};
  B.prototype.SetFillAlpha = function () {};
  B.prototype.GetFillAlpha = function () {};
  B.prototype.SetXFormScale = function () {};
  B.prototype.GetXFormScale = function () {};
  B.prototype.DrawPolygon = function () {};
  B.prototype.DrawSolidPolygon = function () {};
  B.prototype.DrawCircle = function () {};
  B.prototype.DrawSolidCircle = function () {};
  B.prototype.DrawSegment = function () {};
  B.prototype.DrawTransform = function () {};
  Box2D.postDefs.push(function () {
    Box2D.Dynamics.b2DebugDraw.e_shapeBit = 1;
    Box2D.Dynamics.b2DebugDraw.e_jointBit = 2;
    Box2D.Dynamics.b2DebugDraw.e_aabbBit = 4;
    Box2D.Dynamics.b2DebugDraw.e_pairBit = 8;
    Box2D.Dynamics.b2DebugDraw.e_centerOfMassBit = 16;
    Box2D.Dynamics.b2DebugDraw.e_controllerBit = 32;
  });
  M.b2DestructionListener = function () {};
  M.prototype.SayGoodbyeJoint = function () {};
  M.prototype.SayGoodbyeFixture = function () {};
  E.b2FilterData = function () {
    this.categoryBits = 1;
    this.maskBits = 65535;
    this.groupIndex = 0;
  };
  E.prototype.Copy = function () {
    var b = new E();
    b.categoryBits = this.categoryBits;
    b.maskBits = this.maskBits;
    b.groupIndex = this.groupIndex;
    return b;
  };
  G.b2Fixture = function () {
    this.m_filter = new E();
  };
  G.prototype.GetType = function () {
    return this.m_shape.GetType();
  };
  G.prototype.GetShape = function () {
    return this.m_shape;
  };
  G.prototype.SetSensor = function (b) {
    if (this.m_isSensor != b && ((this.m_isSensor = b), null != this.m_body))
      for (b = this.m_body.GetContactList(); b; ) {
        var a = b.contact,
          g = a.GetFixtureA(),
          h = a.GetFixtureB();
        if (g == this || h == this) a.SetSensor(g.IsSensor() || h.IsSensor());
        b = b.next;
      }
  };
  G.prototype.IsSensor = function () {
    return this.m_isSensor;
  };
  G.prototype.SetFilterData = function (b) {
    this.m_filter = b.Copy();
    if (!this.m_body)
      for (b = this.m_body.GetContactList(); b; ) {
        var a = b.contact,
          g = a.GetFixtureA(),
          h = a.GetFixtureB();
        (g == this || h == this) && a.FlagForFiltering();
        b = b.next;
      }
  };
  G.prototype.GetFilterData = function () {
    return this.m_filter.Copy();
  };
  G.prototype.GetBody = function () {
    return this.m_body;
  };
  G.prototype.GetNext = function () {
    return this.m_next;
  };
  G.prototype.GetUserData = function () {
    return this.m_userData;
  };
  G.prototype.SetUserData = function (b) {
    this.m_userData = b;
  };
  G.prototype.TestPoint = function (b) {
    return this.m_shape.TestPoint(this.m_body.GetTransform(), b);
  };
  G.prototype.RayCast = function (b, a) {
    return this.m_shape.RayCast(b, a, this.m_body.GetTransform());
  };
  G.prototype.GetMassData = function (b) {
    void 0 === b && (b = null);
    null == b && (b = new t());
    this.m_shape.ComputeMass(b, this.m_density);
    return b;
  };
  G.prototype.SetDensity = function (b) {
    void 0 === b && (b = 0);
    this.m_density = b;
  };
  G.prototype.GetDensity = function () {
    return this.m_density;
  };
  G.prototype.GetFriction = function () {
    return this.m_friction;
  };
  G.prototype.SetFriction = function (b) {
    void 0 === b && (b = 0);
    this.m_friction = b;
  };
  G.prototype.GetRestitution = function () {
    return this.m_restitution;
  };
  G.prototype.SetRestitution = function (b) {
    void 0 === b && (b = 0);
    this.m_restitution = b;
  };
  G.prototype.GetAABB = function () {
    return this.m_aabb;
  };
  G.prototype.b2Fixture = function () {
    this.m_aabb = new x();
    this.m_shape = this.m_next = this.m_body = this.m_userData = null;
    this.m_restitution = this.m_friction = this.m_density = 0;
  };
  G.prototype.Create = function (b, a, g) {
    this.m_userData = g.userData;
    this.m_friction = g.friction;
    this.m_restitution = g.restitution;
    this.m_body = b;
    this.m_next = null;
    this.m_filter = g.filter.Copy();
    this.m_isSensor = g.isSensor;
    this.m_shape = g.shape.Copy();
    this.m_density = g.density;
  };
  G.prototype.Destroy = function () {
    this.m_shape = null;
  };
  G.prototype.CreateProxy = function (b, a) {
    this.m_shape.ComputeAABB(this.m_aabb, a);
    this.m_proxy = b.CreateProxy(this.m_aabb, this);
  };
  G.prototype.DestroyProxy = function (b) {
    null != this.m_proxy &&
      (b.DestroyProxy(this.m_proxy), (this.m_proxy = null));
  };
  G.prototype.Synchronize = function (b, a, g) {
    if (this.m_proxy) {
      var h = new x(),
        f = new x();
      this.m_shape.ComputeAABB(h, a);
      this.m_shape.ComputeAABB(f, g);
      this.m_aabb.Combine(h, f);
      a = n.SubtractVV(g.position, a.position);
      b.MoveProxy(this.m_proxy, this.m_aabb, a);
    }
  };
  N.b2FixtureDef = function () {
    this.filter = new E();
  };
  N.prototype.b2FixtureDef = function () {
    this.userData = this.shape = null;
    this.friction = 0.2;
    this.density = this.restitution = 0;
    this.filter.categoryBits = 1;
    this.filter.maskBits = 65535;
    this.filter.groupIndex = 0;
    this.isSensor = !1;
  };
  I.b2Island = function () {};
  I.prototype.b2Island = function () {
    this.m_bodies = new Vector();
    this.m_contacts = new Vector();
    this.m_joints = new Vector();
  };
  I.prototype.Initialize = function (b, a, g, h, f, d) {
    void 0 === b && (b = 0);
    void 0 === a && (a = 0);
    void 0 === g && (g = 0);
    var c = 0;
    this.m_bodyCapacity = b;
    this.m_contactCapacity = a;
    this.m_jointCapacity = g;
    this.m_jointCount = this.m_contactCount = this.m_bodyCount = 0;
    this.m_allocator = h;
    this.m_listener = f;
    this.m_contactSolver = d;
    for (c = this.m_bodies.length; c < b; c++) this.m_bodies[c] = null;
    for (c = this.m_contacts.length; c < a; c++) this.m_contacts[c] = null;
    for (c = this.m_joints.length; c < g; c++) this.m_joints[c] = null;
  };
  I.prototype.Clear = function () {
    this.m_jointCount = this.m_contactCount = this.m_bodyCount = 0;
  };
  I.prototype.Solve = function (b, a, g) {
    for (var h = 0, f = 0, c, h = 0; h < this.m_bodyCount; ++h)
      (f = this.m_bodies[h]),
        f.GetType() == d.b2_dynamicBody &&
          ((f.m_linearVelocity.x += b.dt * (a.x + f.m_invMass * f.m_force.x)),
          (f.m_linearVelocity.y += b.dt * (a.y + f.m_invMass * f.m_force.y)),
          (f.m_angularVelocity += b.dt * f.m_invI * f.m_torque),
          f.m_linearVelocity.Multiply(
            n.Clamp(1 - b.dt * f.m_linearDamping, 0, 1)
          ),
          (f.m_angularVelocity *= n.Clamp(
            1 - b.dt * f.m_angularDamping,
            0,
            1
          )));
    this.m_contactSolver.Initialize(
      b,
      this.m_contacts,
      this.m_contactCount,
      this.m_allocator
    );
    a = this.m_contactSolver;
    a.InitVelocityConstraints(b);
    for (h = 0; h < this.m_jointCount; ++h)
      (c = this.m_joints[h]), c.InitVelocityConstraints(b);
    for (h = 0; h < b.velocityIterations; ++h) {
      for (f = 0; f < this.m_jointCount; ++f)
        (c = this.m_joints[f]), c.SolveVelocityConstraints(b);
      a.SolveVelocityConstraints();
    }
    for (h = 0; h < this.m_jointCount; ++h)
      (c = this.m_joints[h]), c.FinalizeVelocityConstraints();
    a.FinalizeVelocityConstraints();
    for (h = 0; h < this.m_bodyCount; ++h)
      if (((f = this.m_bodies[h]), f.GetType() != d.b2_staticBody)) {
        var s = b.dt * f.m_linearVelocity.x,
          u = b.dt * f.m_linearVelocity.y;
        s * s + u * u > j.b2_maxTranslationSquared &&
          (f.m_linearVelocity.Normalize(),
          (f.m_linearVelocity.x *= j.b2_maxTranslation * b.inv_dt),
          (f.m_linearVelocity.y *= j.b2_maxTranslation * b.inv_dt));
        s = b.dt * f.m_angularVelocity;
        s * s > j.b2_maxRotationSquared &&
          (f.m_angularVelocity =
            0 > f.m_angularVelocity
              ? -j.b2_maxRotation * b.inv_dt
              : j.b2_maxRotation * b.inv_dt);
        f.m_sweep.c0.SetV(f.m_sweep.c);
        f.m_sweep.a0 = f.m_sweep.a;
        f.m_sweep.c.x += b.dt * f.m_linearVelocity.x;
        f.m_sweep.c.y += b.dt * f.m_linearVelocity.y;
        f.m_sweep.a += b.dt * f.m_angularVelocity;
        f.SynchronizeTransform();
      }
    for (h = 0; h < b.positionIterations; ++h) {
      s = a.SolvePositionConstraints(j.b2_contactBaumgarte);
      u = !0;
      for (f = 0; f < this.m_jointCount; ++f)
        (c = this.m_joints[f]),
          (c = c.SolvePositionConstraints(j.b2_contactBaumgarte)),
          (u = u && c);
      if (s && u) break;
    }
    this.Report(a.m_constraints);
    if (g) {
      g = Number.MAX_VALUE;
      a = j.b2_linearSleepTolerance * j.b2_linearSleepTolerance;
      s = j.b2_angularSleepTolerance * j.b2_angularSleepTolerance;
      for (h = 0; h < this.m_bodyCount; ++h)
        (f = this.m_bodies[h]),
          f.GetType() != d.b2_staticBody &&
            (0 == (f.m_flags & d.e_allowSleepFlag) && (g = f.m_sleepTime = 0),
            0 == (f.m_flags & d.e_allowSleepFlag) ||
            f.m_angularVelocity * f.m_angularVelocity > s ||
            n.Dot(f.m_linearVelocity, f.m_linearVelocity) > a
              ? (g = f.m_sleepTime = 0)
              : ((f.m_sleepTime += b.dt), (g = n.Min(g, f.m_sleepTime))));
      if (g >= j.b2_timeToSleep)
        for (h = 0; h < this.m_bodyCount; ++h)
          (f = this.m_bodies[h]), f.SetAwake(!1);
    }
  };
  I.prototype.SolveTOI = function (b) {
    var a = 0,
      g = 0;
    this.m_contactSolver.Initialize(
      b,
      this.m_contacts,
      this.m_contactCount,
      this.m_allocator
    );
    for (var h = this.m_contactSolver, a = 0; a < this.m_jointCount; ++a)
      this.m_joints[a].InitVelocityConstraints(b);
    for (a = 0; a < b.velocityIterations; ++a) {
      h.SolveVelocityConstraints();
      for (g = 0; g < this.m_jointCount; ++g)
        this.m_joints[g].SolveVelocityConstraints(b);
    }
    for (a = 0; a < this.m_bodyCount; ++a)
      if (((g = this.m_bodies[a]), g.GetType() != d.b2_staticBody)) {
        var f = b.dt * g.m_linearVelocity.x,
          c = b.dt * g.m_linearVelocity.y;
        f * f + c * c > j.b2_maxTranslationSquared &&
          (g.m_linearVelocity.Normalize(),
          (g.m_linearVelocity.x *= j.b2_maxTranslation * b.inv_dt),
          (g.m_linearVelocity.y *= j.b2_maxTranslation * b.inv_dt));
        f = b.dt * g.m_angularVelocity;
        f * f > j.b2_maxRotationSquared &&
          (g.m_angularVelocity =
            0 > g.m_angularVelocity
              ? -j.b2_maxRotation * b.inv_dt
              : j.b2_maxRotation * b.inv_dt);
        g.m_sweep.c0.SetV(g.m_sweep.c);
        g.m_sweep.a0 = g.m_sweep.a;
        g.m_sweep.c.x += b.dt * g.m_linearVelocity.x;
        g.m_sweep.c.y += b.dt * g.m_linearVelocity.y;
        g.m_sweep.a += b.dt * g.m_angularVelocity;
        g.SynchronizeTransform();
      }
    for (a = 0; a < b.positionIterations; ++a) {
      f = h.SolvePositionConstraints(0.75);
      c = !0;
      for (g = 0; g < this.m_jointCount; ++g)
        var s = this.m_joints[g].SolvePositionConstraints(
            j.b2_contactBaumgarte
          ),
          c = c && s;
      if (f && c) break;
    }
    this.Report(h.m_constraints);
  };
  I.prototype.Report = function (b) {
    if (null != this.m_listener)
      for (var a = 0; a < this.m_contactCount; ++a) {
        for (var g = this.m_contacts[a], f = b[a], h = 0; h < f.pointCount; ++h)
          (I.s_impulse.normalImpulses[h] = f.points[h].normalImpulse),
            (I.s_impulse.tangentImpulses[h] = f.points[h].tangentImpulse);
        this.m_listener.PostSolve(g, I.s_impulse);
      }
  };
  I.prototype.AddBody = function (b) {
    b.m_islandIndex = this.m_bodyCount;
    this.m_bodies[this.m_bodyCount++] = b;
  };
  I.prototype.AddContact = function (b) {
    this.m_contacts[this.m_contactCount++] = b;
  };
  I.prototype.AddJoint = function (b) {
    this.m_joints[this.m_jointCount++] = b;
  };
  Box2D.postDefs.push(function () {
    Box2D.Dynamics.b2Island.s_impulse = new C();
  });
  a.b2TimeStep = function () {};
  a.prototype.Set = function (b) {
    this.dt = b.dt;
    this.inv_dt = b.inv_dt;
    this.positionIterations = b.positionIterations;
    this.velocityIterations = b.velocityIterations;
    this.warmStarting = b.warmStarting;
  };
  h.b2World = function () {
    this.s_stack = new Vector();
    this.m_contactManager = new H();
    this.m_contactSolver = new u();
    this.m_island = new I();
  };
  h.prototype.b2World = function (b, a) {
    this.m_controllerList =
      this.m_jointList =
      this.m_contactList =
      this.m_bodyList =
      this.m_debugDraw =
      this.m_destructionListener =
        null;
    this.m_controllerCount =
      this.m_jointCount =
      this.m_contactCount =
      this.m_bodyCount =
        0;
    h.m_warmStarting = !0;
    h.m_continuousPhysics = !0;
    this.m_allowSleep = a;
    b.y = b.y;
    this.m_gravity = b;
    this.m_inv_dt0 = 0;
    this.m_contactManager.m_world = this;
    var g = new z();
    this.m_groundBody = this.CreateBody(g);
  };
  h.prototype.SetDestructionListener = function (b) {
    this.m_destructionListener = b;
  };
  h.prototype.SetContactFilter = function (b) {
    this.m_contactManager.m_contactFilter = b;
  };
  h.prototype.SetContactListener = function (b) {
    this.m_contactManager.m_contactListener = b;
  };
  h.prototype.SetDebugDraw = function (b) {
    this.m_debugDraw = b;
  };
  h.prototype.SetBroadPhase = function (b) {
    var a = this.m_contactManager.m_broadPhase;
    this.m_contactManager.m_broadPhase = b;
    for (var g = this.m_bodyList; g; g = g.m_next)
      for (var h = g.m_fixtureList; h; h = h.m_next)
        h.m_proxy = b.CreateProxy(a.GetFatAABB(h.m_proxy), h);
  };
  h.prototype.Validate = function () {
    this.m_contactManager.m_broadPhase.Validate();
  };
  h.prototype.GetProxyCount = function () {
    return this.m_contactManager.m_broadPhase.GetProxyCount();
  };
  h.prototype.CreateBody = function (b) {
    if (!0 == this.IsLocked()) return null;
    b = new d(b, this);
    b.m_prev = null;
    if ((b.m_next = this.m_bodyList)) this.m_bodyList.m_prev = b;
    this.m_bodyList = b;
    ++this.m_bodyCount;
    return b;
  };
  h.prototype.DestroyBody = function (b) {
    if (!0 != this.IsLocked()) {
      for (var a = b.m_jointList; a; ) {
        var g = a,
          a = a.next;
        this.m_destructionListener &&
          this.m_destructionListener.SayGoodbyeJoint(g.joint);
        this.DestroyJoint(g.joint);
      }
      for (a = b.m_controllerList; a; )
        (g = a), (a = a.nextController), g.controller.RemoveBody(b);
      for (a = b.m_contactList; a; )
        (g = a), (a = a.next), this.m_contactManager.Destroy(g.contact);
      b.m_contactList = null;
      for (a = b.m_fixtureList; a; )
        (g = a),
          (a = a.m_next),
          this.m_destructionListener &&
            this.m_destructionListener.SayGoodbyeFixture(g),
          g.DestroyProxy(this.m_contactManager.m_broadPhase),
          g.Destroy();
      b.m_fixtureList = null;
      b.m_fixtureCount = 0;
      b.m_prev && (b.m_prev.m_next = b.m_next);
      b.m_next && (b.m_next.m_prev = b.m_prev);
      b == this.m_bodyList && (this.m_bodyList = b.m_next);
      --this.m_bodyCount;
    }
  };
  h.prototype.CreateJoint = function (b) {
    var a = y.Create(b, null);
    a.m_prev = null;
    if ((a.m_next = this.m_jointList)) this.m_jointList.m_prev = a;
    this.m_jointList = a;
    ++this.m_jointCount;
    a.m_edgeA.joint = a;
    a.m_edgeA.other = a.m_bodyB;
    a.m_edgeA.prev = null;
    if ((a.m_edgeA.next = a.m_bodyA.m_jointList))
      a.m_bodyA.m_jointList.prev = a.m_edgeA;
    a.m_bodyA.m_jointList = a.m_edgeA;
    a.m_edgeB.joint = a;
    a.m_edgeB.other = a.m_bodyA;
    a.m_edgeB.prev = null;
    if ((a.m_edgeB.next = a.m_bodyB.m_jointList))
      a.m_bodyB.m_jointList.prev = a.m_edgeB;
    a.m_bodyB.m_jointList = a.m_edgeB;
    var g = b.bodyA,
      h = b.bodyB;
    if (!1 == b.collideConnected)
      for (b = h.GetContactList(); b; )
        b.other == g && b.contact.FlagForFiltering(), (b = b.next);
    return a;
  };
  h.prototype.DestroyJoint = function (b) {
    var a = b.m_collideConnected;
    b.m_prev && (b.m_prev.m_next = b.m_next);
    b.m_next && (b.m_next.m_prev = b.m_prev);
    b == this.m_jointList && (this.m_jointList = b.m_next);
    var g = b.m_bodyA,
      h = b.m_bodyB;
    g.SetAwake(!0);
    h.SetAwake(!0);
    b.m_edgeA.prev && (b.m_edgeA.prev.next = b.m_edgeA.next);
    b.m_edgeA.next && (b.m_edgeA.next.prev = b.m_edgeA.prev);
    b.m_edgeA == g.m_jointList && (g.m_jointList = b.m_edgeA.next);
    b.m_edgeA.prev = null;
    b.m_edgeA.next = null;
    b.m_edgeB.prev && (b.m_edgeB.prev.next = b.m_edgeB.next);
    b.m_edgeB.next && (b.m_edgeB.next.prev = b.m_edgeB.prev);
    b.m_edgeB == h.m_jointList && (h.m_jointList = b.m_edgeB.next);
    b.m_edgeB.prev = null;
    b.m_edgeB.next = null;
    y.Destroy(b, null);
    --this.m_jointCount;
    if (!1 == a)
      for (b = h.GetContactList(); b; )
        b.other == g && b.contact.FlagForFiltering(), (b = b.next);
  };
  h.prototype.AddController = function (b) {
    b.m_next = this.m_controllerList;
    b.m_prev = null;
    this.m_controllerList = b;
    b.m_world = this;
    this.m_controllerCount++;
    return b;
  };
  h.prototype.RemoveController = function (b) {
    b.m_prev && (b.m_prev.m_next = b.m_next);
    b.m_next && (b.m_next.m_prev = b.m_prev);
    this.m_controllerList == b && (this.m_controllerList = b.m_next);
    this.m_controllerCount--;
  };
  h.prototype.CreateController = function (b) {
    if (b.m_world != this)
      throw Error("Controller can only be a member of one world");
    b.m_next = this.m_controllerList;
    b.m_prev = null;
    this.m_controllerList && (this.m_controllerList.m_prev = b);
    this.m_controllerList = b;
    ++this.m_controllerCount;
    b.m_world = this;
    return b;
  };
  h.prototype.DestroyController = function (b) {
    b.Clear();
    b.m_next && (b.m_next.m_prev = b.m_prev);
    b.m_prev && (b.m_prev.m_next = b.m_next);
    b == this.m_controllerList && (this.m_controllerList = b.m_next);
    --this.m_controllerCount;
  };
  h.prototype.SetWarmStarting = function (b) {
    h.m_warmStarting = b;
  };
  h.prototype.SetContinuousPhysics = function (b) {
    h.m_continuousPhysics = b;
  };
  h.prototype.GetBodyCount = function () {
    return this.m_bodyCount;
  };
  h.prototype.GetJointCount = function () {
    return this.m_jointCount;
  };
  h.prototype.GetContactCount = function () {
    return this.m_contactCount;
  };
  h.prototype.SetGravity = function (b) {
    this.m_gravity = b;
  };
  h.prototype.GetGravity = function () {
    return this.m_gravity;
  };
  h.prototype.GetGroundBody = function () {
    return this.m_groundBody;
  };
  h.prototype.Step = function (b, a, g) {
    void 0 === b && (b = 0);
    void 0 === a && (a = 0);
    void 0 === g && (g = 0);
    this.m_flags & h.e_newFixture &&
      (this.m_contactManager.FindNewContacts(),
      (this.m_flags &= ~h.e_newFixture));
    this.m_flags |= h.e_locked;
    var f = h.s_timestep2;
    f.dt = b;
    f.velocityIterations = a;
    f.positionIterations = g;
    f.inv_dt = 0 < b ? 1 / b : 0;
    f.dtRatio = this.m_inv_dt0 * b;
    f.warmStarting = h.m_warmStarting;
    this.m_contactManager.Collide();
    0 < f.dt && this.Solve(f);
    h.m_continuousPhysics && 0 < f.dt && this.SolveTOI(f);
    0 < f.dt && (this.m_inv_dt0 = f.inv_dt);
    this.m_flags &= ~h.e_locked;
  };
  h.prototype.ClearForces = function () {
    for (var b = this.m_bodyList; b; b = b.m_next)
      b.m_force.SetZero(), (b.m_torque = 0);
  };
  h.prototype.DrawDebugData = function () {
    if (null != this.m_debugDraw) {
      this.m_debugDraw.m_sprite.graphics.clear();
      var b = this.m_debugDraw.GetFlags(),
        a,
        g,
        f;
      new m();
      new m();
      new m();
      var c;
      new x();
      new x();
      c = [new m(), new m(), new m(), new m()];
      var s = new e(0, 0, 0);
      if (b & B.e_shapeBit)
        for (a = this.m_bodyList; a; a = a.m_next) {
          c = a.m_xf;
          for (g = a.GetFixtureList(); g; g = g.m_next)
            (f = g.GetShape()),
              !1 == a.IsActive()
                ? s.Set(0.5, 0.5, 0.3)
                : a.GetType() == d.b2_staticBody
                ? s.Set(0.5, 0.9, 0.5)
                : a.GetType() == d.b2_kinematicBody
                ? s.Set(0.5, 0.5, 0.9)
                : !1 == a.IsAwake()
                ? s.Set(0.6, 0.6, 0.6)
                : s.Set(0.9, 0.7, 0.7),
              this.DrawShape(f, c, s);
        }
      if (b & B.e_jointBit)
        for (a = this.m_jointList; a; a = a.m_next) this.DrawJoint(a);
      if (b & B.e_controllerBit)
        for (a = this.m_controllerList; a; a = a.m_next)
          a.Draw(this.m_debugDraw);
      if (b & B.e_pairBit) {
        s.Set(0.3, 0.9, 0.9);
        for (a = this.m_contactManager.m_contactList; a; a = a.GetNext())
          (f = a.GetFixtureA()),
            (g = a.GetFixtureB()),
            (f = f.GetAABB().GetCenter()),
            (g = g.GetAABB().GetCenter()),
            this.m_debugDraw.DrawSegment(f, g, s);
      }
      if (b & B.e_aabbBit) {
        f = this.m_contactManager.m_broadPhase;
        c = [new m(), new m(), new m(), new m()];
        for (a = this.m_bodyList; a; a = a.GetNext())
          if (!1 != a.IsActive())
            for (g = a.GetFixtureList(); g; g = g.GetNext()) {
              var u = f.GetFatAABB(g.m_proxy);
              c[0].Set(u.lowerBound.x, u.lowerBound.y);
              c[1].Set(u.upperBound.x, u.lowerBound.y);
              c[2].Set(u.upperBound.x, u.upperBound.y);
              c[3].Set(u.lowerBound.x, u.upperBound.y);
              this.m_debugDraw.DrawPolygon(c, 4, s);
            }
      }
      if (b & B.e_centerOfMassBit)
        for (a = this.m_bodyList; a; a = a.m_next)
          (c = h.s_xf),
            (c.R = a.m_xf.R),
            (c.position = a.GetWorldCenter()),
            this.m_debugDraw.DrawTransform(c);
    }
  };
  h.prototype.QueryAABB = function (b, a) {
    var g = this.m_contactManager.m_broadPhase;
    g.Query(function (a) {
      return b(g.GetUserData(a));
    }, a);
  };
  h.prototype.QueryShape = function (b, a, g) {
    void 0 === g && (g = null);
    null == g && ((g = new p()), g.SetIdentity());
    var f = this.m_contactManager.m_broadPhase,
      h = new x();
    a.ComputeAABB(h, g);
    f.Query(function (h) {
      h = f.GetUserData(h) instanceof G ? f.GetUserData(h) : null;
      return L.TestOverlap(a, g, h.GetShape(), h.GetBody().GetTransform())
        ? b(h)
        : !0;
    }, h);
  };
  h.prototype.QueryPoint = function (b, a) {
    var g = this.m_contactManager.m_broadPhase,
      f = new x();
    f.lowerBound.Set(a.x - j.b2_linearSlop, a.y - j.b2_linearSlop);
    f.upperBound.Set(a.x + j.b2_linearSlop, a.y + j.b2_linearSlop);
    g.Query(function (f) {
      f = g.GetUserData(f) instanceof G ? g.GetUserData(f) : null;
      return f.TestPoint(a) ? b(f) : !0;
    }, f);
  };
  h.prototype.RayCast = function (b, a, g) {
    var f = this.m_contactManager.m_broadPhase,
      h = new D(),
      c = new K(a, g);
    f.RayCast(function (c, d) {
      var s = f.GetUserData(d),
        s = s instanceof G ? s : null;
      if (s.RayCast(h, c)) {
        var u = h.fraction,
          e = new m((1 - u) * a.x + u * g.x, (1 - u) * a.y + u * g.y);
        return b(s, e, h.normal, u);
      }
      return c.maxFraction;
    }, c);
  };
  h.prototype.RayCastOne = function (b, a) {
    var g;
    this.RayCast(
      function (b, a, f, h) {
        void 0 === h && (h = 0);
        g = b;
        return h;
      },
      b,
      a
    );
    return g;
  };
  h.prototype.RayCastAll = function (b, a) {
    var g = new Vector();
    this.RayCast(
      function (b) {
        g[g.length] = b;
        return 1;
      },
      b,
      a
    );
    return g;
  };
  h.prototype.GetBodyList = function () {
    return this.m_bodyList;
  };
  h.prototype.GetJointList = function () {
    return this.m_jointList;
  };
  h.prototype.GetContactList = function () {
    return this.m_contactList;
  };
  h.prototype.IsLocked = function () {
    return 0 < (this.m_flags & h.e_locked);
  };
  h.prototype.Solve = function (b) {
    for (var a, g = this.m_controllerList; g; g = g.m_next) g.Step(b);
    g = this.m_island;
    g.Initialize(
      this.m_bodyCount,
      this.m_contactCount,
      this.m_jointCount,
      null,
      this.m_contactManager.m_contactListener,
      this.m_contactSolver
    );
    for (a = this.m_bodyList; a; a = a.m_next) a.m_flags &= ~d.e_islandFlag;
    for (var f = this.m_contactList; f; f = f.m_next)
      f.m_flags &= ~s.e_islandFlag;
    for (f = this.m_jointList; f; f = f.m_next) f.m_islandFlag = !1;
    parseInt(this.m_bodyCount);
    for (var f = this.s_stack, h = this.m_bodyList; h; h = h.m_next)
      if (
        !(h.m_flags & d.e_islandFlag) &&
        !(!1 == h.IsAwake() || !1 == h.IsActive()) &&
        h.GetType() != d.b2_staticBody
      ) {
        g.Clear();
        var c = 0;
        f[c++] = h;
        for (h.m_flags |= d.e_islandFlag; 0 < c; )
          if (
            ((a = f[--c]),
            g.AddBody(a),
            !1 == a.IsAwake() && a.SetAwake(!0),
            a.GetType() != d.b2_staticBody)
          ) {
            for (var u, e = a.m_contactList; e; e = e.next)
              if (
                !(e.contact.m_flags & s.e_islandFlag) &&
                !(
                  !0 == e.contact.IsSensor() ||
                  !1 == e.contact.IsEnabled() ||
                  !1 == e.contact.IsTouching()
                )
              )
                g.AddContact(e.contact),
                  (e.contact.m_flags |= s.e_islandFlag),
                  (u = e.other),
                  u.m_flags & d.e_islandFlag ||
                    ((f[c++] = u), (u.m_flags |= d.e_islandFlag));
            for (a = a.m_jointList; a; a = a.next)
              !0 != a.joint.m_islandFlag &&
                ((u = a.other),
                !1 != u.IsActive() &&
                  (g.AddJoint(a.joint),
                  (a.joint.m_islandFlag = !0),
                  u.m_flags & d.e_islandFlag ||
                    ((f[c++] = u), (u.m_flags |= d.e_islandFlag))));
          }
        g.Solve(b, this.m_gravity, this.m_allowSleep);
        for (c = 0; c < g.m_bodyCount; ++c)
          (a = g.m_bodies[c]),
            a.GetType() == d.b2_staticBody && (a.m_flags &= ~d.e_islandFlag);
      }
    for (c = 0; c < f.length && f[c]; ++c) f[c] = null;
    for (a = this.m_bodyList; a; a = a.m_next)
      !1 == a.IsAwake() ||
        !1 == a.IsActive() ||
        (a.GetType() != d.b2_staticBody && a.SynchronizeFixtures());
    this.m_contactManager.FindNewContacts();
  };
  h.prototype.SolveTOI = function (b) {
    var a,
      g,
      f,
      c = this.m_island;
    c.Initialize(
      this.m_bodyCount,
      j.b2_maxTOIContactsPerIsland,
      j.b2_maxTOIJointsPerIsland,
      null,
      this.m_contactManager.m_contactListener,
      this.m_contactSolver
    );
    var u = h.s_queue;
    for (a = this.m_bodyList; a; a = a.m_next)
      (a.m_flags &= ~d.e_islandFlag), (a.m_sweep.t0 = 0);
    for (f = this.m_contactList; f; f = f.m_next)
      f.m_flags &= ~(s.e_toiFlag | s.e_islandFlag);
    for (f = this.m_jointList; f; f = f.m_next) f.m_islandFlag = !1;
    for (;;) {
      var e = null,
        y = 1;
      for (f = this.m_contactList; f; f = f.m_next)
        if (
          !(!0 == f.IsSensor() || !1 == f.IsEnabled() || !1 == f.IsContinuous())
        ) {
          a = 1;
          if (f.m_flags & s.e_toiFlag) a = f.m_toi;
          else {
            a = f.m_fixtureA;
            g = f.m_fixtureB;
            a = a.m_body;
            g = g.m_body;
            if (
              (a.GetType() != d.b2_dynamicBody || !1 == a.IsAwake()) &&
              (g.GetType() != d.b2_dynamicBody || !1 == g.IsAwake())
            )
              continue;
            var m = a.m_sweep.t0;
            a.m_sweep.t0 < g.m_sweep.t0
              ? ((m = g.m_sweep.t0), a.m_sweep.Advance(m))
              : g.m_sweep.t0 < a.m_sweep.t0 &&
                ((m = a.m_sweep.t0), g.m_sweep.Advance(m));
            a = f.ComputeTOI(a.m_sweep, g.m_sweep);
            j.b2Assert(0 <= a && 1 >= a);
            0 < a && 1 > a && ((a = (1 - a) * m + a), 1 < a && (a = 1));
            f.m_toi = a;
            f.m_flags |= s.e_toiFlag;
          }
          Number.MIN_VALUE < a && a < y && ((e = f), (y = a));
        }
      if (null == e || 1 - 100 * Number.MIN_VALUE < y) break;
      a = e.m_fixtureA;
      g = e.m_fixtureB;
      a = a.m_body;
      g = g.m_body;
      h.s_backupA.Set(a.m_sweep);
      h.s_backupB.Set(g.m_sweep);
      a.Advance(y);
      g.Advance(y);
      e.Update(this.m_contactManager.m_contactListener);
      e.m_flags &= ~s.e_toiFlag;
      if (!0 == e.IsSensor() || !1 == e.IsEnabled())
        a.m_sweep.Set(h.s_backupA),
          g.m_sweep.Set(h.s_backupB),
          a.SynchronizeTransform(),
          g.SynchronizeTransform();
      else if (!1 != e.IsTouching()) {
        a.GetType() != d.b2_dynamicBody && (a = g);
        c.Clear();
        e = f = 0;
        u[f + e++] = a;
        for (a.m_flags |= d.e_islandFlag; 0 < e; )
          if (
            ((a = u[f++]),
            --e,
            c.AddBody(a),
            !1 == a.IsAwake() && a.SetAwake(!0),
            a.GetType() == d.b2_dynamicBody)
          ) {
            for (
              g = a.m_contactList;
              g && c.m_contactCount != c.m_contactCapacity;
              g = g.next
            )
              if (
                !(g.contact.m_flags & s.e_islandFlag) &&
                !(
                  !0 == g.contact.IsSensor() ||
                  !1 == g.contact.IsEnabled() ||
                  !1 == g.contact.IsTouching()
                )
              )
                c.AddContact(g.contact),
                  (g.contact.m_flags |= s.e_islandFlag),
                  (m = g.other),
                  m.m_flags & d.e_islandFlag ||
                    (m.GetType() != d.b2_staticBody &&
                      (m.Advance(y), m.SetAwake(!0)),
                    (u[f + e] = m),
                    ++e,
                    (m.m_flags |= d.e_islandFlag));
            for (a = a.m_jointList; a; a = a.next)
              c.m_jointCount != c.m_jointCapacity &&
                !0 != a.joint.m_islandFlag &&
                ((m = a.other),
                !1 != m.IsActive() &&
                  (c.AddJoint(a.joint),
                  (a.joint.m_islandFlag = !0),
                  m.m_flags & d.e_islandFlag ||
                    (m.GetType() != d.b2_staticBody &&
                      (m.Advance(y), m.SetAwake(!0)),
                    (u[f + e] = m),
                    ++e,
                    (m.m_flags |= d.e_islandFlag))));
          }
        f = h.s_timestep;
        f.warmStarting = !1;
        f.dt = (1 - y) * b.dt;
        f.inv_dt = 1 / f.dt;
        f.dtRatio = 0;
        f.velocityIterations = b.velocityIterations;
        f.positionIterations = b.positionIterations;
        c.SolveTOI(f);
        for (y = y = 0; y < c.m_bodyCount; ++y)
          if (
            ((a = c.m_bodies[y]),
            (a.m_flags &= ~d.e_islandFlag),
            !1 != a.IsAwake() && a.GetType() == d.b2_dynamicBody)
          ) {
            a.SynchronizeFixtures();
            for (g = a.m_contactList; g; g = g.next)
              g.contact.m_flags &= ~s.e_toiFlag;
          }
        for (y = 0; y < c.m_contactCount; ++y)
          (f = c.m_contacts[y]), (f.m_flags &= ~(s.e_toiFlag | s.e_islandFlag));
        for (y = 0; y < c.m_jointCount; ++y)
          (f = c.m_joints[y]), (f.m_islandFlag = !1);
        this.m_contactManager.FindNewContacts();
      }
    }
  };
  h.prototype.DrawJoint = function (b) {
    var a = b.GetBodyA(),
      g = b.GetBodyB(),
      c = a.m_xf.position,
      d = g.m_xf.position,
      s = b.GetAnchorA(),
      u = b.GetAnchorB(),
      e = h.s_jointColor;
    switch (b.m_type) {
      case y.e_distanceJoint:
        this.m_debugDraw.DrawSegment(s, u, e);
        break;
      case y.e_pulleyJoint:
        a = b instanceof f ? b : null;
        b = a.GetGroundAnchorA();
        a = a.GetGroundAnchorB();
        this.m_debugDraw.DrawSegment(b, s, e);
        this.m_debugDraw.DrawSegment(a, u, e);
        this.m_debugDraw.DrawSegment(b, a, e);
        break;
      case y.e_mouseJoint:
        this.m_debugDraw.DrawSegment(s, u, e);
        break;
      default:
        a != this.m_groundBody && this.m_debugDraw.DrawSegment(c, s, e),
          this.m_debugDraw.DrawSegment(s, u, e),
          g != this.m_groundBody && this.m_debugDraw.DrawSegment(d, u, e);
    }
  };
  h.prototype.DrawShape = function (b, a, g) {
    switch (b.m_type) {
      case L.e_circleShape:
        var f = b instanceof w ? b : null,
          b = n.MulX(a, f.m_p);
        this.m_debugDraw.DrawSolidCircle(b, f.m_radius, a.R.col1, g);
        break;
      case L.e_polygonShape:
        for (
          var f = 0,
            f = b instanceof J ? b : null,
            b = parseInt(f.GetVertexCount()),
            h = f.GetVertices(),
            c = new Vector(b),
            f = 0;
          f < b;
          ++f
        )
          c[f] = n.MulX(a, h[f]);
        this.m_debugDraw.DrawSolidPolygon(c, b, g);
        break;
      case L.e_edgeShape:
        (f = b instanceof A ? b : null),
          this.m_debugDraw.DrawSegment(
            n.MulX(a, f.GetVertex1()),
            n.MulX(a, f.GetVertex2()),
            g
          );
    }
  };
  Box2D.postDefs.push(function () {
    Box2D.Dynamics.b2World.s_timestep2 = new a();
    Box2D.Dynamics.b2World.s_xf = new p();
    Box2D.Dynamics.b2World.s_backupA = new r();
    Box2D.Dynamics.b2World.s_backupB = new r();
    Box2D.Dynamics.b2World.s_timestep = new a();
    Box2D.Dynamics.b2World.s_queue = new Vector();
    Box2D.Dynamics.b2World.s_jointColor = new e(0.5, 0.8, 0.8);
    Box2D.Dynamics.b2World.e_newFixture = 1;
    Box2D.Dynamics.b2World.e_locked = 2;
  });
})();
(function () {
  var n = Box2D.Collision.Shapes.b2CircleShape,
    r = Box2D.Collision.Shapes.b2EdgeShape,
    p = Box2D.Collision.Shapes.b2PolygonShape,
    m = Box2D.Collision.Shapes.b2Shape,
    e = Box2D.Dynamics.Contacts.b2CircleContact,
    j = Box2D.Dynamics.Contacts.b2Contact,
    x = Box2D.Dynamics.Contacts.b2ContactConstraint,
    c = Box2D.Dynamics.Contacts.b2ContactConstraintPoint,
    q = Box2D.Dynamics.Contacts.b2ContactEdge,
    K = Box2D.Dynamics.Contacts.b2ContactFactory,
    D = Box2D.Dynamics.Contacts.b2ContactRegister,
    w = Box2D.Dynamics.Contacts.b2ContactResult,
    A = Box2D.Dynamics.Contacts.b2ContactSolver,
    t = Box2D.Dynamics.Contacts.b2EdgeAndCircleContact,
    J = Box2D.Dynamics.Contacts.b2NullContact,
    L = Box2D.Dynamics.Contacts.b2PolyAndCircleContact,
    d = Box2D.Dynamics.Contacts.b2PolyAndEdgeContact,
    z = Box2D.Dynamics.Contacts.b2PolygonContact,
    l = Box2D.Dynamics.Contacts.b2PositionSolverManifold,
    C = Box2D.Dynamics.b2Body,
    F = Box2D.Dynamics.b2TimeStep,
    H = Box2D.Common.b2Settings,
    B = Box2D.Common.Math.b2Mat22,
    M = Box2D.Common.Math.b2Math,
    E = Box2D.Common.Math.b2Vec2,
    G = Box2D.Collision.b2Collision,
    N = Box2D.Collision.b2ContactID,
    I = Box2D.Collision.b2Manifold,
    a = Box2D.Collision.b2TimeOfImpact,
    h = Box2D.Collision.b2TOIInput,
    s = Box2D.Collision.b2WorldManifold;
  Box2D.inherit(e, Box2D.Dynamics.Contacts.b2Contact);
  e.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
  e.b2CircleContact = function () {
    Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments);
  };
  e.Create = function () {
    return new e();
  };
  e.Destroy = function () {};
  e.prototype.Reset = function (a, h) {
    this.__super.Reset.call(this, a, h);
  };
  e.prototype.Evaluate = function () {
    var a = this.m_fixtureA.GetBody(),
      h = this.m_fixtureB.GetBody();
    G.CollideCircles(
      this.m_manifold,
      this.m_fixtureA.GetShape() instanceof n
        ? this.m_fixtureA.GetShape()
        : null,
      a.m_xf,
      this.m_fixtureB.GetShape() instanceof n
        ? this.m_fixtureB.GetShape()
        : null,
      h.m_xf
    );
  };
  j.b2Contact = function () {
    this.m_nodeA = new q();
    this.m_nodeB = new q();
    this.m_manifold = new I();
    this.m_oldManifold = new I();
  };
  j.prototype.GetManifold = function () {
    return this.m_manifold;
  };
  j.prototype.GetWorldManifold = function (a) {
    var h = this.m_fixtureA.GetBody(),
      c = this.m_fixtureB.GetBody(),
      f = this.m_fixtureA.GetShape(),
      b = this.m_fixtureB.GetShape();
    a.Initialize(
      this.m_manifold,
      h.GetTransform(),
      f.m_radius,
      c.GetTransform(),
      b.m_radius
    );
  };
  j.prototype.IsTouching = function () {
    return (this.m_flags & j.e_touchingFlag) == j.e_touchingFlag;
  };
  j.prototype.IsContinuous = function () {
    return (this.m_flags & j.e_continuousFlag) == j.e_continuousFlag;
  };
  j.prototype.SetSensor = function (a) {
    this.m_flags = a
      ? this.m_flags | j.e_sensorFlag
      : this.m_flags & ~j.e_sensorFlag;
  };
  j.prototype.IsSensor = function () {
    return (this.m_flags & j.e_sensorFlag) == j.e_sensorFlag;
  };
  j.prototype.SetEnabled = function (a) {
    this.m_flags = a
      ? this.m_flags | j.e_enabledFlag
      : this.m_flags & ~j.e_enabledFlag;
  };
  j.prototype.IsEnabled = function () {
    return (this.m_flags & j.e_enabledFlag) == j.e_enabledFlag;
  };
  j.prototype.GetNext = function () {
    return this.m_next;
  };
  j.prototype.GetFixtureA = function () {
    return this.m_fixtureA;
  };
  j.prototype.GetFixtureB = function () {
    return this.m_fixtureB;
  };
  j.prototype.FlagForFiltering = function () {
    this.m_flags |= j.e_filterFlag;
  };
  j.prototype.b2Contact = function () {};
  j.prototype.Reset = function (a, h) {
    void 0 === a && (a = null);
    void 0 === h && (h = null);
    this.m_flags = j.e_enabledFlag;
    if (!a || !h) this.m_fixtureB = this.m_fixtureA = null;
    else {
      if (a.IsSensor() || h.IsSensor()) this.m_flags |= j.e_sensorFlag;
      var c = a.GetBody(),
        f = h.GetBody();
      if (
        c.GetType() != C.b2_dynamicBody ||
        c.IsBullet() ||
        f.GetType() != C.b2_dynamicBody ||
        f.IsBullet()
      )
        this.m_flags |= j.e_continuousFlag;
      this.m_fixtureA = a;
      this.m_fixtureB = h;
      this.m_manifold.m_pointCount = 0;
      this.m_next = this.m_prev = null;
      this.m_nodeA.contact = null;
      this.m_nodeA.prev = null;
      this.m_nodeA.next = null;
      this.m_nodeA.other = null;
      this.m_nodeB.contact = null;
      this.m_nodeB.prev = null;
      this.m_nodeB.next = null;
      this.m_nodeB.other = null;
    }
  };
  j.prototype.Update = function (a) {
    var h = this.m_oldManifold;
    this.m_oldManifold = this.m_manifold;
    this.m_manifold = h;
    this.m_flags |= j.e_enabledFlag;
    var c = !1,
      h = (this.m_flags & j.e_touchingFlag) == j.e_touchingFlag,
      f = this.m_fixtureA.m_body,
      b = this.m_fixtureB.m_body,
      d = this.m_fixtureA.m_aabb.TestOverlap(this.m_fixtureB.m_aabb);
    if (this.m_flags & j.e_sensorFlag)
      d &&
        ((c = this.m_fixtureA.GetShape()),
        (d = this.m_fixtureB.GetShape()),
        (f = f.GetTransform()),
        (b = b.GetTransform()),
        (c = m.TestOverlap(c, f, d, b))),
        (this.m_manifold.m_pointCount = 0);
    else {
      this.m_flags =
        f.GetType() != C.b2_dynamicBody ||
        f.IsBullet() ||
        b.GetType() != C.b2_dynamicBody ||
        b.IsBullet()
          ? this.m_flags | j.e_continuousFlag
          : this.m_flags & ~j.e_continuousFlag;
      if (d) {
        this.Evaluate();
        c = 0 < this.m_manifold.m_pointCount;
        for (d = 0; d < this.m_manifold.m_pointCount; ++d) {
          var s = this.m_manifold.m_points[d];
          s.m_normalImpulse = 0;
          s.m_tangentImpulse = 0;
          for (
            var e = s.m_id, l = 0;
            l < this.m_oldManifold.m_pointCount;
            ++l
          ) {
            var n = this.m_oldManifold.m_points[l];
            if (n.m_id.key == e.key) {
              s.m_normalImpulse = n.m_normalImpulse;
              s.m_tangentImpulse = n.m_tangentImpulse;
              break;
            }
          }
        }
      } else this.m_manifold.m_pointCount = 0;
      c != h && (f.SetAwake(!0), b.SetAwake(!0));
    }
    this.m_flags = c
      ? this.m_flags | j.e_touchingFlag
      : this.m_flags & ~j.e_touchingFlag;
    !1 == h && !0 == c && a.BeginContact(this);
    !0 == h && !1 == c && a.EndContact(this);
    0 == (this.m_flags & j.e_sensorFlag) &&
      a.PreSolve(this, this.m_oldManifold);
  };
  j.prototype.Evaluate = function () {};
  j.prototype.ComputeTOI = function (g, h) {
    j.s_input.proxyA.Set(this.m_fixtureA.GetShape());
    j.s_input.proxyB.Set(this.m_fixtureB.GetShape());
    j.s_input.sweepA = g;
    j.s_input.sweepB = h;
    j.s_input.tolerance = H.b2_linearSlop;
    return a.TimeOfImpact(j.s_input);
  };
  Box2D.postDefs.push(function () {
    Box2D.Dynamics.Contacts.b2Contact.e_sensorFlag = 1;
    Box2D.Dynamics.Contacts.b2Contact.e_continuousFlag = 2;
    Box2D.Dynamics.Contacts.b2Contact.e_islandFlag = 4;
    Box2D.Dynamics.Contacts.b2Contact.e_toiFlag = 8;
    Box2D.Dynamics.Contacts.b2Contact.e_touchingFlag = 16;
    Box2D.Dynamics.Contacts.b2Contact.e_enabledFlag = 32;
    Box2D.Dynamics.Contacts.b2Contact.e_filterFlag = 64;
    Box2D.Dynamics.Contacts.b2Contact.s_input = new h();
  });
  x.b2ContactConstraint = function () {
    this.localPlaneNormal = new E();
    this.localPoint = new E();
    this.normal = new E();
    this.normalMass = new B();
    this.K = new B();
  };
  x.prototype.b2ContactConstraint = function () {
    this.points = new Vector(H.b2_maxManifoldPoints);
    for (var a = 0; a < H.b2_maxManifoldPoints; a++) this.points[a] = new c();
  };
  c.b2ContactConstraintPoint = function () {
    this.localPoint = new E();
    this.rA = new E();
    this.rB = new E();
  };
  q.b2ContactEdge = function () {};
  K.b2ContactFactory = function () {};
  K.prototype.b2ContactFactory = function (a) {
    this.m_allocator = a;
    this.InitializeRegisters();
  };
  K.prototype.AddType = function (a, h, c, f) {
    void 0 === c && (c = 0);
    void 0 === f && (f = 0);
    this.m_registers[c][f].createFcn = a;
    this.m_registers[c][f].destroyFcn = h;
    this.m_registers[c][f].primary = !0;
    c != f &&
      ((this.m_registers[f][c].createFcn = a),
      (this.m_registers[f][c].destroyFcn = h),
      (this.m_registers[f][c].primary = !1));
  };
  K.prototype.InitializeRegisters = function () {
    this.m_registers = new Vector(m.e_shapeTypeCount);
    for (var a = 0; a < m.e_shapeTypeCount; a++) {
      this.m_registers[a] = new Vector(m.e_shapeTypeCount);
      for (var h = 0; h < m.e_shapeTypeCount; h++)
        this.m_registers[a][h] = new D();
    }
    this.AddType(e.Create, e.Destroy, m.e_circleShape, m.e_circleShape);
    this.AddType(L.Create, L.Destroy, m.e_polygonShape, m.e_circleShape);
    this.AddType(z.Create, z.Destroy, m.e_polygonShape, m.e_polygonShape);
    this.AddType(t.Create, t.Destroy, m.e_edgeShape, m.e_circleShape);
    this.AddType(d.Create, d.Destroy, m.e_polygonShape, m.e_edgeShape);
  };
  K.prototype.Create = function (a, h) {
    var c = parseInt(a.GetType()),
      f = parseInt(h.GetType()),
      c = this.m_registers[c][f];
    if (c.pool)
      return (f = c.pool), (c.pool = f.m_next), c.poolCount--, f.Reset(a, h), f;
    f = c.createFcn;
    return null != f
      ? (c.primary
          ? ((f = f(this.m_allocator)), f.Reset(a, h))
          : ((f = f(this.m_allocator)), f.Reset(h, a)),
        f)
      : null;
  };
  K.prototype.Destroy = function (a) {
    0 < a.m_manifold.m_pointCount &&
      (a.m_fixtureA.m_body.SetAwake(!0), a.m_fixtureB.m_body.SetAwake(!0));
    var h = parseInt(a.m_fixtureA.GetType()),
      c = parseInt(a.m_fixtureB.GetType()),
      h = this.m_registers[h][c];
    h.poolCount++;
    a.m_next = h.pool;
    h.pool = a;
    h = h.destroyFcn;
    h(a, this.m_allocator);
  };
  D.b2ContactRegister = function () {};
  w.b2ContactResult = function () {
    this.position = new E();
    this.normal = new E();
    this.id = new N();
  };
  A.b2ContactSolver = function () {
    this.m_step = new F();
    this.m_constraints = new Vector();
  };
  A.prototype.b2ContactSolver = function () {};
  A.prototype.Initialize = function (a, h, c, f) {
    void 0 === c && (c = 0);
    var b;
    this.m_step.Set(a);
    this.m_allocator = f;
    a = 0;
    for (
      this.m_constraintCount = c;
      this.m_constraints.length < this.m_constraintCount;

    )
      this.m_constraints[this.m_constraints.length] = new x();
    for (a = 0; a < c; ++a) {
      b = h[a];
      var f = b.m_fixtureA,
        d = b.m_fixtureB,
        s = f.m_shape.m_radius,
        e = d.m_shape.m_radius,
        j = f.m_body,
        m = d.m_body,
        l = b.GetManifold(),
        n = H.b2MixFriction(f.GetFriction(), d.GetFriction()),
        t = H.b2MixRestitution(f.GetRestitution(), d.GetRestitution()),
        r = j.m_linearVelocity.x,
        p = j.m_linearVelocity.y,
        q = m.m_linearVelocity.x,
        w = m.m_linearVelocity.y,
        z = j.m_angularVelocity,
        B = m.m_angularVelocity;
      H.b2Assert(0 < l.m_pointCount);
      A.s_worldManifold.Initialize(l, j.m_xf, s, m.m_xf, e);
      d = A.s_worldManifold.m_normal.x;
      b = A.s_worldManifold.m_normal.y;
      f = this.m_constraints[a];
      f.bodyA = j;
      f.bodyB = m;
      f.manifold = l;
      f.normal.x = d;
      f.normal.y = b;
      f.pointCount = l.m_pointCount;
      f.friction = n;
      f.restitution = t;
      f.localPlaneNormal.x = l.m_localPlaneNormal.x;
      f.localPlaneNormal.y = l.m_localPlaneNormal.y;
      f.localPoint.x = l.m_localPoint.x;
      f.localPoint.y = l.m_localPoint.y;
      f.radius = s + e;
      f.type = l.m_type;
      for (s = 0; s < f.pointCount; ++s) {
        n = l.m_points[s];
        e = f.points[s];
        e.normalImpulse = n.m_normalImpulse;
        e.tangentImpulse = n.m_tangentImpulse;
        e.localPoint.SetV(n.m_localPoint);
        var n = (e.rA.x = A.s_worldManifold.m_points[s].x - j.m_sweep.c.x),
          t = (e.rA.y = A.s_worldManifold.m_points[s].y - j.m_sweep.c.y),
          C = (e.rB.x = A.s_worldManifold.m_points[s].x - m.m_sweep.c.x),
          F = (e.rB.y = A.s_worldManifold.m_points[s].y - m.m_sweep.c.y),
          E = n * b - t * d,
          D = C * b - F * d,
          E = E * E,
          D = D * D;
        e.normalMass =
          1 / (j.m_invMass + m.m_invMass + j.m_invI * E + m.m_invI * D);
        var J = j.m_mass * j.m_invMass + m.m_mass * m.m_invMass,
          J = J + (j.m_mass * j.m_invI * E + m.m_mass * m.m_invI * D);
        e.equalizedMass = 1 / J;
        D = b;
        J = -d;
        E = n * J - t * D;
        D = C * J - F * D;
        E *= E;
        D *= D;
        e.tangentMass =
          1 / (j.m_invMass + m.m_invMass + j.m_invI * E + m.m_invI * D);
        e.velocityBias = 0;
        n =
          f.normal.x * (q + -B * F - r - -z * t) +
          f.normal.y * (w + B * C - p - z * n);
        n < -H.b2_velocityThreshold && (e.velocityBias += -f.restitution * n);
      }
      2 == f.pointCount &&
        ((w = f.points[0]),
        (q = f.points[1]),
        (l = j.m_invMass),
        (j = j.m_invI),
        (r = m.m_invMass),
        (m = m.m_invI),
        (p = w.rA.x * b - w.rA.y * d),
        (w = w.rB.x * b - w.rB.y * d),
        (z = q.rA.x * b - q.rA.y * d),
        (q = q.rB.x * b - q.rB.y * d),
        (d = l + r + j * p * p + m * w * w),
        (b = l + r + j * z * z + m * q * q),
        (m = l + r + j * p * z + m * w * q),
        d * d < 100 * (d * b - m * m)
          ? (f.K.col1.Set(d, m),
            f.K.col2.Set(m, b),
            f.K.GetInverse(f.normalMass))
          : (f.pointCount = 1));
    }
  };
  A.prototype.InitVelocityConstraints = function (a) {
    for (var h = 0; h < this.m_constraintCount; ++h) {
      var c = this.m_constraints[h],
        f = c.bodyA,
        b = c.bodyB,
        d = f.m_invMass,
        s = f.m_invI,
        e = b.m_invMass,
        j = b.m_invI,
        m = c.normal.x,
        l = c.normal.y,
        n = l,
        t = -m,
        r = 0,
        p = 0;
      if (a.warmStarting) {
        p = c.pointCount;
        for (r = 0; r < p; ++r) {
          var q = c.points[r];
          q.normalImpulse *= a.dtRatio;
          q.tangentImpulse *= a.dtRatio;
          var A = q.normalImpulse * m + q.tangentImpulse * n,
            w = q.normalImpulse * l + q.tangentImpulse * t;
          f.m_angularVelocity -= s * (q.rA.x * w - q.rA.y * A);
          f.m_linearVelocity.x -= d * A;
          f.m_linearVelocity.y -= d * w;
          b.m_angularVelocity += j * (q.rB.x * w - q.rB.y * A);
          b.m_linearVelocity.x += e * A;
          b.m_linearVelocity.y += e * w;
        }
      } else {
        p = c.pointCount;
        for (r = 0; r < p; ++r)
          (f = c.points[r]), (f.normalImpulse = 0), (f.tangentImpulse = 0);
      }
    }
  };
  A.prototype.SolveVelocityConstraints = function () {
    for (
      var a = 0,
        h,
        c = 0,
        f = 0,
        b = 0,
        d = (f = f = c = c = 0),
        s = (c = c = 0),
        e = (c = b = 0),
        j = 0,
        m,
        l = 0;
      l < this.m_constraintCount;
      ++l
    ) {
      var b = this.m_constraints[l],
        n = b.bodyA,
        r = b.bodyB,
        t = n.m_angularVelocity,
        p = r.m_angularVelocity,
        q = n.m_linearVelocity,
        A = r.m_linearVelocity,
        w = n.m_invMass,
        z = n.m_invI,
        x = r.m_invMass,
        B = r.m_invI,
        e = b.normal.x,
        C = (j = b.normal.y);
      m = -e;
      s = b.friction;
      for (a = 0; a < b.pointCount; a++)
        (h = b.points[a]),
          (c = A.x - p * h.rB.y - q.x + t * h.rA.y),
          (f = A.y + p * h.rB.x - q.y - t * h.rA.x),
          (c = c * C + f * m),
          (c = h.tangentMass * -c),
          (f = s * h.normalImpulse),
          (f = M.Clamp(h.tangentImpulse + c, -f, f)),
          (c = f - h.tangentImpulse),
          (d = c * C),
          (c *= m),
          (q.x -= w * d),
          (q.y -= w * c),
          (t -= z * (h.rA.x * c - h.rA.y * d)),
          (A.x += x * d),
          (A.y += x * c),
          (p += B * (h.rB.x * c - h.rB.y * d)),
          (h.tangentImpulse = f);
      parseInt(b.pointCount);
      if (1 == b.pointCount)
        (h = b.points[0]),
          (c = A.x + -p * h.rB.y - q.x - -t * h.rA.y),
          (f = A.y + p * h.rB.x - q.y - t * h.rA.x),
          (b = c * e + f * j),
          (c = -h.normalMass * (b - h.velocityBias)),
          (f = h.normalImpulse + c),
          (f = 0 < f ? f : 0),
          (c = f - h.normalImpulse),
          (d = c * e),
          (c *= j),
          (q.x -= w * d),
          (q.y -= w * c),
          (t -= z * (h.rA.x * c - h.rA.y * d)),
          (A.x += x * d),
          (A.y += x * c),
          (p += B * (h.rB.x * c - h.rB.y * d)),
          (h.normalImpulse = f);
      else {
        h = b.points[0];
        var a = b.points[1],
          c = h.normalImpulse,
          s = a.normalImpulse,
          F =
            (A.x - p * h.rB.y - q.x + t * h.rA.y) * e +
            (A.y + p * h.rB.x - q.y - t * h.rA.x) * j,
          D =
            (A.x - p * a.rB.y - q.x + t * a.rA.y) * e +
            (A.y + p * a.rB.x - q.y - t * a.rA.x) * j,
          f = F - h.velocityBias,
          d = D - a.velocityBias;
        m = b.K;
        f -= m.col1.x * c + m.col2.x * s;
        for (d -= m.col1.y * c + m.col2.y * s; ; ) {
          m = b.normalMass;
          C = -(m.col1.x * f + m.col2.x * d);
          m = -(m.col1.y * f + m.col2.y * d);
          if (0 <= C && 0 <= m) {
            c = C - c;
            s = m - s;
            b = c * e;
            c *= j;
            e *= s;
            j *= s;
            q.x -= w * (b + e);
            q.y -= w * (c + j);
            t -= z * (h.rA.x * c - h.rA.y * b + a.rA.x * j - a.rA.y * e);
            A.x += x * (b + e);
            A.y += x * (c + j);
            p += B * (h.rB.x * c - h.rB.y * b + a.rB.x * j - a.rB.y * e);
            h.normalImpulse = C;
            a.normalImpulse = m;
            break;
          }
          C = -h.normalMass * f;
          m = 0;
          D = b.K.col1.y * C + d;
          if (0 <= C && 0 <= D) {
            c = C - c;
            s = m - s;
            b = c * e;
            c *= j;
            e *= s;
            j *= s;
            q.x -= w * (b + e);
            q.y -= w * (c + j);
            t -= z * (h.rA.x * c - h.rA.y * b + a.rA.x * j - a.rA.y * e);
            A.x += x * (b + e);
            A.y += x * (c + j);
            p += B * (h.rB.x * c - h.rB.y * b + a.rB.x * j - a.rB.y * e);
            h.normalImpulse = C;
            a.normalImpulse = m;
            break;
          }
          C = 0;
          m = -a.normalMass * d;
          F = b.K.col2.x * m + f;
          if (0 <= m && 0 <= F) {
            c = C - c;
            s = m - s;
            b = c * e;
            c *= j;
            e *= s;
            j *= s;
            q.x -= w * (b + e);
            q.y -= w * (c + j);
            t -= z * (h.rA.x * c - h.rA.y * b + a.rA.x * j - a.rA.y * e);
            A.x += x * (b + e);
            A.y += x * (c + j);
            p += B * (h.rB.x * c - h.rB.y * b + a.rB.x * j - a.rB.y * e);
            h.normalImpulse = C;
            a.normalImpulse = m;
            break;
          }
          m = C = 0;
          F = f;
          D = d;
          if (0 <= F && 0 <= D) {
            c = C - c;
            s = m - s;
            b = c * e;
            c *= j;
            e *= s;
            j *= s;
            q.x -= w * (b + e);
            q.y -= w * (c + j);
            t -= z * (h.rA.x * c - h.rA.y * b + a.rA.x * j - a.rA.y * e);
            A.x += x * (b + e);
            A.y += x * (c + j);
            p += B * (h.rB.x * c - h.rB.y * b + a.rB.x * j - a.rB.y * e);
            h.normalImpulse = C;
            a.normalImpulse = m;
            break;
          }
          break;
        }
      }
      n.m_angularVelocity = t;
      r.m_angularVelocity = p;
    }
  };
  A.prototype.FinalizeVelocityConstraints = function () {
    for (var a = 0; a < this.m_constraintCount; ++a)
      for (
        var h = this.m_constraints[a], c = h.manifold, f = 0;
        f < h.pointCount;
        ++f
      ) {
        var b = c.m_points[f],
          d = h.points[f];
        b.m_normalImpulse = d.normalImpulse;
        b.m_tangentImpulse = d.tangentImpulse;
      }
  };
  A.prototype.SolvePositionConstraints = function (a) {
    void 0 === a && (a = 0);
    for (var h = 0, c = 0; c < this.m_constraintCount; c++) {
      var f = this.m_constraints[c],
        b = f.bodyA,
        d = f.bodyB,
        s = b.m_mass * b.m_invMass,
        e = b.m_mass * b.m_invI,
        j = d.m_mass * d.m_invMass,
        m = d.m_mass * d.m_invI;
      A.s_psm.Initialize(f);
      for (var l = A.s_psm.m_normal, n = 0; n < f.pointCount; n++) {
        var t = f.points[n],
          r = A.s_psm.m_points[n],
          p = A.s_psm.m_separations[n],
          q = r.x - b.m_sweep.c.x,
          w = r.y - b.m_sweep.c.y,
          z = r.x - d.m_sweep.c.x,
          r = r.y - d.m_sweep.c.y,
          h = h < p ? h : p,
          p = M.Clamp(a * (p + H.b2_linearSlop), -H.b2_maxLinearCorrection, 0),
          p = -t.equalizedMass * p,
          t = p * l.x,
          p = p * l.y;
        b.m_sweep.c.x -= s * t;
        b.m_sweep.c.y -= s * p;
        b.m_sweep.a -= e * (q * p - w * t);
        b.SynchronizeTransform();
        d.m_sweep.c.x += j * t;
        d.m_sweep.c.y += j * p;
        d.m_sweep.a += m * (z * p - r * t);
        d.SynchronizeTransform();
      }
    }
    return h > -1.5 * H.b2_linearSlop;
  };
  Box2D.postDefs.push(function () {
    Box2D.Dynamics.Contacts.b2ContactSolver.s_worldManifold = new s();
    Box2D.Dynamics.Contacts.b2ContactSolver.s_psm = new l();
  });
  Box2D.inherit(t, Box2D.Dynamics.Contacts.b2Contact);
  t.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
  t.b2EdgeAndCircleContact = function () {
    Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments);
  };
  t.Create = function () {
    return new t();
  };
  t.Destroy = function () {};
  t.prototype.Reset = function (a, h) {
    this.__super.Reset.call(this, a, h);
  };
  t.prototype.Evaluate = function () {
    var a = this.m_fixtureA.GetBody(),
      h = this.m_fixtureB.GetBody();
    this.b2CollideEdgeAndCircle(
      this.m_manifold,
      this.m_fixtureA.GetShape() instanceof r
        ? this.m_fixtureA.GetShape()
        : null,
      a.m_xf,
      this.m_fixtureB.GetShape() instanceof n
        ? this.m_fixtureB.GetShape()
        : null,
      h.m_xf
    );
  };
  t.prototype.b2CollideEdgeAndCircle = function () {};
  Box2D.inherit(J, Box2D.Dynamics.Contacts.b2Contact);
  J.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
  J.b2NullContact = function () {
    Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments);
  };
  J.prototype.b2NullContact = function () {
    this.__super.b2Contact.call(this);
  };
  J.prototype.Evaluate = function () {};
  Box2D.inherit(L, Box2D.Dynamics.Contacts.b2Contact);
  L.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
  L.b2PolyAndCircleContact = function () {
    Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments);
  };
  L.Create = function () {
    return new L();
  };
  L.Destroy = function () {};
  L.prototype.Reset = function (a, h) {
    this.__super.Reset.call(this, a, h);
    H.b2Assert(a.GetType() == m.e_polygonShape);
    H.b2Assert(h.GetType() == m.e_circleShape);
  };
  L.prototype.Evaluate = function () {
    var a = this.m_fixtureA.m_body,
      h = this.m_fixtureB.m_body;
    G.CollidePolygonAndCircle(
      this.m_manifold,
      this.m_fixtureA.GetShape() instanceof p
        ? this.m_fixtureA.GetShape()
        : null,
      a.m_xf,
      this.m_fixtureB.GetShape() instanceof n
        ? this.m_fixtureB.GetShape()
        : null,
      h.m_xf
    );
  };
  Box2D.inherit(d, Box2D.Dynamics.Contacts.b2Contact);
  d.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
  d.b2PolyAndEdgeContact = function () {
    Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments);
  };
  d.Create = function () {
    return new d();
  };
  d.Destroy = function () {};
  d.prototype.Reset = function (a, h) {
    this.__super.Reset.call(this, a, h);
    H.b2Assert(a.GetType() == m.e_polygonShape);
    H.b2Assert(h.GetType() == m.e_edgeShape);
  };
  d.prototype.Evaluate = function () {
    var a = this.m_fixtureA.GetBody(),
      h = this.m_fixtureB.GetBody();
    this.b2CollidePolyAndEdge(
      this.m_manifold,
      this.m_fixtureA.GetShape() instanceof p
        ? this.m_fixtureA.GetShape()
        : null,
      a.m_xf,
      this.m_fixtureB.GetShape() instanceof r
        ? this.m_fixtureB.GetShape()
        : null,
      h.m_xf
    );
  };
  d.prototype.b2CollidePolyAndEdge = function () {};
  Box2D.inherit(z, Box2D.Dynamics.Contacts.b2Contact);
  z.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
  z.b2PolygonContact = function () {
    Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments);
  };
  z.Create = function () {
    return new z();
  };
  z.Destroy = function () {};
  z.prototype.Reset = function (a, h) {
    this.__super.Reset.call(this, a, h);
  };
  z.prototype.Evaluate = function () {
    var a = this.m_fixtureA.GetBody(),
      h = this.m_fixtureB.GetBody();
    G.CollidePolygons(
      this.m_manifold,
      this.m_fixtureA.GetShape() instanceof p
        ? this.m_fixtureA.GetShape()
        : null,
      a.m_xf,
      this.m_fixtureB.GetShape() instanceof p
        ? this.m_fixtureB.GetShape()
        : null,
      h.m_xf
    );
  };
  l.b2PositionSolverManifold = function () {};
  l.prototype.b2PositionSolverManifold = function () {
    this.m_normal = new E();
    this.m_separations = new Vector_a2j_Number(H.b2_maxManifoldPoints);
    this.m_points = new Vector(H.b2_maxManifoldPoints);
    for (var a = 0; a < H.b2_maxManifoldPoints; a++) this.m_points[a] = new E();
  };
  l.prototype.Initialize = function (a) {
    H.b2Assert(0 < a.pointCount);
    var h = 0,
      c = 0,
      f = 0,
      b,
      d = 0,
      s = 0;
    switch (a.type) {
      case I.e_circles:
        b = a.bodyA.m_xf.R;
        f = a.localPoint;
        h = a.bodyA.m_xf.position.x + (b.col1.x * f.x + b.col2.x * f.y);
        c = a.bodyA.m_xf.position.y + (b.col1.y * f.x + b.col2.y * f.y);
        b = a.bodyB.m_xf.R;
        f = a.points[0].localPoint;
        d = a.bodyB.m_xf.position.x + (b.col1.x * f.x + b.col2.x * f.y);
        b = a.bodyB.m_xf.position.y + (b.col1.y * f.x + b.col2.y * f.y);
        var f = d - h,
          s = b - c,
          e = f * f + s * s;
        e > Number.MIN_VALUE * Number.MIN_VALUE
          ? ((e = Math.sqrt(e)),
            (this.m_normal.x = f / e),
            (this.m_normal.y = s / e))
          : ((this.m_normal.x = 1), (this.m_normal.y = 0));
        this.m_points[0].x = 0.5 * (h + d);
        this.m_points[0].y = 0.5 * (c + b);
        this.m_separations[0] =
          f * this.m_normal.x + s * this.m_normal.y - a.radius;
        break;
      case I.e_faceA:
        b = a.bodyA.m_xf.R;
        f = a.localPlaneNormal;
        this.m_normal.x = b.col1.x * f.x + b.col2.x * f.y;
        this.m_normal.y = b.col1.y * f.x + b.col2.y * f.y;
        b = a.bodyA.m_xf.R;
        f = a.localPoint;
        d = a.bodyA.m_xf.position.x + (b.col1.x * f.x + b.col2.x * f.y);
        s = a.bodyA.m_xf.position.y + (b.col1.y * f.x + b.col2.y * f.y);
        b = a.bodyB.m_xf.R;
        for (h = 0; h < a.pointCount; ++h)
          (f = a.points[h].localPoint),
            (c = a.bodyB.m_xf.position.x + (b.col1.x * f.x + b.col2.x * f.y)),
            (f = a.bodyB.m_xf.position.y + (b.col1.y * f.x + b.col2.y * f.y)),
            (this.m_separations[h] =
              (c - d) * this.m_normal.x + (f - s) * this.m_normal.y - a.radius),
            (this.m_points[h].x = c),
            (this.m_points[h].y = f);
        break;
      case I.e_faceB:
        b = a.bodyB.m_xf.R;
        f = a.localPlaneNormal;
        this.m_normal.x = b.col1.x * f.x + b.col2.x * f.y;
        this.m_normal.y = b.col1.y * f.x + b.col2.y * f.y;
        b = a.bodyB.m_xf.R;
        f = a.localPoint;
        d = a.bodyB.m_xf.position.x + (b.col1.x * f.x + b.col2.x * f.y);
        s = a.bodyB.m_xf.position.y + (b.col1.y * f.x + b.col2.y * f.y);
        b = a.bodyA.m_xf.R;
        for (h = 0; h < a.pointCount; ++h)
          (f = a.points[h].localPoint),
            (c = a.bodyA.m_xf.position.x + (b.col1.x * f.x + b.col2.x * f.y)),
            (f = a.bodyA.m_xf.position.y + (b.col1.y * f.x + b.col2.y * f.y)),
            (this.m_separations[h] =
              (c - d) * this.m_normal.x + (f - s) * this.m_normal.y - a.radius),
            this.m_points[h].Set(c, f);
        this.m_normal.x *= -1;
        this.m_normal.y *= -1;
    }
  };
  Box2D.postDefs.push(function () {
    Box2D.Dynamics.Contacts.b2PositionSolverManifold.circlePointA = new E();
    Box2D.Dynamics.Contacts.b2PositionSolverManifold.circlePointB = new E();
  });
})();
(function () {
  var n = Box2D.Common.Math.b2Mat22,
    r = Box2D.Common.Math.b2Math,
    p = Box2D.Common.Math.b2Vec2,
    m = Box2D.Common.b2Color,
    e = Box2D.Dynamics.Controllers.b2BuoyancyController,
    j = Box2D.Dynamics.Controllers.b2ConstantAccelController,
    x = Box2D.Dynamics.Controllers.b2ConstantForceController,
    c = Box2D.Dynamics.Controllers.b2Controller,
    q = Box2D.Dynamics.Controllers.b2ControllerEdge,
    K = Box2D.Dynamics.Controllers.b2GravityController,
    D = Box2D.Dynamics.Controllers.b2TensorDampingController;
  Box2D.inherit(e, Box2D.Dynamics.Controllers.b2Controller);
  e.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
  e.b2BuoyancyController = function () {
    Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
    this.normal = new p(0, -1);
    this.density = this.offset = 0;
    this.velocity = new p(0, 0);
    this.linearDrag = 2;
    this.angularDrag = 1;
    this.useDensity = !1;
    this.useWorldGravity = !0;
    this.gravity = null;
  };
  e.prototype.Step = function () {
    if (this.m_bodyList) {
      this.useWorldGravity &&
        (this.gravity = this.GetWorld().GetGravity().Copy());
      for (var c = this.m_bodyList; c; c = c.nextBody) {
        var e = c.body;
        if (!1 != e.IsAwake()) {
          for (
            var j = new p(), m = new p(), n = 0, d = 0, r = e.GetFixtureList();
            r;
            r = r.GetNext()
          ) {
            var l = new p(),
              q = r
                .GetShape()
                .ComputeSubmergedArea(
                  this.normal,
                  this.offset,
                  e.GetTransform(),
                  l
                ),
              n = n + q;
            j.x += q * l.x;
            j.y += q * l.y;
            var x = 0,
              x = 1,
              d = d + q * x;
            m.x += q * l.x * x;
            m.y += q * l.y * x;
          }
          j.x /= n;
          j.y /= n;
          m.x /= d;
          m.y /= d;
          n < Number.MIN_VALUE ||
            ((d = this.gravity.GetNegative()),
            d.Multiply(this.density * n),
            e.ApplyForce(d, m),
            (m = e.GetLinearVelocityFromWorldPoint(j)),
            m.Subtract(this.velocity),
            m.Multiply(-this.linearDrag * n),
            e.ApplyForce(m, j),
            e.ApplyTorque(
              (-e.GetInertia() / e.GetMass()) *
                n *
                e.GetAngularVelocity() *
                this.angularDrag
            ));
        }
      }
    }
  };
  e.prototype.Draw = function (c) {
    var e = new p(),
      j = new p();
    e.x = this.normal.x * this.offset + 1e3 * this.normal.y;
    e.y = this.normal.y * this.offset - 1e3 * this.normal.x;
    j.x = this.normal.x * this.offset - 1e3 * this.normal.y;
    j.y = this.normal.y * this.offset + 1e3 * this.normal.x;
    var n = new m(0, 0, 1);
    c.DrawSegment(e, j, n);
  };
  Box2D.inherit(j, Box2D.Dynamics.Controllers.b2Controller);
  j.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
  j.b2ConstantAccelController = function () {
    Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
    this.A = new p(0, 0);
  };
  j.prototype.Step = function (c) {
    for (
      var c = new p(this.A.x * c.dt, this.A.y * c.dt), e = this.m_bodyList;
      e;
      e = e.nextBody
    ) {
      var j = e.body;
      j.IsAwake() &&
        j.SetLinearVelocity(
          new p(j.GetLinearVelocity().x + c.x, j.GetLinearVelocity().y + c.y)
        );
    }
  };
  Box2D.inherit(x, Box2D.Dynamics.Controllers.b2Controller);
  x.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
  x.b2ConstantForceController = function () {
    Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
    this.F = new p(0, 0);
  };
  x.prototype.Step = function () {
    for (var c = this.m_bodyList; c; c = c.nextBody) {
      var e = c.body;
      e.IsAwake() && e.ApplyForce(this.F, e.GetWorldCenter());
    }
  };
  c.b2Controller = function () {};
  c.prototype.Step = function () {};
  c.prototype.Draw = function () {};
  c.prototype.AddBody = function (c) {
    var e = new q();
    e.controller = this;
    e.body = c;
    e.nextBody = this.m_bodyList;
    e.prevBody = null;
    this.m_bodyList = e;
    e.nextBody && (e.nextBody.prevBody = e);
    this.m_bodyCount++;
    e.nextController = c.m_controllerList;
    e.prevController = null;
    c.m_controllerList = e;
    e.nextController && (e.nextController.prevController = e);
    c.m_controllerCount++;
  };
  c.prototype.RemoveBody = function (c) {
    for (var e = c.m_controllerList; e && e.controller != this; )
      e = e.nextController;
    e.prevBody && (e.prevBody.nextBody = e.nextBody);
    e.nextBody && (e.nextBody.prevBody = e.prevBody);
    e.nextController && (e.nextController.prevController = e.prevController);
    e.prevController && (e.prevController.nextController = e.nextController);
    this.m_bodyList == e && (this.m_bodyList = e.nextBody);
    c.m_controllerList == e && (c.m_controllerList = e.nextController);
    c.m_controllerCount--;
    this.m_bodyCount--;
  };
  c.prototype.Clear = function () {
    for (; this.m_bodyList; ) this.RemoveBody(this.m_bodyList.body);
  };
  c.prototype.GetNext = function () {
    return this.m_next;
  };
  c.prototype.GetWorld = function () {
    return this.m_world;
  };
  c.prototype.GetBodyList = function () {
    return this.m_bodyList;
  };
  q.b2ControllerEdge = function () {};
  Box2D.inherit(K, Box2D.Dynamics.Controllers.b2Controller);
  K.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
  K.b2GravityController = function () {
    Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
    this.G = 1;
    this.invSqr = !0;
  };
  K.prototype.Step = function () {
    var c = null,
      e = null,
      j = null,
      m = 0,
      n = null,
      d = null,
      r = null,
      l = 0,
      q = 0,
      x = 0,
      l = null;
    if (this.invSqr)
      for (c = this.m_bodyList; c; c = c.nextBody) {
        e = c.body;
        j = e.GetWorldCenter();
        m = e.GetMass();
        for (n = this.m_bodyList; n != c; n = n.nextBody)
          (d = n.body),
            (r = d.GetWorldCenter()),
            (l = r.x - j.x),
            (q = r.y - j.y),
            (x = l * l + q * q),
            x < Number.MIN_VALUE ||
              ((l = new p(l, q)),
              l.Multiply((this.G / x / Math.sqrt(x)) * m * d.GetMass()),
              e.IsAwake() && e.ApplyForce(l, j),
              l.Multiply(-1),
              d.IsAwake() && d.ApplyForce(l, r));
      }
    else
      for (c = this.m_bodyList; c; c = c.nextBody) {
        e = c.body;
        j = e.GetWorldCenter();
        m = e.GetMass();
        for (n = this.m_bodyList; n != c; n = n.nextBody)
          (d = n.body),
            (r = d.GetWorldCenter()),
            (l = r.x - j.x),
            (q = r.y - j.y),
            (x = l * l + q * q),
            x < Number.MIN_VALUE ||
              ((l = new p(l, q)),
              l.Multiply((this.G / x) * m * d.GetMass()),
              e.IsAwake() && e.ApplyForce(l, j),
              l.Multiply(-1),
              d.IsAwake() && d.ApplyForce(l, r));
      }
  };
  Box2D.inherit(D, Box2D.Dynamics.Controllers.b2Controller);
  D.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
  D.b2TensorDampingController = function () {
    Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
    this.T = new n();
    this.maxTimestep = 0;
  };
  D.prototype.SetAxisAligned = function (c, e) {
    void 0 === c && (c = 0);
    void 0 === e && (e = 0);
    this.T.col1.x = -c;
    this.T.col1.y = 0;
    this.T.col2.x = 0;
    this.T.col2.y = -e;
    this.maxTimestep = 0 < c || 0 < e ? 1 / Math.max(c, e) : 0;
  };
  D.prototype.Step = function (c) {
    c = c.dt;
    if (!(c <= Number.MIN_VALUE)) {
      c > this.maxTimestep && 0 < this.maxTimestep && (c = this.maxTimestep);
      for (var e = this.m_bodyList; e; e = e.nextBody) {
        var j = e.body;
        if (j.IsAwake()) {
          var m = j.GetWorldVector(
            r.MulMV(this.T, j.GetLocalVector(j.GetLinearVelocity()))
          );
          j.SetLinearVelocity(
            new p(
              j.GetLinearVelocity().x + m.x * c,
              j.GetLinearVelocity().y + m.y * c
            )
          );
        }
      }
    }
  };
})();
(function () {
  var n = Box2D.Common.b2Settings,
    r = Box2D.Common.Math.b2Mat22,
    p = Box2D.Common.Math.b2Mat33,
    m = Box2D.Common.Math.b2Math,
    e = Box2D.Common.Math.b2Vec2,
    j = Box2D.Common.Math.b2Vec3,
    x = Box2D.Dynamics.Joints.b2DistanceJoint,
    c = Box2D.Dynamics.Joints.b2DistanceJointDef,
    q = Box2D.Dynamics.Joints.b2FrictionJoint,
    K = Box2D.Dynamics.Joints.b2FrictionJointDef,
    D = Box2D.Dynamics.Joints.b2GearJoint,
    w = Box2D.Dynamics.Joints.b2GearJointDef,
    A = Box2D.Dynamics.Joints.b2Jacobian,
    t = Box2D.Dynamics.Joints.b2Joint,
    J = Box2D.Dynamics.Joints.b2JointDef,
    L = Box2D.Dynamics.Joints.b2JointEdge,
    d = Box2D.Dynamics.Joints.b2LineJoint,
    z = Box2D.Dynamics.Joints.b2LineJointDef,
    l = Box2D.Dynamics.Joints.b2MouseJoint,
    C = Box2D.Dynamics.Joints.b2MouseJointDef,
    F = Box2D.Dynamics.Joints.b2PrismaticJoint,
    H = Box2D.Dynamics.Joints.b2PrismaticJointDef,
    B = Box2D.Dynamics.Joints.b2PulleyJoint,
    M = Box2D.Dynamics.Joints.b2PulleyJointDef,
    E = Box2D.Dynamics.Joints.b2RevoluteJoint,
    G = Box2D.Dynamics.Joints.b2RevoluteJointDef,
    N = Box2D.Dynamics.Joints.b2WeldJoint,
    I = Box2D.Dynamics.Joints.b2WeldJointDef;
  Box2D.inherit(x, Box2D.Dynamics.Joints.b2Joint);
  x.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
  x.b2DistanceJoint = function () {
    Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
    this.m_localAnchor1 = new e();
    this.m_localAnchor2 = new e();
    this.m_u = new e();
  };
  x.prototype.GetAnchorA = function () {
    return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
  };
  x.prototype.GetAnchorB = function () {
    return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
  };
  x.prototype.GetReactionForce = function (a) {
    void 0 === a && (a = 0);
    return new e(
      a * this.m_impulse * this.m_u.x,
      a * this.m_impulse * this.m_u.y
    );
  };
  x.prototype.GetReactionTorque = function () {
    return 0;
  };
  x.prototype.GetLength = function () {
    return this.m_length;
  };
  x.prototype.SetLength = function (a) {
    void 0 === a && (a = 0);
    this.m_length = a;
  };
  x.prototype.GetFrequency = function () {
    return this.m_frequencyHz;
  };
  x.prototype.SetFrequency = function (a) {
    void 0 === a && (a = 0);
    this.m_frequencyHz = a;
  };
  x.prototype.GetDampingRatio = function () {
    return this.m_dampingRatio;
  };
  x.prototype.SetDampingRatio = function (a) {
    void 0 === a && (a = 0);
    this.m_dampingRatio = a;
  };
  x.prototype.b2DistanceJoint = function (a) {
    this.__super.b2Joint.call(this, a);
    this.m_localAnchor1.SetV(a.localAnchorA);
    this.m_localAnchor2.SetV(a.localAnchorB);
    this.m_length = a.length;
    this.m_frequencyHz = a.frequencyHz;
    this.m_dampingRatio = a.dampingRatio;
    this.m_bias = this.m_gamma = this.m_impulse = 0;
  };
  x.prototype.InitVelocityConstraints = function (a) {
    var h,
      c = 0,
      g = this.m_bodyA,
      e = this.m_bodyB;
    h = g.m_xf.R;
    var d = this.m_localAnchor1.x - g.m_sweep.localCenter.x,
      f = this.m_localAnchor1.y - g.m_sweep.localCenter.y,
      c = h.col1.x * d + h.col2.x * f,
      f = h.col1.y * d + h.col2.y * f,
      d = c;
    h = e.m_xf.R;
    var b = this.m_localAnchor2.x - e.m_sweep.localCenter.x,
      k = this.m_localAnchor2.y - e.m_sweep.localCenter.y,
      c = h.col1.x * b + h.col2.x * k,
      k = h.col1.y * b + h.col2.y * k,
      b = c;
    this.m_u.x = e.m_sweep.c.x + b - g.m_sweep.c.x - d;
    this.m_u.y = e.m_sweep.c.y + k - g.m_sweep.c.y - f;
    c = Math.sqrt(this.m_u.x * this.m_u.x + this.m_u.y * this.m_u.y);
    c > n.b2_linearSlop ? this.m_u.Multiply(1 / c) : this.m_u.SetZero();
    h = d * this.m_u.y - f * this.m_u.x;
    var j = b * this.m_u.y - k * this.m_u.x;
    h = g.m_invMass + g.m_invI * h * h + e.m_invMass + e.m_invI * j * j;
    this.m_mass = 0 != h ? 1 / h : 0;
    if (0 < this.m_frequencyHz) {
      var c = c - this.m_length,
        j = 2 * Math.PI * this.m_frequencyHz,
        m = this.m_mass * j * j;
      this.m_gamma =
        a.dt * (2 * this.m_mass * this.m_dampingRatio * j + a.dt * m);
      this.m_gamma = 0 != this.m_gamma ? 1 / this.m_gamma : 0;
      this.m_bias = c * a.dt * m * this.m_gamma;
      this.m_mass = h + this.m_gamma;
      this.m_mass = 0 != this.m_mass ? 1 / this.m_mass : 0;
    }
    a.warmStarting
      ? ((this.m_impulse *= a.dtRatio),
        (a = this.m_impulse * this.m_u.x),
        (h = this.m_impulse * this.m_u.y),
        (g.m_linearVelocity.x -= g.m_invMass * a),
        (g.m_linearVelocity.y -= g.m_invMass * h),
        (g.m_angularVelocity -= g.m_invI * (d * h - f * a)),
        (e.m_linearVelocity.x += e.m_invMass * a),
        (e.m_linearVelocity.y += e.m_invMass * h),
        (e.m_angularVelocity += e.m_invI * (b * h - k * a)))
      : (this.m_impulse = 0);
  };
  x.prototype.SolveVelocityConstraints = function () {
    var a,
      h = this.m_bodyA,
      c = this.m_bodyB;
    a = h.m_xf.R;
    var g = this.m_localAnchor1.x - h.m_sweep.localCenter.x,
      e = this.m_localAnchor1.y - h.m_sweep.localCenter.y,
      d = a.col1.x * g + a.col2.x * e,
      e = a.col1.y * g + a.col2.y * e,
      g = d;
    a = c.m_xf.R;
    var f = this.m_localAnchor2.x - c.m_sweep.localCenter.x,
      b = this.m_localAnchor2.y - c.m_sweep.localCenter.y,
      d = a.col1.x * f + a.col2.x * b,
      b = a.col1.y * f + a.col2.y * b,
      f = d,
      d =
        -this.m_mass *
        (this.m_u.x *
          (c.m_linearVelocity.x +
            -c.m_angularVelocity * b -
            (h.m_linearVelocity.x + -h.m_angularVelocity * e)) +
          this.m_u.y *
            (c.m_linearVelocity.y +
              c.m_angularVelocity * f -
              (h.m_linearVelocity.y + h.m_angularVelocity * g)) +
          this.m_bias +
          this.m_gamma * this.m_impulse);
    this.m_impulse += d;
    a = d * this.m_u.x;
    d *= this.m_u.y;
    h.m_linearVelocity.x -= h.m_invMass * a;
    h.m_linearVelocity.y -= h.m_invMass * d;
    h.m_angularVelocity -= h.m_invI * (g * d - e * a);
    c.m_linearVelocity.x += c.m_invMass * a;
    c.m_linearVelocity.y += c.m_invMass * d;
    c.m_angularVelocity += c.m_invI * (f * d - b * a);
  };
  x.prototype.SolvePositionConstraints = function () {
    var a;
    if (0 < this.m_frequencyHz) return !0;
    var h = this.m_bodyA,
      c = this.m_bodyB;
    a = h.m_xf.R;
    var g = this.m_localAnchor1.x - h.m_sweep.localCenter.x,
      e = this.m_localAnchor1.y - h.m_sweep.localCenter.y,
      d = a.col1.x * g + a.col2.x * e,
      e = a.col1.y * g + a.col2.y * e,
      g = d;
    a = c.m_xf.R;
    var f = this.m_localAnchor2.x - c.m_sweep.localCenter.x,
      b = this.m_localAnchor2.y - c.m_sweep.localCenter.y,
      d = a.col1.x * f + a.col2.x * b,
      b = a.col1.y * f + a.col2.y * b,
      f = d,
      d = c.m_sweep.c.x + f - h.m_sweep.c.x - g,
      k = c.m_sweep.c.y + b - h.m_sweep.c.y - e;
    a = Math.sqrt(d * d + k * k);
    d /= a;
    k /= a;
    a -= this.m_length;
    a = m.Clamp(a, -n.b2_maxLinearCorrection, n.b2_maxLinearCorrection);
    var j = -this.m_mass * a;
    this.m_u.Set(d, k);
    d = j * this.m_u.x;
    k = j * this.m_u.y;
    h.m_sweep.c.x -= h.m_invMass * d;
    h.m_sweep.c.y -= h.m_invMass * k;
    h.m_sweep.a -= h.m_invI * (g * k - e * d);
    c.m_sweep.c.x += c.m_invMass * d;
    c.m_sweep.c.y += c.m_invMass * k;
    c.m_sweep.a += c.m_invI * (f * k - b * d);
    h.SynchronizeTransform();
    c.SynchronizeTransform();
    return m.Abs(a) < n.b2_linearSlop;
  };
  Box2D.inherit(c, Box2D.Dynamics.Joints.b2JointDef);
  c.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
  c.b2DistanceJointDef = function () {
    Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
    this.localAnchorA = new e();
    this.localAnchorB = new e();
  };
  c.prototype.b2DistanceJointDef = function () {
    this.__super.b2JointDef.call(this);
    this.type = t.e_distanceJoint;
    this.length = 1;
    this.dampingRatio = this.frequencyHz = 0;
  };
  c.prototype.Initialize = function (a, h, c, g) {
    this.bodyA = a;
    this.bodyB = h;
    this.localAnchorA.SetV(this.bodyA.GetLocalPoint(c));
    this.localAnchorB.SetV(this.bodyB.GetLocalPoint(g));
    a = g.x - c.x;
    c = g.y - c.y;
    this.length = Math.sqrt(a * a + c * c);
    this.dampingRatio = this.frequencyHz = 0;
  };
  Box2D.inherit(q, Box2D.Dynamics.Joints.b2Joint);
  q.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
  q.b2FrictionJoint = function () {
    Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
    this.m_localAnchorA = new e();
    this.m_localAnchorB = new e();
    this.m_linearMass = new r();
    this.m_linearImpulse = new e();
  };
  q.prototype.GetAnchorA = function () {
    return this.m_bodyA.GetWorldPoint(this.m_localAnchorA);
  };
  q.prototype.GetAnchorB = function () {
    return this.m_bodyB.GetWorldPoint(this.m_localAnchorB);
  };
  q.prototype.GetReactionForce = function (a) {
    void 0 === a && (a = 0);
    return new e(a * this.m_linearImpulse.x, a * this.m_linearImpulse.y);
  };
  q.prototype.GetReactionTorque = function (a) {
    void 0 === a && (a = 0);
    return a * this.m_angularImpulse;
  };
  q.prototype.SetMaxForce = function (a) {
    void 0 === a && (a = 0);
    this.m_maxForce = a;
  };
  q.prototype.GetMaxForce = function () {
    return this.m_maxForce;
  };
  q.prototype.SetMaxTorque = function (a) {
    void 0 === a && (a = 0);
    this.m_maxTorque = a;
  };
  q.prototype.GetMaxTorque = function () {
    return this.m_maxTorque;
  };
  q.prototype.b2FrictionJoint = function (a) {
    this.__super.b2Joint.call(this, a);
    this.m_localAnchorA.SetV(a.localAnchorA);
    this.m_localAnchorB.SetV(a.localAnchorB);
    this.m_linearMass.SetZero();
    this.m_angularMass = 0;
    this.m_linearImpulse.SetZero();
    this.m_angularImpulse = 0;
    this.m_maxForce = a.maxForce;
    this.m_maxTorque = a.maxTorque;
  };
  q.prototype.InitVelocityConstraints = function (a) {
    var h,
      c = 0,
      g = this.m_bodyA,
      e = this.m_bodyB;
    h = g.m_xf.R;
    var d = this.m_localAnchorA.x - g.m_sweep.localCenter.x,
      f = this.m_localAnchorA.y - g.m_sweep.localCenter.y,
      c = h.col1.x * d + h.col2.x * f,
      f = h.col1.y * d + h.col2.y * f,
      d = c;
    h = e.m_xf.R;
    var b = this.m_localAnchorB.x - e.m_sweep.localCenter.x,
      k = this.m_localAnchorB.y - e.m_sweep.localCenter.y,
      c = h.col1.x * b + h.col2.x * k,
      k = h.col1.y * b + h.col2.y * k,
      b = c;
    h = g.m_invMass;
    var c = e.m_invMass,
      j = g.m_invI,
      m = e.m_invI,
      l = new r();
    l.col1.x = h + c;
    l.col2.x = 0;
    l.col1.y = 0;
    l.col2.y = h + c;
    l.col1.x += j * f * f;
    l.col2.x += -j * d * f;
    l.col1.y += -j * d * f;
    l.col2.y += j * d * d;
    l.col1.x += m * k * k;
    l.col2.x += -m * b * k;
    l.col1.y += -m * b * k;
    l.col2.y += m * b * b;
    l.GetInverse(this.m_linearMass);
    this.m_angularMass = j + m;
    0 < this.m_angularMass && (this.m_angularMass = 1 / this.m_angularMass);
    a.warmStarting
      ? ((this.m_linearImpulse.x *= a.dtRatio),
        (this.m_linearImpulse.y *= a.dtRatio),
        (this.m_angularImpulse *= a.dtRatio),
        (a = this.m_linearImpulse),
        (g.m_linearVelocity.x -= h * a.x),
        (g.m_linearVelocity.y -= h * a.y),
        (g.m_angularVelocity -=
          j * (d * a.y - f * a.x + this.m_angularImpulse)),
        (e.m_linearVelocity.x += c * a.x),
        (e.m_linearVelocity.y += c * a.y),
        (e.m_angularVelocity +=
          m * (b * a.y - k * a.x + this.m_angularImpulse)))
      : (this.m_linearImpulse.SetZero(), (this.m_angularImpulse = 0));
  };
  q.prototype.SolveVelocityConstraints = function (a) {
    var h,
      c = 0,
      g = this.m_bodyA,
      d = this.m_bodyB,
      j = g.m_linearVelocity,
      f = g.m_angularVelocity,
      b = d.m_linearVelocity,
      k = d.m_angularVelocity,
      l = g.m_invMass,
      n = d.m_invMass,
      r = g.m_invI,
      p = d.m_invI;
    h = g.m_xf.R;
    var t = this.m_localAnchorA.x - g.m_sweep.localCenter.x,
      q = this.m_localAnchorA.y - g.m_sweep.localCenter.y,
      c = h.col1.x * t + h.col2.x * q,
      q = h.col1.y * t + h.col2.y * q,
      t = c;
    h = d.m_xf.R;
    var x = this.m_localAnchorB.x - d.m_sweep.localCenter.x,
      w = this.m_localAnchorB.y - d.m_sweep.localCenter.y,
      c = h.col1.x * x + h.col2.x * w,
      w = h.col1.y * x + h.col2.y * w,
      x = c;
    h = 0;
    var c = -this.m_angularMass * (k - f),
      A = this.m_angularImpulse;
    h = a.dt * this.m_maxTorque;
    this.m_angularImpulse = m.Clamp(this.m_angularImpulse + c, -h, h);
    c = this.m_angularImpulse - A;
    f -= r * c;
    k += p * c;
    h = m.MulMV(
      this.m_linearMass,
      new e(-(b.x - k * w - j.x + f * q), -(b.y + k * x - j.y - f * t))
    );
    c = this.m_linearImpulse.Copy();
    this.m_linearImpulse.Add(h);
    h = a.dt * this.m_maxForce;
    this.m_linearImpulse.LengthSquared() > h * h &&
      (this.m_linearImpulse.Normalize(), this.m_linearImpulse.Multiply(h));
    h = m.SubtractVV(this.m_linearImpulse, c);
    j.x -= l * h.x;
    j.y -= l * h.y;
    f -= r * (t * h.y - q * h.x);
    b.x += n * h.x;
    b.y += n * h.y;
    k += p * (x * h.y - w * h.x);
    g.m_angularVelocity = f;
    d.m_angularVelocity = k;
  };
  q.prototype.SolvePositionConstraints = function () {
    return !0;
  };
  Box2D.inherit(K, Box2D.Dynamics.Joints.b2JointDef);
  K.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
  K.b2FrictionJointDef = function () {
    Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
    this.localAnchorA = new e();
    this.localAnchorB = new e();
  };
  K.prototype.b2FrictionJointDef = function () {
    this.__super.b2JointDef.call(this);
    this.type = t.e_frictionJoint;
    this.maxTorque = this.maxForce = 0;
  };
  K.prototype.Initialize = function (a, h, c) {
    this.bodyA = a;
    this.bodyB = h;
    this.localAnchorA.SetV(this.bodyA.GetLocalPoint(c));
    this.localAnchorB.SetV(this.bodyB.GetLocalPoint(c));
  };
  Box2D.inherit(D, Box2D.Dynamics.Joints.b2Joint);
  D.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
  D.b2GearJoint = function () {
    Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
    this.m_groundAnchor1 = new e();
    this.m_groundAnchor2 = new e();
    this.m_localAnchor1 = new e();
    this.m_localAnchor2 = new e();
    this.m_J = new A();
  };
  D.prototype.GetAnchorA = function () {
    return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
  };
  D.prototype.GetAnchorB = function () {
    return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
  };
  D.prototype.GetReactionForce = function (a) {
    void 0 === a && (a = 0);
    return new e(
      a * this.m_impulse * this.m_J.linearB.x,
      a * this.m_impulse * this.m_J.linearB.y
    );
  };
  D.prototype.GetReactionTorque = function (a) {
    void 0 === a && (a = 0);
    var h = this.m_bodyB.m_xf.R,
      c = this.m_localAnchor1.x - this.m_bodyB.m_sweep.localCenter.x,
      g = this.m_localAnchor1.y - this.m_bodyB.m_sweep.localCenter.y,
      d = h.col1.x * c + h.col2.x * g,
      g = h.col1.y * c + h.col2.y * g;
    return (
      a *
      (this.m_impulse * this.m_J.angularB -
        d * this.m_impulse * this.m_J.linearB.y +
        g * this.m_impulse * this.m_J.linearB.x)
    );
  };
  D.prototype.GetRatio = function () {
    return this.m_ratio;
  };
  D.prototype.SetRatio = function (a) {
    void 0 === a && (a = 0);
    this.m_ratio = a;
  };
  D.prototype.b2GearJoint = function (a) {
    this.__super.b2Joint.call(this, a);
    var h = parseInt(a.joint1.m_type),
      c = parseInt(a.joint2.m_type);
    this.m_prismatic2 =
      this.m_revolute2 =
      this.m_prismatic1 =
      this.m_revolute1 =
        null;
    var g = 0,
      d = 0;
    this.m_ground1 = a.joint1.GetBodyA();
    this.m_bodyA = a.joint1.GetBodyB();
    h == t.e_revoluteJoint
      ? ((this.m_revolute1 = a.joint1 instanceof E ? a.joint1 : null),
        this.m_groundAnchor1.SetV(this.m_revolute1.m_localAnchor1),
        this.m_localAnchor1.SetV(this.m_revolute1.m_localAnchor2),
        (g = this.m_revolute1.GetJointAngle()))
      : ((this.m_prismatic1 = a.joint1 instanceof F ? a.joint1 : null),
        this.m_groundAnchor1.SetV(this.m_prismatic1.m_localAnchor1),
        this.m_localAnchor1.SetV(this.m_prismatic1.m_localAnchor2),
        (g = this.m_prismatic1.GetJointTranslation()));
    this.m_ground2 = a.joint2.GetBodyA();
    this.m_bodyB = a.joint2.GetBodyB();
    c == t.e_revoluteJoint
      ? ((this.m_revolute2 = a.joint2 instanceof E ? a.joint2 : null),
        this.m_groundAnchor2.SetV(this.m_revolute2.m_localAnchor1),
        this.m_localAnchor2.SetV(this.m_revolute2.m_localAnchor2),
        (d = this.m_revolute2.GetJointAngle()))
      : ((this.m_prismatic2 = a.joint2 instanceof F ? a.joint2 : null),
        this.m_groundAnchor2.SetV(this.m_prismatic2.m_localAnchor1),
        this.m_localAnchor2.SetV(this.m_prismatic2.m_localAnchor2),
        (d = this.m_prismatic2.GetJointTranslation()));
    this.m_ratio = a.ratio;
    this.m_constant = g + this.m_ratio * d;
    this.m_impulse = 0;
  };
  D.prototype.InitVelocityConstraints = function (a) {
    var h = this.m_ground1,
      c = this.m_ground2,
      g = this.m_bodyA,
      d = this.m_bodyB,
      e = 0,
      f = 0,
      b = 0,
      k = 0,
      j = (b = 0),
      m = 0;
    this.m_J.SetZero();
    this.m_revolute1
      ? ((this.m_J.angularA = -1), (m += g.m_invI))
      : ((h = h.m_xf.R),
        (f = this.m_prismatic1.m_localXAxis1),
        (e = h.col1.x * f.x + h.col2.x * f.y),
        (f = h.col1.y * f.x + h.col2.y * f.y),
        (h = g.m_xf.R),
        (b = this.m_localAnchor1.x - g.m_sweep.localCenter.x),
        (k = this.m_localAnchor1.y - g.m_sweep.localCenter.y),
        (j = h.col1.x * b + h.col2.x * k),
        (k = h.col1.y * b + h.col2.y * k),
        (b = j * f - k * e),
        this.m_J.linearA.Set(-e, -f),
        (this.m_J.angularA = -b),
        (m += g.m_invMass + g.m_invI * b * b));
    this.m_revolute2
      ? ((this.m_J.angularB = -this.m_ratio),
        (m += this.m_ratio * this.m_ratio * d.m_invI))
      : ((h = c.m_xf.R),
        (f = this.m_prismatic2.m_localXAxis1),
        (e = h.col1.x * f.x + h.col2.x * f.y),
        (f = h.col1.y * f.x + h.col2.y * f.y),
        (h = d.m_xf.R),
        (b = this.m_localAnchor2.x - d.m_sweep.localCenter.x),
        (k = this.m_localAnchor2.y - d.m_sweep.localCenter.y),
        (j = h.col1.x * b + h.col2.x * k),
        (k = h.col1.y * b + h.col2.y * k),
        (b = j * f - k * e),
        this.m_J.linearB.Set(-this.m_ratio * e, -this.m_ratio * f),
        (this.m_J.angularB = -this.m_ratio * b),
        (m += this.m_ratio * this.m_ratio * (d.m_invMass + d.m_invI * b * b)));
    this.m_mass = 0 < m ? 1 / m : 0;
    a.warmStarting
      ? ((g.m_linearVelocity.x +=
          g.m_invMass * this.m_impulse * this.m_J.linearA.x),
        (g.m_linearVelocity.y +=
          g.m_invMass * this.m_impulse * this.m_J.linearA.y),
        (g.m_angularVelocity += g.m_invI * this.m_impulse * this.m_J.angularA),
        (d.m_linearVelocity.x +=
          d.m_invMass * this.m_impulse * this.m_J.linearB.x),
        (d.m_linearVelocity.y +=
          d.m_invMass * this.m_impulse * this.m_J.linearB.y),
        (d.m_angularVelocity += d.m_invI * this.m_impulse * this.m_J.angularB))
      : (this.m_impulse = 0);
  };
  D.prototype.SolveVelocityConstraints = function () {
    var a = this.m_bodyA,
      h = this.m_bodyB,
      c = this.m_J.Compute(
        a.m_linearVelocity,
        a.m_angularVelocity,
        h.m_linearVelocity,
        h.m_angularVelocity
      ),
      c = -this.m_mass * c;
    this.m_impulse += c;
    a.m_linearVelocity.x += a.m_invMass * c * this.m_J.linearA.x;
    a.m_linearVelocity.y += a.m_invMass * c * this.m_J.linearA.y;
    a.m_angularVelocity += a.m_invI * c * this.m_J.angularA;
    h.m_linearVelocity.x += h.m_invMass * c * this.m_J.linearB.x;
    h.m_linearVelocity.y += h.m_invMass * c * this.m_J.linearB.y;
    h.m_angularVelocity += h.m_invI * c * this.m_J.angularB;
  };
  D.prototype.SolvePositionConstraints = function () {
    var a = this.m_bodyA,
      c = this.m_bodyB,
      d = 0,
      g = 0,
      d = this.m_revolute1
        ? this.m_revolute1.GetJointAngle()
        : this.m_prismatic1.GetJointTranslation(),
      g = this.m_revolute2
        ? this.m_revolute2.GetJointAngle()
        : this.m_prismatic2.GetJointTranslation(),
      d = -this.m_mass * (this.m_constant - (d + this.m_ratio * g));
    a.m_sweep.c.x += a.m_invMass * d * this.m_J.linearA.x;
    a.m_sweep.c.y += a.m_invMass * d * this.m_J.linearA.y;
    a.m_sweep.a += a.m_invI * d * this.m_J.angularA;
    c.m_sweep.c.x += c.m_invMass * d * this.m_J.linearB.x;
    c.m_sweep.c.y += c.m_invMass * d * this.m_J.linearB.y;
    c.m_sweep.a += c.m_invI * d * this.m_J.angularB;
    a.SynchronizeTransform();
    c.SynchronizeTransform();
    return 0 < n.b2_linearSlop;
  };
  Box2D.inherit(w, Box2D.Dynamics.Joints.b2JointDef);
  w.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
  w.b2GearJointDef = function () {
    Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
  };
  w.prototype.b2GearJointDef = function () {
    this.__super.b2JointDef.call(this);
    this.type = t.e_gearJoint;
    this.joint2 = this.joint1 = null;
    this.ratio = 1;
  };
  A.b2Jacobian = function () {
    this.linearA = new e();
    this.linearB = new e();
  };
  A.prototype.SetZero = function () {
    this.linearA.SetZero();
    this.angularA = 0;
    this.linearB.SetZero();
    this.angularB = 0;
  };
  A.prototype.Set = function (a, c, d, g) {
    void 0 === c && (c = 0);
    void 0 === g && (g = 0);
    this.linearA.SetV(a);
    this.angularA = c;
    this.linearB.SetV(d);
    this.angularB = g;
  };
  A.prototype.Compute = function (a, c, d, g) {
    void 0 === c && (c = 0);
    void 0 === g && (g = 0);
    return (
      this.linearA.x * a.x +
      this.linearA.y * a.y +
      this.angularA * c +
      (this.linearB.x * d.x + this.linearB.y * d.y) +
      this.angularB * g
    );
  };
  t.b2Joint = function () {
    this.m_edgeA = new L();
    this.m_edgeB = new L();
    this.m_localCenterA = new e();
    this.m_localCenterB = new e();
  };
  t.prototype.GetType = function () {
    return this.m_type;
  };
  t.prototype.GetAnchorA = function () {
    return null;
  };
  t.prototype.GetAnchorB = function () {
    return null;
  };
  t.prototype.GetReactionForce = function () {
    return null;
  };
  t.prototype.GetReactionTorque = function () {
    return 0;
  };
  t.prototype.GetBodyA = function () {
    return this.m_bodyA;
  };
  t.prototype.GetBodyB = function () {
    return this.m_bodyB;
  };
  t.prototype.GetNext = function () {
    return this.m_next;
  };
  t.prototype.GetUserData = function () {
    return this.m_userData;
  };
  t.prototype.SetUserData = function (a) {
    this.m_userData = a;
  };
  t.prototype.IsActive = function () {
    return this.m_bodyA.IsActive() && this.m_bodyB.IsActive();
  };
  t.Create = function (a) {
    var h = null;
    switch (a.type) {
      case t.e_distanceJoint:
        h = new x(a instanceof c ? a : null);
        break;
      case t.e_mouseJoint:
        h = new l(a instanceof C ? a : null);
        break;
      case t.e_prismaticJoint:
        h = new F(a instanceof H ? a : null);
        break;
      case t.e_revoluteJoint:
        h = new E(a instanceof G ? a : null);
        break;
      case t.e_pulleyJoint:
        h = new B(a instanceof M ? a : null);
        break;
      case t.e_gearJoint:
        h = new D(a instanceof w ? a : null);
        break;
      case t.e_lineJoint:
        h = new d(a instanceof z ? a : null);
        break;
      case t.e_weldJoint:
        h = new N(a instanceof I ? a : null);
        break;
      case t.e_frictionJoint:
        h = new q(a instanceof K ? a : null);
    }
    return h;
  };
  t.Destroy = function () {};
  t.prototype.b2Joint = function (a) {
    n.b2Assert(a.bodyA != a.bodyB);
    this.m_type = a.type;
    this.m_next = this.m_prev = null;
    this.m_bodyA = a.bodyA;
    this.m_bodyB = a.bodyB;
    this.m_collideConnected = a.collideConnected;
    this.m_islandFlag = !1;
    this.m_userData = a.userData;
  };
  t.prototype.InitVelocityConstraints = function () {};
  t.prototype.SolveVelocityConstraints = function () {};
  t.prototype.FinalizeVelocityConstraints = function () {};
  t.prototype.SolvePositionConstraints = function () {
    return !1;
  };
  Box2D.postDefs.push(function () {
    Box2D.Dynamics.Joints.b2Joint.e_unknownJoint = 0;
    Box2D.Dynamics.Joints.b2Joint.e_revoluteJoint = 1;
    Box2D.Dynamics.Joints.b2Joint.e_prismaticJoint = 2;
    Box2D.Dynamics.Joints.b2Joint.e_distanceJoint = 3;
    Box2D.Dynamics.Joints.b2Joint.e_pulleyJoint = 4;
    Box2D.Dynamics.Joints.b2Joint.e_mouseJoint = 5;
    Box2D.Dynamics.Joints.b2Joint.e_gearJoint = 6;
    Box2D.Dynamics.Joints.b2Joint.e_lineJoint = 7;
    Box2D.Dynamics.Joints.b2Joint.e_weldJoint = 8;
    Box2D.Dynamics.Joints.b2Joint.e_frictionJoint = 9;
    Box2D.Dynamics.Joints.b2Joint.e_inactiveLimit = 0;
    Box2D.Dynamics.Joints.b2Joint.e_atLowerLimit = 1;
    Box2D.Dynamics.Joints.b2Joint.e_atUpperLimit = 2;
    Box2D.Dynamics.Joints.b2Joint.e_equalLimits = 3;
  });
  J.b2JointDef = function () {};
  J.prototype.b2JointDef = function () {
    this.type = t.e_unknownJoint;
    this.bodyB = this.bodyA = this.userData = null;
    this.collideConnected = !1;
  };
  L.b2JointEdge = function () {};
  Box2D.inherit(d, Box2D.Dynamics.Joints.b2Joint);
  d.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
  d.b2LineJoint = function () {
    Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
    this.m_localAnchor1 = new e();
    this.m_localAnchor2 = new e();
    this.m_localXAxis1 = new e();
    this.m_localYAxis1 = new e();
    this.m_axis = new e();
    this.m_perp = new e();
    this.m_K = new r();
    this.m_impulse = new e();
  };
  d.prototype.GetAnchorA = function () {
    return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
  };
  d.prototype.GetAnchorB = function () {
    return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
  };
  d.prototype.GetReactionForce = function (a) {
    void 0 === a && (a = 0);
    return new e(
      a *
        (this.m_impulse.x * this.m_perp.x +
          (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.x),
      a *
        (this.m_impulse.x * this.m_perp.y +
          (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.y)
    );
  };
  d.prototype.GetReactionTorque = function (a) {
    void 0 === a && (a = 0);
    return a * this.m_impulse.y;
  };
  d.prototype.GetJointTranslation = function () {
    var a = this.m_bodyA,
      c = this.m_bodyB,
      d = a.GetWorldPoint(this.m_localAnchor1),
      g = c.GetWorldPoint(this.m_localAnchor2),
      c = g.x - d.x,
      d = g.y - d.y,
      a = a.GetWorldVector(this.m_localXAxis1);
    return a.x * c + a.y * d;
  };
  d.prototype.GetJointSpeed = function () {
    var a = this.m_bodyA,
      c = this.m_bodyB,
      d;
    d = a.m_xf.R;
    var g = this.m_localAnchor1.x - a.m_sweep.localCenter.x,
      e = this.m_localAnchor1.y - a.m_sweep.localCenter.y,
      j = d.col1.x * g + d.col2.x * e,
      e = d.col1.y * g + d.col2.y * e,
      g = j;
    d = c.m_xf.R;
    var f = this.m_localAnchor2.x - c.m_sweep.localCenter.x,
      b = this.m_localAnchor2.y - c.m_sweep.localCenter.y,
      j = d.col1.x * f + d.col2.x * b,
      b = d.col1.y * f + d.col2.y * b,
      f = j;
    d = c.m_sweep.c.x + f - (a.m_sweep.c.x + g);
    var j = c.m_sweep.c.y + b - (a.m_sweep.c.y + e),
      k = a.GetWorldVector(this.m_localXAxis1),
      m = a.m_linearVelocity,
      l = c.m_linearVelocity,
      a = a.m_angularVelocity,
      c = c.m_angularVelocity;
    return (
      d * -a * k.y +
      j * a * k.x +
      (k.x * (l.x + -c * b - m.x - -a * e) + k.y * (l.y + c * f - m.y - a * g))
    );
  };
  d.prototype.IsLimitEnabled = function () {
    return this.m_enableLimit;
  };
  d.prototype.EnableLimit = function (a) {
    this.m_bodyA.SetAwake(!0);
    this.m_bodyB.SetAwake(!0);
    this.m_enableLimit = a;
  };
  d.prototype.GetLowerLimit = function () {
    return this.m_lowerTranslation;
  };
  d.prototype.GetUpperLimit = function () {
    return this.m_upperTranslation;
  };
  d.prototype.SetLimits = function (a, c) {
    void 0 === a && (a = 0);
    void 0 === c && (c = 0);
    this.m_bodyA.SetAwake(!0);
    this.m_bodyB.SetAwake(!0);
    this.m_lowerTranslation = a;
    this.m_upperTranslation = c;
  };
  d.prototype.IsMotorEnabled = function () {
    return this.m_enableMotor;
  };
  d.prototype.EnableMotor = function (a) {
    this.m_bodyA.SetAwake(!0);
    this.m_bodyB.SetAwake(!0);
    this.m_enableMotor = a;
  };
  d.prototype.SetMotorSpeed = function (a) {
    void 0 === a && (a = 0);
    this.m_bodyA.SetAwake(!0);
    this.m_bodyB.SetAwake(!0);
    this.m_motorSpeed = a;
  };
  d.prototype.GetMotorSpeed = function () {
    return this.m_motorSpeed;
  };
  d.prototype.SetMaxMotorForce = function (a) {
    void 0 === a && (a = 0);
    this.m_bodyA.SetAwake(!0);
    this.m_bodyB.SetAwake(!0);
    this.m_maxMotorForce = a;
  };
  d.prototype.GetMaxMotorForce = function () {
    return this.m_maxMotorForce;
  };
  d.prototype.GetMotorForce = function () {
    return this.m_motorImpulse;
  };
  d.prototype.b2LineJoint = function (a) {
    this.__super.b2Joint.call(this, a);
    this.m_localAnchor1.SetV(a.localAnchorA);
    this.m_localAnchor2.SetV(a.localAnchorB);
    this.m_localXAxis1.SetV(a.localAxisA);
    this.m_localYAxis1.x = -this.m_localXAxis1.y;
    this.m_localYAxis1.y = this.m_localXAxis1.x;
    this.m_impulse.SetZero();
    this.m_motorImpulse = this.m_motorMass = 0;
    this.m_lowerTranslation = a.lowerTranslation;
    this.m_upperTranslation = a.upperTranslation;
    this.m_maxMotorForce = a.maxMotorForce;
    this.m_motorSpeed = a.motorSpeed;
    this.m_enableLimit = a.enableLimit;
    this.m_enableMotor = a.enableMotor;
    this.m_limitState = t.e_inactiveLimit;
    this.m_axis.SetZero();
    this.m_perp.SetZero();
  };
  d.prototype.InitVelocityConstraints = function (a) {
    var c = this.m_bodyA,
      d = this.m_bodyB,
      g,
      e = 0;
    this.m_localCenterA.SetV(c.GetLocalCenter());
    this.m_localCenterB.SetV(d.GetLocalCenter());
    var j = c.GetTransform();
    d.GetTransform();
    g = c.m_xf.R;
    var f = this.m_localAnchor1.x - this.m_localCenterA.x,
      b = this.m_localAnchor1.y - this.m_localCenterA.y,
      e = g.col1.x * f + g.col2.x * b,
      b = g.col1.y * f + g.col2.y * b,
      f = e;
    g = d.m_xf.R;
    var k = this.m_localAnchor2.x - this.m_localCenterB.x,
      l = this.m_localAnchor2.y - this.m_localCenterB.y,
      e = g.col1.x * k + g.col2.x * l,
      l = g.col1.y * k + g.col2.y * l,
      k = e;
    g = d.m_sweep.c.x + k - c.m_sweep.c.x - f;
    e = d.m_sweep.c.y + l - c.m_sweep.c.y - b;
    this.m_invMassA = c.m_invMass;
    this.m_invMassB = d.m_invMass;
    this.m_invIA = c.m_invI;
    this.m_invIB = d.m_invI;
    this.m_axis.SetV(m.MulMV(j.R, this.m_localXAxis1));
    this.m_a1 = (g + f) * this.m_axis.y - (e + b) * this.m_axis.x;
    this.m_a2 = k * this.m_axis.y - l * this.m_axis.x;
    this.m_motorMass =
      this.m_invMassA +
      this.m_invMassB +
      this.m_invIA * this.m_a1 * this.m_a1 +
      this.m_invIB * this.m_a2 * this.m_a2;
    this.m_motorMass =
      this.m_motorMass > Number.MIN_VALUE ? 1 / this.m_motorMass : 0;
    this.m_perp.SetV(m.MulMV(j.R, this.m_localYAxis1));
    this.m_s1 = (g + f) * this.m_perp.y - (e + b) * this.m_perp.x;
    this.m_s2 = k * this.m_perp.y - l * this.m_perp.x;
    j = this.m_invMassA;
    f = this.m_invMassB;
    b = this.m_invIA;
    k = this.m_invIB;
    this.m_K.col1.x =
      j + f + b * this.m_s1 * this.m_s1 + k * this.m_s2 * this.m_s2;
    this.m_K.col1.y = b * this.m_s1 * this.m_a1 + k * this.m_s2 * this.m_a2;
    this.m_K.col2.x = this.m_K.col1.y;
    this.m_K.col2.y =
      j + f + b * this.m_a1 * this.m_a1 + k * this.m_a2 * this.m_a2;
    this.m_enableLimit
      ? ((g = this.m_axis.x * g + this.m_axis.y * e),
        m.Abs(this.m_upperTranslation - this.m_lowerTranslation) <
        2 * n.b2_linearSlop
          ? (this.m_limitState = t.e_equalLimits)
          : g <= this.m_lowerTranslation
          ? this.m_limitState != t.e_atLowerLimit &&
            ((this.m_limitState = t.e_atLowerLimit), (this.m_impulse.y = 0))
          : g >= this.m_upperTranslation
          ? this.m_limitState != t.e_atUpperLimit &&
            ((this.m_limitState = t.e_atUpperLimit), (this.m_impulse.y = 0))
          : ((this.m_limitState = t.e_inactiveLimit), (this.m_impulse.y = 0)))
      : (this.m_limitState = t.e_inactiveLimit);
    !1 == this.m_enableMotor && (this.m_motorImpulse = 0);
    a.warmStarting
      ? ((this.m_impulse.x *= a.dtRatio),
        (this.m_impulse.y *= a.dtRatio),
        (this.m_motorImpulse *= a.dtRatio),
        (a =
          this.m_impulse.x * this.m_perp.x +
          (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.x),
        (g =
          this.m_impulse.x * this.m_perp.y +
          (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.y),
        (e =
          this.m_impulse.x * this.m_s1 +
          (this.m_motorImpulse + this.m_impulse.y) * this.m_a1),
        (j =
          this.m_impulse.x * this.m_s2 +
          (this.m_motorImpulse + this.m_impulse.y) * this.m_a2),
        (c.m_linearVelocity.x -= this.m_invMassA * a),
        (c.m_linearVelocity.y -= this.m_invMassA * g),
        (c.m_angularVelocity -= this.m_invIA * e),
        (d.m_linearVelocity.x += this.m_invMassB * a),
        (d.m_linearVelocity.y += this.m_invMassB * g),
        (d.m_angularVelocity += this.m_invIB * j))
      : (this.m_impulse.SetZero(), (this.m_motorImpulse = 0));
  };
  d.prototype.SolveVelocityConstraints = function (a) {
    var c = this.m_bodyA,
      d = this.m_bodyB,
      g = c.m_linearVelocity,
      j = c.m_angularVelocity,
      l = d.m_linearVelocity,
      f = d.m_angularVelocity,
      b = 0,
      k = 0,
      v = 0,
      n = 0;
    this.m_enableMotor &&
      this.m_limitState != t.e_equalLimits &&
      ((n =
        this.m_motorMass *
        (this.m_motorSpeed -
          (this.m_axis.x * (l.x - g.x) +
            this.m_axis.y * (l.y - g.y) +
            this.m_a2 * f -
            this.m_a1 * j))),
      (b = this.m_motorImpulse),
      (k = a.dt * this.m_maxMotorForce),
      (this.m_motorImpulse = m.Clamp(this.m_motorImpulse + n, -k, k)),
      (n = this.m_motorImpulse - b),
      (b = n * this.m_axis.x),
      (k = n * this.m_axis.y),
      (v = n * this.m_a1),
      (n *= this.m_a2),
      (g.x -= this.m_invMassA * b),
      (g.y -= this.m_invMassA * k),
      (j -= this.m_invIA * v),
      (l.x += this.m_invMassB * b),
      (l.y += this.m_invMassB * k),
      (f += this.m_invIB * n));
    k =
      this.m_perp.x * (l.x - g.x) +
      this.m_perp.y * (l.y - g.y) +
      this.m_s2 * f -
      this.m_s1 * j;
    this.m_enableLimit && this.m_limitState != t.e_inactiveLimit
      ? ((v =
          this.m_axis.x * (l.x - g.x) +
          this.m_axis.y * (l.y - g.y) +
          this.m_a2 * f -
          this.m_a1 * j),
        (b = this.m_impulse.Copy()),
        (a = this.m_K.Solve(new e(), -k, -v)),
        this.m_impulse.Add(a),
        this.m_limitState == t.e_atLowerLimit
          ? (this.m_impulse.y = m.Max(this.m_impulse.y, 0))
          : this.m_limitState == t.e_atUpperLimit &&
            (this.m_impulse.y = m.Min(this.m_impulse.y, 0)),
        (k = -k - (this.m_impulse.y - b.y) * this.m_K.col2.x),
        (v = 0),
        (v = 0 != this.m_K.col1.x ? k / this.m_K.col1.x + b.x : b.x),
        (this.m_impulse.x = v),
        (a.x = this.m_impulse.x - b.x),
        (a.y = this.m_impulse.y - b.y),
        (b = a.x * this.m_perp.x + a.y * this.m_axis.x),
        (k = a.x * this.m_perp.y + a.y * this.m_axis.y),
        (v = a.x * this.m_s1 + a.y * this.m_a1),
        (n = a.x * this.m_s2 + a.y * this.m_a2))
      : ((a = 0),
        (a = 0 != this.m_K.col1.x ? -k / this.m_K.col1.x : 0),
        (this.m_impulse.x += a),
        (b = a * this.m_perp.x),
        (k = a * this.m_perp.y),
        (v = a * this.m_s1),
        (n = a * this.m_s2));
    g.x -= this.m_invMassA * b;
    g.y -= this.m_invMassA * k;
    j -= this.m_invIA * v;
    l.x += this.m_invMassB * b;
    l.y += this.m_invMassB * k;
    f += this.m_invIB * n;
    c.m_linearVelocity.SetV(g);
    c.m_angularVelocity = j;
    d.m_linearVelocity.SetV(l);
    d.m_angularVelocity = f;
  };
  d.prototype.SolvePositionConstraints = function () {
    var a = this.m_bodyA,
      c = this.m_bodyB,
      d = a.m_sweep.c,
      g = a.m_sweep.a,
      j = c.m_sweep.c,
      l = c.m_sweep.a,
      f,
      b = 0,
      k = 0,
      v = 0,
      p = 0,
      t = (f = 0),
      q = 0,
      k = !1,
      x = 0,
      w = r.FromAngle(g),
      v = r.FromAngle(l);
    f = w;
    var q = this.m_localAnchor1.x - this.m_localCenterA.x,
      A = this.m_localAnchor1.y - this.m_localCenterA.y,
      b = f.col1.x * q + f.col2.x * A,
      A = f.col1.y * q + f.col2.y * A,
      q = b;
    f = v;
    v = this.m_localAnchor2.x - this.m_localCenterB.x;
    p = this.m_localAnchor2.y - this.m_localCenterB.y;
    b = f.col1.x * v + f.col2.x * p;
    p = f.col1.y * v + f.col2.y * p;
    v = b;
    f = j.x + v - d.x - q;
    b = j.y + p - d.y - A;
    if (this.m_enableLimit) {
      this.m_axis = m.MulMV(w, this.m_localXAxis1);
      this.m_a1 = (f + q) * this.m_axis.y - (b + A) * this.m_axis.x;
      this.m_a2 = v * this.m_axis.y - p * this.m_axis.x;
      var z = this.m_axis.x * f + this.m_axis.y * b;
      m.Abs(this.m_upperTranslation - this.m_lowerTranslation) <
      2 * n.b2_linearSlop
        ? ((x = m.Clamp(
            z,
            -n.b2_maxLinearCorrection,
            n.b2_maxLinearCorrection
          )),
          (t = m.Abs(z)),
          (k = !0))
        : z <= this.m_lowerTranslation
        ? ((x = m.Clamp(
            z - this.m_lowerTranslation + n.b2_linearSlop,
            -n.b2_maxLinearCorrection,
            0
          )),
          (t = this.m_lowerTranslation - z),
          (k = !0))
        : z >= this.m_upperTranslation &&
          ((x = m.Clamp(
            z - this.m_upperTranslation + n.b2_linearSlop,
            0,
            n.b2_maxLinearCorrection
          )),
          (t = z - this.m_upperTranslation),
          (k = !0));
    }
    this.m_perp = m.MulMV(w, this.m_localYAxis1);
    this.m_s1 = (f + q) * this.m_perp.y - (b + A) * this.m_perp.x;
    this.m_s2 = v * this.m_perp.y - p * this.m_perp.x;
    w = new e();
    A = this.m_perp.x * f + this.m_perp.y * b;
    t = m.Max(t, m.Abs(A));
    q = 0;
    k
      ? ((k = this.m_invMassA),
        (v = this.m_invMassB),
        (p = this.m_invIA),
        (f = this.m_invIB),
        (this.m_K.col1.x =
          k + v + p * this.m_s1 * this.m_s1 + f * this.m_s2 * this.m_s2),
        (this.m_K.col1.y =
          p * this.m_s1 * this.m_a1 + f * this.m_s2 * this.m_a2),
        (this.m_K.col2.x = this.m_K.col1.y),
        (this.m_K.col2.y =
          k + v + p * this.m_a1 * this.m_a1 + f * this.m_a2 * this.m_a2),
        this.m_K.Solve(w, -A, -x))
      : ((k = this.m_invMassA),
        (v = this.m_invMassB),
        (p = this.m_invIA),
        (f = this.m_invIB),
        (x = k + v + p * this.m_s1 * this.m_s1 + f * this.m_s2 * this.m_s2),
        (w.x = 0 != x ? -A / x : 0),
        (w.y = 0));
    x = w.x * this.m_perp.x + w.y * this.m_axis.x;
    k = w.x * this.m_perp.y + w.y * this.m_axis.y;
    A = w.x * this.m_s1 + w.y * this.m_a1;
    w = w.x * this.m_s2 + w.y * this.m_a2;
    d.x -= this.m_invMassA * x;
    d.y -= this.m_invMassA * k;
    g -= this.m_invIA * A;
    j.x += this.m_invMassB * x;
    j.y += this.m_invMassB * k;
    l += this.m_invIB * w;
    a.m_sweep.a = g;
    c.m_sweep.a = l;
    a.SynchronizeTransform();
    c.SynchronizeTransform();
    return t <= n.b2_linearSlop && q <= n.b2_angularSlop;
  };
  Box2D.inherit(z, Box2D.Dynamics.Joints.b2JointDef);
  z.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
  z.b2LineJointDef = function () {
    Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
    this.localAnchorA = new e();
    this.localAnchorB = new e();
    this.localAxisA = new e();
  };
  z.prototype.b2LineJointDef = function () {
    this.__super.b2JointDef.call(this);
    this.type = t.e_lineJoint;
    this.localAxisA.Set(1, 0);
    this.enableLimit = !1;
    this.upperTranslation = this.lowerTranslation = 0;
    this.enableMotor = !1;
    this.motorSpeed = this.maxMotorForce = 0;
  };
  z.prototype.Initialize = function (a, c, d, g) {
    this.bodyA = a;
    this.bodyB = c;
    this.localAnchorA = this.bodyA.GetLocalPoint(d);
    this.localAnchorB = this.bodyB.GetLocalPoint(d);
    this.localAxisA = this.bodyA.GetLocalVector(g);
  };
  Box2D.inherit(l, Box2D.Dynamics.Joints.b2Joint);
  l.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
  l.b2MouseJoint = function () {
    Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
    this.K = new r();
    this.K1 = new r();
    this.K2 = new r();
    this.m_localAnchor = new e();
    this.m_target = new e();
    this.m_impulse = new e();
    this.m_mass = new r();
    this.m_C = new e();
  };
  l.prototype.GetAnchorA = function () {
    return this.m_target;
  };
  l.prototype.GetAnchorB = function () {
    return this.m_bodyB.GetWorldPoint(this.m_localAnchor);
  };
  l.prototype.GetReactionForce = function (a) {
    void 0 === a && (a = 0);
    return new e(a * this.m_impulse.x, a * this.m_impulse.y);
  };
  l.prototype.GetReactionTorque = function () {
    return 0;
  };
  l.prototype.GetTarget = function () {
    return this.m_target;
  };
  l.prototype.SetTarget = function (a) {
    !1 == this.m_bodyB.IsAwake() && this.m_bodyB.SetAwake(!0);
    this.m_target = a;
  };
  l.prototype.GetMaxForce = function () {
    return this.m_maxForce;
  };
  l.prototype.SetMaxForce = function (a) {
    void 0 === a && (a = 0);
    this.m_maxForce = a;
  };
  l.prototype.GetFrequency = function () {
    return this.m_frequencyHz;
  };
  l.prototype.SetFrequency = function (a) {
    void 0 === a && (a = 0);
    this.m_frequencyHz = a;
  };
  l.prototype.GetDampingRatio = function () {
    return this.m_dampingRatio;
  };
  l.prototype.SetDampingRatio = function (a) {
    void 0 === a && (a = 0);
    this.m_dampingRatio = a;
  };
  l.prototype.b2MouseJoint = function (a) {
    this.__super.b2Joint.call(this, a);
    this.m_target.SetV(a.target);
    var c = this.m_target.x - this.m_bodyB.m_xf.position.x,
      d = this.m_target.y - this.m_bodyB.m_xf.position.y,
      g = this.m_bodyB.m_xf.R;
    this.m_localAnchor.x = c * g.col1.x + d * g.col1.y;
    this.m_localAnchor.y = c * g.col2.x + d * g.col2.y;
    this.m_maxForce = a.maxForce;
    this.m_impulse.SetZero();
    this.m_frequencyHz = a.frequencyHz;
    this.m_dampingRatio = a.dampingRatio;
    this.m_gamma = this.m_beta = 0;
  };
  l.prototype.InitVelocityConstraints = function (a) {
    var c = this.m_bodyB,
      d = c.GetMass(),
      g = 2 * Math.PI * this.m_frequencyHz,
      e = d * g * g;
    this.m_gamma = a.dt * (2 * d * this.m_dampingRatio * g + a.dt * e);
    this.m_gamma = 0 != this.m_gamma ? 1 / this.m_gamma : 0;
    this.m_beta = a.dt * e * this.m_gamma;
    var e = c.m_xf.R,
      d = this.m_localAnchor.x - c.m_sweep.localCenter.x,
      g = this.m_localAnchor.y - c.m_sweep.localCenter.y,
      j = e.col1.x * d + e.col2.x * g,
      g = e.col1.y * d + e.col2.y * g,
      d = j,
      e = c.m_invMass,
      j = c.m_invI;
    this.K1.col1.x = e;
    this.K1.col2.x = 0;
    this.K1.col1.y = 0;
    this.K1.col2.y = e;
    this.K2.col1.x = j * g * g;
    this.K2.col2.x = -j * d * g;
    this.K2.col1.y = -j * d * g;
    this.K2.col2.y = j * d * d;
    this.K.SetM(this.K1);
    this.K.AddM(this.K2);
    this.K.col1.x += this.m_gamma;
    this.K.col2.y += this.m_gamma;
    this.K.GetInverse(this.m_mass);
    this.m_C.x = c.m_sweep.c.x + d - this.m_target.x;
    this.m_C.y = c.m_sweep.c.y + g - this.m_target.y;
    c.m_angularVelocity *= 0.98;
    this.m_impulse.x *= a.dtRatio;
    this.m_impulse.y *= a.dtRatio;
    c.m_linearVelocity.x += e * this.m_impulse.x;
    c.m_linearVelocity.y += e * this.m_impulse.y;
    c.m_angularVelocity += j * (d * this.m_impulse.y - g * this.m_impulse.x);
  };
  l.prototype.SolveVelocityConstraints = function (a) {
    var c = this.m_bodyB,
      d,
      g = 0,
      e = 0;
    d = c.m_xf.R;
    var j = this.m_localAnchor.x - c.m_sweep.localCenter.x,
      f = this.m_localAnchor.y - c.m_sweep.localCenter.y,
      g = d.col1.x * j + d.col2.x * f,
      f = d.col1.y * j + d.col2.y * f,
      j = g,
      g = c.m_linearVelocity.x + -c.m_angularVelocity * f,
      b = c.m_linearVelocity.y + c.m_angularVelocity * j;
    d = this.m_mass;
    g = g + this.m_beta * this.m_C.x + this.m_gamma * this.m_impulse.x;
    e = b + this.m_beta * this.m_C.y + this.m_gamma * this.m_impulse.y;
    b = -(d.col1.x * g + d.col2.x * e);
    e = -(d.col1.y * g + d.col2.y * e);
    d = this.m_impulse.x;
    g = this.m_impulse.y;
    this.m_impulse.x += b;
    this.m_impulse.y += e;
    a = a.dt * this.m_maxForce;
    this.m_impulse.LengthSquared() > a * a &&
      this.m_impulse.Multiply(a / this.m_impulse.Length());
    b = this.m_impulse.x - d;
    e = this.m_impulse.y - g;
    c.m_linearVelocity.x += c.m_invMass * b;
    c.m_linearVelocity.y += c.m_invMass * e;
    c.m_angularVelocity += c.m_invI * (j * e - f * b);
  };
  l.prototype.SolvePositionConstraints = function () {
    return !0;
  };
  Box2D.inherit(C, Box2D.Dynamics.Joints.b2JointDef);
  C.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
  C.b2MouseJointDef = function () {
    Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
    this.target = new e();
  };
  C.prototype.b2MouseJointDef = function () {
    this.__super.b2JointDef.call(this);
    this.type = t.e_mouseJoint;
    this.maxForce = 0;
    this.frequencyHz = 5;
    this.dampingRatio = 0.7;
  };
  Box2D.inherit(F, Box2D.Dynamics.Joints.b2Joint);
  F.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
  F.b2PrismaticJoint = function () {
    Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
    this.m_localAnchor1 = new e();
    this.m_localAnchor2 = new e();
    this.m_localXAxis1 = new e();
    this.m_localYAxis1 = new e();
    this.m_axis = new e();
    this.m_perp = new e();
    this.m_K = new p();
    this.m_impulse = new j();
  };
  F.prototype.GetAnchorA = function () {
    return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
  };
  F.prototype.GetAnchorB = function () {
    return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
  };
  F.prototype.GetReactionForce = function (a) {
    void 0 === a && (a = 0);
    return new e(
      a *
        (this.m_impulse.x * this.m_perp.x +
          (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.x),
      a *
        (this.m_impulse.x * this.m_perp.y +
          (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.y)
    );
  };
  F.prototype.GetReactionTorque = function (a) {
    void 0 === a && (a = 0);
    return a * this.m_impulse.y;
  };
  F.prototype.GetJointTranslation = function () {
    var a = this.m_bodyA,
      c = this.m_bodyB,
      d = a.GetWorldPoint(this.m_localAnchor1),
      g = c.GetWorldPoint(this.m_localAnchor2),
      c = g.x - d.x,
      d = g.y - d.y,
      a = a.GetWorldVector(this.m_localXAxis1);
    return a.x * c + a.y * d;
  };
  F.prototype.GetJointSpeed = function () {
    var a = this.m_bodyA,
      c = this.m_bodyB,
      d;
    d = a.m_xf.R;
    var g = this.m_localAnchor1.x - a.m_sweep.localCenter.x,
      e = this.m_localAnchor1.y - a.m_sweep.localCenter.y,
      j = d.col1.x * g + d.col2.x * e,
      e = d.col1.y * g + d.col2.y * e,
      g = j;
    d = c.m_xf.R;
    var f = this.m_localAnchor2.x - c.m_sweep.localCenter.x,
      b = this.m_localAnchor2.y - c.m_sweep.localCenter.y,
      j = d.col1.x * f + d.col2.x * b,
      b = d.col1.y * f + d.col2.y * b,
      f = j;
    d = c.m_sweep.c.x + f - (a.m_sweep.c.x + g);
    var j = c.m_sweep.c.y + b - (a.m_sweep.c.y + e),
      k = a.GetWorldVector(this.m_localXAxis1),
      m = a.m_linearVelocity,
      l = c.m_linearVelocity,
      a = a.m_angularVelocity,
      c = c.m_angularVelocity;
    return (
      d * -a * k.y +
      j * a * k.x +
      (k.x * (l.x + -c * b - m.x - -a * e) + k.y * (l.y + c * f - m.y - a * g))
    );
  };
  F.prototype.IsLimitEnabled = function () {
    return this.m_enableLimit;
  };
  F.prototype.EnableLimit = function (a) {
    this.m_bodyA.SetAwake(!0);
    this.m_bodyB.SetAwake(!0);
    this.m_enableLimit = a;
  };
  F.prototype.GetLowerLimit = function () {
    return this.m_lowerTranslation;
  };
  F.prototype.GetUpperLimit = function () {
    return this.m_upperTranslation;
  };
  F.prototype.SetLimits = function (a, c) {
    void 0 === a && (a = 0);
    void 0 === c && (c = 0);
    this.m_bodyA.SetAwake(!0);
    this.m_bodyB.SetAwake(!0);
    this.m_lowerTranslation = a;
    this.m_upperTranslation = c;
  };
  F.prototype.IsMotorEnabled = function () {
    return this.m_enableMotor;
  };
  F.prototype.EnableMotor = function (a) {
    this.m_bodyA.SetAwake(!0);
    this.m_bodyB.SetAwake(!0);
    this.m_enableMotor = a;
  };
  F.prototype.SetMotorSpeed = function (a) {
    void 0 === a && (a = 0);
    this.m_bodyA.SetAwake(!0);
    this.m_bodyB.SetAwake(!0);
    this.m_motorSpeed = a;
  };
  F.prototype.GetMotorSpeed = function () {
    return this.m_motorSpeed;
  };
  F.prototype.SetMaxMotorForce = function (a) {
    void 0 === a && (a = 0);
    this.m_bodyA.SetAwake(!0);
    this.m_bodyB.SetAwake(!0);
    this.m_maxMotorForce = a;
  };
  F.prototype.GetMotorForce = function () {
    return this.m_motorImpulse;
  };
  F.prototype.b2PrismaticJoint = function (a) {
    this.__super.b2Joint.call(this, a);
    this.m_localAnchor1.SetV(a.localAnchorA);
    this.m_localAnchor2.SetV(a.localAnchorB);
    this.m_localXAxis1.SetV(a.localAxisA);
    this.m_localYAxis1.x = -this.m_localXAxis1.y;
    this.m_localYAxis1.y = this.m_localXAxis1.x;
    this.m_refAngle = a.referenceAngle;
    this.m_impulse.SetZero();
    this.m_motorImpulse = this.m_motorMass = 0;
    this.m_lowerTranslation = a.lowerTranslation;
    this.m_upperTranslation = a.upperTranslation;
    this.m_maxMotorForce = a.maxMotorForce;
    this.m_motorSpeed = a.motorSpeed;
    this.m_enableLimit = a.enableLimit;
    this.m_enableMotor = a.enableMotor;
    this.m_limitState = t.e_inactiveLimit;
    this.m_axis.SetZero();
    this.m_perp.SetZero();
  };
  F.prototype.InitVelocityConstraints = function (a) {
    var c = this.m_bodyA,
      d = this.m_bodyB,
      g,
      e = 0;
    this.m_localCenterA.SetV(c.GetLocalCenter());
    this.m_localCenterB.SetV(d.GetLocalCenter());
    var j = c.GetTransform();
    d.GetTransform();
    g = c.m_xf.R;
    var f = this.m_localAnchor1.x - this.m_localCenterA.x,
      b = this.m_localAnchor1.y - this.m_localCenterA.y,
      e = g.col1.x * f + g.col2.x * b,
      b = g.col1.y * f + g.col2.y * b,
      f = e;
    g = d.m_xf.R;
    var k = this.m_localAnchor2.x - this.m_localCenterB.x,
      l = this.m_localAnchor2.y - this.m_localCenterB.y,
      e = g.col1.x * k + g.col2.x * l,
      l = g.col1.y * k + g.col2.y * l,
      k = e;
    g = d.m_sweep.c.x + k - c.m_sweep.c.x - f;
    e = d.m_sweep.c.y + l - c.m_sweep.c.y - b;
    this.m_invMassA = c.m_invMass;
    this.m_invMassB = d.m_invMass;
    this.m_invIA = c.m_invI;
    this.m_invIB = d.m_invI;
    this.m_axis.SetV(m.MulMV(j.R, this.m_localXAxis1));
    this.m_a1 = (g + f) * this.m_axis.y - (e + b) * this.m_axis.x;
    this.m_a2 = k * this.m_axis.y - l * this.m_axis.x;
    this.m_motorMass =
      this.m_invMassA +
      this.m_invMassB +
      this.m_invIA * this.m_a1 * this.m_a1 +
      this.m_invIB * this.m_a2 * this.m_a2;
    this.m_motorMass > Number.MIN_VALUE &&
      (this.m_motorMass = 1 / this.m_motorMass);
    this.m_perp.SetV(m.MulMV(j.R, this.m_localYAxis1));
    this.m_s1 = (g + f) * this.m_perp.y - (e + b) * this.m_perp.x;
    this.m_s2 = k * this.m_perp.y - l * this.m_perp.x;
    j = this.m_invMassA;
    f = this.m_invMassB;
    b = this.m_invIA;
    k = this.m_invIB;
    this.m_K.col1.x =
      j + f + b * this.m_s1 * this.m_s1 + k * this.m_s2 * this.m_s2;
    this.m_K.col1.y = b * this.m_s1 + k * this.m_s2;
    this.m_K.col1.z = b * this.m_s1 * this.m_a1 + k * this.m_s2 * this.m_a2;
    this.m_K.col2.x = this.m_K.col1.y;
    this.m_K.col2.y = b + k;
    this.m_K.col2.z = b * this.m_a1 + k * this.m_a2;
    this.m_K.col3.x = this.m_K.col1.z;
    this.m_K.col3.y = this.m_K.col2.z;
    this.m_K.col3.z =
      j + f + b * this.m_a1 * this.m_a1 + k * this.m_a2 * this.m_a2;
    this.m_enableLimit
      ? ((g = this.m_axis.x * g + this.m_axis.y * e),
        m.Abs(this.m_upperTranslation - this.m_lowerTranslation) <
        2 * n.b2_linearSlop
          ? (this.m_limitState = t.e_equalLimits)
          : g <= this.m_lowerTranslation
          ? this.m_limitState != t.e_atLowerLimit &&
            ((this.m_limitState = t.e_atLowerLimit), (this.m_impulse.z = 0))
          : g >= this.m_upperTranslation
          ? this.m_limitState != t.e_atUpperLimit &&
            ((this.m_limitState = t.e_atUpperLimit), (this.m_impulse.z = 0))
          : ((this.m_limitState = t.e_inactiveLimit), (this.m_impulse.z = 0)))
      : (this.m_limitState = t.e_inactiveLimit);
    !1 == this.m_enableMotor && (this.m_motorImpulse = 0);
    a.warmStarting
      ? ((this.m_impulse.x *= a.dtRatio),
        (this.m_impulse.y *= a.dtRatio),
        (this.m_motorImpulse *= a.dtRatio),
        (a =
          this.m_impulse.x * this.m_perp.x +
          (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.x),
        (g =
          this.m_impulse.x * this.m_perp.y +
          (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.y),
        (e =
          this.m_impulse.x * this.m_s1 +
          this.m_impulse.y +
          (this.m_motorImpulse + this.m_impulse.z) * this.m_a1),
        (j =
          this.m_impulse.x * this.m_s2 +
          this.m_impulse.y +
          (this.m_motorImpulse + this.m_impulse.z) * this.m_a2),
        (c.m_linearVelocity.x -= this.m_invMassA * a),
        (c.m_linearVelocity.y -= this.m_invMassA * g),
        (c.m_angularVelocity -= this.m_invIA * e),
        (d.m_linearVelocity.x += this.m_invMassB * a),
        (d.m_linearVelocity.y += this.m_invMassB * g),
        (d.m_angularVelocity += this.m_invIB * j))
      : (this.m_impulse.SetZero(), (this.m_motorImpulse = 0));
  };
  F.prototype.SolveVelocityConstraints = function (a) {
    var c = this.m_bodyA,
      d = this.m_bodyB,
      g = c.m_linearVelocity,
      l = c.m_angularVelocity,
      n = d.m_linearVelocity,
      f = d.m_angularVelocity,
      b = 0,
      k = 0,
      v = 0,
      r = 0;
    this.m_enableMotor &&
      this.m_limitState != t.e_equalLimits &&
      ((r =
        this.m_motorMass *
        (this.m_motorSpeed -
          (this.m_axis.x * (n.x - g.x) +
            this.m_axis.y * (n.y - g.y) +
            this.m_a2 * f -
            this.m_a1 * l))),
      (b = this.m_motorImpulse),
      (a = a.dt * this.m_maxMotorForce),
      (this.m_motorImpulse = m.Clamp(this.m_motorImpulse + r, -a, a)),
      (r = this.m_motorImpulse - b),
      (b = r * this.m_axis.x),
      (k = r * this.m_axis.y),
      (v = r * this.m_a1),
      (r *= this.m_a2),
      (g.x -= this.m_invMassA * b),
      (g.y -= this.m_invMassA * k),
      (l -= this.m_invIA * v),
      (n.x += this.m_invMassB * b),
      (n.y += this.m_invMassB * k),
      (f += this.m_invIB * r));
    v =
      this.m_perp.x * (n.x - g.x) +
      this.m_perp.y * (n.y - g.y) +
      this.m_s2 * f -
      this.m_s1 * l;
    k = f - l;
    this.m_enableLimit && this.m_limitState != t.e_inactiveLimit
      ? ((a =
          this.m_axis.x * (n.x - g.x) +
          this.m_axis.y * (n.y - g.y) +
          this.m_a2 * f -
          this.m_a1 * l),
        (b = this.m_impulse.Copy()),
        (a = this.m_K.Solve33(new j(), -v, -k, -a)),
        this.m_impulse.Add(a),
        this.m_limitState == t.e_atLowerLimit
          ? (this.m_impulse.z = m.Max(this.m_impulse.z, 0))
          : this.m_limitState == t.e_atUpperLimit &&
            (this.m_impulse.z = m.Min(this.m_impulse.z, 0)),
        (v = -v - (this.m_impulse.z - b.z) * this.m_K.col3.x),
        (k = -k - (this.m_impulse.z - b.z) * this.m_K.col3.y),
        (k = this.m_K.Solve22(new e(), v, k)),
        (k.x += b.x),
        (k.y += b.y),
        (this.m_impulse.x = k.x),
        (this.m_impulse.y = k.y),
        (a.x = this.m_impulse.x - b.x),
        (a.y = this.m_impulse.y - b.y),
        (a.z = this.m_impulse.z - b.z),
        (b = a.x * this.m_perp.x + a.z * this.m_axis.x),
        (k = a.x * this.m_perp.y + a.z * this.m_axis.y),
        (v = a.x * this.m_s1 + a.y + a.z * this.m_a1),
        (r = a.x * this.m_s2 + a.y + a.z * this.m_a2))
      : ((a = this.m_K.Solve22(new e(), -v, -k)),
        (this.m_impulse.x += a.x),
        (this.m_impulse.y += a.y),
        (b = a.x * this.m_perp.x),
        (k = a.x * this.m_perp.y),
        (v = a.x * this.m_s1 + a.y),
        (r = a.x * this.m_s2 + a.y));
    g.x -= this.m_invMassA * b;
    g.y -= this.m_invMassA * k;
    l -= this.m_invIA * v;
    n.x += this.m_invMassB * b;
    n.y += this.m_invMassB * k;
    f += this.m_invIB * r;
    c.m_linearVelocity.SetV(g);
    c.m_angularVelocity = l;
    d.m_linearVelocity.SetV(n);
    d.m_angularVelocity = f;
  };
  F.prototype.SolvePositionConstraints = function () {
    var a = this.m_bodyA,
      c = this.m_bodyB,
      d = a.m_sweep.c,
      g = a.m_sweep.a,
      l = c.m_sweep.c,
      p = c.m_sweep.a,
      f,
      b = 0,
      k = 0,
      v = 0,
      t = (b = f = 0),
      q = 0,
      k = !1,
      x = 0,
      w = r.FromAngle(g),
      A = r.FromAngle(p);
    f = w;
    var q = this.m_localAnchor1.x - this.m_localCenterA.x,
      z = this.m_localAnchor1.y - this.m_localCenterA.y,
      b = f.col1.x * q + f.col2.x * z,
      z = f.col1.y * q + f.col2.y * z,
      q = b;
    f = A;
    A = this.m_localAnchor2.x - this.m_localCenterB.x;
    v = this.m_localAnchor2.y - this.m_localCenterB.y;
    b = f.col1.x * A + f.col2.x * v;
    v = f.col1.y * A + f.col2.y * v;
    A = b;
    f = l.x + A - d.x - q;
    b = l.y + v - d.y - z;
    if (this.m_enableLimit) {
      this.m_axis = m.MulMV(w, this.m_localXAxis1);
      this.m_a1 = (f + q) * this.m_axis.y - (b + z) * this.m_axis.x;
      this.m_a2 = A * this.m_axis.y - v * this.m_axis.x;
      var B = this.m_axis.x * f + this.m_axis.y * b;
      m.Abs(this.m_upperTranslation - this.m_lowerTranslation) <
      2 * n.b2_linearSlop
        ? ((x = m.Clamp(
            B,
            -n.b2_maxLinearCorrection,
            n.b2_maxLinearCorrection
          )),
          (t = m.Abs(B)),
          (k = !0))
        : B <= this.m_lowerTranslation
        ? ((x = m.Clamp(
            B - this.m_lowerTranslation + n.b2_linearSlop,
            -n.b2_maxLinearCorrection,
            0
          )),
          (t = this.m_lowerTranslation - B),
          (k = !0))
        : B >= this.m_upperTranslation &&
          ((x = m.Clamp(
            B - this.m_upperTranslation + n.b2_linearSlop,
            0,
            n.b2_maxLinearCorrection
          )),
          (t = B - this.m_upperTranslation),
          (k = !0));
    }
    this.m_perp = m.MulMV(w, this.m_localYAxis1);
    this.m_s1 = (f + q) * this.m_perp.y - (b + z) * this.m_perp.x;
    this.m_s2 = A * this.m_perp.y - v * this.m_perp.x;
    w = new j();
    z = this.m_perp.x * f + this.m_perp.y * b;
    A = p - g - this.m_refAngle;
    t = m.Max(t, m.Abs(z));
    q = m.Abs(A);
    k
      ? ((k = this.m_invMassA),
        (v = this.m_invMassB),
        (f = this.m_invIA),
        (b = this.m_invIB),
        (this.m_K.col1.x =
          k + v + f * this.m_s1 * this.m_s1 + b * this.m_s2 * this.m_s2),
        (this.m_K.col1.y = f * this.m_s1 + b * this.m_s2),
        (this.m_K.col1.z =
          f * this.m_s1 * this.m_a1 + b * this.m_s2 * this.m_a2),
        (this.m_K.col2.x = this.m_K.col1.y),
        (this.m_K.col2.y = f + b),
        (this.m_K.col2.z = f * this.m_a1 + b * this.m_a2),
        (this.m_K.col3.x = this.m_K.col1.z),
        (this.m_K.col3.y = this.m_K.col2.z),
        (this.m_K.col3.z =
          k + v + f * this.m_a1 * this.m_a1 + b * this.m_a2 * this.m_a2),
        this.m_K.Solve33(w, -z, -A, -x))
      : ((k = this.m_invMassA),
        (v = this.m_invMassB),
        (f = this.m_invIA),
        (b = this.m_invIB),
        (x = f * this.m_s1 + b * this.m_s2),
        (B = f + b),
        this.m_K.col1.Set(
          k + v + f * this.m_s1 * this.m_s1 + b * this.m_s2 * this.m_s2,
          x,
          0
        ),
        this.m_K.col2.Set(x, B, 0),
        (x = this.m_K.Solve22(new e(), -z, -A)),
        (w.x = x.x),
        (w.y = x.y),
        (w.z = 0));
    x = w.x * this.m_perp.x + w.z * this.m_axis.x;
    k = w.x * this.m_perp.y + w.z * this.m_axis.y;
    z = w.x * this.m_s1 + w.y + w.z * this.m_a1;
    w = w.x * this.m_s2 + w.y + w.z * this.m_a2;
    d.x -= this.m_invMassA * x;
    d.y -= this.m_invMassA * k;
    g -= this.m_invIA * z;
    l.x += this.m_invMassB * x;
    l.y += this.m_invMassB * k;
    p += this.m_invIB * w;
    a.m_sweep.a = g;
    c.m_sweep.a = p;
    a.SynchronizeTransform();
    c.SynchronizeTransform();
    return t <= n.b2_linearSlop && q <= n.b2_angularSlop;
  };
  Box2D.inherit(H, Box2D.Dynamics.Joints.b2JointDef);
  H.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
  H.b2PrismaticJointDef = function () {
    Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
    this.localAnchorA = new e();
    this.localAnchorB = new e();
    this.localAxisA = new e();
  };
  H.prototype.b2PrismaticJointDef = function () {
    this.__super.b2JointDef.call(this);
    this.type = t.e_prismaticJoint;
    this.localAxisA.Set(1, 0);
    this.referenceAngle = 0;
    this.enableLimit = !1;
    this.upperTranslation = this.lowerTranslation = 0;
    this.enableMotor = !1;
    this.motorSpeed = this.maxMotorForce = 0;
  };
  H.prototype.Initialize = function (a, c, d, e) {
    this.bodyA = a;
    this.bodyB = c;
    this.localAnchorA = this.bodyA.GetLocalPoint(d);
    this.localAnchorB = this.bodyB.GetLocalPoint(d);
    this.localAxisA = this.bodyA.GetLocalVector(e);
    this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle();
  };
  Box2D.inherit(B, Box2D.Dynamics.Joints.b2Joint);
  B.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
  B.b2PulleyJoint = function () {
    Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
    this.m_groundAnchor1 = new e();
    this.m_groundAnchor2 = new e();
    this.m_localAnchor1 = new e();
    this.m_localAnchor2 = new e();
    this.m_u1 = new e();
    this.m_u2 = new e();
  };
  B.prototype.GetAnchorA = function () {
    return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
  };
  B.prototype.GetAnchorB = function () {
    return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
  };
  B.prototype.GetReactionForce = function (a) {
    void 0 === a && (a = 0);
    return new e(
      a * this.m_impulse * this.m_u2.x,
      a * this.m_impulse * this.m_u2.y
    );
  };
  B.prototype.GetReactionTorque = function () {
    return 0;
  };
  B.prototype.GetGroundAnchorA = function () {
    var a = this.m_ground.m_xf.position.Copy();
    a.Add(this.m_groundAnchor1);
    return a;
  };
  B.prototype.GetGroundAnchorB = function () {
    var a = this.m_ground.m_xf.position.Copy();
    a.Add(this.m_groundAnchor2);
    return a;
  };
  B.prototype.GetLength1 = function () {
    var a = this.m_bodyA.GetWorldPoint(this.m_localAnchor1),
      c = a.x - (this.m_ground.m_xf.position.x + this.m_groundAnchor1.x),
      a = a.y - (this.m_ground.m_xf.position.y + this.m_groundAnchor1.y);
    return Math.sqrt(c * c + a * a);
  };
  B.prototype.GetLength2 = function () {
    var a = this.m_bodyB.GetWorldPoint(this.m_localAnchor2),
      c = a.x - (this.m_ground.m_xf.position.x + this.m_groundAnchor2.x),
      a = a.y - (this.m_ground.m_xf.position.y + this.m_groundAnchor2.y);
    return Math.sqrt(c * c + a * a);
  };
  B.prototype.GetRatio = function () {
    return this.m_ratio;
  };
  B.prototype.b2PulleyJoint = function (a) {
    this.__super.b2Joint.call(this, a);
    this.m_ground = this.m_bodyA.m_world.m_groundBody;
    this.m_groundAnchor1.x = a.groundAnchorA.x - this.m_ground.m_xf.position.x;
    this.m_groundAnchor1.y = a.groundAnchorA.y - this.m_ground.m_xf.position.y;
    this.m_groundAnchor2.x = a.groundAnchorB.x - this.m_ground.m_xf.position.x;
    this.m_groundAnchor2.y = a.groundAnchorB.y - this.m_ground.m_xf.position.y;
    this.m_localAnchor1.SetV(a.localAnchorA);
    this.m_localAnchor2.SetV(a.localAnchorB);
    this.m_ratio = a.ratio;
    this.m_constant = a.lengthA + this.m_ratio * a.lengthB;
    this.m_maxLength1 = m.Min(
      a.maxLengthA,
      this.m_constant - this.m_ratio * B.b2_minPulleyLength
    );
    this.m_maxLength2 = m.Min(
      a.maxLengthB,
      (this.m_constant - B.b2_minPulleyLength) / this.m_ratio
    );
    this.m_limitImpulse2 = this.m_limitImpulse1 = this.m_impulse = 0;
  };
  B.prototype.InitVelocityConstraints = function (a) {
    var c = this.m_bodyA,
      d = this.m_bodyB,
      e;
    e = c.m_xf.R;
    var j = this.m_localAnchor1.x - c.m_sweep.localCenter.x,
      m = this.m_localAnchor1.y - c.m_sweep.localCenter.y,
      f = e.col1.x * j + e.col2.x * m,
      m = e.col1.y * j + e.col2.y * m,
      j = f;
    e = d.m_xf.R;
    var b = this.m_localAnchor2.x - d.m_sweep.localCenter.x,
      k = this.m_localAnchor2.y - d.m_sweep.localCenter.y,
      f = e.col1.x * b + e.col2.x * k,
      k = e.col1.y * b + e.col2.y * k,
      b = f;
    e = d.m_sweep.c.x + b;
    var f = d.m_sweep.c.y + k,
      l = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x,
      r = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y;
    this.m_u1.Set(
      c.m_sweep.c.x +
        j -
        (this.m_ground.m_xf.position.x + this.m_groundAnchor1.x),
      c.m_sweep.c.y +
        m -
        (this.m_ground.m_xf.position.y + this.m_groundAnchor1.y)
    );
    this.m_u2.Set(e - l, f - r);
    e = this.m_u1.Length();
    f = this.m_u2.Length();
    e > n.b2_linearSlop ? this.m_u1.Multiply(1 / e) : this.m_u1.SetZero();
    f > n.b2_linearSlop ? this.m_u2.Multiply(1 / f) : this.m_u2.SetZero();
    0 < this.m_constant - e - this.m_ratio * f
      ? ((this.m_state = t.e_inactiveLimit), (this.m_impulse = 0))
      : (this.m_state = t.e_atUpperLimit);
    e < this.m_maxLength1
      ? ((this.m_limitState1 = t.e_inactiveLimit), (this.m_limitImpulse1 = 0))
      : (this.m_limitState1 = t.e_atUpperLimit);
    f < this.m_maxLength2
      ? ((this.m_limitState2 = t.e_inactiveLimit), (this.m_limitImpulse2 = 0))
      : (this.m_limitState2 = t.e_atUpperLimit);
    e = j * this.m_u1.y - m * this.m_u1.x;
    f = b * this.m_u2.y - k * this.m_u2.x;
    this.m_limitMass1 = c.m_invMass + c.m_invI * e * e;
    this.m_limitMass2 = d.m_invMass + d.m_invI * f * f;
    this.m_pulleyMass =
      this.m_limitMass1 + this.m_ratio * this.m_ratio * this.m_limitMass2;
    this.m_limitMass1 = 1 / this.m_limitMass1;
    this.m_limitMass2 = 1 / this.m_limitMass2;
    this.m_pulleyMass = 1 / this.m_pulleyMass;
    a.warmStarting
      ? ((this.m_impulse *= a.dtRatio),
        (this.m_limitImpulse1 *= a.dtRatio),
        (this.m_limitImpulse2 *= a.dtRatio),
        (a = (-this.m_impulse - this.m_limitImpulse1) * this.m_u1.x),
        (e = (-this.m_impulse - this.m_limitImpulse1) * this.m_u1.y),
        (f =
          (-this.m_ratio * this.m_impulse - this.m_limitImpulse2) *
          this.m_u2.x),
        (l =
          (-this.m_ratio * this.m_impulse - this.m_limitImpulse2) *
          this.m_u2.y),
        (c.m_linearVelocity.x += c.m_invMass * a),
        (c.m_linearVelocity.y += c.m_invMass * e),
        (c.m_angularVelocity += c.m_invI * (j * e - m * a)),
        (d.m_linearVelocity.x += d.m_invMass * f),
        (d.m_linearVelocity.y += d.m_invMass * l),
        (d.m_angularVelocity += d.m_invI * (b * l - k * f)))
      : (this.m_limitImpulse2 = this.m_limitImpulse1 = this.m_impulse = 0);
  };
  B.prototype.SolveVelocityConstraints = function () {
    var a = this.m_bodyA,
      c = this.m_bodyB,
      d;
    d = a.m_xf.R;
    var e = this.m_localAnchor1.x - a.m_sweep.localCenter.x,
      j = this.m_localAnchor1.y - a.m_sweep.localCenter.y,
      l = d.col1.x * e + d.col2.x * j,
      j = d.col1.y * e + d.col2.y * j,
      e = l;
    d = c.m_xf.R;
    var f = this.m_localAnchor2.x - c.m_sweep.localCenter.x,
      b = this.m_localAnchor2.y - c.m_sweep.localCenter.y,
      l = d.col1.x * f + d.col2.x * b,
      b = d.col1.y * f + d.col2.y * b,
      f = l,
      k = (l = d = 0),
      n = 0;
    d = n = d = n = k = l = d = 0;
    this.m_state == t.e_atUpperLimit &&
      ((d = a.m_linearVelocity.x + -a.m_angularVelocity * j),
      (l = a.m_linearVelocity.y + a.m_angularVelocity * e),
      (k = c.m_linearVelocity.x + -c.m_angularVelocity * b),
      (n = c.m_linearVelocity.y + c.m_angularVelocity * f),
      (d =
        -(this.m_u1.x * d + this.m_u1.y * l) -
        this.m_ratio * (this.m_u2.x * k + this.m_u2.y * n)),
      (n = this.m_pulleyMass * -d),
      (d = this.m_impulse),
      (this.m_impulse = m.Max(0, this.m_impulse + n)),
      (n = this.m_impulse - d),
      (d = -n * this.m_u1.x),
      (l = -n * this.m_u1.y),
      (k = -this.m_ratio * n * this.m_u2.x),
      (n = -this.m_ratio * n * this.m_u2.y),
      (a.m_linearVelocity.x += a.m_invMass * d),
      (a.m_linearVelocity.y += a.m_invMass * l),
      (a.m_angularVelocity += a.m_invI * (e * l - j * d)),
      (c.m_linearVelocity.x += c.m_invMass * k),
      (c.m_linearVelocity.y += c.m_invMass * n),
      (c.m_angularVelocity += c.m_invI * (f * n - b * k)));
    this.m_limitState1 == t.e_atUpperLimit &&
      ((d = a.m_linearVelocity.x + -a.m_angularVelocity * j),
      (l = a.m_linearVelocity.y + a.m_angularVelocity * e),
      (d = -(this.m_u1.x * d + this.m_u1.y * l)),
      (n = -this.m_limitMass1 * d),
      (d = this.m_limitImpulse1),
      (this.m_limitImpulse1 = m.Max(0, this.m_limitImpulse1 + n)),
      (n = this.m_limitImpulse1 - d),
      (d = -n * this.m_u1.x),
      (l = -n * this.m_u1.y),
      (a.m_linearVelocity.x += a.m_invMass * d),
      (a.m_linearVelocity.y += a.m_invMass * l),
      (a.m_angularVelocity += a.m_invI * (e * l - j * d)));
    this.m_limitState2 == t.e_atUpperLimit &&
      ((k = c.m_linearVelocity.x + -c.m_angularVelocity * b),
      (n = c.m_linearVelocity.y + c.m_angularVelocity * f),
      (d = -(this.m_u2.x * k + this.m_u2.y * n)),
      (n = -this.m_limitMass2 * d),
      (d = this.m_limitImpulse2),
      (this.m_limitImpulse2 = m.Max(0, this.m_limitImpulse2 + n)),
      (n = this.m_limitImpulse2 - d),
      (k = -n * this.m_u2.x),
      (n = -n * this.m_u2.y),
      (c.m_linearVelocity.x += c.m_invMass * k),
      (c.m_linearVelocity.y += c.m_invMass * n),
      (c.m_angularVelocity += c.m_invI * (f * n - b * k)));
  };
  B.prototype.SolvePositionConstraints = function () {
    var a = this.m_bodyA,
      c = this.m_bodyB,
      d,
      e = this.m_ground.m_xf.position.x + this.m_groundAnchor1.x,
      j = this.m_ground.m_xf.position.y + this.m_groundAnchor1.y,
      l = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x,
      f = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y,
      b = 0,
      k = 0,
      v = 0,
      r = 0,
      p = (d = 0),
      q = 0,
      w = 0,
      x = (p = w = d = p = d = 0);
    this.m_state == t.e_atUpperLimit &&
      ((d = a.m_xf.R),
      (b = this.m_localAnchor1.x - a.m_sweep.localCenter.x),
      (k = this.m_localAnchor1.y - a.m_sweep.localCenter.y),
      (p = d.col1.x * b + d.col2.x * k),
      (k = d.col1.y * b + d.col2.y * k),
      (b = p),
      (d = c.m_xf.R),
      (v = this.m_localAnchor2.x - c.m_sweep.localCenter.x),
      (r = this.m_localAnchor2.y - c.m_sweep.localCenter.y),
      (p = d.col1.x * v + d.col2.x * r),
      (r = d.col1.y * v + d.col2.y * r),
      (v = p),
      (d = a.m_sweep.c.x + b),
      (p = a.m_sweep.c.y + k),
      (q = c.m_sweep.c.x + v),
      (w = c.m_sweep.c.y + r),
      this.m_u1.Set(d - e, p - j),
      this.m_u2.Set(q - l, w - f),
      (d = this.m_u1.Length()),
      (p = this.m_u2.Length()),
      d > n.b2_linearSlop ? this.m_u1.Multiply(1 / d) : this.m_u1.SetZero(),
      p > n.b2_linearSlop ? this.m_u2.Multiply(1 / p) : this.m_u2.SetZero(),
      (d = this.m_constant - d - this.m_ratio * p),
      (x = m.Max(x, -d)),
      (d = m.Clamp(d + n.b2_linearSlop, -n.b2_maxLinearCorrection, 0)),
      (w = -this.m_pulleyMass * d),
      (d = -w * this.m_u1.x),
      (p = -w * this.m_u1.y),
      (q = -this.m_ratio * w * this.m_u2.x),
      (w = -this.m_ratio * w * this.m_u2.y),
      (a.m_sweep.c.x += a.m_invMass * d),
      (a.m_sweep.c.y += a.m_invMass * p),
      (a.m_sweep.a += a.m_invI * (b * p - k * d)),
      (c.m_sweep.c.x += c.m_invMass * q),
      (c.m_sweep.c.y += c.m_invMass * w),
      (c.m_sweep.a += c.m_invI * (v * w - r * q)),
      a.SynchronizeTransform(),
      c.SynchronizeTransform());
    this.m_limitState1 == t.e_atUpperLimit &&
      ((d = a.m_xf.R),
      (b = this.m_localAnchor1.x - a.m_sweep.localCenter.x),
      (k = this.m_localAnchor1.y - a.m_sweep.localCenter.y),
      (p = d.col1.x * b + d.col2.x * k),
      (k = d.col1.y * b + d.col2.y * k),
      (b = p),
      (d = a.m_sweep.c.x + b),
      (p = a.m_sweep.c.y + k),
      this.m_u1.Set(d - e, p - j),
      (d = this.m_u1.Length()),
      d > n.b2_linearSlop
        ? ((this.m_u1.x *= 1 / d), (this.m_u1.y *= 1 / d))
        : this.m_u1.SetZero(),
      (d = this.m_maxLength1 - d),
      (x = m.Max(x, -d)),
      (d = m.Clamp(d + n.b2_linearSlop, -n.b2_maxLinearCorrection, 0)),
      (w = -this.m_limitMass1 * d),
      (d = -w * this.m_u1.x),
      (p = -w * this.m_u1.y),
      (a.m_sweep.c.x += a.m_invMass * d),
      (a.m_sweep.c.y += a.m_invMass * p),
      (a.m_sweep.a += a.m_invI * (b * p - k * d)),
      a.SynchronizeTransform());
    this.m_limitState2 == t.e_atUpperLimit &&
      ((d = c.m_xf.R),
      (v = this.m_localAnchor2.x - c.m_sweep.localCenter.x),
      (r = this.m_localAnchor2.y - c.m_sweep.localCenter.y),
      (p = d.col1.x * v + d.col2.x * r),
      (r = d.col1.y * v + d.col2.y * r),
      (v = p),
      (q = c.m_sweep.c.x + v),
      (w = c.m_sweep.c.y + r),
      this.m_u2.Set(q - l, w - f),
      (p = this.m_u2.Length()),
      p > n.b2_linearSlop
        ? ((this.m_u2.x *= 1 / p), (this.m_u2.y *= 1 / p))
        : this.m_u2.SetZero(),
      (d = this.m_maxLength2 - p),
      (x = m.Max(x, -d)),
      (d = m.Clamp(d + n.b2_linearSlop, -n.b2_maxLinearCorrection, 0)),
      (w = -this.m_limitMass2 * d),
      (q = -w * this.m_u2.x),
      (w = -w * this.m_u2.y),
      (c.m_sweep.c.x += c.m_invMass * q),
      (c.m_sweep.c.y += c.m_invMass * w),
      (c.m_sweep.a += c.m_invI * (v * w - r * q)),
      c.SynchronizeTransform());
    return x < n.b2_linearSlop;
  };
  Box2D.postDefs.push(function () {
    Box2D.Dynamics.Joints.b2PulleyJoint.b2_minPulleyLength = 2;
  });
  Box2D.inherit(M, Box2D.Dynamics.Joints.b2JointDef);
  M.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
  M.b2PulleyJointDef = function () {
    Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
    this.groundAnchorA = new e();
    this.groundAnchorB = new e();
    this.localAnchorA = new e();
    this.localAnchorB = new e();
  };
  M.prototype.b2PulleyJointDef = function () {
    this.__super.b2JointDef.call(this);
    this.type = t.e_pulleyJoint;
    this.groundAnchorA.Set(-1, 1);
    this.groundAnchorB.Set(1, 1);
    this.localAnchorA.Set(-1, 0);
    this.localAnchorB.Set(1, 0);
    this.maxLengthB = this.lengthB = this.maxLengthA = this.lengthA = 0;
    this.ratio = 1;
    this.collideConnected = !0;
  };
  M.prototype.Initialize = function (a, c, d, e, j, m, f) {
    void 0 === f && (f = 0);
    this.bodyA = a;
    this.bodyB = c;
    this.groundAnchorA.SetV(d);
    this.groundAnchorB.SetV(e);
    this.localAnchorA = this.bodyA.GetLocalPoint(j);
    this.localAnchorB = this.bodyB.GetLocalPoint(m);
    a = j.x - d.x;
    d = j.y - d.y;
    this.lengthA = Math.sqrt(a * a + d * d);
    d = m.x - e.x;
    e = m.y - e.y;
    this.lengthB = Math.sqrt(d * d + e * e);
    this.ratio = f;
    f = this.lengthA + this.ratio * this.lengthB;
    this.maxLengthA = f - this.ratio * B.b2_minPulleyLength;
    this.maxLengthB = (f - B.b2_minPulleyLength) / this.ratio;
  };
  Box2D.inherit(E, Box2D.Dynamics.Joints.b2Joint);
  E.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
  E.b2RevoluteJoint = function () {
    Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
    this.K = new r();
    this.K1 = new r();
    this.K2 = new r();
    this.K3 = new r();
    this.impulse3 = new j();
    this.impulse2 = new e();
    this.reduced = new e();
    this.m_localAnchor1 = new e();
    this.m_localAnchor2 = new e();
    this.m_impulse = new j();
    this.m_mass = new p();
  };
  E.prototype.GetAnchorA = function () {
    return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
  };
  E.prototype.GetAnchorB = function () {
    return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
  };
  E.prototype.GetReactionForce = function (a) {
    void 0 === a && (a = 0);
    return new e(a * this.m_impulse.x, a * this.m_impulse.y);
  };
  E.prototype.GetReactionTorque = function (a) {
    void 0 === a && (a = 0);
    return a * this.m_impulse.z;
  };
  E.prototype.GetJointAngle = function () {
    return (
      this.m_bodyB.m_sweep.a - this.m_bodyA.m_sweep.a - this.m_referenceAngle
    );
  };
  E.prototype.GetJointSpeed = function () {
    return this.m_bodyB.m_angularVelocity - this.m_bodyA.m_angularVelocity;
  };
  E.prototype.IsLimitEnabled = function () {
    return this.m_enableLimit;
  };
  E.prototype.EnableLimit = function (a) {
    this.m_enableLimit = a;
  };
  E.prototype.GetLowerLimit = function () {
    return this.m_lowerAngle;
  };
  E.prototype.GetUpperLimit = function () {
    return this.m_upperAngle;
  };
  E.prototype.SetLimits = function (a, c) {
    void 0 === a && (a = 0);
    void 0 === c && (c = 0);
    this.m_lowerAngle = a;
    this.m_upperAngle = c;
  };
  E.prototype.IsMotorEnabled = function () {
    this.m_bodyA.SetAwake(!0);
    this.m_bodyB.SetAwake(!0);
    return this.m_enableMotor;
  };
  E.prototype.EnableMotor = function (a) {
    this.m_enableMotor = a;
  };
  E.prototype.SetMotorSpeed = function (a) {
    void 0 === a && (a = 0);
    this.m_bodyA.SetAwake(!0);
    this.m_bodyB.SetAwake(!0);
    this.m_motorSpeed = a;
  };
  E.prototype.GetMotorSpeed = function () {
    return this.m_motorSpeed;
  };
  E.prototype.SetMaxMotorTorque = function (a) {
    void 0 === a && (a = 0);
    this.m_maxMotorTorque = a;
  };
  E.prototype.GetMotorTorque = function () {
    return this.m_maxMotorTorque;
  };
  E.prototype.b2RevoluteJoint = function (a) {
    this.__super.b2Joint.call(this, a);
    this.m_localAnchor1.SetV(a.localAnchorA);
    this.m_localAnchor2.SetV(a.localAnchorB);
    this.m_referenceAngle = a.referenceAngle;
    this.m_impulse.SetZero();
    this.m_motorImpulse = 0;
    this.m_lowerAngle = a.lowerAngle;
    this.m_upperAngle = a.upperAngle;
    this.m_maxMotorTorque = a.maxMotorTorque;
    this.m_motorSpeed = a.motorSpeed;
    this.m_enableLimit = a.enableLimit;
    this.m_enableMotor = a.enableMotor;
    this.m_limitState = t.e_inactiveLimit;
  };
  E.prototype.InitVelocityConstraints = function (a) {
    var c = this.m_bodyA,
      d = this.m_bodyB,
      e,
      j = 0;
    e = c.m_xf.R;
    var l = this.m_localAnchor1.x - c.m_sweep.localCenter.x,
      f = this.m_localAnchor1.y - c.m_sweep.localCenter.y,
      j = e.col1.x * l + e.col2.x * f,
      f = e.col1.y * l + e.col2.y * f,
      l = j;
    e = d.m_xf.R;
    var b = this.m_localAnchor2.x - d.m_sweep.localCenter.x,
      k = this.m_localAnchor2.y - d.m_sweep.localCenter.y,
      j = e.col1.x * b + e.col2.x * k,
      k = e.col1.y * b + e.col2.y * k,
      b = j;
    e = c.m_invMass;
    var j = d.m_invMass,
      r = c.m_invI,
      p = d.m_invI;
    this.m_mass.col1.x = e + j + f * f * r + k * k * p;
    this.m_mass.col2.x = -f * l * r - k * b * p;
    this.m_mass.col3.x = -f * r - k * p;
    this.m_mass.col1.y = this.m_mass.col2.x;
    this.m_mass.col2.y = e + j + l * l * r + b * b * p;
    this.m_mass.col3.y = l * r + b * p;
    this.m_mass.col1.z = this.m_mass.col3.x;
    this.m_mass.col2.z = this.m_mass.col3.y;
    this.m_mass.col3.z = r + p;
    this.m_motorMass = 1 / (r + p);
    !1 == this.m_enableMotor && (this.m_motorImpulse = 0);
    if (this.m_enableLimit) {
      var q = d.m_sweep.a - c.m_sweep.a - this.m_referenceAngle;
      m.Abs(this.m_upperAngle - this.m_lowerAngle) < 2 * n.b2_angularSlop
        ? (this.m_limitState = t.e_equalLimits)
        : q <= this.m_lowerAngle
        ? (this.m_limitState != t.e_atLowerLimit && (this.m_impulse.z = 0),
          (this.m_limitState = t.e_atLowerLimit))
        : q >= this.m_upperAngle
        ? (this.m_limitState != t.e_atUpperLimit && (this.m_impulse.z = 0),
          (this.m_limitState = t.e_atUpperLimit))
        : ((this.m_limitState = t.e_inactiveLimit), (this.m_impulse.z = 0));
    } else this.m_limitState = t.e_inactiveLimit;
    a.warmStarting
      ? ((this.m_impulse.x *= a.dtRatio),
        (this.m_impulse.y *= a.dtRatio),
        (this.m_motorImpulse *= a.dtRatio),
        (a = this.m_impulse.x),
        (q = this.m_impulse.y),
        (c.m_linearVelocity.x -= e * a),
        (c.m_linearVelocity.y -= e * q),
        (c.m_angularVelocity -=
          r * (l * q - f * a + this.m_motorImpulse + this.m_impulse.z)),
        (d.m_linearVelocity.x += j * a),
        (d.m_linearVelocity.y += j * q),
        (d.m_angularVelocity +=
          p * (b * q - k * a + this.m_motorImpulse + this.m_impulse.z)))
      : (this.m_impulse.SetZero(), (this.m_motorImpulse = 0));
  };
  E.prototype.SolveVelocityConstraints = function (a) {
    var c = this.m_bodyA,
      d = this.m_bodyB,
      e = 0,
      j = (e = 0),
      l = 0,
      f = 0,
      b = 0,
      k = c.m_linearVelocity,
      n = c.m_angularVelocity,
      r = d.m_linearVelocity,
      p = d.m_angularVelocity,
      q = c.m_invMass,
      w = d.m_invMass,
      x = c.m_invI,
      A = d.m_invI;
    this.m_enableMotor &&
      this.m_limitState != t.e_equalLimits &&
      ((j = this.m_motorMass * -(p - n - this.m_motorSpeed)),
      (l = this.m_motorImpulse),
      (f = a.dt * this.m_maxMotorTorque),
      (this.m_motorImpulse = m.Clamp(this.m_motorImpulse + j, -f, f)),
      (j = this.m_motorImpulse - l),
      (n -= x * j),
      (p += A * j));
    if (this.m_enableLimit && this.m_limitState != t.e_inactiveLimit) {
      var a = c.m_xf.R,
        j = this.m_localAnchor1.x - c.m_sweep.localCenter.x,
        l = this.m_localAnchor1.y - c.m_sweep.localCenter.y,
        e = a.col1.x * j + a.col2.x * l,
        l = a.col1.y * j + a.col2.y * l,
        j = e,
        a = d.m_xf.R,
        f = this.m_localAnchor2.x - d.m_sweep.localCenter.x,
        b = this.m_localAnchor2.y - d.m_sweep.localCenter.y,
        e = a.col1.x * f + a.col2.x * b,
        b = a.col1.y * f + a.col2.y * b,
        f = e,
        a = r.x + -p * b - k.x - -n * l,
        z = r.y + p * f - k.y - n * j;
      this.m_mass.Solve33(this.impulse3, -a, -z, -(p - n));
      this.m_limitState == t.e_equalLimits
        ? this.m_impulse.Add(this.impulse3)
        : this.m_limitState == t.e_atLowerLimit
        ? ((e = this.m_impulse.z + this.impulse3.z),
          0 > e &&
            (this.m_mass.Solve22(this.reduced, -a, -z),
            (this.impulse3.x = this.reduced.x),
            (this.impulse3.y = this.reduced.y),
            (this.impulse3.z = -this.m_impulse.z),
            (this.m_impulse.x += this.reduced.x),
            (this.m_impulse.y += this.reduced.y),
            (this.m_impulse.z = 0)))
        : this.m_limitState == t.e_atUpperLimit &&
          ((e = this.m_impulse.z + this.impulse3.z),
          0 < e &&
            (this.m_mass.Solve22(this.reduced, -a, -z),
            (this.impulse3.x = this.reduced.x),
            (this.impulse3.y = this.reduced.y),
            (this.impulse3.z = -this.m_impulse.z),
            (this.m_impulse.x += this.reduced.x),
            (this.m_impulse.y += this.reduced.y),
            (this.m_impulse.z = 0)));
      k.x -= q * this.impulse3.x;
      k.y -= q * this.impulse3.y;
      n -= x * (j * this.impulse3.y - l * this.impulse3.x + this.impulse3.z);
      r.x += w * this.impulse3.x;
      r.y += w * this.impulse3.y;
      p += A * (f * this.impulse3.y - b * this.impulse3.x + this.impulse3.z);
    } else
      (a = c.m_xf.R),
        (j = this.m_localAnchor1.x - c.m_sweep.localCenter.x),
        (l = this.m_localAnchor1.y - c.m_sweep.localCenter.y),
        (e = a.col1.x * j + a.col2.x * l),
        (l = a.col1.y * j + a.col2.y * l),
        (j = e),
        (a = d.m_xf.R),
        (f = this.m_localAnchor2.x - d.m_sweep.localCenter.x),
        (b = this.m_localAnchor2.y - d.m_sweep.localCenter.y),
        (e = a.col1.x * f + a.col2.x * b),
        (b = a.col1.y * f + a.col2.y * b),
        (f = e),
        this.m_mass.Solve22(
          this.impulse2,
          -(r.x + -p * b - k.x - -n * l),
          -(r.y + p * f - k.y - n * j)
        ),
        (this.m_impulse.x += this.impulse2.x),
        (this.m_impulse.y += this.impulse2.y),
        (k.x -= q * this.impulse2.x),
        (k.y -= q * this.impulse2.y),
        (n -= x * (j * this.impulse2.y - l * this.impulse2.x)),
        (r.x += w * this.impulse2.x),
        (r.y += w * this.impulse2.y),
        (p += A * (f * this.impulse2.y - b * this.impulse2.x));
    c.m_linearVelocity.SetV(k);
    c.m_angularVelocity = n;
    d.m_linearVelocity.SetV(r);
    d.m_angularVelocity = p;
  };
  E.prototype.SolvePositionConstraints = function () {
    var a = 0,
      c,
      d = this.m_bodyA,
      e = this.m_bodyB,
      j = 0,
      l = (c = 0),
      f = 0,
      b = 0;
    if (this.m_enableLimit && this.m_limitState != t.e_inactiveLimit) {
      var a = e.m_sweep.a - d.m_sweep.a - this.m_referenceAngle,
        k = 0;
      this.m_limitState == t.e_equalLimits
        ? ((a = m.Clamp(
            a - this.m_lowerAngle,
            -n.b2_maxAngularCorrection,
            n.b2_maxAngularCorrection
          )),
          (k = -this.m_motorMass * a),
          (j = m.Abs(a)))
        : this.m_limitState == t.e_atLowerLimit
        ? ((a -= this.m_lowerAngle),
          (j = -a),
          (a = m.Clamp(a + n.b2_angularSlop, -n.b2_maxAngularCorrection, 0)),
          (k = -this.m_motorMass * a))
        : this.m_limitState == t.e_atUpperLimit &&
          ((j = a -= this.m_upperAngle),
          (a = m.Clamp(a - n.b2_angularSlop, 0, n.b2_maxAngularCorrection)),
          (k = -this.m_motorMass * a));
      d.m_sweep.a -= d.m_invI * k;
      e.m_sweep.a += e.m_invI * k;
      d.SynchronizeTransform();
      e.SynchronizeTransform();
    }
    c = d.m_xf.R;
    k = this.m_localAnchor1.x - d.m_sweep.localCenter.x;
    a = this.m_localAnchor1.y - d.m_sweep.localCenter.y;
    l = c.col1.x * k + c.col2.x * a;
    a = c.col1.y * k + c.col2.y * a;
    k = l;
    c = e.m_xf.R;
    var r = this.m_localAnchor2.x - e.m_sweep.localCenter.x,
      p = this.m_localAnchor2.y - e.m_sweep.localCenter.y,
      l = c.col1.x * r + c.col2.x * p,
      p = c.col1.y * r + c.col2.y * p,
      r = l,
      f = e.m_sweep.c.x + r - d.m_sweep.c.x - k,
      b = e.m_sweep.c.y + p - d.m_sweep.c.y - a,
      q = f * f + b * b;
    c = Math.sqrt(q);
    var l = d.m_invMass,
      w = e.m_invMass,
      x = d.m_invI,
      A = e.m_invI,
      z = 10 * n.b2_linearSlop;
    q > z * z &&
      ((q = 1 / (l + w)),
      (f = q * -f),
      (b = q * -b),
      (d.m_sweep.c.x -= 0.5 * l * f),
      (d.m_sweep.c.y -= 0.5 * l * b),
      (e.m_sweep.c.x += 0.5 * w * f),
      (e.m_sweep.c.y += 0.5 * w * b),
      (f = e.m_sweep.c.x + r - d.m_sweep.c.x - k),
      (b = e.m_sweep.c.y + p - d.m_sweep.c.y - a));
    this.K1.col1.x = l + w;
    this.K1.col2.x = 0;
    this.K1.col1.y = 0;
    this.K1.col2.y = l + w;
    this.K2.col1.x = x * a * a;
    this.K2.col2.x = -x * k * a;
    this.K2.col1.y = -x * k * a;
    this.K2.col2.y = x * k * k;
    this.K3.col1.x = A * p * p;
    this.K3.col2.x = -A * r * p;
    this.K3.col1.y = -A * r * p;
    this.K3.col2.y = A * r * r;
    this.K.SetM(this.K1);
    this.K.AddM(this.K2);
    this.K.AddM(this.K3);
    this.K.Solve(E.tImpulse, -f, -b);
    f = E.tImpulse.x;
    b = E.tImpulse.y;
    d.m_sweep.c.x -= d.m_invMass * f;
    d.m_sweep.c.y -= d.m_invMass * b;
    d.m_sweep.a -= d.m_invI * (k * b - a * f);
    e.m_sweep.c.x += e.m_invMass * f;
    e.m_sweep.c.y += e.m_invMass * b;
    e.m_sweep.a += e.m_invI * (r * b - p * f);
    d.SynchronizeTransform();
    e.SynchronizeTransform();
    return c <= n.b2_linearSlop && j <= n.b2_angularSlop;
  };
  Box2D.postDefs.push(function () {
    Box2D.Dynamics.Joints.b2RevoluteJoint.tImpulse = new e();
  });
  Box2D.inherit(G, Box2D.Dynamics.Joints.b2JointDef);
  G.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
  G.b2RevoluteJointDef = function () {
    Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
    this.localAnchorA = new e();
    this.localAnchorB = new e();
  };
  G.prototype.b2RevoluteJointDef = function () {
    this.__super.b2JointDef.call(this);
    this.type = t.e_revoluteJoint;
    this.localAnchorA.Set(0, 0);
    this.localAnchorB.Set(0, 0);
    this.motorSpeed =
      this.maxMotorTorque =
      this.upperAngle =
      this.lowerAngle =
      this.referenceAngle =
        0;
    this.enableMotor = this.enableLimit = !1;
  };
  G.prototype.Initialize = function (a, c, d) {
    this.bodyA = a;
    this.bodyB = c;
    this.localAnchorA = this.bodyA.GetLocalPoint(d);
    this.localAnchorB = this.bodyB.GetLocalPoint(d);
    this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle();
  };
  Box2D.inherit(N, Box2D.Dynamics.Joints.b2Joint);
  N.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
  N.b2WeldJoint = function () {
    Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
    this.m_localAnchorA = new e();
    this.m_localAnchorB = new e();
    this.m_impulse = new j();
    this.m_mass = new p();
  };
  N.prototype.GetAnchorA = function () {
    return this.m_bodyA.GetWorldPoint(this.m_localAnchorA);
  };
  N.prototype.GetAnchorB = function () {
    return this.m_bodyB.GetWorldPoint(this.m_localAnchorB);
  };
  N.prototype.GetReactionForce = function (a) {
    void 0 === a && (a = 0);
    return new e(a * this.m_impulse.x, a * this.m_impulse.y);
  };
  N.prototype.GetReactionTorque = function (a) {
    void 0 === a && (a = 0);
    return a * this.m_impulse.z;
  };
  N.prototype.b2WeldJoint = function (a) {
    this.__super.b2Joint.call(this, a);
    this.m_localAnchorA.SetV(a.localAnchorA);
    this.m_localAnchorB.SetV(a.localAnchorB);
    this.m_referenceAngle = a.referenceAngle;
    this.m_impulse.SetZero();
    this.m_mass = new p();
  };
  N.prototype.InitVelocityConstraints = function (a) {
    var c,
      d = 0,
      e = this.m_bodyA,
      j = this.m_bodyB;
    c = e.m_xf.R;
    var l = this.m_localAnchorA.x - e.m_sweep.localCenter.x,
      f = this.m_localAnchorA.y - e.m_sweep.localCenter.y,
      d = c.col1.x * l + c.col2.x * f,
      f = c.col1.y * l + c.col2.y * f,
      l = d;
    c = j.m_xf.R;
    var b = this.m_localAnchorB.x - j.m_sweep.localCenter.x,
      k = this.m_localAnchorB.y - j.m_sweep.localCenter.y,
      d = c.col1.x * b + c.col2.x * k,
      k = c.col1.y * b + c.col2.y * k,
      b = d;
    c = e.m_invMass;
    var d = j.m_invMass,
      m = e.m_invI,
      n = j.m_invI;
    this.m_mass.col1.x = c + d + f * f * m + k * k * n;
    this.m_mass.col2.x = -f * l * m - k * b * n;
    this.m_mass.col3.x = -f * m - k * n;
    this.m_mass.col1.y = this.m_mass.col2.x;
    this.m_mass.col2.y = c + d + l * l * m + b * b * n;
    this.m_mass.col3.y = l * m + b * n;
    this.m_mass.col1.z = this.m_mass.col3.x;
    this.m_mass.col2.z = this.m_mass.col3.y;
    this.m_mass.col3.z = m + n;
    a.warmStarting
      ? ((this.m_impulse.x *= a.dtRatio),
        (this.m_impulse.y *= a.dtRatio),
        (this.m_impulse.z *= a.dtRatio),
        (e.m_linearVelocity.x -= c * this.m_impulse.x),
        (e.m_linearVelocity.y -= c * this.m_impulse.y),
        (e.m_angularVelocity -=
          m * (l * this.m_impulse.y - f * this.m_impulse.x + this.m_impulse.z)),
        (j.m_linearVelocity.x += d * this.m_impulse.x),
        (j.m_linearVelocity.y += d * this.m_impulse.y),
        (j.m_angularVelocity +=
          n * (b * this.m_impulse.y - k * this.m_impulse.x + this.m_impulse.z)))
      : this.m_impulse.SetZero();
  };
  N.prototype.SolveVelocityConstraints = function () {
    var a,
      c = 0,
      d = this.m_bodyA,
      e = this.m_bodyB,
      l = d.m_linearVelocity,
      m = d.m_angularVelocity,
      f = e.m_linearVelocity,
      b = e.m_angularVelocity,
      k = d.m_invMass,
      n = e.m_invMass,
      r = d.m_invI,
      p = e.m_invI;
    a = d.m_xf.R;
    var q = this.m_localAnchorA.x - d.m_sweep.localCenter.x,
      t = this.m_localAnchorA.y - d.m_sweep.localCenter.y,
      c = a.col1.x * q + a.col2.x * t,
      t = a.col1.y * q + a.col2.y * t,
      q = c;
    a = e.m_xf.R;
    var w = this.m_localAnchorB.x - e.m_sweep.localCenter.x,
      x = this.m_localAnchorB.y - e.m_sweep.localCenter.y,
      c = a.col1.x * w + a.col2.x * x,
      x = a.col1.y * w + a.col2.y * x,
      w = c;
    a = f.x - b * x - l.x + m * t;
    var c = f.y + b * w - l.y - m * q,
      A = b - m,
      z = new j();
    this.m_mass.Solve33(z, -a, -c, -A);
    this.m_impulse.Add(z);
    l.x -= k * z.x;
    l.y -= k * z.y;
    m -= r * (q * z.y - t * z.x + z.z);
    f.x += n * z.x;
    f.y += n * z.y;
    b += p * (w * z.y - x * z.x + z.z);
    d.m_angularVelocity = m;
    e.m_angularVelocity = b;
  };
  N.prototype.SolvePositionConstraints = function () {
    var a,
      c = 0,
      d = this.m_bodyA,
      e = this.m_bodyB;
    a = d.m_xf.R;
    var l = this.m_localAnchorA.x - d.m_sweep.localCenter.x,
      r = this.m_localAnchorA.y - d.m_sweep.localCenter.y,
      c = a.col1.x * l + a.col2.x * r,
      r = a.col1.y * l + a.col2.y * r,
      l = c;
    a = e.m_xf.R;
    var f = this.m_localAnchorB.x - e.m_sweep.localCenter.x,
      b = this.m_localAnchorB.y - e.m_sweep.localCenter.y,
      c = a.col1.x * f + a.col2.x * b,
      b = a.col1.y * f + a.col2.y * b,
      f = c;
    a = d.m_invMass;
    var c = e.m_invMass,
      k = d.m_invI,
      p = e.m_invI,
      q = e.m_sweep.c.x + f - d.m_sweep.c.x - l,
      t = e.m_sweep.c.y + b - d.m_sweep.c.y - r,
      w = e.m_sweep.a - d.m_sweep.a - this.m_referenceAngle,
      x = 10 * n.b2_linearSlop,
      z = Math.sqrt(q * q + t * t),
      A = m.Abs(w);
    z > x && ((k *= 1), (p *= 1));
    this.m_mass.col1.x = a + c + r * r * k + b * b * p;
    this.m_mass.col2.x = -r * l * k - b * f * p;
    this.m_mass.col3.x = -r * k - b * p;
    this.m_mass.col1.y = this.m_mass.col2.x;
    this.m_mass.col2.y = a + c + l * l * k + f * f * p;
    this.m_mass.col3.y = l * k + f * p;
    this.m_mass.col1.z = this.m_mass.col3.x;
    this.m_mass.col2.z = this.m_mass.col3.y;
    this.m_mass.col3.z = k + p;
    x = new j();
    this.m_mass.Solve33(x, -q, -t, -w);
    d.m_sweep.c.x -= a * x.x;
    d.m_sweep.c.y -= a * x.y;
    d.m_sweep.a -= k * (l * x.y - r * x.x + x.z);
    e.m_sweep.c.x += c * x.x;
    e.m_sweep.c.y += c * x.y;
    e.m_sweep.a += p * (f * x.y - b * x.x + x.z);
    d.SynchronizeTransform();
    e.SynchronizeTransform();
    return z <= n.b2_linearSlop && A <= n.b2_angularSlop;
  };
  Box2D.inherit(I, Box2D.Dynamics.Joints.b2JointDef);
  I.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
  I.b2WeldJointDef = function () {
    Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
    this.localAnchorA = new e();
    this.localAnchorB = new e();
  };
  I.prototype.b2WeldJointDef = function () {
    this.__super.b2JointDef.call(this);
    this.type = t.e_weldJoint;
    this.referenceAngle = 0;
  };
  I.prototype.Initialize = function (a, c, d) {
    this.bodyA = a;
    this.bodyB = c;
    this.localAnchorA.SetV(this.bodyA.GetLocalPoint(d));
    this.localAnchorB.SetV(this.bodyB.GetLocalPoint(d));
    this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle();
  };
})();
(function () {
  var n = Box2D.Dynamics.b2DebugDraw;
  n.b2DebugDraw = function () {
    this.m_xformScale =
      this.m_fillAlpha =
      this.m_alpha =
      this.m_lineThickness =
      this.m_drawScale =
        1;
    var n = this;
    this.m_sprite = {
      graphics: {
        clear: function () {
          n.m_ctx.clearRect(0, 0, n.m_ctx.canvas.width, n.m_ctx.canvas.height);
        },
      },
    };
  };
  n.prototype._color = function (n, p) {
    return (
      "rgba(" +
      ((n & 16711680) >> 16) +
      "," +
      ((n & 65280) >> 8) +
      "," +
      (n & 255) +
      "," +
      p +
      ")"
    );
  };
  n.prototype.b2DebugDraw = function () {
    this.m_drawFlags = 0;
  };
  n.prototype.SetFlags = function (n) {
    void 0 === n && (n = 0);
    this.m_drawFlags = n;
  };
  n.prototype.GetFlags = function () {
    return this.m_drawFlags;
  };
  n.prototype.AppendFlags = function (n) {
    void 0 === n && (n = 0);
    this.m_drawFlags |= n;
  };
  n.prototype.ClearFlags = function (n) {
    void 0 === n && (n = 0);
    this.m_drawFlags &= ~n;
  };
  n.prototype.SetSprite = function (n) {
    this.m_ctx = n;
  };
  n.prototype.GetSprite = function () {
    return this.m_ctx;
  };
  n.prototype.SetDrawScale = function (n) {
    void 0 === n && (n = 0);
    this.m_drawScale = n;
  };
  n.prototype.GetDrawScale = function () {
    return this.m_drawScale;
  };
  n.prototype.SetLineThickness = function (n) {
    void 0 === n && (n = 0);
    this.m_lineThickness = n;
    this.m_ctx.strokeWidth = n;
  };
  n.prototype.GetLineThickness = function () {
    return this.m_lineThickness;
  };
  n.prototype.SetAlpha = function (n) {
    void 0 === n && (n = 0);
    this.m_alpha = n;
  };
  n.prototype.GetAlpha = function () {
    return this.m_alpha;
  };
  n.prototype.SetFillAlpha = function (n) {
    void 0 === n && (n = 0);
    this.m_fillAlpha = n;
  };
  n.prototype.GetFillAlpha = function () {
    return this.m_fillAlpha;
  };
  n.prototype.SetXFormScale = function (n) {
    void 0 === n && (n = 0);
    this.m_xformScale = n;
  };
  n.prototype.GetXFormScale = function () {
    return this.m_xformScale;
  };
  n.prototype.DrawPolygon = function (n, p, m) {
    if (p) {
      var e = this.m_ctx,
        j = this.m_drawScale;
      e.beginPath();
      e.strokeStyle = this._color(m.color, this.m_alpha);
      e.moveTo(n[0].x * j, n[0].y * j);
      for (m = 1; m < p; m++) e.lineTo(n[m].x * j, n[m].y * j);
      e.lineTo(n[0].x * j, n[0].y * j);
      e.closePath();
      e.stroke();
    }
  };
  n.prototype.DrawSolidPolygon = function (n, p, m) {
    if (p) {
      var e = this.m_ctx,
        j = this.m_drawScale;
      e.beginPath();
      e.strokeStyle = this._color(m.color, this.m_alpha);
      e.fillStyle = this._color(m.color, this.m_fillAlpha);
      e.moveTo(n[0].x * j, n[0].y * j);
      for (m = 1; m < p; m++) e.lineTo(n[m].x * j, n[m].y * j);
      e.lineTo(n[0].x * j, n[0].y * j);
      e.closePath();
      e.fill();
      e.stroke();
    }
  };
  n.prototype.DrawCircle = function (n, p, m) {
    if (p) {
      var e = this.m_ctx,
        j = this.m_drawScale;
      e.beginPath();
      e.strokeStyle = this._color(m.color, this.m_alpha);
      e.arc(n.x * j, n.y * j, p * j, 0, 2 * Math.PI, !0);
      e.closePath();
      e.stroke();
    }
  };
  n.prototype.DrawSolidCircle = function (n, p, m, e) {
    if (p) {
      var j = this.m_ctx,
        x = this.m_drawScale,
        c = n.x * x,
        q = n.y * x;
      j.moveTo(0, 0);
      j.beginPath();
      j.strokeStyle = this._color(e.color, this.m_alpha);
      j.fillStyle = this._color(e.color, this.m_fillAlpha);
      j.arc(c, q, p * x, 0, 2 * Math.PI, !0);
      j.moveTo(c, q);
      j.lineTo((n.x + m.x * p) * x, (n.y + m.y * p) * x);
      j.closePath();
      j.fill();
      j.stroke();
    }
  };
  n.prototype.DrawSegment = function (n, p, m) {
    var e = this.m_ctx,
      j = this.m_drawScale;
    e.strokeStyle = this._color(m.color, this.m_alpha);
    e.beginPath();
    e.moveTo(n.x * j, n.y * j);
    e.lineTo(p.x * j, p.y * j);
    e.closePath();
    e.stroke();
  };
  n.prototype.DrawTransform = function (n) {
    var p = this.m_ctx,
      m = this.m_drawScale;
    p.beginPath();
    p.strokeStyle = this._color(16711680, this.m_alpha);
    p.moveTo(n.position.x * m, n.position.y * m);
    p.lineTo(
      (n.position.x + this.m_xformScale * n.R.col1.x) * m,
      (n.position.y + this.m_xformScale * n.R.col1.y) * m
    );
    p.strokeStyle = this._color(65280, this.m_alpha);
    p.moveTo(n.position.x * m, n.position.y * m);
    p.lineTo(
      (n.position.x + this.m_xformScale * n.R.col2.x) * m,
      (n.position.y + this.m_xformScale * n.R.col2.y) * m
    );
    p.closePath();
    p.stroke();
  };
})();
var i;
for (i = 0; i < Box2D.postDefs.length; ++i) Box2D.postDefs[i]();
delete Box2D.postDefs;
"undefined" !== typeof require && (module.exports = Box2D);
