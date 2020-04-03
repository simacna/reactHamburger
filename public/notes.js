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

//3.26.20 - is it a good idea to memoirze all functional component and shouldComponentUpdate? no because you'll have 
//components who'll update when their parent updates, so if you implement optimization cases, they'll check and run, they're unncessary
//how react updates the DOM - render() being called doesn't automatically call realDOM, render is a more of a check of what 
//html should look like, that's why we check shouldComponentUpdate for unnecessary render() call. it first compares virtual doms,
//react takes this approach since faster than readlDOM. react comparex old/new virtual dom, if finds differences, only changes differences
//where change has occured. if no differences, doesn't touch real DOM.

//should you use propTyeps to all components? maybe? up to what's the scenarios like multipe pplz using your components