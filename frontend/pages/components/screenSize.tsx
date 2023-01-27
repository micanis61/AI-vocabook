import React, { useState, useEffect } from 'react'

export default function ScreenSize(props: string) {
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  //getWindowDimensionsのログ確認
  console.log(getWindowDimensions)
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  //useStateのログ確認
  console.log(useState(getWindowDimensions()))
  useEffect(() => {
    const onResize = () => {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
}