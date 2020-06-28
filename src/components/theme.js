import Color from 'color'

const _getVariants = c => {
  const col = Color(c)
  return {
    Lightest: col.lighten(0.416).toString(),
    Lighter: col.lighten(0.285).toString(),
    Light: col.lighten(0.094).toString(),
    Base: col.hsl().toString(),
    Dark: col.darken(0.086).toString(),
    Darker: col.darken(0.298).toString(),
    Darkest: col.darken(0.398).toString(),
  }
}

const colors = {
  Primary: '#fed845',
  Success: '#38C172',
  Grey: '#B8C2CC',
}

export const Colors = {
  Primary: { ..._getVariants(colors.Primary) },
  Success: { ..._getVariants(colors.Success) },
  Grey: {
    White: '#ffffff',
    ..._getVariants(colors.Grey),
    Black: '#000000',
  },
}

export const Sizes = {
  NavigationHeight: {
    Normal: '125px',
    Narrow: '75px',
  },
  LogoHeight: {
    Normal: '100px',
    Narrow: '50px',
  },
}

export const HeaderHeight = '40vh'

export const ContentMaxWidth = '900px'
export const ContentWidth = '90vw'

export const Transition = '.5s all ease-in'
