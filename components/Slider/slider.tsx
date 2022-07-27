import React, {
  useEffect,
  useRef,
  useState,
  Children,
  useCallback,
} from "react"

import {
  CustomSlider,
  Container,
  SliderWrapper,
  SliderSlide,
  StyledSlideButton
} from "./slider.styles"
import { SliderProps } from "./slider.interface"
import { string } from "yup"

const Slider = ({ children }: SliderProps): JSX.Element => {
  const useWindowWidth = (): number => {
    const [width, setWidth] = useState(0)

    const updateWidth = useCallback((): void => {
      setWidth(window.innerWidth)
    }, [])

    useEffect(() => {
      window.addEventListener("resize", updateWidth)
      updateWidth()
      return () => window.removeEventListener("resize", updateWidth)
    }, [updateWidth])
    return width
  }

  const windowWidth = useWindowWidth()
  const [sliderIsDragging, setSliderIsDragging] = useState(false)
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [pairOfXCoords, setPairOfXCoords] = useState([0, 0])
  // разница между 2 и 1 координатами всегда передаётся в translateX
  const [sliderWrapperWidth, setSliderWrapperWidth] = useState(0)
  const [contentWidth, setContentWidth] = useState(0)
  const sliderWrapperRef = useRef<HTMLDivElement>(null)
  const sliderSlideRef = useRef<HTMLDivElement>(null)

  const [buttonsDisable, setButtonsDisable] = useState([false, false])

  const onMouseUpOutsideTheSlider = useCallback((): void => {
    let newPairOfXs: number[] = []
    newPairOfXs[0] = -(pairOfXCoords[1] - pairOfXCoords[0])
    newPairOfXs[1] = 0
    setPairOfXCoords(newPairOfXs)
    setSliderIsDragging(false)
  }, [pairOfXCoords])

  let mouseUpDocHandler = useCallback((): void => {
    if (isMouseDown) {
      setIsMouseDown(false)
      onMouseUpOutsideTheSlider()
    }
  }, [isMouseDown, onMouseUpOutsideTheSlider])

  useEffect(() => {
    document.addEventListener("mouseup", mouseUpDocHandler)
    return () => {
      document.removeEventListener("mouseup", mouseUpDocHandler)
    }
  }, [pairOfXCoords, mouseUpDocHandler])

  useEffect(() => {
    setSliderWrapperWidth(sliderWrapperRef.current?.clientWidth)
    setPairOfXCoords([0, 0])
    if (contentWidth > sliderWrapperWidth) {
      setButtonsDisable([false, true])
    } else {
      setButtonsDisable([true, true])
    }
  }, [windowWidth, contentWidth, sliderWrapperWidth])

  useEffect(() => {
    setContentWidth(
      sliderSlideRef.current?.clientWidth * Children.count(children)
    )
    setSliderWrapperWidth(sliderWrapperRef.current?.clientWidth)
  }, [children])

  function onSliderStartMove(xCoord: number): void {
    let curX = xCoord
    let newPairOfXs: number[] = []
    newPairOfXs[0] = pairOfXCoords[0] + curX
    newPairOfXs[1] = curX
    if (newPairOfXs[1] - newPairOfXs[0] <= 0) {
      if (contentWidth > sliderWrapperWidth) {
        if (
          Math.abs(newPairOfXs[1] - newPairOfXs[0]) <
          contentWidth - sliderWrapperWidth
        ) {
          setPairOfXCoords(newPairOfXs)
        }
      }
    }
  }

  function onSliderMove(xCoord: number): void {
    let curX = xCoord
    let newPairOfXs: number[] = []
    newPairOfXs[0] = pairOfXCoords[0] //берём точку вначале движения
    newPairOfXs[1] = curX
    if (newPairOfXs[1] - newPairOfXs[0] <= 0) {
      // первое условие- стоп на левой границе, второе и третье - на правой
      if (contentWidth > sliderWrapperWidth) {
        if (
          Math.abs(newPairOfXs[1] - newPairOfXs[0]) <
          contentWidth - sliderWrapperWidth
        ) {
          setPairOfXCoords(newPairOfXs)
        }
      }
    }
  }

  function onSliderEndMove(xCoord: number): void {
    let curX = xCoord
    let newPairOfXs: number[] = []
    newPairOfXs[0] = -(curX - pairOfXCoords[0])
    // перекладываем разницу в начальный x для дальнейшего учёта начальной точки
    newPairOfXs[1] = 0
    if (newPairOfXs[1] - newPairOfXs[0] + 30 <= 0) {
      // разница newPairOfXs[1]-newPairOfXs[0] по модулю описывает насколько
      // необходимо передвинуть блок с контентом (упражнениями например)
      // знак указывает на направление передвижения
      if (
        contentWidth > sliderWrapperWidth &&
        Math.abs(newPairOfXs[1] - newPairOfXs[0]) <
          contentWidth - sliderWrapperWidth - 62
      ) {
        setPairOfXCoords(newPairOfXs)
        setButtonsDisable([false, false])
        //добавляем новую координату
        //и перекладываем разницу в начальную точку
      } else {
        // правая граница контента появилась внутри контейнера,
        // поэтому не двигаем, то есть не добавляем новую координату
        // просто перекладываем разницу в начальную точку
        //newPairOfXs[0] = -(pairOfXCoords[1] - pairOfXCoords[0])
        newPairOfXs[0] = contentWidth - sliderWrapperWidth - 30
        newPairOfXs[1] = 0
        setPairOfXCoords(newPairOfXs)
        setButtonsDisable([true, false])
      }
    } else {
      setPairOfXCoords([0, 0])
      setButtonsDisable([false, true])
    }
  }

  const onTouchStartHandler = (evt: React.TouchEvent<HTMLDivElement>) => {
    onSliderStartMove(evt.changedTouches[0].clientX)
  }

  const onTouchHandler = (evt: React.TouchEvent<HTMLDivElement>) => {
    onSliderMove(evt.changedTouches[0].clientX)
  }

  const onTouchEndHandler = (evt: React.TouchEvent<HTMLDivElement>) => {
    onSliderEndMove(evt.changedTouches[0].clientX)
  }

  const onMouseDown = (evt: React.MouseEvent<HTMLDivElement>) => {
    evt.preventDefault()
    setIsMouseDown(true)
    onSliderStartMove(evt.clientX)
  }

  const onMouseMove = (evt: React.MouseEvent<HTMLDivElement>) => {
    if (isMouseDown) {
      onSliderMove(evt.clientX)
      setSliderIsDragging(true)
    }
  }

  const onMouseUp = (evt: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseDown(false)
    evt.stopPropagation()
    onSliderEndMove(evt.clientX)
  }

  const onClickCapture = (evt: React.UIEvent<HTMLDivElement>) => {
    if (sliderIsDragging) {
      evt.stopPropagation()
      setSliderIsDragging(false)
    }
  }

  const onClickSliderButton = (side: string) => {
    const offset = side === "left" ? -220 : 220
    onSliderEndMove(offset)
  }

  const slides = React.Children.map(children, (child, index) => {
    if (index === 0) {
      return <SliderSlide ref={sliderSlideRef}>{child}</SliderSlide>
    } else {
      return <SliderSlide>{child}</SliderSlide>
    }
  })

  const StyledButtonLeft = StyledSlideButton
  const StyledButtonRight = StyledSlideButton

  return (
    <CustomSlider>
      <StyledButtonLeft
        disabled={buttonsDisable[0]}
        onClick={() => onClickSliderButton("left")}
      >
        {"«"}
      </StyledButtonLeft>
      <Container style={{ width: `${windowWidth - 600}px` }}>
        <SliderWrapper
          ref={sliderWrapperRef}
          onDragStart={() => {
            return false
          }}
          onMouseDown={event => {
            if (sliderIsDragging) {
              setSliderIsDragging(false)
            }
            onMouseDown(event)
          }}
          onMouseUp={event => {
            onMouseUp(event)
          }}
          onClickCapture={event => {
            if (sliderIsDragging) {
              event.preventDefault()
            }
            onClickCapture(event)
          }}
          onMouseMove={event => {
            onMouseMove(event)
          }}
          onTouchStart={event => {
            onTouchStartHandler(event)
          }}
          onTouchMove={event => {
            onTouchHandler(event)
          }}
          onTouchEnd={event => {
            onTouchEndHandler(event)
          }}
          style={{
            transform: `translateX(${pairOfXCoords[1] - pairOfXCoords[0]}px)`,
            transitionDuration: "0ms",
          }}
        >
          {slides}
        </SliderWrapper>
      </Container>
      <StyledButtonRight
        disabled={buttonsDisable[1]}
        onClick={() => onClickSliderButton("right")}
      >
        {"»"}
      </StyledButtonRight>
    </CustomSlider>
  )
}

export default Slider
