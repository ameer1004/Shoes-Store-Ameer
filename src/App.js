import Shoes from "./Component/Shoe";
import ClockTime from "./Component/Time";

function App() {    //Parent

  return (
    <div>
      <ClockTime />

      <h1>Shoes Store</h1>

      <Shoes
        companyname1="Adidas"
        Companysize1="32-47"
        Companyprice1="80$"
        companyname2="NIKE"
        Companysize2="30-46"
        Companyprice2="100$"
        companyname3="Reebok"
        Companysize3="32-47"
        Companyprice3="70$"
        companyname4="Tommy"
        Companysize4="32-46"
        Companyprice4="170$"
        companyname5="Filla"
        Companysize5="29-47"
        Companyprice5="65$"
      />
      <footer>
        <div className="Footer">
          All Rights Reserved - By Ameer Emran: Fullstack student developer-
          2022
        </div>
      </footer>
    </div>
  );
}
export default App