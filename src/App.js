import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 라우트 기반 코드 분할
const PayMenu = React.lazy(() => import('./page/pay/PayMenu').then((mod) => ({ default: mod.PayMenu })))

function App() {
  return (
    <BrowserRouter basename='/web'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pay/:topic" element={<PayMenu />} />
      </Routes>
    </BrowserRouter>
  )
}

function Home() {
  return (
    <div style={{ width: '1000px', overflowWrap: 'break-word', wordBreak: 'break-all', whiteSpace: 'normal', paddingTop: '50px', paddingLeft: '100px' }}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius molestie tristique.
        Proin et dolor iaculis, interdum magna a, consectetur eros. Integer eu consectetur arcu.
        Etiam non ipsum nec urna porttitor mattis. Morbi imperdiet molestie metus, sed dictum dui elementum vitae.
        In hac habitasse platea dictumst. Praesent rhoncus nibh quis erat sagittis hendrerit. Cras volutpat
        hendrerit nisl quis pretium. Cras dui ante, malesuada sed est ut, rhoncus efficitur nisl.
      </p>
      <p>
        Proin gravida nibh ante, rutrum congue libero placerat sit amet. Nulla quis mauris augue.
        Duis blandit ullamcorper dolor. Nunc efficitur, libero vitae condimentum tincidunt, mauris
        velit pharetra magna, nec accumsan ligula ex eget quam. Nulla ornare, orci quis lobortis lacinia,
        quam nisi finibus dolor, ac posuere felis arcu ac metus. Integer molestie odio sit amet metus luctus
        tristique. Nunc eu ex dapibus, lobortis elit non, sodales tellus. Suspendisse dignissim vulputate diam,
        non laoreet sem gravida eleifend.
      </p>
    </div>
  )
}

export default App;
