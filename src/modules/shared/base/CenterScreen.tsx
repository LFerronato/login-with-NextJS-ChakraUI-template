import { Grid, GridProps } from '@chakra-ui/react'

export const CenterScreen = ({ children, ...rest }: GridProps) => {
  return (
    <Grid
      placeItems="center"
      minH="100vh"
      {...rest}
    >
      {children}
    </Grid>
  )
}
