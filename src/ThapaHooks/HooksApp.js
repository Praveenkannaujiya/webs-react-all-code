import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import UseStates from './UseState'
import HooksRule from './HooksRule'
import HookArray from './HookArray'
import HandleObject from './HandleObject'
import Todolist from './Todolist'
import Shortcircitevalu from './Shortcirevalu'
import Loginpage from './Loginpage'
import UseEffect from './useEffecthook/UseEffect1'
import UseEffect2 from './useEffecthook/UseEffect2'
import CleanupFunc from './useEffecthook/CleanupFunc'
import UseEffectApi from './useEffecthook/UseEffectApi'
import Uncontrol from './useEffecthook/Uncontrol'
import IncreAndDecre from './useEffecthook/IncreAndDecre'
import UseReduce from './useEffecthook/UseReduce'
import ComponentA from './PropDrillingContext/ComponentA'
import SelfUseEff from './useEffecthook/selfUseEff'
import Spred from './useEffecthook/Spred'
import UseEffProps from './useEffecthook/useEffProps'

const HooksApp = () => {
  return (
    <div>
      <h1>HooksApp</h1>
      <UseStates />
      <HooksRule />
      <HookArray />
      <HandleObject />
      <Todolist />
      <Shortcircitevalu />
      <Loginpage />
      <UseEffect />
      <UseEffect2 />
      <CleanupFunc />
      <UseEffectApi />
      <Uncontrol />
      <IncreAndDecre />
      <UseReduce />
      <ComponentA />
      <SelfUseEff />
      <Spred />
      <UseEffProps />
    </div>
  )
}

export default HooksApp