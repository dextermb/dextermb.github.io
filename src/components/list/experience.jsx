import React from 'react'

export default () => (
  <div>
    <h2>Experience</h2>
    <div className={'flex flex-no-basis flex-space-between flex-top'}>
      <div>
        <p className={'subcontent'}>
          Current Position(s)
        </p>
        <ul className={'display-spacing'}>
          <li>
            <p>Langley Foxall</p>
            <p>Website Developer</p>
            <p className={'subcontent'}>
              2017
            </p>
          </li>
          <li>
            <p>Ninety Nine</p>
            <p>Systems Engineer</p>
            <p className={'subcontent'}>
              2015
            </p>
          </li>
        </ul>
      </div>
      <div>
        <p className={'subcontent'}>
          Past Positions
        </p>
        <ul className={'display-spacing'}>
          <li>
            <p>Click Dealer</p>
            <p>Website Developer</p>
            <p className={'subcontent'}>
              10 Months 2017
            </p>
          </li>
          <li>
            <p>Musk Engineering</p>
            <p>Systems Engineer</p>
            <p className={'subcontent'}>
              4 Months 2016
            </p>
          </li>
          <li>
            <p>FMA Process Engineering</p>
            <p>Systems Engineer</p>
            <p className={'subcontent'}>
              4 Months 2015
            </p>
          </li>
        </ul>
      </div>
      <div />
    </div>
  </div>
)
