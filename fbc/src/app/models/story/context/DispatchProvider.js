import { DispatchContext } from 'models/story/context'

const DispatchProvider = ({ children, ...props }) => <DispatchContext.Provider {...props}>{children}</DispatchContext.Provider>

export default DispatchProvider;
