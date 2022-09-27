import { animated, useSpring } from 'react-spring'

import { Logo } from '../../icons'

interface ILoader {
  style: object
  isStop: boolean
}

const Loader = ({ style, isStop = false }: ILoader) => {
  const spring = useSpring({
    loop: true,
    to: { rotateZ: 0 },
    from: { rotateZ: isStop ? 0 : -360 },
    config: { duration: 1000 },
  })

  return (
    <animated.div
      style={{
        width: '50px',
        // height: '50px',
        ...style,
        ...spring,
      }}
    >
      <Logo
        sx={{
          width: '100%',
          height: '100%',
        }}
      />
    </animated.div>
  )
}

export { Loader }
export type { ILoader }
