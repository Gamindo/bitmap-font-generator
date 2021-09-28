import { JTDSchemaType } from 'ajv/dist/jtd'

export interface GlyphsData {
  glyphs: string
  powerOfTwo: boolean
  canvasHeight: string
  padding: number
  packMethod: number
  canvasWidth: string
  roundValues: boolean
  descriptionFormat: number
}

const glyphs: JTDSchemaType<GlyphsData> = {
  properties: {
    glyphs: { type: 'string' },
    powerOfTwo: { type: 'boolean' },
    canvasHeight: { type: 'string' },
    padding: { type: 'int32' },
    packMethod: { type: 'int32' },
    canvasWidth: { type: 'string' },
    roundValues: { type: 'boolean' },
    descriptionFormat: { type: 'int32' },
  },
}

export default glyphs
