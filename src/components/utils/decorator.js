import { closeElement } from "react"

export const withStyle = style => component => closeElement(component, {style})