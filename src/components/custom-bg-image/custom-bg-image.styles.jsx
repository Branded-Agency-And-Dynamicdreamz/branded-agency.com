import styled from "@emotion/styled"
import Box from "@mui/system/Box"

export const Wrapper = styled(Box)`
  position: relative;
  overflow: hidden;
  z-index: 1;

  > .gatsby-image-wrapper {
    width: 100% !important;
    height: 100% !important;
    z-index: -1;
    position: absolute !important;
    top: 50%;
    transform: translateY(-50%);
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
`
