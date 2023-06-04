export const createEntity = (
  transform: TransformConstructorArgs,
  modelPath: string
): Entity => {
  const entity = new Entity();
  const shape = new GLTFShape(modelPath);

  shape.withCollisions = true;
  shape.isPointerBlocker = true;
  shape.visible = true;

  entity.addComponentOrReplace(new Transform(transform));
  entity.addComponentOrReplace(shape);

  engine.addEntity(entity);
  return entity;
};

// Grass
createEntity({ position: new Vector3(48, 0, 48) }, 'models/default/grass.glb');

// Light temple
createEntity(
  { position: new Vector3(48, 0, 48), rotation: Quaternion.Euler(0, 180, 0) },
  'models/scene.glb'
);

// Github link
const githubLink = createEntity(
  { position: new Vector3(52, 1.3, 30) },
  'models/default/githubLink.glb'
);
githubLink.addComponent(
  new OnPointerDown(
    () =>
      openExternalURL('https://github.com/ShinyDCL/dcl-hidden-treasure-scene'),
    { hoverText: 'Github' }
  )
);

// Twitter link
const twitterLink = createEntity(
  { position: new Vector3(53, 1.3, 30) },
  'models/default/twitterLink.glb'
);
twitterLink.addComponent(
  new OnPointerDown(
    () =>
      openExternalURL(
        'https://twitter.com/ShinyDCL/status/1665392365064814592'
      ),
    { hoverText: 'Twitter' }
  )
);
