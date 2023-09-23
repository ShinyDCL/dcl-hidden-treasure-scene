import { engine, GltfContainer, Transform } from '@dcl/sdk/ecs'
import { Vector3 } from '@dcl/sdk/math'
import { SCENE_MIDDLE } from './config'
import { setUpSkyBox } from './skyBox'
import { setupLinks } from './links'

export function main() {
  const scene = engine.addEntity()
  Transform.create(scene, { position: Vector3.create(SCENE_MIDDLE, 0, SCENE_MIDDLE) })
  GltfContainer.create(scene, { src: 'models/scene.glb' })

  const border = engine.addEntity()
  Transform.create(border, { position: Vector3.create(SCENE_MIDDLE, 0, SCENE_MIDDLE) })
  GltfContainer.create(border, { src: 'models/border.glb' })

  setUpSkyBox(scene)
  setupLinks(scene)
}
