// 4.18.20

// class based 
// class X extends Components 
// histortorically, accessing state, they were class based
//acess Access to State, Lifecycle hooks, access to state and props via "this" (this.state.X & this.props.X)


// v functional components
// access to state (useState()), no access to lifecycle hooks, access props via 'props' (props.X)

//component lifecyle, only availble in class based component -- react hooks and lifecycle hooks aren't related
//you get a bunch of method with the component lifecycle, e.g. constructot() getDerivedState() etc.

//component lifecycle -- when component created, 1. constructor(props) starts. DO: setup state, DONT: cause side effects (e.g sending HTTP req)
// 2. getDerivedStateFromProps(props, state) allows you to sync your state (very rare) > 3. render() - use only to prepare and structure jsx 
// 4. render child components - anything child component in render component > 5. componentDidMount() - important, you can cause side efcects to get HTtp but dont update state

// ch. 7, lesson 8 - component lifecycle - update. just as we a life cycle for component creation, we also have one for updating, so when props or state changed before a component to be reevaluated
//getDerivedStateFromProprs(props, state) DO: sync state to props/DONT cause side eff > 2. shouldComponentUpdate(nextProps, nextState)
// allows you to cancel update process - used for performance optimization - DONT cuase side ef
// > 3. render() > [update child component props] > 4. getSnapshotBeforeUpdat(prevProps, prevState) - niche hook, DO: last min DOM ops, DONT cause side ef
//3.21.20 - just as we a life cycle for component creation, we also have one for updating, so when props or state changed
// before a component to be reevaluated, we staret from:

