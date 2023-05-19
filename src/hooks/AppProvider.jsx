import ItemsProvider from './useAdditem';

const AppProvider = ({ children }) => (
    <>
        <ItemsProvider>{ children }</ItemsProvider>
    </>
);

export default AppProvider;