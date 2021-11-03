import { Text, TextProps as TextPropsWithCss } from 'rebass'

import styled, { Color, Theme } from '.'

type TextProps = Omit<TextPropsWithCss, 'css' | 'color'> & { userSelect?: 'none'; color?: Color; lineHeight?: number }

const TextWrapper = styled(Text)<{ userSelect?: 'none'; color?: Color; lineHeight?: number; theme: Theme }>`
  color: ${({ color = 'primary' as Color, theme }) => theme[color]};
  line-height: ${({ lineHeight = 1 }) => lineHeight};
  user-select: ${({ userSelect }) => userSelect};
`

const TYPE = {
  h1(props: TextProps) {
    return <TextWrapper fontSize={36} fontWeight={400} {...props} />
  },
  h2(props: TextProps) {
    return <TextWrapper fontSize={24} fontWeight={400} {...props} />
  },
  subhead1(props: TextProps) {
    return <TextWrapper fontSize={16} fontWeight={500} {...props} />
  },
  subhead2(props: TextProps) {
    return <TextWrapper fontSize={14} fontWeight={500} {...props} />
  },
  subhead3(props: TextProps) {
    return <TextWrapper fontSize={14} fontWeight={600} {...props} />
  },
  caption(props: TextProps) {
    return <TextWrapper fontSize={12} fontWeight={400} {...props} />
  },
  body1(props: TextProps) {
    return <TextWrapper fontSize={16} fontWeight={400} {...props} />
  },
  body2(props: TextProps) {
    return <TextWrapper fontSize={14} fontWeight={400} {...props} />
  },
  buttonMedium(props: TextProps) {
    return <TextWrapper fontSize={16} fontWeight={500} {...props} />
  },
  buttonLarge(props: TextProps) {
    return <TextWrapper fontSize={20} fontWeight={500} {...props} />
  },
  code(props: TextProps) {
    return <TextWrapper fontSize={12} fontWeight={400} fontFamily="Input Mono" lineHeight={1.25} {...props} />
  },
}

export default TYPE
