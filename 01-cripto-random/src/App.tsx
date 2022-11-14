import './App.css';
import { useRandom } from './hooks/useRandom';

export const App = () => {
  const query = useRandom();
  return (
    <div className="App App-header">
      {query.isFetching ? (
        <h2>Loading...</h2>
      ) : (
        <h2>Numero Aleatorio: {query.data}</h2>
      )}
      {!query.isLoading && query.isError && (
        <h2>Ha ocurrido un error: {`${query.error}`}</h2>
      )}

      <button onClick={() => query.refetch()} disabled={query.isFetching}>
        {query.isFetching ? '...' : 'Refetch'}
      </button>
    </div>
  );
};

export default App;
