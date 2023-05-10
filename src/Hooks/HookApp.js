import React from 'react'
// import UseEffecthook from './UseEffecthook'
// import Digitalwatch from './Digitalwatch'
// import MapFunction from './MapFunction'
// import MapObejet from './MapObejet'
// import NestedArrayMap from './NestedArrayMap'
// import ChildToParent from './ChildToParent'
import Controlled from './Controlled'
import Uncontrolled from './Uncontrolled'
const HookApp = () => {
  // function parentalert(n)
  // {
  //   alert(n)
  // }
  return (
    <div>
        <h1>HookApp</h1>

        {/* <UseEffecthook/>
        <Digitalwatch/>
        <MapFunction/>
        <MapObejet/>
        <NestedArrayMap/>
        <ChildToParent data={parentalert}/> */}


        <Controlled/>
        <Uncontrolled/>
    </div>
  )
}

export default HookApp

// ye App.js m import h