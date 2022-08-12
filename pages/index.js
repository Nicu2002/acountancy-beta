import Filter from "../components/Filter";
import ItemsList from "../components/ItemsList";
import AddForm from "../components/AddForm";
import UsersService from "../Services/usersService";
import ErrorModal from "../components/ErrorModal";


export default function Home(props) {
  return (
      <div className='app'>
          <Filter/>
          <div className='flex justify-around'>
              <ItemsList data={props.res}/>
              <AddForm/>
          </div>
          <ErrorModal/>
      </div>
  )
}

const usersService = new UsersService();

export async function getServerSideProps(ctx) {
    const res = await fetch("http://localhost:3000/api").then(res => res.json());
    return {
        props: {res},
    }
}
