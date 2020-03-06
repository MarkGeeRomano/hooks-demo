import UseState from './UseState'
import BrokenUseState from './BrokenUseState'
import UseEffect from './UseEffect'
import ClassTimeout from './ClassTimeout'
import FunctionalTimeout from './FunctionalTimeout'
import FunctionalTimeoutWithRef from './FunctionalTimeoutWithRef'
import ContextConsumer from './ContextConsumer'
import UseContext from './UseContext'

export default [
  { title: 'useState hook', Component: UseState },
  { title: 'Broken useState hook', Component: BrokenUseState },
  { title: 'useEffect Hook', Component: UseEffect },
  { title: 'Class timeout', Component: ClassTimeout },
  { title: 'Functional timeout', Component: FunctionalTimeout },
  { title: 'Functional timeout with Ref', Component: FunctionalTimeoutWithRef },
  { title: 'Using context with class', Component: ContextConsumer},
  { title: 'Using context with hook', Component: UseContext},
]