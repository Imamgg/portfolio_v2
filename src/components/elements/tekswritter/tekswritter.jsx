import React, {useState, useEffect} from "react";

const TypeWritter = ({text, speed}) => {
  const [textState, setTextState] = useState("");
  const [index, setIndex] = useState(0);


  useEffect(() => {
    if (textState < text.length) {
      const timeout = setTimeout(() => {
        setTextState(prevText => prevText + text[index]);
        setIndex(prevIndex => prevIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [textState, index]);

  return (
    <span>
      {textState}
    </span>
  )
}

export default TypeWritter;

