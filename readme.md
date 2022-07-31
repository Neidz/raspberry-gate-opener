<h2>Project allowing everyone on local network to use remote gate controller from app</h1>

<a href="https://raspberry-gate-opener.netlify.app/"><h3>Link to app</h3></a>

<h3>Frontend</h3>
<p>React project with PWA functionality checking status of raspberry pi every 3 seconds allowing user to send request that opens/closes the gate through raspberry pi</p>

<h3>Backend</h3>
<p>Node/express app controlling gpio pins on raspberry pi that also allows checking status of connection from frontend</p>

<h3>Hardware</h3>
<p>Raspberry pi 4, SRD-05VDC-SL-C relay running on raspberry's 3.3v with 3.3v signals because nobody got time to properly setup voltage stepping and of course remote controller with desoldered button that now gets signal from relay</p>
