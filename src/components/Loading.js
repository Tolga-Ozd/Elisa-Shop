import React from 'react'
import styled from 'styled-components'
function Loading() {
  return (
    <Section>
 <div></div>
    </Section>
  )
}

export default Loading

const Section = styled.section`
height: 55vh;
div {
  display: flex;
  margin:15rem auto;
  width:15em;
  height: 15em;
  border: 3px solid transparent;
  border-top-color: #3cefff;
  border-bottom-color: #3cefff;
  border-radius: 50%;
  animation: spin 1.5s linear infinite;
}
div:before {
  content: '';
  display: block;
  margin: auto;
  width: 0.75em;
  height: 0.75em;
  border: 3px solid #3cefff;
  border-radius: 50%;
  animation: pulse 1s alternate ease-in-out infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
@keyframes pulse {
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
}
`