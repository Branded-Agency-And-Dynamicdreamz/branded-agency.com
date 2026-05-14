import React from "react"
import { useInView } from "react-intersection-observer"
import PropTypes from "prop-types"

import * as S from "./lazy-video.styles"

const LazyVideo = ({
  src,
  autoPlay,
  controls,
  threshold,
  pauseOnClick,
  thumbnail,
  ...otherProps
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    // threshold: 0.5, // when 50% of element is in view
    threshold: threshold || 0,
  })

  const videoRef = React.useRef(null)

  const handlePauseOnClick = () => {
    if (!pauseOnClick || !videoRef.current) return

    if (videoRef.current.paused) {
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }
  }

  const videoComponent = auxRef => (
    <video
      ref={auxRef}
      muted={autoPlay}
      loop={autoPlay}
      playsInline={autoPlay}
      controls={controls}
      poster={thumbnail}
      preload="none"
      autoPlay={inView} // Control play based on inView
      src={inView ? src : undefined} // Load video source when in view
      {...otherProps}
    >
      Your browser does not support the video tag.
    </video>
  )

  const videoWithWrapper = () => (
    <S.Wrapper ref={ref} onClick={handlePauseOnClick}>
      {videoComponent(videoRef)}
    </S.Wrapper>
  )

  return pauseOnClick ? videoWithWrapper() : videoComponent(ref)
}

LazyVideo.propTypes = {
  src: PropTypes.string.isRequired,
  autoPlay: PropTypes.bool,
  controls: PropTypes.bool,
}

export default LazyVideo
