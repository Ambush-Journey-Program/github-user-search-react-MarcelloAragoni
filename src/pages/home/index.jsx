import UserBox from "../../components/user-box/"
import { handleFormatDate} from "../../utilities/format-date";

export default function Home(){
  const date = handleFormatDate('2018-03-13T12:20:43Z');

  return(
    <UserBox
      user='Marcello'
      tag='marcello'
      date={date}
      bio='bio teste'
    />
  );
}