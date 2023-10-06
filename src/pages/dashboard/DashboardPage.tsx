import { WhiteCard } from '../../components';

export const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <p>Información colectiva de varios stores de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

        <WhiteCard centered>
          <h2>Hola Mundo</h2>
          <p>Información general</p>
        </WhiteCard>
      </div>

    </>
  );
};