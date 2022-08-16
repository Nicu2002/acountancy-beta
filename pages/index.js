import Filter from "../components/Filter";
import ItemsList from "../components/ItemsList";
import AddForm from "../components/AddForm";
import UsersService from "../Services/usersService";
import ErrorModal from "../components/ErrorModal";
import {useCookies} from "react-cookie";


export default function Home(props) {
    const [cookies, setCookie, removeCookie] = useCookies();
    // setCookie("test", "value", { path: '/' });
    fetch("http://localhost:3000/api/test", {
        headers: {
            "credentials": 'include',
            "changeOrigin": true,
            "Context-Type": "text/plain",
            "Authorization": "aladdin:opensesame"
            // 'Set-Cookie': "test=value;Path=/; Secure=false; SameSite=None",
            // "access-control-expose-headers": "Set-Cookie"
        }
    })
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
    const res = await usersService.getAllData();
    return {
        props: {res},
    }
}
