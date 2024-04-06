 import { NavLink } from "react-router-dom";

 export const NavBarLink = () => {
   const links = [
     { to: "/", text: "Home" },
     { to: "/about", text: "About" },
     { to: "/myInfo", text: "My Info" },
   ];

   return (
     <div className="card-nav">
       <nav>
         <h4>Menu</h4>
         <ul className="app-ul">
           {links.map(({ to, text }) => {
            return (
                <li key={to} className="app-li">
               <NavLink to={to}>{text}</NavLink>
             </li>
            )
             
           })}
         </ul>
       </nav>
     </div>
   );
 };